---
title: 1671. Minimum Number of Removals to Make Mountain Array
draft: false
tags: 
  - leetcode-hard
  - array
  - binary-search
  - dynamic-programming
  - greedy
  - biweekly-contest-40
  - contest-question
date: 2025-01-06
---

[Problem Link](https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/)

## Description

---
<p>You may recall that an array <code>arr</code> is a <strong>mountain array</strong> if and only if:</p>

<ul>
	<li><code>arr.length &gt;= 3</code></li>
	<li>There exists some index <code>i</code> (<strong>0-indexed</strong>) with <code>0 &lt; i &lt; arr.length - 1</code> such that:
	<ul>
		<li><code>arr[0] &lt; arr[1] &lt; ... &lt; arr[i - 1] &lt; arr[i]</code></li>
		<li><code>arr[i] &gt; arr[i + 1] &gt; ... &gt; arr[arr.length - 1]</code></li>
	</ul>
	</li>
</ul>

<p>Given an integer array <code>nums</code>​​​, return <em>the <strong>minimum</strong> number of elements to remove to make </em><code>nums<em>​​​</em></code><em> </em><em>a <strong>mountain array</strong>.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,3,1]
<strong>Output:</strong> 0
<strong>Explanation:</strong> The array itself is a mountain array so we do not need to remove any elements.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,1,1,5,6,2,3,1]
<strong>Output:</strong> 3
<strong>Explanation:</strong> One solution is to remove the elements at indices 0, 1, and 5, making the array nums = [1,5,6,3,1].
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>3 &lt;= nums.length &lt;= 1000</code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
	<li>It is guaranteed that you can make a mountain array out of <code>nums</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='minimum-number-of-removals-to-make-mountain-array'
class Solution:
    def minimumMountainRemovals(self, nums: List[int]) -> int:
        N = len(nums)

        lis = [1] * N
        for i in range(N):
            for j in range(i):
                if nums[i] > nums[j]:
                    lis[i] = max(lis[i], lis[j] + 1)
        
        lds = [1] * N
        for i in range(N - 1, -1, -1):
            for j in range(i + 1, N):
                if nums[i] > nums[j]:
                    lds[i] = max(lds[i], lds[j] + 1)

        maxLength = 0
        for i in range(1, N - 1):
            if lis[i] > 1 and lds[i] > 1:
                maxLength = max(maxLength, lis[i] + lds[i] - 1)

        return N - maxLength
```

