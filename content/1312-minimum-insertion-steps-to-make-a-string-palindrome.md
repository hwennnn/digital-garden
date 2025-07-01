---
title: 1312. Minimum Insertion Steps to Make a String Palindrome
draft: false
tags: 
  - leetcode-hard
  - string
  - dynamic-programming
  - weekly-contest-170
  - contest-question
date: 2023-04-22
---

[Problem Link](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/)

## Description

---
<p>Given a string <code>s</code>. In one step you can insert any character at any index of the string.</p>

<p>Return <em>the minimum number of steps</em> to make <code>s</code>&nbsp;palindrome.</p>

<p>A&nbsp;<b>Palindrome String</b>&nbsp;is one that reads the same backward as well as forward.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;zzazz&quot;
<strong>Output:</strong> 0
<strong>Explanation:</strong> The string &quot;zzazz&quot; is already palindrome we do not need any insertions.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;mbadm&quot;
<strong>Output:</strong> 2
<strong>Explanation:</strong> String can be &quot;mbdadbm&quot; or &quot;mdbabdm&quot;.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;leetcode&quot;
<strong>Output:</strong> 5
<strong>Explanation:</strong> Inserting 5 characters the string becomes &quot;leetcodocteel&quot;.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 500</code></li>
	<li><code>s</code> consists of lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='minimum-insertion-steps-to-make-a-string-palindrome'
class Solution:
    def minInsertions(self, s: str) -> int:
        N = len(s)

        @cache
        def go(i, j):
            if i >= j: return 0

            if s[i] == s[j]: return go(i + 1, j - 1)
            
            return 1 + min(go(i + 1, j), go(i, j - 1))
        
        return go(0, N - 1)
```

