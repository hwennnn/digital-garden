---
title: 2801. Count Stepping Numbers in Range
draft: false
tags: 
  - leetcode-hard
  - string
  - dynamic-programming
  - weekly-contest-356
  - contest-question
date: 2023-08-01
---

[Problem Link](https://leetcode.com/problems/count-stepping-numbers-in-range/)

## Description

---
<p>Given two positive integers <code>low</code> and <code>high</code> represented as strings, find the count of <strong>stepping numbers</strong> in the inclusive range <code>[low, high]</code>.</p>

<p>A <strong>stepping number</strong> is an integer such that all of its adjacent digits have an absolute difference of <strong>exactly</strong> <code>1</code>.</p>

<p>Return <em>an integer denoting the count of stepping numbers in the inclusive range</em> <code>[low, high]</code><em>. </em></p>

<p>Since the answer may be very large, return it <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>

<p><strong>Note:</strong> A stepping number should not have a leading zero.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> low = &quot;1&quot;, high = &quot;11&quot;
<strong>Output:</strong> 10
<strong>Explanation: </strong>The stepping numbers in the range [1,11] are 1, 2, 3, 4, 5, 6, 7, 8, 9 and 10. There are a total of 10 stepping numbers in the range. Hence, the output is 10.</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> low = &quot;90&quot;, high = &quot;101&quot;
<strong>Output:</strong> 2
<strong>Explanation: </strong>The stepping numbers in the range [90,101] are 98 and 101. There are a total of 2 stepping numbers in the range. Hence, the output is 2. </pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= int(low) &lt;= int(high) &lt; 10<sup>100</sup></code></li>
	<li><code>1 &lt;= low.length, high.length &lt;= 100</code></li>
	<li><code>low</code> and <code>high</code> consist of only digits.</li>
	<li><code>low</code> and <code>high</code> don&#39;t have any leading zeros.</li>
</ul>


## Solution

---
### Python3
``` py title='count-stepping-numbers-in-range'
class Solution:
    def countSteppingNumbers(self, low: str, high: str) -> int:
        M = 10 ** 9 + 7
        
        num1 = list(map(int, str(int(low) - 1)))
        num2 = list(map(int, high))
        
        def helper(digits):
            N = len(digits)
            
            @cache
            def dp(index, tight, last):
                if index == N: return 1
                
                limit = digits[index] if tight else 9
                res = 0
                
                for digit in range(limit + 1):
                    nxtTight = tight and digits[index] == digit
                    
                    if last == -1:
                        nxtLast = -1 if digit == 0 else digit
                        res += dp(index + 1, nxtTight, nxtLast)
                        res %= M
                    elif abs(digit - last) == 1:
                        res += dp(index + 1, nxtTight, digit)
                        res %= M
                
                return res
            
            return dp(0, True, -1)
        
        a = helper(num2)
        b = helper(num1)

        return (a - b) % M
        
```

