---
title: 1755. Closest Subsequence Sum
draft: false
tags: 
  - leetcode-hard
  - array
  - two-pointers
  - dynamic-programming
  - bit-manipulation
  - sorting
  - bitmask
  - weekly-contest-227
  - contest-question
date: 2021-10-10
---

[Problem Link](https://leetcode.com/problems/closest-subsequence-sum/)

## Description

---
<p>You are given an integer array <code>nums</code> and an integer <code>goal</code>.</p>

<p>You want to choose a subsequence of <code>nums</code> such that the sum of its elements is the closest possible to <code>goal</code>. That is, if the sum of the subsequence&#39;s elements is <code>sum</code>, then you want to <strong>minimize the absolute difference</strong> <code>abs(sum - goal)</code>.</p>

<p>Return <em>the <strong>minimum</strong> possible value of</em> <code>abs(sum - goal)</code>.</p>

<p>Note that a subsequence of an array is an array formed by removing some elements <strong>(possibly all or none)</strong> of the original array.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [5,-7,3,5], goal = 6
<strong>Output:</strong> 0
<strong>Explanation:</strong> Choose the whole array as a subsequence, with a sum of 6.
This is equal to the goal, so the absolute difference is 0.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [7,-9,15,-2], goal = -5
<strong>Output:</strong> 1
<strong>Explanation:</strong> Choose the subsequence [7,-9,-2], with a sum of -4.
The absolute difference is abs(-4 - (-5)) = abs(1) = 1, which is the minimum.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3], goal = -7
<strong>Output:</strong> 7
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 40</code></li>
	<li><code>-10<sup>7</sup> &lt;= nums[i] &lt;= 10<sup>7</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= goal &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='closest-subsequence-sum'
class Solution:
    def minAbsDifference(self, nums: List[int], goal: int) -> int:
        
        def construct(A):
            s = set()
            
            for k in range(len(A) + 1):
                for comb in combinations(A, k):
                    s.add(sum(comb))
            
            return s
        
        n = len(nums) // 2
        s1, s2 = construct(nums[:n]), construct(nums[n:])
        s2 = sorted(s2)
        res = float('inf')
        
        for x in s1:
            target = goal - x
            index = bisect.bisect_left(s2, target)
            
            for p in (index, index - 1):
                if 0 <= p < len(s2):
                    res = min(res, abs(x + s2[p] - goal))
        
        return res
```

