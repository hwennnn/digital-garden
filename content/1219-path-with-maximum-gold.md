---
title: 1219. Path with Maximum Gold
draft: false
tags: 
  - leetcode-medium
  - array
  - backtracking
  - matrix
  - weekly-contest-157
  - contest-question
date: 2024-05-14
---

[Problem Link](https://leetcode.com/problems/path-with-maximum-gold/)

## Description

---
<p>In a gold mine <code>grid</code> of size <code>m x n</code>, each cell in this mine has an integer representing the amount of gold in that cell, <code>0</code> if it is empty.</p>

<p>Return the maximum amount of gold you can collect under the conditions:</p>

<ul>
	<li>Every time you are located in a cell you will collect all the gold in that cell.</li>
	<li>From your position, you can walk one step to the left, right, up, or down.</li>
	<li>You can&#39;t visit the same cell more than once.</li>
	<li>Never visit a cell with <code>0</code> gold.</li>
	<li>You can start and stop collecting gold from <strong>any </strong>position in the grid that has some gold.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> grid = [[0,6,0],[5,8,7],[0,9,0]]
<strong>Output:</strong> 24
<strong>Explanation:</strong>
[[0,6,0],
 [5,8,7],
 [0,9,0]]
Path to get the maximum gold, 9 -&gt; 8 -&gt; 7.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> grid = [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]
<strong>Output:</strong> 28
<strong>Explanation:</strong>
[[1,0,7],
 [2,0,6],
 [3,4,5],
 [0,3,0],
 [9,0,20]]
Path to get the maximum gold, 1 -&gt; 2 -&gt; 3 -&gt; 4 -&gt; 5 -&gt; 6 -&gt; 7.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == grid.length</code></li>
	<li><code>n == grid[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 15</code></li>
	<li><code>0 &lt;= grid[i][j] &lt;= 100</code></li>
	<li>There are at most <strong>25 </strong>cells containing gold.</li>
</ul>


## Solution

---
### Python3
``` py title='path-with-maximum-gold'
class Solution:
    def getMaximumGold(self, grid: List[List[int]]) -> int:
        rows, cols = len(grid), len(grid[0])
        res = 0
        visited = [[False] * cols for _ in range(rows)]

        def backtrack(x, y, cost):
            nonlocal res

            if cost > res:
                res = cost

            for dx, dy in [(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)]:
                if 0 <= dx < rows and 0 <= dy < cols and not visited[dx][dy] and grid[dx][dy] != 0:
                    visited[dx][dy] = True
                    backtrack(dx, dy, cost + grid[dx][dy])
                    visited[dx][dy] = False

        for x in range(rows):
            for y in range(cols):
                if grid[x][y] != 0:
                    visited[x][y] = True
                    backtrack(x, y, grid[x][y])
                    visited[x][y] = False

        return res
```

