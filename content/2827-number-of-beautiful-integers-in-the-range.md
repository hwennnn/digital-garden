---
title: 2827. Number of Beautiful Integers in the Range
draft: false
tags: 
  - leetcode-hard
  - math
  - dynamic-programming
  - biweekly-contest-111
  - contest-question
date: 2023-08-21
---

[Problem Link](https://leetcode.com/problems/number-of-beautiful-integers-in-the-range/)

## Description

---
<p>You are given positive integers <code>low</code>, <code>high</code>, and <code>k</code>.</p>

<p>A number is <strong>beautiful</strong> if it meets both of the following conditions:</p>

<ul>
	<li>The count of even digits in the number is equal to the count of odd digits.</li>
	<li>The number is divisible by <code>k</code>.</li>
</ul>

<p>Return <em>the number of beautiful integers in the range</em> <code>[low, high]</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> low = 10, high = 20, k = 3
<strong>Output:</strong> 2
<strong>Explanation:</strong> There are 2 beautiful integers in the given range: [12,18]. 
- 12 is beautiful because it contains 1 odd digit and 1 even digit, and is divisible by k = 3.
- 18 is beautiful because it contains 1 odd digit and 1 even digit, and is divisible by k = 3.
Additionally we can see that:
- 16 is not beautiful because it is not divisible by k = 3.
- 15 is not beautiful because it does not contain equal counts even and odd digits.
It can be shown that there are only 2 beautiful integers in the given range.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> low = 1, high = 10, k = 1
<strong>Output:</strong> 1
<strong>Explanation:</strong> There is 1 beautiful integer in the given range: [10].
- 10 is beautiful because it contains 1 odd digit and 1 even digit, and is divisible by k = 1.
It can be shown that there is only 1 beautiful integer in the given range.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> low = 5, high = 5, k = 2
<strong>Output:</strong> 0
<strong>Explanation:</strong> There are 0 beautiful integers in the given range.
- 5 is not beautiful because it is not divisible by k = 2 and it does not contain equal even and odd digits.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt; low &lt;= high &lt;= 10<sup>9</sup></code></li>
	<li><code>0 &lt; k &lt;= 20</code></li>
</ul>


## Solution

---
### Python3
``` py title='number-of-beautiful-integers-in-the-range'
class Solution:
    def numberOfBeautifulIntegers(self, low: int, high: int, k: int) -> int:
        num1 = list(map(int, str(low - 1)))
        num2 = list(map(int, str(high)))
        
        def helper(digits):
            N = len(digits)
            
            @cache
            def dp(index, tight, odd, even, rem, leading):
                if index == N:
                    return int(odd == even and rem == 0)
                
                limit = digits[index] if tight else 9
                res = 0
                
                for digit in range(limit + 1):
                    nxtOdd = odd + int(digit % 2 == 1)
                    nxtEven = even + int(digit % 2 == 0)
                    nxtRem = (rem * 10 + digit) % k
                    nxtTight = tight and digits[index] == digit
                    
                    if digit == 0 and leading:
                        res += dp(index + 1, nxtTight, odd, even, rem, True)
                    else:
                        res += dp(index + 1, nxtTight, nxtOdd, nxtEven, nxtRem, False)
                
                return res
            
            return dp(0, True, 0, 0, 0, True)
        
        a = helper(num2)
        b = helper(num1)
        
        return a - b
        
```

