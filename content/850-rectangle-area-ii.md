---
title: 850. Rectangle Area II
draft: false
tags: 
  - leetcode-hard
  - array
  - segment-tree
  - line-sweep
  - ordered-set
  - weekly-contest-88
  - contest-question
date: 2021-08-22
---

[Problem Link](https://leetcode.com/problems/rectangle-area-ii/)

## Description

---
<p>You are given a 2D array of axis-aligned <code>rectangles</code>. Each <code>rectangle[i] = [x<sub>i1</sub>, y<sub>i1</sub>, x<sub>i2</sub>, y<sub>i2</sub>]</code> denotes the <code>i<sup>th</sup></code> rectangle where <code>(x<sub>i1</sub>, y<sub>i1</sub>)</code> are the coordinates of the <strong>bottom-left corner</strong>, and <code>(x<sub>i2</sub>, y<sub>i2</sub>)</code> are the coordinates of the <strong>top-right corner</strong>.</p>

<p>Calculate the <strong>total area</strong> covered by all <code>rectangles</code> in the plane. Any area covered by two or more rectangles should only be counted <strong>once</strong>.</p>

<p>Return <em>the <strong>total area</strong></em>. Since the answer may be too large, return it <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/06/06/rectangle_area_ii_pic.png" style="width: 600px; height: 450px;" />
<pre>
<strong>Input:</strong> rectangles = [[0,0,2,2],[1,0,2,3],[1,0,3,1]]
<strong>Output:</strong> 6
<strong>Explanation:</strong> A total area of 6 is covered by all three rectangles, as illustrated in the picture.
From (1,1) to (2,2), the green and red rectangles overlap.
From (1,0) to (2,3), all three rectangles overlap.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> rectangles = [[0,0,1000000000,1000000000]]
<strong>Output:</strong> 49
<strong>Explanation:</strong> The answer is 10<sup>18</sup> modulo (10<sup>9</sup> + 7), which is 49.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= rectangles.length &lt;= 200</code></li>
	<li><code>rectanges[i].length == 4</code></li>
	<li><code>0 &lt;= x<sub>i1</sub>, y<sub>i1</sub>, x<sub>i2</sub>, y<sub>i2</sub> &lt;= 10<sup>9</sup></code></li>
	<li><code>x<sub>i1 &lt;= </sub>x<sub>i2</sub></code></li>
	<li><code>y<sub>i1 &lt;=</sub> y<sub>i2</sub></code></li>
	<li>All rectangles have non zero area.</li>
</ul>


## Solution

---
### Python3
``` py title='rectangle-area-ii'
class Solution:
    def rectangleArea(self, rectangles: List[List[int]]) -> int:
        M = 10 ** 9 + 7
        recList = []
        
        def mergeRec(recList, curr, i):
            if len(recList) <= i:
                recList.append(curr)
                return
            
            r = recList[i]
            
            if curr[2] <= r[0] or curr[3] <= r[1] or curr[0] >= r[2] or curr[1] >= r[3]:
                mergeRec(recList, curr, i + 1)
                return
            
            if curr[0] < r[0]:
                mergeRec(recList, [curr[0], curr[1], r[0], curr[3]], i + 1)
            
            if curr[2] > r[2]:
                mergeRec(recList, [r[2], curr[1], curr[2], curr[3]], i + 1)
            
            if curr[1] < r[1]:
                mergeRec(recList, [max(curr[0], r[0]), curr[1], min(curr[2], r[2]), r[1]], i + 1)
            
            if curr[3] > r[3]:
                mergeRec(recList, [max(curr[0], r[0]), r[3], min(curr[2], r[2]), curr[3]], i + 1)
        
        for rec in rectangles:
            mergeRec(recList, rec, 0)

        res = 0

        for (x1, y1, x2, y2) in recList:
            res += (x2 - x1) * (y2 - y1)
        
        return res % M
```

