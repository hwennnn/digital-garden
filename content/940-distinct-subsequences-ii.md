---
title: 940. Distinct Subsequences II
draft: false
tags: 
  - leetcode-hard
  - string
  - dynamic-programming
date: 2022-02-25
---

[Problem Link](https://leetcode.com/problems/distinct-subsequences-ii/)

## Description

---
<p>Given a string s, return <em>the number of <strong>distinct non-empty subsequences</strong> of</em> <code>s</code>. Since the answer may be very large, return it <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>
A <strong>subsequence</strong> of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., <code>&quot;ace&quot;</code> is a subsequence of <code>&quot;<u>a</u>b<u>c</u>d<u>e</u>&quot;</code> while <code>&quot;aec&quot;</code> is not.
<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;abc&quot;
<strong>Output:</strong> 7
<strong>Explanation:</strong> The 7 distinct subsequences are &quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;ab&quot;, &quot;ac&quot;, &quot;bc&quot;, and &quot;abc&quot;.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;aba&quot;
<strong>Output:</strong> 6
<strong>Explanation:</strong> The 6 distinct subsequences are &quot;a&quot;, &quot;b&quot;, &quot;ab&quot;, &quot;aa&quot;, &quot;ba&quot;, and &quot;aba&quot;.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;aaa&quot;
<strong>Output:</strong> 3
<strong>Explanation:</strong> The 3 distinct subsequences are &quot;a&quot;, &quot;aa&quot; and &quot;aaa&quot;.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 2000</code></li>
	<li><code>s</code> consists of lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='distinct-subsequences-ii'
class Solution:
    def distinctSubseqII(self, s: str) -> int:
        n = len(s)
        M = 10 ** 9 + 7
        res = 0
        dp = [1] * n
        
        for i in range(n):
            for j in range(i):
                if s[i] != s[j]:
                    dp[i] += dp[j]
                    dp[i] %= M
            
            res += dp[i]
            res %= M
        
        return res
```
