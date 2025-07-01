---
title: 2856. Minimum Array Length After Pair Removals
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - two-pointers
  - binary-search
  - greedy
  - counting
  - biweekly-contest-113
  - contest-question
date: 2023-09-17
---

[Problem Link](https://leetcode.com/problems/minimum-array-length-after-pair-removals/)

## Description

---
<p>Given an integer array <code>num</code> sorted in non-decreasing order.</p>

<p>You can perform the following operation any number of times:</p>

<ul>
	<li>Choose <strong>two</strong> indices, <code>i</code> and <code>j</code>, where <code>nums[i] &lt; nums[j]</code>.</li>
	<li>Then, remove the elements at indices <code>i</code> and <code>j</code> from <code>nums</code>. The remaining elements retain their original order, and the array is re-indexed.</li>
</ul>

<p>Return the <strong>minimum</strong> length of <code>nums</code> after applying the operation zero or more times.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [1,2,3,4]</span></p>

<p><strong>Output:</strong> <span class="example-io">0</span></p>

<p><strong>Explanation:</strong></p>

<p><img src="https://assets.leetcode.com/uploads/2024/05/18/tcase1.gif" style="width: 160px; height: 70px;" /></p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [1,1,2,2,3,3]</span></p>

<p><strong>Output:</strong> <span class="example-io">0</span></p>

<p><strong>Explanation:</strong></p>

<p><img src="https://assets.leetcode.com/uploads/2024/05/19/tcase2.gif" style="width: 240px; height: 70px;" /></p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [1000000000,1000000000]</span></p>

<p><strong>Output:</strong> <span class="example-io">2</span></p>

<p><strong>Explanation:</strong></p>

<p>Since both numbers are equal, they cannot be removed.</p>
</div>

<p><strong class="example">Example 4:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [2,3,4,4,4]</span></p>

<p><strong>Output:</strong> <span class="example-io">1</span></p>

<p><strong>Explanation:</strong></p>

<p><img src="https://assets.leetcode.com/uploads/2024/05/19/tcase3.gif" style="width: 210px; height: 70px;" /></p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
	<li><code>nums</code> is sorted in <strong>non-decreasing</strong> order.</li>
</ul>


## Solution

---
### Python3
``` py title='minimum-array-length-after-pair-removals'
class Solution:
    def minLengthAfterRemovals(self, nums: List[int]) -> int:
        N = len(nums)
        counter = Counter(nums)
        pq = [-v for v in counter.values()]
        heapify(pq)

        while len(pq) >= 2:
            top = -heappop(pq)
            second = -heappop(pq)

            top -= 1
            second -= 1

            if top > 0:
                heappush(pq, -top)
            
            if second > 0:
                heappush(pq, -second)

        return sum(-v for v in pq)
```

