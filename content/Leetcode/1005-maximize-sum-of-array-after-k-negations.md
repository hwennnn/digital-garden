---
title: 1005. Maximize Sum Of Array After K Negations
draft: false
tags: 
  - leetcode-easy
  - array
  - greedy
  - sorting
date: 2022-02-17
---

[Problem Link](https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/)

## Description

---
<p>Given an integer array <code>nums</code> and an integer <code>k</code>, modify the array in the following way:</p>

<ul>
	<li>choose an index <code>i</code> and replace <code>nums[i]</code> with <code>-nums[i]</code>.</li>
</ul>

<p>You should apply this process exactly <code>k</code> times. You may choose the same index <code>i</code> multiple times.</p>

<p>Return <em>the largest possible sum of the array after modifying it in this way</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [4,2,3], k = 1
<strong>Output:</strong> 5
<strong>Explanation:</strong> Choose index 1 and nums becomes [4,-2,3].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,-1,0,2], k = 3
<strong>Output:</strong> 6
<strong>Explanation:</strong> Choose indices (1, 2, 2) and nums becomes [3,1,0,2].
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,-3,-1,5,-4], k = 2
<strong>Output:</strong> 13
<strong>Explanation:</strong> Choose indices (1, 4) and nums becomes [2,3,-1,5,4].
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
	<li><code>-100 &lt;= nums[i] &lt;= 100</code></li>
	<li><code>1 &lt;= k &lt;= 10<sup>4</sup></code></li>
</ul>


## Solution

---
### Python
``` py title='maximize-sum-of-array-after-k-negations'
class Solution:
    def largestSumAfterKNegations(self, nums: List[int], k: int) -> int:
        neg = []
        pos = []
        
        for x in nums:
            if x < 0:
                neg.append(x)
            else:
                pos.append(x)
        
        pos.sort()
        
        if k >= len(neg):
            k -= len(neg)
            nums = sorted(abs(x) for x in nums)
            
            if k % 2 == 1:
                return -nums[0] + sum(nums[1:])
            else:
                return sum(nums)
        else:
            neg.sort()
            
            return sum(pos) - sum(neg[:k]) + sum(neg[k:])
```

