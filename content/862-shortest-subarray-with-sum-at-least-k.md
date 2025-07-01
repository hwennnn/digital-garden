---
title: 862. Shortest Subarray with Sum at Least K
draft: false
tags: 
  - leetcode-hard
  - array
  - binary-search
  - queue
  - sliding-window
  - heap-priority-queue
  - prefix-sum
  - monotonic-queue
  - weekly-contest-91
  - contest-question
date: 2024-11-17
---

[Problem Link](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/)

## Description

---
<p>Given an integer array <code>nums</code> and an integer <code>k</code>, return <em>the length of the shortest non-empty <strong>subarray</strong> of </em><code>nums</code><em> with a sum of at least </em><code>k</code>. If there is no such <strong>subarray</strong>, return <code>-1</code>.</p>

<p>A <strong>subarray</strong> is a <strong>contiguous</strong> part of an array.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [1], k = 1
<strong>Output:</strong> 1
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [1,2], k = 4
<strong>Output:</strong> -1
</pre><p><strong class="example">Example 3:</strong></p>
<pre><strong>Input:</strong> nums = [2,-1,2], k = 3
<strong>Output:</strong> 3
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>5</sup> &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= k &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='shortest-subarray-with-sum-at-least-k'
class Solution:
    def shortestSubarray(self, nums: List[int], k: int) -> int:
        N = len(nums)
        queue = deque([(0, 0)])
        res = inf
        s = 0

        for j, x in enumerate(nums):
            s += x

            while queue and s - queue[0][1] >= k:
                i, _ = queue.popleft()
                res = min(res, j - i + 1)
            
            while queue and queue[-1][1] >= s:
                queue.pop()

            queue.append((j + 1, s))
       
        
        return -1 if res == inf else res
```

