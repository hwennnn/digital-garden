---
title: 1790. Check if One String Swap Can Make Strings Equal
draft: false
tags: 
  - leetcode-easy
  - hash-table
  - string
  - counting
date: 2025-02-05
---

[Problem Link](https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/)

## Description

---
<p>You are given two strings <code>s1</code> and <code>s2</code> of equal length. A <strong>string swap</strong> is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.</p>

<p>Return <code>true</code> <em>if it is possible to make both strings equal by performing <strong>at most one string swap </strong>on <strong>exactly one</strong> of the strings. </em>Otherwise, return <code>false</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s1 = &quot;bank&quot;, s2 = &quot;kanb&quot;
<strong>Output:</strong> true
<strong>Explanation:</strong> For example, swap the first character with the last character of s2 to make &quot;bank&quot;.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s1 = &quot;attack&quot;, s2 = &quot;defend&quot;
<strong>Output:</strong> false
<strong>Explanation:</strong> It is impossible to make them equal with one string swap.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s1 = &quot;kelb&quot;, s2 = &quot;kelb&quot;
<strong>Output:</strong> true
<strong>Explanation:</strong> The two strings are already equal, so no string swap operation is required.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s1.length, s2.length &lt;= 100</code></li>
	<li><code>s1.length == s2.length</code></li>
	<li><code>s1</code> and <code>s2</code> consist of only lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='check-if-one-string-swap-can-make-strings-equal'
class Solution:
    def areAlmostEqual(self, s1: str, s2: str) -> bool:
        swapIndex = None
        used = False
        N = len(s1)

        for i in range(N):
            if s1[i] != s2[i]:
                if used: return False

                if swapIndex is None:
                    swapIndex = i
                else:
                    if s1[i] == s2[swapIndex] and s1[swapIndex] == s2[i]:
                        used = True
                    else:
                        return False
        
        if swapIndex is not None and not used:
            return False
        
        return True
```

