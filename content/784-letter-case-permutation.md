---
title: 784. Letter Case Permutation
draft: false
tags: 
  - leetcode-medium
  - string
  - backtracking
  - bit-manipulation
  - weekly-contest-72
  - contest-question
date: 2021-09-28
---

[Problem Link](https://leetcode.com/problems/letter-case-permutation/)

## Description

---
<p>Given a string <code>s</code>, you&nbsp;can transform every letter individually to be lowercase or uppercase to create another string.</p>

<p>Return <em>a list of all possible strings we could create</em>. Return the output in <strong>any order</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;a1b2&quot;
<strong>Output:</strong> [&quot;a1b2&quot;,&quot;a1B2&quot;,&quot;A1b2&quot;,&quot;A1B2&quot;]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;3z4&quot;
<strong>Output:</strong> [&quot;3z4&quot;,&quot;3Z4&quot;]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 12</code></li>
	<li><code>s</code> consists of lowercase English letters, uppercase English letters, and digits.</li>
</ul>


## Solution

---
### Python3
``` py title='letter-case-permutation'
class Solution:
    def letterCasePermutation(self, S: str) -> List[str]:
        res = []
        n = len(S)
        
        def backtrack(i, s):
            if i == n: 
                res.append("".join(s))
                return
            
            if s[i].isalpha():
                s[i] = s[i].upper()
                backtrack(i+1, s)
                
                s[i] = s[i].lower()
                backtrack(i+1, s)
            
            else:
                backtrack(i+1, s)
        
        backtrack(0, list(S))
        
        return res
```

