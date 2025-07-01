---
title: 1446. Consecutive Characters
draft: false
tags: 
  - leetcode-easy
  - string
  - biweekly-contest-26
  - contest-question
date: 2021-12-13
---

[Problem Link](https://leetcode.com/problems/consecutive-characters/)

## Description

---
<p>The <strong>power</strong> of the string is the maximum length of a non-empty substring that contains only one unique character.</p>

<p>Given a string <code>s</code>, return <em>the <strong>power</strong> of</em> <code>s</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;leetcode&quot;
<strong>Output:</strong> 2
<strong>Explanation:</strong> The substring &quot;ee&quot; is of length 2 with the character &#39;e&#39; only.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;abbcccddddeeeeedcba&quot;
<strong>Output:</strong> 5
<strong>Explanation:</strong> The substring &quot;eeeee&quot; is of length 5 with the character &#39;e&#39; only.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 500</code></li>
	<li><code>s</code> consists of only lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='consecutive-characters'
class Solution:
    def maxPower(self, s: str) -> int:
        n = len(s)
        curr = s[0]
        count = res = 1
        
        for i in range(1, n):
            if s[i] == curr:
                count += 1
            else:
                count = 1
                curr = s[i]
            
            res = max(res, count)
        
        return res
```

