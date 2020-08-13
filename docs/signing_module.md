---
id: signing-module
title: Signing Module
---
## addDocument
Used for adding document to contract.

### Parameters
1. ```docHash``` - ```bytes32``` : keccak256 hash value of the original document
2. ```ipfsHash``` - ```bytes``` : IPFS hash value of the uploaded document
3. ```signers``` - ```address``` : Array of signers involved in document signing
```
function addDocument(
    bytes32 docHash, 
    bytes memory ipfsHash, 
    address[] memory signers
)
```

---

## addSigner
Used for adding signer to the document

### Parameters
1. ```docHash``` - ```bytes32``` : keccak256 hash value of the original document
2. ```signers``` - ```address``` : Signer of document

```
function addSigner(bytes32 docHash, address signer)
```
---

## signDocument
Used for signing the document.

### Parameters
1. ```docHash``` - ```bytes32``` : keccak256 hash value of the original document
2. ```nonce``` - ```uint``` : Nonce to prevent replay attacks
3. ```_signature``` - ```bytes``` : Signed off chain by the initiator

```
function signDocument(
    bytes32 docHash, 
    uint nonce, 
    bytes memory _signature
)
```
---
    
## getSignatures
Returns signatures of the document

### Parameters
1. ```docHash``` - ```bytes32``` : Document hash value

### Returns
```Signature[] memory```

```
function getSignatures(bytes32 docHash) public view returns(Signature[] memory)
```
---

## isDocumentSigned
Returns true if the document had been signed.

### Parameters
1. ```documentHash``` - ```bytes32``` : Document hash value

### Returns
```bool```

```
function isDocumentSigned(bytes32 documentHash) public view returns (bool)
```
---



