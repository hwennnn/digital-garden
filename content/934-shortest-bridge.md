---
title: 934. Shortest Bridge
draft: false
tags: 
  - leetcode-medium
  - array
  - depth-first-search
  - breadth-first-search
  - matrix
  - weekly-contest-109
  - contest-question
date: 2023-05-21
---

[Problem Link](https://leetcode.com/problems/shortest-bridge/)

## Description

---
<p>You are given an <code>n x n</code> binary matrix <code>grid</code> where <code>1</code> represents land and <code>0</code> represents water.</p>

<p>An <strong>island</strong> is a 4-directionally connected group of <code>1</code>&#39;s not connected to any other <code>1</code>&#39;s. There are <strong>exactly two islands</strong> in <code>grid</code>.</p>

<p>You may change <code>0</code>&#39;s to <code>1</code>&#39;s to connect the two islands to form <strong>one island</strong>.</p>

<p>Return <em>the smallest number of </em><code>0</code><em>&#39;s you must flip to connect the two islands</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> grid = [[0,1],[1,0]]
<strong>Output:</strong> 1
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> grid = [[0,1,0],[0,0,0],[0,0,1]]
<strong>Output:</strong> 2
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> grid = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == grid.length == grid[i].length</code></li>
	<li><code>2 &lt;= n &lt;= 100</code></li>
	<li><code>grid[i][j]</code> is either <code>0</code> or <code>1</code>.</li>
	<li>There are exactly two islands in <code>grid</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='shortest-bridge'
class Solution:
    def shortestBridge(self, grid: List[List[int]]) -> int:
        rows, cols = len(grid), len(grid[0])
        bfs = deque()

        def color(x, y):
            grid[x][y] = 2
            bfs.append((x, y))

            for dx, dy in [(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)]:
                if 0 <= dx < rows and 0 <= dy < cols and grid[dx][dy] == 1:
                    color(dx, dy)
        
        for i in range(rows):
            flag = False
            for j in range(cols):
                if grid[i][j] == 1:
                    color(i, j)
                    flag = True
                    break
            
            if flag: break

        res = 0

        while bfs:
            N = len(bfs)
            
            for _ in range(N):
                x, y = bfs.popleft()

                for dx, dy in [(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)]:
                    if 0 <= dx < rows and 0 <= dy < cols and grid[dx][dy] != -1:
                        if grid[dx][dy] == 1: return res

                        grid[dx][dy] = -1
                        bfs.append((dx, dy))

            res += 1

        return -1

```

