---
title: 2257. Count Unguarded Cells in the Grid
draft: false
tags: 
  - leetcode-medium
  - array
  - matrix
  - simulation
  - biweekly-contest-77
  - contest-question
date: 2024-11-21
---

[Problem Link](https://leetcode.com/problems/count-unguarded-cells-in-the-grid/)

## Description

---
<p>You are given two integers <code>m</code> and <code>n</code> representing a <strong>0-indexed</strong> <code>m x n</code> grid. You are also given two 2D integer arrays <code>guards</code> and <code>walls</code> where <code>guards[i] = [row<sub>i</sub>, col<sub>i</sub>]</code> and <code>walls[j] = [row<sub>j</sub>, col<sub>j</sub>]</code> represent the positions of the <code>i<sup>th</sup></code> guard and <code>j<sup>th</sup></code> wall respectively.</p>

<p>A guard can see <b>every</b> cell in the four cardinal directions (north, east, south, or west) starting from their position unless <strong>obstructed</strong> by a wall or another guard. A cell is <strong>guarded</strong> if there is <strong>at least</strong> one guard that can see it.</p>

<p>Return<em> the number of unoccupied cells that are <strong>not</strong> <strong>guarded</strong>.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/03/10/example1drawio2.png" style="width: 300px; height: 204px;" />
<pre>
<strong>Input:</strong> m = 4, n = 6, guards = [[0,0],[1,1],[2,3]], walls = [[0,1],[2,2],[1,4]]
<strong>Output:</strong> 7
<strong>Explanation:</strong> The guarded and unguarded cells are shown in red and green respectively in the above diagram.
There are a total of 7 unguarded cells, so we return 7.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/03/10/example2drawio.png" style="width: 200px; height: 201px;" />
<pre>
<strong>Input:</strong> m = 3, n = 3, guards = [[1,1]], walls = [[0,1],[1,0],[2,1],[1,2]]
<strong>Output:</strong> 4
<strong>Explanation:</strong> The unguarded cells are shown in green in the above diagram.
There are a total of 4 unguarded cells, so we return 4.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= m, n &lt;= 10<sup>5</sup></code></li>
	<li><code>2 &lt;= m * n &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= guards.length, walls.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>2 &lt;= guards.length + walls.length &lt;= m * n</code></li>
	<li><code>guards[i].length == walls[j].length == 2</code></li>
	<li><code>0 &lt;= row<sub>i</sub>, row<sub>j</sub> &lt; m</code></li>
	<li><code>0 &lt;= col<sub>i</sub>, col<sub>j</sub> &lt; n</code></li>
	<li>All the positions in <code>guards</code> and <code>walls</code> are <strong>unique</strong>.</li>
</ul>


## Solution

---
### Python3
``` py title='count-unguarded-cells-in-the-grid'
class Solution:
    def countUnguarded(self, rows: int, cols: int, guards: List[List[int]], walls: List[List[int]]) -> int:
        grid = [[1] * cols for _ in range(rows)]
        
        for x, y in walls:
            grid[x][y] = -1
            
        def goLeft(x, y):
            dy = y - 1
            while dy >= 0 and grid[x][dy] != 2 and grid[x][dy] != -1:
                grid[x][dy] = 2
                dy -= 1
        
        def goRight(x, y):
            dy = y + 1
            while dy < cols and grid[x][dy] != 3 and grid[x][dy] != -1:
                grid[x][dy] = 3
                dy += 1
                
        def goTop(x, y):
            dx = x - 1
            while dx >= 0 and grid[dx][y] != 4 and grid[dx][y] != -1:
                grid[dx][y] = 4
                dx -= 1
                
        def goBottom(x, y):
            dx = x + 1
            while dx < rows and grid[dx][y] != 5 and grid[dx][y] != -1:
                grid[dx][y] = 5
                dx += 1
    
        guards.sort(key = lambda x : (-x[1], x[0]))

        for x, y in guards:
            goLeft(x, y)

        guards.sort(key = lambda x : (x[1], x[0]))

        for x, y in guards:
            goRight(x, y)
        
        guards.sort(key = lambda x : (-x[0], x[1]))
        for x, y in guards:
            goTop(x, y)

        guards.sort(key = lambda x : (x[0], x[1]))
        for x, y in guards:
            goBottom(x, y)

        for x, y in guards:
            grid[x][y] = -1
        
        res = 0
        
        for x in range(rows):
            for y in range(cols):
                if grid[x][y] == 1:
                    res += 1
        
        return res
```

