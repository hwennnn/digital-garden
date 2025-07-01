---
title: 1281. Subtract the Product and Sum of Digits of an Integer
draft: false
tags: 
  - leetcode-easy
  - math
  - weekly-contest-166
  - contest-question
date: 2022-03-01
---

[Problem Link](https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/)

## Description

---
Given an integer number <code>n</code>, return the difference between the product of its digits and the sum of its digits.
<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 234
<strong>Output:</strong> 15 
<b>Explanation:</b> 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 4421
<strong>Output:</strong> 21
<b>Explanation: 
</b>Product of digits = 4 * 4 * 2 * 1 = 32 
Sum of digits = 4 + 4 + 2 + 1 = 11 
Result = 32 - 11 = 21
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 10^5</code></li>
</ul>


## Solution

---
### Python3
``` py title='subtract-the-product-and-sum-of-digits-of-an-integer'
class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        p = 1
        c = 0
        
        for i,x in enumerate(str(n)):
            p *= int(x)
            c += int(x)
        
        return p - c
```

