---
title: 1970. Last Day Where You Can Still Cross
draft: false
tags: 
  - leetcode-hard
  - array
  - binary-search
  - depth-first-search
  - breadth-first-search
  - union-find
  - matrix
  - weekly-contest-254
  - contest-question
date: 2023-06-30
---

[Problem Link](https://leetcode.com/problems/last-day-where-you-can-still-cross/)

## Description

---
<p>There is a <strong>1-based</strong> binary matrix where <code>0</code> represents land and <code>1</code> represents water. You are given integers <code>row</code> and <code>col</code> representing the number of rows and columns in the matrix, respectively.</p>

<p>Initially on day <code>0</code>, the <strong>entire</strong> matrix is <strong>land</strong>. However, each day a new cell becomes flooded with <strong>water</strong>. You are given a <strong>1-based</strong> 2D array <code>cells</code>, where <code>cells[i] = [r<sub>i</sub>, c<sub>i</sub>]</code> represents that on the <code>i<sup>th</sup></code> day, the cell on the <code>r<sub>i</sub><sup>th</sup></code> row and <code>c<sub>i</sub><sup>th</sup></code> column (<strong>1-based</strong> coordinates) will be covered with <strong>water</strong> (i.e., changed to <code>1</code>).</p>

<p>You want to find the <strong>last</strong> day that it is possible to walk from the <strong>top</strong> to the <strong>bottom</strong> by only walking on land cells. You can start from <strong>any</strong> cell in the top row and end at <strong>any</strong> cell in the bottom row. You can only travel in the<strong> four</strong> cardinal directions (left, right, up, and down).</p>

<p>Return <em>the <strong>last</strong> day where it is possible to walk from the <strong>top</strong> to the <strong>bottom</strong> by only walking on land cells</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/07/27/1.png" style="width: 624px; height: 162px;" />
<pre>
<strong>Input:</strong> row = 2, col = 2, cells = [[1,1],[2,1],[1,2],[2,2]]
<strong>Output:</strong> 2
<strong>Explanation:</strong> The above image depicts how the matrix changes each day starting from day 0.
The last day where it is possible to cross from top to bottom is on day 2.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/07/27/2.png" style="width: 504px; height: 178px;" />
<pre>
<strong>Input:</strong> row = 2, col = 2, cells = [[1,1],[1,2],[2,1],[2,2]]
<strong>Output:</strong> 1
<strong>Explanation:</strong> The above image depicts how the matrix changes each day starting from day 0.
The last day where it is possible to cross from top to bottom is on day 1.
</pre>

<p><strong class="example">Example 3:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/07/27/3.png" style="width: 666px; height: 167px;" />
<pre>
<strong>Input:</strong> row = 3, col = 3, cells = [[1,2],[2,1],[3,3],[2,2],[1,1],[1,3],[2,3],[3,2],[3,1]]
<strong>Output:</strong> 3
<strong>Explanation:</strong> The above image depicts how the matrix changes each day starting from day 0.
The last day where it is possible to cross from top to bottom is on day 3.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= row, col &lt;= 2 * 10<sup>4</sup></code></li>
	<li><code>4 &lt;= row * col &lt;= 2 * 10<sup>4</sup></code></li>
	<li><code>cells.length == row * col</code></li>
	<li><code>1 &lt;= r<sub>i</sub> &lt;= row</code></li>
	<li><code>1 &lt;= c<sub>i</sub> &lt;= col</code></li>
	<li>All the values of <code>cells</code> are <strong>unique</strong>.</li>
</ul>


## Solution

---
### Python3
``` py title='last-day-where-you-can-still-cross'
class Solution:
    def latestDayToCross(self, row: int, col: int, cells: List[List[int]]) -> int:
        
        def good(k):
            grid = [[0] * col for _ in range(row)]

            for i in range(k):
                x, y = cells[i]
                grid[x - 1][y - 1] = 1

            queue = deque()

            for y in range(col):
                if grid[0][y] == 0:
                    queue.append((0, y))
                    grid[0][y] = 1

            while queue:
                x, y = queue.popleft()

                if x == row - 1: return True

                for dx, dy in [(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)]:
                    if 0 <= dx < row and 0 <= dy < col and grid[dx][dy] == 0:
                        grid[dx][dy] = 1
                        queue.append((dx, dy))

            return False

        left, right = 1, row * col
        
        while left < right:
            mid = (left + right + 1) // 2

            if good(mid):
                left = mid
            else:
                right = mid - 1
        
        return left

```

