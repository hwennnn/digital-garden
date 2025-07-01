---
title: 632. Smallest Range Covering Elements from K Lists
draft: false
tags: 
  - leetcode-hard
  - array
  - hash-table
  - greedy
  - sliding-window
  - sorting
  - heap-priority-queue
  - weekly-contest-39
  - contest-question
date: 2025-01-05
---

[Problem Link](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/)

## Description

---
<p>You have <code>k</code> lists of sorted integers in <strong>non-decreasing&nbsp;order</strong>. Find the <b>smallest</b> range that includes at least one number from each of the <code>k</code> lists.</p>

<p>We define the range <code>[a, b]</code> is smaller than range <code>[c, d]</code> if <code>b - a &lt; d - c</code> <strong>or</strong> <code>a &lt; c</code> if <code>b - a == d - c</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]
<strong>Output:</strong> [20,24]
<strong>Explanation: </strong>
List 1: [4, 10, 15, 24,26], 24 is in range [20,24].
List 2: [0, 9, 12, 20], 20 is in range [20,24].
List 3: [5, 18, 22, 30], 22 is in range [20,24].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [[1,2,3],[1,2,3],[1,2,3]]
<strong>Output:</strong> [1,1]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>nums.length == k</code></li>
	<li><code>1 &lt;= k &lt;= 3500</code></li>
	<li><code>1 &lt;= nums[i].length &lt;= 50</code></li>
	<li><code>-10<sup>5</sup> &lt;= nums[i][j] &lt;= 10<sup>5</sup></code></li>
	<li><code>nums[i]</code>&nbsp;is sorted in <strong>non-decreasing</strong> order.</li>
</ul>


## Solution

---
### Python3
``` py title='smallest-range-covering-elements-from-k-lists'
class Solution:
    def smallestRange(self, nums: List[List[int]]) -> List[int]:
        N = len(nums)
        res = [-inf, inf]
        pq = []
        curr = []
        count = [0] * N
        covered = 0
        currMax = -inf

        for i, arr in enumerate(nums):
            heappush(pq, (arr[0], 0, i))
        
        while pq:
            x, arrIndex, numsIndex = heappop(pq)

            if count[numsIndex] == 0:
                covered += 1
            count[numsIndex] += 1
            heappush(curr, (x, arrIndex, numsIndex))
            currMax = max(currMax, x)

            while covered == N:
                a, b = curr[0][0], currMax
                c, d = res

                if b - a < d - c or (b - a == d - c and a < c):
                    res = [a, b]

                _, arrIndex2, numsIndex2 = heappop(curr)
                count[numsIndex2] -= 1
                if count[numsIndex2] == 0:
                    covered -= 1
                if arrIndex2 + 1 < len(nums[numsIndex2]):
                    heappush(pq, (nums[numsIndex2][arrIndex2 + 1], arrIndex2 + 1, numsIndex2))

        return res
```

