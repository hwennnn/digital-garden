---
title: 3603. Minimum Cost Path with Alternating Directions II
draft: false
tags: 
  - leetcode-medium
  - biweekly-contest-160
  - contest-question
date: 2025-07-06
---

[Problem Link](https://leetcode.com/problems/minimum-cost-path-with-alternating-directions-ii/)

## Description

---
<p>You are given two integers <code>m</code> and <code>n</code> representing the number of rows and columns of a grid, respectively.</p>

<p>The cost to enter cell <code>(i, j)</code> is defined as <code>(i + 1) * (j + 1)</code>.</p>

<p>You are also given a 2D integer array <code>waitCost</code> where <code>waitCost[i][j]</code> defines the cost to <strong>wait</strong> on that cell.</p>

<p>You start at cell <code>(0, 0)</code> at second 1.</p>

<p>At each step, you follow an alternating pattern:</p>

<ul>
	<li>On <strong>odd-numbered</strong> seconds, you must move <strong>right</strong> or <strong>down</strong> to an <strong>adjacent</strong> cell, paying its entry cost.</li>
	<li>On <strong>even-numbered</strong> seconds, you must <strong>wait</strong> in place, paying <code>waitCost[i][j]</code>.</li>
</ul>

<p>Return the <strong>minimum</strong> total cost required to reach <code>(m - 1, n - 1)</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">m = 1, n = 2, waitCost = [[1,2]]</span></p>

<p><strong>Output:</strong> <span class="example-io">3</span></p>

<p><strong>Explanation:</strong></p>

<p>The optimal path is:</p>

<ul>
	<li>Start at cell <code>(0, 0)</code> at second 1 with entry cost <code>(0 + 1) * (0 + 1) = 1</code>.</li>
	<li><strong>Second 1</strong>: Move right to cell <code>(0, 1)</code> with entry cost <code>(0 + 1) * (1 + 1) = 2</code>.</li>
</ul>

<p>Thus, the total cost is <code>1 + 2 = 3</code>.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">m = 2, n = 2, waitCost = [[3,5],[2,4]]</span></p>

<p><strong>Output:</strong> <span class="example-io">9</span></p>

<p><strong>Explanation:</strong></p>

<p>The optimal path is:</p>

<ul>
	<li>Start at cell <code>(0, 0)</code> at second 1 with entry cost <code>(0 + 1) * (0 + 1) = 1</code>.</li>
	<li><strong>Second 1</strong>: Move down to cell <code>(1, 0)</code> with entry cost <code>(1 + 1) * (0 + 1) = 2</code>.</li>
	<li><strong>Second 2</strong>: Wait at cell <code>(1, 0)</code>, paying <code>waitCost[1][0] = 2</code>.</li>
	<li><strong>Second 3</strong>: Move right to cell <code>(1, 1)</code> with entry cost <code>(1 + 1) * (1 + 1) = 4</code>.</li>
</ul>

<p>Thus, the total cost is <code>1 + 2 + 2 + 4 = 9</code>.</p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">m = 2, n = 3, waitCost = [[6,1,4],[3,2,5]]</span></p>

<p><strong>Output:</strong> <span class="example-io">16</span></p>

<p><strong>Explanation:</strong></p>

<p>The optimal path is:</p>

<ul>
	<li>Start at cell <code>(0, 0)</code> at second 1 with entry cost <code>(0 + 1) * (0 + 1) = 1</code>.</li>
	<li><strong>Second 1</strong>: Move right to cell <code>(0, 1)</code> with entry cost <code>(0 + 1) * (1 + 1) = 2</code>.</li>
	<li><strong>Second 2</strong>: Wait at cell <code>(0, 1)</code>, paying <code>waitCost[0][1] = 1</code>.</li>
	<li><strong>Second 3</strong>: Move down to cell <code>(1, 1)</code> with entry cost <code>(1 + 1) * (1 + 1) = 4</code>.</li>
	<li><strong>Second 4</strong>: Wait at cell <code>(1, 1)</code>, paying <code>waitCost[1][1] = 2</code>.</li>
	<li><strong>Second 5</strong>: Move right to cell <code>(1, 2)</code> with entry cost <code>(1 + 1) * (2 + 1) = 6</code>.</li>
</ul>

<p>Thus, the total cost is <code>1 + 2 + 1 + 4 + 2 + 6 = 16</code>.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= m, n &lt;= 10<sup>5</sup></code></li>
	<li><code>2 &lt;= m * n &lt;= 10<sup>5</sup></code></li>
	<li><code>waitCost.length == m</code></li>
	<li><code>waitCost[0].length == n</code></li>
	<li><code>0 &lt;= waitCost[i][j] &lt;= 10<sup>5</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='minimum-cost-path-with-alternating-directions-ii'
class Solution:
    def minCost(self, rows: int, cols: int, waitCost: List[List[int]]) -> int:
        dist = [[[inf] * 2 for _ in range(cols)] for _ in range(rows)]

        def calc(i, j):
            return (i + 1) * (j + 1)

        pq = [(1, 0, 0, 1)]
        dist[0][0][1] = 1
        
        while pq:
            cost, x, y, seconds = heappop(pq)

            if cost != dist[x][y][seconds]: continue

            if x == rows - 1 and y == cols - 1: return cost

            newSeconds = (seconds + 1) % 2

            if seconds % 2 == 1:
                # go down
                if x + 1 < rows:
                    newCost = cost + calc(x + 1, y)
                    if newCost < dist[x + 1][y][newSeconds]:
                        dist[x + 1][y][newSeconds] = newCost
                        heappush(pq, (newCost, x + 1, y, newSeconds))

                # go right
                if y + 1 < cols:
                    newCost = cost + calc(x, y + 1)
                    if newCost < dist[x][y + 1][newSeconds]:
                        dist[x][y + 1][newSeconds] = newCost
                        heappush(pq, (newCost, x, y + 1, newSeconds))
            else:
                newCost = cost + waitCost[x][y]
                if newCost < dist[x][y][newSeconds]:
                    dist[x][y][newSeconds] = newCost
                    heappush(pq, (newCost, x, y, newSeconds))
        
        return -1
```

