---
title: 1297. Maximum Number of Occurrences of a Substring
draft: false
tags: 
  - leetcode-medium
  - hash-table
  - string
  - sliding-window
  - weekly-contest-168
  - contest-question
date: 2020-12-27
---

[Problem Link](https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/)

## Description

---
<p>Given a string <code>s</code>, return the maximum number of occurrences of <strong>any</strong> substring under the following rules:</p>

<ul>
	<li>The number of unique characters in the substring must be less than or equal to <code>maxLetters</code>.</li>
	<li>The substring size must be between <code>minSize</code> and <code>maxSize</code> inclusive.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;aababcaab&quot;, maxLetters = 2, minSize = 3, maxSize = 4
<strong>Output:</strong> 2
<strong>Explanation:</strong> Substring &quot;aab&quot; has 2 occurrences in the original string.
It satisfies the conditions, 2 unique letters and size 3 (between minSize and maxSize).
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;aaaa&quot;, maxLetters = 1, minSize = 3, maxSize = 3
<strong>Output:</strong> 2
<strong>Explanation:</strong> Substring &quot;aaa&quot; occur 2 times in the string. It can overlap.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= maxLetters &lt;= 26</code></li>
	<li><code>1 &lt;= minSize &lt;= maxSize &lt;= min(26, s.length)</code></li>
	<li><code>s</code> consists of only lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='maximum-number-of-occurrences-of-a-substring'
class Solution:
    def maxFreq(self, s: str, maxLetters: int, k: int, maxSize: int) -> int:
        count = collections.Counter()
        
        for i in range(len(s) - k + 1):
            count[s[i:i+k]] += 1
        
        return max([count[w] for w in count if len(set(w)) <= maxLetters] + [0])
```

