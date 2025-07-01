---
title: 2132. Stamping the Grid
draft: false
tags: 
  - leetcode-hard
  - array
  - greedy
  - matrix
  - prefix-sum
  - biweekly-contest-69
  - contest-question
date: 2022-01-10
---

[Problem Link](https://leetcode.com/problems/stamping-the-grid/)

## Description

---
<p>You are given an <code>m x n</code> binary matrix <code>grid</code> where each cell is either <code>0</code> (empty) or <code>1</code> (occupied).</p>

<p>You are then given stamps of size <code>stampHeight x stampWidth</code>. We want to fit the stamps such that they follow the given <strong>restrictions</strong> and <strong>requirements</strong>:</p>

<ol>
	<li>Cover all the <strong>empty</strong> cells.</li>
	<li>Do not cover any of the <strong>occupied</strong> cells.</li>
	<li>We can put as <strong>many</strong> stamps as we want.</li>
	<li>Stamps can <strong>overlap</strong> with each other.</li>
	<li>Stamps are not allowed to be <strong>rotated</strong>.</li>
	<li>Stamps must stay completely <strong>inside</strong> the grid.</li>
</ol>

<p>Return <code>true</code> <em>if it is possible to fit the stamps while following the given restrictions and requirements. Otherwise, return</em> <code>false</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/11/03/ex1.png" style="width: 180px; height: 237px;" />
<pre>
<strong>Input:</strong> grid = [[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0]], stampHeight = 4, stampWidth = 3
<strong>Output:</strong> true
<strong>Explanation:</strong> We have two overlapping stamps (labeled 1 and 2 in the image) that are able to cover all the empty cells.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/11/03/ex2.png" style="width: 170px; height: 179px;" />
<pre>
<strong>Input:</strong> grid = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]], stampHeight = 2, stampWidth = 2 
<strong>Output:</strong> false 
<strong>Explanation:</strong> There is no way to fit the stamps onto all the empty cells without the stamps going outside the grid.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == grid.length</code></li>
	<li><code>n == grid[r].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= m * n &lt;= 2 * 10<sup>5</sup></code></li>
	<li><code>grid[r][c]</code> is either <code>0</code> or <code>1</code>.</li>
	<li><code>1 &lt;= stampHeight, stampWidth &lt;= 10<sup>5</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='stamping-the-grid'
class Solution:
    def possibleToStamp(self, grid: List[List[int]], H: int, W: int) -> bool:
        rows, cols = len(grid), len(grid[0])
        prefix = [[0] * (cols + 1) for _ in range(rows + 1)]
        
        for i in range(rows):
            for j in range(cols):
                prefix[i + 1][j + 1] = prefix[i][j + 1] + prefix[i + 1][j] - prefix[i][j] + grid[i][j]
        
        diff = [[0] * (cols + 1) for _ in range(rows + 1)]
        
        for i in range(rows - H + 1):
            for j in range(cols - W + 1):
                count = prefix[i + H][j + W] - prefix[i][j + W] - prefix[i + H][j] + prefix[i][j]
                
                if count == 0:
                    diff[i][j] += 1
                    diff[i][j + W] -= 1
                    diff[i + H][j] -= 1
                    diff[i + H][j + W] += 1
        
        for i in range(rows + 1):
            for j in range(cols):
                diff[i][j + 1] += diff[i][j]
        
        for j in range(cols + 1):
            for i in range(rows):
                diff[i + 1][j] += diff[i][j]
        
        for i in range(rows):
            for j in range(cols):
                if grid[i][j] == 0 and diff[i][j] == 0:
                    return False
        
        return True
```

