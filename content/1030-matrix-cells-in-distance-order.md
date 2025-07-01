---
title: 1030. Matrix Cells in Distance Order
draft: false
tags: 
  - leetcode-easy
  - array
  - math
  - geometry
  - sorting
  - matrix
  - weekly-contest-133
  - contest-question
date: 2022-01-10
---

[Problem Link](https://leetcode.com/problems/matrix-cells-in-distance-order/)

## Description

---
<p>You are given four integers <code>row</code>, <code>cols</code>, <code>rCenter</code>, and <code>cCenter</code>. There is a <code>rows x cols</code> matrix and you are on the cell with the coordinates <code>(rCenter, cCenter)</code>.</p>

<p>Return <em>the coordinates of all cells in the matrix, sorted by their <strong>distance</strong> from </em><code>(rCenter, cCenter)</code><em> from the smallest distance to the largest distance</em>. You may return the answer in <strong>any order</strong> that satisfies this condition.</p>

<p>The <strong>distance</strong> between two cells <code>(r<sub>1</sub>, c<sub>1</sub>)</code> and <code>(r<sub>2</sub>, c<sub>2</sub>)</code> is <code>|r<sub>1</sub> - r<sub>2</sub>| + |c<sub>1</sub> - c<sub>2</sub>|</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> rows = 1, cols = 2, rCenter = 0, cCenter = 0
<strong>Output:</strong> [[0,0],[0,1]]
<strong>Explanation:</strong> The distances from (0, 0) to other cells are: [0,1]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> rows = 2, cols = 2, rCenter = 0, cCenter = 1
<strong>Output:</strong> [[0,1],[0,0],[1,1],[1,0]]
<strong>Explanation:</strong> The distances from (0, 1) to other cells are: [0,1,1,2]
The answer [[0,1],[1,1],[0,0],[1,0]] would also be accepted as correct.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> rows = 2, cols = 3, rCenter = 1, cCenter = 2
<strong>Output:</strong> [[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]
<strong>Explanation:</strong> The distances from (1, 2) to other cells are: [0,1,1,2,2,3]
There are other answers that would also be accepted as correct, such as [[1,2],[1,1],[0,2],[1,0],[0,1],[0,0]].
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= rows, cols &lt;= 100</code></li>
	<li><code>0 &lt;= rCenter &lt; rows</code></li>
	<li><code>0 &lt;= cCenter &lt; cols</code></li>
</ul>


## Solution

---
### Python3
``` py title='matrix-cells-in-distance-order'
class Solution:
    def allCellsDistOrder(self, rows: int, cols: int, rCenter: int, cCenter: int) -> List[List[int]]:
        res = []
        visited = set((rCenter, cCenter))
        
        queue = deque([(rCenter, cCenter)])
        
        while queue:
            x, y = queue.popleft()

            for dx, dy in [(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)]:
                if 0 <= dx < rows and 0 <= dy < cols and (dx, dy) not in visited:
                    visited.add((dx, dy))
                    queue.append((dx, dy))
                    res.append((abs(dx - rCenter) + abs(dy - cCenter), [dx, dy]))

        res.sort()
        
        return [v[1] for v in res]
```

