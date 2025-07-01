---
title: 1139. Largest 1-Bordered Square
draft: false
tags: 
  - leetcode-medium
  - array
  - dynamic-programming
  - matrix
  - weekly-contest-147
  - contest-question
date: 2021-05-22
---

[Problem Link](https://leetcode.com/problems/largest-1-bordered-square/)

## Description

---
<p>Given a 2D <code>grid</code> of <code>0</code>s and <code>1</code>s, return the number of elements in&nbsp;the largest <strong>square</strong>&nbsp;subgrid that has all <code>1</code>s on its <strong>border</strong>, or <code>0</code> if such a subgrid&nbsp;doesn&#39;t exist in the <code>grid</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> grid = [[1,1,1],[1,0,1],[1,1,1]]
<strong>Output:</strong> 9
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> grid = [[1,1,0,0]]
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= grid.length &lt;= 100</code></li>
	<li><code>1 &lt;= grid[0].length &lt;= 100</code></li>
	<li><code>grid[i][j]</code> is <code>0</code> or <code>1</code></li>
</ul>

## Solution

---
### Python3
``` py title='largest-1-bordered-square'
class Solution:
    def largest1BorderedSquare(self, grid: List[List[int]]) -> int:
        rows, cols = len(grid), len(grid[0])
        horizontal = [[0] * cols for _ in range(rows)]
        vertical = [[0] * cols for _ in range(rows)]
        res = 0
        
        for i in range(rows):
            for j in range(cols):
                if grid[i][j] == 1:
                    horizontal[i][j] += (1 if j == 0 else 1 + horizontal[i][j - 1])
                    vertical[i][j] += (1 if i == 0 else 1 + vertical[i - 1][j])
        
        for i in range(rows - 1, -1, -1):
            for j in range(cols - 1, -1, -1):
                size = min(horizontal[i][j], vertical[i][j])
                
                while size > res:
                    if horizontal[i - size + 1][j] >= size and vertical[i][j - size + 1] >= size:
                        res = size
                    
                    size -= 1
        
        return res * res
```

