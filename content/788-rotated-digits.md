---
title: 788. Rotated Digits
draft: false
tags: 
  - leetcode-medium
  - math
  - dynamic-programming
  - weekly-contest-73
  - contest-question
date: 2022-09-06
---

[Problem Link](https://leetcode.com/problems/rotated-digits/)

## Description

---
<p>An integer <code>x</code> is a <strong>good</strong> if after rotating each digit individually by 180 degrees, we get a valid number that is different from <code>x</code>. Each digit must be rotated - we cannot choose to leave it alone.</p>

<p>A number is valid if each digit remains a digit after rotation. For example:</p>

<ul>
	<li><code>0</code>, <code>1</code>, and <code>8</code> rotate to themselves,</li>
	<li><code>2</code> and <code>5</code> rotate to each other (in this case they are rotated in a different direction, in other words, <code>2</code> or <code>5</code> gets mirrored),</li>
	<li><code>6</code> and <code>9</code> rotate to each other, and</li>
	<li>the rest of the numbers do not rotate to any other number and become invalid.</li>
</ul>

<p>Given an integer <code>n</code>, return <em>the number of <strong>good</strong> integers in the range </em><code>[1, n]</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 10
<strong>Output:</strong> 4
<strong>Explanation:</strong> There are four good numbers in the range [1, 10] : 2, 5, 6, 9.
Note that 1 and 10 are not good numbers, since they remain unchanged after rotating.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 1
<strong>Output:</strong> 0
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> n = 2
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 10<sup>4</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='rotated-digits'
class Solution:
    def rotatedDigits(self, n: int) -> int:
        digits = []
        
        while n > 0:
            digits.append(n % 10)
            n //= 10
        
        digits.reverse()
        
        N = len(digits)
        
        rotations = {0:0, 1:1, 8:8, 2:5, 5:2, 6:9, 9:6}
        
        @cache
        def dp(pos, tight, rotated):
            if pos == N:
                return 1 if rotated else 0
            
            limit = digits[pos] if tight else 9
            res = 0
            
            for digit in range(0, limit + 1):
                if digit not in rotations: continue
                
                nextTight = tight and digit == digits[pos]
                nextRotated = rotated or rotations[digit] != digit
                
                res += dp(pos + 1, nextTight, nextRotated)    
            
            return res
        
        return dp(0, True, False)
```

