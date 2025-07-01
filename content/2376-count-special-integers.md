---
title: 2376. Count Special Integers
draft: false
tags: 
  - leetcode-hard
  - math
  - dynamic-programming
  - weekly-contest-306
  - contest-question
date: 2022-09-06
---

[Problem Link](https://leetcode.com/problems/count-special-integers/)

## Description

---
<p>We call a positive integer <strong>special</strong> if all of its digits are <strong>distinct</strong>.</p>

<p>Given a <strong>positive</strong> integer <code>n</code>, return <em>the number of special integers that belong to the interval </em><code>[1, n]</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 20
<strong>Output:</strong> 19
<strong>Explanation:</strong> All the integers from 1 to 20, except 11, are special. Thus, there are 19 special integers.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 5
<strong>Output:</strong> 5
<strong>Explanation:</strong> All the integers from 1 to 5 are special.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> n = 135
<strong>Output:</strong> 110
<strong>Explanation:</strong> There are 110 integers from 1 to 135 that are special.
Some of the integers that are not special are: 22, 114, and 131.</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 2 * 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='count-special-integers'
class Solution:
    def countSpecialNumbers(self, n: int) -> int:
        digits = []

        while n > 0:
            digits.append(n % 10)
            n //= 10

        digits.reverse()

        N = len(digits)

        @cache
        def dp(pos, tight, mask):
            if pos == N:
                return 1 if mask != 0 else 0
            
            limit = digits[pos] if tight else 9
            res = 0
            
            for i in range(0, limit + 1):
                if mask & (1 << i) > 0: continue
            
                nextTight = tight and i == digits[pos]
                nextMask = mask if i == 0 and mask == 0 else mask ^ (1 << i)
                
                res += dp(pos + 1, nextTight, nextMask)
                
            return res
    
        return dp(0, True, 0)
                
                
```

