---
title: 3229. Minimum Operations to Make Array Equal to Target
draft: false
tags: 
  - leetcode-hard
  - array
  - dynamic-programming
  - stack
  - greedy
  - monotonic-stack
  - weekly-contest-407
  - contest-question
date: 2024-07-21
---

[Problem Link](https://leetcode.com/problems/minimum-operations-to-make-array-equal-to-target/)

## Description

---
<p>You are given two positive integer arrays <code>nums</code> and <code>target</code>, of the same length.</p>

<p>In a single operation, you can select any subarray of <code>nums</code> and increment each element within that subarray by 1 or decrement each element within that subarray by 1.</p>

<p>Return the <strong>minimum</strong> number of operations required to make <code>nums</code> equal to the array <code>target</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [3,5,1,2], target = [4,6,2,4]</span></p>

<p><strong>Output:</strong> <span class="example-io">2</span></p>

<p><strong>Explanation:</strong></p>

<p>We will perform the following operations to make <code>nums</code> equal to <code>target</code>:<br />
- Increment&nbsp;<code>nums[0..3]</code> by 1, <code>nums = [4,6,2,3]</code>.<br />
- Increment&nbsp;<code>nums[3..3]</code> by 1, <code>nums = [4,6,2,4]</code>.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [1,3,2], target = [2,1,4]</span></p>

<p><strong>Output:</strong> <span class="example-io">5</span></p>

<p><strong>Explanation:</strong></p>

<p>We will perform the following operations to make <code>nums</code> equal to <code>target</code>:<br />
- Increment&nbsp;<code>nums[0..0]</code> by 1, <code>nums = [2,3,2]</code>.<br />
- Decrement&nbsp;<code>nums[1..1]</code> by 1, <code>nums = [2,2,2]</code>.<br />
- Decrement&nbsp;<code>nums[1..1]</code> by 1, <code>nums = [2,1,2]</code>.<br />
- Increment&nbsp;<code>nums[2..2]</code> by 1, <code>nums = [2,1,3]</code>.<br />
- Increment&nbsp;<code>nums[2..2]</code> by 1, <code>nums = [2,1,4]</code>.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length == target.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i], target[i] &lt;= 10<sup>8</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='minimum-operations-to-make-array-equal-to-target'
class Solution:
    def minimumOperations(self, nums: List[int], target: List[int]) -> int:
        N = len(nums)
        diff = [x - t for x, t in zip(nums, target)]
        res = abs(diff[0])

        for i in range(1, N):
            if diff[i - 1] >= 0 and diff[i] >= 0:
                res += max(diff[i] - diff[i - 1], 0)
            elif diff[i - 1] <= 0 and diff[i] <= 0:
                res += max(abs(diff[i]) - abs(diff[i - 1]), 0)
            else:
                res += abs(diff[i])

        return res
```

