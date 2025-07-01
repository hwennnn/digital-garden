---
title: 3099. Harshad Number
draft: false
tags: 
  - leetcode-easy
  - math
  - weekly-contest-391
  - contest-question
date: 2024-03-31
---

[Problem Link](https://leetcode.com/problems/harshad-number/)

## Description

---
<p>An integer divisible by the <strong>sum</strong> of its digits is said to be a <strong>Harshad</strong> number. You are given an integer <code>x</code>. Return<em> the sum of the digits </em>of<em> </em><code>x</code><em> </em>if<em> </em><code>x</code><em> </em>is a <strong>Harshad</strong> number, otherwise, return<em> </em><code>-1</code><em>.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">x = 18</span></p>

<p><strong>Output:</strong> <span class="example-io">9</span></p>

<p><strong>Explanation:</strong></p>

<p>The sum of digits of <code>x</code> is <code>9</code>. <code>18</code> is divisible by <code>9</code>. So <code>18</code> is a Harshad number and the answer is <code>9</code>.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">x = 23</span></p>

<p><strong>Output:</strong> <span class="example-io">-1</span></p>

<p><strong>Explanation:</strong></p>

<p>The sum of digits of <code>x</code> is <code>5</code>. <code>23</code> is not divisible by <code>5</code>. So <code>23</code> is not a Harshad number and the answer is <code>-1</code>.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= x &lt;= 100</code></li>
</ul>


## Solution

---
### Python3
``` py title='harshad-number'
class Solution:
    def sumOfTheDigitsOfHarshadNumber(self, x: int) -> int:
        d = sum(int(k) for k in str(x))
        
        return d if x % d == 0 else -1
```

