---
title: 1353. Maximum Number of Events That Can Be Attended
draft: false
tags: 
  - leetcode-medium
  - array
  - greedy
  - sorting
  - heap-priority-queue
  - weekly-contest-176
  - contest-question
date: 2020-10-21
---

[Problem Link](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/)

## Description

---
<p>You are given an array of <code>events</code> where <code>events[i] = [startDay<sub>i</sub>, endDay<sub>i</sub>]</code>. Every event <code>i</code> starts at <code>startDay<sub>i</sub></code><sub> </sub>and ends at <code>endDay<sub>i</sub></code>.</p>

<p>You can attend an event <code>i</code> at any day <code>d</code> where <code>startTime<sub>i</sub> &lt;= d &lt;= endTime<sub>i</sub></code>. You can only attend one event at any time <code>d</code>.</p>

<p>Return <em>the maximum number of events you can attend</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/02/05/e1.png" style="width: 400px; height: 267px;" />
<pre>
<strong>Input:</strong> events = [[1,2],[2,3],[3,4]]
<strong>Output:</strong> 3
<strong>Explanation:</strong> You can attend all the three events.
One way to attend them all is as shown.
Attend the first event on day 1.
Attend the second event on day 2.
Attend the third event on day 3.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> events= [[1,2],[2,3],[3,4],[1,2]]
<strong>Output:</strong> 4
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= events.length &lt;= 10<sup>5</sup></code></li>
	<li><code>events[i].length == 2</code></li>
	<li><code>1 &lt;= startDay<sub>i</sub> &lt;= endDay<sub>i</sub> &lt;= 10<sup>5</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='maximum-number-of-events-that-can-be-attended'
class Solution:
    def maxEvents(self, events: List[List[int]]) -> int:
        N = len(events)
        events.sort()
        res = index = 0
        heap = []
        maxDays = max(end for _, end in events)

        for day in range(1, maxDays + 1):
            while index < N and events[index][0] == day:
                heappush(heap, events[index][1])
                index += 1
            
            while heap and day > heap[0]:
                heappop(heap)
            
            if heap:
                heappop(heap)
                res += 1

        return res
```
### C++
``` cpp title='maximum-number-of-events-that-can-be-attended'
class Solution {
public:
    int maxEvents(vector<vector<int>>& A) {
        priority_queue <int,vector<int>,greater<int>> pq;
        sort(A.begin(), A.end());
        int i = 0, res = 0, n = A.size();
        for (int d = 1; d <= 100000; d++){
            while (pq.size() && pq.top() < d)
                pq.pop();
                
            while (i < n && A[i][0] == d)
                pq.push(A[i++][1]);
            
            if (pq.size()){
                pq.pop();
                ++res;
            }
        }
        
        return res;
    }
};
```

