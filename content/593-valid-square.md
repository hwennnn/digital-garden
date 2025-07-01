---
title: 593. Valid Square
draft: false
tags: 
  - leetcode-medium
  - math
  - geometry
  - weekly-contest-33
  - contest-question
date: 2020-11-11
---

[Problem Link](https://leetcode.com/problems/valid-square/)

## Description

---
<p>Given the coordinates of four points in 2D space <code>p1</code>, <code>p2</code>, <code>p3</code> and <code>p4</code>, return <code>true</code> <em>if the four points construct a square</em>.</p>

<p>The coordinate of a point <code>p<sub>i</sub></code> is represented as <code>[x<sub>i</sub>, y<sub>i</sub>]</code>. The input is <strong>not</strong> given in any order.</p>

<p>A <strong>valid square</strong> has four equal sides with positive length and four equal angles (90-degree angles).</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
<strong>Output:</strong> true
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,12]
<strong>Output:</strong> false
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> p1 = [1,0], p2 = [-1,0], p3 = [0,1], p4 = [0,-1]
<strong>Output:</strong> true
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>p1.length == p2.length == p3.length == p4.length == 2</code></li>
	<li><code>-10<sup>4</sup> &lt;= x<sub>i</sub>, y<sub>i</sub> &lt;= 10<sup>4</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='valid-square'
class Solution:
    def validSquare(self, p1: List[int], p2: List[int], p3: List[int], p4: List[int]) -> bool:
        points = [p1,p2,p3,p4]
        
        def dist(a, b):
            return (a[0] - b[0])**2 + (a[1] - b[1])**2
        
        res = []
        
        for i in range(4):
            for j in range(i+1, 4):
                res.append(dist(points[i], points[j]))
        
        res.sort()
        
        return res[0] > 0 and res[0] == res[1] and res[0] == res[2] and res[0] == res[3] and res[4] == res[5]
```

