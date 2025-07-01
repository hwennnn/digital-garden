---
title: 628. Maximum Product of Three Numbers
draft: false
tags: 
  - leetcode-easy
  - array
  - math
  - sorting
  - weekly-contest-38
  - contest-question
date: 2020-08-20
---

[Problem Link](https://leetcode.com/problems/maximum-product-of-three-numbers/)

## Description

---
<p>Given an integer array <code>nums</code>, <em>find three numbers whose product is maximum and return the maximum product</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [1,2,3]
<strong>Output:</strong> 6
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [1,2,3,4]
<strong>Output:</strong> 24
</pre><p><strong class="example">Example 3:</strong></p>
<pre><strong>Input:</strong> nums = [-1,-2,-3]
<strong>Output:</strong> -6
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>3 &lt;= nums.length &lt;=&nbsp;10<sup>4</sup></code></li>
	<li><code>-1000 &lt;= nums[i] &lt;= 1000</code></li>
</ul>


## Solution

---
### Python3
``` py title='maximum-product-of-three-numbers'
class Solution:
    def maximumProduct(self, nums: List[int]) -> int:
        n = len(nums)

        if n <= 2 : return 0
        
        nums.sort()
        return max(nums[-1] * nums[-2] * nums[-3], nums[0] * nums[1] * nums[-1])
```

