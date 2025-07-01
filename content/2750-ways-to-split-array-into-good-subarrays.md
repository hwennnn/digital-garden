---
title: 2750. Ways to Split Array Into Good Subarrays
draft: false
tags: 
  - leetcode-medium
  - array
  - math
  - dynamic-programming
  - weekly-contest-351
  - contest-question
date: 2023-06-25
---

[Problem Link](https://leetcode.com/problems/ways-to-split-array-into-good-subarrays/)

## Description

---
<p>You are given a binary array <code>nums</code>.</p>

<p>A subarray of an array is <strong>good</strong> if it contains <strong>exactly</strong> <strong>one</strong> element with the value <code>1</code>.</p>

<p>Return <em>an integer denoting the number of ways to split the array </em><code>nums</code><em> into <strong>good</strong> subarrays</em>. As the number may be too large, return it <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>

<p>A subarray is a contiguous <strong>non-empty</strong> sequence of elements within an array.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [0,1,0,0,1]
<strong>Output:</strong> 3
<strong>Explanation:</strong> There are 3 ways to split nums into good subarrays:
- [0,1] [0,0,1]
- [0,1,0] [0,1]
- [0,1,0,0] [1]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [0,1,0]
<strong>Output:</strong> 1
<strong>Explanation:</strong> There is 1 way to split nums into good subarrays:
- [0,1,0]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= nums[i] &lt;= 1</code></li>
</ul>


## Solution

---
### Python3
``` py title='ways-to-split-array-into-good-subarrays'
class Solution:
    def numberOfGoodSubarraySplits(self, nums: List[int]) -> int:
        N = len(nums)
        res = 0
        M = 10 ** 9 + 7
        ones = []
        
        for i, x in enumerate(nums):
            if x == 1:
                ones.append(i)
        
        if len(ones) == 0: return 0
        
        res = 1
        
        for i in range(1, len(ones)):
            diff = ones[i] - ones[i - 1]
            res *= diff
            res %= M
        
        return res
```

