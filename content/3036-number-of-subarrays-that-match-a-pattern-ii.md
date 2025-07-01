---
title: 3036. Number of Subarrays That Match a Pattern II
draft: false
tags: 
  - leetcode-hard
  - array
  - rolling-hash
  - string-matching
  - hash-function
  - weekly-contest-384
  - contest-question
date: 2024-02-16
---

[Problem Link](https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-ii/)

## Description

---
<p>You are given a <strong>0-indexed</strong> integer array <code>nums</code> of size <code>n</code>, and a <strong>0-indexed</strong> integer array <code>pattern</code> of size <code>m</code> consisting of integers <code>-1</code>, <code>0</code>, and <code>1</code>.</p>

<p>A <span data-keyword="subarray">subarray</span> <code>nums[i..j]</code> of size <code>m + 1</code> is said to match the <code>pattern</code> if the following conditions hold for each element <code>pattern[k]</code>:</p>

<ul>
	<li><code>nums[i + k + 1] &gt; nums[i + k]</code> if <code>pattern[k] == 1</code>.</li>
	<li><code>nums[i + k + 1] == nums[i + k]</code> if <code>pattern[k] == 0</code>.</li>
	<li><code>nums[i + k + 1] &lt; nums[i + k]</code> if <code>pattern[k] == -1</code>.</li>
</ul>

<p>Return <em>the<strong> count</strong> of subarrays in</em> <code>nums</code> <em>that match the</em> <code>pattern</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,4,5,6], pattern = [1,1]
<strong>Output:</strong> 4
<strong>Explanation:</strong> The pattern [1,1] indicates that we are looking for strictly increasing subarrays of size 3. In the array nums, the subarrays [1,2,3], [2,3,4], [3,4,5], and [4,5,6] match this pattern.
Hence, there are 4 subarrays in nums that match the pattern.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,4,4,1,3,5,5,3], pattern = [1,0,-1]
<strong>Output:</strong> 2
<strong>Explanation: </strong>Here, the pattern [1,0,-1] indicates that we are looking for a sequence where the first number is smaller than the second, the second is equal to the third, and the third is greater than the fourth. In the array nums, the subarrays [1,4,4,1], and [3,5,5,3] match this pattern.
Hence, there are 2 subarrays in nums that match the pattern.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= n == nums.length &lt;= 10<sup>6</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
	<li><code>1 &lt;= m == pattern.length &lt; n</code></li>
	<li><code>-1 &lt;= pattern[i] &lt;= 1</code></li>
</ul>


## Solution

---
### Python3
``` py title='number-of-subarrays-that-match-a-pattern-ii'
def rabin_karp(s, t):
    
    def f(x):
        return x + 2
    
    p = 31
    m = 10 ** 9 + 9
    S, T = len(s), len(t)
    
    p_pow = [0] * max(S, T)
    p_pow[0] = 1
    for i in range(1, len(p_pow)):
        p_pow[i] = (p_pow[i - 1] * p) % m
    
    h = [0] * (T + 1)
    for i in range(T):
        h[i + 1] = (h[i] + (f(t[i])) * p_pow[i]) % m
    
    h_s = 0
    for i in range(S):
        h_s = (h_s + (f(s[i])) * p_pow[i]) % m
    
    occurences = []
    for i in range(T - S + 1):
        cur_h = (h[i + S] + m - h[i]) % m
        if cur_h == h_s * p_pow[i] % m:
            occurences.append(i)
    
    return occurences

class Solution:
    def countMatchingSubarrays(self, nums: List[int], pattern: List[int]) -> int:
        N, M = len(nums), len(pattern)
        res = 0
        A = []
        
        for i in range(1, N):
            if nums[i] > nums[i - 1]:
                A.append(1)
            elif nums[i] == nums[i - 1]:
                A.append(0)
            else:
                A.append(-1)
                
        rk = rabin_karp(pattern, A)
        
        return len(rk)
```

