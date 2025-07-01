---
title: 3239. Minimum Number of Flips to Make Binary Grid Palindromic I
draft: false
tags: 
  - leetcode-medium
  - array
  - two-pointers
  - matrix
  - biweekly-contest-136
  - contest-question
date: 2024-08-04
---

[Problem Link](https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-i/)

## Description

---
<p>You are given an <code>m x n</code> binary matrix <code>grid</code>.</p>

<p>A row or column is considered <strong>palindromic</strong> if its values read the same forward and backward.</p>

<p>You can <strong>flip</strong> any number of cells in <code>grid</code> from <code>0</code> to <code>1</code>, or from <code>1</code> to <code>0</code>.</p>

<p>Return the <strong>minimum</strong> number of cells that need to be flipped to make <strong>either</strong> all rows <strong>palindromic</strong> or all columns <strong>palindromic</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">grid = [[1,0,0],[0,0,0],[0,0,1]]</span></p>

<p><strong>Output:</strong> <span class="example-io">2</span></p>

<p><strong>Explanation:</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2024/07/07/screenshot-from-2024-07-08-00-20-10.png" style="width: 420px; height: 108px;" /></p>

<p>Flipping the highlighted cells makes all the rows palindromic.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">grid = </span>[[0,1],[0,1],[0,0]]</p>

<p><strong>Output:</strong> <span class="example-io">1</span></p>

<p><strong>Explanation:</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2024/07/07/screenshot-from-2024-07-08-00-31-23.png" style="width: 300px; height: 100px;" /></p>

<p>Flipping the highlighted cell makes all the columns palindromic.</p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">grid = [[1],[0]]</span></p>

<p><strong>Output:</strong> <span class="example-io">0</span></p>

<p><strong>Explanation:</strong></p>

<p>All rows are already palindromic.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == grid.length</code></li>
	<li><code>n == grid[i].length</code></li>
	<li><code>1 &lt;= m * n &lt;= 2 * 10<sup>5</sup></code></li>
	<li><code>0 &lt;= grid[i][j] &lt;= 1</code></li>
</ul>


## Solution

---
### Python3
``` py title='minimum-number-of-flips-to-make-binary-grid-palindromic-i'
class Solution:
    def minFlips(self, grid: List[List[int]]) -> int:
        rows, cols = len(grid), len(grid[0])
        res = 0

        # flip rows
        R = 0
        for row in grid:
            for j in range(cols // 2):
                if row[j] != row[~j]:
                    R += 1
        
        # flip cols
        C = 0
        for col in zip(*grid):
            for i in range(rows // 2):
                if col[i] != col[~i]:
                    C += 1

        return min(R, C)
```

