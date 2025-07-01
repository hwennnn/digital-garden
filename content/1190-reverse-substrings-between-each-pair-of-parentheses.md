---
title: 1190. Reverse Substrings Between Each Pair of Parentheses
draft: false
tags: 
  - leetcode-medium
  - string
  - stack
  - weekly-contest-154
  - contest-question
date: 2024-07-11
---

[Problem Link](https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/)

## Description

---
<p>You are given a string <code>s</code> that consists of lower case English letters and brackets.</p>

<p>Reverse the strings in each pair of matching parentheses, starting from the innermost one.</p>

<p>Your result should <strong>not</strong> contain any brackets.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;(abcd)&quot;
<strong>Output:</strong> &quot;dcba&quot;
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;(u(love)i)&quot;
<strong>Output:</strong> &quot;iloveu&quot;
<strong>Explanation:</strong> The substring &quot;love&quot; is reversed first, then the whole string is reversed.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;(ed(et(oc))el)&quot;
<strong>Output:</strong> &quot;leetcode&quot;
<strong>Explanation:</strong> First, we reverse the substring &quot;oc&quot;, then &quot;etco&quot;, and finally, the whole string.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 2000</code></li>
	<li><code>s</code> only contains lower case English characters and parentheses.</li>
	<li>It is guaranteed that all parentheses are balanced.</li>
</ul>


## Solution

---
### Python3
``` py title='reverse-substrings-between-each-pair-of-parentheses'
class Solution:
    def reverseParentheses(self, s: str) -> str:
        N = len(s)
        res = []
        stack = []

        for x in s:
            if x == "(":
                stack.append([])
            elif x == ")":
                last = stack.pop()

                while last:
                    if stack:
                        stack[-1].append(last.pop())
                    else:
                        res.append(last.pop())
            else:
                if stack:
                    stack[-1].append(x)
                else:
                    res.append(x)
        
        return "".join(res)
```

