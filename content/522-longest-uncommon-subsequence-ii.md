---
title: 522. Longest Uncommon Subsequence II
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - two-pointers
  - string
  - sorting
  - weekly-contest-26
  - contest-question
date: 2021-08-28
---

[Problem Link](https://leetcode.com/problems/longest-uncommon-subsequence-ii/)

## Description

---
<p>Given an array of strings <code>strs</code>, return <em>the length of the <strong>longest uncommon subsequence</strong> between them</em>. If the longest uncommon subsequence does not exist, return <code>-1</code>.</p>

<p>An <strong>uncommon subsequence</strong> between an array of strings is a string that is a <strong>subsequence of one string but not the others</strong>.</p>

<p>A <strong>subsequence</strong> of a string <code>s</code> is a string that can be obtained after deleting any number of characters from <code>s</code>.</p>

<ul>
	<li>For example, <code>&quot;abc&quot;</code> is a subsequence of <code>&quot;aebdc&quot;</code> because you can delete the underlined characters in <code>&quot;a<u>e</u>b<u>d</u>c&quot;</code> to get <code>&quot;abc&quot;</code>. Other subsequences of <code>&quot;aebdc&quot;</code> include <code>&quot;aebdc&quot;</code>, <code>&quot;aeb&quot;</code>, and <code>&quot;&quot;</code> (empty string).</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> strs = ["aba","cdc","eae"]
<strong>Output:</strong> 3
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> strs = ["aaa","aaa","aa"]
<strong>Output:</strong> -1
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= strs.length &lt;= 50</code></li>
	<li><code>1 &lt;= strs[i].length &lt;= 10</code></li>
	<li><code>strs[i]</code> consists of lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='longest-uncommon-subsequence-ii'
class Solution:
    def findLUSlength(self, words: List[str]) -> int:
        
        def getDuplicates():
            sset = set()
            duplicates = set()
            
            for word in words:
                if word in sset:
                    duplicates.add(word)
                sset.add(word)
            
            return duplicates
        
        def isSubsequence(a, b):
            i = j = 0
            
            while i < len(a) and j < len(b):
                if a[i] == b[j]: j += 1
                i += 1
            
            return j == len(b)
        
        words.sort(key = len, reverse = 1)
        duplicates = getDuplicates()
        if words[0] not in duplicates: return len(words[0])
        
        for i, word in enumerate(words):
            if word not in duplicates:
                for j in range(i):
                    if isSubsequence(words[j], words[i]): break
                    if j == i - 1: return len(word)
        
        return -1
```

