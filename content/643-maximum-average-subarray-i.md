---
title: 643. Maximum Average Subarray I
draft: false
tags: 
  - leetcode-easy
  - array
  - sliding-window
  - weekly-contest-41
  - contest-question
date: 2020-08-18
---

[Problem Link](https://leetcode.com/problems/maximum-average-subarray-i/)

## Description

---
<p>You are given an integer array <code>nums</code> consisting of <code>n</code> elements, and an integer <code>k</code>.</p>

<p>Find a contiguous subarray whose <strong>length is equal to</strong> <code>k</code> that has the maximum average value and return <em>this value</em>. Any answer with a calculation error less than <code>10<sup>-5</sup></code> will be accepted.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,12,-5,-6,50,3], k = 4
<strong>Output:</strong> 12.75000
<strong>Explanation:</strong> Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [5], k = 1
<strong>Output:</strong> 5.00000
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == nums.length</code></li>
	<li><code>1 &lt;= k &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='maximum-average-subarray-i'
class Solution:
    def findMaxAverage(self, A: List[int], K: int) -> float:
        
        s = 0
        m = float('-inf')
        
        for i,x in enumerate(A):
            s += x
            
            if i >= K:
                s -= A[i-K]
            
            if i >= K-1:
                m = max(m, s)
        
        return m / K 
```

