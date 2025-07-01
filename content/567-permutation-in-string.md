---
title: 567. Permutation in String
draft: false
tags: 
  - leetcode-medium
  - hash-table
  - two-pointers
  - string
  - sliding-window
  - weekly-contest-30
  - contest-question
date: 2025-01-01
---

[Problem Link](https://leetcode.com/problems/permutation-in-string/)

## Description

---
<p>Given two strings <code>s1</code> and <code>s2</code>, return <code>true</code> if <code>s2</code> contains a <span data-keyword="permutation-string">permutation</span> of <code>s1</code>, or <code>false</code> otherwise.</p>

<p>In other words, return <code>true</code> if one of <code>s1</code>&#39;s permutations is the substring of <code>s2</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s1 = &quot;ab&quot;, s2 = &quot;eidbaooo&quot;
<strong>Output:</strong> true
<strong>Explanation:</strong> s2 contains one permutation of s1 (&quot;ba&quot;).
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s1 = &quot;ab&quot;, s2 = &quot;eidboaoo&quot;
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s1.length, s2.length &lt;= 10<sup>4</sup></code></li>
	<li><code>s1</code> and <code>s2</code> consist of lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='permutation-in-string'
class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        mp = collections.Counter(s1)
        i = 0
        
        for j, x in enumerate(s2):
            mp[x] -= 1
            
            while mp[x] < 0:
                mp[s2[i]] += 1
                i += 1
            
            if j - i + 1 == len(s1):
                return True
        
        return False
```

