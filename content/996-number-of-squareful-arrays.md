---
title: 996. Number of Squareful Arrays
draft: false
tags: 
  - leetcode-hard
  - array
  - hash-table
  - math
  - dynamic-programming
  - backtracking
  - bit-manipulation
  - bitmask
  - weekly-contest-124
  - contest-question
date: 2022-02-21
---

[Problem Link](https://leetcode.com/problems/number-of-squareful-arrays/)

## Description

---
<p>An array is <strong>squareful</strong> if the sum of every pair of adjacent elements is a <strong>perfect square</strong>.</p>

<p>Given an integer array nums, return <em>the number of permutations of </em><code>nums</code><em> that are <strong>squareful</strong></em>.</p>

<p>Two permutations <code>perm1</code> and <code>perm2</code> are different if there is some index <code>i</code> such that <code>perm1[i] != perm2[i]</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,17,8]
<strong>Output:</strong> 2
<strong>Explanation:</strong> [1,8,17] and [17,8,1] are the valid permutations.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,2,2]
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 12</code></li>
	<li><code>0 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='number-of-squareful-arrays'
class Solution:
    def numSquarefulPerms(self, nums: List[int]) -> int:
        n = len(nums)
        nums.sort()
        res = 0
        used = [False] * n
        
        @cache
        def good(m):
            sq = int(math.sqrt(m))
            
            return sq * sq == m
        
        def perm(path):
            nonlocal res
            
            if len(path) == n:
                res += 1
                return
            
            for i in range(n):
                if used[i]: continue
                    
                if i > 0 and nums[i] == nums[i - 1] and not used[i - 1]: continue
                
                if len(path) == 0 or (len(path) > 0 and good(path[-1] + nums[i])):
                    used[i] = True
                    perm(path + [nums[i]])
                    used[i] = False
                
        perm([])        

        return res
```

