---
title: 2670. Find the Distinct Difference Array
draft: false
tags: 
  - leetcode-easy
  - array
  - hash-table
  - weekly-contest-344
  - contest-question
date: 2023-05-07
---

[Problem Link](https://leetcode.com/problems/find-the-distinct-difference-array/)

## Description

---
<p>You are given a <strong>0-indexed</strong> array <code>nums</code> of length <code>n</code>.</p>

<p>The <strong>distinct difference</strong> array of <code>nums</code> is an array <code>diff</code> of length <code>n</code> such that <code>diff[i]</code> is equal to the number of distinct elements in the suffix <code>nums[i + 1, ..., n - 1]</code> <strong>subtracted from</strong> the number of distinct elements in the prefix <code>nums[0, ..., i]</code>.</p>

<p>Return <em>the <strong>distinct difference</strong> array of </em><code>nums</code>.</p>

<p>Note that <code>nums[i, ..., j]</code> denotes the subarray of <code>nums</code> starting at index <code>i</code> and ending at index <code>j</code> inclusive. Particularly, if <code>i &gt; j</code> then <code>nums[i, ..., j]</code> denotes an empty subarray.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,4,5]
<strong>Output:</strong> [-3,-1,1,3,5]
<strong>Explanation:</strong> For index i = 0, there is 1 element in the prefix and 4 distinct elements in the suffix. Thus, diff[0] = 1 - 4 = -3.
For index i = 1, there are 2 distinct elements in the prefix and 3 distinct elements in the suffix. Thus, diff[1] = 2 - 3 = -1.
For index i = 2, there are 3 distinct elements in the prefix and 2 distinct elements in the suffix. Thus, diff[2] = 3 - 2 = 1.
For index i = 3, there are 4 distinct elements in the prefix and 1 distinct element in the suffix. Thus, diff[3] = 4 - 1 = 3.
For index i = 4, there are 5 distinct elements in the prefix and no elements in the suffix. Thus, diff[4] = 5 - 0 = 5.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,2,3,4,2]
<strong>Output:</strong> [-2,-1,0,2,3]
<strong>Explanation:</strong> For index i = 0, there is 1 element in the prefix and 3 distinct elements in the suffix. Thus, diff[0] = 1 - 3 = -2.
For index i = 1, there are 2 distinct elements in the prefix and 3 distinct elements in the suffix. Thus, diff[1] = 2 - 3 = -1.
For index i = 2, there are 2 distinct elements in the prefix and 2 distinct elements in the suffix. Thus, diff[2] = 2 - 2 = 0.
For index i = 3, there are 3 distinct elements in the prefix and 1 distinct element in the suffix. Thus, diff[3] = 3 - 1 = 2.
For index i = 4, there are 3 distinct elements in the prefix and no elements in the suffix. Thus, diff[4] = 3 - 0 = 3.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n == nums.length&nbsp;&lt;= 50</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 50</code></li>
</ul>


## Solution

---
### Python3
``` py title='find-the-distinct-difference-array'
class Solution:
    def distinctDifferenceArray(self, nums: List[int]) -> List[int]:
        prefix = Counter()
        suffix = Counter(nums)
        res = []
        
        for x in nums:
            prefix[x] += 1
            suffix[x] -= 1
            
            left = sum(1 for v in prefix.values() if v > 0)
            right = sum(1 for v in suffix.values() if v > 0)
            
            res.append(left - right)
        
        return res
```

