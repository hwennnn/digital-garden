---
title: 884. Uncommon Words from Two Sentences
draft: false
tags: 
  - leetcode-easy
  - hash-table
  - string
  - counting
  - weekly-contest-97
  - contest-question
date: 2025-01-01
---

[Problem Link](https://leetcode.com/problems/uncommon-words-from-two-sentences/)

## Description

---
<p>A <strong>sentence</strong> is a string of single-space separated words where each word consists only of lowercase letters.</p>

<p>A word is <strong>uncommon</strong> if it appears exactly once in one of the sentences, and <strong>does not appear</strong> in the other sentence.</p>

<p>Given two <strong>sentences</strong> <code>s1</code> and <code>s2</code>, return <em>a list of all the <strong>uncommon words</strong></em>. You may return the answer in <strong>any order</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s1 = &quot;this apple is sweet&quot;, s2 = &quot;this apple is sour&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">[&quot;sweet&quot;,&quot;sour&quot;]</span></p>

<p><strong>Explanation:</strong></p>

<p>The word <code>&quot;sweet&quot;</code> appears only in <code>s1</code>, while the word <code>&quot;sour&quot;</code> appears only in <code>s2</code>.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s1 = &quot;apple apple&quot;, s2 = &quot;banana&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">[&quot;banana&quot;]</span></p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s1.length, s2.length &lt;= 200</code></li>
	<li><code>s1</code> and <code>s2</code> consist of lowercase English letters and spaces.</li>
	<li><code>s1</code> and <code>s2</code> do not have leading or trailing spaces.</li>
	<li>All the words in <code>s1</code> and <code>s2</code> are separated by a single space.</li>
</ul>


## Solution

---
### Python3
``` py title='uncommon-words-from-two-sentences'
class Solution:
    def uncommonFromSentences(self, s1: str, s2: str) -> List[str]:
        u1 = Counter(s1.split())
        u2 = Counter(s2.split())
        res = []

        for x in u1:
            if u1[x] == 1 and u2[x] == 0:
                res.append(x)
        
        for x in u2:
            if u2[x] == 1 and u1[x] == 0:
                res.append(x)

        return res
```

