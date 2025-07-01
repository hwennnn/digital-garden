---
title: 2850. Minimum Moves to Spread Stones Over Grid
draft: false
tags: 
  - leetcode-medium
  - array
  - dynamic-programming
  - breadth-first-search
  - matrix
  - weekly-contest-362
  - contest-question
date: 2023-09-10
---

[Problem Link](https://leetcode.com/problems/minimum-moves-to-spread-stones-over-grid/)

## Description

---
<p>You are given a <strong>0-indexed</strong> 2D integer matrix <code>grid</code> of size <code>3 * 3</code>, representing the number of stones in each cell. The grid contains exactly <code>9</code> stones, and there can be <strong>multiple</strong> stones in a single cell.</p>

<p>In one move, you can move a single stone from its current cell to any other cell if the two cells share a side.</p>

<p>Return <em>the <strong>minimum number of moves</strong> required to place one stone in each cell</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2023/08/23/example1-3.svg" style="width: 401px; height: 281px;" />
<pre>
<strong>Input:</strong> grid = [[1,1,0],[1,1,1],[1,2,1]]
<strong>Output:</strong> 3
<strong>Explanation:</strong> One possible sequence of moves to place one stone in each cell is: 
1- Move one stone from cell (2,1) to cell (2,2).
2- Move one stone from cell (2,2) to cell (1,2).
3- Move one stone from cell (1,2) to cell (0,2).
In total, it takes 3 moves to place one stone in each cell of the grid.
It can be shown that 3 is the minimum number of moves required to place one stone in each cell.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2023/08/23/example2-2.svg" style="width: 401px; height: 281px;" />
<pre>
<strong>Input:</strong> grid = [[1,3,0],[1,0,0],[1,0,3]]
<strong>Output:</strong> 4
<strong>Explanation:</strong> One possible sequence of moves to place one stone in each cell is:
1- Move one stone from cell (0,1) to cell (0,2).
2- Move one stone from cell (0,1) to cell (1,1).
3- Move one stone from cell (2,2) to cell (1,2).
4- Move one stone from cell (2,2) to cell (2,1).
In total, it takes 4 moves to place one stone in each cell of the grid.
It can be shown that 4 is the minimum number of moves required to place one stone in each cell.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>grid.length == grid[i].length == 3</code></li>
	<li><code>0 &lt;= grid[i][j] &lt;= 9</code></li>
	<li>Sum of <code>grid</code> is equal to <code>9</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='minimum-moves-to-spread-stones-over-grid'
class Solution:
    def minimumMoves(self, grid: List[List[int]]) -> int:
        rows, cols = len(grid), len(grid[0])
        zeroes = []
        A = []

        for i in range(rows):
            for j in range(cols):
                if grid[i][j] > 0:
                    if grid[i][j] > 1:
                        A.append((i, j))
                elif grid[i][j] == 0:
                    zeroes.append((i, j))
        
        
        M, N = len(zeroes), len(A)

        def backtrack(index):
            if index == M: return 0
            
            x, y = zeroes[index]
            res = inf
            
            for j in range(N):
                dx, dy = A[j]
                if grid[dx][dy] == 1: continue
                    
                grid[dx][dy] -= 1
                distance = abs(x - dx) + abs(y - dy)
                
                res = min(res, distance + backtrack(index + 1))
                
                grid[dx][dy] += 1
            
            return res
                                 
        return backtrack(0)
            
            
```

