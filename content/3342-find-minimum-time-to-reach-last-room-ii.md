---
title: 3342. Find Minimum Time to Reach Last Room II
draft: false
tags: 
  - leetcode-medium
  - array
  - graph
  - heap-priority-queue
  - matrix
  - shortest-path
date: 2025-05-08
---

[Problem Link](https://leetcode.com/problems/find-minimum-time-to-reach-last-room-ii/)

## Description

---
<p>There is a dungeon with <code>n x m</code> rooms arranged as a grid.</p>

<p>You are given a 2D array <code>moveTime</code> of size <code>n x m</code>, where <code>moveTime[i][j]</code> represents the <strong>minimum</strong> time in seconds when you can <strong>start moving</strong> to that room. You start from the room <code>(0, 0)</code> at time <code>t = 0</code> and can move to an <strong>adjacent</strong> room. Moving between <strong>adjacent</strong> rooms takes one second for one move and two seconds for the next, <strong>alternating</strong> between the two.</p>

<p>Return the <strong>minimum</strong> time to reach the room <code>(n - 1, m - 1)</code>.</p>

<p>Two rooms are <strong>adjacent</strong> if they share a common wall, either <em>horizontally</em> or <em>vertically</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">moveTime = [[0,4],[4,4]]</span></p>

<p><strong>Output:</strong> 7</p>

<p><strong>Explanation:</strong></p>

<p>The minimum time required is 7 seconds.</p>

<ul>
	<li>At time <code>t == 4</code>, move from room <code>(0, 0)</code> to room <code>(1, 0)</code> in one second.</li>
	<li>At time <code>t == 5</code>, move from room <code>(1, 0)</code> to room <code>(1, 1)</code> in two seconds.</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">moveTime = [[0,0,0,0],[0,0,0,0]]</span></p>

<p><strong>Output:</strong> 6</p>

<p><strong>Explanation:</strong></p>

<p>The minimum time required is 6 seconds.</p>

<ul>
	<li>At time <code>t == 0</code>, move from room <code>(0, 0)</code> to room <code>(1, 0)</code> in one second.</li>
	<li>At time <code>t == 1</code>, move from room <code>(1, 0)</code> to room <code>(1, 1)</code> in two seconds.</li>
	<li>At time <code>t == 3</code>, move from room <code>(1, 1)</code> to room <code>(1, 2)</code> in one second.</li>
	<li>At time <code>t == 4</code>, move from room <code>(1, 2)</code> to room <code>(1, 3)</code> in two seconds.</li>
</ul>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">moveTime = [[0,1],[1,2]]</span></p>

<p><strong>Output:</strong> 4</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= n == moveTime.length &lt;= 750</code></li>
	<li><code>2 &lt;= m == moveTime[i].length &lt;= 750</code></li>
	<li><code>0 &lt;= moveTime[i][j] &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='find-minimum-time-to-reach-last-room-ii'
class Solution:
    def minTimeToReach(self, moveTime: List[List[int]]) -> int:
        rows, cols = len(moveTime), len(moveTime[0])
        dist = [[inf] * cols for _ in range(rows)]
        dist[0][0] = 0
        pq = [(0, 0, 0, 1)]

        while pq:
            d, x, y, cost = heappop(pq)

            if x == rows - 1 and y == cols - 1:
                return d

            if dist[x][y] != d: continue

            for dx, dy in [(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)]:
                if 0 <= dx < rows and 0 <= dy < cols and (curr := max(d, moveTime[dx][dy]) + cost) < dist[dx][dy]:
                    dist[dx][dy] = curr
                    heappush(pq, (curr, dx, dy, 2 if cost == 1 else 1))

        return -1
```

