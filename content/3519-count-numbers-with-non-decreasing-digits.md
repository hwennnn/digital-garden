---
title: 3519. Count Numbers with Non-Decreasing Digits 
draft: false
tags: 
  - leetcode-hard
  - math
  - string
  - dynamic-programming
  - weekly-contest-445
  - contest-question
date: 2025-05-17
---

[Problem Link](https://leetcode.com/problems/count-numbers-with-non-decreasing-digits/)

## Description

---
<p>You are given two integers, <code>l</code> and <code>r</code>, represented as strings, and an integer <code>b</code>. Return the count of integers in the inclusive range <code>[l, r]</code> whose digits are in <strong>non-decreasing</strong> order when represented in base <code>b</code>.</p>

<p>An integer is considered to have <strong>non-decreasing</strong> digits if, when read from left to right (from the most significant digit to the least significant digit), each digit is greater than or equal to the previous one.</p>

<p>Since the answer may be too large, return it <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">l = &quot;23&quot;, r = &quot;28&quot;, b = 8</span></p>

<p><strong>Output:</strong> <span class="example-io">3</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li>The numbers from 23 to 28 in base 8 are: 27, 30, 31, 32, 33, and 34.</li>
	<li>Out of these, 27, 33, and 34 have non-decreasing digits. Hence, the output is 3.</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">l = &quot;2&quot;, r = &quot;7&quot;, b = 2</span></p>

<p><strong>Output:</strong> <span class="example-io">2</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li>The numbers from 2 to 7 in base 2 are: 10, 11, 100, 101, 110, and 111.</li>
	<li>Out of these, 11 and 111 have non-decreasing digits. Hence, the output is 2.</li>
</ul>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code><font face="monospace">1 &lt;= l.length &lt;= r.length &lt;= 100</font></code></li>
	<li><code>2 &lt;= b &lt;= 10</code></li>
	<li><code>l</code> and <code>r</code> consist only of digits.</li>
	<li>The value represented by <code>l</code> is less than or equal to the value represented by <code>r</code>.</li>
	<li><code>l</code> and <code>r</code> do not contain leading zeros.</li>
</ul>


## Solution

---
### Python3
``` py title='count-numbers-with-non-decreasing-digits'
class Solution:
    def countNumbers(self, l: str, r: str, b: int) -> int:
        MOD = 10 ** 9 + 7
        
        def convert(num, base):
            if num == 0: return '0'

            res = ""
            while num > 0:
                res = str(num % base) + res
                num //= base
            
            return res
        
        def solve(num):
            N = len(num)

            @cache
            def dp(index, tight, prevDigit):
                if index == N:
                    return 1
                
                limit = int(num[index]) + 1 if tight else b
                res = 0

                for i in range(prevDigit, limit):
                    nextTight = tight and i == int(num[index])
                    res += dp(index + 1, nextTight, i)
                    res %= MOD
                
                return res
            
            return dp(0, True, 0)

        
        left = convert(int(l) - 1, b)
        right = convert(int(r), b)

        return (solve(right) - solve(left)) % MOD
```

