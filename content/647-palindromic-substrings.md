---
title: 647. Palindromic Substrings
draft: false
tags: 
  - leetcode-medium
  - two-pointers
  - string
  - dynamic-programming
  - weekly-contest-42
  - contest-question
date: 2025-06-06
---

[Problem Link](https://leetcode.com/problems/palindromic-substrings/)

## Description

---
<p>Given a string <code>s</code>, return <em>the number of <strong>palindromic substrings</strong> in it</em>.</p>

<p>A string is a <strong>palindrome</strong> when it reads the same backward as forward.</p>

<p>A <strong>substring</strong> is a contiguous sequence of characters within the string.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;abc&quot;
<strong>Output:</strong> 3
<strong>Explanation:</strong> Three palindromic strings: &quot;a&quot;, &quot;b&quot;, &quot;c&quot;.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;aaa&quot;
<strong>Output:</strong> 6
<strong>Explanation:</strong> Six palindromic strings: &quot;a&quot;, &quot;a&quot;, &quot;a&quot;, &quot;aa&quot;, &quot;aa&quot;, &quot;aaa&quot;.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 1000</code></li>
	<li><code>s</code> consists of lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='palindromic-substrings'
class Solution:
    def countSubstrings(self, s: str) -> int:
        N = len(s)

        @cache
        def isPal(i, j):
            if i == j: return True
            if i > j: return True

            return s[i] == s[j] and isPal(i + 1, j - 1)
        
        res = 0

        for i in range(N):
            for j in range(i, N):
                if isPal(i, j):
                    res += 1
        
        return res
```

