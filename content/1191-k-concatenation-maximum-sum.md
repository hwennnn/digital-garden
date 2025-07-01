---
title: 1191. K-Concatenation Maximum Sum
draft: false
tags: 
  - leetcode-medium
  - array
  - dynamic-programming
  - weekly-contest-154
  - contest-question
date: 2021-04-25
---

[Problem Link](https://leetcode.com/problems/k-concatenation-maximum-sum/)

## Description

---
<p>Given an integer array <code>arr</code> and an integer <code>k</code>, modify the array by repeating it <code>k</code> times.</p>

<p>For example, if <code>arr = [1, 2]</code> and <code>k = 3 </code>then the modified array will be <code>[1, 2, 1, 2, 1, 2]</code>.</p>

<p>Return the maximum sub-array sum in the modified array. Note that the length of the sub-array can be <code>0</code> and its sum in that case is <code>0</code>.</p>

<p>As the answer can be very large, return the answer <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> arr = [1,2], k = 3
<strong>Output:</strong> 9
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> arr = [1,-2,1], k = 5
<strong>Output:</strong> 2
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> arr = [-1,-2], k = 7
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= arr.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= k &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>4</sup> &lt;= arr[i] &lt;= 10<sup>4</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='k-concatenation-maximum-sum'
class Solution:
    def kConcatenationMaxSum(self, arr: List[int], k: int) -> int:
        M = 10 ** 9 + 7
        def kadane(arr, res = 0, curr = 0):
            for num in arr:
                curr = max(num, curr + num)
                res = max(res, curr)
            return res
        
        return ((k - 2) * max(sum(arr), 0) + kadane(arr * 2) if k > 1 else kadane(arr)) % M
```

