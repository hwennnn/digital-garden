---
title: 778. Swim in Rising Water
draft: false
tags: 
  - leetcode-hard
  - array
  - binary-search
  - depth-first-search
  - breadth-first-search
  - union-find
  - heap-priority-queue
  - matrix
  - weekly-contest-70
  - contest-question
date: 2021-06-21
---

[Problem Link](https://leetcode.com/problems/swim-in-rising-water/)

## Description

---
<p>You are given an <code>n x n</code> integer matrix <code>grid</code> where each value <code>grid[i][j]</code> represents the elevation at that point <code>(i, j)</code>.</p>

<p>The rain starts to fall. At time <code>t</code>, the depth of the water everywhere is <code>t</code>. You can swim from a square to another 4-directionally adjacent square if and only if the elevation of both squares individually are at most <code>t</code>. You can swim infinite distances in zero time. Of course, you must stay within the boundaries of the grid during your swim.</p>

<p>Return <em>the least time until you can reach the bottom right square </em><code>(n - 1, n - 1)</code><em> if you start at the top left square </em><code>(0, 0)</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/06/29/swim1-grid.jpg" style="width: 164px; height: 165px;" />
<pre>
<strong>Input:</strong> grid = [[0,2],[1,3]]
<strong>Output:</strong> 3
Explanation:
At time 0, you are in grid location (0, 0).
You cannot go anywhere else because 4-directionally adjacent neighbors have a higher elevation than t = 0.
You cannot reach point (1, 1) until time 3.
When the depth of water is 3, we can swim anywhere inside the grid.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/06/29/swim2-grid-1.jpg" style="width: 404px; height: 405px;" />
<pre>
<strong>Input:</strong> grid = [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]
<strong>Output:</strong> 16
<strong>Explanation:</strong> The final route is shown.
We need to wait until time 16 so that (0, 0) and (4, 4) are connected.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == grid.length</code></li>
	<li><code>n == grid[i].length</code></li>
	<li><code>1 &lt;= n &lt;= 50</code></li>
	<li><code>0 &lt;= grid[i][j] &lt;&nbsp;n<sup>2</sup></code></li>
	<li>Each value <code>grid[i][j]</code> is <strong>unique</strong>.</li>
</ul>


## Solution

---
### Python3
``` py title='swim-in-rising-water'
class Solution:
    def swimInWater(self, grid: List[List[int]]) -> int:
        N = len(grid)
        
        def dfs(x, y, mmax, visited):
            if x == y == N - 1: return True
            
            visited.add((x, y))

            for dx, dy in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
                if 0 <= dx < N and 0 <= dy < N and (dx, dy) not in visited and grid[dx][dy] <= mmax:
                    if dfs(dx, dy, mmax, visited): return True
                        
            return False
            
        
        left, right = max(grid[0][0], grid[-1][-1]), 2500
        while left < right:
            mid = left + (right - left) // 2

            if dfs(0, 0, mid, set()):
                right = mid
            else:
                left = mid + 1
            
        return left
```

