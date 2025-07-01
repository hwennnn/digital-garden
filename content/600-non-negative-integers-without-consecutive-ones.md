---
title: 600. Non-negative Integers without Consecutive Ones
draft: false
tags: 
  - leetcode-hard
  - dynamic-programming
  - weekly-contest-34
  - contest-question
date: 2022-09-06
---

[Problem Link](https://leetcode.com/problems/non-negative-integers-without-consecutive-ones/)

## Description

---
<p>Given a positive integer <code>n</code>, return the number of the integers in the range <code>[0, n]</code> whose binary representations <strong>do not</strong> contain consecutive ones.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 5
<strong>Output:</strong> 5
<strong>Explanation:</strong>
Here are the non-negative integers &lt;= 5 with their corresponding binary representations:
0 : 0
1 : 1
2 : 10
3 : 11
4 : 100
5 : 101
Among them, only integer 3 disobeys the rule (two consecutive ones) and the other 5 satisfy the rule. 
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 1
<strong>Output:</strong> 2
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> n = 2
<strong>Output:</strong> 3
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='non-negative-integers-without-consecutive-ones'
class Solution:
    def findIntegers(self, n: int) -> int:
        n = int(bin(n)[2:])
        
        digits = []
        
        while n > 0:
            digits.append(n % 10)
            n //= 10
        
        digits.reverse()
        N = len(digits)
        
        @cache
        def dp(pos, tight, last):
            if pos == N:
                return 1
            
            res = 0
            limit = digits[pos] if tight else 1
            
            for digit in range(0, limit + 1):
                if digit == last == 1: continue
                    
                res += dp(pos + 1, tight and digit == digits[pos], digit)
            
            return res
        
        return dp(0, True, 0)
```

