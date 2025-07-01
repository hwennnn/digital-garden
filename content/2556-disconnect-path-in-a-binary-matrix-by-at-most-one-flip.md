---
title: 2556. Disconnect Path in a Binary Matrix by at Most One Flip
draft: false
tags: 
  - leetcode-medium
  - array
  - dynamic-programming
  - depth-first-search
  - breadth-first-search
  - matrix
  - biweekly-contest-97
  - contest-question
date: 2023-02-05
---

[Problem Link](https://leetcode.com/problems/disconnect-path-in-a-binary-matrix-by-at-most-one-flip/)

## Description

---
<p>You are given a <strong>0-indexed</strong> <code>m x n</code> <strong>binary</strong> matrix <code>grid</code>. You can move from a cell <code>(row, col)</code> to any of the cells <code>(row + 1, col)</code> or <code>(row, col + 1)</code> that has the value <code>1</code>.&nbsp;The matrix is <strong>disconnected</strong> if there is no path from <code>(0, 0)</code> to <code>(m - 1, n - 1)</code>.</p>

<p>You can flip the value of <strong>at most one</strong> (possibly none) cell. You <strong>cannot flip</strong> the cells <code>(0, 0)</code> and <code>(m - 1, n - 1)</code>.</p>

<p>Return <code>true</code> <em>if it is possible to make the matrix disconnect or </em><code>false</code><em> otherwise</em>.</p>

<p><strong>Note</strong> that flipping a cell changes its value from <code>0</code> to <code>1</code> or from <code>1</code> to <code>0</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/12/07/yetgrid2drawio.png" style="width: 441px; height: 151px;" />
<pre>
<strong>Input:</strong> grid = [[1,1,1],[1,0,0],[1,1,1]]
<strong>Output:</strong> true
<strong>Explanation:</strong> We can change the cell shown in the diagram above. There is no path from (0, 0) to (2, 2) in the resulting grid.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/12/07/yetgrid3drawio.png" />
<pre>
<strong>Input:</strong> grid = [[1,1,1],[1,0,1],[1,1,1]]
<strong>Output:</strong> false
<strong>Explanation:</strong> It is not possible to change at most one cell such that there is not path from (0, 0) to (2, 2).
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == grid.length</code></li>
	<li><code>n == grid[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 1000</code></li>
	<li><code>1 &lt;= m * n &lt;= 10<sup>5</sup></code></li>
	<li><code>grid[i][j]</code> is either <code>0</code> or <code>1</code>.</li>
	<li><code>grid[0][0] == grid[m - 1][n - 1] == 1</code></li>
</ul>


## Solution

---
### Python3
``` py title='disconnect-path-in-a-binary-matrix-by-at-most-one-flip'
class Solution:
    def isPossibleToCutPath(self, grid: List[List[int]]) -> bool:
        rows, cols = len(grid), len(grid[0])
        
        def dfs(x, y):
            if x + 1 == rows and y + 1 == cols: return True

            if x >= rows or y >= cols or grid[x][y] == 0: return False

            grid[x][y] = 0

            return dfs(x + 1, y) or dfs(x, y + 1)
        
        if not dfs(0, 0): return True
        grid[0][0] = 1

        return not dfs(0, 0)
```
### C++
``` cpp title='disconnect-path-in-a-binary-matrix-by-at-most-one-flip'
class Solution {
public:
    bool dfs(vector<vector<int>> &grid, int i, int j){ 
        if(i+1 == grid.size() && j+1 == grid[0].size()) return true;
        if(i >= grid.size() || j >= grid[0].size() || grid[i][j] == 0) return false;
        grid[i][j] = 0;
        return dfs(grid, i+1, j) || dfs(grid, i, j+1);
    }

    bool isPossibleToCutPath(vector<vector<int>>& grid) { 
        if(dfs(grid, 0, 0) == false) return true;
        grid[0][0] = 1;
        return !dfs(grid, 0, 0);
    }
};
```

