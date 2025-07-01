---
title: 974. Subarray Sums Divisible by K
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - prefix-sum
  - weekly-contest-119
  - contest-question
date: 2024-06-09
---

[Problem Link](https://leetcode.com/problems/subarray-sums-divisible-by-k/)

## Description

---
<p>Given an integer array <code>nums</code> and an integer <code>k</code>, return <em>the number of non-empty <strong>subarrays</strong> that have a sum divisible by </em><code>k</code>.</p>

<p>A <strong>subarray</strong> is a <strong>contiguous</strong> part of an array.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [4,5,0,-2,-3,1], k = 5
<strong>Output:</strong> 7
<strong>Explanation:</strong> There are 7 subarrays with a sum divisible by k = 5:
[4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [5], k = 9
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
	<li><code>2 &lt;= k &lt;= 10<sup>4</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='subarray-sums-divisible-by-k'
class Solution:
    def subarraysDivByK(self, nums: List[int], k: int) -> int:
        N = len(nums)
        count = [0] * k
        count[0] = 1
        s = res = 0

        for x in nums:
            s += x
            s %= k

            res += count[s]
            count[s] += 1

        return res

```

