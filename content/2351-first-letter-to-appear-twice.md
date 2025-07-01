---
title: 2351. First Letter to Appear Twice
draft: false
tags: 
  - leetcode-easy
  - hash-table
  - string
  - bit-manipulation
  - counting
  - weekly-contest-303
  - contest-question
date: 2022-07-24
---

[Problem Link](https://leetcode.com/problems/first-letter-to-appear-twice/)

## Description

---
<p>Given a string <code>s</code> consisting of lowercase English letters, return <em>the first letter to appear <strong>twice</strong></em>.</p>

<p><strong>Note</strong>:</p>

<ul>
	<li>A letter <code>a</code> appears twice before another letter <code>b</code> if the <strong>second</strong> occurrence of <code>a</code> is before the <strong>second</strong> occurrence of <code>b</code>.</li>
	<li><code>s</code> will contain at least one letter that appears twice.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;abccbaacz&quot;
<strong>Output:</strong> &quot;c&quot;
<strong>Explanation:</strong>
The letter &#39;a&#39; appears on the indexes 0, 5 and 6.
The letter &#39;b&#39; appears on the indexes 1 and 4.
The letter &#39;c&#39; appears on the indexes 2, 3 and 7.
The letter &#39;z&#39; appears on the index 8.
The letter &#39;c&#39; is the first letter to appear twice, because out of all the letters the index of its second occurrence is the smallest.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;abcdd&quot;
<strong>Output:</strong> &quot;d&quot;
<strong>Explanation:</strong>
The only letter that appears twice is &#39;d&#39; so we return &#39;d&#39;.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= s.length &lt;= 100</code></li>
	<li><code>s</code> consists of lowercase English letters.</li>
	<li><code>s</code> has at least one repeated letter.</li>
</ul>


## Solution

---
### Python3
``` py title='first-letter-to-appear-twice'
class Solution:
    def repeatedCharacter(self, s: str) -> str:
        seen = set()
        
        for x in s:
            if x in seen:
                return x
            
            seen.add(x)
```

