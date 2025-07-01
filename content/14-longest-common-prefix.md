---
title: 14. Longest Common Prefix
draft: false
tags: 
  - leetcode-easy
  - array
  - string
  - trie
date: 2022-06-19
---

[Problem Link](https://leetcode.com/problems/longest-common-prefix/)

## Description

---
<p>Write a function to find the longest common prefix string amongst an array of strings.</p>

<p>If there is no common prefix, return an empty string <code>&quot;&quot;</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> strs = [&quot;flower&quot;,&quot;flow&quot;,&quot;flight&quot;]
<strong>Output:</strong> &quot;fl&quot;
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> strs = [&quot;dog&quot;,&quot;racecar&quot;,&quot;car&quot;]
<strong>Output:</strong> &quot;&quot;
<strong>Explanation:</strong> There is no common prefix among the input strings.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= strs.length &lt;= 200</code></li>
	<li><code>0 &lt;= strs[i].length &lt;= 200</code></li>
	<li><code>strs[i]</code> consists of only lowercase English letters if it is non-empty.</li>
</ul>


## Solution

---
### Python3
``` py title='longest-common-prefix'
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        w = min(strs, key = len)
        res = ""
        
        for i, x in enumerate(w):
            flag = True
            
            for word in strs:
                if word[i] != x:
                    flag = False
                    break
            
            if flag:
                res += x
            else:
                break
        
        return res
```

