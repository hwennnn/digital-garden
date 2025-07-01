---
title: 546. Remove Boxes
draft: false
tags: 
  - leetcode-hard
  - array
  - dynamic-programming
  - memoization
  - weekly-contest-25
  - contest-question
date: 2021-08-14
---

[Problem Link](https://leetcode.com/problems/remove-boxes/)

## Description

---
<p>You are given several <code>boxes</code> with different colors represented by different positive numbers.</p>

<p>You may experience several rounds to remove boxes until there is no box left. Each time you can choose some continuous boxes with the same color (i.e., composed of <code>k</code> boxes, <code>k &gt;= 1</code>), remove them and get <code>k * k</code> points.</p>

<p>Return <em>the maximum points you can get</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> boxes = [1,3,2,2,2,3,4,3,1]
<strong>Output:</strong> 23
<strong>Explanation:</strong>
[1, 3, 2, 2, 2, 3, 4, 3, 1] 
----&gt; [1, 3, 3, 4, 3, 1] (3*3=9 points) 
----&gt; [1, 3, 3, 3, 1] (1*1=1 points) 
----&gt; [1, 1] (3*3=9 points) 
----&gt; [] (2*2=4 points)
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> boxes = [1,1,1]
<strong>Output:</strong> 9
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> boxes = [1]
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= boxes.length &lt;= 100</code></li>
	<li><code>1 &lt;= boxes[i]&nbsp;&lt;= 100</code></li>
</ul>


## Solution

---
### Python3
``` py title='remove-boxes'
import functools
class Solution:
    def removeBoxes(self, boxes: List[int]) -> int:
        @functools.lru_cache(None)
        def dfs(i,j,k):
            if i>j: return 0
            cnt=0
            while (i+cnt)<=j and boxes[i]==boxes[i+cnt]:
                cnt+=1
            i2=i+cnt
            res=dfs(i2,j,0)+(k+cnt)**2
            for m in range(i2,j+1):
                if boxes[m]==boxes[i]:
                    res=max(res, dfs(i2,m-1,0)+dfs(m,j,k+cnt))
            return res
        return dfs(0,len(boxes)-1,0)
```

