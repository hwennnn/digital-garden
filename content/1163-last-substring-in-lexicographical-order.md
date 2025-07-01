---
title: 1163. Last Substring in Lexicographical Order
draft: false
tags: 
  - leetcode-hard
  - two-pointers
  - string
  - weekly-contest-150
  - contest-question
date: 2021-05-15
---

[Problem Link](https://leetcode.com/problems/last-substring-in-lexicographical-order/)

## Description

---
<p>Given a string <code>s</code>, return <em>the last substring of</em> <code>s</code> <em>in lexicographical order</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;abab&quot;
<strong>Output:</strong> &quot;bab&quot;
<strong>Explanation:</strong> The substrings are [&quot;a&quot;, &quot;ab&quot;, &quot;aba&quot;, &quot;abab&quot;, &quot;b&quot;, &quot;ba&quot;, &quot;bab&quot;]. The lexicographically maximum substring is &quot;bab&quot;.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;leetcode&quot;
<strong>Output:</strong> &quot;tcode&quot;
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 4 * 10<sup>5</sup></code></li>
	<li><code>s</code> contains only lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='last-substring-in-lexicographical-order'
class Solution:
    def lastSubstring(self, s: str) -> str:
        n = len(s)
        i, indexes = 0, list(range(n))
        
        while len(indexes) > 1:
            new = []
            mx = max([s[i + j] for j in indexes if i + j < len(s)])

            for k, j in enumerate(indexes):
                if k - 1 >= 0 and indexes[k - 1] + i == j:
                    continue
                if i + j >= len(s):
                    break
                if s[i + j] == mx:
                    new.append(j)
            i += 1
            indexes = new
            
        return s[indexes[0]:]
```

