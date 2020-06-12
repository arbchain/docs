---
id: architecture
title: Architecture
---

## Entities/ Actors

The entities and the architecture for the POC is based on the [LCIA](https://lcia.org) arbitration.

Entities of Arbchain are all the entities involved in the arbitration procedure.
They form the nodes in the Hyperledger Besu network. A few of the default nodes of Arbchain are:

* Arbitral Court
* Registrar
* Claimant
* Respondent
* Tribunal

## High level architecture

![gitfunded-architecture.png](/img/highlevel-architecture.png)
 

### High level Arbchain actions involve:

* The claimant files the request along with agreement, procedure details

* Claimant submits any documents which will be time stamaped and archived

* Respondent reviews/ signs/ makes further claims

* Respondent submits any documents which will be time stamped and archived

* Tribunal is formed by the court based on the agreement terms

* Parties select arbitration parameters (seat, language etc)

* Submit written statements, witness details

* Parties deposit arbitration cost in advance

* Tribunal announces the awards


Refer the sequence diagram of the detailed Arbchain actions:

![sequence-diagram.png](/img/sequence-diagram.png)


## Stake holder interfaces

### The Claimant:
The party who creates the initial claim

* The claimant will create an account in the Arbchain platform (Party will receive an account with nodes deployed).

* The claimant can login to the platform and create a new dispute claim.

* The claimant should be able to sign the agreement, share documents, exchange written statement (privately with parties and tribunals)

* Option to nominate arbitrators fo the tribunal

* Option to select arbitration seat, language

* Option to submit witnesses

* Option to submit expert details

* Deposit funds (Arbitration cost) to the court

* Review, Download and send correction notice for the awards

### The Respondent
The party who responds to the claim

* The respondent will create an account in the Arbchain platform after an invitation for the dispute (Party will receive an account with nodes deployed).

* The respondent can login to the platform and respond to the claim

* The respondent should be able to sign the agreement, share documents, exchange written statement (privately with parties and tribunals)

* Option to nominate arbitrators fo the tribunal

* Option to select arbitration seat, language

* Option to submit witnesses

* Option to submit expert details

* Deposit funds (Arbitration cost) to the court

* Review, Download and send correction notice for the awards

## The Tribunal

* The arbitrator will create an account in the Arbchain platform

* The arbitrator will be able to view the open claims after getting appointed

* Option to communicate with the parties and court

*  Option to finalize the arbitration seat, language

* Option to view:
    * The hearing documents, data, written statements from the **parties** 
    * Witness testimony from **witnesses**
    * Docs and details submitted by **experts**
    
* Option to compile the detailed **award** and send it to the parties

* Option to submit the arbitration cost
    
## The Arbitral Court

* The arbitral court will create an account in the Arbchain platform

* Option to perform written communication with the parties

* Option to decide on the emergency arbitration and appoint arbitrators

* Manage the funds deposited by the parties

## The Registrar

* The registrar will create an account in the Arbchain platform

* Option to view all the communication from the parties (Acts as a mediator)

:::note
The role of Registrar in the Arbchain platform is debatable for now as it isn't responsible for unique operations
:::




## Solution architecture
The following technical architecture diagram consists of all the protocols and services used by Arbchain. 

![gitfunded-architecture.png](/img/solution-architecture.png)


## Contract architecture

:::note
Will be updated soon!
:::











