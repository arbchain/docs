(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return s}));var a=n(2),i=n(9),c=(n(0),n(169)),r={id:"modules",title:"Modules"},o={id:"modules",isDocsHomePage:!1,title:"Modules",description:"There are several modules in the Arbchain implementation. Let's point out them here:",source:"@site/docs/modules.md",permalink:"/docs/modules",editUrl:"https://github.com/arbchain/docs/edit/master/docs/modules.md",sidebar:"someSidebar",previous:{title:"Development road map",permalink:"/docs/roadmap"},next:{title:"Getting started",permalink:"/docs/getting-started"}},d=[{value:"Document signing",id:"document-signing",children:[]},{value:"Off chain document store",id:"off-chain-document-store",children:[]},{value:"Private channel for document/ data exchange",id:"private-channel-for-document-data-exchange",children:[]},{value:"Notification service",id:"notification-service",children:[]},{value:"Onchain/ Offchain payment service",id:"onchain-offchain-payment-service",children:[]},{value:"Award document generator",id:"award-document-generator",children:[]}],l={rightToc:d};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"There are several modules in the Arbchain implementation. Let's point out them here:\nThese modules can be an independent offchain service or part of the onchain contract."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Document signing"),Object(c.b)("li",{parentName:"ul"},"Offchain document store "),Object(c.b)("li",{parentName:"ul"},"Award document generator "),Object(c.b)("li",{parentName:"ul"},"Private channel for data exchange"),Object(c.b)("li",{parentName:"ul"},"Notification service"),Object(c.b)("li",{parentName:"ul"},"Onchain/ Offchain payment service")),Object(c.b)("h2",{id:"document-signing"},"Document signing"),Object(c.b)("p",null,"Document signing provides a binding obligation between the signing parties. Unlike the traditional document signing,\ndigital (electronic) signing can guarantee the integrity and authenticity of the signed document."),Object(c.b)("p",null,"A digitally signed document is different from the electoronically signed document since a digital signature can be generated\nand verified without a third party service with the help of digital identity provided by the cryptographic keys. A decentralized ledger\ncan further enhance this process by maintaining the reference of the signed document in a tamper proof manner."),Object(c.b)("p",null,"Document signing will have the following steps:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"User uploads the document"),":"),Object(c.b)("p",{parentName:"li"},"Any document to be signed can be uploaded to the platform. The user mentions all the signing parties (registered identity).\nThe information of the signing parties will be updated on the contract (A contract will be instantiated if it is an arbitration agreement document).")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Signing parties sign the document"),":"),Object(c.b)("p",{parentName:"li"},"The signing parties can review and sign the document with their private key of the registered identity.\nA signing and verifying process is depicted in the below diagram."),Object(c.b)("p",{parentName:"li"},Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2019/03/16044236/Blockchain_Document_Signing.png",alt:"signing-verfying"}))),Object(c.b)("p",{parentName:"li"},"The digital signature of the document will be updated on the contract. The signed document will be archived on the decentralized storage (IPFS)\nfor later reference. ")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Document verification"),":"),Object(c.b)("p",{parentName:"li"},"Any user with a signed document may verify the document for it's authenticity. Any tampering with the\ndocument will be detected during this process and thus ensuring the integrity of the document."),Object(c.b)("p",{parentName:"li"},Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2019/03/16044410/Blockchain_Document_Signing_DiagramAlteration.svg",alt:"verification"}))))),Object(c.b)("p",null,"Reference projects:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.accordproject.org/"}),"Accord Project")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/opensig/opensig-lib"}),"Open Sig")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.adobe.com/content/dam/acom/en/security/pdfs/adobe-sign-technical-overview-ue.pdf"}),"Adobe Sign"))),Object(c.b)("h2",{id:"off-chain-document-store"},"Off chain document store"),Object(c.b)("p",null,"Document store will make sure that all the timesptamped documents are archived in a decentralized storage\nnetwork such as IPFS."),Object(c.b)("p",null,"Document store will have the following steps:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Time  stamping")),Object(c.b)("p",{parentName:"li"},"Whenever a document is uploaded by Claimant, Respondent, Court, Arbitrators to the platform, it has to be timestamped\nand updated in the agreement/ procedure contract.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Archiving the documents in decentralized storage")),Object(c.b)("p",{parentName:"li"},"The documents will be archived to the storage with a reference mentioned in the agreement/ procedure contract.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Access the documents")," "),Object(c.b)("p",{parentName:"li"}," The documents should be accessible with the help of timestamped reference on the contracts."))),Object(c.b)("h2",{id:"private-channel-for-document-data-exchange"},"Private channel for document/ data exchange"),Object(c.b)("p",null,"List of private events during the arbitration procedure:"),Object(c.b)("h2",{id:"notification-service"},"Notification service"),Object(c.b)("p",null,"Notification service to notify the parties during the arbitration procedure events."),Object(c.b)("h2",{id:"onchain-offchain-payment-service"},"Onchain/ Offchain payment service"),Object(c.b)("p",null,"Payment service to collect arbitration cost and update the information on contracts"),Object(c.b)("h2",{id:"award-document-generator"},"Award document generator"),Object(c.b)("p",null,"An award generator that parses the agreement/ procedure contracts to generate the final award document."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Will be updated soon!"))))}s.isMDXComponent=!0}}]);