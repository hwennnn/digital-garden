---
title: 2589. Minimum Time to Complete All Tasks
draft: false
tags: 
  - leetcode-hard
  - array
  - binary-search
  - stack
  - greedy
  - sorting
  - weekly-contest-336
  - contest-question
date: 2023-03-12
---

[Problem Link](https://leetcode.com/problems/minimum-time-to-complete-all-tasks/)

## Description

---
<p>There is a computer that can run an unlimited number of tasks <strong>at the same time</strong>. You are given a 2D integer array <code>tasks</code> where <code>tasks[i] = [start<sub>i</sub>, end<sub>i</sub>, duration<sub>i</sub>]</code> indicates that the <code>i<sup>th</sup></code> task should run for a total of <code>duration<sub>i</sub></code> seconds (not necessarily continuous) within the <strong>inclusive</strong> time range <code>[start<sub>i</sub>, end<sub>i</sub>]</code>.</p>

<p>You may turn on the computer only when it needs to run a task. You can also turn it off if it is idle.</p>

<p>Return <em>the minimum time during which the computer should be turned on to complete all tasks</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> tasks = [[2,3,1],[4,5,1],[1,5,2]]
<strong>Output:</strong> 2
<strong>Explanation:</strong> 
- The first task can be run in the inclusive time range [2, 2].
- The second task can be run in the inclusive time range [5, 5].
- The third task can be run in the two inclusive time ranges [2, 2] and [5, 5].
The computer will be on for a total of 2 seconds.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> tasks = [[1,3,2],[2,5,3],[5,6,2]]
<strong>Output:</strong> 4
<strong>Explanation:</strong> 
- The first task can be run in the inclusive time range [2, 3].
- The second task can be run in the inclusive time ranges [2, 3] and [5, 5].
- The third task can be run in the two inclusive time range [5, 6].
The computer will be on for a total of 4 seconds.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= tasks.length &lt;= 2000</code></li>
	<li><code>tasks[i].length == 3</code></li>
	<li><code>1 &lt;= start<sub>i</sub>, end<sub>i</sub> &lt;= 2000</code></li>
	<li><code>1 &lt;= duration<sub>i</sub> &lt;= end<sub>i</sub> - start<sub>i</sub> + 1 </code></li>
</ul>


## Solution

---
### Python3
``` py title='minimum-time-to-complete-all-tasks'
class Solution:
    def findMinimumTime(self, tasks: List[List[int]]) -> int:
        N = len(tasks)
        A = [False] * 2001
        
        tasks.sort(key = lambda x: (x[1], x[0]))
        
        for left, right, duration in tasks:
            for i in range(left, right + 1):
                if A[i]:
                    duration -= 1
            
            j = right
            while duration > 0:
                if not A[j]:
                    duration -= 1
                    A[j] = True
                
                j -= 1
            
        return sum(1 for x in A if x == True)
        
        
```

