---
title: 827. Making A Large Island
draft: false
tags: 
  - leetcode-hard
  - array
  - depth-first-search
  - breadth-first-search
  - union-find
  - matrix
date: 2025-01-31
---

[Problem Link](https://leetcode.com/problems/making-a-large-island/)

## Description

---
<p>You are given an <code>n x n</code> binary matrix <code>grid</code>. You are allowed to change <strong>at most one</strong> <code>0</code> to be <code>1</code>.</p>

<p>Return <em>the size of the largest <strong>island</strong> in</em> <code>grid</code> <em>after applying this operation</em>.</p>

<p>An <strong>island</strong> is a 4-directionally connected group of <code>1</code>s.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> grid = [[1,0],[0,1]]
<strong>Output:</strong> 3
<strong>Explanation:</strong> Change one 0 to 1 and connect two 1s, then we get an island with area = 3.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> grid = [[1,1],[1,0]]
<strong>Output:</strong> 4
<strong>Explanation: </strong>Change the 0 to 1 and make the island bigger, only one island with area = 4.</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> grid = [[1,1],[1,1]]
<strong>Output:</strong> 4
<strong>Explanation:</strong> Can&#39;t change any 0 to 1, only one island with area = 4.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == grid.length</code></li>
	<li><code>n == grid[i].length</code></li>
	<li><code>1 &lt;= n &lt;= 500</code></li>
	<li><code>grid[i][j]</code> is either <code>0</code> or <code>1</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='making-a-large-island'
class Solution:
    def largestIsland(self, grid: List[List[int]]) -> int:
        rows, cols = len(grid), len(grid[0])
        colorIndex = 2
        mp = defaultdict(int)

        def dfs(x, y, color):
            size = 1
            grid[x][y] = color
            
            for dx, dy in [(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)]:
                if 0 <= dx < rows and 0 <= dy < cols and grid[dx][dy] == 1:
                    size += dfs(dx, dy, color)

            return size

        for i in range(rows):
            for j in range(cols):
                if grid[i][j] == 1:
                    size = dfs(i, j, colorIndex)
                    mp[colorIndex] = size
                    colorIndex += 1
            
        res = mp[2]

        for x in range(rows):
            for y in range(cols):
                if grid[x][y] == 0:
                    curr = 1
                    vis = set()

                    for dx, dy in [(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)]:
                        if 0 <= dx < rows and 0 <= dy < cols and grid[dx][dy] not in vis:
                            curr += mp[grid[dx][dy]]
                            vis.add(grid[dx][dy])

                    res = max(res, curr)

        return res
```

