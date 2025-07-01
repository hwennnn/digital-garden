---
title: 769. Max Chunks To Make Sorted
draft: false
tags: 
  - leetcode-medium
  - array
  - stack
  - greedy
  - sorting
  - monotonic-stack
  - weekly-contest-68
  - contest-question
date: 2020-10-16
---

[Problem Link](https://leetcode.com/problems/max-chunks-to-make-sorted/)

## Description

---
<p>You are given an integer array <code>arr</code> of length <code>n</code> that represents a permutation of the integers in the range <code>[0, n - 1]</code>.</p>

<p>We split <code>arr</code> into some number of <strong>chunks</strong> (i.e., partitions), and individually sort each chunk. After concatenating them, the result should equal the sorted array.</p>

<p>Return <em>the largest number of chunks we can make to sort the array</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> arr = [4,3,2,1,0]
<strong>Output:</strong> 1
<strong>Explanation:</strong>
Splitting into two or more chunks will not return the required result.
For example, splitting into [4, 3], [2, 1, 0] will result in [3, 4, 0, 1, 2], which isn&#39;t sorted.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> arr = [1,0,2,3,4]
<strong>Output:</strong> 4
<strong>Explanation:</strong>
We can split into two chunks, such as [1, 0], [2, 3, 4].
However, splitting into [1, 0], [2], [3], [4] is the highest number of chunks possible.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == arr.length</code></li>
	<li><code>1 &lt;= n &lt;= 10</code></li>
	<li><code>0 &lt;= arr[i] &lt; n</code></li>
	<li>All the elements of <code>arr</code> are <strong>unique</strong>.</li>
</ul>


## Solution

---
### Python3
``` py title='max-chunks-to-make-sorted'
class Solution:
    def maxChunksToSorted(self, arr: List[int]) -> int:
        N = len(arr)
        maxSoFar = res = 0

        for i, x in enumerate(arr):
            maxSoFar = max(maxSoFar, x)

            if maxSoFar == i:
                res += 1

        return res
```
### C++
``` cpp title='max-chunks-to-make-sorted'
class Solution {
public:
    int maxChunksToSorted(vector<int>& arr) {
        int right = -1, res = 0;
        
        for (int i = 0; i < arr.size(); i++){
            right = max(right, arr[i]);
            res += right == i;
        }
        
        return res;
    }
};
```

