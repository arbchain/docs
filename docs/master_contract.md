---
id: master-contract
title: Master contract
---
## createUser
Used for creating new user.

### Parameters
1. ```_name``` - ```string``` : User name
2. ```_zipCode``` - ```string``` : ZipCode
3. ```_contactNumber``` - ```string``` : Contact number
4. ```_orionPublicKey``` - ```string``` : Orion Public key
5. ```_role``` - ```UserSchema.role``` : User Role

```
function createUser(
    string memory _name,
    string memory _zipCode,
    string memory _contactNumber,
    string memory _orionPublicKey,
    UserSchema.Role _role
)
```
:::note Type of users:
1. Party
2. Arbitrator
3. ArbitralCourt
:::
---

## createArbitrationRequest
Used for creating an arbitration request.

### Parameters
1. ```_respondent``` - ```address``` : Respondent address
2. ```_agreementContract``` - ```address``` : Agreement contract address
3. ```_documentHash``` - ```bytes32``` : keccak256 hash value of the original document

```
function createArbitrationRequest(
    address _respondent,
    address _agreementContract,
    bytes32 memory _doumentHash
)
```
---
    
## getTotalRequests
Returns total number of arbitration requests created by a particular party.

### Parameters
1. ```_userAddress``` - ```address``` : Party address

### Returns
```uint256```

```
function getTotalRequests(address _userAddress) public view returns (uint256)
```
---



