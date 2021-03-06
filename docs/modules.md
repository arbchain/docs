---
id: modules
title: Modules
---

There are several modules in the Arbchain implementation. Let's point out them here:
These modules can be an independent offchain service or part of the onchain contract.

* Document signing
* Offchain document store 
* Award document generator 
* Private channel for data exchange
* Notification service
* Onchain/ Offchain payment service

## Document signing
Document signing provides a binding obligation between the signing parties. Unlike the traditional document signing,
digital (electronic) signing can guarantee the integrity and authenticity of the signed document.

A digitally signed document is different from the electoronically signed document since a digital signature can be generated
and verified without a third party service with the help of digital identity provided by the cryptographic keys. A decentralized ledger
can further enhance this process by maintaining the reference of the signed document in a tamper proof manner.

Document signing will have the following steps:

1. **User uploads the document**:
    
    Any document to be signed can be uploaded to the platform. The user mentions all the signing parties (registered identity).
    The information of the signing parties will be updated on the contract (A contract will be instantiated if it is an arbitration agreement document).
    
2. **Signing parties sign the document**:
    
    The signing parties can review and sign the document with their private key of the registered identity.
    A signing and verifying process is depicted in the below diagram.
    
    ![signing-verfying](https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2019/03/16044236/Blockchain_Document_Signing.png)
    
    The digital signature of the document will be updated on the contract. The signed document will be archived on the decentralized storage (IPFS)
    for later reference. 
    
3. **Document verification**:
    
    Any user with a signed document may verify the document for it's authenticity. Any tampering with the 
    document will be detected during this process and thus ensuring the integrity of the document.
    
    ![verification](https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2019/03/16044410/Blockchain_Document_Signing_DiagramAlteration.svg)
    
Reference projects:

   * [Accord Project](https://www.accordproject.org/)
   * [Open Sig](https://github.com/opensig/opensig-lib)
   * [Adobe Sign](https://www.adobe.com/content/dam/acom/en/security/pdfs/adobe-sign-technical-overview-ue.pdf)

    
## Off chain document store 

Document store will make sure that all the timesptamped documents are archived in a decentralized storage 
network such as IPFS.

Document store will have the following steps:

1. **Time  stamping**

    Whenever a document is uploaded by Claimant, Respondent, Court, Arbitrators to the platform, it has to be timestamped
    and updated in the agreement/ procedure contract.
    
2. **Archiving the documents in decentralized storage**

    The documents will be archived to the storage with a reference mentioned in the agreement/ procedure contract.

3. **Access the documents** 

     The documents should be accessible with the help of timestamped reference on the contracts.

## Private channel for document/ data exchange

List of private events during the arbitration procedure:


## Notification service

Notification service to notify the parties during the arbitration procedure events.

## Onchain/ Offchain payment service

Payment service to collect arbitration cost and update the information on contracts

## Award document generator 

An award generator that parses the agreement/ procedure contracts to generate the final award document.


:::note
Will be updated soon!
:::
