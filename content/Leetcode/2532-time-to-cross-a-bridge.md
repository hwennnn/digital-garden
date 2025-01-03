---
title: 2532. Time to Cross a Bridge
draft: false
tags: 
  - array
  - heap-(priority-queue)
  - simulation
date: 2023-07-01
---

![Difficulty](https://img.shields.io/badge/Difficulty-Hard-blue.svg)

## Description

---
<p>There are <code>k</code> workers who want to move <code>n</code> boxes from the right (old) warehouse to the left (new) warehouse. You are given the two integers <code>n</code> and <code>k</code>, and a 2D integer array <code>time</code> of size <code>k x 4</code> where <code>time[i] = [right<sub>i</sub>, pick<sub>i</sub>, left<sub>i</sub>, put<sub>i</sub>]</code>.</p>

<p>The warehouses are separated by a river and connected by a bridge. Initially, all <code>k</code> workers are waiting on the left side of the bridge. To move the boxes, the <code>i<sup>th</sup></code> worker can do the following:</p>

<ul>
	<li>Cross the bridge to the right side in <code>right<sub>i</sub></code> minutes.</li>
	<li>Pick a box from the right warehouse in <code>pick<sub>i</sub></code> minutes.</li>
	<li>Cross the bridge to the left side in <code>left<sub>i</sub></code> minutes.</li>
	<li>Put the box into the left warehouse in <code>put<sub>i</sub></code> minutes.</li>
</ul>

<p>The <code>i<sup>th</sup></code> worker is <strong>less efficient</strong> than the j<code><sup>th</sup></code> worker if either condition is met:</p>

<ul>
	<li><code>left<sub>i</sub> + right<sub>i</sub> &gt; left<sub>j</sub> + right<sub>j</sub></code></li>
	<li><code>left<sub>i</sub> + right<sub>i</sub> == left<sub>j</sub> + right<sub>j</sub></code> and <code>i &gt; j</code></li>
</ul>

<p>The following rules regulate the movement of the workers through the bridge:</p>

<ul>
	<li>Only one worker can use the bridge at a time.</li>
	<li>When the bridge is unused prioritize the <strong>least efficient</strong> worker (who have picked up the box) on the right side to cross. If not,&nbsp;prioritize the <strong>least efficient</strong> worker on the left side to cross.</li>
	<li>If enough workers have already been dispatched from the left side to pick up all the remaining boxes, <strong>no more</strong> workers will be sent from the left side.</li>
</ul>

<p>Return the <strong>elapsed minutes</strong> at which the last box reaches the <strong>left side of the bridge</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 1, k = 3, time = [[1,1,2,1],[1,1,3,1],[1,1,4,1]]</span></p>

<p><strong>Output:</strong> <span class="example-io">6</span></p>

<p><strong>Explanation:</strong></p>

<pre>
From 0 to 1 minutes: worker 2 crosses the bridge to the right.
From 1 to 2 minutes: worker 2 picks up a box from the right warehouse.
From 2 to 6 minutes: worker 2 crosses the bridge to the left.
From 6 to 7 minutes: worker 2 puts a box at the left warehouse.
The whole process ends after 7 minutes. We return 6 because the problem asks for the instance of time at which the last worker reaches the left side of the bridge.
</pre>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 3, k = 2, time =</span> [[1,5,1,8],[10,10,10,10]]</p>

<p><strong>Output:</strong> 37</p>

<p><strong>Explanation:</strong></p>

<pre>
<img src="https://assets.leetcode.com/uploads/2024/11/21/378539249-c6ce3c73-40e7-4670-a8b5-7ddb9abede11.png" style="width: 450px; height: 176px;" />
</pre>

<p>The last box reaches the left side at 37 seconds. Notice, how we <strong>do not</strong> put the last boxes down, as that would take more time, and they are already on the left with the workers.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n, k &lt;= 10<sup>4</sup></code></li>
	<li><code>time.length == k</code></li>
	<li><code>time[i].length == 4</code></li>
	<li><code>1 &lt;= left<sub>i</sub>, pick<sub>i</sub>, right<sub>i</sub>, put<sub>i</sub> &lt;= 1000</code></li>
</ul>


## Solution

---
### Python
``` py title='time-to-cross-a-bridge'
class Solution:
    def findCrossingTime(self, n: int, k: int, time: List[List[int]]) -> int:
        leftBridge, rightBridge = [], []
        leftWorkers, rightWorkers = [], []
        ans = 0
        INF = inf

        for i, (a, _, c, _) in enumerate(time):
            heappush(leftBridge, (-a-c, -i))
        
        while n > 0 or rightBridge or rightWorkers:
            while leftWorkers and leftWorkers[0][0] <= ans:
                _, i = heappop(leftWorkers)
                heappush(leftBridge, (-time[i][0] - time[i][2], -i))
            
            while rightWorkers and rightWorkers[0][0] <= ans:
                _, i = heappop(rightWorkers)
                heappush(rightBridge, (-time[i][0] - time[i][2], -i))

            if rightBridge:
                _, i = heappop(rightBridge)
                i = -i
                ans += time[i][2]
                heappush(leftWorkers, (ans + time[i][3], i))
            elif leftBridge and n > 0:
                _, i = heappop(leftBridge)
                i = -i
                ans += time[i][0]
                heappush(rightWorkers, (ans + time[i][1], i))
                n -= 1
            else:
                ans = min(leftWorkers[0][0] if leftWorkers and n > 0 else INF, rightWorkers[0][0] if rightWorkers else INF)

        return ans

```

