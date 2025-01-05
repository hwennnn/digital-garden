---
title: 258. Add Digits
draft: false
tags: 
  - leetcode-easy
  - math
  - simulation
  - number-theory
date: 2023-04-26
---

[Problem Link](https://leetcode.com/problems/add-digits/)

## Description

---
<p>Given an integer <code>num</code>, repeatedly add all its digits until the result has only one digit, and return it.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> num = 38
<strong>Output:</strong> 2
<strong>Explanation:</strong> The process is
38 --&gt; 3 + 8 --&gt; 11
11 --&gt; 1 + 1 --&gt; 2 
Since 2 has only one digit, return it.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> num = 0
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= num &lt;= 2<sup>31</sup> - 1</code></li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong> Could you do it without any loop/recursion in <code>O(1)</code> runtime?</p>


## Solution

---
### Python3
``` py title='add-digits'
class Solution:
    def addDigits(self, num: int) -> int:
        while num >= 10:
            curr = 0

            while num > 0:
                curr += num % 10
                num //= 10
            
            num = curr
        
        return num
```
