---
title: 1044. Longest Duplicate Substring
draft: false
tags: 
  - leetcode-hard
  - string
  - binary-search
  - sliding-window
  - rolling-hash
  - suffix-array
  - hash-function
  - weekly-contest-136
  - contest-question
date: 2021-11-03
---

[Problem Link](https://leetcode.com/problems/longest-duplicate-substring/)

## Description

---
<p>Given a string <code>s</code>, consider all <em>duplicated substrings</em>: (contiguous) substrings of s that occur 2 or more times.&nbsp;The occurrences&nbsp;may overlap.</p>

<p>Return <strong>any</strong> duplicated&nbsp;substring that has the longest possible length.&nbsp;If <code>s</code> does not have a duplicated substring, the answer is <code>&quot;&quot;</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> s = "banana"
<strong>Output:</strong> "ana"
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> s = "abcd"
<strong>Output:</strong> ""
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= s.length &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>s</code> consists of lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='longest-duplicate-substring'
class Solution:
    def robinKarp(self, s, M):
        if M == 0: return 0
        
        q = (1 << 31) - 1
        h = pow(256, M - 1, q)
        d = 256
        t = 0
        mp = collections.defaultdict(list)
        
        for i in range(M):
            t = (t * d + ord(s[i])) % q
        mp[t].append(0)
        
        for i in range(len(s) - M):
            t = (d * (t - ord(s[i]) * h) + ord(s[i + M])) % q
            
            for j in mp[t]:
                if s[j : j + M] == s[i + 1 : i + 1 + M]:
                    return (True, s[j : j + M])
            mp[t].append(i + 1)
        
        return (False, '')
        
    def longestDupSubstring(self, s: str) -> str:
        left, right = 0, len(s)
        res = ''
        
        while left + 1 < right:
            mid = left + (right - left) // 2
            isFound, word = self.robinKarp(s, mid)
            
            if isFound:
                left, res = mid, word
            else:
                right = mid
            
        return res
        
```

