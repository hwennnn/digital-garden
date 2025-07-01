---
title: 1478. Allocate Mailboxes
draft: false
tags: 
  - leetcode-hard
  - array
  - math
  - dynamic-programming
  - sorting
  - biweekly-contest-28
  - contest-question
date: 2024-03-17
---

[Problem Link](https://leetcode.com/problems/allocate-mailboxes/)

## Description

---
<p>Given the array <code>houses</code> where <code>houses[i]</code> is the location of the <code>i<sup>th</sup></code> house along a street and an integer <code>k</code>, allocate <code>k</code> mailboxes in the street.</p>

<p>Return <em>the <strong>minimum</strong> total distance between each house and its nearest mailbox</em>.</p>

<p>The test cases are generated so that the answer fits in a 32-bit integer.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/05/07/sample_11_1816.png" style="width: 454px; height: 154px;" />
<pre>
<strong>Input:</strong> houses = [1,4,8,10,20], k = 3
<strong>Output:</strong> 5
<strong>Explanation:</strong> Allocate mailboxes in position 3, 9 and 20.
Minimum total distance from each houses to nearest mailboxes is |3-1| + |4-3| + |9-8| + |10-9| + |20-20| = 5 
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/05/07/sample_2_1816.png" style="width: 433px; height: 154px;" />
<pre>
<strong>Input:</strong> houses = [2,3,5,12,18], k = 2
<strong>Output:</strong> 9
<strong>Explanation:</strong> Allocate mailboxes in position 3 and 14.
Minimum total distance from each houses to nearest mailboxes is |2-3| + |3-3| + |5-3| + |12-14| + |18-14| = 9.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= k &lt;= houses.length &lt;= 100</code></li>
	<li><code>1 &lt;= houses[i] &lt;= 10<sup>4</sup></code></li>
	<li>All the integers of <code>houses</code> are <strong>unique</strong>.</li>
</ul>


## Solution

---
### Python3
``` py title='allocate-mailboxes'
class Solution:
    def minDistance(self, houses: List[int], k: int) -> int:
        N = len(houses)
        houses.sort()
        costs = [[0] * N for _ in range(N)] # total travel distance from houses[i : j] to the median mailbox

        for i in range(N):
            for j in range(N):
                median = houses[(i + j) // 2]
                for m in range(i, j + 1):
                    costs[i][j] += abs(median - houses[m])
        
        @cache
        def go(i, k):
            if i == N: return 0

            if k == 0 or i == N: return inf
                
            res = inf
            for j in range(i, N):
                cost = costs[i][j]
                res = min(res, go(j + 1, k - 1) + cost)

            return res
        
        return go(0, k)

```

