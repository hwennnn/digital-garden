---
title: 1419. Minimum Number of Frogs Croaking
draft: false
tags: 
  - leetcode-medium
  - string
  - counting
  - weekly-contest-185
  - contest-question
date: 2020-10-13
---

[Problem Link](https://leetcode.com/problems/minimum-number-of-frogs-croaking/)

## Description

---
<p>You are given the string <code>croakOfFrogs</code>, which represents a combination of the string <code>&quot;croak&quot;</code> from different frogs, that is, multiple frogs can croak at the same time, so multiple <code>&quot;croak&quot;</code> are mixed.</p>

<p><em>Return the minimum number of </em>different<em> frogs to finish all the croaks in the given string.</em></p>

<p>A valid <code>&quot;croak&quot;</code> means a frog is printing five letters <code>&#39;c&#39;</code>, <code>&#39;r&#39;</code>, <code>&#39;o&#39;</code>, <code>&#39;a&#39;</code>, and <code>&#39;k&#39;</code> <strong>sequentially</strong>. The frogs have to print all five letters to finish a croak. If the given string is not a combination of a valid <code>&quot;croak&quot;</code> return <code>-1</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> croakOfFrogs = &quot;croakcroak&quot;
<strong>Output:</strong> 1 
<strong>Explanation:</strong> One frog yelling &quot;croak<strong>&quot;</strong> twice.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> croakOfFrogs = &quot;crcoakroak&quot;
<strong>Output:</strong> 2 
<strong>Explanation:</strong> The minimum number of frogs is two. 
The first frog could yell &quot;<strong>cr</strong>c<strong>oak</strong>roak&quot;.
The second frog could yell later &quot;cr<strong>c</strong>oak<strong>roak</strong>&quot;.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> croakOfFrogs = &quot;croakcrook&quot;
<strong>Output:</strong> -1
<strong>Explanation:</strong> The given string is an invalid combination of &quot;croak<strong>&quot;</strong> from different frogs.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= croakOfFrogs.length &lt;= 10<sup>5</sup></code></li>
	<li><code>croakOfFrogs</code> is either <code>&#39;c&#39;</code>, <code>&#39;r&#39;</code>, <code>&#39;o&#39;</code>, <code>&#39;a&#39;</code>, or <code>&#39;k&#39;</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='minimum-number-of-frogs-croaking'
class Solution:
    def minNumberOfFrogs(self, S: str) -> int:
        dic = {"c","r","o","a","k"}
        c = m = peak = 0
        
        for s in S:
            if s == "c":
                m += 1
                c += 4
            
            else:
                c -= 1
            
            if s == "k":
                m -= 1

            if c < 0:
                return -1
            
            peak = max(peak, m)

        mp = collections.Counter(S)
        check = None
        for c in mp:
            if not check:
                check = mp[c]
            else:
                if mp[c] != check or c not in dic:
                    return -1
        
        return peak
```

