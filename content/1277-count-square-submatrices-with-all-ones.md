---
title: 1277. Count Square Submatrices with All Ones
draft: false
tags: 
  - leetcode-medium
  - array
  - dynamic-programming
  - matrix
  - weekly-contest-165
  - contest-question
date: 2025-01-05
---

[Problem Link](https://leetcode.com/problems/count-square-submatrices-with-all-ones/)

## Description

---
<p>Given a <code>m * n</code> matrix of ones and zeros, return how many <strong>square</strong> submatrices have all ones.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> matrix =
[
&nbsp; [0,1,1,1],
&nbsp; [1,1,1,1],
&nbsp; [0,1,1,1]
]
<strong>Output:</strong> 15
<strong>Explanation:</strong> 
There are <strong>10</strong> squares of side 1.
There are <strong>4</strong> squares of side 2.
There is  <strong>1</strong> square of side 3.
Total number of squares = 10 + 4 + 1 = <strong>15</strong>.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> matrix = 
[
  [1,0,1],
  [1,1,0],
  [1,1,0]
]
<strong>Output:</strong> 7
<strong>Explanation:</strong> 
There are <b>6</b> squares of side 1.  
There is <strong>1</strong> square of side 2. 
Total number of squares = 6 + 1 = <b>7</b>.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= arr.length&nbsp;&lt;= 300</code></li>
	<li><code>1 &lt;= arr[0].length&nbsp;&lt;= 300</code></li>
	<li><code>0 &lt;= arr[i][j] &lt;= 1</code></li>
</ul>


## Solution

---
### Python3
``` py title='count-square-submatrices-with-all-ones'
class Solution:
    def countSquares(self, A: List[List[int]]) -> int:
        rows, cols = len(A), len(A[0])

        for i in range(1, rows):
            for j in range(1, cols):
                m = min(A[i - 1][j], A[i][j - 1], A[i - 1][j - 1])

                if A[i][j] == 1:
                    A[i][j] = m + 1 
        
        return sum(map(sum, A))
```

