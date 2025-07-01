---
title: 2962. Count Subarrays Where Max Element Appears at Least K Times
draft: false
tags: 
  - leetcode-medium
  - array
  - sliding-window
  - weekly-contest-375
  - contest-question
date: 2025-04-29
---

[Problem Link](https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/)

## Description

---
<p>You are given an integer array <code>nums</code> and a <strong>positive</strong> integer <code>k</code>.</p>

<p>Return <em>the number of subarrays where the <strong>maximum</strong> element of </em><code>nums</code><em> appears <strong>at least</strong> </em><code>k</code><em> times in that subarray.</em></p>

<p>A <strong>subarray</strong> is a contiguous sequence of elements within an array.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,3,2,3,3], k = 2
<strong>Output:</strong> 6
<strong>Explanation:</strong> The subarrays that contain the element 3 at least 2 times are: [1,3,2,3], [1,3,2,3,3], [3,2,3], [3,2,3,3], [2,3,3] and [3,3].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,4,2,1], k = 3
<strong>Output:</strong> 0
<strong>Explanation:</strong> No subarray contains the element 4 at least 3 times.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>6</sup></code></li>
	<li><code>1 &lt;= k &lt;= 10<sup>5</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='count-subarrays-where-max-element-appears-at-least-k-times'
class Solution:
    def countSubarrays(self, nums: List[int], k: int) -> int:
        N = len(nums)
        maxNum = max(nums)
        total = N * (N + 1) // 2
        i = 0
        count = 0
        res = 0 # represents the number of subarrays where the freq of maxNum < k

        for j, x in enumerate(nums):
            if x == maxNum:
                count += 1
            
            while count >= k:
                if nums[i] == maxNum:
                    count -= 1
                
                i += 1
            
            res += j - i + 1
        
        return total - res
```

