---
title: 2663. Lexicographically Smallest Beautiful String
draft: false
tags: 
  - leetcode-hard
  - string
  - greedy
  - weekly-contest-343
  - contest-question
date: 2023-05-05
---

[Problem Link](https://leetcode.com/problems/lexicographically-smallest-beautiful-string/)

## Description

---
<p>A string is <strong>beautiful</strong> if:</p>

<ul>
	<li>It consists of the first <code>k</code> letters of the English lowercase alphabet.</li>
	<li>It does not contain any substring of length <code>2</code> or more which is a palindrome.</li>
</ul>

<p>You are given a beautiful string <code>s</code> of length <code>n</code> and a positive integer <code>k</code>.</p>

<p>Return <em>the lexicographically smallest string of length </em><code>n</code><em>, which is larger than </em><code>s</code><em> and is <strong>beautiful</strong></em>. If there is no such string, return an empty string.</p>

<p>A string <code>a</code> is lexicographically larger than a string <code>b</code> (of the same length) if in the first position where <code>a</code> and <code>b</code> differ, <code>a</code> has a character strictly larger than the corresponding character in <code>b</code>.</p>

<ul>
	<li>For example, <code>&quot;abcd&quot;</code> is lexicographically larger than <code>&quot;abcc&quot;</code> because the first position they differ is at the fourth character, and <code>d</code> is greater than <code>c</code>.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;abcz&quot;, k = 26
<strong>Output:</strong> &quot;abda&quot;
<strong>Explanation:</strong> The string &quot;abda&quot; is beautiful and lexicographically larger than the string &quot;abcz&quot;.
It can be proven that there is no string that is lexicographically larger than the string &quot;abcz&quot;, beautiful, and lexicographically smaller than the string &quot;abda&quot;.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;dc&quot;, k = 4
<strong>Output:</strong> &quot;&quot;
<strong>Explanation:</strong> It can be proven that there is no string that is lexicographically larger than the string &quot;dc&quot; and is beautiful.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n == s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>4 &lt;= k &lt;= 26</code></li>
	<li><code>s</code> is a beautiful string.</li>
</ul>


## Solution

---
### Python3
``` py title='lexicographically-smallest-beautiful-string'
class Solution:
    def smallestBeautifulString(self, s: str, k: int) -> str:
        N = len(s)
        A = [ord(x) - ord('a') for x in s]
        i = N - 1

        def valid(index):
            return (index < 1 or A[index] != A[index - 1]) and (index < 2 or A[index] != A[index - 2])

        while i >= 0:
            A[i] += 1
            while not valid(i):
                A[i] += 1
            
            if A[i] < k:
                for j in range(i + 1, N):
                    for c in range(k):
                        A[j] = c
                        if valid(j):
                            break
                
                return "".join([chr(c + ord('a')) for c in A])
            
            i -= 1
            
        return ""
```

