---
title: 1854. Maximum Population Year
draft: false
tags: 
  - leetcode-easy
  - array
  - counting
  - prefix-sum
  - weekly-contest-240
  - contest-question
date: 2021-05-09
---

[Problem Link](https://leetcode.com/problems/maximum-population-year/)

## Description

---
<p>You are given a 2D integer array <code>logs</code> where each <code>logs[i] = [birth<sub>i</sub>, death<sub>i</sub>]</code> indicates the birth and death years of the <code>i<sup>th</sup></code> person.</p>

<p>The <strong>population</strong> of some year <code>x</code> is the number of people alive during that year. The <code>i<sup>th</sup></code> person is counted in year <code>x</code>&#39;s population if <code>x</code> is in the <strong>inclusive</strong> range <code>[birth<sub>i</sub>, death<sub>i</sub> - 1]</code>. Note that the person is <strong>not</strong> counted in the year that they die.</p>

<p>Return <em>the <strong>earliest</strong> year with the <strong>maximum population</strong></em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> logs = [[1993,1999],[2000,2010]]
<strong>Output:</strong> 1993
<strong>Explanation:</strong> The maximum population is 1, and 1993 is the earliest year with this population.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> logs = [[1950,1961],[1960,1971],[1970,1981]]
<strong>Output:</strong> 1960
<strong>Explanation:</strong> 
The maximum population is 2, and it had happened in years 1960 and 1970.
The earlier year between them is 1960.</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= logs.length &lt;= 100</code></li>
	<li><code>1950 &lt;= birth<sub>i</sub> &lt; death<sub>i</sub> &lt;= 2050</code></li>
</ul>


## Solution

---
### Python3
``` py title='maximum-population-year'
class Solution:
    def maximumPopulation(self, logs: List[List[int]]) -> int:
        people = [0] * 2051
        
        for b,d in logs:
            people[b] += 1
            people[d] -= 1

        for i in range(1, 2051):
            people[i] += people[i - 1]
            
        res = 0
        mmax = float('-inf')
        for i,x in enumerate(people):
            if x > mmax:
                res = i
                mmax = x
        
        return res
```

