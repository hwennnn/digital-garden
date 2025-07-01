---
title: 905. Sort Array By Parity
draft: false
tags: 
  - leetcode-easy
  - array
  - two-pointers
  - sorting
  - weekly-contest-102
  - contest-question
date: 2020-08-21
---

[Problem Link](https://leetcode.com/problems/sort-array-by-parity/)

## Description

---
<p>Given an integer array <code>nums</code>, move all the even integers at the beginning of the array followed by all the odd integers.</p>

<p>Return <em><strong>any array</strong> that satisfies this condition</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,1,2,4]
<strong>Output:</strong> [2,4,3,1]
<strong>Explanation:</strong> The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [0]
<strong>Output:</strong> [0]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 5000</code></li>
	<li><code>0 &lt;= nums[i] &lt;= 5000</code></li>
</ul>


## Solution

---
### Python3
``` py title='sort-array-by-parity'
class Solution:
    def sortArrayByParity(self, nums: List[int]) -> List[int]:
        i = 0

        for j, x in enumerate(nums):
            if x % 2 == 0:
                nums[i], nums[j] = nums[j], nums[i]
                i += 1
        
        return nums
```
### C++
``` cpp title='sort-array-by-parity'
class Solution {
public:
    vector<int> sortArrayByParity(vector<int> &A) {
        for (int i = 0, j = 0; j < A.size(); j++)
            if (A[j] % 2 == 0) swap(A[i++], A[j]);
        return A;
    }
};
```

