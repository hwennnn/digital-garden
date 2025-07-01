---
title: 1386. Cinema Seat Allocation
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - greedy
  - bit-manipulation
  - biweekly-contest-22
  - contest-question
date: 2020-10-15
---

[Problem Link](https://leetcode.com/problems/cinema-seat-allocation/)

## Description

---
<p><img alt="" src="https://assets.leetcode.com/uploads/2020/02/14/cinema_seats_1.png" style="width: 400px; height: 149px;" /></p>

<p>A cinema&nbsp;has <code>n</code>&nbsp;rows of seats, numbered from 1 to <code>n</code>&nbsp;and there are ten&nbsp;seats in each row, labelled from 1&nbsp;to 10&nbsp;as shown in the figure above.</p>

<p>Given the array <code>reservedSeats</code> containing the numbers of seats already reserved, for example, <code>reservedSeats[i] = [3,8]</code>&nbsp;means the seat located in row <strong>3</strong> and labelled with <b>8</b>&nbsp;is already reserved.</p>

<p><em>Return the maximum number of four-person groups&nbsp;you can assign on the cinema&nbsp;seats.</em> A four-person group&nbsp;occupies four&nbsp;adjacent seats <strong>in one single row</strong>. Seats across an aisle (such as [3,3]&nbsp;and [3,4]) are not considered to be adjacent, but there is an exceptional case&nbsp;on which an aisle split&nbsp;a four-person group, in that case, the aisle split&nbsp;a four-person group in the middle,&nbsp;which means to have two people on each side.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2020/02/14/cinema_seats_3.png" style="width: 400px; height: 96px;" /></p>

<pre>
<strong>Input:</strong> n = 3, reservedSeats = [[1,2],[1,3],[1,8],[2,6],[3,1],[3,10]]
<strong>Output:</strong> 4
<strong>Explanation:</strong> The figure above shows the optimal allocation for four groups, where seats mark with blue are already reserved and contiguous seats mark with orange are for one group.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 2, reservedSeats = [[2,1],[1,8],[2,6]]
<strong>Output:</strong> 2
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> n = 4, reservedSeats = [[4,3],[1,4],[4,6],[1,7]]
<strong>Output:</strong> 4
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 10^9</code></li>
	<li><code>1 &lt;=&nbsp;reservedSeats.length &lt;= min(10*n, 10^4)</code></li>
	<li><code>reservedSeats[i].length == 2</code></li>
	<li><code>1&nbsp;&lt;=&nbsp;reservedSeats[i][0] &lt;= n</code></li>
	<li><code>1 &lt;=&nbsp;reservedSeats[i][1] &lt;= 10</code></li>
	<li>All <code>reservedSeats[i]</code> are distinct.</li>
</ul>


## Solution

---
### Python3
``` py title='cinema-seat-allocation'
class Solution:
    def maxNumberOfFamilies(self, n: int, rs: List[List[int]]) -> int:
        d = collections.defaultdict(map)
        
        for r,c in rs:
            if r not in d:
                d[r] = {c}
            else:
                d[r].add(c)
        
        res = 2 * n
        for r in d:
            ref = d[r]
            cnt = 0
            if 2 not in ref and 3 not in ref and 4 not in ref and 5 not in ref: cnt += 1
            
            if 6 not in ref and 7 not in ref and 8 not in ref and 9 not in ref: cnt += 1
            
            if 4 not in ref and 5 not in ref and 6 not in ref and 7 not in ref and cnt == 0: cnt += 1
                
            res += (cnt - 2)
        
        return res
```

