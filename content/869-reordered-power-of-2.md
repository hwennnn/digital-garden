---
title: 869. Reordered Power of 2
draft: false
tags: 
  - leetcode-medium
  - hash-table
  - math
  - sorting
  - counting
  - enumeration
  - weekly-contest-93
  - contest-question
date: 2022-08-26
---

[Problem Link](https://leetcode.com/problems/reordered-power-of-2/)

## Description

---
<p>You are given an integer <code>n</code>. We reorder the digits in any order (including the original order) such that the leading digit is not zero.</p>

<p>Return <code>true</code> <em>if and only if we can do this so that the resulting number is a power of two</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 1
<strong>Output:</strong> true
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 10
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='reordered-power-of-2'
class Solution:
    def reorderedPowerOf2(self, N: int) -> bool:
        c = collections.Counter(str(N))
        
        return any([c == collections.Counter(str(1 << n)) for n in range(30)])
```

