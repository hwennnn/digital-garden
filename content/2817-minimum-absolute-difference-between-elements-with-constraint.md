---
title: 2817. Minimum Absolute Difference Between Elements With Constraint
draft: false
tags: 
  - leetcode-medium
  - array
  - binary-search
  - ordered-set
  - weekly-contest-358
  - contest-question
date: 2023-08-13
---

[Problem Link](https://leetcode.com/problems/minimum-absolute-difference-between-elements-with-constraint/)

## Description

---
<p>You are given a <strong>0-indexed</strong> integer array <code>nums</code> and an integer <code>x</code>.</p>

<p>Find the <strong>minimum absolute difference</strong> between two elements in the array that are at least <code>x</code> indices apart.</p>

<p>In other words, find two indices <code>i</code> and <code>j</code> such that <code>abs(i - j) &gt;= x</code> and <code>abs(nums[i] - nums[j])</code> is minimized.</p>

<p>Return<em> an integer denoting the <strong>minimum</strong> absolute difference between two elements that are at least</em> <code>x</code> <em>indices apart</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [4,3,2,4], x = 2
<strong>Output:</strong> 0
<strong>Explanation:</strong> We can select nums[0] = 4 and nums[3] = 4. 
They are at least 2 indices apart, and their absolute difference is the minimum, 0. 
It can be shown that 0 is the optimal answer.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [5,3,2,10,15], x = 1
<strong>Output:</strong> 1
<strong>Explanation:</strong> We can select nums[1] = 3 and nums[2] = 2.
They are at least 1 index apart, and their absolute difference is the minimum, 1.
It can be shown that 1 is the optimal answer.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,4], x = 3
<strong>Output:</strong> 3
<strong>Explanation:</strong> We can select nums[0] = 1 and nums[3] = 4.
They are at least 3 indices apart, and their absolute difference is the minimum, 3.
It can be shown that 3 is the optimal answer.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
	<li><code>0 &lt;= x &lt; nums.length</code></li>
</ul>


## Solution

---
### Python3
``` py title='minimum-absolute-difference-between-elements-with-constraint'
from sortedcontainers import SortedList

class Solution:
    def minAbsoluteDifference(self, nums: List[int], k: int) -> int:
        N = len(nums)
        sl = SortedList()
        res = abs(nums[0] - nums[k])
        
        for i in range(k, N):
            sl.add(nums[i])
        
        for i, x in enumerate(nums):
            index = sl.bisect_left(x)
            M = len(sl)
            
            for j in [index - 1, index]:
                if 0 <= j < M:
                    res = min(res, abs(sl[j] - x))
            
            if i + k < N:
                sl.remove(nums[i + k])
        
        return res
```

