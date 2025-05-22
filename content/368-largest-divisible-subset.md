---
title: 368. Largest Divisible Subset
draft: false
tags: 
  - leetcode-medium
  - array
  - math
  - dynamic-programming
  - sorting
date: 2025-04-06
---

[Problem Link](https://leetcode.com/problems/largest-divisible-subset/)

## Description

---
<p>Given a set of <strong>distinct</strong> positive integers <code>nums</code>, return the largest subset <code>answer</code> such that every pair <code>(answer[i], answer[j])</code> of elements in this subset satisfies:</p>

<ul>
	<li><code>answer[i] % answer[j] == 0</code>, or</li>
	<li><code>answer[j] % answer[i] == 0</code></li>
</ul>

<p>If there are multiple solutions, return any of them.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3]
<strong>Output:</strong> [1,2]
<strong>Explanation:</strong> [1,3] is also accepted.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,4,8]
<strong>Output:</strong> [1,2,4,8]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 1000</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 2 * 10<sup>9</sup></code></li>
	<li>All the integers in <code>nums</code> are <strong>unique</strong>.</li>
</ul>


## Solution

---
### Python3
``` py title='largest-divisible-subset'
class Solution:
    def largestDivisibleSubset(self, nums: List[int]) -> List[int]:
        N = len(nums)
        nums.sort()
        dp = [1] * N
        parent = [-1] * N
        maxSubsetSize = 1

        for i in range(N):
            for j in range(i + 1, N):
                if nums[j] % nums[i] == 0:
                    if dp[i] + 1 > dp[j]:
                        dp[j] = dp[i] + 1
                        parent[j] = i
                        maxSubsetSize = max(maxSubsetSize, dp[j])
        
        index = dp.index(maxSubsetSize)
        res = [nums[index]]
        while parent[index] != -1:
            res.append(nums[parent[index]])
            index = parent[index]

        return res
```

