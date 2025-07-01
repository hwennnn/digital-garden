---
title: 1002. Find Common Characters
draft: false
tags: 
  - leetcode-easy
  - array
  - hash-table
  - string
  - weekly-contest-126
  - contest-question
date: 2024-06-05
---

[Problem Link](https://leetcode.com/problems/find-common-characters/)

## Description

---
<p>Given a string array <code>words</code>, return <em>an array of all characters that show up in all strings within the </em><code>words</code><em> (including duplicates)</em>. You may return the answer in <strong>any order</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> words = ["bella","label","roller"]
<strong>Output:</strong> ["e","l","l"]
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> words = ["cool","lock","cook"]
<strong>Output:</strong> ["c","o"]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= words.length &lt;= 100</code></li>
	<li><code>1 &lt;= words[i].length &lt;= 100</code></li>
	<li><code>words[i]</code> consists of lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='find-common-characters'
class Solution:
    def commonChars(self, words: List[str]) -> List[str]:
        count = [inf] * 26

        for word in words:
            curr = [0] * 26
            for c in word:
                curr[ord(c) - ord('a')] += 1
            
            for i in range(26):
                count[i] = min(count[i], curr[i])
        
        res = []
        for i in range(26):
            for _ in range(count[i]):
                res.append(chr(ord('a') + i))
        
        return res
```

