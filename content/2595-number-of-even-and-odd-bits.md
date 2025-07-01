---
title: 2595. Number of Even and Odd Bits
draft: false
tags: 
  - leetcode-easy
  - bit-manipulation
  - weekly-contest-337
  - contest-question
date: 2023-03-19
---

[Problem Link](https://leetcode.com/problems/number-of-even-and-odd-bits/)

## Description

---
<p>You are given a <strong>positive</strong> integer <code>n</code>.</p>

<p>Let <code>even</code> denote the number of even indices in the binary representation of <code>n</code> with value 1.</p>

<p>Let <code>odd</code> denote the number of odd indices in the binary representation of <code>n</code> with value 1.</p>

<p>Note that bits are indexed from <strong>right to left</strong> in the binary representation of a number.</p>

<p>Return the array <code>[even, odd]</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 50</span></p>

<p><strong>Output:</strong> <span class="example-io">[1,2]</span></p>

<p><strong>Explanation:</strong></p>

<p>The binary representation of 50 is <code>110010</code>.</p>

<p>It contains 1 on indices 1, 4, and 5.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 2</span></p>

<p><strong>Output:</strong> <span class="example-io">[0,1]</span></p>

<p><strong>Explanation:</strong></p>

<p>The binary representation of 2 is <code>10</code>.</p>

<p>It contains 1 only on index 1.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 1000</code></li>
</ul>


## Solution

---
### Python3
``` py title='number-of-even-and-odd-bits'
class Solution:
    def evenOddBit(self, n: int) -> List[int]:
        res = [0, 0]
        b = bin(n)[2:]
        
        for i, x in enumerate(b[::-1]):
            if x == "1":
                if i % 2 == 0:
                    res[0] += 1
                else:
                    res[1] += 1
        
        return res
        
```

