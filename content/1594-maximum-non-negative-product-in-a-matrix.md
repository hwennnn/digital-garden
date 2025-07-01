---
title: 1594. Maximum Non Negative Product in a Matrix
draft: false
tags: 
  - leetcode-medium
  - array
  - dynamic-programming
  - matrix
  - weekly-contest-207
  - contest-question
date: 2020-09-22
---

[Problem Link](https://leetcode.com/problems/maximum-non-negative-product-in-a-matrix/)

## Description

---
<p>You are given a <code>m x n</code> matrix <code>grid</code>. Initially, you are located at the top-left corner <code>(0, 0)</code>, and in each step, you can only <strong>move right or down</strong> in the matrix.</p>

<p>Among all possible paths starting from the top-left corner <code>(0, 0)</code> and ending in the bottom-right corner <code>(m - 1, n - 1)</code>, find the path with the <strong>maximum non-negative product</strong>. The product of a path is the product of all integers in the grid cells visited along the path.</p>

<p>Return the <em>maximum non-negative product <strong>modulo</strong> </em><code>10<sup>9</sup> + 7</code>. <em>If the maximum product is <strong>negative</strong>, return </em><code>-1</code>.</p>

<p>Notice that the modulo is performed after getting the maximum product.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/12/23/product1.jpg" style="width: 244px; height: 245px;" />
<pre>
<strong>Input:</strong> grid = [[-1,-2,-3],[-2,-3,-3],[-3,-3,-2]]
<strong>Output:</strong> -1
<strong>Explanation:</strong> It is not possible to get non-negative product in the path from (0, 0) to (2, 2), so return -1.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/12/23/product2.jpg" style="width: 244px; height: 245px;" />
<pre>
<strong>Input:</strong> grid = [[1,-2,1],[1,-2,1],[3,-4,1]]
<strong>Output:</strong> 8
<strong>Explanation:</strong> Maximum non-negative product is shown (1 * 1 * -2 * -4 * 1 = 8).
</pre>

<p><strong class="example">Example 3:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/12/23/product3.jpg" style="width: 164px; height: 165px;" />
<pre>
<strong>Input:</strong> grid = [[1,3],[0,-4]]
<strong>Output:</strong> 0
<strong>Explanation:</strong> Maximum non-negative product is shown (1 * 0 * -4 = 0).
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == grid.length</code></li>
	<li><code>n == grid[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 15</code></li>
	<li><code>-4 &lt;= grid[i][j] &lt;= 4</code></li>
</ul>


## Solution

---
### Python3
``` py title='maximum-non-negative-product-in-a-matrix'
class Solution:
    def maxProductPath(self, A: List[List[int]]) -> int:
        M = 1000000007
        row, col = len(A), len(A[0])
        
        mp = [[0] * col for _ in range(row)] 
        mn = [[0] * col for _ in range(row)] 
        mp[0][0] = mn[0][0] = A[0][0]
        
        for i in range(1,col):
            mp[0][i] = A[0][i] * mp[0][i-1]
            mn[0][i] = A[0][i] * mp[0][i-1]
        
        for i in range(1,row):
            mp[i][0] = A[i][0] * mp[i-1][0]
            mn[i][0] = A[i][0] * mp[i-1][0]
            
        for i in range(1,row):
            for j in range(1,col):
                if A[i][j] > 0:
                    mp[i][j] = max(mp[i-1][j], mp[i][j-1]) * A[i][j]
                    mn[i][j] = min(mn[i-1][j], mn[i][j-1]) * A[i][j]
                else:
                    mp[i][j] = min(mn[i-1][j], mn[i][j-1]) * A[i][j]
                    mn[i][j] = max(mp[i-1][j], mp[i][j-1]) * A[i][j]
        
        res = mp[row-1][col-1]
        
        return res%M if res > -1 else -1
```

