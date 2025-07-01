---
title: 3122. Minimum Number of Operations to Satisfy Conditions
draft: false
tags: 
  - leetcode-medium
  - array
  - dynamic-programming
  - matrix
  - weekly-contest-394
  - contest-question
date: 2024-04-22
---

[Problem Link](https://leetcode.com/problems/minimum-number-of-operations-to-satisfy-conditions/)

## Description

---
<p>You are given a 2D matrix <code>grid</code> of size <code>m x n</code>. In one <strong>operation</strong>, you can change the value of <strong>any</strong> cell to <strong>any</strong> non-negative number. You need to perform some <strong>operations</strong> such that each cell <code>grid[i][j]</code> is:</p>

<ul>
	<li>Equal to the cell below it, i.e. <code>grid[i][j] == grid[i + 1][j]</code> (if it exists).</li>
	<li>Different from the cell to its right, i.e. <code>grid[i][j] != grid[i][j + 1]</code> (if it exists).</li>
</ul>

<p>Return the <strong>minimum</strong> number of operations needed.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">grid = [[1,0,2],[1,0,2]]</span></p>

<p><strong>Output:</strong> 0</p>

<p><strong>Explanation:</strong></p>

<p><strong><img alt="" src="https://assets.leetcode.com/uploads/2024/04/15/examplechanged.png" style="width: 254px; height: 186px;padding: 10px; background: #fff; border-radius: .5rem;" /></strong></p>

<p>All the cells in the matrix already satisfy the properties.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">grid = [[1,1,1],[0,0,0]]</span></p>

<p><strong>Output:</strong> 3</p>

<p><strong>Explanation:</strong></p>

<p><strong><img alt="" src="https://assets.leetcode.com/uploads/2024/03/27/example21.png" style="width: 254px; height: 186px;padding: 10px; background: #fff; border-radius: .5rem;" /></strong></p>

<p>The matrix becomes <code>[[1,0,1],[1,0,1]]</code> which satisfies the properties, by doing these 3 operations:</p>

<ul>
	<li>Change <code>grid[1][0]</code> to 1.</li>
	<li>Change <code>grid[0][1]</code> to 0.</li>
	<li>Change <code>grid[1][2]</code> to 1.</li>
</ul>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">grid = [[1],[2],[3]]</span></p>

<p><strong>Output:</strong> 2</p>

<p><strong>Explanation:</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2024/03/31/changed.png" style="width: 86px; height: 277px;padding: 10px; background: #fff; border-radius: .5rem;" /></p>

<p>There is a single column. We can change the value to 1 in each cell using 2 operations.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n, m &lt;= 1000</code></li>
	<li><code>0 &lt;= grid[i][j] &lt;= 9</code></li>
</ul>


## Solution

---
### Python3
``` py title='minimum-number-of-operations-to-satisfy-conditions'
class Solution:
    def minimumOperations(self, grid: List[List[int]]) -> int:
        rows, cols = len(grid), len(grid[0])
        counterCol = [[0] * 10 for _ in range(cols)]
        
        for c, col in enumerate(zip(*grid)):
            for v in col:
                counterCol[c][v] += 1
        
        @cache
        def go(j, last):
            if j == cols: return 0
            
            res = inf
            
            for k in range(10):
                # means the k has been used already
                if last == k: continue

                # change the current column to k
                res = min(res, go(j + 1, k) + (rows - counterCol[j][k]))
            
            return res
        
        return go(0, -1)
```

