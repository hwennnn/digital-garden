---
title: Functional Dependencies
tags:
  - backend
  - database
  - normalisation
  - cs2102
date: 2025-05-06
---
## Introduction
In database design, a single ER diagram can translate into multiple relational schemas, but not all schemas are created equal. Some may result in redundancy, while others promote efficient and consistent data storage.

To systematically choose or refine schemas, we use the concept of normal forms—a set of rules to guide us toward better designs. This leads us to an important tool in normalisation: Functional Dependencies (FDs).

## Motivation

### Why do we need to normalise?

Relational schemas can often store redundant data. This redundancy introduces various data anomalies:
1.	**Update Anomaly:** Changing a piece of data in one place but forgetting another.
2.	**Deletion Anomaly:** Losing valuable data when deleting a row.
3.	**Insertion Anomaly:** Being unable to insert data due to missing required (e.g., primary key) values.

Example:

| HomeAddress | PhoneNumber | NRIC | Name  |
| ----------- | ----------- | ---- | ----- |
| Jurong East | 67899876    | 1234 | Alice |
| Jurong East | 83848384    | 1234 | Alice |
| Pasir Ris   | 98765432    | 5678 | Bob   |

Here, Alice’s address is repeated, leading to:
- Redundancy
- Update inconsistency if one row is changed but not the other

### Solution: Decomposition

Split into two separate tables:

#### NRIC Info

| NRIC | Name  | HomeAddress |
| ---- | ----- | ----------- |
| 1234 | Alice | Jurong East |
| 5678 | Bob   | Pasir Ris   |


#### Phone Info

| PhoneNumber | NRIC |
| ----------- | ---- |
| 67899876    | 1234 |
| 83848384    | 1234 |
| 98765432    | 5678 |


This resolves anomalies by avoiding data repetition.


## Normal Forms (Overview)

Normal forms are formal guidelines to assess and refine schema designs. They are built upon the concept of functional dependencies and help:
- Eliminate redundancy
- Prevent anomalies
- Ensure consistent data representation

We use normalisation—a step-by-step decomposition guided by FDs and keys—to bring schemas into higher normal forms.

## Functional Dependencies (FD)

### Definition

A functional dependency A → B holds in a relation R if for any two tuples with the same A value, they must have the same B value.

Notation:
- $X → Y$ means X functionally determines Y
- X and Y can be sets of attributes

Example:
- NRIC → Name (Each NRIC uniquely identifies a name)
- Matric_Number → Degree
- Postal_Code → Unit_Number

**Real-life Rule-Based FD:**

If each shop sells only one product:
- $ShopID → ProductID$

**Important Notes:**
- FDs depend on the meaning of data and business rules, not just table structure
- FDs may or may not hold in every dataset even with the same columns

#### More example
The table is given as`Purchase( CustomerID, ProductID, ShopID, Price, Date )`

Requirement: No shop should sell the same product to the same customer on the same date at two different prices

>[!note]
>One trick is to come up with rows of records that violates the requirements, then group the columns with same attributes on the `LHS` and the rest on the `RHS`.

Below is an example of records that violate the FDs,

| ShopID | ProductID | CustomerID | Date | Price  |
| ------ | --------- | ---------- | ---- | ------ |
| s1     | p1        | c1         | d1   | price1 |
| s1     | p1        | c1         | d1   | price2 |

Based on the trick, the FD implied is $CustomerID, ProductID, ShopID, Date → Price$

### Reasoning with FDs: Armstrong’s Axioms

To deduce all possible FDs implied by a given set, we use Armstrong’s Axioms—a sound and complete set of inference rules for FDs.

The Axioms:
1.	**Reflexivity:** If Y ⊆ X, then X → Y
	(Subset rule: a set determines any of its subsets)
2.	**Augmentation:** If X → Y, then XZ → YZ for any Z
	(Add the same attributes to both sides)
3.	**Transitivity:** If X → Y and Y → Z, then X → Z
	(FDs can be chained together)
4.	**Union:** If X → Y and X → Z, then X → YZ
5.	**Decomposition:** If X → YZ, then X → Y and X → Z
6.	**Pseudo-transitivity:** If X → Y and YZ → W, then XZ → W

Example:

Given FDs:
- A → B
- B → C

Then by **transitivity**, A → C.
Using **augmentation**, AB → CB.

These rules are used when computing closures, candidate keys, and checking schema equivalence.
### Attribute Closure

The closure of a set of attributes X, denoted X⁺, is the set of attributes that are functionally determined by X using a given set of FDs.

Why do we need closures?

To:
- Test if a functional dependency X → Y holds
- Determine if X is a candidate key (if X⁺ contains all attributes in the relation)
- Help decompose schemas correctly in normalization

How to Compute X⁺:
- Start with X⁺ = X
- Apply FDs repeatedly: if LHS ⊆ X⁺, then add RHS to X⁺
- Repeat until no new attributes can be added

#### Example

Given:
- $R(A, B, C, D)$
- F = { $A → B, B → C, C → D$ }

To compute A⁺:
- Start: A⁺ = {$A$}
- $A → B$ ⇒ add B: $A⁺$ = {$A, B$}
- $B → C$ ⇒ add C: $A⁺$ = {$A, B, C$}
- $C → D$ ⇒ add D: $A⁺$ = {$A, B, C, D$}

Thus, $A⁺$ = {$A, B, C, D$}, so $A$ is a candidate key.

>[!note]
>**Superkeys** are a set of attributes in a table that decides all other attributes.
>**Keys**/**candidate keys** are **superkeys** that is **minimal**.

#### Small Trick to find keys

- A table $R(A, B, C, D)$
- $AB→C, AD→B, B→D$
- Notice that $A$ does not appear in the right hand side of any functional dependencies
- In that case, $A$ must be in every key
- Keys of $R$: $AB$, $AD$ 
- In general, if an attribute that does not appear in the right hand side of any FD, then it must be in every key
#### Prime Attributes
If an attribute appears in a key, then it is a prime attribute. Otherwise, it is a non-prime attribute.