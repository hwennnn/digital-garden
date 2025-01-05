---
title: 1238. Circular Permutation in Binary Representation
draft: false
tags: 
  - leetcode-medium
  - math
  - backtracking
  - bit-manipulation
date: 2021-01-02
---

[Problem Link](https://leetcode.com/problems/circular-permutation-in-binary-representation/)

## Description

---
<p>Given 2 integers <code>n</code> and <code>start</code>. Your task is return <strong>any</strong> permutation <code>p</code>&nbsp;of <code>(0,1,2.....,2^n -1) </code>such that :</p>

<ul>
	<li><code>p[0] = start</code></li>
	<li><code>p[i]</code> and <code>p[i+1]</code>&nbsp;differ by only one bit in their binary representation.</li>
	<li><code>p[0]</code> and <code>p[2^n -1]</code>&nbsp;must also differ by only one bit in their binary representation.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 2, start = 3
<strong>Output:</strong> [3,2,0,1]
<strong>Explanation:</strong> The binary representation of the permutation is (11,10,00,01). 
All the adjacent element differ by one bit. Another valid permutation is [3,1,0,2]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 3, start = 2
<strong>Output:</strong> [2,6,7,5,4,0,1,3]
<strong>Explanation:</strong> The binary representation of the permutation is (010,110,111,101,100,000,001,011).
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 16</code></li>
	<li><code>0 &lt;= start&nbsp;&lt;&nbsp;2 ^ n</code></li>
</ul>

## Solution

---
### Python3
``` py title='circular-permutation-in-binary-representation'
class Solution:
    def circularPermutation(self, n: int, start: int) -> List[int]:
        res = []
        
        for i in range(1 << n):
            res.append(i ^ i >> 1)
        
        i = res.index(start)
        return res[i:] + res[:i]

            

```
