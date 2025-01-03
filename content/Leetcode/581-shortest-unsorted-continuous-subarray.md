---
title: 581. Shortest Unsorted Continuous Subarray
draft: false
tags: 
  - array
  - two-pointers
  - stack
  - greedy
  - sorting
  - monotonic-stack
date: 2023-08-23
---

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-blue.svg)

## Description

---
<p>Given an integer array <code>nums</code>, you need to find one <b>continuous subarray</b> such that if you only sort this subarray in non-decreasing order, then the whole array will be sorted in non-decreasing order.</p>

<p>Return <em>the shortest such subarray and output its length</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,6,4,8,10,9,15]
<strong>Output:</strong> 5
<strong>Explanation:</strong> You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,4]
<strong>Output:</strong> 0
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [1]
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
	<li><code>-10<sup>5</sup> &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>
</ul>

<p>&nbsp;</p>
<strong>Follow up:</strong> Can you solve it in <code>O(n)</code> time complexity?

## Solution

---
### Python
``` py title='shortest-unsorted-continuous-subarray'
class Solution:
    def findUnsortedSubarray(self, nums: List[int]) -> int:
        N = len(nums)
        
        prev = nums[0]
        end = 0

        for i in range(1, N):
            if nums[i] < prev:
                end = i
            else:
                prev = nums[i]
            
        prev = nums[-1]
        start = N - 1

        for i in range(N - 2, -1, -1):
            if nums[i] > prev:
                start = i
            else:
                prev = nums[i]
        
        if end != 0:
            return end - start + 1
        
        return 0

```

