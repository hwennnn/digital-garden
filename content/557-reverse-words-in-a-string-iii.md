---
title: 557. Reverse Words in a String III
draft: false
tags: 
  - leetcode-easy
  - two-pointers
  - string
  - weekly-contest-27
  - contest-question
date: 2023-10-01
---

[Problem Link](https://leetcode.com/problems/reverse-words-in-a-string-iii/)

## Description

---
<p>Given a string <code>s</code>, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;Let&#39;s take LeetCode contest&quot;
<strong>Output:</strong> &quot;s&#39;teL ekat edoCteeL tsetnoc&quot;
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;Mr Ding&quot;
<strong>Output:</strong> &quot;rM gniD&quot;
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>s</code> contains printable <strong>ASCII</strong> characters.</li>
	<li><code>s</code> does not contain any leading or trailing spaces.</li>
	<li>There is <strong>at least one</strong> word in <code>s</code>.</li>
	<li>All the words in <code>s</code> are separated by a single space.</li>
</ul>


## Solution

---
### Python3
``` py title='reverse-words-in-a-string-iii'
class Solution:
    def reverseWords(self, s: str) -> str:
        return " ".join(x[::-1] for x in s.split(" "))
```

