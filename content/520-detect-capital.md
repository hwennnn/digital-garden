---
title: 520. Detect Capital
draft: false
tags: 
  - leetcode-easy
  - string
  - weekly-contest-20
  - contest-question
date: 2023-01-02
---

[Problem Link](https://leetcode.com/problems/detect-capital/)

## Description

---
<p>We define the usage of capitals in a word to be right when one of the following cases holds:</p>

<ul>
	<li>All letters in this word are capitals, like <code>&quot;USA&quot;</code>.</li>
	<li>All letters in this word are not capitals, like <code>&quot;leetcode&quot;</code>.</li>
	<li>Only the first letter in this word is capital, like <code>&quot;Google&quot;</code>.</li>
</ul>

<p>Given a string <code>word</code>, return <code>true</code> if the usage of capitals in it is right.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> word = "USA"
<strong>Output:</strong> true
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> word = "FlaG"
<strong>Output:</strong> false
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= word.length &lt;= 100</code></li>
	<li><code>word</code> consists of lowercase and uppercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='detect-capital'
class Solution:
    def detectCapitalUse(self, word: str) -> bool:
        def isCap(x):
            return ord("A") <= ord(x) <= ord("Z")
        
        N = len(word)
        cap = 0
        for x in word:
            if isCap(x):
                cap += 1
        
        return cap == N or cap == 0 or (cap == 1 and isCap(word[0]))
```

