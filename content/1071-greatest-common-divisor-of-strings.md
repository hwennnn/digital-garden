---
title: 1071. Greatest Common Divisor of Strings
draft: false
tags: 
  - leetcode-easy
  - math
  - string
date: 2023-02-01
---

[Problem Link](https://leetcode.com/problems/greatest-common-divisor-of-strings/)

## Description

---
<p>For two strings <code>s</code> and <code>t</code>, we say &quot;<code>t</code> divides <code>s</code>&quot; if and only if <code>s = t + t + t + ... + t + t</code> (i.e., <code>t</code> is concatenated with itself one or more times).</p>

<p>Given two strings <code>str1</code> and <code>str2</code>, return <em>the largest string </em><code>x</code><em> such that </em><code>x</code><em> divides both </em><code>str1</code><em> and </em><code>str2</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> str1 = &quot;ABCABC&quot;, str2 = &quot;ABC&quot;
<strong>Output:</strong> &quot;ABC&quot;
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> str1 = &quot;ABABAB&quot;, str2 = &quot;ABAB&quot;
<strong>Output:</strong> &quot;AB&quot;
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> str1 = &quot;LEET&quot;, str2 = &quot;CODE&quot;
<strong>Output:</strong> &quot;&quot;
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= str1.length, str2.length &lt;= 1000</code></li>
	<li><code>str1</code> and <code>str2</code> consist of English uppercase letters.</li>
</ul>


## Solution

---
### Python3
``` py title='greatest-common-divisor-of-strings'
class Solution:
    def gcdOfStrings(self, A: str, B: str) -> str:
        if len(A) == len(B):
            return A if A == B else ""
        
        if len(A) < len(B):
            A, B = B, A
        
        if A[:len(B)] == B:
            return self.gcdOfStrings(A[len(B):], B)
        else:
            return ""
```

