---
title: 2427. Number of Common Factors
draft: false
tags: 
  - leetcode-easy
  - math
  - enumeration
  - number-theory
  - weekly-contest-313
  - contest-question
date: 2022-10-02
---

[Problem Link](https://leetcode.com/problems/number-of-common-factors/)

## Description

---
<p>Given two positive integers <code>a</code> and <code>b</code>, return <em>the number of <strong>common</strong> factors of </em><code>a</code><em> and </em><code>b</code>.</p>

<p>An integer <code>x</code> is a <strong>common factor</strong> of <code>a</code> and <code>b</code> if <code>x</code> divides both <code>a</code> and <code>b</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> a = 12, b = 6
<strong>Output:</strong> 4
<strong>Explanation:</strong> The common factors of 12 and 6 are 1, 2, 3, 6.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> a = 25, b = 30
<strong>Output:</strong> 2
<strong>Explanation:</strong> The common factors of 25 and 30 are 1, 5.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= a, b &lt;= 1000</code></li>
</ul>


## Solution

---
### Python3
``` py title='number-of-common-factors'
class Solution:
    def commonFactors(self, a: int, b: int) -> int:
        res = 0
        
        for x in range(1, min(a, b) + 1):
            if a % x == 0 and b % x == 0:
                res += 1
        
        return res
```

