---
title: 792. Number of Matching Subsequences
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - string
  - binary-search
  - dynamic-programming
  - trie
  - sorting
  - weekly-contest-74
  - contest-question
date: 2022-07-20
---

[Problem Link](https://leetcode.com/problems/number-of-matching-subsequences/)

## Description

---
<p>Given a string <code>s</code> and an array of strings <code>words</code>, return <em>the number of</em> <code>words[i]</code> <em>that is a subsequence of</em> <code>s</code>.</p>

<p>A <strong>subsequence</strong> of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.</p>

<ul>
	<li>For example, <code>&quot;ace&quot;</code> is a subsequence of <code>&quot;abcde&quot;</code>.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;abcde&quot;, words = [&quot;a&quot;,&quot;bb&quot;,&quot;acd&quot;,&quot;ace&quot;]
<strong>Output:</strong> 3
<strong>Explanation:</strong> There are three strings in words that are a subsequence of s: &quot;a&quot;, &quot;acd&quot;, &quot;ace&quot;.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;dsahjpjauf&quot;, words = [&quot;ahjpjau&quot;,&quot;ja&quot;,&quot;ahbwzgqnuk&quot;,&quot;tnmlanowax&quot;]
<strong>Output:</strong> 2
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>1 &lt;= words.length &lt;= 5000</code></li>
	<li><code>1 &lt;= words[i].length &lt;= 50</code></li>
	<li><code>s</code> and <code>words[i]</code> consist of only lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='number-of-matching-subsequences'
class Solution:
    def numMatchingSubseq(self, s: str, words: List[str]) -> int:
        mp = collections.defaultdict(collections.deque)
        
        for w in words:
            mp[w[0]].append(w)
        
        res = 0
        
        for c in s:
            n = len(mp[c])
            
            for _ in range(n):
                word = mp[c].popleft()
                if len(word) == 1:
                    res += 1
                else:
                    mp[word[1]].append(word[1:])
        
        return res
```

