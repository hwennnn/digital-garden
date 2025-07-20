---
title: 239. Sliding Window Maximum
draft: false
tags: 
  - leetcode-hard
  - array
  - queue
  - sliding-window
  - heap-priority-queue
  - monotonic-queue
date: 2020-11-28
---

[Problem Link](https://leetcode.com/problems/sliding-window-maximum/)

## Description

---
<p>You are given an array of integers&nbsp;<code>nums</code>, there is a sliding window of size <code>k</code> which is moving from the very left of the array to the very right. You can only see the <code>k</code> numbers in the window. Each time the sliding window moves right by one position.</p>

<p>Return <em>the max sliding window</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,3,-1,-3,5,3,6,7], k = 3
<strong>Output:</strong> [3,3,5,5,6,7]
<strong>Explanation:</strong> 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       <strong>3</strong>
 1 [3  -1  -3] 5  3  6  7       <strong>3</strong>
 1  3 [-1  -3  5] 3  6  7      <strong> 5</strong>
 1  3  -1 [-3  5  3] 6  7       <strong>5</strong>
 1  3  -1  -3 [5  3  6] 7       <strong>6</strong>
 1  3  -1  -3  5 [3  6  7]      <strong>7</strong>
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1], k = 1
<strong>Output:</strong> [1]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
	<li><code>1 &lt;= k &lt;= nums.length</code></li>
</ul>


## Solution

---
### Python3
``` py title='sliding-window-maximum'
class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        N = len(nums)
        res = []
        queue = deque()

        for i, x in enumerate(nums):
            while queue and x > queue[-1]:
                queue.pop()
            
            queue.append(x)

            if i >= k - 1:
                res.append(queue[0])

                if queue[0] == nums[i - k + 1]:
                    queue.popleft()

        return res
```
### C++
``` cpp title='sliding-window-maximum'
class Solution {
public:
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {
        deque<int> deq;
        vector<int> res;
        
        for (int i = 0; i < nums.size(); i++){
            if (i >= k && deq.front() == nums[i-k])
                deq.pop_front();
            
            while (deq.size() > 0 && deq.back() < nums[i])
                deq.pop_back();
            
            deq.push_back(nums[i]);
            
            if (i >= k-1)
                res.push_back(deq.front());
            
        }
        
        return res;
    }
};
```

