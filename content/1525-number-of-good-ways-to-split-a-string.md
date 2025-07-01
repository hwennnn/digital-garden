---
title: 1525. Number of Good Ways to Split a String
draft: false
tags: 
  - leetcode-medium
  - hash-table
  - string
  - dynamic-programming
  - bit-manipulation
  - biweekly-contest-31
  - contest-question
date: 2020-10-12
---

[Problem Link](https://leetcode.com/problems/number-of-good-ways-to-split-a-string/)

## Description

---
<p>You are given a string <code>s</code>.</p>

<p>A split is called <strong>good</strong> if you can split <code>s</code> into two non-empty strings <code>s<sub>left</sub></code> and <code>s<sub>right</sub></code> where their concatenation is equal to <code>s</code> (i.e., <code>s<sub>left</sub> + s<sub>right</sub> = s</code>) and the number of distinct letters in <code>s<sub>left</sub></code> and <code>s<sub>right</sub></code> is the same.</p>

<p>Return <em>the number of <strong>good splits</strong> you can make in <code>s</code></em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;aacaba&quot;
<strong>Output:</strong> 2
<strong>Explanation:</strong> There are 5 ways to split <code>&quot;aacaba&quot;</code> and 2 of them are good. 
(&quot;a&quot;, &quot;acaba&quot;) Left string and right string contains 1 and 3 different letters respectively.
(&quot;aa&quot;, &quot;caba&quot;) Left string and right string contains 1 and 3 different letters respectively.
(&quot;aac&quot;, &quot;aba&quot;) Left string and right string contains 2 and 2 different letters respectively (good split).
(&quot;aaca&quot;, &quot;ba&quot;) Left string and right string contains 2 and 2 different letters respectively (good split).
(&quot;aacab&quot;, &quot;a&quot;) Left string and right string contains 3 and 1 different letters respectively.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;abcd&quot;
<strong>Output:</strong> 1
<strong>Explanation:</strong> Split the string as follows (&quot;ab&quot;, &quot;cd&quot;).
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>
	<li><code>s</code> consists of only lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='number-of-good-ways-to-split-a-string'
class Solution:
    def numSplits(self, S: str) -> int:
        n = len(S)
        prefix = [None] * n
        suffix = [None] * n
        mp = set()
        res = 0
        
        for i in range(n):
            mp.add(S[i])
            prefix[i] = len(mp)
            
        mp.clear()
        
        for i in reversed(range(n)):
            mp.add(S[i])
            suffix[i] = len(mp)
        

        for i in range(1,n):
            res += prefix[i-1] == suffix[i]
        
        return res
```

