---
title: 3209. Number of Subarrays With AND Value of K
draft: false
tags: 
  - leetcode-hard
  - array
  - binary-search
  - bit-manipulation
  - segment-tree
  - biweekly-contest-134
  - contest-question
date: 2024-07-10
---

[Problem Link](https://leetcode.com/problems/number-of-subarrays-with-and-value-of-k/)

## Description

---
<p>Given an array of integers <code>nums</code> and an integer <code>k</code>, return the number of <span data-keyword="subarray-nonempty">subarrays</span> of <code>nums</code> where the bitwise <code>AND</code> of the elements of the subarray equals <code>k</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [1,1,1], k = 1</span></p>

<p><strong>Output:</strong> <span class="example-io">6</span></p>

<p><strong>Explanation:</strong></p>

<p>All subarrays contain only 1&#39;s.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [1,1,2], k = 1</span></p>

<p><strong>Output:</strong> <span class="example-io">3</span></p>

<p><strong>Explanation:</strong></p>

<p>Subarrays having an <code>AND</code> value of 1 are: <code>[<u><strong>1</strong></u>,1,2]</code>, <code>[1,<u><strong>1</strong></u>,2]</code>, <code>[<u><strong>1,1</strong></u>,2]</code>.</p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [1,2,3], k = 2</span></p>

<p><strong>Output:</strong> <span class="example-io">2</span></p>

<p><strong>Explanation:</strong></p>

<p>Subarrays having an <code>AND</code> value of 2 are: <code>[1,<b><u>2</u></b>,3]</code>, <code>[1,<u><strong>2,3</strong></u>]</code>.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= nums[i], k &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='number-of-subarrays-with-and-value-of-k'
class Solution:
    def countSubarrays(self, nums: List[int], k: int) -> int:
        N = len(nums)
        M = max(nums).bit_length() + 1
        
        def atLeast(k):
            A = [0] * M

            def calc(length):
                v = 0

                for b in range(M):
                    if A[b] == length:
                        v += (1 << b)
                
                return v
            
            i = 0
            ans = 0

            for j, x in enumerate(nums):
                for b in range(M):
                    if x & (1 << b):
                        A[b] += 1
                
                while i <= j and calc(j - i + 1) < k:
                    for b in range(M):
                        if nums[i] & (1 << b):
                            A[b] -= 1
                    i += 1
                
                ans += (j - i + 1)

            return ans


        return atLeast(k) - atLeast(k + 1)
```
### C++
``` cpp title='number-of-subarrays-with-and-value-of-k'
class Solution {
public:
    long long countSubarrays(vector<int>& nums, int k) {
        map<int, int> prev;
        int n = nums.size();
        long long cnt = 0;
        for (int num : nums){
            map<int, int> cur;
            for (auto [key, v] : prev)
                cur[key & num] += v;
            cur[num]++;

            cnt += cur[k];

            prev = cur;
        }
        return cnt;
    }
};
```

