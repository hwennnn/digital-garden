---
title: 698. Partition to K Equal Sum Subsets
draft: false
tags: 
  - leetcode-medium
  - array
  - dynamic-programming
  - backtracking
  - bit-manipulation
  - memoization
  - bitmask
  - weekly-contest-54
  - contest-question
date: 2022-07-12
---

[Problem Link](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/)

## Description

---
<p>Given an integer array <code>nums</code> and an integer <code>k</code>, return <code>true</code> if it is possible to divide this array into <code>k</code> non-empty subsets whose sums are all equal.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [4,3,2,3,5,2,1], k = 4
<strong>Output:</strong> true
<strong>Explanation:</strong> It is possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,4], k = 3
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= k &lt;= nums.length &lt;= 16</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
	<li>The frequency of each element is in the range <code>[1, 4]</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='partition-to-k-equal-sum-subsets'
class Solution:
    def canPartitionKSubsets(self, nums: List[int], k: int) -> bool:
        n = len(nums)
        total = sum(nums)
        if total % k != 0: return False
        
        target = total // k
        nums.sort(reverse = 1)
        
        @cache
        def go(mask):
            curr = 0
            
            for i in range(n):
                if (mask >> i) & 1 > 0:
                    curr += nums[i]
            
            done, side = divmod(curr, target)
            
            if done == k - 1: return True
            
            for i in range(n):
                if (mask & (1 << i)) == 0:
                    if side + nums[i] <= target and go(mask | (1 << i)):
                        return True
            
            return False
        
        return go(0)
```

