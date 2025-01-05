---
title: 442. Find All Duplicates in an Array
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
date: 2024-03-25
---

[Problem Link](https://leetcode.com/problems/find-all-duplicates-in-an-array/)

## Description

---
<p>Given an integer array <code>nums</code> of length <code>n</code> where all the integers of <code>nums</code> are in the range <code>[1, n]</code> and each integer appears <strong>at most</strong> <strong>twice</strong>, return <em>an array of all the integers that appears <strong>twice</strong></em>.</p>

<p>You must write an algorithm that runs in <code>O(n)</code> time and uses only <em>constant</em> auxiliary space, excluding the space needed to store the output</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [4,3,2,7,8,2,3,1]
<strong>Output:</strong> [2,3]
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [1,1,2]
<strong>Output:</strong> [1]
</pre><p><strong class="example">Example 3:</strong></p>
<pre><strong>Input:</strong> nums = [1]
<strong>Output:</strong> []
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == nums.length</code></li>
	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= n</code></li>
	<li>Each element in <code>nums</code> appears <strong>once</strong> or <strong>twice</strong>.</li>
</ul>


## Solution

---
### Python3
``` py title='find-all-duplicates-in-an-array'
class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        N = len(nums)
        res = []

        for i in range(N):
            a = abs(nums[i])
            if nums[a - 1] < 0:
                res.append(a)
            
            nums[a - 1] = -nums[a - 1]
        
        return res
```
