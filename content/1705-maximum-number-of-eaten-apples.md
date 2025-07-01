---
title: 1705. Maximum Number of Eaten Apples
draft: false
tags: 
  - leetcode-medium
  - array
  - greedy
  - heap-priority-queue
  - weekly-contest-221
  - contest-question
date: 2020-12-30
---

[Problem Link](https://leetcode.com/problems/maximum-number-of-eaten-apples/)

## Description

---
<p>There is a special kind of apple tree that grows apples every day for <code>n</code> days. On the <code>i<sup>th</sup></code> day, the tree grows <code>apples[i]</code> apples that will rot after <code>days[i]</code> days, that is on day <code>i + days[i]</code> the apples will be rotten and cannot be eaten. On some days, the apple tree does not grow any apples, which are denoted by <code>apples[i] == 0</code> and <code>days[i] == 0</code>.</p>

<p>You decided to eat <strong>at most</strong> one apple a day (to keep the doctors away). Note that you can keep eating after the first <code>n</code> days.</p>

<p>Given two integer arrays <code>days</code> and <code>apples</code> of length <code>n</code>, return <em>the maximum number of apples you can eat.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> apples = [1,2,3,5,2], days = [3,2,1,4,2]
<strong>Output:</strong> 7
<strong>Explanation:</strong> You can eat 7 apples:
- On the first day, you eat an apple that grew on the first day.
- On the second day, you eat an apple that grew on the second day.
- On the third day, you eat an apple that grew on the second day. After this day, the apples that grew on the third day rot.
- On the fourth to the seventh days, you eat apples that grew on the fourth day.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> apples = [3,0,0,0,0,2], days = [3,0,0,0,0,2]
<strong>Output:</strong> 5
<strong>Explanation:</strong> You can eat 5 apples:
- On the first to the third day you eat apples that grew on the first day.
- Do nothing on the fouth and fifth days.
- On the sixth and seventh days you eat apples that grew on the sixth day.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == apples.length == days.length</code></li>
	<li><code>1 &lt;= n &lt;= 2 * 10<sup>4</sup></code></li>
	<li><code>0 &lt;= apples[i], days[i] &lt;= 2 * 10<sup>4</sup></code></li>
	<li><code>days[i] = 0</code> if and only if <code>apples[i] = 0</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='maximum-number-of-eaten-apples'
from heapq import heappop, heappush
class Solution:
    def eatenApples(self, apples: List[int], days: List[int]) -> int:
        n = len(apples)
        i = res = 0
        
        heap = []
        
        while True:
            if i < n:
                heappush(heap, (days[i] + i, apples[i]))
            
            while heap and i >= heap[0][0]:
                heappop(heap)
                
            if heap:
                rot, apple = heappop(heap)
                res += 1
                if apple > 1:
                    heappush(heap, (rot, apple - 1))
            
            
            if not heap and i >= n: break
            
            i += 1
        
        return res
```

