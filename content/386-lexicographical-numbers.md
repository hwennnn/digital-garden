---
title: 386. Lexicographical Numbers
draft: false
tags: 
  - leetcode-medium
  - depth-first-search
  - trie
date: 2025-06-08
---

[Problem Link](https://leetcode.com/problems/lexicographical-numbers/)

## Description

---
<p>Given an integer <code>n</code>, return all the numbers in the range <code>[1, n]</code> sorted in lexicographical order.</p>

<p>You must write an algorithm that runs in&nbsp;<code>O(n)</code>&nbsp;time and uses <code>O(1)</code> extra space.&nbsp;</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> n = 13
<strong>Output:</strong> [1,10,11,12,13,2,3,4,5,6,7,8,9]
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> n = 2
<strong>Output:</strong> [1,2]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 5 * 10<sup>4</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='lexicographical-numbers'
class Solution:
    def lexicalOrder(self, n: int) -> List[int]:
        res = []

        def go(curr):
            if curr > n: return
            
            res.append(curr)

            for k in range(10):
                go(curr * 10 + k)
        
        for k in range(1, 10):
            go(k)
        
        return res

```

