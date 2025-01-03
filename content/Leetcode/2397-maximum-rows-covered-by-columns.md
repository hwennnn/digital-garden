---
title: 2397. Maximum Rows Covered by Columns
draft: false
tags: 
  - array
  - backtracking
  - bit-manipulation
  - matrix
  - enumeration
date: 2022-09-04
---

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-blue.svg)

## Description

---
<p>You are given an <code>m x n</code> binary matrix <code>matrix</code> and an integer <code>numSelect</code>.</p>

<p>Your goal is to select exactly <code>numSelect</code> <strong>distinct </strong>columns from <code>matrix</code> such that you cover as many rows as possible.</p>

<p>A row is considered <strong>covered</strong> if all the <code>1</code>&#39;s in that row are also part of a column that you have selected. If a row does not have any <code>1</code>s, it is also considered covered.</p>

<p>More formally, let us consider <code>selected = {c<sub>1</sub>, c<sub>2</sub>, ...., c<sub>numSelect</sub>}</code> as the set of columns selected by you. A row <code>i</code> is <strong>covered</strong> by <code>selected</code> if:</p>

<ul>
	<li>For each cell where <code>matrix[i][j] == 1</code>, the column <code>j</code> is in <code>selected</code>.</li>
	<li>Or, no cell in row <code>i</code> has a value of <code>1</code>.</li>
</ul>

<p>Return the <strong>maximum</strong> number of rows that can be <strong>covered</strong> by a set of <code>numSelect</code> columns.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2022/07/14/rowscovered.png" style="width: 240px; height: 400px;" /></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">matrix = [[0,0,0],[1,0,1],[0,1,1],[0,0,1]], numSelect = 2</span></p>

<p><strong>Output:</strong> <span class="example-io">3</span></p>

<p><strong>Explanation:</strong></p>

<p>One possible way to cover 3 rows is shown in the diagram above.<br />
We choose s = {0, 2}.<br />
- Row 0 is covered because it has no occurrences of 1.<br />
- Row 1 is covered because the columns with value 1, i.e. 0 and 2 are present in s.<br />
- Row 2 is not covered because matrix[2][1] == 1 but 1 is not present in s.<br />
- Row 3 is covered because matrix[2][2] == 1 and 2 is present in s.<br />
Thus, we can cover three rows.<br />
Note that s = {1, 2} will also cover 3 rows, but it can be shown that no more than three rows can be covered.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2022/07/14/rowscovered2.png" style="height: 250px; width: 84px;" /></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">matrix = [[1],[0]], numSelect = 1</span></p>

<p><strong>Output:</strong> <span class="example-io">2</span></p>

<p><strong>Explanation:</strong></p>

<p>Selecting the only column will result in both rows being covered since the entire matrix is selected.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == matrix.length</code></li>
	<li><code>n == matrix[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 12</code></li>
	<li><code>matrix[i][j]</code> is either <code>0</code> or <code>1</code>.</li>
	<li><code>1 &lt;= numSelect&nbsp;&lt;= n</code></li>
</ul>


## Solution

---
### Python
``` py title='maximum-rows-covered-by-columns'
class Solution:
    def maximumRows(self, mat: List[List[int]], k: int) -> int:
        rows, cols = len(mat), len(mat[0])
        res = 0
        
        A = list(range(cols))

        for mask in range(1, 1 << cols):
            if mask.bit_count() != k: continue
            
            filled = 0
            
            for row in mat:
                ones = row.count(1)
                curr = 0
                
                for j in range(cols):
                    if mask & (1 << j) > 0 and row[j] == 1:
                        curr += 1
                
                if curr == ones:
                    filled += 1
                
            res = max(res, filled)
            
        return res

```

