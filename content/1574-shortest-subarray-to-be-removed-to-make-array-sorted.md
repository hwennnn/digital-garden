---
title: 1574. Shortest Subarray to be Removed to Make Array Sorted
draft: false
tags: 
  - leetcode-medium
  - array
  - two-pointers
  - binary-search
  - stack
  - monotonic-stack
  - biweekly-contest-34
  - contest-question
date: 2020-09-06
---

[Problem Link](https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/)

## Description

---
<p>Given an integer array <code>arr</code>, remove a subarray (can be empty) from <code>arr</code> such that the remaining elements in <code>arr</code> are <strong>non-decreasing</strong>.</p>

<p>Return <em>the length of the shortest subarray to remove</em>.</p>

<p>A <strong>subarray</strong> is a contiguous subsequence of the array.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> arr = [1,2,3,10,4,2,3,5]
<strong>Output:</strong> 3
<strong>Explanation:</strong> The shortest subarray we can remove is [10,4,2] of length 3. The remaining elements after that will be [1,2,3,3,5] which are sorted.
Another correct solution is to remove the subarray [3,10,4].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> arr = [5,4,3,2,1]
<strong>Output:</strong> 4
<strong>Explanation:</strong> Since the array is strictly decreasing, we can only keep a single element. Therefore we need to remove a subarray of length 4, either [5,4,3,2] or [4,3,2,1].
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> arr = [1,2,3]
<strong>Output:</strong> 0
<strong>Explanation:</strong> The array is already non-decreasing. We do not need to remove any elements.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= arr.length &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= arr[i] &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='shortest-subarray-to-be-removed-to-make-array-sorted'
class Solution:
    def findLengthOfShortestSubarray(self, arr: List[int]) -> int:
        n = len(arr)
        left = 0
        
        while left+1 < n and arr[left] <= arr[left+1]: left += 1
            
        if left + 1 == n: return 0
        
        right = n-1
        
        while left < right and arr[right] >= arr[right-1]: right -= 1
        
        res = min(n - left - 1, right)
        i = 0
        j = right
        while i <= left and j < n:
            if arr[j] >= arr[i]:
                res = min(res, j - i - 1)
                i += 1
            else:
                j += 1
            
        
        return res 
```
### C++
``` cpp title='shortest-subarray-to-be-removed-to-make-array-sorted'
class Solution {
public:
    int findLengthOfShortestSubarray(vector<int>& arr) {
        int n = arr.size();
        int left = 0;
        while (left+1 < n && arr[left+1] >= arr[left]) left++;
        if (left+1 == n) return 0;

        int right = n-1;
        while (right > left && arr[right-1] <= arr[right]) right--;

        int res = min(n - left - 1, right);
        int i = 0, j = right;

        while (i <= left && j < n){
            if (arr[j] >= arr[i]){
                res = min(res, j - i - 1);
                i++;
            }else{
                j++;
            }
        }

        return res;
    }
};
```

