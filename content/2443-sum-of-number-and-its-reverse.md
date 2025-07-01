---
title: 2443. Sum of Number and Its Reverse
draft: false
tags: 
  - leetcode-medium
  - math
  - enumeration
  - weekly-contest-315
  - contest-question
date: 2022-10-16
---

[Problem Link](https://leetcode.com/problems/sum-of-number-and-its-reverse/)

## Description

---
<p>Given a <strong>non-negative</strong> integer <code>num</code>, return <code>true</code><em> if </em><code>num</code><em> can be expressed as the sum of any <strong>non-negative</strong> integer and its reverse, or </em><code>false</code><em> otherwise.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> num = 443
<strong>Output:</strong> true
<strong>Explanation:</strong> 172 + 271 = 443 so we return true.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> num = 63
<strong>Output:</strong> false
<strong>Explanation:</strong> 63 cannot be expressed as the sum of a non-negative integer and its reverse so we return false.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> num = 181
<strong>Output:</strong> true
<strong>Explanation:</strong> 140 + 041 = 181 so we return true. Note that when a number is reversed, there may be leading zeros.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= num &lt;= 10<sup>5</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='sum-of-number-and-its-reverse'
class Solution:
    def sumOfNumberAndReverse(self, num: int) -> bool:
        N = len(str(num))
        
        for x in range(num, num // 2 - 1, -1):
            if x + int(str(x)[::-1]) == num:
                return True
        
        return False
```

