---
title: 777. Swap Adjacent in LR String
draft: false
tags: 
  - two-pointers
  - string
date: 2022-07-11
---

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-blue.svg)

## Description

---
<p>In a string composed of <code>&#39;L&#39;</code>, <code>&#39;R&#39;</code>, and <code>&#39;X&#39;</code> characters, like <code>&quot;RXXLRXRXL&quot;</code>, a move consists of either replacing one occurrence of <code>&quot;XL&quot;</code> with <code>&quot;LX&quot;</code>, or replacing one occurrence of <code>&quot;RX&quot;</code> with <code>&quot;XR&quot;</code>. Given the starting string <code>start</code> and the ending string <code>result</code>, return <code>True</code> if and only if there exists a sequence of moves to transform <code>start</code> to <code>result</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> start = &quot;RXXLRXRXL&quot;, result = &quot;XRLXXRRLX&quot;
<strong>Output:</strong> true
<strong>Explanation:</strong> We can transform start to result following these steps:
RXXLRXRXL -&gt;
XRXLRXRXL -&gt;
XRLXRXRXL -&gt;
XRLXXRRXL -&gt;
XRLXXRRLX
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> start = &quot;X&quot;, result = &quot;L&quot;
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= start.length&nbsp;&lt;= 10<sup>4</sup></code></li>
	<li><code>start.length == result.length</code></li>
	<li>Both <code>start</code> and <code>result</code> will only consist of characters in <code>&#39;L&#39;</code>, <code>&#39;R&#39;</code>, and&nbsp;<code>&#39;X&#39;</code>.</li>
</ul>


## Solution

---
### Python
``` py title='swap-adjacent-in-lr-string'
class Solution:
    def canTransform(self, start: str, end: str) -> bool:
        if start == end: return True
        
        A = [(i, x) for i, x in enumerate(start) if x != "X"]
        B = [(i, x) for i, x in enumerate(end) if x != "X"]
        
        if len(A) != len(B): return False
        
        for (i, a), (j, b) in zip(A, B):
            if a != b: return False
            
            if a == "L":
                if i < j: return False
            else:
                if i > j: return False
        
        return True

```

