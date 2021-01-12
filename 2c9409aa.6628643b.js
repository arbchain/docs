(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{78:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return d}));var r=t(3),a=t(7),i=(t(0),t(97)),c={id:"signing-module",title:"Signing Module"},o={unversionedId:"signing-module",id:"signing-module",isDocsHomePage:!1,title:"Signing Module",description:"addDocument",source:"@site/docs/signing_module.md",slug:"/signing-module",permalink:"/signing-module",editUrl:"https://github.com/arbchain/docs/edit/master/docs/signing_module.md",version:"current",sidebar:"someSidebar",previous:{title:"Master contract",permalink:"/master-contract"}},l=[{value:"addDocument",id:"adddocument",children:[{value:"Parameters",id:"parameters",children:[]}]},{value:"addSigner",id:"addsigner",children:[{value:"Parameters",id:"parameters-1",children:[]}]},{value:"signDocument",id:"signdocument",children:[{value:"Parameters",id:"parameters-2",children:[]}]},{value:"getSignatures",id:"getsignatures",children:[{value:"Parameters",id:"parameters-3",children:[]},{value:"Returns",id:"returns",children:[]}]},{value:"isDocumentSigned",id:"isdocumentsigned",children:[{value:"Parameters",id:"parameters-4",children:[]},{value:"Returns",id:"returns-1",children:[]}]}],b={toc:l};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"adddocument"},"addDocument"),Object(i.b)("p",null,"Used for adding document to contract."),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"docHash")," - ",Object(i.b)("inlineCode",{parentName:"li"},"bytes32")," : keccak256 hash value of the original document"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"ipfsHash")," - ",Object(i.b)("inlineCode",{parentName:"li"},"bytes")," : IPFS hash value of the uploaded document"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"signers")," - ",Object(i.b)("inlineCode",{parentName:"li"},"address")," : Array of signers involved in document signing")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"function addDocument(\n    bytes32 docHash, \n    bytes memory ipfsHash, \n    address[] memory signers\n)\n")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"addsigner"},"addSigner"),Object(i.b)("p",null,"Used for adding signer to the document"),Object(i.b)("h3",{id:"parameters-1"},"Parameters"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"docHash")," - ",Object(i.b)("inlineCode",{parentName:"li"},"bytes32")," : keccak256 hash value of the original document"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"signers")," - ",Object(i.b)("inlineCode",{parentName:"li"},"address")," : Signer of document")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"function addSigner(bytes32 docHash, address signer)\n")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"signdocument"},"signDocument"),Object(i.b)("p",null,"Used for signing the document."),Object(i.b)("h3",{id:"parameters-2"},"Parameters"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"docHash")," - ",Object(i.b)("inlineCode",{parentName:"li"},"bytes32")," : keccak256 hash value of the original document"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"nonce")," - ",Object(i.b)("inlineCode",{parentName:"li"},"uint")," : Nonce to prevent replay attacks"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"_signature")," - ",Object(i.b)("inlineCode",{parentName:"li"},"bytes")," : Signed off chain by the initiator")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"function signDocument(\n    bytes32 docHash, \n    uint nonce, \n    bytes memory _signature\n)\n")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"getsignatures"},"getSignatures"),Object(i.b)("p",null,"Returns signatures of the document"),Object(i.b)("h3",{id:"parameters-3"},"Parameters"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"docHash")," - ",Object(i.b)("inlineCode",{parentName:"li"},"bytes32")," : Document hash value")),Object(i.b)("h3",{id:"returns"},"Returns"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Signature[] memory")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"function getSignatures(bytes32 docHash) public view returns(Signature[] memory)\n")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"isdocumentsigned"},"isDocumentSigned"),Object(i.b)("p",null,"Returns true if the document had been signed."),Object(i.b)("h3",{id:"parameters-4"},"Parameters"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"documentHash")," - ",Object(i.b)("inlineCode",{parentName:"li"},"bytes32")," : Document hash value")),Object(i.b)("h3",{id:"returns-1"},"Returns"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"bool")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"function isDocumentSigned(bytes32 documentHash) public view returns (bool)\n")),Object(i.b)("hr",null))}d.isMDXComponent=!0},97:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return p}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),d=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,p=u["".concat(c,".").concat(m)]||u[m]||s[m]||i;return t?a.a.createElement(p,o(o({ref:n},b),{},{components:t})):a.a.createElement(p,o({ref:n},b))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var b=2;b<i;b++)c[b]=t[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);