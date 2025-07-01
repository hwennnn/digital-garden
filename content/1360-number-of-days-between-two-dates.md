---
title: 1360. Number of Days Between Two Dates
draft: false
tags: 
  - leetcode-easy
  - math
  - string
  - weekly-contest-177
  - contest-question
date: 2020-10-16
---

[Problem Link](https://leetcode.com/problems/number-of-days-between-two-dates/)

## Description

---
<p>Write a program to count the number of days between two dates.</p>

<p>The two dates are given as strings, their format is <code>YYYY-MM-DD</code>&nbsp;as shown in the examples.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> date1 = "2019-06-29", date2 = "2019-06-30"
<strong>Output:</strong> 1
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> date1 = "2020-01-15", date2 = "2019-12-31"
<strong>Output:</strong> 15
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The given dates are valid&nbsp;dates between the years <code>1971</code> and <code>2100</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='number-of-days-between-two-dates'
class Solution:
    
    def daysBetweenDates(self, date1: str, date2: str) -> int:
        def f(date):
            y, m, d = map(int, date.split('-'))
            if m < 3:
                m += 12
                y -= 1
            return 365 * y + y // 4 + y // 400 - y // 100 + d + (153 * m + 8) // 5
        
        return abs(f(date1) - f(date2))
```

