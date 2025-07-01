---
title: 840. Magic Squares In Grid
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - math
  - matrix
  - weekly-contest-86
  - contest-question
date: 2024-08-09
---

[Problem Link](https://leetcode.com/problems/magic-squares-in-grid/)

## Description

---
<p>A <code>3 x 3</code> <strong>magic square</strong> is a <code>3 x 3</code> grid filled with distinct numbers <strong>from </strong>1<strong> to </strong>9 such that each row, column, and both diagonals all have the same sum.</p>

<p>Given a <code>row x col</code> <code>grid</code> of integers, how many <code>3 x 3</code> magic square subgrids are there?</p>

<p>Note: while a magic square can only contain numbers from 1 to 9, <code>grid</code> may contain numbers up to 15.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/09/11/magic_main.jpg" style="width: 322px; height: 242px;" />
<pre>
<strong>Input:</strong> grid = [[4,3,8,4],[9,5,1,9],[2,7,6,2]]
<strong>Output:</strong> 1
<strong>Explanation: </strong>
The following subgrid is a 3 x 3 magic square:
<img alt="" src="https://assets.leetcode.com/uploads/2020/09/11/magic_valid.jpg" style="width: 242px; height: 242px;" />
while this one is not:
<img alt="" src="https://assets.leetcode.com/uploads/2020/09/11/magic_invalid.jpg" style="width: 242px; height: 242px;" />
In total, there is only one magic square inside the given grid.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> grid = [[8]]
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>row == grid.length</code></li>
	<li><code>col == grid[i].length</code></li>
	<li><code>1 &lt;= row, col &lt;= 10</code></li>
	<li><code>0 &lt;= grid[i][j] &lt;= 15</code></li>
</ul>


## Solution

---
### Python3
``` py title='magic-squares-in-grid'
class Solution:
    def numMagicSquaresInside(self, grid: List[List[int]]) -> int:
        cnt = 0
        # Construct the 3x3 square
        for i in range(len(grid)-2):
            for j in range(len(grid)-2):
                temp_grid = [grid[i+k][j:j+3] for k in range(3)]
                if self.isMagicSquare(temp_grid):
                    cnt += 1
        
        return cnt
        
    
    def isMagicSquare(self, grid):
        '''
        Check whether the given grid is a magic square
        '''
        # Check the elements
        flat = [num for row in grid for num in row]
        if sorted(flat) != [1, 2, 3, 4, 5, 6, 7, 8, 9]:
            return False
        
        # Check the row, column and diagnal sums
        row_sums = [sum(row) for row in grid]
        col_sums = [sum([row[i] for row in grid]) for i in range(3)]
        diag_sums = [sum([grid[i][i] for i in range(3)]), (grid[0][2] + grid[1][1] + grid[2][0])]
        row_sums.extend(col_sums)
        row_sums.extend(diag_sums)
        return len(set(row_sums)) == 1
```

