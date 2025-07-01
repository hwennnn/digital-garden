---
title: 1856. Maximum Subarray Min-Product
draft: false
tags: 
  - leetcode-medium
  - array
  - stack
  - monotonic-stack
  - prefix-sum
  - weekly-contest-240
  - contest-question
date: 2021-05-09
---

[Problem Link](https://leetcode.com/problems/maximum-subarray-min-product/)

## Description

---
<p>The <strong>min-product</strong> of an array is equal to the <strong>minimum value</strong> in the array <strong>multiplied by</strong> the array&#39;s <strong>sum</strong>.</p>

<ul>
	<li>For example, the array <code>[3,2,5]</code> (minimum value is <code>2</code>) has a min-product of <code>2 * (3+2+5) = 2 * 10 = 20</code>.</li>
</ul>

<p>Given an array of integers <code>nums</code>, return <em>the <strong>maximum min-product</strong> of any <strong>non-empty subarray</strong> of </em><code>nums</code>. Since the answer may be large, return it <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>

<p>Note that the min-product should be maximized <strong>before</strong> performing the modulo operation. Testcases are generated such that the maximum min-product <strong>without</strong> modulo will fit in a <strong>64-bit signed integer</strong>.</p>

<p>A <strong>subarray</strong> is a <strong>contiguous</strong> part of an array.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,<u>2,3,2</u>]
<strong>Output:</strong> 14
<strong>Explanation:</strong> The maximum min-product is achieved with the subarray [2,3,2] (minimum value is 2).
2 * (2+3+2) = 2 * 7 = 14.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,<u>3,3</u>,1,2]
<strong>Output:</strong> 18
<strong>Explanation:</strong> The maximum min-product is achieved with the subarray [3,3] (minimum value is 3).
3 * (3+3) = 3 * 6 = 18.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,1,<u>5,6,4</u>,2]
<strong>Output:</strong> 60
<strong>Explanation:</strong> The maximum min-product is achieved with the subarray [5,6,4] (minimum value is 4).
4 * (5+6+4) = 4 * 15 = 60.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>7</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='maximum-subarray-min-product'
class Solution:
    def maxSumMinProduct(self, nums: List[int]) -> int:
        M = 10 ** 9 + 7
        n = len(nums)
        res = 0
        
        prefix = [0]
        for x in nums:
            prefix.append(x + prefix[-1])
        
        l = [0] * n
        r = [0] * n
        stack = []
        
        for i in range(n):
            while stack and nums[stack[-1]] >= nums[i]:
                stack.pop()
            
            if stack:
                l[i] = stack[-1] + 1
            else:
                l[i] = 0
                
            stack.append(i)
        
        stack = []
        
        for i in reversed(range(n)):
            while stack and nums[stack[-1]] >= nums[i]:
                stack.pop()
            
            if stack:
                r[i] = stack[-1] - 1
            else:
                r[i] = n - 1
            
            stack.append(i)

        for i in range(n):
            res = max(res, nums[i] * (prefix[r[i] + 1] - prefix[l[i]]))
        
        return res % M
```

