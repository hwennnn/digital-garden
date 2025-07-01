---
title: 2843.   Count Symmetric Integers
draft: false
tags: 
  - leetcode-easy
  - math
  - enumeration
  - weekly-contest-361
  - contest-question
date: 2025-04-11
---

[Problem Link](https://leetcode.com/problems/count-symmetric-integers/)

## Description

---
<p>You are given two positive integers <code>low</code> and <code>high</code>.</p>

<p>An integer <code>x</code> consisting of <code>2 * n</code> digits is <strong>symmetric</strong> if the sum of the first <code>n</code> digits of <code>x</code> is equal to the sum of the last <code>n</code> digits of <code>x</code>. Numbers with an odd number of digits are never symmetric.</p>

<p>Return <em>the <strong>number of symmetric</strong> integers in the range</em> <code>[low, high]</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> low = 1, high = 100
<strong>Output:</strong> 9
<strong>Explanation:</strong> There are 9 symmetric integers between 1 and 100: 11, 22, 33, 44, 55, 66, 77, 88, and 99.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> low = 1200, high = 1230
<strong>Output:</strong> 4
<strong>Explanation:</strong> There are 4 symmetric integers between 1200 and 1230: 1203, 1212, 1221, and 1230.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= low &lt;= high &lt;= 10<sup>4</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='count-symmetric-integers'
class Solution:
    def countSymmetricIntegers(self, low: int, high: int) -> int:
        res = 0

        def good(x):
            A = []

            while x > 0:
                A.append(x % 10)
                x //= 10
            
            N = len(A)
            return N % 2 == 0 and sum(A[:N//2]) == sum(A[N//2:])

        for x in range(low, high + 1):
            if good(x):
                res += 1
        
        return res
```

