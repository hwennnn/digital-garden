---
title: 2488. Count Subarrays With Median K
draft: false
tags: 
  - leetcode-hard
  - array
  - hash-table
  - prefix-sum
  - weekly-contest-321
  - contest-question
date: 2022-11-27
---

[Problem Link](https://leetcode.com/problems/count-subarrays-with-median-k/)

## Description

---
<p>You are given an array <code>nums</code> of size <code>n</code> consisting of <strong>distinct </strong>integers from <code>1</code> to <code>n</code> and a positive integer <code>k</code>.</p>

<p>Return <em>the number of non-empty subarrays in </em><code>nums</code><em> that have a <strong>median</strong> equal to </em><code>k</code>.</p>

<p><strong>Note</strong>:</p>

<ul>
	<li>The median of an array is the <strong>middle </strong>element after sorting the array in <strong>ascending </strong>order. If the array is of even length, the median is the <strong>left </strong>middle element.

	<ul>
		<li>For example, the median of <code>[2,3,1,4]</code> is <code>2</code>, and the median of <code>[8,4,3,5,1]</code> is <code>4</code>.</li>
	</ul>
	</li>
	<li>A subarray is a contiguous part of an array.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,2,1,4,5], k = 4
<strong>Output:</strong> 3
<strong>Explanation:</strong> The subarrays that have a median equal to 4 are: [4], [4,5] and [1,4,5].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,3,1], k = 3
<strong>Output:</strong> 1
<strong>Explanation:</strong> [3] is the only subarray that has a median equal to 3.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == nums.length</code></li>
	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i], k &lt;= n</code></li>
	<li>The integers in <code>nums</code> are distinct.</li>
</ul>


## Solution

---
### Python3
``` py title='count-subarrays-with-median-k'
class Solution:
    def countSubarrays(self, nums: List[int], k: int) -> int:
        N = len(nums)
        
        kIndex = nums.index(k)
        t = nums[kIndex]
        res = 0
        
        ld = rd = 0
        left, right = defaultdict(int), defaultdict(int)
        left[0] = right[0] = 1
        
        for index in range(kIndex + 1, N):
            if nums[index] > t:
                rd += 1
            else:
                rd -= 1
            
            right[rd] += 1
        
        for index in range(kIndex - 1, -1, -1):
            if nums[index] > t:
                ld += 1
            else:
                ld -= 1
            
            left[ld] += 1
        
        for x in left.keys():
            res += left[x] * right[-x]
            res += left[x] * right[-x + 1]

        return res
                
            
```

