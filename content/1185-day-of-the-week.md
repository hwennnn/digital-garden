---
title: 1185. Day of the Week
draft: false
tags: 
  - leetcode-easy
  - math
date: 2021-05-03
---

[Problem Link](https://leetcode.com/problems/day-of-the-week/)

## Description

---
<p>Given a date, return the corresponding day of the week for that date.</p>

<p>The input is given as three integers representing the <code>day</code>, <code>month</code> and <code>year</code> respectively.</p>

<p>Return the answer as one of the following values&nbsp;<code>{&quot;Sunday&quot;, &quot;Monday&quot;, &quot;Tuesday&quot;, &quot;Wednesday&quot;, &quot;Thursday&quot;, &quot;Friday&quot;, &quot;Saturday&quot;}</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> day = 31, month = 8, year = 2019
<strong>Output:</strong> &quot;Saturday&quot;
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> day = 18, month = 7, year = 1999
<strong>Output:</strong> &quot;Sunday&quot;
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> day = 15, month = 8, year = 1993
<strong>Output:</strong> &quot;Sunday&quot;
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The given dates are valid dates between the years <code>1971</code> and <code>2100</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='day-of-the-week'
class Solution:
    def dayOfTheWeek(self, d, m, y):
        days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        from datetime import datetime
        return days[datetime(y, m, d).weekday()]
        
```
