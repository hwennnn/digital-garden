---
title: 526. Beautiful Arrangement
draft: false
tags: 
  - leetcode-medium
  - array
  - dynamic-programming
  - backtracking
  - bit-manipulation
  - bitmask
  - weekly-contest-20
  - contest-question
date: 2021-01-03
---

[Problem Link](https://leetcode.com/problems/beautiful-arrangement/)

## Description

---
<p>Suppose you have <code>n</code> integers labeled <code>1</code> through <code>n</code>. A permutation of those <code>n</code> integers <code>perm</code> (<strong>1-indexed</strong>) is considered a <strong>beautiful arrangement</strong> if for every <code>i</code> (<code>1 &lt;= i &lt;= n</code>), <strong>either</strong> of the following is true:</p>

<ul>
	<li><code>perm[i]</code> is divisible by <code>i</code>.</li>
	<li><code>i</code> is divisible by <code>perm[i]</code>.</li>
</ul>

<p>Given an integer <code>n</code>, return <em>the <strong>number</strong> of the <strong>beautiful arrangements</strong> that you can construct</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 2
<strong>Output:</strong> 2
<b>Explanation:</b> 
The first beautiful arrangement is [1,2]:
    - perm[1] = 1 is divisible by i = 1
    - perm[2] = 2 is divisible by i = 2
The second beautiful arrangement is [2,1]:
    - perm[1] = 2 is divisible by i = 1
    - i = 2 is divisible by perm[2] = 1
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 1
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 15</code></li>
</ul>


## Solution

---
### Python3
``` py title='beautiful-arrangement'
class Solution:
    def countArrangement(self, n: int) -> int:
        
        def dfs(count, used):
            if count == 0: return 1
            
            res = 0
            for i in range(1, n+1):
                if not used[i] and (not i%count or not count%i):
                    used[i] = True
                    res += dfs(count-1, used)
                    used[i] = False
            
            return res
        
        return dfs(n, [False]*(n+1))
```

