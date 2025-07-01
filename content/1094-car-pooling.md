---
title: 1094. Car Pooling
draft: false
tags: 
  - leetcode-medium
  - array
  - sorting
  - heap-priority-queue
  - simulation
  - prefix-sum
  - weekly-contest-142
  - contest-question
date: 2022-01-06
---

[Problem Link](https://leetcode.com/problems/car-pooling/)

## Description

---
<p>There is a car with <code>capacity</code> empty seats. The vehicle only drives east (i.e., it cannot turn around and drive west).</p>

<p>You are given the integer <code>capacity</code> and an array <code>trips</code> where <code>trips[i] = [numPassengers<sub>i</sub>, from<sub>i</sub>, to<sub>i</sub>]</code> indicates that the <code>i<sup>th</sup></code> trip has <code>numPassengers<sub>i</sub></code> passengers and the locations to pick them up and drop them off are <code>from<sub>i</sub></code> and <code>to<sub>i</sub></code> respectively. The locations are given as the number of kilometers due east from the car&#39;s initial location.</p>

<p>Return <code>true</code><em> if it is possible to pick up and drop off all passengers for all the given trips, or </em><code>false</code><em> otherwise</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> trips = [[2,1,5],[3,3,7]], capacity = 4
<strong>Output:</strong> false
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> trips = [[2,1,5],[3,3,7]], capacity = 5
<strong>Output:</strong> true
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= trips.length &lt;= 1000</code></li>
	<li><code>trips[i].length == 3</code></li>
	<li><code>1 &lt;= numPassengers<sub>i</sub> &lt;= 100</code></li>
	<li><code>0 &lt;= from<sub>i</sub> &lt; to<sub>i</sub> &lt;= 1000</code></li>
	<li><code>1 &lt;= capacity &lt;= 10<sup>5</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='car-pooling'
class Solution:
    def carPooling(self, trips: List[List[int]], capacity: int) -> bool:
        events = []
        
        for num, start, end in trips:
            events.append((start, 1, num))
            events.append((end, -1, num))
        
        events.sort()
        
        for _, t, x in events:
            if t == 1:
                capacity -= x
            else:
                capacity += x
            if capacity < 0: return False
        
        return True
```

