---
title: 1914. Cyclically Rotating a Grid
draft: false
tags: 
  - leetcode-medium
  - array
  - matrix
  - simulation
  - weekly-contest-247
  - contest-question
date: 2021-06-27
---

[Problem Link](https://leetcode.com/problems/cyclically-rotating-a-grid/)

## Description

---
<p>You are given an <code>m x n</code> integer matrix <code>grid</code>​​​, where <code>m</code> and <code>n</code> are both <strong>even</strong> integers, and an integer <code>k</code>.</p>

<p>The matrix is composed of several layers, which is shown in the below image, where each color is its own layer:</p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2021/06/10/ringofgrid.png" style="width: 231px; height: 258px;" /></p>

<p>A cyclic rotation of the matrix is done by cyclically rotating <strong>each layer</strong> in the matrix. To cyclically rotate a layer once, each element in the layer will take the place of the adjacent element in the <strong>counter-clockwise</strong> direction. An example rotation is shown below:</p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/06/22/explanation_grid.jpg" style="width: 500px; height: 268px;" />
<p>Return <em>the matrix after applying </em><code>k</code> <em>cyclic rotations to it</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/06/19/rod2.png" style="width: 421px; height: 191px;" />
<pre>
<strong>Input:</strong> grid = [[40,10],[30,20]], k = 1
<strong>Output:</strong> [[10,20],[40,30]]
<strong>Explanation:</strong> The figures above represent the grid at every state.
</pre>

<p><strong class="example">Example 2:</strong></p>
<strong><img alt="" src="https://assets.leetcode.com/uploads/2021/06/10/ringofgrid5.png" style="width: 231px; height: 262px;" /></strong> <strong><img alt="" src="https://assets.leetcode.com/uploads/2021/06/10/ringofgrid6.png" style="width: 231px; height: 262px;" /></strong> <strong><img alt="" src="https://assets.leetcode.com/uploads/2021/06/10/ringofgrid7.png" style="width: 231px; height: 262px;" /></strong>

<pre>
<strong>Input:</strong> grid = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], k = 2
<strong>Output:</strong> [[3,4,8,12],[2,11,10,16],[1,7,6,15],[5,9,13,14]]
<strong>Explanation:</strong> The figures above represent the grid at every state.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == grid.length</code></li>
	<li><code>n == grid[i].length</code></li>
	<li><code>2 &lt;= m, n &lt;= 50</code></li>
	<li>Both <code>m</code> and <code>n</code> are <strong>even</strong> integers.</li>
	<li><code>1 &lt;= grid[i][j] &lt;=<sup> </sup>5000</code></li>
	<li><code>1 &lt;= k &lt;= 10<sup>9</sup></code></li>
</ul>

## Solution

---
### Python3
``` py title='cyclically-rotating-a-grid'
class Solution:
    def rotateGrid(self, grid: List[List[int]], k: int) -> List[List[int]]:
        rows, cols = len(grid), len(grid[0])
        
        for r in range(min(rows, cols) // 2):
            i = j = r
            vals = []
            
            for jj in range(j, cols - j - 1):
                vals.append(grid[i][jj])
            
            for ii in range(i, rows - i - 1):
                vals.append(grid[ii][cols - j - 1])
            
            for jj in range(cols - j - 1, j, -1):
                vals.append(grid[rows - i - 1][jj])
            
            for ii in range(rows - i - 1, i, -1):
                vals.append(grid[ii][j])
            
            kk = k % len(vals)
            vals = vals[kk:] + vals[:kk]
            x = 0
            
            for jj in range(j, cols - j - 1):
                grid[i][jj] = vals[x]; x += 1
            
            for ii in range(i, rows - i - 1):
                grid[ii][cols - j - 1] = vals[x]; x += 1
            
            for jj in range(cols - j - 1, j, -1):
                grid[rows - i - 1][jj] = vals[x]; x += 1
            
            for ii in range(rows - i - 1, i, -1):
                grid[ii][j] = vals[x]; x += 1
        
        return grid
            
```

