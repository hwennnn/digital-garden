---
title: 907. Sum of Subarray Minimums
draft: false
tags: 
  - leetcode-medium
  - array
  - dynamic-programming
  - stack
  - monotonic-stack
  - weekly-contest-102
  - contest-question
date: 2025-01-23
---

[Problem Link](https://leetcode.com/problems/sum-of-subarray-minimums/)

## Description

---
<p>Given an array of integers arr, find the sum of <code>min(b)</code>, where <code>b</code> ranges over every (contiguous) subarray of <code>arr</code>. Since the answer may be large, return the answer <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> arr = [3,1,2,4]
<strong>Output:</strong> 17
<strong>Explanation:</strong> 
Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. 
Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
Sum is 17.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> arr = [11,81,94,43,3]
<strong>Output:</strong> 444
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= arr.length &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>1 &lt;= arr[i] &lt;= 3 * 10<sup>4</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='sum-of-subarray-minimums'
class Solution:
    def sumSubarrayMins(self, arr: List[int]) -> int:
        N = len(arr)
        MOD = 10 ** 9 + 7
        prevSmaller = [-1] * N
        nextSmaller = [N] * N
        res = 0

        # construct nextSmaller array
        stack = []
        for i, x in enumerate(arr):
            while stack and x < arr[stack[-1]]:
                nextSmaller[stack.pop()] = i
            
            stack.append(i)
        
        # construct prevSmaller array
        stack = []
        for i in range(N - 1, -1, -1):
            # less than or equal here to prevent double counting
            while stack and arr[i] <= arr[stack[-1]]:
                prevSmaller[stack.pop()] = i
            
            stack.append(i)
        
        for i, x in enumerate(arr):
            # fix x as the smallest in the subarray
            left = i - prevSmaller[i]
            right = nextSmaller[i] - i
            res += x * left * right
            res %= MOD
        
        return res
```

