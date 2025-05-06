---
title: Boyce-Codd Normal Form (BCNF)
tags:
  - backend
  - database
  - normalisation
  - cs2102
date: 2025-05-07
---
## Definition
A relation $R$ is in **BCNF** if, for **every non-trivial and decomposed functional dependency** $X → Y$, the **LHS (X) is a superkey** of $R$.

>[!note]
>- ✅ All RHS attributes must depend only on superkeys
>- ❌ If RHS depends on non-superkey ⇒ LHS can repeat ⇒ **Redundancy** arises


## BCNF Checking Algorithm (Conceptual)
1.	List all non-trivial and decomposed FDs.
2.	Check if each FD has a superkey on its LHS.
3.	If all FDs pass this test, then the relation is in BCNF.

### Shortcut: “More but not all” condition
If any **closure of a subset X** yields more than X but **not all attributes** of R, then:
•	X is **not a superkey**
•	Hence, **violates BCNF**

This condition helps you avoid checking all FDs manually.

## Pros and Cons

### BCNF Pros
1.	Eliminates update, insertion, and deletion anomalies
2.	Reduces redundancy
3.	Lossless join: Original table can be reconstructed from decomposed tables

### BCNF Cons
1.	FDs may not be preserved after decomposition. Enforcing original constraints may no longer be possible directly.


## BCNF Decomposition Algorithm

Goal: **Remove BCNF violations recursively**

Step-by-step:
1.	Find $X ⊆ R$ such that $X⁺$ satisfies **“more but not all”** condition
2.	Decompose R into:
	- $R₁ = X⁺$
	- $R₂ = X ∪ (R  –  X⁺)$
3.	Repeat this process on R₁ and R₂ recursively, using projected FDs

>[!note]
> Each decomposition removes at least one BCNF violation.
> - Final result is not unique – depends on order of choices
> - If a relation has only 2 attributes, it is always in BCNF 

### Example

Given:
- Relation: $R(A, B, C, D)$
- Functional Dependencies (FDs):
	1.	$A → B$
	2.	$B → C$

**Step 1**: Find violating FD
$A+ = {A, B, C}$ → More than A, but not all → **violates BCNF**


**Step 2:** Decompose R
- $R1(A, B, C)$ (attributes in $A+$)
- $R2(A, D)$ ($A$ + rest)

**Step 3:** Check BCNF
- $R2$: No violating FD → ✅
- $R1$: $B → C$, but $B$ is not a superkey → ❌

**Step 4:** Decompose R1
- B+ = {B, C} → violates BCNF

Decompose:
- R3(B, C)
- R4(A, B)


✅ Final BCNF Tables:
- R2(A, D)
- R3(B, C)
- R4(A, B)

## Closure Projection for Decomposition

When decomposing $R$ into $R₁$ and $R₂$:
- To find the FDs for $R₁$, use the original FDs but ignore attributes not in $R₁$
- Do the same for $R₂$


## Lossless Join Property

To verify that decomposition is lossless:
1.	Compute common attributes of the decomposed tables
2.	Check if the closure of those attributes contains all attributes of one of the relations

>[!note]
>- If yes → lossless join is guaranteed
>- Also can test: does natural join of all decompositions yield the original relation?

## Dependency Preservation

Let:
- $S$ = original set of FDs
- $S′$ = FDs preserved across all decomposed tables

To check if dependency is preserved, confirm $S ≡ S$′,
- For every FD in $S$, can it be derived from $S$′?
- For every FD in $S$′, can it be derived from $S$?


>[!Trick]
>If a decomposed relation contains all attributes of $X$ and $Y$, then $X → Y$ is preserved in that relation.


### Dependency Preservation Algorithm
1.	For each decomposed relation $R$, compute closure of all subsets of attributes
2.	Find all implied FDs in $R$
3.	Combine them to form $S$′
4.	Check if $S$ and $S$′ are equivalent
