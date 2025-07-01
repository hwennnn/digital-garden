---
title: 3133. Minimum Array End
draft: false
tags: 
  - leetcode-medium
  - bit-manipulation
  - weekly-contest-395
  - contest-question
date: 2024-11-09
---

[Problem Link](https://leetcode.com/problems/minimum-array-end/)

## Description

---
<p>You are given two integers <code>n</code> and <code>x</code>. You have to construct an array of <strong>positive</strong> integers <code>nums</code> of size <code>n</code> where for every <code>0 &lt;= i &lt; n - 1</code>, <code>nums[i + 1]</code> is <strong>greater than</strong> <code>nums[i]</code>, and the result of the bitwise <code>AND</code> operation between all elements of <code>nums</code> is <code>x</code>.</p>

<p>Return the <strong>minimum</strong> possible value of <code>nums[n - 1]</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 3, x = 4</span></p>

<p><strong>Output:</strong> <span class="example-io">6</span></p>

<p><strong>Explanation:</strong></p>

<p><code>nums</code> can be <code>[4,5,6]</code> and its last element is 6.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 2, x = 7</span></p>

<p><strong>Output:</strong> <span class="example-io">15</span></p>

<p><strong>Explanation:</strong></p>

<p><code>nums</code> can be <code>[7,15]</code> and its last element is 15.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n, x &lt;= 10<sup>8</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='minimum-array-end'
class Solution:
    def minEnd(self, n: int, x: int) -> int:
        n -= 1
        A = [0] * 64 # bits representation for x
        B = [0] * 64 # bits representation for n - 1

        for i in range(64):
            A[i] = (x >> i) & 1
            B[i] = (n >> i) & 1
        
        i = 0
        j = 0
        while i < 64:
            while i < 64 and A[i] != 0:
                i += 1
            
            A[i] = B[j]
            i += 1
            j += 1
        
        ans = 0
        for i in range(64):
            if A[i] == 1:
                ans += (1 << i)

        return ans
            
```

