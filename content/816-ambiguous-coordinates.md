---
title: 816. Ambiguous Coordinates
draft: false
tags: 
  - leetcode-medium
  - string
  - backtracking
  - enumeration
  - weekly-contest-80
  - contest-question
date: 2021-05-13
---

[Problem Link](https://leetcode.com/problems/ambiguous-coordinates/)

## Description

---
<p>We had some 2-dimensional coordinates, like <code>&quot;(1, 3)&quot;</code> or <code>&quot;(2, 0.5)&quot;</code>. Then, we removed all commas, decimal points, and spaces and ended up with the string s.</p>

<ul>
	<li>For example, <code>&quot;(1, 3)&quot;</code> becomes <code>s = &quot;(13)&quot;</code> and <code>&quot;(2, 0.5)&quot;</code> becomes <code>s = &quot;(205)&quot;</code>.</li>
</ul>

<p>Return <em>a list of strings representing all possibilities for what our original coordinates could have been</em>.</p>

<p>Our original representation never had extraneous zeroes, so we never started with numbers like <code>&quot;00&quot;</code>, <code>&quot;0.0&quot;</code>, <code>&quot;0.00&quot;</code>, <code>&quot;1.0&quot;</code>, <code>&quot;001&quot;</code>, <code>&quot;00.01&quot;</code>, or any other number that can be represented with fewer digits. Also, a decimal point within a number never occurs without at least one digit occurring before it, so we never started with numbers like <code>&quot;.1&quot;</code>.</p>

<p>The final answer list can be returned in any order. All coordinates in the final answer have exactly one space between them (occurring after the comma.)</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;(123)&quot;
<strong>Output:</strong> [&quot;(1, 2.3)&quot;,&quot;(1, 23)&quot;,&quot;(1.2, 3)&quot;,&quot;(12, 3)&quot;]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;(0123)&quot;
<strong>Output:</strong> [&quot;(0, 1.23)&quot;,&quot;(0, 12.3)&quot;,&quot;(0, 123)&quot;,&quot;(0.1, 2.3)&quot;,&quot;(0.1, 23)&quot;,&quot;(0.12, 3)&quot;]
<strong>Explanation:</strong> 0.0, 00, 0001 or 00.01 are not allowed.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;(00011)&quot;
<strong>Output:</strong> [&quot;(0, 0.011)&quot;,&quot;(0.001, 1)&quot;]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>4 &lt;= s.length &lt;= 12</code></li>
	<li><code>s[0] == &#39;(&#39;</code> and <code>s[s.length - 1] == &#39;)&#39;</code>.</li>
	<li>The rest of <code>s</code> are digits.</li>
</ul>


## Solution

---
### Python3
``` py title='ambiguous-coordinates'
class Solution:
    def ambiguousCoordinates(self, s: str) -> List[str]:
        
        def generate(s):
            res = []
            
            if s == "0" or s[0] != "0": res.append(s)
            
            for i in range(1, len(s)):
                if (s[:i] == "0" or s[:i][0] != "0") and s[i:][-1] != "0":
                    res.append(s[:i] + "." + s[i:])
            
            return res
        
        res = []
        for i in range(2, len(s) - 1):
            left, right = generate(s[1:i]), generate(s[i:-1])

            for l, r in product(left, right):
                res.append("(" + l + ", " + r + ")")
        
        return res
```

