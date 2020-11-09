(this["webpackJsonpsafe-app-allowance-checker"]=this["webpackJsonpsafe-app-allowance-checker"]||[]).push([[0],{1025:function(e,n){},1034:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(17),s=t.n(o),c=t(74),l=t(49),u=t(166),i=t.n(u),p=t(167),m=t(418),d=t.n(m),f=t(419),y=t.n(f);function b(){var e=Object(p.a)(["\n    html {\n        height: 100%\n    }\n\n    body {\n       height: 100%;\n       margin: 0px;\n       padding: 0px;\n    }\n\n    #root {\n        height: 100%;\n        padding-right: 0.5rem;\n    }\n\n    .MuiFormControl-root,\n    .MuiInputBase-root {\n        width: 100% !important;\n    }\n\n    @font-face {\n        font-family: 'Averta';\n        src: local('Averta'), local('Averta Bold'),\n        url(",") format('woff2'),\n        url(",") format('woff');\n    }\n"]);return b=function(){return e},e}var h=Object(c.createGlobalStyle)(b(),d.a,y.a),v=t(119),w=t.n(v),k=t(234),E=t(235),g=t(420),x=t(421),O=t.n(x),S=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function"},{inputs:[{name:"dutchAuction",type:"address"},{name:"owners",type:"address[]"},{name:"tokens",type:"uint256[]"}],payable:!1,type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"}],j=t(248),A=t(246),_=t(249),C=t(245),B=t(244),T=t(247),z=t(168),F=t.n(z);function I(){var e=Object(p.a)(["\n  margin-bottom: 2rem;\n  width: 100%;\n  max-width: 480px;\n\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-column-gap: 1rem;\n  grid-row-gap: 1rem;\n"]);return I=function(){return e},e}var M=new O.a("https://rinkeby.infura.io/v3/bd94a711d29d4fac8b6ad2476536cfcc"),R=c.default.form(I()),J=function(){var e=Object(u.useSafe)(),n=Object(a.useState)(!1),t=Object(E.a)(n,2),o=t[0],s=t[1],c=Object(a.useState)(new Array),i=Object(E.a)(c,2),p=i[0],m=i[1],d="rinkeby"===e.info.network?"https://rinkeby.etherscan.io/":"https://etherscan.io/";Object(a.useEffect)((function(){y()}),[]);var f=Object(a.useCallback)(function(){var n=Object(k.a)(w.a.mark((function n(t,a){var r,o;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r=new M.eth.Contract(S,t),console.log(e.info.safeAddress),n.next=5,e.sendTransactions([{to:t,value:"0",data:r.methods.approve(a,0).encodeABI()}]);case 5:o=n.sent,console.log({safeTxHash:o}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e,t){return n.apply(this,arguments)}}(),[]),y=Object(a.useCallback)(Object(k.a)(w.a.mark((function n(){var t,a,r,o,c,l,u,i,p,d,f,y,b,h,v,k;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(!0),t=new M.eth.Contract(S),n.next=4,t.getPastEvents("Approval",{filter:{owner:e.info.safeAddress},fromBlock:0,toBlock:"latest"});case 4:a=n.sent,r=new Set,a.forEach((function(e){r.add({token:e.address,spender:e.returnValues[1]})})),o=Array.from(r),c=new Array,l=!0,u=!1,n.prev=11,p=Object(g.a)(o);case 13:return n.next=15,p.next();case 15:return d=n.sent,l=d.done,n.next=19,d.value;case 19:if(f=n.sent,l){n.next=40;break}return y=f,b=new M.eth.Contract(S,y.token),n.next=25,b.methods.allowance(e.info.safeAddress,y.spender).call();case 25:if(h=n.sent,!(h=new F.a(h.toString())).isZero()){n.next=29;break}return n.abrupt("continue",37);case 29:return n.next=31,b.methods.decimals().call();case 31:return v=n.sent,v=new F.a(v.toString()),n.next=35,b.methods.symbol().call();case 35:k=n.sent,c.push({token:y.token,symbol:k,spender:y.spender,allowance:h,decimals:v});case 37:l=!0,n.next=13;break;case 40:n.next=46;break;case 42:n.prev=42,n.t0=n.catch(11),u=!0,i=n.t0;case 46:if(n.prev=46,n.prev=47,l||null==p.return){n.next=51;break}return n.next=51,p.return();case 51:if(n.prev=51,!u){n.next=54;break}throw i;case 54:return n.finish(51);case 55:return n.finish(46);case 56:s(!1),m(c);case 58:case"end":return n.stop()}}),n,null,[[11,42,46,56],[47,,51,55]])}))),[e]);return r.a.createElement(R,null,r.a.createElement(l.Title,{size:"sm"},"ERC20 Token allowances of your Safe"),o?r.a.createElement(l.Loader,{size:"md"}):r.a.createElement("div",null,r.a.createElement(l.Button,{size:"lg",color:"primary",onClick:y},"Refresh"),r.a.createElement(j.a,null,r.a.createElement(A.a,null,r.a.createElement(_.a,null,r.a.createElement(C.a,null,r.a.createElement(B.a,null),r.a.createElement(B.a,null,"Token"),r.a.createElement(B.a,null,"Spender"),r.a.createElement(B.a,null,"Allowance"))),r.a.createElement(T.a,null,p.map((function(e,n){return r.a.createElement(C.a,{key:n},r.a.createElement(B.a,null,r.a.createElement(l.Button,{size:"lg",color:"primary",onClick:function(){return f(e.token,e.spender)}}," Reset")),r.a.createElement(B.a,null,r.a.createElement("a",{href:d+"token/"+e.token,target:"_blank"},e.symbol.toString()," ")),r.a.createElement(B.a,null,r.a.createElement("a",{href:d+"address/"+e.spender,target:"_blank"},e.spender," ")),r.a.createElement(B.a,null,function(e,n){var t=new F.a(10).pow(n),a=e.div(t),r=e.mod(t);return a.toString()+"."+r.toString()}(e.allowance,e.decimals)))})))))))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.ThemeProvider,{theme:l.theme},r.a.createElement(h,null),r.a.createElement(i.a,{loading:r.a.createElement(r.a.Fragment,null,r.a.createElement(l.Title,{size:"md"},"Waiting for Safe..."),r.a.createElement(l.Loader,{size:"md"}))},r.a.createElement(J,null)))),document.getElementById("root"))},436:function(e,n,t){e.exports=t(1034)},472:function(e,n){},474:function(e,n){},594:function(e,n){},726:function(e,n){},728:function(e,n){},729:function(e,n){},735:function(e,n){},737:function(e,n){},755:function(e,n){},758:function(e,n){},773:function(e,n){},776:function(e,n){},787:function(e,n){}},[[436,1,2]]]);
//# sourceMappingURL=main.ce8fdc47.chunk.js.map