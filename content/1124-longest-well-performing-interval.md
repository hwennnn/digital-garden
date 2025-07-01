---
title: 1124. Longest Well-Performing Interval
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - stack
  - monotonic-stack
  - prefix-sum
  - weekly-contest-145
  - contest-question
date: 2021-05-23
---

[Problem Link](https://leetcode.com/problems/longest-well-performing-interval/)

## Description

---
<p>We are given <code>hours</code>, a list of the number of hours worked per day for a given employee.</p>

<p>A day is considered to be a <em>tiring day</em> if and only if the number of hours worked is (strictly) greater than <code>8</code>.</p>

<p>A <em>well-performing interval</em> is an interval of days for which the number of tiring days is strictly larger than the number of non-tiring days.</p>

<p>Return the length of the longest well-performing interval.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> hours = [9,9,6,0,6,6,9]
<strong>Output:</strong> 3
<strong>Explanation: </strong>The longest well-performing interval is [9,9,6].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> hours = [6,6,6]
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= hours.length &lt;= 10<sup>4</sup></code></li>
	<li><code>0 &lt;= hours[i] &lt;= 16</code></li>
</ul>


## Solution

---
### Python3
``` py title='longest-well-performing-interval'
class Solution:
    def longestWPI(self, hours: List[int]) -> int:
        n = len(hours)
        seen = {}
        res = v = 0
        
        for i, h in enumerate(hours):
            v = v + 1 if h > 8 else v - 1
                        
            if v > 0:
                res = i + 1
                
            seen.setdefault(v, i)

            if v - 1 in seen:
                res = max(res, i - seen[v - 1])
        
        return res
```

