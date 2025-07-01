---
title: 1681. Minimum Incompatibility
draft: false
tags: 
  - leetcode-hard
  - array
  - dynamic-programming
  - bit-manipulation
  - bitmask
  - weekly-contest-218
  - contest-question
date: 2022-01-06
---

[Problem Link](https://leetcode.com/problems/minimum-incompatibility/)

## Description

---
<p>You are given an integer array <code>nums</code>​​​ and an integer <code>k</code>. You are asked to distribute this array into <code>k</code> subsets of <strong>equal size</strong> such that there are no two equal elements in the same subset.</p>

<p>A subset&#39;s <strong>incompatibility</strong> is the difference between the maximum and minimum elements in that array.</p>

<p>Return <em>the <strong>minimum possible sum of incompatibilities</strong> of the </em><code>k</code> <em>subsets after distributing the array optimally, or return </em><code>-1</code><em> if it is not possible.</em></p>

<p>A subset is a group integers that appear in the array with no particular order.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,1,4], k = 2
<strong>Output:</strong> 4
<strong>Explanation:</strong> The optimal distribution of subsets is [1,2] and [1,4].
The incompatibility is (2-1) + (4-1) = 4.
Note that [1,1] and [2,4] would result in a smaller sum, but the first subset contains 2 equal elements.</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [6,3,8,1,3,1,2,2], k = 4
<strong>Output:</strong> 6
<strong>Explanation:</strong> The optimal distribution of subsets is [1,2], [2,3], [6,8], and [1,3].
The incompatibility is (2-1) + (3-2) + (8-6) + (3-1) = 6.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [5,3,3,6,3,3], k = 3
<strong>Output:</strong> -1
<strong>Explanation:</strong> It is impossible to distribute nums into 3 subsets where no two elements are equal in the same subset.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= k &lt;= nums.length &lt;= 16</code></li>
	<li><code>nums.length</code> is divisible by <code>k</code></li>
	<li><code>1 &lt;= nums[i] &lt;= nums.length</code></li>
</ul>


## Solution

---
### Python3
``` py title='minimum-incompatibility'
class Solution:
    def minimumIncompatibility(self, nums: List[int], k: int) -> int:
        scores = collections.defaultdict(int)
        n = len(nums)
        per = n // k
        candidates = []
        
        for mask in range(1 << n):
            count = 0
            
            for j in range(n):
                if mask & (1 << j) > 0:
                    count += 1
            
            if count == per:
                s = set()
                
                for j in range(n):
                    if mask & (1 << j) > 0: 
                        s.add(nums[j])
                
                if len(s) != per: continue
                
                candidates.append(mask) 
                scores[mask] = max(s) - min(s)
        
        @cache
        def go(mask):
            if mask == 0: return 0
            
            res = float('inf')
            
            for candidate in candidates:
                if (mask & candidate) == candidate:
                    res = min(res, go(mask ^ candidate) + scores[candidate])
            
            return res
        
        ans = go((1 << n) - 1)
        
        return -1 if ans == float('inf') else ans
```

