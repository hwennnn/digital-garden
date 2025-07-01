---
title: 878. Nth Magical Number
draft: false
tags: 
  - leetcode-hard
  - math
  - binary-search
  - weekly-contest-95
  - contest-question
date: 2021-12-11
---

[Problem Link](https://leetcode.com/problems/nth-magical-number/)

## Description

---
<p>A positive integer is <em>magical</em> if it is divisible by either <code>a</code> or <code>b</code>.</p>

<p>Given the three integers <code>n</code>, <code>a</code>, and <code>b</code>, return the <code>n<sup>th</sup></code> magical number. Since the answer may be very large, <strong>return it modulo </strong><code>10<sup>9</sup> + 7</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 1, a = 2, b = 3
<strong>Output:</strong> 2
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 4, a = 2, b = 3
<strong>Output:</strong> 6
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 10<sup>9</sup></code></li>
	<li><code>2 &lt;= a, b &lt;= 4 * 10<sup>4</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='nth-magical-number'
class Solution:
    def nthMagicalNumber(self, n: int, a: int, b: int) -> int:
        M = 10 ** 9 + 7
        lcm = (a * b) // gcd(a, b)
        
        left, right = 0, min(a, b) * n
        
        while left < right:
            mid = left + (right - left) // 2
            
            if mid // a + mid // b - mid // lcm >= n:
                right = mid
            else:
                left = mid + 1
        
        return left % M
```

