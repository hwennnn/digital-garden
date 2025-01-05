---
title: 215. Kth Largest Element in an Array
draft: false
tags: 
  - leetcode-medium
  - array
  - divide-and-conquer
  - sorting
  - heap-priority-queue
  - quickselect
date: 2024-08-13
---

[Problem Link](https://leetcode.com/problems/kth-largest-element-in-an-array/)

## Description

---
<p>Given an integer array <code>nums</code> and an integer <code>k</code>, return <em>the</em> <code>k<sup>th</sup></code> <em>largest element in the array</em>.</p>

<p>Note that it is the <code>k<sup>th</sup></code> largest element in the sorted order, not the <code>k<sup>th</sup></code> distinct element.</p>

<p>Can you solve it without sorting?</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [3,2,1,5,6,4], k = 2
<strong>Output:</strong> 5
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [3,2,3,1,2,4,5,5,6], k = 4
<strong>Output:</strong> 4
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= k &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='kth-largest-element-in-an-array'
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        pq = []

        for x in nums:
            if len(pq) == k:
                heappushpop(pq, x)
            else:
                heappush(pq, x)

        return pq[0]
```
