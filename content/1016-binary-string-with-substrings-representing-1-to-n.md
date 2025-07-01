---
title: 1016. Binary String With Substrings Representing 1 To N
draft: false
tags: 
  - leetcode-medium
  - hash-table
  - string
  - bit-manipulation
  - sliding-window
  - weekly-contest-129
  - contest-question
date: 2022-01-15
---

[Problem Link](https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/)

## Description

---
<p>Given a binary string <code>s</code> and a positive integer <code>n</code>, return <code>true</code><em> if the binary representation of all the integers in the range </em><code>[1, n]</code><em> are <strong>substrings</strong> of </em><code>s</code><em>, or </em><code>false</code><em> otherwise</em>.</p>

<p>A <strong>substring</strong> is a contiguous sequence of characters within a string.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> s = "0110", n = 3
<strong>Output:</strong> true
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> s = "0110", n = 4
<strong>Output:</strong> false
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 1000</code></li>
	<li><code>s[i]</code> is either <code>&#39;0&#39;</code> or <code>&#39;1&#39;</code>.</li>
	<li><code>1 &lt;= n &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='binary-string-with-substrings-representing-1-to-n'
class Solution:
    def queryString(self, s: str, n: int) -> bool:
        
        for i in range(n // 2 + 1, n + 1):
            b = bin(i)[2:]
            if b not in s: return False
        
        return True
```

