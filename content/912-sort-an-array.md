---
title: 912. Sort an Array
draft: false
tags: 
  - leetcode-medium
  - array
  - divide-and-conquer
  - sorting
  - heap-priority-queue
  - merge-sort
  - bucket-sort
  - radix-sort
  - counting-sort
date: 2023-03-01
---

[Problem Link](https://leetcode.com/problems/sort-an-array/)

## Description

---
<p>Given an array of integers <code>nums</code>, sort the array in ascending order and return it.</p>

<p>You must solve the problem <strong>without using any built-in</strong> functions in <code>O(nlog(n))</code> time complexity and with the smallest space complexity possible.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [5,2,3,1]
<strong>Output:</strong> [1,2,3,5]
<strong>Explanation:</strong> After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [5,1,1,2,0,0]
<strong>Output:</strong> [0,0,1,1,2,5]
<strong>Explanation:</strong> Note that the values of nums are not necessarily unique.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>-5 * 10<sup>4</sup> &lt;= nums[i] &lt;= 5 * 10<sup>4</sup></code></li>
</ul>


## Solution

---
### C++
``` cpp title='sort-an-array'
class Solution {
public:
    void mergeSort(int i, int j, vector<int>& nums) {
        if (i >= j) return;

        int mid = (i + j) / 2;
        mergeSort(i, mid, nums);
        mergeSort(mid + 1, j, nums);
        merge(i, mid, j, nums);
    }

    void merge(int i, int mid, int j, vector<int>& nums) {
        if (i >= j) return;
        int l = i, r = mid + 1, k = 0, size = j - i + 1;
        vector<int> sorted(size);

        while (l <= mid && r <= j)
            sorted[k++] = nums[l] < nums[r] ? nums[l++] : nums[r++];
        
        while (l <= mid)
            sorted[k++] = nums[l++];
        
        while (r <= j)
            sorted[k++] = nums[r++];
        
        for (k = 0; k < size; k++)
            nums[k + i] = sorted[k];
    }

    vector<int> sortArray(vector<int>& nums) {
       int N = nums.size();

       mergeSort(0, N - 1, nums);

       return nums;
    }
};
```
### Python3
``` py title='sort-an-array'
class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        N = len(nums)

        def merge(left, right):
            L, R = len(left), len(right)
            s = []
            i = j = 0

            while i < L or j < R:
                if i < L and j < R:
                    if left[i] < right[j]:
                        s.append(left[i])
                        i += 1
                    else:
                        s.append(right[j])
                        j += 1
                else:
                    if i < L:
                        s.append(left[i])
                        i += 1
                    else:
                        s.append(right[j])
                        j += 1

            return s

        def mergeSort(i, j):
            if i == j: return [nums[i]]

            mid = (i + j) // 2

            left = mergeSort(i, mid)
            right = mergeSort(mid + 1, j)

            return merge(left, right)
        
        return mergeSort(0, N - 1)
```

