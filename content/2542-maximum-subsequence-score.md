---
title: 2542. Maximum Subsequence Score
draft: false
tags: 
  - leetcode-medium
  - array
  - greedy
  - sorting
  - heap-priority-queue
  - biweekly-contest-96
  - contest-question
date: 2023-05-24
---

[Problem Link](https://leetcode.com/problems/maximum-subsequence-score/)

## Description

---
<p>You are given two <strong>0-indexed</strong> integer arrays <code>nums1</code> and <code>nums2</code> of equal length <code>n</code> and a positive integer <code>k</code>. You must choose a <strong>subsequence</strong> of indices from <code>nums1</code> of length <code>k</code>.</p>

<p>For chosen indices <code>i<sub>0</sub></code>, <code>i<sub>1</sub></code>, ..., <code>i<sub>k - 1</sub></code>, your <strong>score</strong> is defined as:</p>

<ul>
	<li>The sum of the selected elements from <code>nums1</code> multiplied with the <strong>minimum</strong> of the selected elements from <code>nums2</code>.</li>
	<li>It can defined simply as: <code>(nums1[i<sub>0</sub>] + nums1[i<sub>1</sub>] +...+ nums1[i<sub>k - 1</sub>]) * min(nums2[i<sub>0</sub>] , nums2[i<sub>1</sub>], ... ,nums2[i<sub>k - 1</sub>])</code>.</li>
</ul>

<p>Return <em>the <strong>maximum</strong> possible score.</em></p>

<p>A <strong>subsequence</strong> of indices of an array is a set that can be derived from the set <code>{0, 1, ..., n-1}</code> by deleting some or no elements.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [1,3,3,2], nums2 = [2,1,3,4], k = 3
<strong>Output:</strong> 12
<strong>Explanation:</strong> 
The four possible subsequence scores are:
- We choose the indices 0, 1, and 2 with score = (1+3+3) * min(2,1,3) = 7.
- We choose the indices 0, 1, and 3 with score = (1+3+2) * min(2,1,4) = 6. 
- We choose the indices 0, 2, and 3 with score = (1+3+2) * min(2,3,4) = 12. 
- We choose the indices 1, 2, and 3 with score = (3+3+2) * min(1,3,4) = 8.
Therefore, we return the max score, which is 12.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [4,2,3,1,1], nums2 = [7,5,10,9,6], k = 1
<strong>Output:</strong> 30
<strong>Explanation:</strong> 
Choosing index 2 is optimal: nums1[2] * nums2[2] = 3 * 10 = 30 is the maximum possible score.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == nums1.length == nums2.length</code></li>
	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= nums1[i], nums2[j] &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= k &lt;= n</code></li>
</ul>


## Solution

---
### Python3
``` py title='maximum-subsequence-score'
class Solution:
    def maxScore(self, nums1: List[int], nums2: List[int], k: int) -> int:
        N = len(nums1)
        A = sorted([(a, b) for a, b in zip(nums1, nums2)], key = lambda x : -x[1])
        heap = []
        res = total = 0

        for x, mmin in A:
            total += x
            heappush(heap, x)

            if len(heap) > k:
                total -= heappop(heap)
            
            if len(heap) == k:
                res = max(res, total * mmin)

        return res
```

