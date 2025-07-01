---
title: 1992. Find All Groups of Farmland
draft: false
tags: 
  - leetcode-medium
  - array
  - depth-first-search
  - breadth-first-search
  - matrix
  - biweekly-contest-60
  - contest-question
date: 2024-04-20
---

[Problem Link](https://leetcode.com/problems/find-all-groups-of-farmland/)

## Description

---
<p>You are given a <strong>0-indexed</strong> <code>m x n</code> binary matrix <code>land</code> where a <code>0</code> represents a hectare of forested land and a <code>1</code> represents a hectare of farmland.</p>

<p>To keep the land organized, there are designated rectangular areas of hectares that consist <strong>entirely</strong> of farmland. These rectangular areas are called <strong>groups</strong>. No two groups are adjacent, meaning farmland in one group is <strong>not</strong> four-directionally adjacent to another farmland in a different group.</p>

<p><code>land</code> can be represented by a coordinate system where the top left corner of <code>land</code> is <code>(0, 0)</code> and the bottom right corner of <code>land</code> is <code>(m-1, n-1)</code>. Find the coordinates of the top left and bottom right corner of each <strong>group</strong> of farmland. A <strong>group</strong> of farmland with a top left corner at <code>(r<sub>1</sub>, c<sub>1</sub>)</code> and a bottom right corner at <code>(r<sub>2</sub>, c<sub>2</sub>)</code> is represented by the 4-length array <code>[r<sub>1</sub>, c<sub>1</sub>, r<sub>2</sub>, c<sub>2</sub>].</code></p>

<p>Return <em>a 2D array containing the 4-length arrays described above for each <strong>group</strong> of farmland in </em><code>land</code><em>. If there are no groups of farmland, return an empty array. You may return the answer in <strong>any order</strong></em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/07/27/screenshot-2021-07-27-at-12-23-15-copy-of-diagram-drawio-diagrams-net.png" style="width: 300px; height: 300px;" />
<pre>
<strong>Input:</strong> land = [[1,0,0],[0,1,1],[0,1,1]]
<strong>Output:</strong> [[0,0,0,0],[1,1,2,2]]
<strong>Explanation:</strong>
The first group has a top left corner at land[0][0] and a bottom right corner at land[0][0].
The second group has a top left corner at land[1][1] and a bottom right corner at land[2][2].
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/07/27/screenshot-2021-07-27-at-12-30-26-copy-of-diagram-drawio-diagrams-net.png" style="width: 200px; height: 200px;" />
<pre>
<strong>Input:</strong> land = [[1,1],[1,1]]
<strong>Output:</strong> [[0,0,1,1]]
<strong>Explanation:</strong>
The first group has a top left corner at land[0][0] and a bottom right corner at land[1][1].
</pre>

<p><strong class="example">Example 3:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/07/27/screenshot-2021-07-27-at-12-32-24-copy-of-diagram-drawio-diagrams-net.png" style="width: 100px; height: 100px;" />
<pre>
<strong>Input:</strong> land = [[0]]
<strong>Output:</strong> []
<strong>Explanation:</strong>
There are no groups of farmland.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>m == land.length</code></li>
	<li><code>n == land[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 300</code></li>
	<li><code>land</code> consists of only <code>0</code>&#39;s and <code>1</code>&#39;s.</li>
	<li>Groups of farmland are <strong>rectangular</strong> in shape.</li>
</ul>


## Solution

---
### Python3
``` py title='find-all-groups-of-farmland'
class Solution:
    def findFarmland(self, land: List[List[int]]) -> List[List[int]]:
        rows, cols = len(land), len(land[0])
        res = []

        def dfs(x, y):
            land[x][y] = 0

            res = [x, y, x, y]

            for dx, dy in [(x + 1, y), (x - 1, y), (x, y - 1), (x, y + 1)]:
                if 0 <= dx < rows and 0 <= dy < cols and land[dx][dy] == 1:
                    curr = dfs(dx, dy)
                    res[0] = min(res[0], curr[0])
                    res[1] = min(res[1], curr[1])
                    res[2] = max(res[2], curr[2])
                    res[3] = max(res[3], curr[3])
            
            return res
        
        for x in range(rows):
            for y in range(cols):
                if land[x][y] == 1:
                    res.append(dfs(x, y))
        
        return res
```

