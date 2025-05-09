---
title: Third Normal Form (3NF)
tags:
  - backend
  - database
  - normalisation
  - cs2102
date: 2025-05-07
---

## Definition

A relation $R$ is in **Third Normal Form (3NF)** if, for **every non-trivial and decomposed FD** $X → Y$, at least one of the following holds:
1.	**X is a superkey,** or
2.	**Each attribute in Y is a prime attribute** (i.e., appears in some candidate key)

>[!note]
>- ✅ 3NF allows certain non-superkey dependencies if RHS is “safe”
>- ❌ Violates 3NF if a non-superkey determines a non-prime attribute ⇒ possible redundancy

## 3NF Checking Algorithm (Conceptual)
1.	Derive **candidate keys** of the relation.
2.	For each n**on-trivial, decomposed FD**:
	- Check if **LHS is a superkey,** OR
	- **All RHS attributes are prime**
3.	If all FDs satisfy either **condition** → relation is in **3NF**

> [!tip]
> 3NF is **more lenient** than BCNF:
>- All BCNF relations are in 3NF
>- Not all 3NF relations are in BCNF


## Pros and Cons

### 3NF Pros
1.	Reduces redundancy (though not as much as BCNF)
2.	Ensures **lossless join**
3.	**Preserves all functional dependencies**

### 3NF Cons
1.	May still allow some redundancy
2.	Possible update/delete anomalies in **rare edge cases**


## 3NF Decomposition Algorithm

Goal: **Decompose to 3NF while preserving all FDs**

Step-by-step:
1.	Compute a **minimal basis** (aka canonical cover) for the set of FDs.
2.	Group FDs with the **same LHS**.
3.	Create one relation for each FD group:
	- Each relation contains LHS ∪ RHS
4.	Ensure **at least one relation contains a candidate key** of the original relation.
	- If not, add a separate relation containing any candidate key.
5.	Remove **redundant relations** (i.e., subset of another relation).

> [!note]
> Decomposition is single-layer and linear. All FDs in minimal basis will be preserved.

## Minimal Basis / Minimal Cover

A **minimal basis** is a simplified, equivalent set of FDs that satisfies:
1.	All FDs are **non-trivial and decomposed** (RHS is a single attribute)
2.	No FD can be removed without losing information
3.	No attribute in any LHS is redundant

### Minimal Basis Algorithm
1.	**Decompose** all FDs: ensure RHS is single-attribute
2.	**Minimize LHS:**
	- Try removing each attribute in LHS
	- If closure of remaining attributes still gives RHS → attribute is redundant
3.	**Remove redundant FDs:**
	- Try removing each FD
	- If remaining FDs can still derive it → it’s redundant

>[!trick]
>If all FDs have different RHS attributes, none can be removed in step 3.
