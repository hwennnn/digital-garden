---
title: 1037. Valid Boomerang
draft: false
tags: 
  - leetcode-easy
  - array
  - math
  - geometry
  - weekly-contest-135
  - contest-question
date: 2021-09-25
---

[Problem Link](https://leetcode.com/problems/valid-boomerang/)

## Description

---
<p>Given an array <code>points</code> where <code>points[i] = [x<sub>i</sub>, y<sub>i</sub>]</code> represents a point on the <strong>X-Y</strong> plane, return <code>true</code> <em>if these points are a <strong>boomerang</strong></em>.</p>

<p>A <strong>boomerang</strong> is a set of three points that are <strong>all distinct</strong> and <strong>not in a straight line</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> points = [[1,1],[2,3],[3,2]]
<strong>Output:</strong> true
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> points = [[1,1],[2,2],[3,3]]
<strong>Output:</strong> false
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>points.length == 3</code></li>
	<li><code>points[i].length == 2</code></li>
	<li><code>0 &lt;= x<sub>i</sub>, y<sub>i</sub> &lt;= 100</code></li>
</ul>


## Solution

---
### Python3
``` py title='valid-boomerang'
class Solution:
    def isBoomerang(self, p: List[List[int]]) -> bool:
        return (p[0][0] - p[1][0]) * (p[0][1] - p[2][1]) != (p[0][0] - p[2][0]) * (p[0][1] - p[1][1])

```

