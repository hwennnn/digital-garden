---
title: 409. Longest Palindrome
draft: false
tags: 
  - leetcode-easy
  - hash-table
  - string
  - greedy
  - weekly-contest-7
  - contest-question
date: 2024-06-04
---

[Problem Link](https://leetcode.com/problems/longest-palindrome/)

## Description

---
<p>Given a string <code>s</code> which consists of lowercase or uppercase letters, return the length of the <strong>longest <span data-keyword="palindrome-string">palindrome</span></strong>&nbsp;that can be built with those letters.</p>

<p>Letters are <strong>case sensitive</strong>, for example, <code>&quot;Aa&quot;</code> is not considered a palindrome.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;abccccdd&quot;
<strong>Output:</strong> 7
<strong>Explanation:</strong> One longest palindrome that can be built is &quot;dccaccd&quot;, whose length is 7.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;a&quot;
<strong>Output:</strong> 1
<strong>Explanation:</strong> The longest palindrome that can be built is &quot;a&quot;, whose length is 1.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 2000</code></li>
	<li><code>s</code> consists of lowercase <strong>and/or</strong> uppercase English&nbsp;letters only.</li>
</ul>


## Solution

---
### Python3
``` py title='longest-palindrome'
class Solution:
    def longestPalindrome(self, s: str) -> int:
        hasOdd = False
        counter = Counter(s)
        res = 0

        for v in counter.values():
            if v % 2 == 0:
                res += v
            else:
                res += v - 1
                hasOdd = True
        
        return res + int(hasOdd)
```

