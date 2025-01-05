---
title: 524. Longest Word in Dictionary through Deleting
draft: false
tags: 
  - leetcode-medium
  - array
  - two-pointers
  - string
  - sorting
date: 2021-02-22
---

[Problem Link](https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/)

## Description

---
<p>Given a string <code>s</code> and a string array <code>dictionary</code>, return <em>the longest string in the dictionary that can be formed by deleting some of the given string characters</em>. If there is more than one possible result, return the longest word with the smallest lexicographical order. If there is no possible result, return the empty string.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;abpcplea&quot;, dictionary = [&quot;ale&quot;,&quot;apple&quot;,&quot;monkey&quot;,&quot;plea&quot;]
<strong>Output:</strong> &quot;apple&quot;
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;abpcplea&quot;, dictionary = [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;]
<strong>Output:</strong> &quot;a&quot;
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 1000</code></li>
	<li><code>1 &lt;= dictionary.length &lt;= 1000</code></li>
	<li><code>1 &lt;= dictionary[i].length &lt;= 1000</code></li>
	<li><code>s</code> and <code>dictionary[i]</code> consist of lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='longest-word-in-dictionary-through-deleting'
class Solution:
    def findLongestWord(self, s: str, d: List[str]) -> str:
        d.sort(key = lambda x: (-len(x), x))
        
        for word in d:
            i = 0
            
            for c in s:
                if i < len(word) and c == word[i]:
                    i += 1
                
            if i == len(word): return word
        
        return ""
```
