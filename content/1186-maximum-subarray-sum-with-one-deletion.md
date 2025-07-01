---
title: 1186. Maximum Subarray Sum with One Deletion
draft: false
tags: 
  - leetcode-medium
  - array
  - dynamic-programming
  - weekly-contest-153
  - contest-question
date: 2021-05-03
---

[Problem Link](https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/)

## Description

---
<p>Given an array of integers, return the maximum sum for a <strong>non-empty</strong>&nbsp;subarray (contiguous elements) with at most one element deletion.&nbsp;In other words, you want to choose a subarray and optionally delete one element from it so that there is still at least one element left and the&nbsp;sum of the remaining elements is maximum possible.</p>

<p>Note that the subarray needs to be <strong>non-empty</strong> after deleting one element.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> arr = [1,-2,0,3]
<strong>Output:</strong> 4
<strong>Explanation: </strong>Because we can choose [1, -2, 0, 3] and drop -2, thus the subarray [1, 0, 3] becomes the maximum value.</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> arr = [1,-2,-2,3]
<strong>Output:</strong> 3
<strong>Explanation: </strong>We just choose [3] and it&#39;s the maximum sum.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> arr = [-1,-1,-1,-1]
<strong>Output:</strong> -1
<strong>Explanation:</strong>&nbsp;The final subarray needs to be non-empty. You can&#39;t choose [-1] and delete -1 from it, then get an empty subarray to make the sum equals to 0.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= arr.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>4</sup> &lt;= arr[i] &lt;= 10<sup>4</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='maximum-subarray-sum-with-one-deletion'
class Solution:
    def maximumSum(self, arr: List[int]) -> int:
        n = len(arr)
        
        dp1 = [arr[0] for _ in range(n)]
        dp2 = [arr[0] for _ in range(n)]
        
        for i in range(1, n):
            dp1[i] = max(dp1[i-1] + arr[i], arr[i])
            dp2[i] = max(dp2[i-1] + arr[i], arr[i])
            
            if i >= 2:
                dp1[i] = max(dp1[i], dp2[i - 2] + arr[i])
            
        return max(dp1)
```

