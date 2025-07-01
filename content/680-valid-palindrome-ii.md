---
title: 680. Valid Palindrome II
draft: false
tags: 
  - leetcode-easy
  - two-pointers
  - string
  - greedy
  - weekly-contest-50
  - contest-question
date: 2022-04-02
---

[Problem Link](https://leetcode.com/problems/valid-palindrome-ii/)

## Description

---
<p>Given a string <code>s</code>, return <code>true</code> <em>if the </em><code>s</code><em> can be palindrome after deleting <strong>at most one</strong> character from it</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;aba&quot;
<strong>Output:</strong> true
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;abca&quot;
<strong>Output:</strong> true
<strong>Explanation:</strong> You could delete the character &#39;c&#39;.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;abc&quot;
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>s</code> consists of lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='valid-palindrome-ii'
class Solution:
    def validPalindrome(self, s: str) -> bool:
        valid = True
        n = len(s)
        i, j = 0, n - 1
        
        @cache
        def isPalindrome(i, j):
            nonlocal valid
            
            while i < j:
                if s[i] == s[j]:
                    i += 1
                    j -= 1
                else:
                    if valid:
                        valid = False
                        return isPalindrome(i + 1, j) or isPalindrome(i, j - 1)
                    else:
                        return False
        
        
            return i >= j
        
        return isPalindrome(i, j)
```

