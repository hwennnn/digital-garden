---
title: 3033. Modify the Matrix
draft: false
tags: 
  - leetcode-easy
  - array
  - matrix
date: 2024-02-13
---

[Problem Link](https://leetcode.com/problems/modify-the-matrix/)

## Description

---
<p>Given a <strong>0-indexed</strong> <code>m x n</code> integer matrix <code>matrix</code>, create a new <strong>0-indexed</strong> matrix called <code>answer</code>. Make <code>answer</code> equal to <code>matrix</code>, then replace each element with the value <code>-1</code> with the <strong>maximum</strong> element in its respective column.</p>

<p>Return <em>the matrix</em> <code>answer</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2023/12/24/matrix1.png" style="width: 491px; height: 161px;" />
<pre>
<strong>Input:</strong> matrix = [[1,2,-1],[4,-1,6],[7,8,9]]
<strong>Output:</strong> [[1,2,9],[4,8,6],[7,8,9]]
<strong>Explanation:</strong> The diagram above shows the elements that are changed (in blue).
- We replace the value in the cell [1][1] with the maximum value in the column 1, that is 8.
- We replace the value in the cell [0][2] with the maximum value in the column 2, that is 9.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2023/12/24/matrix2.png" style="width: 411px; height: 111px;" />
<pre>
<strong>Input:</strong> matrix = [[3,-1],[5,2]]
<strong>Output:</strong> [[3,2],[5,2]]
<strong>Explanation:</strong> The diagram above shows the elements that are changed (in blue).
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == matrix.length</code></li>
	<li><code>n == matrix[i].length</code></li>
	<li><code>2 &lt;= m, n &lt;= 50</code></li>
	<li><code>-1 &lt;= matrix[i][j] &lt;= 100</code></li>
	<li>The input is generated such that each column contains at least one non-negative integer.</li>
</ul>


## Solution

---
### Python3
``` py title='modify-the-matrix'
class Solution:
    def modifiedMatrix(self, matrix: List[List[int]]) -> List[List[int]]:
        rows, cols = len(matrix), len(matrix[0])
        colMax = [0] * cols
        
        for j, col in enumerate(zip(*matrix)):
            colMax[j] = max(col)
        
        for i in range(rows):
            for j in range(cols):
                if matrix[i][j] == -1:
                    matrix[i][j] = colMax[j]
        
        return matrix
```
