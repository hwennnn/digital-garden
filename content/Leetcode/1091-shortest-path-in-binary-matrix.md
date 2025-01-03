---
title: 1091. Shortest Path in Binary Matrix
draft: false
tags: 
  - array
  - breadth-first-search
  - matrix
date: 2023-06-01
---

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-blue.svg)

## Description

---
<p>Given an <code>n x n</code> binary matrix <code>grid</code>, return <em>the length of the shortest <strong>clear path</strong> in the matrix</em>. If there is no clear path, return <code>-1</code>.</p>

<p>A <strong>clear path</strong> in a binary matrix is a path from the <strong>top-left</strong> cell (i.e., <code>(0, 0)</code>) to the <strong>bottom-right</strong> cell (i.e., <code>(n - 1, n - 1)</code>) such that:</p>

<ul>
	<li>All the visited cells of the path are <code>0</code>.</li>
	<li>All the adjacent cells of the path are <strong>8-directionally</strong> connected (i.e., they are different and they share an edge or a corner).</li>
</ul>

<p>The <strong>length of a clear path</strong> is the number of visited cells of this path.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/18/example1_1.png" style="width: 500px; height: 234px;" />
<pre>
<strong>Input:</strong> grid = [[0,1],[1,0]]
<strong>Output:</strong> 2
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/18/example2_1.png" style="height: 216px; width: 500px;" />
<pre>
<strong>Input:</strong> grid = [[0,0,0],[1,1,0],[1,1,0]]
<strong>Output:</strong> 4
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> grid = [[1,0,0],[1,1,0],[1,1,0]]
<strong>Output:</strong> -1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == grid.length</code></li>
	<li><code>n == grid[i].length</code></li>
	<li><code>1 &lt;= n &lt;= 100</code></li>
	<li><code>grid[i][j] is 0 or 1</code></li>
</ul>


## Solution

---
### Python
``` py title='shortest-path-in-binary-matrix'
class Solution:
    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:
        n = len(grid)
        bfs = deque([])

        if grid[0][0] == 0:
            bfs.append((0, 0))
            grid[0][0] = 1
        
        count = 1

        while bfs:
            N = len(bfs)

            for _ in range(N):
                x, y = bfs.popleft()

                if x == y == n - 1: return count

                for dx in range(x - 1, x + 2):
                    for dy in range(y - 1, y + 2):
                        if 0 <= dx < n and 0 <= dy < n and grid[dx][dy] == 0:
                            grid[dx][dy] = 1
                            bfs.append((dx, dy))

            count += 1
        
        return -1

```

