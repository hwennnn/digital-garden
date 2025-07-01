---
title: 480. Sliding Window Median
draft: false
tags: 
  - leetcode-hard
  - array
  - hash-table
  - sliding-window
  - heap-priority-queue
  - weekly-contest-14
  - contest-question
date: 2021-09-20
---

[Problem Link](https://leetcode.com/problems/sliding-window-median/)

## Description

---
<p>The <strong>median</strong> is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle values.</p>

<ul>
	<li>For examples, if <code>arr = [2,<u>3</u>,4]</code>, the median is <code>3</code>.</li>
	<li>For examples, if <code>arr = [1,<u>2,3</u>,4]</code>, the median is <code>(2 + 3) / 2 = 2.5</code>.</li>
</ul>

<p>You are given an integer array <code>nums</code> and an integer <code>k</code>. There is a sliding window of size <code>k</code> which is moving from the very left of the array to the very right. You can only see the <code>k</code> numbers in the window. Each time the sliding window moves right by one position.</p>

<p>Return <em>the median array for each window in the original array</em>. Answers within <code>10<sup>-5</sup></code> of the actual value will be accepted.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,3,-1,-3,5,3,6,7], k = 3
<strong>Output:</strong> [1.00000,-1.00000,-1.00000,3.00000,5.00000,6.00000]
<strong>Explanation:</strong> 
Window position                Median
---------------                -----
[<strong>1  3  -1</strong>] -3  5  3  6  7        1
 1 [<strong>3  -1  -3</strong>] 5  3  6  7       -1
 1  3 [<strong>-1  -3  5</strong>] 3  6  7       -1
 1  3  -1 [<strong>-3  5  3</strong>] 6  7        3
 1  3  -1  -3 [<strong>5  3  6</strong>] 7        5
 1  3  -1  -3  5 [<strong>3  6  7</strong>]       6
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,4,2,3,1,4,2], k = 3
<strong>Output:</strong> [2.00000,3.00000,3.00000,3.00000,2.00000,3.00000,2.00000]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= k &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></li>
</ul>


## Solution

---
### Python3
``` py title='sliding-window-median'
class Solution:
    def medianSlidingWindow(self, nums: List[int], k: int) -> List[float]:
    
        def move(h1, h2):
            value, index = heapq.heappop(h1)
            heapq.heappush(h2, (-value, index))
        
        def median():
            return float(large[0][0]) if k & 1 else (large[0][0] - small[0][0]) / 2
    
        small, large = [], []
        for i in range(k):
            heapq.heappush(small, (-nums[i], i))
        
        for _ in range(k - (k >> 1)):
            move(small, large)
        
        res = [median()]
        
        for i, x in enumerate(nums[k:]):
            if x >= large[0][0]:
                heapq.heappush(large, (x, i + k))
                if nums[i] <= large[0][0]:
                    move(large, small)
            else:
                heapq.heappush(small, (-x, i + k))
                if nums[i] >= large[0][0]:
                    move(small, large)
            
            while small and small[0][1] <= i:
                heapq.heappop(small)
            
            while large and large[0][1] <= i:
                heapq.heappop(large)
            
            res.append(median())
            
        return res
```

