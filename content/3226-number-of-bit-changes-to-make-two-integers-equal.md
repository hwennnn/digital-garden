---
title: 3226. Number of Bit Changes to Make Two Integers Equal
draft: false
tags: 
  - leetcode-easy
  - bit-manipulation
  - weekly-contest-407
  - contest-question
date: 2024-07-21
---

[Problem Link](https://leetcode.com/problems/number-of-bit-changes-to-make-two-integers-equal/)

## Description

---
<p>You are given two positive integers <code>n</code> and <code>k</code>.</p>

<p>You can choose <strong>any</strong> bit in the <strong>binary representation</strong> of <code>n</code> that is equal to 1 and change it to 0.</p>

<p>Return the <em>number of changes</em> needed to make <code>n</code> equal to <code>k</code>. If it is impossible, return -1.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 13, k = 4</span></p>

<p><strong>Output:</strong> <span class="example-io">2</span></p>

<p><strong>Explanation:</strong><br />
Initially, the binary representations of <code>n</code> and <code>k</code> are <code>n = (1101)<sub>2</sub></code> and <code>k = (0100)<sub>2</sub></code>.<br />
We can change the first and fourth bits of <code>n</code>. The resulting integer is <code>n = (<u><strong>0</strong></u>10<u><strong>0</strong></u>)<sub>2</sub> = k</code>.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 21, k = 21</span></p>

<p><strong>Output:</strong> <span class="example-io">0</span></p>

<p><strong>Explanation:</strong><br />
<code>n</code> and <code>k</code> are already equal, so no changes are needed.</p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 14, k = 13</span></p>

<p><strong>Output:</strong> <span class="example-io">-1</span></p>

<p><strong>Explanation:</strong><br />
It is not possible to make <code>n</code> equal to <code>k</code>.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n, k &lt;= 10<sup>6</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='number-of-bit-changes-to-make-two-integers-equal'
class Solution:
    def minChanges(self, n: int, k: int) -> int:
        if n == k: return 0
        
        res = 0
        
        for bit in range(32):
            nb = n & (1 << bit) > 0
            kb = k & (1 << bit) > 0
            
            if nb == kb: continue
                
            if nb and not kb:
                res += 1
                continue
            else:
                return -1

        return res
```

