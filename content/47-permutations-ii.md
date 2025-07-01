---
title: 47. Permutations II
draft: false
tags: 
  - leetcode-medium
  - array
  - backtracking
  - sorting
date: 2022-05-12
---

[Problem Link](https://leetcode.com/problems/permutations-ii/)

## Description

---
<p>Given a collection of numbers, <code>nums</code>,&nbsp;that might contain duplicates, return <em>all possible unique permutations <strong>in any order</strong>.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,1,2]
<strong>Output:</strong>
[[1,1,2],
 [1,2,1],
 [2,1,1]]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3]
<strong>Output:</strong> [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 8</code></li>
	<li><code>-10 &lt;= nums[i] &lt;= 10</code></li>
</ul>


## Solution

---
### Python3
``` py title='permutations-ii'
class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        res = []
        n = len(nums)
        
        def backtrack(mask, path):
            if len(path) == n:
                res.append(path)
                return
            
            for i in range(n):
                if mask & (1 << i) > 0: continue
                
                if i > 0 and nums[i] == nums[i - 1] and mask & (1 << (i - 1)) > 0: continue
                
                backtrack(mask | (1 << i), path + [nums[i]])
        
        backtrack(0, [])
        return res
```

