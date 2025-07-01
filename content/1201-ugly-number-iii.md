---
title: 1201. Ugly Number III
draft: false
tags: 
  - leetcode-medium
  - math
  - binary-search
  - combinatorics
  - number-theory
  - weekly-contest-155
  - contest-question
date: 2022-04-20
---

[Problem Link](https://leetcode.com/problems/ugly-number-iii/)

## Description

---
<p>An <strong>ugly number</strong> is a positive integer that is divisible by <code>a</code>, <code>b</code>, or <code>c</code>.</p>

<p>Given four integers <code>n</code>, <code>a</code>, <code>b</code>, and <code>c</code>, return the <code>n<sup>th</sup></code> <strong>ugly number</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 3, a = 2, b = 3, c = 5
<strong>Output:</strong> 4
<strong>Explanation:</strong> The ugly numbers are 2, 3, 4, 5, 6, 8, 9, 10... The 3<sup>rd</sup> is 4.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 4, a = 2, b = 3, c = 4
<strong>Output:</strong> 6
<strong>Explanation:</strong> The ugly numbers are 2, 3, 4, 6, 8, 9, 10, 12... The 4<sup>th</sup> is 6.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> n = 5, a = 2, b = 11, c = 13
<strong>Output:</strong> 10
<strong>Explanation:</strong> The ugly numbers are 2, 4, 6, 8, 10, 11, 12, 13... The 5<sup>th</sup> is 10.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n, a, b, c &lt;= 10<sup>9</sup></code></li>
	<li><code>1 &lt;= a * b * c &lt;= 10<sup>18</sup></code></li>
	<li>It is guaranteed that the result will be in range <code>[1, 2 * 10<sup>9</sup>]</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='ugly-number-iii'
class Solution:
    def nthUglyNumber(self, n: int, a: int, b: int, c: int) -> int:
        
        def enough(x):
            total = (x // a) + (x // b) + (x // c) - (x // ab) - (x // bc) - (x // ac) + (x // abc)
            return total >= n
            
        ab = a*b // math.gcd(a,b)
        bc = b*c // math.gcd(b,c)
        ac = a*c // math.gcd(a,c)
        abc = a*bc // math.gcd(a,bc)
        
        left, right = 1, 10 ** 10
        while left < right:
            mid = left + (right-left) // 2
            
            if enough(mid):
                right = mid
            else:
                left = mid + 1
            
        return left
```

