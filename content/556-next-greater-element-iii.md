---
title: 556. Next Greater Element III
draft: false
tags: 
  - leetcode-medium
  - math
  - two-pointers
  - string
  - weekly-contest-27
  - contest-question
date: 2022-03-21
---

[Problem Link](https://leetcode.com/problems/next-greater-element-iii/)

## Description

---
<p>Given a positive integer <code>n</code>, find <em>the smallest integer which has exactly the same digits existing in the integer</em> <code>n</code> <em>and is greater in value than</em> <code>n</code>. If no such positive integer exists, return <code>-1</code>.</p>

<p><strong>Note</strong> that the returned integer should fit in <strong>32-bit integer</strong>, if there is a valid answer but it does not fit in <strong>32-bit integer</strong>, return <code>-1</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> n = 12
<strong>Output:</strong> 21
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> n = 21
<strong>Output:</strong> -1
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 2<sup>31</sup> - 1</code></li>
</ul>


## Solution

---
### Python3
``` py title='next-greater-element-iii'
class Solution:
    def nextGreaterElement(self, n: int) -> int:
        s = list(str(n))
        
        i = len(s) - 2
        while i >= 0 and s[i] >= s[i+1]:
            i -= 1
        
        if i < 0: return -1
        
        j = len(s) - 1
        while s[j] <= s[i]:
            j -= 1
        
        s[i],s[j] = s[j],s[i]
        
        s[i+1:] = reversed(s[i+1:])
        
        res = int("".join(s))
        
        return res if res < (1 << 31) else -1 
    
```

