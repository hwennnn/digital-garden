---
title: 906. Super Palindromes
draft: false
tags: 
  - leetcode-hard
  - math
  - string
  - enumeration
  - weekly-contest-102
  - contest-question
date: 2021-05-08
---

[Problem Link](https://leetcode.com/problems/super-palindromes/)

## Description

---
<p>Let&#39;s say a positive integer is a <strong>super-palindrome</strong> if it is a palindrome, and it is also the square of a palindrome.</p>

<p>Given two positive integers <code>left</code> and <code>right</code> represented as strings, return <em>the number of <strong>super-palindromes</strong> integers in the inclusive range</em> <code>[left, right]</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> left = &quot;4&quot;, right = &quot;1000&quot;
<strong>Output:</strong> 4
<strong>Explanation</strong>: 4, 9, 121, and 484 are superpalindromes.
Note that 676 is not a superpalindrome: 26 * 26 = 676, but 26 is not a palindrome.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> left = &quot;1&quot;, right = &quot;2&quot;
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= left.length, right.length &lt;= 18</code></li>
	<li><code>left</code> and <code>right</code> consist of only digits.</li>
	<li><code>left</code> and <code>right</code> cannot have leading zeros.</li>
	<li><code>left</code> and <code>right</code> represent integers in the range <code>[1, 10<sup>18</sup> - 1]</code>.</li>
	<li><code>left</code> is less than or equal to <code>right</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='super-palindromes'
class Solution:
    def superpalindromesInRange(self, left: str, right: str) -> int:
        left = int(left)
        right = int(right)
        
        res = [1,2,3,4,5,6,7,8,9]
        
        for i in range(1, 10000):
            s = int(str(i) + str(i)[::-1])
            res.append(s)
            
            for j in range(10):
                res.append(int(str(i) + str(j) + str(i)[::-1]))

        def isPalindrome(s):
            return s == s[::-1]
        
        count = 0
        
        for val in res:
            s = val * val
            
            if left <= s <= right and isPalindrome(str(s)):
                count += 1
        
        return count
```

