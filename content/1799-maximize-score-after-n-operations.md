---
title: 1799. Maximize Score After N Operations
draft: false
tags: 
  - leetcode-hard
  - array
  - math
  - dynamic-programming
  - backtracking
  - bit-manipulation
  - number-theory
  - bitmask
  - biweekly-contest-48
  - contest-question
date: 2023-05-14
---

[Problem Link](https://leetcode.com/problems/maximize-score-after-n-operations/)

## Description

---
<p>You are given <code>nums</code>, an array of positive integers of size <code>2 * n</code>. You must perform <code>n</code> operations on this array.</p>

<p>In the <code>i<sup>th</sup></code> operation <strong>(1-indexed)</strong>, you will:</p>

<ul>
	<li>Choose two elements, <code>x</code> and <code>y</code>.</li>
	<li>Receive a score of <code>i * gcd(x, y)</code>.</li>
	<li>Remove <code>x</code> and <code>y</code> from <code>nums</code>.</li>
</ul>

<p>Return <em>the maximum score you can receive after performing </em><code>n</code><em> operations.</em></p>

<p>The function <code>gcd(x, y)</code> is the greatest common divisor of <code>x</code> and <code>y</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2]
<strong>Output:</strong> 1
<strong>Explanation:</strong>&nbsp;The optimal choice of operations is:
(1 * gcd(1, 2)) = 1
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,4,6,8]
<strong>Output:</strong> 11
<strong>Explanation:</strong>&nbsp;The optimal choice of operations is:
(1 * gcd(3, 6)) + (2 * gcd(4, 8)) = 3 + 8 = 11
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,4,5,6]
<strong>Output:</strong> 14
<strong>Explanation:</strong>&nbsp;The optimal choice of operations is:
(1 * gcd(1, 5)) + (2 * gcd(2, 4)) + (3 * gcd(3, 6)) = 1 + 4 + 9 = 14
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 7</code></li>
	<li><code>nums.length == 2 * n</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>6</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='maximize-score-after-n-operations'
class Solution:
    def maxScore(self, nums: List[int]) -> int:
        N = len(nums)
        full_mask = (1 << N) - 1

        @cache
        def go(index, mask):
            if index == N // 2 + 1: return 0

            res = 0

            for i in range(N):
                if mask & (1 << i) > 0: continue
                for j in range(i + 1, N):
                    if mask & (1 << j) > 0: continue

                    newMask = mask | (1 << i) | (1 << j)

                    res = max(res, index * gcd(nums[i], nums[j]) + go(index + 1, newMask))
            
            return res
        
        return go(1, 0)


```

