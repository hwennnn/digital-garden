---
title: 2710. Remove Trailing Zeros From a String
draft: false
tags: 
  - leetcode-easy
  - string
  - weekly-contest-347
  - contest-question
date: 2023-05-28
---

[Problem Link](https://leetcode.com/problems/remove-trailing-zeros-from-a-string/)

## Description

---
<p>Given a <strong>positive</strong> integer <code>num</code> represented as a string, return <em>the integer </em><code>num</code><em> without trailing zeros as a string</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> num = &quot;51230100&quot;
<strong>Output:</strong> &quot;512301&quot;
<strong>Explanation:</strong> Integer &quot;51230100&quot; has 2 trailing zeros, we remove them and return integer &quot;512301&quot;.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> num = &quot;123&quot;
<strong>Output:</strong> &quot;123&quot;
<strong>Explanation:</strong> Integer &quot;123&quot; has no trailing zeros, we return integer &quot;123&quot;.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= num.length &lt;= 1000</code></li>
	<li><code>num</code> consists&nbsp;of only digits.</li>
	<li><code>num</code> doesn&#39;t&nbsp;have any leading zeros.</li>
</ul>


## Solution

---
### Python3
``` py title='remove-trailing-zeros-from-a-string'
class Solution:
    def removeTrailingZeros(self, num: str) -> str:
        index = -1
        
        for i, x in enumerate(num):
            if x == "0":
                if index == -1:
                    index = i
            else:
                index = -1
        
        if index == -1: return num
        
        return num[:index]
```

