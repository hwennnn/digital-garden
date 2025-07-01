---
title: 1624. Largest Substring Between Two Equal Characters
draft: false
tags: 
  - leetcode-easy
  - hash-table
  - string
  - weekly-contest-211
  - contest-question
date: 2023-12-31
---

[Problem Link](https://leetcode.com/problems/largest-substring-between-two-equal-characters/)

## Description

---
<p>Given a string <code>s</code>, return <em>the length of the longest substring between two equal characters, excluding the two characters.</em> If there is no such substring return <code>-1</code>.</p>

<p>A <strong>substring</strong> is a contiguous sequence of characters within a string.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;aa&quot;
<strong>Output:</strong> 0
<strong>Explanation:</strong> The optimal substring here is an empty substring between the two <code>&#39;a&#39;s</code>.</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;abca&quot;
<strong>Output:</strong> 2
<strong>Explanation:</strong> The optimal substring here is &quot;bc&quot;.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;cbzxy&quot;
<strong>Output:</strong> -1
<strong>Explanation:</strong> There are no characters that appear twice in s.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 300</code></li>
	<li><code>s</code> contains only lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='largest-substring-between-two-equal-characters'
class Solution:
    def maxLengthBetweenEqualCharacters(self, s: str) -> int:
        res = -1
        prev = {}

        for i, x in enumerate(s):
            if x in prev:
                res = max(res, i - prev[x] - 1)

            if x not in prev:
                prev[x] = i

        return res
```

