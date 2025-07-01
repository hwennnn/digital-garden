---
title: 2382. Maximum Segment Sum After Removals
draft: false
tags: 
  - leetcode-hard
  - array
  - union-find
  - prefix-sum
  - ordered-set
  - biweekly-contest-85
  - contest-question
date: 2022-08-27
---

[Problem Link](https://leetcode.com/problems/maximum-segment-sum-after-removals/)

## Description

---
<p>You are given two <strong>0-indexed</strong> integer arrays <code>nums</code> and <code>removeQueries</code>, both of length <code>n</code>. For the <code>i<sup>th</sup></code> query, the element in <code>nums</code> at the index <code>removeQueries[i]</code> is removed, splitting <code>nums</code> into different segments.</p>

<p>A <strong>segment</strong> is a contiguous sequence of <strong>positive</strong> integers in <code>nums</code>. A <strong>segment sum</strong> is the sum of every element in a segment.</p>

<p>Return<em> an integer array </em><code>answer</code><em>, of length </em><code>n</code><em>, where </em><code>answer[i]</code><em> is the <strong>maximum</strong> segment sum after applying the </em><code>i<sup>th</sup></code> <em>removal.</em></p>

<p><strong>Note:</strong> The same index will <strong>not</strong> be removed more than once.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,5,6,1], removeQueries = [0,3,2,4,1]
<strong>Output:</strong> [14,7,2,2,0]
<strong>Explanation:</strong> Using 0 to indicate a removed element, the answer is as follows:
Query 1: Remove the 0th element, nums becomes [0,2,5,6,1] and the maximum segment sum is 14 for segment [2,5,6,1].
Query 2: Remove the 3rd element, nums becomes [0,2,5,0,1] and the maximum segment sum is 7 for segment [2,5].
Query 3: Remove the 2nd element, nums becomes [0,2,0,0,1] and the maximum segment sum is 2 for segment [2]. 
Query 4: Remove the 4th element, nums becomes [0,2,0,0,0] and the maximum segment sum is 2 for segment [2]. 
Query 5: Remove the 1st element, nums becomes [0,0,0,0,0] and the maximum segment sum is 0, since there are no segments.
Finally, we return [14,7,2,2,0].</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,2,11,1], removeQueries = [3,2,1,0]
<strong>Output:</strong> [16,5,3,0]
<strong>Explanation:</strong> Using 0 to indicate a removed element, the answer is as follows:
Query 1: Remove the 3rd element, nums becomes [3,2,11,0] and the maximum segment sum is 16 for segment [3,2,11].
Query 2: Remove the 2nd element, nums becomes [3,2,0,0] and the maximum segment sum is 5 for segment [3,2].
Query 3: Remove the 1st element, nums becomes [3,0,0,0] and the maximum segment sum is 3 for segment [3].
Query 4: Remove the 0th element, nums becomes [0,0,0,0] and the maximum segment sum is 0, since there are no segments.
Finally, we return [16,5,3,0].
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == nums.length == removeQueries.length</code></li>
	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
	<li><code>0 &lt;= removeQueries[i] &lt; n</code></li>
	<li>All the values of <code>removeQueries</code> are <strong>unique</strong>.</li>
</ul>


## Solution

---
### Python3
``` py title='maximum-segment-sum-after-removals'
class UnionFind:
    def __init__(self):
        self._parent = {}
        self.segmentSum = {}
        self.maxSegmentSum = 0
    
    def merge(self, u, value):
        self._parent[u] = u
        self.segmentSum[u] = value
        self.maxSegmentSum = max(self.maxSegmentSum, value)
        
        if u - 1 in self._parent:
            self.union(u, u - 1)
        
        if u + 1 in self._parent:
            self.union(u, u + 1)
    
    def union(self, a, b):
        a, b = self.find(a), self.find(b)
        if a == b:
            return

        self.segmentSum[a] += self.segmentSum[b]
        self._parent[b] = a
        self.maxSegmentSum = max(self.maxSegmentSum, self.segmentSum[a])

    def find(self, x):
        if x != self._parent[x]:
            self._parent[x] = self.find(self._parent[x])

        return self._parent[x]

class Solution:
    def maximumSegmentSum(self, nums: List[int], removeQueries: List[int]) -> List[int]:
        n = len(nums)
        uf = UnionFind()
        res = [0] * n
        
        for i in range(n - 1, -1, -1):
            res[i] = uf.maxSegmentSum
            u = removeQueries[i]
            uf.merge(u, nums[u])
        
        return res
        
```

