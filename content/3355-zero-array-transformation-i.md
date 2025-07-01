---
title: 3355. Zero Array Transformation I
draft: false
tags: 
  - leetcode-medium
  - array
  - prefix-sum
  - weekly-contest-424
  - contest-question
date: 2025-05-20
---

[Problem Link](https://leetcode.com/problems/zero-array-transformation-i/)

## Description

---
<p>You are given an integer array <code>nums</code> of length <code>n</code> and a 2D array <code>queries</code>, where <code>queries[i] = [l<sub>i</sub>, r<sub>i</sub>]</code>.</p>

<p>For each <code>queries[i]</code>:</p>

<ul>
	<li>Select a <span data-keyword="subset">subset</span> of indices within the range <code>[l<sub>i</sub>, r<sub>i</sub>]</code> in <code>nums</code>.</li>
	<li>Decrement the values at the selected indices by 1.</li>
</ul>

<p>A <strong>Zero Array</strong> is an array where all elements are equal to 0.</p>

<p>Return <code>true</code> if it is <em>possible</em> to transform <code>nums</code> into a <strong>Zero Array </strong>after processing all the queries sequentially, otherwise return <code>false</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [1,0,1], queries = [[0,2]]</span></p>

<p><strong>Output:</strong> <span class="example-io">true</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li><strong>For i = 0:</strong>

	<ul>
		<li>Select the subset of indices as <code>[0, 2]</code> and decrement the values at these indices by 1.</li>
		<li>The array will become <code>[0, 0, 0]</code>, which is a Zero Array.</li>
	</ul>
	</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [4,3,2,1], queries = [[1,3],[0,2]]</span></p>

<p><strong>Output:</strong> <span class="example-io">false</span></p>

<p><strong>Explanation:</strong></p>

<ul>
	<li><strong>For i = 0:</strong>

	<ul>
		<li>Select the subset of indices as <code>[1, 2, 3]</code> and decrement the values at these indices by 1.</li>
		<li>The array will become <code>[4, 2, 1, 0]</code>.</li>
	</ul>
	</li>
	<li><strong>For i = 1:</strong>
	<ul>
		<li>Select the subset of indices as <code>[0, 1, 2]</code> and decrement the values at these indices by 1.</li>
		<li>The array will become <code>[3, 1, 0, 0]</code>, which is not a Zero Array.</li>
	</ul>
	</li>
</ul>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= queries.length &lt;= 10<sup>5</sup></code></li>
	<li><code>queries[i].length == 2</code></li>
	<li><code>0 &lt;= l<sub>i</sub> &lt;= r<sub>i</sub> &lt; nums.length</code></li>
</ul>


## Solution

---
### Python3
``` py title='zero-array-transformation-i'
class Solution:
    def isZeroArray(self, nums: List[int], queries: List[List[int]]) -> bool:
        N = len(nums)
        lines = [0] * (N + 1)

        for l, r in queries:
            lines[l] -= 1
            lines[r + 1] += 1
        
        for i in range(N):
            lines[i + 1] += lines[i]
        
        for i in range(N):
            if nums[i] + lines[i] > 0:
                return False

        return True
```

