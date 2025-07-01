---
title: 885. Spiral Matrix III
draft: false
tags: 
  - leetcode-medium
  - array
  - matrix
  - simulation
  - weekly-contest-97
  - contest-question
date: 2024-08-08
---

[Problem Link](https://leetcode.com/problems/spiral-matrix-iii/)

## Description

---
<p>You start at the cell <code>(rStart, cStart)</code> of an <code>rows x cols</code> grid facing east. The northwest corner is at the first row and column in the grid, and the southeast corner is at the last row and column.</p>

<p>You will walk in a clockwise spiral shape to visit every position in this grid. Whenever you move outside the grid&#39;s boundary, we continue our walk outside the grid (but may return to the grid boundary later.). Eventually, we reach all <code>rows * cols</code> spaces of the grid.</p>

<p>Return <em>an array of coordinates representing the positions of the grid in the order you visited them</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/08/24/example_1.png" style="width: 174px; height: 99px;" />
<pre>
<strong>Input:</strong> rows = 1, cols = 4, rStart = 0, cStart = 0
<strong>Output:</strong> [[0,0],[0,1],[0,2],[0,3]]
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/08/24/example_2.png" style="width: 202px; height: 142px;" />
<pre>
<strong>Input:</strong> rows = 5, cols = 6, rStart = 1, cStart = 4
<strong>Output:</strong> [[1,4],[1,5],[2,5],[2,4],[2,3],[1,3],[0,3],[0,4],[0,5],[3,5],[3,4],[3,3],[3,2],[2,2],[1,2],[0,2],[4,5],[4,4],[4,3],[4,2],[4,1],[3,1],[2,1],[1,1],[0,1],[4,0],[3,0],[2,0],[1,0],[0,0]]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= rows, cols &lt;= 100</code></li>
	<li><code>0 &lt;= rStart &lt; rows</code></li>
	<li><code>0 &lt;= cStart &lt; cols</code></li>
</ul>


## Solution

---
### Python3
``` py title='spiral-matrix-iii'
class Solution:
    def spiralMatrixIII(self, rows: int, cols: int, rStart: int, cStart: int) -> List[List[int]]:
        res = []
        dx, dy, n = 0, 1, 0
        while len(res) < rows * cols:
            for i in range(n // 2 + 1):
                if 0 <= rStart < rows and 0 <= cStart < cols:
                    res.append([rStart, cStart])
                rStart, cStart = rStart + dx, cStart + dy
            dx, dy, n = dy, -dx, n + 1
        return res
```

