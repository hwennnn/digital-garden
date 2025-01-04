---
title: 3046. Split the Array
draft: false
tags: 
  - leetcode-easy
  - array
  - hash-table
  - counting
date: 2024-02-25
---

[Problem Link](https://leetcode.com/problems/split-the-array/)

## Description

---
<p>You are given an integer array <code>nums</code> of <strong>even</strong> length. You have to split the array into two parts <code>nums1</code> and <code>nums2</code> such that:</p>

<ul>
	<li><code>nums1.length == nums2.length == nums.length / 2</code>.</li>
	<li><code>nums1</code> should contain <strong>distinct </strong>elements.</li>
	<li><code>nums2</code> should also contain <strong>distinct</strong> elements.</li>
</ul>

<p>Return <code>true</code><em> if it is possible to split the array, and </em><code>false</code> <em>otherwise</em><em>.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,1,2,2,3,4]
<strong>Output:</strong> true
<strong>Explanation:</strong> One of the possible ways to split nums is nums1 = [1,2,3] and nums2 = [1,2,4].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,1,1,1]
<strong>Output:</strong> false
<strong>Explanation:</strong> The only possible way to split nums is nums1 = [1,1] and nums2 = [1,1]. Both nums1 and nums2 do not contain distinct elements. Therefore, we return false.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 100</code></li>
	<li><code>nums.length % 2 == 0 </code></li>
	<li><code>1 &lt;= nums[i] &lt;= 100</code></li>
</ul>


## Solution

---
### Python
``` py title='split-the-array'
class Solution:
    def isPossibleToSplit(self, nums: List[int]) -> bool:
        counter = Counter(nums)
        left = right = 0
        
        for v in counter.values():
            if v >= 2:
                left += 1
                right += 1
            else:
                if left <= right:
                    left += 1
                else:
                    right += 1
        
        return left == right == len(nums) // 2
                
```

