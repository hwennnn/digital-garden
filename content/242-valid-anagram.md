---
title: 242. Valid Anagram
draft: false
tags: 
  - leetcode-easy
  - hash-table
  - string
  - sorting
date: 2025-05-19
---

[Problem Link](https://leetcode.com/problems/valid-anagram/)

## Description

---
<p>Given two strings <code>s</code> and <code>t</code>, return <code>true</code> if <code>t</code> is an <span data-keyword="anagram">anagram</span> of <code>s</code>, and <code>false</code> otherwise.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;anagram&quot;, t = &quot;nagaram&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">true</span></p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;rat&quot;, t = &quot;car&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">false</span></p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length, t.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>s</code> and <code>t</code> consist of lowercase English letters.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong> What if the inputs contain Unicode characters? How would you adapt your solution to such a case?</p>


## Solution

---
### Python3
``` py title='valid-anagram'
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        count = [0] * 26

        for x in s:
            count[ord(x) - ord('a')] += 1
        
        for x in t:
            count[ord(x) - ord('a')] -= 1
            if count[ord(x) - ord('a')] < 0:
                return False
        
        return all(x == 0 for x in count)
```

