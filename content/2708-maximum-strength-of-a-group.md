---
title: 2708. Maximum Strength of a Group
draft: false
tags: 
  - leetcode-medium
  - array
  - dynamic-programming
  - backtracking
  - greedy
  - bit-manipulation
  - sorting
  - enumeration
  - biweekly-contest-105
  - contest-question
date: 2023-05-30
---

[Problem Link](https://leetcode.com/problems/maximum-strength-of-a-group/)

## Description

---
<p>You are given a <strong>0-indexed</strong> integer array <code>nums</code> representing the score of students in an exam. The teacher would like to form one <strong>non-empty</strong> group of students with maximal <strong>strength</strong>, where the strength of a group of students of indices <code>i<sub>0</sub></code>, <code>i<sub>1</sub></code>, <code>i<sub>2</sub></code>, ... , <code>i<sub>k</sub></code> is defined as <code>nums[i<sub>0</sub>] * nums[i<sub>1</sub>] * nums[i<sub>2</sub>] * ... * nums[i<sub>k</sub>​]</code>.</p>

<p>Return <em>the maximum strength of a group the teacher can create</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,-1,-5,2,5,-9]
<strong>Output:</strong> 1350
<strong>Explanation:</strong> One way to form a group of maximal strength is to group the students at indices [0,2,3,4,5]. Their strength is 3 * (-5) * 2 * 5 * (-9) = 1350, which we can show is optimal.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [-4,-5,-4]
<strong>Output:</strong> 20
<strong>Explanation:</strong> Group the students at indices [0, 1] . Then, we&rsquo;ll have a resulting strength of 20. We cannot achieve greater strength.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 13</code></li>
	<li><code>-9 &lt;= nums[i] &lt;= 9</code></li>
</ul>


## Solution

---
### Python3
``` py title='maximum-strength-of-a-group'
class Solution:
    def maxStrength(self, nums: List[int]) -> int:
        N = len(nums)
        res = -inf
        
        for mask in range(1, 1 << N):
            curr = 1
            
            for j in range(N):
                if mask & (1 << j) > 0:
                    curr *= nums[j]
            
            if curr > res:
                res = curr
        
        return res
```

