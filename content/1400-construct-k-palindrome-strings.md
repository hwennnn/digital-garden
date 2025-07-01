---
title: 1400. Construct K Palindrome Strings
draft: false
tags: 
  - leetcode-medium
  - hash-table
  - string
  - greedy
  - counting
  - biweekly-contest-23
  - contest-question
date: 2025-01-11
---

[Problem Link](https://leetcode.com/problems/construct-k-palindrome-strings/)

## Description

---
<p>Given a string <code>s</code> and an integer <code>k</code>, return <code>true</code> if you can use all the characters in <code>s</code> to construct <strong>non-empty</strong> <code>k</code> <span data-keyword="palindrome-string">palindrome strings</span> or <code>false</code> otherwise.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;annabelle&quot;, k = 2
<strong>Output:</strong> true
<strong>Explanation:</strong> You can construct two palindromes using all characters in s.
Some possible constructions &quot;anna&quot; + &quot;elble&quot;, &quot;anbna&quot; + &quot;elle&quot;, &quot;anellena&quot; + &quot;b&quot;
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;leetcode&quot;, k = 3
<strong>Output:</strong> false
<strong>Explanation:</strong> It is impossible to construct 3 palindromes using all the characters of s.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;true&quot;, k = 4
<strong>Output:</strong> true
<strong>Explanation:</strong> The only possible solution is to put each character in a separate string.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>s</code> consists of lowercase English letters.</li>
	<li><code>1 &lt;= k &lt;= 10<sup>5</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='construct-k-palindrome-strings'
class Solution:
    def canConstruct(self, s: str, k: int) -> bool:
        counter = Counter(s)
        oddCount = 0

        for v in counter.values():
            if v & 1:
                oddCount += 1
        
        return oddCount <= k <= len(s)
```

