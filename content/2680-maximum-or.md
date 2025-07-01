---
title: 2680. Maximum OR
draft: false
tags: 
  - leetcode-medium
  - array
  - greedy
  - bit-manipulation
  - prefix-sum
  - biweekly-contest-104
  - contest-question
date: 2023-05-14
---

[Problem Link](https://leetcode.com/problems/maximum-or/)

## Description

---
<p>You are given a <strong>0-indexed</strong> integer array <code>nums</code> of length <code>n</code> and an integer <code>k</code>. In an operation, you can choose an element and multiply it by <code>2</code>.</p>

<p>Return <em>the maximum possible value of </em><code>nums[0] | nums[1] | ... | nums[n - 1]</code> <em>that can be obtained after applying the operation on nums at most </em><code>k</code><em> times</em>.</p>

<p>Note that <code>a | b</code> denotes the <strong>bitwise or</strong> between two integers <code>a</code> and <code>b</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [12,9], k = 1
<strong>Output:</strong> 30
<strong>Explanation:</strong> If we apply the operation to index 1, our new array nums will be equal to [12,18]. Thus, we return the bitwise or of 12 and 18, which is 30.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [8,1,2], k = 2
<strong>Output:</strong> 35
<strong>Explanation:</strong> If we apply the operation twice on index 0, we yield a new array of [32,1,2]. Thus, we return 32|1|2 = 35.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
	<li><code>1 &lt;= k &lt;= 15</code></li>
</ul>


## Solution

---
### Python3
``` py title='maximum-or'
class Solution:
    def maximumOr(self, nums: List[int], k: int) -> int:
        N = len(nums)
        res = 0
        
        prefix = [0]
        for x in nums:
            prefix.append(prefix[-1] | x)
        
        suffix = [0]
        for x in nums[::-1]:
            suffix.append(suffix[-1] | x)
        
        suffix.reverse()
        
        for i in range(N):
            res = max(res, prefix[i] | nums[i] * pow(2, k) | suffix[i + 1])
        
        return res
```

