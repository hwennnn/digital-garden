---
title: 3066. Minimum Operations to Exceed Threshold Value II
draft: false
tags: 
  - leetcode-medium
  - array
  - heap-priority-queue
  - simulation
date: 2024-03-03
---

[Problem Link](https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/)

## Description

---
<p>You are given a <strong>0-indexed</strong> integer array <code>nums</code>, and an integer <code>k</code>.</p>

<p>In one operation, you will:</p>

<ul>
	<li>Take the two smallest integers <code>x</code> and <code>y</code> in <code>nums</code>.</li>
	<li>Remove <code>x</code> and <code>y</code> from <code>nums</code>.</li>
	<li>Add <code>min(x, y) * 2 + max(x, y)</code> anywhere in the array.</li>
</ul>

<p><strong>Note</strong> that you can only apply the described operation if <code>nums</code> contains at least two elements.</p>

<p>Return <em>the <strong>minimum</strong> number of operations needed so that all elements of the array are greater than or equal to</em> <code>k</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,11,10,1,3], k = 10
<strong>Output:</strong> 2
<strong>Explanation:</strong> In the first operation, we remove elements 1 and 2, then add 1 * 2 + 2 to nums. nums becomes equal to [4, 11, 10, 3].
In the second operation, we remove elements 3 and 4, then add 3 * 2 + 4 to nums. nums becomes equal to [10, 11, 10].
At this stage, all the elements of nums are greater than or equal to 10 so we can stop.
It can be shown that 2 is the minimum number of operations needed so that all elements of the array are greater than or equal to 10.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,1,2,4,9], k = 20
<strong>Output:</strong> 4
<strong>Explanation:</strong> After one operation, nums becomes equal to [2, 4, 9, 3].
After two operations, nums becomes equal to [7, 4, 9].
After three operations, nums becomes equal to [15, 9].
After four operations, nums becomes equal to [33].
At this stage, all the elements of nums are greater than 20 so we can stop.
It can be shown that 4 is the minimum number of operations needed so that all elements of the array are greater than or equal to 20.</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= nums.length &lt;= 2 * 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
	<li><code>1 &lt;= k &lt;= 10<sup>9</sup></code></li>
	<li>The input is generated such that an answer always exists. That is, there exists some sequence of operations after which all elements of the array are greater than or equal to <code>k</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='minimum-operations-to-exceed-threshold-value-ii'
class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        N = len(nums)
        pq = nums[:]
        heapify(pq)
        res = 0
        
        while len(pq) >= 2 and pq[0] < k:
            x, y = heappop(pq), heappop(pq)
            
            heappush(pq, min(x, y) * 2 + max(x, y))
            
            res += 1
        
        return res
```
