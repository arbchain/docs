---
id: spc
title: SPC contract
---
## createArbitrationResponse
Used for creating an arbitration response.

### Parameters
1. ```_documentHash``` - ```bytes32``` : keccak256 hash value of the original document
2. ```_documentIpfsHash``` - ```string``` : IPFS hash value of the uploaded document
3. ```_monetaryAmount``` - ```uint256``` : Monetary Amount for the procedure 
4. ```_crossClaim``` - ```bool``` : Indicates cross-claim status
5. ```_requestId``` - ```uint256``` : Arbitration Request Id
6. ```_claimId``` - ```uint256``` : Cross-claim id

```
function createArbitrationResponse(
    bytes32 _documentHash,
    string memory _documentIpfsHash,
    uint256 _monetaryAmount,
    bool _crossClaim,
    uint256 _requestId,
    uint256 _claimId
)
```
:::note
If _crossClaim is false then _claimId should be zero.
:::
---

## createClaim
Used for creating a claim. It can be called by any party involved in an arbitration.

### Parameters
1. ```_claimId``` - ```uint256``` : Claim id
2. ```_respondent```- ```address``` : Respondent address
3. ```_documentHash```- ```bytes32``` : keccak256 hash value of the original document
4. ```_documentIpfsHash```- ```string``` : IPFS hash value of the uploaded document
5. ```_description```- ```string``` : Description related to claim

```
function createClaim(
    uint256 _claimId,
    address _respondent,
    bytes32 _documentHash,
    string memory _documentIpfsHash,
    string memory _description
)
```
---

## createProcedureStatement
Used for creating a procedure statement for an arbitration. It is initiated by the party who calls for an 
arbitration. The respondent party can agree to this or generate a new procedure statement.

### Parameters
1. ```_parties``` - ```Party``` : An array of parties involved in procedure statement
2. ```_seat```- ```string``` : Seat to be used for arbitration
3. ```_language```- ```string``` : Language to be used in arbitration
4. ```_documentIpfsHash```- ```string``` : IPFS hash value of the uploaded document
5. ```_documentHash```- ```bytes32``` : keccak256 hash value of the original document

```
function createProcedureStatement(
    Party[] memory _parties,
    string memory _seat,
    string memory _language,
    string memory _documentIpfsHash,
    bytes32 _documentHash
)
```
---

## appointArbitrator
Used for appointing an arbitrator. It is initiated by arbitration court. 

### Parameters
1. ```_arbitratorAddress``` - ```address``` : Arbitrator appointed by the court
2. ```_requestId```- ```uint256``` : Arbitration request id

```
function appointArbitrator(address _arbitratorAddress, uint256 _requestId)
```
---

## challengeAppointment
Used for challenging an arbitrator appointment. It can be initiated by any party involved in an arbitration.

### Parameters
1. ```_arbitratorAddress``` - ```address``` : Arbitrator appointed by the court
2. ```_reason```- ```string``` : Reason of challenge

```
function challengeAppointment(address _arbitratorAddress, string memory _reason)
```
---

## revokeArbitrator
Used for revoking an arbitrator. It is initiated by arbitration court.

### Parameters
1. ```_challengeIndex``` - ```uint256``` : Challenge index

```
function revokeArbitrator(uint256 _challengeIndex)
```
---

## createStatement
Used for creating a statement. 

### Parameters
1. ```_parties``` - ```Party``` : An array of parties involved in statement
2. ```_stakeholder```- ```StakeHolder``` : StakeHolder involved in arbitration
3. ```_statementType```- ```StatementType``` : Type of statement
4. ```_subject```- ```string``` : Subject of statement
5. ```_documentHash```- ```bytes32``` : keccak256 hash value of the original document
6. ```_documentIpfsHash```- ```string``` : IPFS hash value of the uploaded document
```
function createStatement(
    Party[] memory _parties,
    StakeHolder _stakeholder,
    StatementType _statementType,
    string memory _subject,
    bytes32 _documentHash,
    string memory _documentIpfsHash
)
```
---

## submitWitness
Used for submitting witness involved in arbitration.

### Parameters
1. ```_witnessAddress``` - ```address``` : Witness address

```
function submitWitness(address _witnessAddress)
```
---

## appointExpert
Used for appointing an expert for arbitration.

### Parameters
1. ```_expertAddress``` - ```address``` : Expert address
2. ```_requestId```- ```uint256``` : Arbitration request id

```
function appointExpert(address _expertAddress, uint256 _requestId)
```
---

## issueAward
Used for generating an award.

### Parameters
1. ```_name``` - ```string``` : Name of recipient
2. ```_requestId```- ```uint256``` : Arbitration request id
3. ```_documentHash```- ```string``` : keccak256 hash value of the original document

```
function issueAward(
    string memory _name,
    uint256 _requestId,
    string memory _documentHash
)
```
---

## attachDocument
Used for uploading the document.

### Parameters
1. ```docHash``` - ```bytes32``` : keccak256 hash value of the original document
2. ```signers```- ```address[]``` : Signers who have to sign the document

```
function attachDocument(bytes32 docHash, address[] memory signers)
```
---

## signDocuments
Used for signing the document.

### Parameters
1. ```nonce``` - ```uint``` : Nonce to prevent replay attacks
2. ```signature```- ```bytes``` : Signed off chain by the initiator
3. ```documentHash``` - ```bytes32``` : keccak256 hash value of the original document

```
function signDocuments(
    uint nonce, 
    bytes memory signature, 
    bytes32 documentHash
)
```
---

## agreeProcedureStatement
Used for accepting the procedure statement by signing the procedure statement. It is used by respondent party.

### Parameters
1. ```nonce``` - ```uint``` : Nonce to prevent replay attacks
2. ```signature```- ```bytes``` : signed off chain by the initiator
3. ```documentHash``` - ```bytes32``` : keccak256 hash value of the original document

```
function agreeProcedureStatement(
    uint nonce, 
    bytes memory signature,
    bytes32 documentHash
)
```
---

## depositCost
Used for depositing the cost involved in arbitration.
### Parameters
1. ```_cost``` - ```uint256``` : Arbitration cost

```
function depositCost(uint256 _cost)
```
---

## setSeat
Used for seat selection for an arbitration.

### Parameters
1. ```_seat``` - ```string``` : Seat used for arbitration

```
function setSeat(string memory _seat)
```
---

## setLanguage
Used for language selection for an arbitration.

### Parameters
1. ```_language``` - ```string``` : Language used for arbitration

```
function setLanguage(string memory _language)
```
---

## getArbitratorLength
Returns total number of arbitrators appointed for an arbitration.

### Returns
```uint256```

```
function getArbitratorLength() public view returns (uint256)
```
---

## getResponseLength
Returns total number of response created.

### Returns
```uint256```

```
function getResponseLength() public view returns (uint256)
```
---

## getTotalProcedureStatements
Returns total number of procedure statements created by a party.

### Parameters
1. ```_userAddress```- ```address``` : Party address 

### Returns
```uint256```

```
function getTotalProcedureStatements(address _userAddress) public view returns (uint256) 
```
---

## witnessLength
Returns total number of witnesses involved in an arbitration.

### Returns
```uint256```

```
function witnessLength() public view returns (uint256)
```
---

## awardsLength
Returns total number of awards generated for an arbitration.

### Returns
```uint256```

```
function awardsLength() public view returns (uint256)
```
---

## getTotalClaims
Returns total number of claims generated by a particular party.

### Parameters
1. ```_userAddress```- ```address``` : Party address

### Returns
```uint256```

```
function getTotalClaims(address _userAddress) public view returns (uint256)
```
---

## getTotalStatements
Returns total number of statement generated by a particular party.

### Parameters
1. ```_userAddress```- ```address``` : Party address

### Returns
```uint256```

```
function getTotalStatements(address _userAddress) public view returns (uint256) 
```
---



