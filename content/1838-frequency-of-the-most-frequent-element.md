---
title: 1838. Frequency of the Most Frequent Element
draft: false
tags: 
  - leetcode-medium
  - array
  - binary-search
  - greedy
  - sliding-window
  - sorting
  - prefix-sum
  - weekly-contest-238
  - contest-question
date: 2023-11-18
---

[Problem Link](https://leetcode.com/problems/frequency-of-the-most-frequent-element/)

## Description

---
<p>The <strong>frequency</strong> of an element is the number of times it occurs in an array.</p>

<p>You are given an integer array <code>nums</code> and an integer <code>k</code>. In one operation, you can choose an index of <code>nums</code> and increment the element at that index by <code>1</code>.</p>

<p>Return <em>the <strong>maximum possible frequency</strong> of an element after performing <strong>at most</strong> </em><code>k</code><em> operations</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,4], k = 5
<strong>Output:</strong> 3<strong>
Explanation:</strong> Increment the first element three times and the second element two times to make nums = [4,4,4].
4 has a frequency of 3.</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,4,8,13], k = 5
<strong>Output:</strong> 2
<strong>Explanation:</strong> There are multiple optimal solutions:
- Increment the first element three times to make nums = [4,4,8,13]. 4 has a frequency of 2.
- Increment the second element four times to make nums = [1,8,8,13]. 8 has a frequency of 2.
- Increment the third element five times to make nums = [1,4,13,13]. 13 has a frequency of 2.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,9,6], k = 2
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= k &lt;= 10<sup>5</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='frequency-of-the-most-frequent-element'
class Solution:
    def maxFrequency(self, nums: List[int], k: int) -> int:
        N = len(nums)
        nums.sort()
        prefix = list(accumulate(nums, initial = 0))
        i = res = 0

        for j in range(N):
            while (j - i) * nums[j] - (prefix[j] - prefix[i]) > k:
                i += 1
            
            res = max(res, j - i + 1)
        
        return res
```

