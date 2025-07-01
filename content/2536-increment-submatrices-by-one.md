---
title: 2536. Increment Submatrices by One
draft: false
tags: 
  - leetcode-medium
  - array
  - matrix
  - prefix-sum
  - weekly-contest-328
  - contest-question
date: 2023-01-16
---

[Problem Link](https://leetcode.com/problems/increment-submatrices-by-one/)

## Description

---
<p>You are given a positive integer <code>n</code>, indicating that we initially have an <code>n x n</code>&nbsp;<strong>0-indexed</strong> integer matrix <code>mat</code> filled with zeroes.</p>

<p>You are also given a 2D integer array <code>query</code>. For each <code>query[i] = [row1<sub>i</sub>, col1<sub>i</sub>, row2<sub>i</sub>, col2<sub>i</sub>]</code>, you should do the following operation:</p>

<ul>
	<li>Add <code>1</code> to <strong>every element</strong> in the submatrix with the <strong>top left</strong> corner <code>(row1<sub>i</sub>, col1<sub>i</sub>)</code> and the <strong>bottom right</strong> corner <code>(row2<sub>i</sub>, col2<sub>i</sub>)</code>. That is, add <code>1</code> to <code>mat[x][y]</code> for all <code>row1<sub>i</sub> &lt;= x &lt;= row2<sub>i</sub></code> and <code>col1<sub>i</sub> &lt;= y &lt;= col2<sub>i</sub></code>.</li>
</ul>

<p>Return<em> the matrix</em> <code>mat</code><em> after performing every query.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/11/24/p2example11.png" style="width: 531px; height: 121px;" />
<pre>
<strong>Input:</strong> n = 3, queries = [[1,1,2,2],[0,0,1,1]]
<strong>Output:</strong> [[1,1,0],[1,2,1],[0,1,1]]
<strong>Explanation:</strong> The diagram above shows the initial matrix, the matrix after the first query, and the matrix after the second query.
- In the first query, we add 1 to every element in the submatrix with the top left corner (1, 1) and bottom right corner (2, 2).
- In the second query, we add 1 to every element in the submatrix with the top left corner (0, 0) and bottom right corner (1, 1).
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/11/24/p2example22.png" style="width: 261px; height: 82px;" />
<pre>
<strong>Input:</strong> n = 2, queries = [[0,0,1,1]]
<strong>Output:</strong> [[1,1],[1,1]]
<strong>Explanation:</strong> The diagram above shows the initial matrix and the matrix after the first query.
- In the first query we add 1 to every element in the matrix.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 500</code></li>
	<li><code>1 &lt;= queries.length &lt;= 10<sup>4</sup></code></li>
	<li><code>0 &lt;= row1<sub>i</sub> &lt;= row2<sub>i</sub> &lt; n</code></li>
	<li><code>0 &lt;= col1<sub>i</sub> &lt;= col2<sub>i</sub> &lt; n</code></li>
</ul>


## Solution

---
### Python3
``` py title='increment-submatrices-by-one'
class Solution:
    def rangeAddQueries(self, n: int, queries: List[List[int]]) -> List[List[int]]:
        A = [[0] * n for _ in range(n)]
        
        for r1, c1, r2, c2 in queries:
            A[r1][c1] += 1
            if c2 + 1 < n:
                A[r1][c2 + 1] -= 1
            if r2 + 1 < n:
                A[r2 + 1][c1] -= 1
            if r2 + 1 < n and c2 + 1 < n:
                A[r2 + 1][c2 + 1] += 1
        
        for i in range(n):
            for j in range(1, n):
                A[i][j] += A[i][j - 1]

        for i in range(1, n):
            for j in range(n):
                A[i][j] += A[i - 1][j]

        return A
```

