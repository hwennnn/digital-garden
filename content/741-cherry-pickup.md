---
title: 741. Cherry Pickup
draft: false
tags: 
  - leetcode-hard
  - array
  - dynamic-programming
  - matrix
  - weekly-contest-61
  - contest-question
date: 2022-01-08
---

[Problem Link](https://leetcode.com/problems/cherry-pickup/)

## Description

---
<p>You are given an <code>n x n</code> <code>grid</code> representing a field of cherries, each cell is one of three possible integers.</p>

<ul>
	<li><code>0</code> means the cell is empty, so you can pass through,</li>
	<li><code>1</code> means the cell contains a cherry that you can pick up and pass through, or</li>
	<li><code>-1</code> means the cell contains a thorn that blocks your way.</li>
</ul>

<p>Return <em>the maximum number of cherries you can collect by following the rules below</em>:</p>

<ul>
	<li>Starting at the position <code>(0, 0)</code> and reaching <code>(n - 1, n - 1)</code> by moving right or down through valid path cells (cells with value <code>0</code> or <code>1</code>).</li>
	<li>After reaching <code>(n - 1, n - 1)</code>, returning to <code>(0, 0)</code> by moving left or up through valid path cells.</li>
	<li>When passing through a path cell containing a cherry, you pick it up, and the cell becomes an empty cell <code>0</code>.</li>
	<li>If there is no valid path between <code>(0, 0)</code> and <code>(n - 1, n - 1)</code>, then no cherries can be collected.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/12/14/grid.jpg" style="width: 242px; height: 242px;" />
<pre>
<strong>Input:</strong> grid = [[0,1,-1],[1,0,-1],[1,1,1]]
<strong>Output:</strong> 5
<strong>Explanation:</strong> The player started at (0, 0) and went down, down, right right to reach (2, 2).
4 cherries were picked up during this single trip, and the matrix becomes [[0,1,-1],[0,0,-1],[0,0,0]].
Then, the player went left, up, up, left to return home, picking up one more cherry.
The total number of cherries picked up is 5, and this is the maximum possible.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> grid = [[1,1,-1],[1,-1,1],[-1,1,1]]
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == grid.length</code></li>
	<li><code>n == grid[i].length</code></li>
	<li><code>1 &lt;= n &lt;= 50</code></li>
	<li><code>grid[i][j]</code> is <code>-1</code>, <code>0</code>, or <code>1</code>.</li>
	<li><code>grid[0][0] != -1</code></li>
	<li><code>grid[n - 1][n - 1] != -1</code></li>
</ul>


## Solution

---
### Python3
``` py title='cherry-pickup'
class Solution:
    def cherryPickup(self, grid: List[List[int]]) -> int:
        n = len(grid)
        directions = [(1, 0), (0, 1)]
        
        @cache
        def go(r1, c1, r2, c2):
            if r1 == r2 == c1 == c2 == n - 1: return 0
            
            res = float('-inf')
            
            for dx1, dy1 in directions:
                R1, C1 = r1 + dx1, c1 + dy1
                if not (0 <= R1 < n and 0 <= C1 < n and grid[R1][C1] != -1): continue
                for dx2, dy2 in directions:
                    R2, C2 = r2 + dx2, c2 + dy2
                    
                    if 0 <= R2 < n and 0 <= C2 < n and grid[R2][C2] != -1:
                        cherries = grid[R1][C1] + (grid[R2][C2] * int((R1, C1) != (R2, C2)))
                        res = max(res, go(R1, C1, R2, C2) + cherries)
            
            return res
        
        return max(0, go(0, 0, 0, 0) + grid[0][0])
```

