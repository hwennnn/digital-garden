---
title: 438. Find All Anagrams in a String
draft: false
tags: 
  - leetcode-medium
  - hash-table
  - string
  - sliding-window
  - smarking-algorithm-contest
  - contest-question
date: 2023-02-05
---

[Problem Link](https://leetcode.com/problems/find-all-anagrams-in-a-string/)

## Description

---
<p>Given two strings <code>s</code> and <code>p</code>, return an array of all the start indices of <code>p</code>&#39;s <span data-keyword="anagram">anagrams</span> in <code>s</code>. You may return the answer in <strong>any order</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;cbaebabacd&quot;, p = &quot;abc&quot;
<strong>Output:</strong> [0,6]
<strong>Explanation:</strong>
The substring with start index = 0 is &quot;cba&quot;, which is an anagram of &quot;abc&quot;.
The substring with start index = 6 is &quot;bac&quot;, which is an anagram of &quot;abc&quot;.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;abab&quot;, p = &quot;ab&quot;
<strong>Output:</strong> [0,1,2]
<strong>Explanation:</strong>
The substring with start index = 0 is &quot;ab&quot;, which is an anagram of &quot;ab&quot;.
The substring with start index = 1 is &quot;ba&quot;, which is an anagram of &quot;ab&quot;.
The substring with start index = 2 is &quot;ab&quot;, which is an anagram of &quot;ab&quot;.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length, p.length &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>s</code> and <code>p</code> consist of lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='find-all-anagrams-in-a-string'
class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        n1, n2 = len(s), len(p)
        counter = Counter(p)
        curr = len(counter)
        res = []
        
        for i, x in enumerate(s):
            if x in counter:
                counter[x] -= 1
                if counter[x] == 0:
                    curr -= 1
            
            if curr == 0:
                res.append(i - n2 + 1)
            
            if i - n2 + 1 >= 0 and s[i - n2 + 1] in counter:
                counter[s[i - n2 + 1]] += 1
                if counter[s[i - n2 + 1]] == 1:
                    curr += 1
        
        return res
        
```

