---
title: 3090. Maximum Length Substring With Two Occurrences
draft: false
tags: 
  - leetcode-easy
  - hash-table
  - string
  - sliding-window
  - weekly-contest-390
  - contest-question
date: 2024-03-24
---

[Problem Link](https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/)

## Description

---
Given a string <code>s</code>, return the <strong>maximum</strong> length of a <span data-keyword="substring">substring</span>&nbsp;such that it contains <em>at most two occurrences</em> of each character.
<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;bcbbbcba&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">4</span></p>

<p><strong>Explanation:</strong></p>
The following substring has a length of 4 and contains at most two occurrences of each character: <code>&quot;bcbb<u>bcba</u>&quot;</code>.</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;aaaa&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">2</span></p>

<p><strong>Explanation:</strong></p>
The following substring has a length of 2 and contains at most two occurrences of each character: <code>&quot;<u>aa</u>aa&quot;</code>.</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= s.length &lt;= 100</code></li>
	<li><code>s</code> consists only of lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='maximum-length-substring-with-two-occurrences'
class Solution:
    def maximumLengthSubstring(self, s: str) -> int:
        N = len(s)
        res = 0
        i = 0
        counter = Counter()
        
        for j, x in enumerate(s):
            counter[x] += 1
            
            while counter[x] > 2:
                counter[s[i]] -= 1
                i += 1
            
            res = max(res, j - i + 1)
        
        return res
            
        
```

