---
title: 2577. Minimum Time to Visit a Cell In a Grid
draft: false
tags: 
  - leetcode-hard
  - array
  - breadth-first-search
  - graph
  - heap-priority-queue
  - matrix
  - shortest-path
  - weekly-contest-334
  - contest-question
date: 2024-11-29
---

[Problem Link](https://leetcode.com/problems/minimum-time-to-visit-a-cell-in-a-grid/)

## Description

---
<p>You are given a <code>m x n</code> matrix <code>grid</code> consisting of <b>non-negative</b> integers where <code>grid[row][col]</code> represents the <strong>minimum</strong> time required to be able to visit the cell <code>(row, col)</code>, which means you can visit the cell <code>(row, col)</code> only when the time you visit it is greater than or equal to <code>grid[row][col]</code>.</p>

<p>You are standing in the <strong>top-left</strong> cell of the matrix in the <code>0<sup>th</sup></code> second, and you must move to <strong>any</strong> adjacent cell in the four directions: up, down, left, and right. Each move you make takes 1 second.</p>

<p>Return <em>the <strong>minimum</strong> time required in which you can visit the bottom-right cell of the matrix</em>. If you cannot visit the bottom-right cell, then return <code>-1</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2023/02/14/yetgriddrawio-8.png" /></p>

<pre>
<strong>Input:</strong> grid = [[0,1,3,2],[5,1,2,5],[4,3,8,6]]
<strong>Output:</strong> 7
<strong>Explanation:</strong> One of the paths that we can take is the following:
- at t = 0, we are on the cell (0,0).
- at t = 1, we move to the cell (0,1). It is possible because grid[0][1] &lt;= 1.
- at t = 2, we move to the cell (1,1). It is possible because grid[1][1] &lt;= 2.
- at t = 3, we move to the cell (1,2). It is possible because grid[1][2] &lt;= 3.
- at t = 4, we move to the cell (1,1). It is possible because grid[1][1] &lt;= 4.
- at t = 5, we move to the cell (1,2). It is possible because grid[1][2] &lt;= 5.
- at t = 6, we move to the cell (1,3). It is possible because grid[1][3] &lt;= 6.
- at t = 7, we move to the cell (2,3). It is possible because grid[2][3] &lt;= 7.
The final time is 7. It can be shown that it is the minimum time possible.
</pre>

<p><strong class="example">Example 2:</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2023/02/14/yetgriddrawio-9.png" style="width: 151px; height: 151px;" /></p>

<pre>
<strong>Input:</strong> grid = [[0,2,4],[3,2,1],[1,0,4]]
<strong>Output:</strong> -1
<strong>Explanation:</strong> There is no path from the top left to the bottom-right cell.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == grid.length</code></li>
	<li><code>n == grid[i].length</code></li>
	<li><code>2 &lt;= m, n &lt;= 1000</code></li>
	<li><code>4 &lt;= m * n &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= grid[i][j] &lt;= 10<sup>5</sup></code></li>
	<li><code>grid[0][0] == 0</code></li>
</ul>

<p>&nbsp;</p>
<style type="text/css">.spoilerbutton {display:block; border:dashed; padding: 0px 0px; margin:10px 0px; font-size:150%; font-weight: bold; color:#000000; background-color:cyan; outline:0; 
}
.spoiler {overflow:hidden;}
.spoiler > div {-webkit-transition: all 0s ease;-moz-transition: margin 0s ease;-o-transition: all 0s ease;transition: margin 0s ease;}
.spoilerbutton[value="Show Message"] + .spoiler > div {margin-top:-500%;}
.spoilerbutton[value="Hide Message"] + .spoiler {padding:5px;}
</style>


## Solution

---
### Python3
``` py title='minimum-time-to-visit-a-cell-in-a-grid'
class Solution:
    def minimumTime(self, grid: List[List[int]]) -> int:
        if grid[0][1] > 1 and grid[1][0] > 1: return -1

        rows, cols = len(grid), len(grid[0])
        vis = [[False] * cols for _ in range(rows)]
        heap = [(0, 0, 0)]

        while heap:
            t, x, y = heappop(heap)

            if x == rows - 1 and y == cols - 1:
                return t
            
            if vis[x][y]: continue
            vis[x][y] = True

            for dx, dy in [(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)]:
                if 0 <= dx < rows and 0 <= dy < cols and not vis[dx][dy]:
                    wait = (grid[dx][dy] - t) % 2 == 0
                    nt = max(t + 1, grid[dx][dy] + wait)
                    heappush(heap, (nt, dx, dy))

        return -1
        
```

