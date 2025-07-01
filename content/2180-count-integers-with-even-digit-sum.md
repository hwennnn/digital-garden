---
title: 2180. Count Integers With Even Digit Sum
draft: false
tags: 
  - leetcode-easy
  - math
  - simulation
  - weekly-contest-281
  - contest-question
date: 2022-02-20
---

[Problem Link](https://leetcode.com/problems/count-integers-with-even-digit-sum/)

## Description

---
<p>Given a positive integer <code>num</code>, return <em>the number of positive integers <strong>less than or equal to</strong></em> <code>num</code> <em>whose digit sums are <strong>even</strong></em>.</p>

<p>The <strong>digit sum</strong> of a positive integer is the sum of all its digits.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> num = 4
<strong>Output:</strong> 2
<strong>Explanation:</strong>
The only integers less than or equal to 4 whose digit sums are even are 2 and 4.    
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> num = 30
<strong>Output:</strong> 14
<strong>Explanation:</strong>
The 14 integers less than or equal to 30 whose digit sums are even are
2, 4, 6, 8, 11, 13, 15, 17, 19, 20, 22, 24, 26, and 28.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= num &lt;= 1000</code></li>
</ul>


## Solution

---
### Python3
``` py title='count-integers-with-even-digit-sum'
class Solution:
    def countEven(self, num: int) -> int:
        res = 0
        
        for x in range(2, num + 1):
            s = sum(int(c) for c in str(x))
            if s % 2 == 0:
                res += 1
        
        return res
```

