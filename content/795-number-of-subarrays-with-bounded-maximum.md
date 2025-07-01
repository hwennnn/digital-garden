---
title: 795. Number of Subarrays with Bounded Maximum
draft: false
tags: 
  - leetcode-medium
  - array
  - two-pointers
  - weekly-contest-74
  - contest-question
date: 2021-06-17
---

[Problem Link](https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/)

## Description

---
<p>Given an integer array <code>nums</code> and two integers <code>left</code> and <code>right</code>, return <em>the number of contiguous non-empty <strong>subarrays</strong> such that the value of the maximum array element in that subarray is in the range </em><code>[left, right]</code>.</p>

<p>The test cases are generated so that the answer will fit in a <strong>32-bit</strong> integer.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,1,4,3], left = 2, right = 3
<strong>Output:</strong> 3
<strong>Explanation:</strong> There are three subarrays that meet the requirements: [2], [2, 1], [3].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,9,2,5,6], left = 2, right = 8
<strong>Output:</strong> 7
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
	<li><code>0 &lt;= left &lt;= right &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='number-of-subarrays-with-bounded-maximum'
class Solution:
    def numSubarrayBoundedMax(self, nums: List[int], left: int, right: int) -> int:
        res = dp = 0
        prev = -1
        
        for i,x in enumerate(nums):
            if i > 0 and x < left:
                res += dp
            
            if x > right:
                prev = i
                dp = 0
            
            if left <= x <= right:
                dp = i - prev
                res += dp
        
        return res
```

