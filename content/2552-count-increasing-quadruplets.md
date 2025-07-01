---
title: 2552. Count Increasing Quadruplets
draft: false
tags: 
  - leetcode-hard
  - array
  - dynamic-programming
  - binary-indexed-tree
  - enumeration
  - prefix-sum
  - weekly-contest-330
  - contest-question
date: 2023-01-30
---

[Problem Link](https://leetcode.com/problems/count-increasing-quadruplets/)

## Description

---
<p>Given a <strong>0-indexed</strong> integer array <code>nums</code> of size <code>n</code> containing all numbers from <code>1</code> to <code>n</code>, return <em>the number of increasing quadruplets</em>.</p>

<p>A quadruplet <code>(i, j, k, l)</code> is increasing if:</p>

<ul>
	<li><code>0 &lt;= i &lt; j &lt; k &lt; l &lt; n</code>, and</li>
	<li><code>nums[i] &lt; nums[k] &lt; nums[j] &lt; nums[l]</code>.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,3,2,4,5]
<strong>Output:</strong> 2
<strong>Explanation:</strong> 
- When i = 0, j = 1, k = 2, and l = 3, nums[i] &lt; nums[k] &lt; nums[j] &lt; nums[l].
- When i = 0, j = 1, k = 2, and l = 4, nums[i] &lt; nums[k] &lt; nums[j] &lt; nums[l]. 
There are no other quadruplets, so we return 2.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,4]
<strong>Output:</strong> 0
<strong>Explanation:</strong> There exists only one quadruplet with i = 0, j = 1, k = 2, l = 3, but since nums[j] &lt; nums[k], we return 0.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>4 &lt;= nums.length &lt;= 4000</code></li>
	<li><code>1 &lt;= nums[i] &lt;= nums.length</code></li>
	<li>All the integers of <code>nums</code> are <strong>unique</strong>. <code>nums</code> is a permutation.</li>
</ul>


## Solution

---
### Python3
``` py title='count-increasing-quadruplets'
class Solution:
    def countQuadruplets(self, nums: List[int]) -> int:
        N = len(nums)
        left = [[0] * (N + 1)] # 0...i, < j
        right = [[0] * (N + 1)] # i+1...N, > j
        
        for i in range(1, N):
            curr = left[-1][:]
            
            for j in range(nums[i - 1] + 1, N + 1):
                curr[j] += 1
            
            left.append(curr)
        
        for i in range(N - 2, -1, -1):
            curr = right[-1][:]
            
            for j in range(nums[i + 1]):
                curr[j] += 1
            
            right.append(curr)
            
        right.reverse()
        
        res = 0
        
        for j in range(N):
            for k in range(j + 1, N):
                if nums[k] < nums[j]:
                    res += left[j][nums[k]] * right[k][nums[j]]
        
        return res
```

