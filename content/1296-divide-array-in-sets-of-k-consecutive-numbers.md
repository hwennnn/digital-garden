---
title: 1296. Divide Array in Sets of K Consecutive Numbers
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - greedy
  - sorting
  - weekly-contest-168
  - contest-question
date: 2020-12-27
---

[Problem Link](https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/)

## Description

---
<p>Given an array of integers <code>nums</code> and a positive integer <code>k</code>, check whether it is possible to divide this array into sets of <code>k</code> consecutive numbers.</p>

<p>Return <code>true</code> <em>if it is possible</em>.<strong> </strong>Otherwise, return <code>false</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,3,4,4,5,6], k = 4
<strong>Output:</strong> true
<strong>Explanation:</strong> Array can be divided into [1,2,3,4] and [3,4,5,6].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,2,1,2,3,4,3,4,5,9,10,11], k = 3
<strong>Output:</strong> true
<strong>Explanation:</strong> Array can be divided into [1,2,3] , [2,3,4] , [3,4,5] and [9,10,11].
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,4], k = 3
<strong>Output:</strong> false
<strong>Explanation:</strong> Each array should be divided in subarrays of size 3.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= k &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>

<p>&nbsp;</p>
<strong>Note:</strong> This question is the same as&nbsp;846:&nbsp;<a href="https://leetcode.com/problems/hand-of-straights/" target="_blank">https://leetcode.com/problems/hand-of-straights/</a>

## Solution

---
### Python3
``` py title='divide-array-in-sets-of-k-consecutive-numbers'
class Solution:
    def isPossibleDivide(self, nums: List[int], k: int) -> bool:
        n = len(nums)
        if n % k != 0: return False
        
        count = collections.Counter(nums)
        keys = sorted(count)
        
        for key in keys:
            if count[key] > 0:
                c = count[key]
                for i in range(key, key+k):
                    if count[i] < c: return False
                    
                    count[i] -= c
            
        return True
```

