---
title: 1304. Find N Unique Integers Sum up to Zero
draft: false
tags: 
  - leetcode-easy
  - array
  - math
  - weekly-contest-169
  - contest-question
date: 2020-12-27
---

[Problem Link](https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/)

## Description

---
<p>Given an integer <code>n</code>, return <strong>any</strong> array containing <code>n</code> <strong>unique</strong> integers such that they add up to <code>0</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 5
<strong>Output:</strong> [-7,-1,1,3,4]
<strong>Explanation:</strong> These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 3
<strong>Output:</strong> [-1,0,1]
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> n = 1
<strong>Output:</strong> [0]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 1000</code></li>
</ul>


## Solution

---
### Python3
``` py title='find-n-unique-integers-sum-up-to-zero'
class Solution:
    def sumZero(self, n: int) -> List[int]:
        res = []
        if n & 1: res.append(0)
            
        for i in range(-1000,-1000+n//2):
            res.append(i)


        for i in range(1000, 1000 - n//2, -1):
            res.append(i)

        
        return res
            
```

