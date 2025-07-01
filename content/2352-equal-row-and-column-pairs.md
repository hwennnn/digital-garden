---
title: 2352. Equal Row and Column Pairs
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - matrix
  - simulation
  - weekly-contest-303
  - contest-question
date: 2023-06-13
---

[Problem Link](https://leetcode.com/problems/equal-row-and-column-pairs/)

## Description

---
<p>Given a <strong>0-indexed</strong> <code>n x n</code> integer matrix <code>grid</code>, <em>return the number of pairs </em><code>(r<sub>i</sub>, c<sub>j</sub>)</code><em> such that row </em><code>r<sub>i</sub></code><em> and column </em><code>c<sub>j</sub></code><em> are equal</em>.</p>

<p>A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/06/01/ex1.jpg" style="width: 150px; height: 153px;" />
<pre>
<strong>Input:</strong> grid = [[3,2,1],[1,7,6],[2,7,7]]
<strong>Output:</strong> 1
<strong>Explanation:</strong> There is 1 equal row and column pair:
- (Row 2, Column 1): [2,7,7]
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/06/01/ex2.jpg" style="width: 200px; height: 209px;" />
<pre>
<strong>Input:</strong> grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
<strong>Output:</strong> 3
<strong>Explanation:</strong> There are 3 equal row and column pairs:
- (Row 0, Column 0): [3,1,2,2]
- (Row 2, Column 2): [2,4,2,2]
- (Row 3, Column 2): [2,4,2,2]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == grid.length == grid[i].length</code></li>
	<li><code>1 &lt;= n &lt;= 200</code></li>
	<li><code>1 &lt;= grid[i][j] &lt;= 10<sup>5</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='equal-row-and-column-pairs'
class Solution:
    def equalPairs(self, grid: List[List[int]]) -> int:
        rows, cols = len(grid), len(grid[0])
        R = defaultdict(int)
        C = defaultdict(int)

        for row in grid:
            h = ",".join(map(str, row))

            R[h] += 1
        
        for col in zip(*grid):
            h = ",".join(map(str, col))

            C[h] += 1
        
        res = 0
        for k, v in R.items():
            res += v * C[k]
        
        return res


```

