---
title: 767. Reorganize String
draft: false
tags: 
  - leetcode-medium
  - hash-table
  - string
  - greedy
  - sorting
  - heap-priority-queue
  - counting
  - weekly-contest-68
  - contest-question
date: 2023-08-23
---

[Problem Link](https://leetcode.com/problems/reorganize-string/)

## Description

---
<p>Given a string <code>s</code>, rearrange the characters of <code>s</code> so that any two adjacent characters are not the same.</p>

<p>Return <em>any possible rearrangement of</em> <code>s</code> <em>or return</em> <code>&quot;&quot;</code> <em>if not possible</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> s = "aab"
<strong>Output:</strong> "aba"
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> s = "aaab"
<strong>Output:</strong> ""
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 500</code></li>
	<li><code>s</code> consists of lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='reorganize-string'
class Solution:
    def reorganizeString(self, s: str) -> str:
        counter = Counter(s)
        pq = []
        res = []
        
        for k, v in counter.items():
            heappush(pq, (-v, k))
        
        while pq:
            v, k = heappop(pq)
            v = -v
            
            if len(res) == 0 or res[-1] != k:
                res.append(k)
                if v - 1 > 0:
                    heappush(pq, (-(v - 1), k))
            else:
                if not pq: return ""
                v2, k2 = heappop(pq)
                v2 = -v2
                
                res.append(k2)
                if v2 - 1 > 0:
                    heappush(pq, (-(v2 - 1), k2))
                
                heappush(pq, (-v, k))
        
        return "".join(res)
```

