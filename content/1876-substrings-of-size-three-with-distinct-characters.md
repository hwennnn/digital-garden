---
title: 1876. Substrings of Size Three with Distinct Characters
draft: false
tags: 
  - leetcode-easy
  - hash-table
  - string
  - sliding-window
  - counting
  - biweekly-contest-53
  - contest-question
date: 2021-05-29
---

[Problem Link](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/)

## Description

---
<p>A string is <strong>good</strong> if there are no repeated characters.</p>

<p>Given a string <code>s</code>​​​​​, return <em>the number of <strong>good substrings</strong> of length <strong>three </strong>in </em><code>s</code>​​​​​​.</p>

<p>Note that if there are multiple occurrences of the same substring, every occurrence should be counted.</p>

<p>A <strong>substring</strong> is a contiguous sequence of characters in a string.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;xyzzaz&quot;
<strong>Output:</strong> 1
<strong>Explanation:</strong> There are 4 substrings of size 3: &quot;xyz&quot;, &quot;yzz&quot;, &quot;zza&quot;, and &quot;zaz&quot;. 
The only good substring of length 3 is &quot;xyz&quot;.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;aababcabc&quot;
<strong>Output:</strong> 4
<strong>Explanation:</strong> There are 7 substrings of size 3: &quot;aab&quot;, &quot;aba&quot;, &quot;bab&quot;, &quot;abc&quot;, &quot;bca&quot;, &quot;cab&quot;, and &quot;abc&quot;.
The good substrings are &quot;abc&quot;, &quot;bca&quot;, &quot;cab&quot;, and &quot;abc&quot;.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 100</code></li>
	<li><code>s</code>​​​​​​ consists of lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='substrings-of-size-three-with-distinct-characters'
class Solution:
    def countGoodSubstrings(self, s: str) -> int:
        n = len(s)
        res = 0
        
        for i in range(n - 2):
            if len(set(s[i:i+3])) == 3:
                res += 1
        
        return res
```

