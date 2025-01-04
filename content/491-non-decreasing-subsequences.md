---
title: 491. Non-decreasing Subsequences
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - backtracking
  - bit-manipulation
date: 2023-01-20
---

[Problem Link](https://leetcode.com/problems/non-decreasing-subsequences/)

## Description

---
<p>Given an integer array <code>nums</code>, return <em>all the different possible non-decreasing subsequences of the given array with at least two elements</em>. You may return the answer in <strong>any order</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [4,6,7,7]
<strong>Output:</strong> [[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [4,4,3,2,1]
<strong>Output:</strong> [[4,4]]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 15</code></li>
	<li><code>-100 &lt;= nums[i] &lt;= 100</code></li>
</ul>


## Solution

---
### Python3
``` py title='non-decreasing-subsequences'
class Solution:
    def findSubsequences(self, nums: List[int]) -> List[List[int]]:
        N = len(nums)
        res = set()

        def go(index, curr):
            if index == N:
                if len(curr) >= 2:
                    res.add(tuple(curr))
                return

            go(index + 1, curr)
            if nums[index] >= curr[-1]:
                go(index + 1, curr + [nums[index]])

        for i in range(N):
            go(i + 1, [nums[i]])

        return res
```

