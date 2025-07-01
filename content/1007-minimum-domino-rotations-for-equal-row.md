---
title: 1007. Minimum Domino Rotations For Equal Row
draft: false
tags: 
  - leetcode-medium
  - array
  - greedy
  - weekly-contest-127
  - contest-question
date: 2025-05-03
---

[Problem Link](https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/)

## Description

---
<p>In a row of dominoes, <code>tops[i]</code> and <code>bottoms[i]</code> represent the top and bottom halves of the <code>i<sup>th</sup></code> domino. (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)</p>

<p>We may rotate the <code>i<sup>th</sup></code> domino, so that <code>tops[i]</code> and <code>bottoms[i]</code> swap values.</p>

<p>Return the minimum number of rotations so that all the values in <code>tops</code> are the same, or all the values in <code>bottoms</code> are the same.</p>

<p>If it cannot be done, return <code>-1</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/05/14/domino.png" style="height: 300px; width: 421px;" />
<pre>
<strong>Input:</strong> tops = [2,1,2,4,2,2], bottoms = [5,2,6,2,3,2]
<strong>Output:</strong> 2
<strong>Explanation:</strong> 
The first figure represents the dominoes as given by tops and bottoms: before we do any rotations.
If we rotate the second and fourth dominoes, we can make every value in the top row equal to 2, as indicated by the second figure.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> tops = [3,5,1,2,3], bottoms = [3,6,3,3,4]
<strong>Output:</strong> -1
<strong>Explanation:</strong> 
In this case, it is not possible to rotate the dominoes to make one row of values equal.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= tops.length &lt;= 2 * 10<sup>4</sup></code></li>
	<li><code>bottoms.length == tops.length</code></li>
	<li><code>1 &lt;= tops[i], bottoms[i] &lt;= 6</code></li>
</ul>


## Solution

---
### Python3
``` py title='minimum-domino-rotations-for-equal-row'
class Solution:
    def minDominoRotations(self, tops: List[int], bottoms: List[int]) -> int:
        N = len(tops)
        tPos = defaultdict(list)
        bPos = defaultdict(list)
        res = inf

        for i, x in enumerate(tops):
            tPos[x].append(i)
        
        for i, x in enumerate(bottoms):
            bPos[x].append(i)
        
        for k in range(1, 7):
            s = set()

            for i in tPos[k]:
                s.add(i)
            
            for i in bPos[k]:
                s.add(i)
            
            if len(s) == N:
                res = min(res, N - max(len(tPos[k]), len(bPos[k])))

        if res == inf:
            return -1
        
        return res
```

