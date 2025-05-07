---
title: Relational Algebra
tags:
  - backend
  - database
  - cs2102
date: 2025-05-07
---
## Introduction
**Relational algebra** is a formal query language used to manipulate and retrieve data from relational databases using mathematical set-based operations.

## Core Operators

### Selection (σ)
- Syntax: $σ[c](R)$
- Meaning: Selects rows (tuples) in relation $R$ that satisfy **condition c**
- Properties:
	- Output schema = input schema
	- Output may have fewer rows
	- **Condition** c must use attributes from R only

### Projection (π)
- Syntax: $π[l](R)$
- Meaning: Keeps only specified attributes (columns) in list $l$, in order
- Properties:
	- May remove duplicate rows (relations are sets)
	- No duplicate attributes or expressions allowed in $l$
	- $l$ must reference attributes from $R$
### Renaming (ρ)
- Syntax: $ρ[ℜ](R)$
- Meaning: Renames attributes in R using mapping $ℜ: {B₁ ← A₁, B₂ ← A₂, ...}$
- Properties:
	- Only attribute names change; data and column order remain unchanged
	- No duplicate target names
	- No attribute renamed more than once

## Set Operators

### Union Compatibility

Relations $R$ and $S$ are **union-compatible** if:
- They have the **same number of attributes**
- Corresponding attributes have **same or compatible domains**
- **Attribute order matters**

### Cross Product (Cartesian Product)
- Syntax: $R × S$
- Meaning: Combines every tuple of $R$ with every tuple of $S$
- Output: All attributes of $R$ followed by all attributes of $S$
- Size: $|R × S| = |R| × |S|$
- ⚠️ Attribute names must be unique across $R$ and $S$
- Often followed by selection + projection to refine the result

## Join Operators

Joins combine **cross product** + **selection** + **projection** for meaningful combinations of related tuples.

### Theta Join (θ-join)
- Syntax: $R ⋈[θ] S = σ[θ](R × S)$
- General condition-based join

### Equi Join
- Special case of $θ$-join where $θ$ only involves **equality ($=$)**

### Natural Join
- Syntax: $R ⋈ S$
- Joins on **all common attributes** (same name and domain)
- **Common columns appear only once**
- If no common attributes → behaves like cross product

### Outer Joins

Include unmatched tuples from one or both relations.
1.	Left Outer Join ($R ⟕ S$): All tuples from $R$ + matched from $S$
2.	Right Outer Join ($R ⟖ S$): All tuples from $S$ + matched from $R$
3.	Full Outer Join ($R ⟗ S$): All tuples from both, matched or not
4.	Natural Outer Joins: Apply outer join semantics using natural join criteria
