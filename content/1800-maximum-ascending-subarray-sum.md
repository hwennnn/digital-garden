---
title: 1800. Maximum Ascending Subarray Sum
draft: false
tags: 
  - leetcode-easy
  - array
  - weekly-contest-233
  - contest-question
date: 2025-02-04
---

[Problem Link](https://leetcode.com/problems/maximum-ascending-subarray-sum/)

## Description

---
<p>Given an array of positive integers <code>nums</code>, return the <strong>maximum</strong> possible sum of an <span data-keyword="strictly-increasing-array">strictly increasing subarray</span> in<em> </em><code>nums</code>.</p>

<p>A subarray is defined as a contiguous sequence of numbers in an array.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [10,20,30,5,10,50]
<strong>Output:</strong> 65
<strong>Explanation: </strong>[5,10,50] is the ascending subarray with the maximum sum of 65.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [10,20,30,40,50]
<strong>Output:</strong> 150
<strong>Explanation: </strong>[10,20,30,40,50] is the ascending subarray with the maximum sum of 150.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [12,17,15,13,10,11,12]
<strong>Output:</strong> 33
<strong>Explanation: </strong>[10,11,12] is the ascending subarray with the maximum sum of 33.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 100</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 100</code></li>
</ul>


## Solution

---
### Python3
``` py title='maximum-ascending-subarray-sum'
class Solution:
    def maxAscendingSum(self, nums: List[int]) -> int:
        N = len(nums)
        curr = res = last = nums[0]

        for i in range(1, N):
            if nums[i] > last:
                curr += nums[i]
                res = max(res, curr)
            else:
                curr = nums[i]
            
            last = nums[i]

        return res
```

