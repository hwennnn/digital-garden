---
title: 2617. Minimum Number of Visited Cells in a Grid
draft: false
tags: 
  - leetcode-hard
  - array
  - dynamic-programming
  - stack
  - breadth-first-search
  - union-find
  - heap-priority-queue
  - matrix
  - monotonic-stack
  - weekly-contest-340
  - contest-question
date: 2023-04-12
---

[Problem Link](https://leetcode.com/problems/minimum-number-of-visited-cells-in-a-grid/)

## Description

---
<p>You are given a <strong>0-indexed</strong> <code>m x n</code> integer matrix <code>grid</code>. Your initial position is at the <strong>top-left</strong> cell <code>(0, 0)</code>.</p>

<p>Starting from the cell <code>(i, j)</code>, you can move to one of the following cells:</p>

<ul>
	<li>Cells <code>(i, k)</code> with <code>j &lt; k &lt;= grid[i][j] + j</code> (rightward movement), or</li>
	<li>Cells <code>(k, j)</code> with <code>i &lt; k &lt;= grid[i][j] + i</code> (downward movement).</li>
</ul>

<p>Return <em>the minimum number of cells you need to visit to reach the <strong>bottom-right</strong> cell</em> <code>(m - 1, n - 1)</code>. If there is no valid path, return <code>-1</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2023/01/25/ex1.png" style="width: 271px; height: 171px;" />
<pre>
<strong>Input:</strong> grid = [[3,4,2,1],[4,2,3,1],[2,1,0,0],[2,4,0,0]]
<strong>Output:</strong> 4
<strong>Explanation:</strong> The image above shows one of the paths that visits exactly 4 cells.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2023/01/25/ex2.png" style="width: 271px; height: 171px;" />
<pre>
<strong>Input:</strong> grid = [[3,4,2,1],[4,2,1,1],[2,1,1,0],[3,4,1,0]]
<strong>Output:</strong> 3
<strong>Explanation: </strong>The image above shows one of the paths that visits exactly 3 cells.
</pre>

<p><strong class="example">Example 3:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2023/01/26/ex3.png" style="width: 181px; height: 81px;" />
<pre>
<strong>Input:</strong> grid = [[2,1,0],[1,0,0]]
<strong>Output:</strong> -1
<strong>Explanation:</strong> It can be proven that no path exists.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == grid.length</code></li>
	<li><code>n == grid[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= m * n &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= grid[i][j] &lt; m * n</code></li>
	<li><code>grid[m - 1][n - 1] == 0</code></li>
</ul>


## Solution

---
### Python3
``` py title='minimum-number-of-visited-cells-in-a-grid'
from sortedcontainers import SortedList

class Solution:
    def minimumVisitedCells(self, grid: List[List[int]]) -> int:
        rows, cols = len(grid), len(grid[0])
        R = [SortedList(range(cols)) for _ in range(rows)]
        C = [SortedList(range(rows)) for _ in range(cols)]
        pq = [(1, 0, 0)]
        
        while pq:
            d, r, c = heappop(pq)
            
            if (r, c) == (rows - 1, cols - 1):
                return d
            
            index = R[r].bisect_left(c + 1)
            while index < len(R[r]) and R[r][index] <= grid[r][c] + c:
                nr, nc = r, R[r][index]
                heappush(pq, (d + 1, nr, nc))
                
                R[nr].remove(nc)
                C[nc].remove(nr)
            
            index = C[c].bisect_left(r + 1)
            while index < len(C[c]) and C[c][index] <= grid[r][c] + r:
                nr, nc = C[c][index], c
                heappush(pq, (d + 1, nr, nc))
                
                R[nr].remove(nc)
                C[nc].remove(nr)
        
        return -1
```

