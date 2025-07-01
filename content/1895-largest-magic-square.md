---
title: 1895. Largest Magic Square
draft: false
tags: 
  - leetcode-medium
  - array
  - matrix
  - prefix-sum
  - biweekly-contest-54
  - contest-question
date: 2021-06-13
---

[Problem Link](https://leetcode.com/problems/largest-magic-square/)

## Description

---
<p>A <code>k x k</code> <strong>magic square</strong> is a <code>k x k</code> grid filled with integers such that every row sum, every column sum, and both diagonal sums are <strong>all equal</strong>. The integers in the magic square <strong>do not have to be distinct</strong>. Every <code>1 x 1</code> grid is trivially a <strong>magic square</strong>.</p>

<p>Given an <code>m x n</code> integer <code>grid</code>, return <em>the <strong>size</strong> (i.e., the side length </em><code>k</code><em>) of the <strong>largest magic square</strong> that can be found within this grid</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/05/29/magicsquare-grid.jpg" style="width: 413px; height: 335px;" />
<pre>
<strong>Input:</strong> grid = [[7,1,4,5,6],[2,5,1,6,4],[1,5,4,3,2],[1,2,7,3,4]]
<strong>Output:</strong> 3
<strong>Explanation:</strong> The largest magic square has a size of 3.
Every row sum, column sum, and diagonal sum of this magic square is equal to 12.
- Row sums: 5+1+6 = 5+4+3 = 2+7+3 = 12
- Column sums: 5+5+2 = 1+4+7 = 6+3+3 = 12
- Diagonal sums: 5+4+3 = 6+4+2 = 12
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/05/29/magicsquare2-grid.jpg" style="width: 333px; height: 255px;" />
<pre>
<strong>Input:</strong> grid = [[5,1,3,1],[9,3,3,1],[1,3,3,8]]
<strong>Output:</strong> 2
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == grid.length</code></li>
	<li><code>n == grid[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 50</code></li>
	<li><code>1 &lt;= grid[i][j] &lt;= 10<sup>6</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='largest-magic-square'
class Solution:
    def largestMagicSquare(self, grid: List[List[int]]) -> int:
        rows, cols = len(grid), len(grid[0])
        self.res = 1
        
        rowPrefix = [[i for i in row] for row in grid]
        colPrefix = [[i for i in row] for row in grid]
        dlPrefix = [[i for i in row] for row in grid]
        drPrefix = [[i for i in row] for row in grid]
        
        # row
        for i in range(rows):
            for j in range(cols - 1):
                rowPrefix[i][j + 1] += rowPrefix[i][j]

        # cols
        for i in range(rows - 1):
            for j in range(cols):
                colPrefix[i + 1][j] += colPrefix[i][j]

        # diag left
        for i in range(rows - 1):
            for j in range(cols - 1):
                dlPrefix[i + 1][j + 1] += dlPrefix[i][j]

        # diag right
        for i in range(rows - 1):
            for j in range(cols - 1, 0, -1):
                drPrefix[i + 1][j - 1] += drPrefix[i][j]

        def dfs(x, y, size):
            
            if x + size < rows and y + size < cols:
                rowSum = [rowPrefix[i][y + size] - (0 if y == 0 else rowPrefix[i][y - 1]) for i in range(x, x + size + 1)]
                colSum = [colPrefix[x + size][j] - (0 if x == 0 else colPrefix[x - 1][j]) for j in range(y, y + size + 1)]
                diagLeft = dlPrefix[x + size][y + size] - (0 if x == 0 or y == 0 else dlPrefix[x - 1][y - 1])
                diagRight = drPrefix[x + size][y] - (0 if x - 1 < 0 or y + size + 1 >= cols else drPrefix[x - 1][y + size + 1])
                
                if (all(r == rowSum[0] for r in rowSum) and all(c == colSum[0] for c in colSum) and rowSum[0] == colSum[0] == diagLeft == diagRight):
                    self.res = max(self.res, size + 1)
                    
                dfs(x, y, size + 1)
            
        for i in range(rows):
            for j in range(cols):
                dfs(i, j, 1)
        
        return self.res
```

