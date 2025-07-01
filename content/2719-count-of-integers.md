---
title: 2719. Count of Integers
draft: false
tags: 
  - leetcode-hard
  - math
  - string
  - dynamic-programming
  - weekly-contest-348
  - contest-question
date: 2023-07-31
---

[Problem Link](https://leetcode.com/problems/count-of-integers/)

## Description

---
<p>You are given two numeric strings <code>num1</code> and <code>num2</code> and two integers <code>max_sum</code> and <code>min_sum</code>. We denote an integer <code>x</code> to be <em>good</em> if:</p>

<ul>
	<li><code>num1 &lt;= x &lt;= num2</code></li>
	<li><code>min_sum &lt;= digit_sum(x) &lt;= max_sum</code>.</li>
</ul>

<p>Return <em>the number of good integers</em>. Since the answer may be large, return it modulo <code>10<sup>9</sup> + 7</code>.</p>

<p>Note that <code>digit_sum(x)</code> denotes the sum of the digits of <code>x</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> num1 = &quot;1&quot;, num2 = &quot;12&quot;, <code>min_sum</code> = 1, max_sum = 8
<strong>Output:</strong> 11
<strong>Explanation:</strong> There are 11 integers whose sum of digits lies between 1 and 8 are 1,2,3,4,5,6,7,8,10,11, and 12. Thus, we return 11.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> num1 = &quot;1&quot;, num2 = &quot;5&quot;, <code>min_sum</code> = 1, max_sum = 5
<strong>Output:</strong> 5
<strong>Explanation:</strong> The 5 integers whose sum of digits lies between 1 and 5 are 1,2,3,4, and 5. Thus, we return 5.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= num1 &lt;= num2 &lt;= 10<sup>22</sup></code></li>
	<li><code>1 &lt;= min_sum &lt;= max_sum &lt;= 400</code></li>
</ul>


## Solution

---
### Python3
``` py title='count-of-integers'
class Solution:
    def count(self, num1: str, num2: str, min_sum: int, max_sum: int) -> int:
        M = 10 ** 9 + 7

        num1 = list(map(int, str(int(num1) - 1)))
        num2 = list(map(int, num2))
        
        def helper(digits):
            N = len(digits)

            @cache
            def go(index, tight, ssum):
                if index == N:
                    return min_sum <= ssum <= max_sum
                
                limit = digits[index] if tight else 9
                
                res = 0
                
                for digit in range(limit + 1):
                    nxtTight = tight and digit == digits[index]
                    
                    res += go(index + 1, nxtTight, ssum + digit)
                    res %= M
                
                return res
            
            return go(0, True, 0)
        
        a = helper(num2)
        b = helper(num1)
        
        return (a - b) % M
```

