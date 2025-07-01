---
title: 3517. Smallest Palindromic Rearrangement I
draft: false
tags: 
  - leetcode-medium
  - string
  - sorting
  - counting-sort
  - weekly-contest-445
  - contest-question
date: 2025-05-17
---

[Problem Link](https://leetcode.com/problems/smallest-palindromic-rearrangement-i/)

## Description

---
<p>You are given a <strong><span data-keyword="palindrome-string">palindromic</span></strong> string <code>s</code>.</p>

<p>Return the <strong><span data-keyword="lexicographically-smaller-string">lexicographically smallest</span></strong> palindromic <span data-keyword="permutation-string">permutation</span> of <code>s</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;z&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">&quot;z&quot;</span></p>

<p><strong>Explanation:</strong></p>

<p>A string of only one character is already the lexicographically smallest palindrome.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;babab&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">&quot;abbba&quot;</span></p>

<p><strong>Explanation:</strong></p>

<p>Rearranging <code>&quot;babab&quot;</code> &rarr; <code>&quot;abbba&quot;</code> gives the smallest lexicographic palindrome.</p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;daccad&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">&quot;acddca&quot;</span></p>

<p><strong>Explanation:</strong></p>

<p>Rearranging <code>&quot;daccad&quot;</code> &rarr; <code>&quot;acddca&quot;</code> gives the smallest lexicographic palindrome.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>s</code> consists of lowercase English letters.</li>
	<li><code>s</code> is guaranteed to be palindromic.</li>
</ul>


## Solution

---
### Python3
``` py title='smallest-palindromic-rearrangement-i'
class Solution:
    def smallestPalindrome(self, s: str) -> str:
        N = len(s)
        counter = [0] * 26
        res = [""] * N

        for x in s:
            counter[ord(x) - ord('a')] += 1

        i, j = 0, N - 1
        odd = None
        cIndex = 0
        while i <= j and cIndex < 26:
            if counter[cIndex] == 0: 
                cIndex += 1
                continue

            while i < j and counter[cIndex] >= 2:
                res[i] = res[j] = chr(ord('a') + cIndex)
                i += 1
                j -= 1
                counter[cIndex] -= 2

            if counter[cIndex] == 1:
                odd = cIndex
                cIndex += 1

            if i == j and odd is not None:
                res[i] = chr(ord('a') + odd)
                break

        return "".join(res)
                
            
        
```

