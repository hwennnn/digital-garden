---
title: 2414. Length of the Longest Alphabetical Continuous Substring
draft: false
tags: 
  - leetcode-medium
  - string
  - weekly-contest-311
  - contest-question
date: 2022-09-18
---

[Problem Link](https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/)

## Description

---
<p>An <strong>alphabetical continuous string</strong> is a string consisting of consecutive letters in the alphabet. In other words, it is any substring of the string <code>&quot;abcdefghijklmnopqrstuvwxyz&quot;</code>.</p>

<ul>
	<li>For example, <code>&quot;abc&quot;</code> is an alphabetical continuous string, while <code>&quot;acb&quot;</code> and <code>&quot;za&quot;</code> are not.</li>
</ul>

<p>Given a string <code>s</code> consisting of lowercase letters only, return the <em>length of the <strong>longest</strong> alphabetical continuous substring.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;abacaba&quot;
<strong>Output:</strong> 2
<strong>Explanation:</strong> There are 4 distinct continuous substrings: &quot;a&quot;, &quot;b&quot;, &quot;c&quot; and &quot;ab&quot;.
&quot;ab&quot; is the longest continuous substring.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;abcde&quot;
<strong>Output:</strong> 5
<strong>Explanation:</strong> &quot;abcde&quot; is the longest continuous substring.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>s</code> consists of only English lowercase letters.</li>
</ul>


## Solution

---
### Python3
``` py title='length-of-the-longest-alphabetical-continuous-substring'
class Solution:
    def longestContinuousSubstring(self, s: str) -> int:
        N = len(s)
        res = length = 1
        
        def f(x):
            return ord(x) - ord("a")
        
        prev = f(s[0])
        
        for i in range(1, N):
            curr = f(s[i])
            
            if prev + 1 == curr:
                length += 1
                res = max(res, length)
            else:
                length = 1
            
            prev = curr
        
        return res
```

