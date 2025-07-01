---
title: 1073. Adding Two Negabinary Numbers
draft: false
tags: 
  - leetcode-medium
  - array
  - math
  - weekly-contest-139
  - contest-question
date: 2021-05-30
---

[Problem Link](https://leetcode.com/problems/adding-two-negabinary-numbers/)

## Description

---
<p>Given two numbers <code>arr1</code> and <code>arr2</code> in base <strong>-2</strong>, return the result of adding them together.</p>

<p>Each number is given in <em>array format</em>:&nbsp; as an array of 0s and 1s, from most significant bit to least significant bit.&nbsp; For example, <code>arr = [1,1,0,1]</code> represents the number <code>(-2)^3&nbsp;+ (-2)^2 + (-2)^0 = -3</code>.&nbsp; A number <code>arr</code> in <em>array, format</em> is also guaranteed to have no leading zeros: either&nbsp;<code>arr == [0]</code> or <code>arr[0] == 1</code>.</p>

<p>Return the result of adding <code>arr1</code> and <code>arr2</code> in the same format: as an array of 0s and 1s with no leading zeros.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> arr1 = [1,1,1,1,1], arr2 = [1,0,1]
<strong>Output:</strong> [1,0,0,0,0]
<strong>Explanation: </strong>arr1 represents 11, arr2 represents 5, the output represents 16.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> arr1 = [0], arr2 = [0]
<strong>Output:</strong> [0]
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> arr1 = [0], arr2 = [1]
<strong>Output:</strong> [1]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= arr1.length,&nbsp;arr2.length &lt;= 1000</code></li>
	<li><code>arr1[i]</code>&nbsp;and <code>arr2[i]</code> are&nbsp;<code>0</code> or <code>1</code></li>
	<li><code>arr1</code> and <code>arr2</code> have no leading zeros</li>
</ul>


## Solution

---
### Python3
``` py title='adding-two-negabinary-numbers'
class Solution:
    def addNegabinary(self, A: List[int], B: List[int]) -> List[int]:
        res = []
        carry = 0
        
        while A or B or carry:
            carry += (A or [0]).pop() + (B or [0]).pop()
            res.append(carry & 1)
            carry = -(carry >> 1)
        
        while len(res) > 1 and res[-1] == 0: res.pop()
        
        return res[::-1]
```

