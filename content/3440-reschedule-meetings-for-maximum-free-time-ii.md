---
title: 3440. Reschedule Meetings for Maximum Free Time II
draft: false
tags: 
  - leetcode-medium
  - array
  - greedy
  - enumeration
  - biweekly-contest-149
  - contest-question
date: 2025-07-10
---

[Problem Link](https://leetcode.com/problems/reschedule-meetings-for-maximum-free-time-ii/)

## Description

---
<p>You are given an integer <code>eventTime</code> denoting the duration of an event. You are also given two integer arrays <code>startTime</code> and <code>endTime</code>, each of length <code>n</code>.</p>

<p>These represent the start and end times of <code>n</code> <strong>non-overlapping</strong> meetings that occur during the event between time <code>t = 0</code> and time <code>t = eventTime</code>, where the <code>i<sup>th</sup></code> meeting occurs during the time <code>[startTime[i], endTime[i]].</code></p>

<p>You can reschedule <strong>at most </strong>one meeting by moving its start time while maintaining the <strong>same duration</strong>, such that the meetings remain non-overlapping, to <strong>maximize</strong> the <strong>longest</strong> <em>continuous period of free time</em> during the event.</p>

<p>Return the <strong>maximum</strong> amount of free time possible after rearranging the meetings.</p>

<p><strong>Note</strong> that the meetings can <strong>not</strong> be rescheduled to a time outside the event and they should remain non-overlapping.</p>

<p><strong>Note:</strong> <em>In this version</em>, it is <strong>valid</strong> for the relative ordering of the meetings to change after rescheduling one meeting.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">eventTime = 5, startTime = [1,3], endTime = [2,5]</span></p>

<p><strong>Output:</strong> <span class="example-io">2</span></p>

<p><strong>Explanation:</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2024/12/22/example0_rescheduled.png" style="width: 375px; height: 123px;" /></p>

<p>Reschedule the meeting at <code>[1, 2]</code> to <code>[2, 3]</code>, leaving no meetings during the time <code>[0, 2]</code>.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">eventTime = 10, startTime = [0,7,9], endTime = [1,8,10]</span></p>

<p><strong>Output:</strong> <span class="example-io">7</span></p>

<p><strong>Explanation:</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2024/12/22/rescheduled_example0.png" style="width: 375px; height: 125px;" /></p>

<p>Reschedule the meeting at <code>[0, 1]</code> to <code>[8, 9]</code>, leaving no meetings during the time <code>[0, 7]</code>.</p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">eventTime = 10, startTime = [0,3,7,9], endTime = [1,4,8,10]</span></p>

<p><strong>Output:</strong> 6</p>

<p><strong>Explanation:</strong></p>

<p><strong><img alt="" src="https://assets.leetcode.com/uploads/2025/01/28/image3.png" style="width: 375px; height: 125px;" /></strong></p>

<p>Reschedule the meeting at <code>[3, 4]</code> to <code>[8, 9]</code>, leaving no meetings during the time <code>[1, 7]</code>.</p>
</div>

<p><strong class="example">Example 4:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">eventTime = 5, startTime = [0,1,2,3,4], endTime = [1,2,3,4,5]</span></p>

<p><strong>Output:</strong> <span class="example-io">0</span></p>

<p><strong>Explanation:</strong></p>

<p>There is no time during the event not occupied by meetings.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= eventTime &lt;= 10<sup>9</sup></code></li>
	<li><code>n == startTime.length == endTime.length</code></li>
	<li><code>2 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= startTime[i] &lt; endTime[i] &lt;= eventTime</code></li>
	<li><code>endTime[i] &lt;= startTime[i + 1]</code> where <code>i</code> lies in the range <code>[0, n - 2]</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='reschedule-meetings-for-maximum-free-time-ii'
class Solution:
    def maxFreeTime(self, eventTime: int, startTime: List[int], endTime: List[int]) -> int:
        N = len(startTime)
        gaps = [0] * (N + 1)

        gaps[0] = startTime[0]
        gaps[-1] = eventTime - endTime[-1]

        for i in range(1, N):
            gaps[i] = startTime[i] - endTime[i - 1]
        
        leftMax = 0
        rightMax = [0] * (N + 1)
        for i in range(N - 1, -1, -1):
            rightMax[i] = max(rightMax[i + 1], gaps[i + 1])
        
        res = 0

        for i in range(N):
            dur = endTime[i] - startTime[i]

            if dur <= leftMax or dur <= rightMax[i + 1]:
                res = max(res, gaps[i] + dur + gaps[i + 1])
            
            res = max(res, gaps[i] + gaps[i + 1])

            leftMax = max(leftMax, gaps[i])

        return res
```

