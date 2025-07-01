---
title: 2447. Number of Subarrays With GCD Equal to K
draft: false
tags: 
  - leetcode-medium
  - array
  - math
  - number-theory
  - weekly-contest-316
  - contest-question
date: 2022-10-23
---

[Problem Link](https://leetcode.com/problems/number-of-subarrays-with-gcd-equal-to-k/)

## Description

---
<p>Given an integer array <code>nums</code> and an integer <code>k</code>, return <em>the number of <strong>subarrays</strong> of </em><code>nums</code><em> where the greatest common divisor of the subarray&#39;s elements is </em><code>k</code>.</p>

<p>A <strong>subarray</strong> is a contiguous non-empty sequence of elements within an array.</p>

<p>The <strong>greatest common divisor of an array</strong> is the largest integer that evenly divides all the array elements.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [9,3,1,2,6,3], k = 3
<strong>Output:</strong> 4
<strong>Explanation:</strong> The subarrays of nums where 3 is the greatest common divisor of all the subarray&#39;s elements are:
- [9,<u><strong>3</strong></u>,1,2,6,3]
- [9,3,1,2,6,<u><strong>3</strong></u>]
- [<u><strong>9,3</strong></u>,1,2,6,3]
- [9,3,1,2,<u><strong>6,3</strong></u>]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [4], k = 7
<strong>Output:</strong> 0
<strong>Explanation:</strong> There are no subarrays of nums where 7 is the greatest common divisor of all the subarray&#39;s elements.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 1000</code></li>
	<li><code>1 &lt;= nums[i], k &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='number-of-subarrays-with-gcd-equal-to-k'
class Solution:
    def subarrayGCD(self, nums: List[int], k: int) -> int:
        N = len(nums)
        res = 0
        
        for i in range(N):
            g = 0

            for j in range(i, N):
                g = gcd(g, nums[j])
                
                if g == k:
                    res += 1
        
        return res
        
```

