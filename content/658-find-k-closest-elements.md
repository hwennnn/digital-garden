---
title: 658. Find K Closest Elements
draft: false
tags: 
  - leetcode-medium
  - array
  - two-pointers
  - binary-search
  - sliding-window
  - sorting
  - heap-priority-queue
  - weekly-contest-45
  - contest-question
date: 2022-09-29
---

[Problem Link](https://leetcode.com/problems/find-k-closest-elements/)

## Description

---
<p>Given a <strong>sorted</strong> integer array <code>arr</code>, two integers <code>k</code> and <code>x</code>, return the <code>k</code> closest integers to <code>x</code> in the array. The result should also be sorted in ascending order.</p>

<p>An integer <code>a</code> is closer to <code>x</code> than an integer <code>b</code> if:</p>

<ul>
	<li><code>|a - x| &lt; |b - x|</code>, or</li>
	<li><code>|a - x| == |b - x|</code> and <code>a &lt; b</code></li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">arr = [1,2,3,4,5], k = 4, x = 3</span></p>

<p><strong>Output:</strong> <span class="example-io">[1,2,3,4]</span></p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">arr = [1,1,2,3,4,5], k = 4, x = -1</span></p>

<p><strong>Output:</strong> <span class="example-io">[1,1,2,3]</span></p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= k &lt;= arr.length</code></li>
	<li><code>1 &lt;= arr.length &lt;= 10<sup>4</sup></code></li>
	<li><code>arr</code> is sorted in <strong>ascending</strong> order.</li>
	<li><code>-10<sup>4</sup> &lt;= arr[i], x &lt;= 10<sup>4</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='find-k-closest-elements'
class Solution:
    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
        pq = []

        for i, num in enumerate(arr):
            d = abs(num - x)
            if len(pq) == k:
                heappushpop(pq, (-d, -i))
            else:
                heappush(pq, (-d, -i))
        
        res = []

        while pq:
            d, index = heappop(pq)
            index = -index
            res.append(arr[index])

        return sorted(res)
            
```

