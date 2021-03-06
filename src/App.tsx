import React, { useCallback, useEffect, useState } from 'react';
import styled from "styled-components";
import { Button, Loader, Title, Text } from "@gnosis.pm/safe-react-components";
import { useSafe } from '@rmeissner/safe-apps-react-sdk';
import Web3 from "web3";


import erc20Abi from "./abis/Erc20";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import BN from 'bn.js'

export const web3Provider = process.env.REACT_APP_WEB3_PROVIDER_URL || "";
const web3: any = new Web3(web3Provider);

interface IApproval {
  token: string;
  spender: string;
}

interface IAllowance {
  token: string;
  symbol: string;
  spender: string;
  allowance: BN;
  decimals: BN;
}

const Container = styled.form`
  margin-bottom: 2rem;
  width: 100%;
  max-width: 480px;

  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;

const App: React.FC = () => {
  const safe = useSafe()
  const [fetching, setFetching] = useState(false)
  const [allowances, setAllowances] = useState(new Array<IAllowance>());
  const etherscanLink = safe.info.network === "rinkeby"? "https://rinkeby.etherscan.io/" : "https://etherscan.io/";

  const getAllowanceString = function(allowance:BN, decimals:BN) {
    const divisor = new BN(10).pow(decimals);
    const beforeDecimal = allowance.div(divisor);
    const afterDecimal  = allowance.mod(divisor);

    return beforeDecimal.toString() + "." + afterDecimal.toString();
  }

  useEffect(() => {
    fetchAllowances();
  },[]);

  const resetAllowance = useCallback(async (tokenAddress, spender) => {
    try {
      const erc20Contract = new web3.eth.Contract(erc20Abi, tokenAddress);
        console.log(safe.info.safeAddress);

        const safeTxHash = await safe.sendTransactions([
          {
            "to": tokenAddress,
            "value": "0",
            "data": erc20Contract.methods.approve(spender, 0).encodeABI()
          }
        ])
        console.log({safeTxHash})
        // const safeTx = await safe.loadSafeTransaction(safeTxHash)
        // console.log({safeTx})
      } catch (e) {
        console.error(e)
      }
  }, []);

  const fetchAllowances = useCallback(async () => {
    setFetching(true);
    const erc20Contract = new web3.eth.Contract(erc20Abi);

    // Get all Approval events
    const approvals = await erc20Contract.getPastEvents("Approval",
      {
        filter: { owner: safe.info.safeAddress },
        fromBlock: 0,
        toBlock: 'latest'
      });


    // Get unique approvals since we are gonna double check approvals anyway again.
    const uniqueApprovals = new Set<IApproval>();

    // TODO what if error

    approvals.forEach((approval: any) => {
      uniqueApprovals.add({ token: approval["address"], spender: approval["returnValues"][1] });
    });

    // convert to array to have array functions.
    const uniqueApprovalsArray = Array.from(uniqueApprovals);
    
    // Now get the current allowance for each one
    const allowances = new Array<IAllowance>();

    for await (const approval of uniqueApprovalsArray) {
      const tokenContract = new web3.eth.Contract(erc20Abi, approval.token);

      let allowance: BN = await tokenContract.methods.allowance(safe.info.safeAddress, approval.spender).call();
      allowance = new BN(allowance.toString());  // didn't work without oO

      // don't show zero balances
      if (allowance.isZero()) {
        continue
      }
      let decimals = await tokenContract.methods.decimals().call();
      decimals = new BN(decimals.toString());
      const symbol = await tokenContract.methods.symbol().call();

      
      allowances.push({
        token: approval.token,
        symbol: symbol,
        spender: approval.spender,
        allowance: allowance,
        decimals: decimals
      });
    }


    setFetching(false);
    setAllowances(allowances);
  }, [safe])

  return <Container>
    <Title size="sm">ERC20 Token allowances of your Safe</Title>
    {fetching ?
      <Loader size="md" />
      :
      <div>
        <Button size="lg" color="primary" onClick={fetchAllowances}>Refresh</Button>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
              <TableCell>
                </TableCell>
                <TableCell>
                  Token
                </TableCell>
                <TableCell>
                  Spender
                </TableCell>
                <TableCell>
                  Allowance
                </TableCell>

              </TableRow>
            </TableHead>
              <TableBody>
                {allowances.map((allowance: IAllowance, index) =>
                  <TableRow key={index}>
                     <TableCell>
                      <Button size="lg" color="primary" onClick={() => resetAllowance(allowance.token, allowance.spender)}> Reset</Button>
                    </TableCell>
                    <TableCell>
                      {/* TODO make etherscan link network agnostic */}
                      <a href={etherscanLink + "token/" + allowance.token} target="_blank">{allowance.symbol.toString()} </a>
                    </TableCell>
                    <TableCell>
                    <a href={etherscanLink + "address/" + allowance.spender} target="_blank">{allowance.spender} </a>
                    </TableCell>
                    <TableCell>
                      {getAllowanceString(allowance.allowance, allowance.decimals)}
                    </TableCell>

                  </TableRow>
                )}
              </TableBody>
    </Table>
    </TableContainer>

    </div>
  }
  </Container>
    };

export default App;
