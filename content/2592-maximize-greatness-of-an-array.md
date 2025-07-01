---
title: 2592. Maximize Greatness of an Array
draft: false
tags: 
  - leetcode-medium
  - array
  - two-pointers
  - greedy
  - sorting
  - biweekly-contest-100
  - contest-question
date: 2023-03-19
---

[Problem Link](https://leetcode.com/problems/maximize-greatness-of-an-array/)

## Description

---
<p>You are given a 0-indexed integer array <code>nums</code>. You are allowed to permute <code>nums</code> into a new array <code>perm</code> of your choosing.</p>

<p>We define the <strong>greatness</strong> of <code>nums</code> be the number of indices <code>0 &lt;= i &lt; nums.length</code> for which <code>perm[i] &gt; nums[i]</code>.</p>

<p>Return <em>the <strong>maximum</strong> possible greatness you can achieve after permuting</em> <code>nums</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,3,5,2,1,3,1]
<strong>Output:</strong> 4
<strong>Explanation:</strong> One of the optimal rearrangements is perm = [2,5,1,3,3,1,1].
At indices = 0, 1, 3, and 4, perm[i] &gt; nums[i]. Hence, we return 4.</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,4]
<strong>Output:</strong> 3
<strong>Explanation:</strong> We can prove the optimal perm is [2,3,4,1].
At indices = 0, 1, and 2, perm[i] &gt; nums[i]. Hence, we return 3.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='maximize-greatness-of-an-array'
class Solution:
    def maximizeGreatness(self, nums: List[int]) -> int:
        N = len(nums)
        heap = []
        res = 0
        nums.sort()
        
        for x in nums:
            if heap and x > heap[0]:
                heappop(heap)
                res += 1
                
            heappush(heap, x)
        
        return res
```

