---
title: 1349. Maximum Students Taking Exam
draft: false
tags: 
  - leetcode-hard
  - array
  - dynamic-programming
  - bit-manipulation
  - matrix
  - bitmask
  - weekly-contest-175
  - contest-question
date: 2022-01-04
---

[Problem Link](https://leetcode.com/problems/maximum-students-taking-exam/)

## Description

---
<p>Given a <code>m&nbsp;* n</code>&nbsp;matrix <code>seats</code>&nbsp;&nbsp;that represent seats distributions&nbsp;in a classroom.&nbsp;If a seat&nbsp;is&nbsp;broken, it is denoted by <code>&#39;#&#39;</code> character otherwise it is denoted by a <code>&#39;.&#39;</code> character.</p>

<p>Students can see the answers of those sitting next to the left, right, upper left and upper right, but he cannot see the answers of the student sitting&nbsp;directly in front or behind him. Return the <strong>maximum </strong>number of students that can take the exam together&nbsp;without any cheating being possible.</p>

<p>Students must be placed in seats in good condition.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img height="200" src="https://assets.leetcode.com/uploads/2020/01/29/image.png" width="339" />
<pre>
<strong>Input:</strong> seats = [[&quot;#&quot;,&quot;.&quot;,&quot;#&quot;,&quot;#&quot;,&quot;.&quot;,&quot;#&quot;],
&nbsp;               [&quot;.&quot;,&quot;#&quot;,&quot;#&quot;,&quot;#&quot;,&quot;#&quot;,&quot;.&quot;],
&nbsp;               [&quot;#&quot;,&quot;.&quot;,&quot;#&quot;,&quot;#&quot;,&quot;.&quot;,&quot;#&quot;]]
<strong>Output:</strong> 4
<strong>Explanation:</strong> Teacher can place 4 students in available seats so they don&#39;t cheat on the exam. 
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> seats = [[&quot;.&quot;,&quot;#&quot;],
&nbsp;               [&quot;#&quot;,&quot;#&quot;],
&nbsp;               [&quot;#&quot;,&quot;.&quot;],
&nbsp;               [&quot;#&quot;,&quot;#&quot;],
&nbsp;               [&quot;.&quot;,&quot;#&quot;]]
<strong>Output:</strong> 3
<strong>Explanation:</strong> Place all students in available seats. 

</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> seats = [[&quot;#&quot;,&quot;.&quot;,&quot;<strong>.</strong>&quot;,&quot;.&quot;,&quot;#&quot;],
&nbsp;               [&quot;<strong>.</strong>&quot;,&quot;#&quot;,&quot;<strong>.</strong>&quot;,&quot;#&quot;,&quot;<strong>.</strong>&quot;],
&nbsp;               [&quot;<strong>.</strong>&quot;,&quot;.&quot;,&quot;#&quot;,&quot;.&quot;,&quot;<strong>.</strong>&quot;],
&nbsp;               [&quot;<strong>.</strong>&quot;,&quot;#&quot;,&quot;<strong>.</strong>&quot;,&quot;#&quot;,&quot;<strong>.</strong>&quot;],
&nbsp;               [&quot;#&quot;,&quot;.&quot;,&quot;<strong>.</strong>&quot;,&quot;.&quot;,&quot;#&quot;]]
<strong>Output:</strong> 10
<strong>Explanation:</strong> Place students in available seats in column 1, 3 and 5.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>seats</code>&nbsp;contains only characters&nbsp;<code>&#39;.&#39;<font face="sans-serif, Arial, Verdana, Trebuchet MS">&nbsp;and</font></code><code>&#39;#&#39;.</code></li>
	<li><code>m ==&nbsp;seats.length</code></li>
	<li><code>n ==&nbsp;seats[i].length</code></li>
	<li><code>1 &lt;= m &lt;= 8</code></li>
	<li><code>1 &lt;= n &lt;= 8</code></li>
</ul>


## Solution

---
### Python3
``` py title='maximum-students-taking-exam'
class Solution:
    def maxStudents(self, seats: List[List[str]]) -> int:
        rows, cols = len(seats), len(seats[0])
        A = []
        
        for row in seats:
            A.append(sum(1 << j for j in range(cols) if row[j] == "."))
        
        @cache
        def go(currRow, prev):
            if currRow == rows: return 0
            
            mask, res = A[currRow], 0
            
            for bits in range(1 << cols):
                if (bits & mask) == bits and (bits & (bits >> 1) == 0):
                    if (bits & (prev << 1) == 0) and (bits & (prev >> 1) == 0):
                        students = bin(bits).count("1")
                        res = max(res, students + go(currRow + 1, bits))
                
            return res
        
        return go(0, 0)
                
```

