---
title: 525. Contiguous Array
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - prefix-sum
  - weekly-contest-20
  - contest-question
date: 2024-03-16
---

[Problem Link](https://leetcode.com/problems/contiguous-array/)

## Description

---
<p>Given a binary array <code>nums</code>, return <em>the maximum length of a contiguous subarray with an equal number of </em><code>0</code><em> and </em><code>1</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [0,1]
<strong>Output:</strong> 2
<strong>Explanation:</strong> [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [0,1,0]
<strong>Output:</strong> 2
<strong>Explanation:</strong> [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [0,1,1,1,1,1,0,0,0]
<strong>Output:</strong> 6
<strong>Explanation:</strong> [1,1,1,0,0,0] is the longest contiguous subarray with equal number of 0 and 1.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>nums[i]</code> is either <code>0</code> or <code>1</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='contiguous-array'
class Solution:
    def findMaxLength(self, nums: List[int]) -> int:
        N = len(nums)
        mp = {}
        mp[0] = -1
        res = curr = 0

        for i, x in enumerate(nums):
            if x == 0:
                curr -= 1
            else:
                curr += 1
            
            if curr in mp:
                res = max(res, i - mp[curr])
            else:
                mp[curr] = i
        
        return res
```

