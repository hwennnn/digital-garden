---
title: 2679. Sum in a Matrix
draft: false
tags: 
  - leetcode-medium
  - array
  - sorting
  - heap-priority-queue
  - matrix
  - simulation
  - biweekly-contest-104
  - contest-question
date: 2023-05-13
---

[Problem Link](https://leetcode.com/problems/sum-in-a-matrix/)

## Description

---
<p>You are given a <strong>0-indexed</strong> 2D integer array <code>nums</code>. Initially, your score is <code>0</code>. Perform the following operations until the matrix becomes empty:</p>

<ol>
	<li>From each row in the matrix, select the largest number and remove it. In the case of a tie, it does not matter which number is chosen.</li>
	<li>Identify the highest number amongst all those removed in step 1. Add that number to your <strong>score</strong>.</li>
</ol>

<p>Return <em>the final <strong>score</strong>.</em></p>
<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [[7,2,1],[6,4,2],[6,5,3],[3,2,1]]
<strong>Output:</strong> 15
<strong>Explanation:</strong> In the first operation, we remove 7, 6, 6, and 3. We then add 7 to our score. Next, we remove 2, 4, 5, and 2. We add 5 to our score. Lastly, we remove 1, 2, 3, and 1. We add 3 to our score. Thus, our final score is 7 + 5 + 3 = 15.
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [[1]]
<strong>Output:</strong> 1
<strong>Explanation:</strong> We remove 1 and add it to the answer. We return 1.</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 300</code></li>
	<li><code>1 &lt;= nums[i].length &lt;= 500</code></li>
	<li><code>0 &lt;= nums[i][j] &lt;= 10<sup>3</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='sum-in-a-matrix'
class Solution:
    def matrixSum(self, nums: List[List[int]]) -> int:
        rows, cols = len(nums), len(nums[0])
        res = 0
        
        for num in nums:
            num.sort()
        
        for col in range(cols):
            m = 0
            
            for row in range(rows):
                m = max(m, nums[row][col])
            
            res += m
        
        return res
```

