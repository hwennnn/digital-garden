---
title: 423. Reconstruct Original Digits from English
draft: false
tags: 
  - leetcode-medium
  - hash-table
  - math
  - string
  - weekly-contest-9
  - contest-question
date: 2021-03-28
---

[Problem Link](https://leetcode.com/problems/reconstruct-original-digits-from-english/)

## Description

---
<p>Given a string <code>s</code> containing an out-of-order English representation of digits <code>0-9</code>, return <em>the digits in <strong>ascending</strong> order</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> s = "owoztneoer"
<strong>Output:</strong> "012"
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> s = "fviefuro"
<strong>Output:</strong> "45"
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>s[i]</code> is one of the characters <code>[&quot;e&quot;,&quot;g&quot;,&quot;f&quot;,&quot;i&quot;,&quot;h&quot;,&quot;o&quot;,&quot;n&quot;,&quot;s&quot;,&quot;r&quot;,&quot;u&quot;,&quot;t&quot;,&quot;w&quot;,&quot;v&quot;,&quot;x&quot;,&quot;z&quot;]</code>.</li>
	<li><code>s</code> is <strong>guaranteed</strong> to be valid.</li>
</ul>


## Solution

---
### Python3
``` py title='reconstruct-original-digits-from-english'
class Solution:
    def originalDigits(self, s: str) -> str:
        cnt = collections.Counter(s)
        digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
        freq = [0] * 10
        
        for x, i in ("z", 0), ("w", 2), ("u", 4), ("x", 6), ("g", 8), ("s", 7), ("f", 5), ("o", 1),("h", 3), ("i", 9): 
            freq[i] += cnt[x]
            cnt -= Counter(digits[i]*cnt[x])
            
        return "".join(str(i)*x for i, x in enumerate(freq))

```

