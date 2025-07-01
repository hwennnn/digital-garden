---
title: 984. String Without AAA or BBB
draft: false
tags: 
  - leetcode-medium
  - string
  - greedy
  - weekly-contest-121
  - contest-question
date: 2022-02-21
---

[Problem Link](https://leetcode.com/problems/string-without-aaa-or-bbb/)

## Description

---
<p>Given two integers <code>a</code> and <code>b</code>, return <strong>any</strong> string <code>s</code> such that:</p>

<ul>
	<li><code>s</code> has length <code>a + b</code> and contains exactly <code>a</code> <code>&#39;a&#39;</code> letters, and exactly <code>b</code> <code>&#39;b&#39;</code> letters,</li>
	<li>The substring <code>&#39;aaa&#39;</code> does not occur in <code>s</code>, and</li>
	<li>The substring <code>&#39;bbb&#39;</code> does not occur in <code>s</code>.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> a = 1, b = 2
<strong>Output:</strong> &quot;abb&quot;
<strong>Explanation:</strong> &quot;abb&quot;, &quot;bab&quot; and &quot;bba&quot; are all correct answers.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> a = 4, b = 1
<strong>Output:</strong> &quot;aabaa&quot;
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= a, b &lt;= 100</code></li>
	<li>It is guaranteed such an <code>s</code> exists for the given <code>a</code> and <code>b</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='string-without-aaa-or-bbb'
class Solution:
    def strWithout3a3b(self, a: int, b: int) -> str:
        res = ""
        
        
        while a > 0 and b > 0:
            if a > b:
                res += "a" * min(a, 2)
                res += "b"
                a -= min(a, 2)
                b -= 1
            elif a == b:
                if not res or res[-1] == "a":
                    res += "b"
                    b -= 1
                else:
                    res += "a"
                    a -= 1
            else:
                res += "b" * min(b, 2)
                res += "a"
                b -= min(b, 2)
                a -= 1
        
        if a > 0:
            res += "a" * a
        
        if b > 0:
            res += "b" * b
        
        return res
```

