---
title: 46. Permutations
draft: false
tags: 
  - leetcode-medium
  - array
  - backtracking
date: 2024-08-13
---

[Problem Link](https://leetcode.com/problems/permutations/)

## Description

---
<p>Given an array <code>nums</code> of distinct integers, return all the possible <span data-keyword="permutation-array">permutations</span>. You can return the answer in <strong>any order</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [1,2,3]
<strong>Output:</strong> [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [0,1]
<strong>Output:</strong> [[0,1],[1,0]]
</pre><p><strong class="example">Example 3:</strong></p>
<pre><strong>Input:</strong> nums = [1]
<strong>Output:</strong> [[1]]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 6</code></li>
	<li><code>-10 &lt;= nums[i] &lt;= 10</code></li>
	<li>All the integers of <code>nums</code> are <strong>unique</strong>.</li>
</ul>


## Solution

---
### Python
``` py title='permutations'
class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        N = len(nums)
        visited = [False] * N
        res = []

        def go(curr):
            if len(curr) == N:
                res.append(curr[:])
                return
            
            for j in range(N):
                if not visited[j]:
                    visited[j] = True
                    curr.append(nums[j])
                    go(curr)
                    curr.pop()
                    visited[j] = False
        
        go([])
        return res
```
