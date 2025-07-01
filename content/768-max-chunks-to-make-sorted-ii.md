---
title: 768. Max Chunks To Make Sorted II
draft: false
tags: 
  - leetcode-hard
  - array
  - stack
  - greedy
  - sorting
  - monotonic-stack
  - weekly-contest-68
  - contest-question
date: 2023-09-09
---

[Problem Link](https://leetcode.com/problems/max-chunks-to-make-sorted-ii/)

## Description

---
<p>You are given an integer array <code>arr</code>.</p>

<p>We split <code>arr</code> into some number of <strong>chunks</strong> (i.e., partitions), and individually sort each chunk. After concatenating them, the result should equal the sorted array.</p>

<p>Return <em>the largest number of chunks we can make to sort the array</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> arr = [5,4,3,2,1]
<strong>Output:</strong> 1
<strong>Explanation:</strong>
Splitting into two or more chunks will not return the required result.
For example, splitting into [5, 4], [3, 2, 1] will result in [4, 5, 1, 2, 3], which isn&#39;t sorted.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> arr = [2,1,3,4,4]
<strong>Output:</strong> 4
<strong>Explanation:</strong>
We can split into two chunks, such as [2, 1], [3, 4, 4].
However, splitting into [2, 1], [3], [4], [4] is the highest number of chunks possible.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= arr.length &lt;= 2000</code></li>
	<li><code>0 &lt;= arr[i] &lt;= 10<sup>8</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='max-chunks-to-make-sorted-ii'
class Solution:
    def maxChunksToSorted(self, arr: List[int]) -> int:
        N = len(arr)
        maxOfLeft = [0] * N
        minOfRight = [0] * N
        maxOfLeft[0] = arr[0]
        minOfRight[-1] = arr[-1]

        for i in range(1, N):
            maxOfLeft[i] = max(maxOfLeft[i - 1], arr[i])
            minOfRight[N - i - 1] = min(minOfRight[N - i], arr[N - i - 1])
        
        res = 1
        for i in range(N - 1):
            if maxOfLeft[i] <= minOfRight[i + 1]:
                res += 1
        
        return res

```

