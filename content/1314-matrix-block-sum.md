---
title: 1314. Matrix Block Sum
draft: false
tags: 
  - leetcode-medium
  - array
  - matrix
  - prefix-sum
  - biweekly-contest-17
  - contest-question
date: 2021-09-28
---

[Problem Link](https://leetcode.com/problems/matrix-block-sum/)

## Description

---
<p>Given a <code>m x n</code> matrix <code>mat</code> and an integer <code>k</code>, return <em>a matrix</em> <code>answer</code> <em>where each</em> <code>answer[i][j]</code> <em>is the sum of all elements</em> <code>mat[r][c]</code> <em>for</em>:</p>

<ul>
	<li><code>i - k &lt;= r &lt;= i + k,</code></li>
	<li><code>j - k &lt;= c &lt;= j + k</code>, and</li>
	<li><code>(r, c)</code> is a valid position in the matrix.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> mat = [[1,2,3],[4,5,6],[7,8,9]], k = 1
<strong>Output:</strong> [[12,21,16],[27,45,33],[24,39,28]]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> mat = [[1,2,3],[4,5,6],[7,8,9]], k = 2
<strong>Output:</strong> [[45,45,45],[45,45,45],[45,45,45]]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m ==&nbsp;mat.length</code></li>
	<li><code>n ==&nbsp;mat[i].length</code></li>
	<li><code>1 &lt;= m, n, k &lt;= 100</code></li>
	<li><code>1 &lt;= mat[i][j] &lt;= 100</code></li>
</ul>


## Solution

---
### Python3
``` py title='matrix-block-sum'
class Solution:
    def matrixBlockSum(self, mat: List[List[int]], k: int) -> List[List[int]]:
        rows, cols = len(mat), len(mat[0])
        prefix = [[0] * (cols + 1) for _ in range(rows + 1)]
        
        for i in range(rows):
            for j in range(cols):
                prefix[i + 1][j + 1] = prefix[i + 1][j] + prefix[i][j + 1] - prefix[i][j] + mat[i][j]

        for i in range(rows):
            for j in range(cols):
                r1, r2 = max(0, i - k), min(rows, i + k + 1)
                c1, c2 = max(0, j - k), min(cols, j + k + 1)
                
                mat[i][j] = (prefix[r2][c2] - prefix[r1][c2]) - (prefix[r2][c1] - prefix[r1][c1])
        
        return mat
        
    
```

