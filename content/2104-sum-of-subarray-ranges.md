---
title: 2104. Sum of Subarray Ranges
draft: false
tags: 
  - leetcode-medium
  - array
  - stack
  - monotonic-stack
  - weekly-contest-271
  - contest-question
date: 2025-01-23
---

[Problem Link](https://leetcode.com/problems/sum-of-subarray-ranges/)

## Description

---
<p>You are given an integer array <code>nums</code>. The <strong>range</strong> of a subarray of <code>nums</code> is the difference between the largest and smallest element in the subarray.</p>

<p>Return <em>the <strong>sum of all</strong> subarray ranges of </em><code>nums</code><em>.</em></p>

<p>A subarray is a contiguous <strong>non-empty</strong> sequence of elements within an array.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3]
<strong>Output:</strong> 4
<strong>Explanation:</strong> The 6 subarrays of nums are the following:
[1], range = largest - smallest = 1 - 1 = 0 
[2], range = 2 - 2 = 0
[3], range = 3 - 3 = 0
[1,2], range = 2 - 1 = 1
[2,3], range = 3 - 2 = 1
[1,2,3], range = 3 - 1 = 2
So the sum of all ranges is 0 + 0 + 0 + 1 + 1 + 2 = 4.</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,3,3]
<strong>Output:</strong> 4
<strong>Explanation:</strong> The 6 subarrays of nums are the following:
[1], range = largest - smallest = 1 - 1 = 0
[3], range = 3 - 3 = 0
[3], range = 3 - 3 = 0
[1,3], range = 3 - 1 = 2
[3,3], range = 3 - 3 = 0
[1,3,3], range = 3 - 1 = 2
So the sum of all ranges is 0 + 0 + 0 + 2 + 0 + 2 = 4.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [4,-2,-3,4,1]
<strong>Output:</strong> 59
<strong>Explanation:</strong> The sum of all subarray ranges of nums is 59.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 1000</code></li>
	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow-up:</strong> Could you find a solution with <code>O(n)</code> time complexity?</p>


## Solution

---
### Python3
``` py title='sum-of-subarray-ranges'
class Solution:
    def subArrayRanges(self, nums: List[int]) -> int:
        N = len(nums)
        res = 0
        prevSmaller = [-1] * N
        nextSmaller = [N] * N
        prevLarger = [-1] * N
        nextLarger = [N] * N

        # construct nextSmaller array
        stack = []
        for i, x in enumerate(nums):
            while stack and x < nums[stack[-1]]:
                nextSmaller[stack.pop()] = i
            
            stack.append(i)
        
        # construct prevSmaller array
        stack = []
        for i in range(N - 1, -1, -1):
            # add equal sign here to prevent double counting
            while stack and nums[i] <= nums[stack[-1]]:
                prevSmaller[stack.pop()] = i
            
            stack.append(i)

        # construct nextLarger array
        stack = []
        for i, x in enumerate(nums):
            while stack and x > nums[stack[-1]]:
                nextLarger[stack.pop()] = i
            
            stack.append(i)
        
        # construct prevLarger array
        stack = []
        for i in range(N - 1, -1, -1):
            # add equal sign here to prevent double counting
            while stack and nums[i] >= nums[stack[-1]]:
                prevLarger[stack.pop()] = i
            
            stack.append(i)
        
        for i, x in enumerate(nums):
            leftMin, rightMin = i - prevSmaller[i], nextSmaller[i] - i
            leftMax, rightMax = i - prevLarger[i], nextLarger[i] - i

            mmin = leftMin * rightMin
            mmax = leftMax * rightMax

            res += x * (mmax - mmin)
        
        return res
```

