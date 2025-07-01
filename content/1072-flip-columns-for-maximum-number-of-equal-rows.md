---
title: 1072. Flip Columns For Maximum Number of Equal Rows
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - matrix
  - weekly-contest-139
  - contest-question
date: 2024-11-22
---

[Problem Link](https://leetcode.com/problems/flip-columns-for-maximum-number-of-equal-rows/)

## Description

---
<p>You are given an <code>m x n</code> binary matrix <code>matrix</code>.</p>

<p>You can choose any number of columns in the matrix and flip every cell in that column (i.e., Change the value of the cell from <code>0</code> to <code>1</code> or vice versa).</p>

<p>Return <em>the maximum number of rows that have all values equal after some number of flips</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> matrix = [[0,1],[1,1]]
<strong>Output:</strong> 1
<strong>Explanation:</strong> After flipping no values, 1 row has all values equal.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> matrix = [[0,1],[1,0]]
<strong>Output:</strong> 2
<strong>Explanation:</strong> After flipping values in the first column, both rows have equal values.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> matrix = [[0,0,0],[0,0,1],[1,1,0]]
<strong>Output:</strong> 2
<strong>Explanation:</strong> After flipping values in the first two columns, the last two rows have equal values.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == matrix.length</code></li>
	<li><code>n == matrix[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 300</code></li>
	<li><code>matrix[i][j]</code> is either&nbsp;<code>0</code> or <code>1</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='flip-columns-for-maximum-number-of-equal-rows'
class Solution:
    def maxEqualRowsAfterFlips(self, matrix: List[List[int]]) -> int:
        mp = collections.defaultdict(int)
        
        for r in matrix:
            A = []
            for c in r:
                A.append(r[0] ^ c)
            
            mp[tuple(A)] += 1
        
        return max(mp.values())
```

