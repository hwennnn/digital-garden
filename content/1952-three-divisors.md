---
title: 1952. Three Divisors
draft: false
tags: 
  - leetcode-easy
  - math
  - enumeration
  - number-theory
  - weekly-contest-252
  - contest-question
date: 2021-08-01
---

[Problem Link](https://leetcode.com/problems/three-divisors/)

## Description

---
<p>Given an integer <code>n</code>, return <code>true</code><em> if </em><code>n</code><em> has <strong>exactly three positive divisors</strong>. Otherwise, return </em><code>false</code>.</p>

<p>An integer <code>m</code> is a <strong>divisor</strong> of <code>n</code> if there exists an integer <code>k</code> such that <code>n = k * m</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 2
<strong>Output:</strong> false
<strong>Explantion:</strong> 2 has only two divisors: 1 and 2.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 4
<strong>Output:</strong> true
<strong>Explantion:</strong> 4 has three divisors: 1, 2, and 4.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 10<sup>4</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='three-divisors'
class Solution:
    def isThree(self, n: int) -> bool:
        res = 0
        
        for k in range(1, n + 1):
            if n % k == 0: res += 1
            
            if res > 3: return False
        
        return res == 3
```

