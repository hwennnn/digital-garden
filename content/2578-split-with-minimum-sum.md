---
title: 2578. Split With Minimum Sum
draft: false
tags: 
  - leetcode-easy
  - math
  - greedy
  - sorting
  - biweekly-contest-99
  - contest-question
date: 2023-03-05
---

[Problem Link](https://leetcode.com/problems/split-with-minimum-sum/)

## Description

---
<p>Given a positive integer <code>num</code>, split it into two non-negative integers <code>num1</code> and <code>num2</code> such that:</p>

<ul>
	<li>The concatenation of <code>num1</code> and <code>num2</code> is a permutation of <code>num</code>.

	<ul>
		<li>In other words, the sum of the number of occurrences of each digit in <code>num1</code> and <code>num2</code> is equal to the number of occurrences of that digit in <code>num</code>.</li>
	</ul>
	</li>
	<li><code>num1</code> and <code>num2</code> can contain leading zeros.</li>
</ul>

<p>Return <em>the <strong>minimum</strong> possible sum of</em> <code>num1</code> <em>and</em> <code>num2</code>.</p>

<p><strong>Notes:</strong></p>

<ul>
	<li>It is guaranteed that <code>num</code> does not contain any leading zeros.</li>
	<li>The order of occurrence of the digits in <code>num1</code> and <code>num2</code> may differ from the order of occurrence of <code>num</code>.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> num = 4325
<strong>Output:</strong> 59
<strong>Explanation:</strong> We can split 4325 so that <code>num1</code> is 24 and <code>num2</code> is 35, giving a sum of 59. We can prove that 59 is indeed the minimal possible sum.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> num = 687
<strong>Output:</strong> 75
<strong>Explanation:</strong> We can split 687 so that <code>num1</code> is 68 and <code>num2</code> is 7, which would give an optimal sum of 75.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>10 &lt;= num &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='split-with-minimum-sum'
class Solution:
    def splitNum(self, num: int) -> int:
        s = list(map(int, str(num)))
        N = len(s)
        s.sort()
        first = second = 0
        
        for i in range(N):
            if i % 2 == 0:
                first = first * 10 + s[i]
            else:
                second = second * 10 + s[i]
        
        return first + second
```

