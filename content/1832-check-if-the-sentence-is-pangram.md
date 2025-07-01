---
title: 1832. Check if the Sentence Is Pangram
draft: false
tags: 
  - leetcode-easy
  - hash-table
  - string
  - weekly-contest-237
  - contest-question
date: 2022-10-17
---

[Problem Link](https://leetcode.com/problems/check-if-the-sentence-is-pangram/)

## Description

---
<p>A <strong>pangram</strong> is a sentence where every letter of the English alphabet appears at least once.</p>

<p>Given a string <code>sentence</code> containing only lowercase English letters, return<em> </em><code>true</code><em> if </em><code>sentence</code><em> is a <strong>pangram</strong>, or </em><code>false</code><em> otherwise.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> sentence = &quot;thequickbrownfoxjumpsoverthelazydog&quot;
<strong>Output:</strong> true
<strong>Explanation:</strong> sentence contains at least one of every letter of the English alphabet.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> sentence = &quot;leetcode&quot;
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= sentence.length &lt;= 1000</code></li>
	<li><code>sentence</code> consists of lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='check-if-the-sentence-is-pangram'
class Solution:
    def checkIfPangram(self, sentence: str) -> bool:
        res = 0
        
        for x in sentence:
            k = ord(x) - ord("a")
            
            if res & (1 << k) == 0:
                res ^= (1 << k)
        
        return res == (1 << 26) - 1
```

