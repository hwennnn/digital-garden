---
title: 994. Rotting Oranges
draft: false
tags: 
  - leetcode-medium
  - array
  - breadth-first-search
  - matrix
  - weekly-contest-124
  - contest-question
date: 2022-06-28
---

[Problem Link](https://leetcode.com/problems/rotting-oranges/)

## Description

---
<p>You are given an <code>m x n</code> <code>grid</code> where each cell can have one of three values:</p>

<ul>
	<li><code>0</code> representing an empty cell,</li>
	<li><code>1</code> representing a fresh orange, or</li>
	<li><code>2</code> representing a rotten orange.</li>
</ul>

<p>Every minute, any fresh orange that is <strong>4-directionally adjacent</strong> to a rotten orange becomes rotten.</p>

<p>Return <em>the minimum number of minutes that must elapse until no cell has a fresh orange</em>. If <em>this is impossible, return</em> <code>-1</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/02/16/oranges.png" style="width: 650px; height: 137px;" />
<pre>
<strong>Input:</strong> grid = [[2,1,1],[1,1,0],[0,1,1]]
<strong>Output:</strong> 4
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> grid = [[2,1,1],[0,1,1],[1,0,1]]
<strong>Output:</strong> -1
<strong>Explanation:</strong> The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> grid = [[0,2]]
<strong>Output:</strong> 0
<strong>Explanation:</strong> Since there are already no fresh oranges at minute 0, the answer is just 0.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == grid.length</code></li>
	<li><code>n == grid[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 10</code></li>
	<li><code>grid[i][j]</code> is <code>0</code>, <code>1</code>, or <code>2</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='rotting-oranges'
class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        rows, cols = len(grid), len(grid[0])
        fresh = mins = 0
        queue = collections.deque()
        
        for x in range(rows):
            for y in range(cols):
                if grid[x][y] == 2:
                    queue.append((x, y))
                    
                elif grid[x][y] == 1:
                    fresh += 1
                    
        if fresh == 0: return 0
        
        while queue:
            n = len(queue)
            
            for _ in range(n):
                x, y = queue.popleft()
                
                for dx, dy in [(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)]:
                    if 0 <= dx < rows and 0 <= dy < cols and grid[dx][dy] == 1:
                        grid[dx][dy] = 2
                        queue.append((dx, dy))
                        fresh -= 1
                        
            mins += 1
        
        return mins - 1 if fresh == 0 else -1
```

