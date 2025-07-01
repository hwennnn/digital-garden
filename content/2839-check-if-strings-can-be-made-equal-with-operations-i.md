---
title: 2839. Check if Strings Can be Made Equal With Operations I
draft: false
tags: 
  - leetcode-easy
  - string
  - biweekly-contest-112
  - contest-question
date: 2023-09-03
---

[Problem Link](https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/)

## Description

---
<p>You are given two strings <code>s1</code> and <code>s2</code>, both of length <code>4</code>, consisting of <strong>lowercase</strong> English letters.</p>

<p>You can apply the following operation on any of the two strings <strong>any</strong> number of times:</p>

<ul>
	<li>Choose any two indices <code>i</code> and <code>j</code> such that <code>j - i = 2</code>, then <strong>swap</strong> the two characters at those indices in the string.</li>
</ul>

<p>Return <code>true</code><em> if you can make the strings </em><code>s1</code><em> and </em><code>s2</code><em> equal, and </em><code>false</code><em> otherwise</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s1 = &quot;abcd&quot;, s2 = &quot;cdab&quot;
<strong>Output:</strong> true
<strong>Explanation:</strong> We can do the following operations on s1:
- Choose the indices i = 0, j = 2. The resulting string is s1 = &quot;cbad&quot;.
- Choose the indices i = 1, j = 3. The resulting string is s1 = &quot;cdab&quot; = s2.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s1 = &quot;abcd&quot;, s2 = &quot;dacb&quot;
<strong>Output:</strong> false
<strong>Explanation:</strong> It is not possible to make the two strings equal.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>s1.length == s2.length == 4</code></li>
	<li><code>s1</code> and <code>s2</code> consist only of lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='check-if-strings-can-be-made-equal-with-operations-i'
class Solution:
    def canBeEqual(self, s1: str, s2: str) -> bool:
        s1, s2 = list(s1), list(s2)
        N = len(s1)
        
        for i in range(N):
            if s1[i] != s2[i]:
                if i + 2 < N:
                    s1[i], s1[i + 2] = s1[i + 2], s1[i]
                    
                    if s1[i] == s2[i]: continue
                        
                    
                        
                    s2[i], s2[i + 2] = s2[i + 2], s2[i]
                    
                    if s1[i] == s2[i]: continue
                
                return False
        
        return True
```

