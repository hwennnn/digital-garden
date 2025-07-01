---
title: 407. Trapping Rain Water II
draft: false
tags: 
  - leetcode-hard
  - array
  - breadth-first-search
  - heap-priority-queue
  - matrix
  - weekly-contest-6
  - contest-question
date: 2025-01-19
---

[Problem Link](https://leetcode.com/problems/trapping-rain-water-ii/)

## Description

---
<p>Given an <code>m x n</code> integer matrix <code>heightMap</code> representing the height of each unit cell in a 2D elevation map, return <em>the volume of water it can trap after raining</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/04/08/trap1-3d.jpg" style="width: 361px; height: 321px;" />
<pre>
<strong>Input:</strong> heightMap = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]
<strong>Output:</strong> 4
<strong>Explanation:</strong> After the rain, water is trapped between the blocks.
We have two small ponds 1 and 3 units trapped.
The total volume of water trapped is 4.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/04/08/trap2-3d.jpg" style="width: 401px; height: 321px;" />
<pre>
<strong>Input:</strong> heightMap = [[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]]
<strong>Output:</strong> 10
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == heightMap.length</code></li>
	<li><code>n == heightMap[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 200</code></li>
	<li><code>0 &lt;= heightMap[i][j] &lt;= 2 * 10<sup>4</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='trapping-rain-water-ii'
class Solution:
    def trapRainWater(self, heights: List[List[int]]) -> int:
        rows, cols = len(heights), len(heights[0])
        res = 0
        visited = [[False] * cols for _ in range(rows)]
        pq = []
        
        for x in range(0, rows):
            visited[x][0] = True
            heappush(pq, (heights[x][0], x, 0))
            visited[x][cols - 1] = True
            heappush(pq, (heights[x][cols - 1], x, cols - 1))
        
        for y in range(cols):
            visited[0][y] = True
            heappush(pq, (heights[0][y], 0, y))
            visited[rows - 1][y] = True
            heappush(pq, (heights[rows - 1][y], rows - 1, y))
        
        while pq:
            h, x, y = heappop(pq)

            for dx, dy in [(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)]:
                if 0 <= dx < rows and 0 <= dy < cols and not visited[dx][dy]:
                    visited[dx][dy] = True
                    res += max(0, h - heights[dx][dy])
                    heappush(pq, (max(h, heights[dx][dy]), dx, dy))

        return res
```

