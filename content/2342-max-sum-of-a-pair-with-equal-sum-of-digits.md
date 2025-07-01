---
title: 2342. Max Sum of a Pair With Equal Sum of Digits
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - sorting
  - heap-priority-queue
  - weekly-contest-302
  - contest-question
date: 2025-02-12
---

[Problem Link](https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/)

## Description

---
<p>You are given a <strong>0-indexed</strong> array <code>nums</code> consisting of <strong>positive</strong> integers. You can choose two indices <code>i</code> and <code>j</code>, such that <code>i != j</code>, and the sum of digits of the number <code>nums[i]</code> is equal to that of <code>nums[j]</code>.</p>

<p>Return the <strong>maximum</strong> value of<em> </em><code>nums[i] + nums[j]</code><em> </em>that you can obtain over all possible indices <code>i</code> and <code>j</code> that satisfy the conditions. If no such pair of indices exists, return -1.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [18,43,36,13,7]
<strong>Output:</strong> 54
<strong>Explanation:</strong> The pairs (i, j) that satisfy the conditions are:
- (0, 2), both numbers have a sum of digits equal to 9, and their sum is 18 + 36 = 54.
- (1, 4), both numbers have a sum of digits equal to 7, and their sum is 43 + 7 = 50.
So the maximum sum that we can obtain is 54.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [10,12,19,14]
<strong>Output:</strong> -1
<strong>Explanation:</strong> There are no two numbers that satisfy the conditions, so we return -1.
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
``` py title='max-sum-of-a-pair-with-equal-sum-of-digits'
class Solution:
    def maximumSum(self, nums: List[int]) -> int:
        N = len(nums)
        res = -1
        digits = {}

        for x in nums:
            d = 0
            curr = x
            while curr > 0:
                d += curr % 10
                curr //= 10
            
            if d in digits:
                res = max(res, x + digits[d])
                digits[d] = max(digits[d], x)
            else:
                digits[d] = x

        return res
```

