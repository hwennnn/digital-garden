---
title: 2446. Determine if Two Events Have Conflict
draft: false
tags: 
  - leetcode-easy
  - array
  - string
  - weekly-contest-316
  - contest-question
date: 2022-10-23
---

[Problem Link](https://leetcode.com/problems/determine-if-two-events-have-conflict/)

## Description

---
<p>You are given two arrays of strings that represent two inclusive events that happened <strong>on the same day</strong>, <code>event1</code> and <code>event2</code>, where:</p>

<ul>
	<li><code>event1 = [startTime<sub>1</sub>, endTime<sub>1</sub>]</code> and</li>
	<li><code>event2 = [startTime<sub>2</sub>, endTime<sub>2</sub>]</code>.</li>
</ul>

<p>Event times are valid 24 hours format in the form of <code>HH:MM</code>.</p>

<p>A <strong>conflict</strong> happens when two events have some non-empty intersection (i.e., some moment is common to both events).</p>

<p>Return <code>true</code><em> if there is a conflict between two events. Otherwise, return </em><code>false</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> event1 = [&quot;01:15&quot;,&quot;02:00&quot;], event2 = [&quot;02:00&quot;,&quot;03:00&quot;]
<strong>Output:</strong> true
<strong>Explanation:</strong> The two events intersect at time 2:00.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> event1 = [&quot;01:00&quot;,&quot;02:00&quot;], event2 = [&quot;01:20&quot;,&quot;03:00&quot;]
<strong>Output:</strong> true
<strong>Explanation:</strong> The two events intersect starting from 01:20 to 02:00.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> event1 = [&quot;10:00&quot;,&quot;11:00&quot;], event2 = [&quot;14:00&quot;,&quot;15:00&quot;]
<strong>Output:</strong> false
<strong>Explanation:</strong> The two events do not intersect.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>event1.length == event2.length == 2</code></li>
	<li><code>event1[i].length == event2[i].length == 5</code></li>
	<li><code>startTime<sub>1</sub> &lt;= endTime<sub>1</sub></code></li>
	<li><code>startTime<sub>2</sub> &lt;= endTime<sub>2</sub></code></li>
	<li>All the event times follow the <code>HH:MM</code> format.</li>
</ul>


## Solution

---
### Python3
``` py title='determine-if-two-events-have-conflict'
class Solution:
    def haveConflict(self, event1: List[str], event2: List[str]) -> bool:
        
        def parse(event):
            hours, minutes = map(int, event.split(":"))
            
            return hours * 60 + minutes
        
        s1, e1 = map(parse, event1)
        s2, e2 = map(parse, event2)
        
        return s1 <= s2 <= e1 or s2 <= s1 <= e2
```

