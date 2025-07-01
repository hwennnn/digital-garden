---
title: 939. Minimum Area Rectangle
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - math
  - geometry
  - sorting
  - weekly-contest-110
  - contest-question
date: 2022-02-25
---

[Problem Link](https://leetcode.com/problems/minimum-area-rectangle/)

## Description

---
<p>You are given an array of points in the <strong>X-Y</strong> plane <code>points</code> where <code>points[i] = [x<sub>i</sub>, y<sub>i</sub>]</code>.</p>

<p>Return <em>the minimum area of a rectangle formed from these points, with sides parallel to the X and Y axes</em>. If there is not any such rectangle, return <code>0</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/08/03/rec1.JPG" style="width: 500px; height: 447px;" />
<pre>
<strong>Input:</strong> points = [[1,1],[1,3],[3,1],[3,3],[2,2]]
<strong>Output:</strong> 4
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/08/03/rec2.JPG" style="width: 500px; height: 477px;" />
<pre>
<strong>Input:</strong> points = [[1,1],[1,3],[3,1],[3,3],[4,1],[4,3]]
<strong>Output:</strong> 2
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= points.length &lt;= 500</code></li>
	<li><code>points[i].length == 2</code></li>
	<li><code>0 &lt;= x<sub>i</sub>, y<sub>i</sub> &lt;= 4 * 10<sup>4</sup></code></li>
	<li>All the given points are <strong>unique</strong>.</li>
</ul>


## Solution

---
### Python3
``` py title='minimum-area-rectangle'
class Solution:
    def minAreaRect(self, points: List[List[int]]) -> int:
        n = len(points)
        p = defaultdict(set) 
        res = float('inf')
        
        for x, y in points:
            p[x].add(y)

        for i in range(n):
            x1, y1 = points[i]
            for j in range(i + 1, n):
                x2, y2 = points[j]
                if x1 == x2 or y1 == y2: continue
                
                # x3, y3 = x1, y2
                # x4, y4 = x2, y1
                
                if y2 in p[x1] and y1 in p[x2]:
                    area = abs(x2 - x1) * abs(y1 - y2)
                    res = min(res, area)
                        
        return 0 if res == float('inf') else res
```

