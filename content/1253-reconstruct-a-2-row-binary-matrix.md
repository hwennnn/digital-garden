---
title: 1253. Reconstruct a 2-Row Binary Matrix
draft: false
tags: 
  - leetcode-medium
  - array
  - greedy
  - matrix
  - weekly-contest-162
  - contest-question
date: 2021-01-02
---

[Problem Link](https://leetcode.com/problems/reconstruct-a-2-row-binary-matrix/)

## Description

---
<p>Given the following details of a matrix with <code>n</code> columns and <code>2</code> rows :</p>

<ul>
	<li>The matrix is a binary matrix, which means each element in the matrix can be <code>0</code> or <code>1</code>.</li>
	<li>The sum of elements of the 0-th(upper) row is given as <code>upper</code>.</li>
	<li>The sum of elements of the 1-st(lower) row is given as <code>lower</code>.</li>
	<li>The sum of elements in the i-th column(0-indexed) is <code>colsum[i]</code>, where <code>colsum</code> is given as an integer array with length <code>n</code>.</li>
</ul>

<p>Your task is to reconstruct the matrix with <code>upper</code>, <code>lower</code> and <code>colsum</code>.</p>

<p>Return it as a 2-D integer array.</p>

<p>If there are more than one valid solution, any of them will be accepted.</p>

<p>If no valid solution exists, return an empty 2-D array.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> upper = 2, lower = 1, colsum = [1,1,1]
<strong>Output:</strong> [[1,1,0],[0,0,1]]
<strong>Explanation: </strong>[[1,0,1],[0,1,0]], and [[0,1,1],[1,0,0]] are also correct answers.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> upper = 2, lower = 3, colsum = [2,2,1,1]
<strong>Output:</strong> []
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> upper = 5, lower = 5, colsum = [2,1,2,0,1,0,1,2,0,1]
<strong>Output:</strong> [[1,1,1,0,1,0,0,1,0,0],[1,0,1,0,0,0,1,1,0,1]]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= colsum.length &lt;= 10^5</code></li>
	<li><code>0 &lt;= upper, lower &lt;= colsum.length</code></li>
	<li><code>0 &lt;= colsum[i] &lt;= 2</code></li>
</ul>


## Solution

---
### Python3
``` py title='reconstruct-a-2-row-binary-matrix'
class Solution:
    def reconstructMatrix(self, upper: int, lower: int, colsum: List[int]) -> List[List[int]]:
        cols = len(colsum)
        
        res = [[0]*cols for _ in range(2)]
        
        for j in range(cols):
            if colsum[j] == 2:
                res[0][j] = 1
                res[1][j] = 1
                colsum[j] -= 2
                upper -= 1
                lower -= 1
            
            if upper < 0 or lower < 0: return []
        
        
        for i in range(2):
            for j in range(cols):
                rowsum = upper if i == 0 else lower

                if rowsum > 0 and colsum[j] > 0:
                    res[i][j] = 1
                
                    if i == 0: upper -= 1
                    else: lower -= 1

                    colsum[j] -= 1
                

        return res if upper + lower + sum(colsum) == 0 else []
```

