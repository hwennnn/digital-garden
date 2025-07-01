---
title: 1546. Maximum Number of Non-Overlapping Subarrays With Sum Equals Target
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - greedy
  - prefix-sum
  - weekly-contest-201
  - contest-question
date: 2020-10-12
---

[Problem Link](https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/)

## Description

---
<p>Given an array <code>nums</code> and an integer <code>target</code>, return <em>the maximum number of <strong>non-empty</strong> <strong>non-overlapping</strong> subarrays such that the sum of values in each subarray is equal to</em> <code>target</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,1,1,1,1], target = 2
<strong>Output:</strong> 2
<strong>Explanation:</strong> There are 2 non-overlapping subarrays [<strong>1,1</strong>,1,<strong>1,1</strong>] with sum equals to target(2).
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [-1,3,5,1,4,2,-9], target = 6
<strong>Output:</strong> 2
<strong>Explanation:</strong> There are 3 subarrays with sum equal to 6.
([5,1], [4,2], [3,5,1,4,2,-9]) but only the first 2 are non-overlapping.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
	<li><code>0 &lt;= target &lt;= 10<sup>6</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='maximum-number-of-non-overlapping-subarrays-with-sum-equals-target'
class Solution:
    def maxNonOverlapping(self, nums: List[int], target: int) -> int:
        
        d = {0:-1}
        last = -1
        s = res = 0
        
        for i,num in enumerate(nums):
            s += num
            if s - target in d and d[s-target] >= last:
                last = i
                res += 1
            
            d[s] = i
        
        return res
```

