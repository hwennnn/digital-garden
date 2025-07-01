---
title: 2713. Maximum Strictly Increasing Cells in a Matrix
draft: false
tags: 
  - leetcode-hard
  - array
  - hash-table
  - binary-search
  - dynamic-programming
  - memoization
  - sorting
  - matrix
  - ordered-set
  - weekly-contest-347
  - contest-question
date: 2023-05-28
---

[Problem Link](https://leetcode.com/problems/maximum-strictly-increasing-cells-in-a-matrix/)

## Description

---
<p>Given a <strong>1-indexed</strong>&nbsp;<code>m x n</code> integer matrix <code>mat</code>, you can select any cell in the matrix as your <strong>starting cell</strong>.</p>

<p>From the starting cell, you can move to any other cell <strong>in the</strong> <strong>same row or column</strong>, but only if the value of the destination cell is <strong>strictly greater</strong> than the value of the current cell. You can repeat this process as many times as possible, moving from cell to cell until you can no longer make any moves.</p>

<p>Your task is to find the <strong>maximum number of cells</strong> that you can visit in the matrix by starting from some cell.</p>

<p>Return <em>an integer denoting the maximum number of cells that can be visited.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<p><strong class="example"><img alt="" src="https://assets.leetcode.com/uploads/2023/04/23/diag1drawio.png" style="width: 200px; height: 176px;" /></strong></p>

<pre>
<strong>Input:</strong> mat = [[3,1],[3,4]]
<strong>Output:</strong> 2
<strong>Explanation:</strong> The image shows how we can visit 2 cells starting from row 1, column 2. It can be shown that we cannot visit more than 2 cells no matter where we start from, so the answer is 2. 
</pre>

<p><strong class="example">Example 2:</strong></p>

<p><strong class="example"><img alt="" src="https://assets.leetcode.com/uploads/2023/04/23/diag3drawio.png" style="width: 200px; height: 176px;" /></strong></p>

<pre>
<strong>Input:</strong> mat = [[1,1],[1,1]]
<strong>Output:</strong> 1
<strong>Explanation:</strong> Since the cells must be strictly increasing, we can only visit one cell in this example. 
</pre>

<p><strong class="example">Example 3:</strong></p>

<p><strong class="example"><img alt="" src="https://assets.leetcode.com/uploads/2023/04/23/diag4drawio.png" style="width: 350px; height: 250px;" /></strong></p>

<pre>
<strong>Input:</strong> mat = [[3,1,6],[-9,5,7]]
<strong>Output:</strong> 4
<strong>Explanation:</strong> The image above shows how we can visit 4 cells starting from row 2, column 1. It can be shown that we cannot visit more than 4 cells no matter where we start from, so the answer is 4. 
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == mat.length&nbsp;</code></li>
	<li><code>n == mat[i].length&nbsp;</code></li>
	<li><code>1 &lt;= m, n &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= m * n &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>5</sup>&nbsp;&lt;= mat[i][j] &lt;= 10<sup>5</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='maximum-strictly-increasing-cells-in-a-matrix'
class Solution:
    def maxIncreasingCells(self, mat: List[List[int]]) -> int:
        rows, cols = len(mat), len(mat[0])

        R = [0] * rows
        C = [0] * cols
        mp = defaultdict(list)
        temp = [[0] * cols for _ in range(rows)]
        unique = set()

        for i in range(rows):
            for j in range(cols):
                mp[mat[i][j]].append((i, j))
                unique.add(mat[i][j])
        
        for x in sorted(unique, reverse = 1):
            for i, j in mp[x]:
                temp[i][j] = 1 + max(R[i], C[j])
            
            for i, j in mp[x]:
                R[i] = max(R[i], temp[i][j])
                C[j] = max(C[j], temp[i][j])
        
        return max(max(R), max(C))
```

