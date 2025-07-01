---
title: 3216. Lexicographically Smallest String After a Swap
draft: false
tags: 
  - leetcode-easy
  - string
  - greedy
  - weekly-contest-406
  - contest-question
date: 2024-07-14
---

[Problem Link](https://leetcode.com/problems/lexicographically-smallest-string-after-a-swap/)

## Description

---
<p>Given a string <code>s</code> containing only digits, return the <span data-keyword="lexicographically-smaller-string">lexicographically smallest string</span> that can be obtained after swapping <strong>adjacent</strong> digits in <code>s</code> with the same <strong>parity</strong> at most <strong>once</strong>.</p>

<p>Digits have the same parity if both are odd or both are even. For example, 5 and 9, as well as 2 and 4, have the same parity, while 6 and 9 do not.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;45320&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">&quot;43520&quot;</span></p>

<p><strong>Explanation: </strong></p>

<p><code>s[1] == &#39;5&#39;</code> and <code>s[2] == &#39;3&#39;</code> both have the same parity, and swapping them results in the lexicographically smallest string.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;001&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">&quot;001&quot;</span></p>

<p><strong>Explanation:</strong></p>

<p>There is no need to perform a swap because <code>s</code> is already the lexicographically smallest.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= s.length &lt;= 100</code></li>
	<li><code>s</code> consists only of digits.</li>
</ul>


## Solution

---
### Python3
``` py title='lexicographically-smallest-string-after-a-swap'
class Solution:
    def getSmallestString(self, s: str) -> str:
        N = len(s)
        res = list(s)
        
        for i in range(1, N):
            curr, prev = int(s[i]) % 2, int(s[i - 1]) % 2
            
            if curr == prev and int(s[i]) < int(s[i - 1]):
                res[i], res[i - 1] = s[i - 1], s[i]
                break
        
        return "".join(res)
```

