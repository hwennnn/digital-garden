---
title: 1636. Sort Array by Increasing Frequency
draft: false
tags: 
  - leetcode-easy
  - array
  - hash-table
  - sorting
  - biweekly-contest-38
  - contest-question
date: 2020-10-31
---

[Problem Link](https://leetcode.com/problems/sort-array-by-increasing-frequency/)

## Description

---
<p>Given an array of integers <code>nums</code>, sort the array in <strong>increasing</strong> order based on the frequency of the values. If multiple values have the same frequency, sort them in <strong>decreasing</strong> order.</p>

<p>Return the <em>sorted array</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,1,2,2,2,3]
<strong>Output:</strong> [3,1,1,2,2,2]
<strong>Explanation:</strong> &#39;3&#39; has a frequency of 1, &#39;1&#39; has a frequency of 2, and &#39;2&#39; has a frequency of 3.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,3,1,3,2]
<strong>Output:</strong> [1,3,3,2,2]
<strong>Explanation:</strong> &#39;2&#39; and &#39;3&#39; both have a frequency of 2, so they are sorted in decreasing order.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [-1,1,-6,4,5,-6,1,4,1]
<strong>Output:</strong> [5,-1,4,4,-6,-6,1,1,1]</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 100</code></li>
	<li><code>-100 &lt;= nums[i] &lt;= 100</code></li>
</ul>


## Solution

---
### C++
``` cpp title='sort-array-by-increasing-frequency'
class Solution {
public:
    vector<int> frequencySort(vector<int>& nums) {
        unordered_map<int, int> count;

        for (int x: nums) count[x]++;

        sort(nums.begin(), nums.end(), [&](int a, int b){
            if (count[a] == count[b]) return a > b;
            
            return count[a] < count[b];
        });

        return nums;
    }
};
```
### Python3
``` py title='sort-array-by-increasing-frequency'
class Solution:
    def frequencySort(self, nums: List[int]) -> List[int]:
        c = collections.Counter(nums)
        c = sorted(c.items(), key = lambda x : (x[1],-x[0]))

        res = []
        
        for key,value in c:
            for _ in range(value):
                res.append(key)
        
        return res
```

