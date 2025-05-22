---
title: 3552. Grid Teleportation Traversal
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - breadth-first-search
  - matrix
date: 2025-05-22
---

[Problem Link](https://leetcode.com/problems/grid-teleportation-traversal/)

## Description

---
<p>You are given a 2D character grid <code>matrix</code> of size <code>m x n</code>, represented as an array of strings, where <code>matrix[i][j]</code> represents the cell at the intersection of the <code>i<sup>th</sup></code> row and <code>j<sup>th</sup></code> column. Each cell is one of the following:</p>

<ul>
	<li><code>&#39;.&#39;</code> representing an empty cell.</li>
	<li><code>&#39;#&#39;</code> representing an obstacle.</li>
	<li>An uppercase letter (<code>&#39;A&#39;</code>-<code>&#39;Z&#39;</code>) representing a teleportation portal.</li>
</ul>

<p>You start at the top-left cell <code>(0, 0)</code>, and your goal is to reach the bottom-right cell <code>(m - 1, n - 1)</code>. You can move from the current cell to any adjacent cell (up, down, left, right) as long as the destination cell is within the grid bounds and is not an obstacle<strong>.</strong></p>

<p>If you step on a cell containing a portal letter and you haven&#39;t used that portal letter before, you may instantly teleport to any other cell in the grid with the same letter. This teleportation does not count as a move, but each portal letter can be used<strong> at most </strong>once during your journey.</p>

<p>Return the <strong>minimum</strong> number of moves required to reach the bottom-right cell. If it is not possible to reach the destination, return <code>-1</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">matrix = [&quot;A..&quot;,&quot;.A.&quot;,&quot;...&quot;]</span></p>

<p><strong>Output:</strong> 2</p>

<p><strong>Explanation:</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2025/03/15/example04140.png" style="width: 151px; height: 151px;" /></p>

<ul>
	<li>Before the first move, teleport from <code>(0, 0)</code> to <code>(1, 1)</code>.</li>
	<li>In the first move, move from <code>(1, 1)</code> to <code>(1, 2)</code>.</li>
	<li>In the second move, move from <code>(1, 2)</code> to <code>(2, 2)</code>.</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">matrix = [&quot;.#...&quot;,&quot;.#.#.&quot;,&quot;.#.#.&quot;,&quot;...#.&quot;]</span></p>

<p><strong>Output:</strong> <span class="example-io">13</span></p>

<p><strong>Explanation:</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2025/03/15/ezgifcom-animated-gif-maker.gif" style="width: 251px; height: 201px;" /></p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= m == matrix.length &lt;= 10<sup>3</sup></code></li>
	<li><code>1 &lt;= n == matrix[i].length &lt;= 10<sup>3</sup></code></li>
	<li><code>matrix[i][j]</code> is either <code>&#39;#&#39;</code>, <code>&#39;.&#39;</code>, or an uppercase English letter.</li>
	<li><code>matrix[0][0]</code> is not an obstacle.</li>
</ul>


## Solution

---
### Python3
``` py title='grid-teleportation-traversal'
class Solution:
    def minMoves(self, matrix: List[str]) -> int:
        rows, cols = len(matrix), len(matrix[0])
        queue = deque([(0, 0, 0)])
        visited = [[False] * cols for _ in range(rows)]
        teleport = defaultdict(list)

        for i in range(rows):
            for j in range(cols):
                if matrix[i][j] not in ".#":
                    teleport[matrix[i][j]].append((i, j))

        visited[0][0] = True
        res = 0
        teleported = [False] * 26
        
        while queue:
            x, y, cost = queue.popleft()

            if x == rows - 1 and y == cols - 1: 
                return cost

            if matrix[x][y] not in ".#" and not teleported[(k := ord(matrix[x][y]) - ord('A'))]:
                for dx, dy in teleport[matrix[x][y]]:
                    queue.appendleft((dx, dy, cost))
                    visited[dx][dy] = True

                teleported[k] = True

            for dx, dy in [(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)]:
                if 0 <= dx < rows and 0 <= dy < cols and matrix[dx][dy] != '#' and not visited[dx][dy]:
                    queue.append((dx, dy, cost + 1))
                    visited[dx][dy] = True

        return -1
```

