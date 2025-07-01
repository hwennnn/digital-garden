---
title: 1371. Find the Longest Substring Containing Vowels in Even Counts
draft: false
tags: 
  - leetcode-medium
  - hash-table
  - string
  - bit-manipulation
  - prefix-sum
  - biweekly-contest-21
  - contest-question
date: 2025-01-01
---

[Problem Link](https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/)

## Description

---
<p>Given the string <code>s</code>, return the size of the longest substring containing each vowel an even number of times. That is, &#39;a&#39;, &#39;e&#39;, &#39;i&#39;, &#39;o&#39;, and &#39;u&#39; must appear an even number of times.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;eleetminicoworoep&quot;
<strong>Output:</strong> 13
<strong>Explanation: </strong>The longest substring is &quot;leetminicowor&quot; which contains two each of the vowels: <strong>e</strong>, <strong>i</strong> and <strong>o</strong> and zero of the vowels: <strong>a</strong> and <strong>u</strong>.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;leetcodeisgreat&quot;
<strong>Output:</strong> 5
<strong>Explanation:</strong> The longest substring is &quot;leetc&quot; which contains two e&#39;s.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;bcbcbc&quot;
<strong>Output:</strong> 6
<strong>Explanation:</strong> In this case, the given string &quot;bcbcbc&quot; is the longest because all vowels: <strong>a</strong>, <strong>e</strong>, <strong>i</strong>, <strong>o</strong> and <strong>u</strong> appear zero times.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 5 x 10^5</code></li>
	<li><code>s</code>&nbsp;contains only lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='find-the-longest-substring-containing-vowels-in-even-counts'
class Solution:
    def findTheLongestSubstring(self, s: str) -> int:
        mp = {"a": 1, "e": 2, "i": 4, "o": 8, "u": 16}
        d = {0 : -1}
        res = n = 0
        
        for i, x in enumerate(s):
            if x in mp:
                n ^= mp[x]
            
            if n not in d:
                d[n] = i
            else:
                res = max(res, i - d[n])
        
        return res
                
```

