---
title: 3240. Minimum Number of Flips to Make Binary Grid Palindromic II
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

[Problem Link](https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-ii/)

## Description

---
<p>You are given an <code>m x n</code> binary matrix <code>grid</code>.</p>

<p>A row or column is considered <strong>palindromic</strong> if its values read the same forward and backward.</p>

<p>You can <strong>flip</strong> any number of cells in <code>grid</code> from <code>0</code> to <code>1</code>, or from <code>1</code> to <code>0</code>.</p>

<p>Return the <strong>minimum</strong> number of cells that need to be flipped to make <strong>all</strong> rows and columns <strong>palindromic</strong>, and the total number of <code>1</code>&#39;s in <code>grid</code> <strong>divisible</strong> by <code>4</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">grid = [[1,0,0],[0,1,0],[0,0,1]]</span></p>

<p><strong>Output:</strong> <span class="example-io">3</span></p>

<p><strong>Explanation:</strong></p>

<p><img src="https://assets.leetcode.com/uploads/2024/08/01/image.png" style="width: 400px; height: 105px;" /></p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">grid = [[0,1],[0,1],[0,0]]</span></p>

<p><strong>Output:</strong> <span class="example-io">2</span></p>

<p><strong>Explanation:</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2024/07/08/screenshot-from-2024-07-09-01-37-48.png" style="width: 300px; height: 104px;" /></p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">grid = [[1],[1]]</span></p>

<p><strong>Output:</strong> <span class="example-io">2</span></p>

<p><strong>Explanation:</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2024/08/01/screenshot-from-2024-08-01-23-05-26.png" style="width: 200px; height: 70px;" /></p>
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
``` py title='minimum-number-of-flips-to-make-binary-grid-palindromic-ii'
class Solution:
    def minFlips(self, grid: List[List[int]]) -> int:
        rows, cols = len(grid), len(grid[0])
        flips = totalOnes = symmetricPairs = 0

        for i in range((rows + 1) // 2):
            for j in range((cols + 1) // 2):
                A = {(i, j), (i, cols - 1 - j), (rows - 1 - i, j), (rows - 1 - i, cols - 1 - j)}
                count = len(A)
                ones = sum(grid[x][y] for x, y in A)
                zeroes = count - ones
                flips += min(ones, zeroes) # flip all ones -> zeroes or zeroes -> ones
                
                if ones == zeroes and count == 2:
                    symmetricPairs += 1
                
                if zeroes < ones: # means ideally will swap all zeroes to ones
                    totalOnes += count

        if totalOnes % 4 == 2 and symmetricPairs > 0:
            return flips
        
        if totalOnes % 4 == 3 and symmetricPairs > 0:
            return flips + 1

        return flips + (totalOnes % 4)
```

