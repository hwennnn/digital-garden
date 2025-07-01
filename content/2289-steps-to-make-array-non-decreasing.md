---
title: 2289. Steps to Make Array Non-decreasing
draft: false
tags: 
  - leetcode-medium
  - array
  - linked-list
  - stack
  - monotonic-stack
  - weekly-contest-295
  - contest-question
date: 2023-09-18
---

[Problem Link](https://leetcode.com/problems/steps-to-make-array-non-decreasing/)

## Description

---
<p>You are given a <strong>0-indexed</strong> integer array <code>nums</code>. In one step, <strong>remove</strong> all elements <code>nums[i]</code> where <code>nums[i - 1] &gt; nums[i]</code> for all <code>0 &lt; i &lt; nums.length</code>.</p>

<p>Return <em>the number of steps performed until </em><code>nums</code><em> becomes a <strong>non-decreasing</strong> array</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [5,3,4,4,7,3,6,11,8,5,11]
<strong>Output:</strong> 3
<strong>Explanation:</strong> The following are the steps performed:
- Step 1: [5,<strong><u>3</u></strong>,4,4,7,<u><strong>3</strong></u>,6,11,<u><strong>8</strong></u>,<u><strong>5</strong></u>,11] becomes [5,4,4,7,6,11,11]
- Step 2: [5,<u><strong>4</strong></u>,4,7,<u><strong>6</strong></u>,11,11] becomes [5,4,7,11,11]
- Step 3: [5,<u><strong>4</strong></u>,7,11,11] becomes [5,7,11,11]
[5,7,11,11] is a non-decreasing array. Therefore, we return 3.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [4,5,7,7,13]
<strong>Output:</strong> 0
<strong>Explanation:</strong> nums is already a non-decreasing array. Therefore, we return 0.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='steps-to-make-array-non-decreasing'
class Solution:
    def totalSteps(self, nums: List[int]) -> int:
        N = len(nums)
        stack = []
        dp = [0] * N

        for i in range(N - 1, -1, -1):
            while stack and nums[i] > nums[stack[-1]]:
                dp[i] = max(dp[i] + 1, dp[stack.pop()])
            
            stack.append(i)
        
        return max(dp)
```

