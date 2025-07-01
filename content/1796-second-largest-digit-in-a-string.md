---
title: 1796. Second Largest Digit in a String
draft: false
tags: 
  - leetcode-easy
  - hash-table
  - string
  - biweekly-contest-48
  - contest-question
date: 2021-04-03
---

[Problem Link](https://leetcode.com/problems/second-largest-digit-in-a-string/)

## Description

---
<p>Given an alphanumeric string <code>s</code>, return <em>the <strong>second largest</strong> numerical digit that appears in </em><code>s</code><em>, or </em><code>-1</code><em> if it does not exist</em>.</p>

<p>An <strong>alphanumeric</strong><strong> </strong>string is a string consisting of lowercase English letters and digits.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;dfa12321afd&quot;
<strong>Output:</strong> 2
<strong>Explanation:</strong> The digits that appear in s are [1, 2, 3]. The second largest digit is 2.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;abc1111&quot;
<strong>Output:</strong> -1
<strong>Explanation:</strong> The digits that appear in s are [1]. There is no second largest digit. 
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 500</code></li>
	<li><code>s</code> consists of only lowercase English letters and digits.</li>
</ul>


## Solution

---
### Python3
``` py title='second-largest-digit-in-a-string'
class Solution:
    def secondHighest(self, s: str) -> int:
        res = set(list(c for c in s if c.isdigit()))
    
        return sorted(list(res))[-2] if len(res) > 1 else -1
```

