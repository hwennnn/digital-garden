---
title: 3223. Minimum Length of String After Operations
draft: false
tags: 
  - leetcode-medium
  - hash-table
  - string
  - counting
  - biweekly-contest-135
  - contest-question
date: 2025-01-13
---

[Problem Link](https://leetcode.com/problems/minimum-length-of-string-after-operations/)

## Description

---
<p>You are given a string <code>s</code>.</p>

<p>You can perform the following process on <code>s</code> <strong>any</strong> number of times:</p>

<ul>
	<li>Choose an index <code>i</code> in the string such that there is <strong>at least</strong> one character to the left of index <code>i</code> that is equal to <code>s[i]</code>, and <strong>at least</strong> one character to the right that is also equal to <code>s[i]</code>.</li>
	<li>Delete the <strong>closest</strong> occurrence of <code>s[i]</code> located to the <strong>left</strong> of <code>i</code>.</li>
	<li>Delete the <strong>closest</strong> occurrence of <code>s[i]</code> located to the <strong>right</strong> of <code>i</code>.</li>
</ul>

<p>Return the <strong>minimum</strong> length of the final string <code>s</code> that you can achieve.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;abaacbcbb&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">5</span></p>

<p><strong>Explanation:</strong><br />
We do the following operations:</p>

<ul>
	<li>Choose index 2, then remove the characters at indices 0 and 3. The resulting string is <code>s = &quot;bacbcbb&quot;</code>.</li>
	<li>Choose index 3, then remove the characters at indices 0 and 5. The resulting string is <code>s = &quot;acbcb&quot;</code>.</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;aa&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">2</span></p>

<p><strong>Explanation:</strong><br />
We cannot perform any operations, so we return the length of the original string.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 2 * 10<sup>5</sup></code></li>
	<li><code>s</code> consists only of lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='minimum-length-of-string-after-operations'
class Solution:
    def minimumLength(self, s: str) -> int:
        N = len(s)
        count = [0] * 26

        for i, x in enumerate(s):
            k = ord(x) - ord('a')
            if count[k] >= 2:
                count[k] -= 2
            
            count[k] += 1
        
        return sum(count)
```

