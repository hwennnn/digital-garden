---
title: 402. Remove K Digits
draft: false
tags: 
  - leetcode-medium
  - string
  - stack
  - greedy
  - monotonic-stack
  - weekly-contest-5
  - contest-question
date: 2024-04-11
---

[Problem Link](https://leetcode.com/problems/remove-k-digits/)

## Description

---
<p>Given string num representing a non-negative integer <code>num</code>, and an integer <code>k</code>, return <em>the smallest possible integer after removing</em> <code>k</code> <em>digits from</em> <code>num</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> num = &quot;1432219&quot;, k = 3
<strong>Output:</strong> &quot;1219&quot;
<strong>Explanation:</strong> Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> num = &quot;10200&quot;, k = 1
<strong>Output:</strong> &quot;200&quot;
<strong>Explanation:</strong> Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> num = &quot;10&quot;, k = 2
<strong>Output:</strong> &quot;0&quot;
<strong>Explanation:</strong> Remove all the digits from the number and it is left with nothing which is 0.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= k &lt;= num.length &lt;= 10<sup>5</sup></code></li>
	<li><code>num</code> consists of only digits.</li>
	<li><code>num</code> does not have any leading zeros except for the zero itself.</li>
</ul>


## Solution

---
### Python3
``` py title='remove-k-digits'
class Solution:
    def removeKdigits(self, num: str, k: int) -> str:
        N = len(num)
        stack = []

        for x in num:
            while k > 0 and stack and x < stack[-1]:
                stack.pop()
                k -= 1
            
            stack.append(x)
        
        while k > 0 and stack:
            stack.pop()
            k -= 1
        
        for i in range(len(stack)):
            if stack[i] == '0': continue

            return "".join(stack[i:])
        
        return "0"
```

