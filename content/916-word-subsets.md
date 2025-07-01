---
title: 916. Word Subsets
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - string
  - weekly-contest-104
  - contest-question
date: 2025-01-10
---

[Problem Link](https://leetcode.com/problems/word-subsets/)

## Description

---
<p>You are given two string arrays <code>words1</code> and <code>words2</code>.</p>

<p>A string <code>b</code> is a <strong>subset</strong> of string <code>a</code> if every letter in <code>b</code> occurs in <code>a</code> including multiplicity.</p>

<ul>
	<li>For example, <code>&quot;wrr&quot;</code> is a subset of <code>&quot;warrior&quot;</code> but is not a subset of <code>&quot;world&quot;</code>.</li>
</ul>

<p>A string <code>a</code> from <code>words1</code> is <strong>universal</strong> if for every string <code>b</code> in <code>words2</code>, <code>b</code> is a subset of <code>a</code>.</p>

<p>Return an array of all the <strong>universal</strong> strings in <code>words1</code>. You may return the answer in <strong>any order</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">words1 = [&quot;amazon&quot;,&quot;apple&quot;,&quot;facebook&quot;,&quot;google&quot;,&quot;leetcode&quot;], words2 = [&quot;e&quot;,&quot;o&quot;]</span></p>

<p><strong>Output:</strong> <span class="example-io">[&quot;facebook&quot;,&quot;google&quot;,&quot;leetcode&quot;]</span></p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">words1 = [&quot;amazon&quot;,&quot;apple&quot;,&quot;facebook&quot;,&quot;google&quot;,&quot;leetcode&quot;], words2 = [&quot;lc&quot;,&quot;eo&quot;]</span></p>

<p><strong>Output:</strong> <span class="example-io">[&quot;leetcode&quot;]</span></p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">words1 = [&quot;acaac&quot;,&quot;cccbb&quot;,&quot;aacbb&quot;,&quot;caacc&quot;,&quot;bcbbb&quot;], words2 = [&quot;c&quot;,&quot;cc&quot;,&quot;b&quot;]</span></p>

<p><strong>Output:</strong> <span class="example-io">[&quot;cccbb&quot;]</span></p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= words1.length, words2.length &lt;= 10<sup>4</sup></code></li>
	<li><code>1 &lt;= words1[i].length, words2[i].length &lt;= 10</code></li>
	<li><code>words1[i]</code> and <code>words2[i]</code> consist only of lowercase English letters.</li>
	<li>All the strings of <code>words1</code> are <strong>unique</strong>.</li>
</ul>


## Solution

---
### Python3
``` py title='word-subsets'
class Solution:
    def wordSubsets(self, words1: List[str], words2: List[str]) -> List[str]:
        res = []
        counter = [0] * 26

        for word in words2:
            count = [0] * 26

            for c in word:
                count[ord(c) - ord('a')] += 1
            
            for i in range(26):
                counter[i] = max(counter[i], count[i])

        for word in words1:
            count = [0] * 26

            for c in word:
                count[ord(c) - ord('a')] += 1
            
            ok = True
            for i in range(26):
                if counter[i] > count[i]:
                    ok = False
                    break
            
            if ok:
                res.append(word)

        return res
```

