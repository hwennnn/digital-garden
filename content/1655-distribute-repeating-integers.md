---
title: 1655. Distribute Repeating Integers
draft: false
tags: 
  - leetcode-hard
  - array
  - dynamic-programming
  - backtracking
  - bit-manipulation
  - bitmask
  - biweekly-contest-39
  - contest-question
date: 2022-01-10
---

[Problem Link](https://leetcode.com/problems/distribute-repeating-integers/)

## Description

---
<p>You are given an array of <code>n</code> integers, <code>nums</code>, where there are at most <code>50</code> unique values in the array. You are also given an array of <code>m</code> customer order quantities, <code>quantity</code>, where <code>quantity[i]</code> is the amount of integers the <code>i<sup>th</sup></code> customer ordered. Determine if it is possible to distribute <code>nums</code> such that:</p>

<ul>
	<li>The <code>i<sup>th</sup></code> customer gets <strong>exactly</strong> <code>quantity[i]</code> integers,</li>
	<li>The integers the <code>i<sup>th</sup></code> customer gets are <strong>all equal</strong>, and</li>
	<li>Every customer is satisfied.</li>
</ul>

<p>Return <code>true</code><em> if it is possible to distribute </em><code>nums</code><em> according to the above conditions</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,4], quantity = [2]
<strong>Output:</strong> false
<strong>Explanation:</strong> The 0<sup>th</sup> customer cannot be given two different integers.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,3], quantity = [2]
<strong>Output:</strong> true
<strong>Explanation:</strong> The 0<sup>th</sup> customer is given [3,3]. The integers [1,2] are not used.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,1,2,2], quantity = [2,2]
<strong>Output:</strong> true
<strong>Explanation:</strong> The 0<sup>th</sup> customer is given [1,1], and the 1st customer is given [2,2].
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == nums.length</code></li>
	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 1000</code></li>
	<li><code>m == quantity.length</code></li>
	<li><code>1 &lt;= m &lt;= 10</code></li>
	<li><code>1 &lt;= quantity[i] &lt;= 10<sup>5</sup></code></li>
	<li>There are at most <code>50</code> unique values in <code>nums</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='distribute-repeating-integers'
class Solution:
    def canDistribute(self, nums: List[int], quantity: List[int]) -> bool:
        counter = sorted(Counter(nums).values())
        n, m = len(counter), len(quantity)
        
        mask_sum = defaultdict(int)
        
        for mask in range(1 << m):
            for j in range(m):
                if (1 << j) & mask > 0:
                    mask_sum[mask] += quantity[j]

        @cache
        def go(index, mask):
            if mask == 0: return True
            
            if index == n: return False
            
            submask = mask
            
            while submask:
                if counter[index] >= mask_sum[submask] and go(index + 1, submask ^ mask):
                    return True
                
                submask = (submask - 1) & mask
            
            return go(index + 1, mask)
        
        return go(0, (1 << m) - 1)
            
            
        
        
```

