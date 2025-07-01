---
title: 2571. Minimum Operations to Reduce an Integer to 0
draft: false
tags: 
  - leetcode-medium
  - dynamic-programming
  - greedy
  - bit-manipulation
  - weekly-contest-333
  - contest-question
date: 2023-02-26
---

[Problem Link](https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/)

## Description

---
<p>You are given a positive integer <code>n</code>, you can do the following operation <strong>any</strong> number of times:</p>

<ul>
	<li>Add or subtract a <strong>power</strong> of <code>2</code> from <code>n</code>.</li>
</ul>

<p>Return <em>the <strong>minimum</strong> number of operations to make </em><code>n</code><em> equal to </em><code>0</code>.</p>

<p>A number <code>x</code> is power of <code>2</code> if <code>x == 2<sup>i</sup></code>&nbsp;where <code>i &gt;= 0</code><em>.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 39
<strong>Output:</strong> 3
<strong>Explanation:</strong> We can do the following operations:
- Add 2<sup>0</sup> = 1 to n, so now n = 40.
- Subtract 2<sup>3</sup> = 8 from n, so now n = 32.
- Subtract 2<sup>5</sup> = 32 from n, so now n = 0.
It can be shown that 3 is the minimum number of operations we need to make n equal to 0.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 54
<strong>Output:</strong> 3
<strong>Explanation:</strong> We can do the following operations:
- Add 2<sup>1</sup> = 2 to n, so now n = 56.
- Add 2<sup>3</sup> = 8 to n, so now n = 64.
- Subtract 2<sup>6</sup> = 64 from n, so now n = 0.
So the minimum number of operations is 3.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='minimum-operations-to-reduce-an-integer-to-0'
class Solution:
    def minOperations(self, N: int) -> int:
        res = 0
        
        while N > 0:
            k = 1
            while 1 << k < N:
                k += 1
            
            N = min((1 << k) - N, N - (1 << (k - 1)))
            res += 1
        
        return res
```

