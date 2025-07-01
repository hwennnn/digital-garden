---
title: 2745. Construct the Longest New String
draft: false
tags: 
  - leetcode-medium
  - math
  - dynamic-programming
  - greedy
  - brainteaser
  - biweekly-contest-107
  - contest-question
date: 2023-08-01
---

[Problem Link](https://leetcode.com/problems/construct-the-longest-new-string/)

## Description

---
<p>You are given three integers <code>x</code>, <code>y</code>, and <code>z</code>.</p>

<p>You have <code>x</code> strings equal to <code>&quot;AA&quot;</code>, <code>y</code> strings equal to <code>&quot;BB&quot;</code>, and <code>z</code> strings equal to <code>&quot;AB&quot;</code>. You want to choose some (possibly all or none) of these strings and concatenate them in some order to form a new string. This new string must not contain <code>&quot;AAA&quot;</code> or <code>&quot;BBB&quot;</code> as a substring.</p>

<p>Return <em>the maximum possible length of the new string</em>.</p>

<p>A <b>substring</b> is a contiguous <strong>non-empty</strong> sequence of characters within a string.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> x = 2, y = 5, z = 1
<strong>Output:</strong> 12
<strong>Explanation: </strong>We can concatenate the strings &quot;BB&quot;, &quot;AA&quot;, &quot;BB&quot;, &quot;AA&quot;, &quot;BB&quot;, and &quot;AB&quot; in that order. Then, our new string is &quot;BBAABBAABBAB&quot;. 
That string has length 12, and we can show that it is impossible to construct a string of longer length.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> x = 3, y = 2, z = 2
<strong>Output:</strong> 14
<strong>Explanation:</strong> We can concatenate the strings &quot;AB&quot;, &quot;AB&quot;, &quot;AA&quot;, &quot;BB&quot;, &quot;AA&quot;, &quot;BB&quot;, and &quot;AA&quot; in that order. Then, our new string is &quot;ABABAABBAABBAA&quot;. 
That string has length 14, and we can show that it is impossible to construct a string of longer length.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= x, y, z &lt;= 50</code></li>
</ul>


## Solution

---
### Python3
``` py title='construct-the-longest-new-string'
class Solution:
    def longestString(self, x: int, y: int, z: int) -> int:
        
        @cache
        def go(a, b, c, isPrevA):
            if a == 0 and b == 0 and c == 0: return 0
            
            res = 0
            
            if not isPrevA:
                if a - 1 >= 0:
                    res = max(res, 2 + go(a - 1, b, c, True))
                
                if c - 1 >= 0:
                    res = max(res, 2 + go(a, b, c - 1, False))
            else:
                if b - 1 >= 0:
                    res = max(res, 2 + go(a, b - 1, c, False))
            
            return res
        
        return max(go(x, y, z, True), go(x, y, z, False))
            
```

