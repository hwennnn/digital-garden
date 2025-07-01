---
title: 1716. Calculate Money in Leetcode Bank
draft: false
tags: 
  - leetcode-easy
  - math
  - biweekly-contest-43
  - contest-question
date: 2023-12-06
---

[Problem Link](https://leetcode.com/problems/calculate-money-in-leetcode-bank/)

## Description

---
<p>Hercy wants to save money for his first car. He puts money in the Leetcode&nbsp;bank <strong>every day</strong>.</p>

<p>He starts by putting in <code>$1</code> on Monday, the first day. Every day from Tuesday to Sunday, he will put in <code>$1</code> more than the day before. On every subsequent Monday, he will put in <code>$1</code> more than the <strong>previous Monday</strong>.<span style="display: none;"> </span></p>

<p>Given <code>n</code>, return <em>the total amount of money he will have in the Leetcode bank at the end of the </em><code>n<sup>th</sup></code><em> day.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 4
<strong>Output:</strong> 10
<strong>Explanation:</strong>&nbsp;After the 4<sup>th</sup> day, the total is 1 + 2 + 3 + 4 = 10.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 10
<strong>Output:</strong> 37
<strong>Explanation:</strong>&nbsp;After the 10<sup>th</sup> day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4) = 37. Notice that on the 2<sup>nd</sup> Monday, Hercy only puts in $2.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> n = 20
<strong>Output:</strong> 96
<strong>Explanation:</strong>&nbsp;After the 20<sup>th</sup> day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4 + 5 + 6 + 7 + 8) + (3 + 4 + 5 + 6 + 7 + 8) = 96.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 1000</code></li>
</ul>


## Solution

---
### Python3
``` py title='calculate-money-in-leetcode-bank'
class Solution:
    def totalMoney(self, n: int) -> int:
        # Complete weeks sum = 28, 35, 52
        # sum of AP = (n * [2a + (n – 1) * d]) / 2

        completeWeeks = n // 7
        remainingDays = n % 7
        startMoney = completeWeeks + 1

        completeWeeksSum = (completeWeeks * (2 * 28 + (completeWeeks - 1) * 7)) // 2
        remSum = (remainingDays * (2 * startMoney + (remainingDays - 1))) // 2

        return completeWeeksSum + remSum
```

