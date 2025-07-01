---
title: 1556. Thousand Separator
draft: false
tags: 
  - leetcode-easy
  - string
  - biweekly-contest-33
  - contest-question
date: 2020-08-22
---

[Problem Link](https://leetcode.com/problems/thousand-separator/)

## Description

---
<p>Given an integer <code>n</code>, add a dot (&quot;.&quot;) as the thousands separator and return it in string format.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 987
<strong>Output:</strong> &quot;987&quot;
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 1234
<strong>Output:</strong> &quot;1.234&quot;
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= n &lt;= 2<sup>31</sup> - 1</code></li>
</ul>


## Solution

---
### Python3
``` py title='thousand-separator'
class Solution:
    def thousandSeparator(self, n: int) -> str:
        
        ans = ""
        i = 0
        
        for s in reversed(str(n)):
            if i !=0 and i%3==0:
                ans += "."
            ans += s
            i+=1
        
        ans = ans[::-1]
        
        return ans
```

