---
title: 3138. Minimum Length of Anagram Concatenation
draft: false
tags: 
  - leetcode-medium
  - hash-table
  - string
  - counting
  - weekly-contest-396
  - contest-question
date: 2024-05-09
---

[Problem Link](https://leetcode.com/problems/minimum-length-of-anagram-concatenation/)

## Description

---
<p>You are given a string <code>s</code>, which is known to be a concatenation of <strong>anagrams</strong> of some string <code>t</code>.</p>

<p>Return the <strong>minimum</strong> possible length of the string <code>t</code>.</p>

<p>An <strong>anagram</strong> is formed by rearranging the letters of a string. For example, &quot;aab&quot;, &quot;aba&quot;, and, &quot;baa&quot; are anagrams of &quot;aab&quot;.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;abba&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">2</span></p>

<p><strong>Explanation:</strong></p>

<p>One possible string <code>t</code> could be <code>&quot;ba&quot;</code>.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;cdef&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">4</span></p>

<p><strong>Explanation:</strong></p>

<p>One possible string <code>t</code> could be <code>&quot;cdef&quot;</code>, notice that <code>t</code> can be equal to <code>s</code>.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;abcbcacabbaccba&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">3</span></p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>s</code> consist only of lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='minimum-length-of-anagram-concatenation'
class Solution:
    def minAnagramLength(self, s: str) -> int:
        N = len(s)

        def good(k):
            cnt = [0] * 26

            for i in range(k):
                cnt[ord(s[i]) - ord('a')] += 1
            
            for i in range(k, N - k + 1, k):
                cnt2 = [0] * 26
                for j in range(i, i + k):
                    cnt2[ord(s[j]) - ord('a')] += 1
                
                for j in range(26):
                    if cnt[j] != cnt2[j]:
                        return False
            
            return True

        for i in range(1, N):
            if N % i == 0 and good(i):
                return i
        
        return N
```

