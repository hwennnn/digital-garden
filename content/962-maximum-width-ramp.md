---
title: 962. Maximum Width Ramp
draft: false
tags: 
  - leetcode-medium
  - array
  - two-pointers
  - stack
  - monotonic-stack
  - weekly-contest-116
  - contest-question
date: 2025-01-01
---

[Problem Link](https://leetcode.com/problems/maximum-width-ramp/)

## Description

---
<p>A <strong>ramp</strong> in an integer array <code>nums</code> is a pair <code>(i, j)</code> for which <code>i &lt; j</code> and <code>nums[i] &lt;= nums[j]</code>. The <strong>width</strong> of such a ramp is <code>j - i</code>.</p>

<p>Given an integer array <code>nums</code>, return <em>the maximum width of a <strong>ramp</strong> in </em><code>nums</code>. If there is no <strong>ramp</strong> in <code>nums</code>, return <code>0</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [6,0,8,2,1,5]
<strong>Output:</strong> 4
<strong>Explanation:</strong> The maximum width ramp is achieved at (i, j) = (1, 5): nums[1] = 0 and nums[5] = 5.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [9,8,1,0,1,9,4,0,4,1]
<strong>Output:</strong> 7
<strong>Explanation:</strong> The maximum width ramp is achieved at (i, j) = (2, 9): nums[2] = 1 and nums[9] = 1.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= nums.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>0 &lt;= nums[i] &lt;= 5 * 10<sup>4</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='maximum-width-ramp'
class Solution:
    def maxWidthRamp(self, nums: List[int]) -> int:
        N = len(nums)
        stack = []
        res = 0
        
        for i, x in enumerate(nums):
            if not stack or x < nums[stack[-1]]:
                stack.append(i)
        
        for i in range(N - 1, -1, -1):
            while stack and nums[i] >= nums[stack[-1]]:
                res = max(res, i - stack.pop())
            
        return res
```

