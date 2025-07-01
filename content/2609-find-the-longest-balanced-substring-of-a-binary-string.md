---
title: 2609. Find the Longest Balanced Substring of a Binary String
draft: false
tags: 
  - leetcode-easy
  - string
  - weekly-contest-339
  - contest-question
date: 2023-04-02
---

[Problem Link](https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/)

## Description

---
<p>You are given a binary string <code>s</code> consisting only of zeroes and ones.</p>

<p>A substring of <code>s</code> is considered balanced if<strong> all zeroes are before ones</strong> and the number of zeroes is equal to the number of ones inside the substring. Notice that the empty substring is considered a balanced substring.</p>

<p>Return <em>the length of the longest balanced substring of </em><code>s</code>.</p>

<p>A <b>substring</b> is a contiguous sequence of characters within a string.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;01000111&quot;
<strong>Output:</strong> 6
<strong>Explanation:</strong> The longest balanced substring is &quot;000111&quot;, which has length 6.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;00111&quot;
<strong>Output:</strong> 4
<strong>Explanation:</strong> The longest balanced substring is &quot;0011&quot;, which has length 4.&nbsp;
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;111&quot;
<strong>Output:</strong> 0
<strong>Explanation:</strong> There is no balanced substring except the empty substring, so the answer is 0.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 50</code></li>
	<li><code>&#39;0&#39; &lt;= s[i] &lt;= &#39;1&#39;</code></li>
</ul>


## Solution

---
### Python3
``` py title='find-the-longest-balanced-substring-of-a-binary-string'
class Solution:
    def findTheLongestBalancedSubstring(self, s: str) -> int:
        zeroes = ones = 0
        res = 0
        
        for i, x in enumerate(s):
            if x == '1':
                ones += 1
                common = min(zeroes, ones)
                res = max(res, common * 2)
            else:
                if i > 0 and s[i - 1] == '1':
                    zeroes = 0
                zeroes += 1
                ones = 0
        
        return res
```

