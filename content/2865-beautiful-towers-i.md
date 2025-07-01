---
title: 2865. Beautiful Towers I
draft: false
tags: 
  - leetcode-medium
  - array
  - stack
  - monotonic-stack
  - weekly-contest-364
  - contest-question
date: 2023-09-24
---

[Problem Link](https://leetcode.com/problems/beautiful-towers-i/)

## Description

---
<p>You are given an array <code>heights</code> of <code>n</code> integers representing the number of bricks in <code>n</code> consecutive towers. Your task is to remove some bricks to form a <strong>mountain-shaped</strong> tower arrangement. In this arrangement, the tower heights are non-decreasing, reaching a maximum peak value with one or multiple consecutive towers and then non-increasing.</p>

<p>Return the <strong>maximum possible sum</strong> of heights of a mountain-shaped tower arrangement.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">heights = [5,3,4,1,1]</span></p>

<p><strong>Output:</strong> <span class="example-io">13</span></p>

<p><strong>Explanation:</strong></p>

<p>We remove some bricks to make <code>heights =&nbsp;[5,3,3,1,1]</code>, the peak is at index 0.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">heights = [6,5,3,9,2,7]</span></p>

<p><strong>Output:</strong> <span class="example-io">22</span></p>

<p><strong>Explanation:</strong></p>

<p>We remove some bricks to make <code>heights =&nbsp;[3,3,3,9,2,2]</code>, the peak is at index 3.</p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">heights = [3,2,5,5,2,3]</span></p>

<p><strong>Output:</strong> <span class="example-io">18</span></p>

<p><strong>Explanation:</strong></p>

<p>We remove some bricks to make <code>heights = [2,2,5,5,2,2]</code>, the peak is at index 2 or 3.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n == heights.length &lt;= 10<sup>3</sup></code></li>
	<li><code>1 &lt;= heights[i] &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='beautiful-towers-i'
class Solution:
    def maximumSumOfHeights(self, maxHeights: List[int]) -> int:
        N = len(maxHeights)
        res = 0
        
        for i in range(N):
            curr = maxHeights[i]
            x = maxHeights[i]
            
            for j in range(i - 1, -1, -1):
                x = min(x, maxHeights[j])
                curr += x
            
            x = maxHeights[i]
            for j in range(i + 1, N):
                x = min(x, maxHeights[j])
                curr += x
            
            res = max(res, curr)
        
        return res
```

