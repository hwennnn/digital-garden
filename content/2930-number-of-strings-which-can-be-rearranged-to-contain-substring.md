---
title: 2930. Number of Strings Which Can Be Rearranged to Contain Substring
draft: false
tags: 
  - leetcode-medium
  - math
  - dynamic-programming
  - combinatorics
  - biweekly-contest-117
  - contest-question
date: 2023-11-13
---

[Problem Link](https://leetcode.com/problems/number-of-strings-which-can-be-rearranged-to-contain-substring/)

## Description

---
<p>You are given an integer <code>n</code>.</p>

<p>A string <code>s</code> is called <strong>good </strong>if it contains only lowercase English characters <strong>and</strong> it is possible to rearrange the characters of <code>s</code> such that the new string contains <code>&quot;leet&quot;</code> as a <strong>substring</strong>.</p>

<p>For example:</p>

<ul>
	<li>The string <code>&quot;lteer&quot;</code> is good because we can rearrange it to form <code>&quot;leetr&quot;</code> .</li>
	<li><code>&quot;letl&quot;</code> is not good because we cannot rearrange it to contain <code>&quot;leet&quot;</code> as a substring.</li>
</ul>

<p>Return <em>the <strong>total</strong> number of good strings of length </em><code>n</code>.</p>

<p>Since the answer may be large, return it <strong>modulo </strong><code>10<sup>9</sup> + 7</code>.</p>

<p>A <strong>substring</strong> is a contiguous sequence of characters within a string.</p>

<div class="notranslate" style="all: initial;">&nbsp;</div>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 4
<strong>Output:</strong> 12
<strong>Explanation:</strong> The 12 strings which can be rearranged to have &quot;leet&quot; as a substring are: &quot;eelt&quot;, &quot;eetl&quot;, &quot;elet&quot;, &quot;elte&quot;, &quot;etel&quot;, &quot;etle&quot;, &quot;leet&quot;, &quot;lete&quot;, &quot;ltee&quot;, &quot;teel&quot;, &quot;tele&quot;, and &quot;tlee&quot;.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 10
<strong>Output:</strong> 83943898
<strong>Explanation:</strong> The number of strings with length 10 which can be rearranged to have &quot;leet&quot; as a substring is 526083947580. Hence the answer is 526083947580 % (10<sup>9</sup> + 7) = 83943898.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='number-of-strings-which-can-be-rearranged-to-contain-substring'
class Solution:
    def stringCount(self, n: int) -> int:
        MOD = 10 ** 9 + 7
        
        @cache
        def go(index, l, e, t):
            if index == n:
                return 1 if l == 1 and e == 2 and t == 1 else 0
            
            res = 0
            res += go(index + 1, min(1, l + 1), e, t)
            res += go(index + 1, l, min(2, e + 1), t)
            res += go(index + 1, l, e, min(1, t + 1))
            res += 23 * go(index + 1, l, e, t)
            
            return res % MOD
        
        return go(0, 0, 0, 0)
```

