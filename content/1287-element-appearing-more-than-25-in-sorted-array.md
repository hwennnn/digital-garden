---
title: 1287. Element Appearing More Than 25% In Sorted Array
draft: false
tags: 
  - leetcode-easy
  - array
  - biweekly-contest-15
  - contest-question
date: 2023-12-11
---

[Problem Link](https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/)

## Description

---
<p>Given an integer array <strong>sorted</strong> in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> arr = [1,2,2,6,6,6,6,7,10]
<strong>Output:</strong> 6
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> arr = [1,1]
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= arr.length &lt;= 10<sup>4</sup></code></li>
	<li><code>0 &lt;= arr[i] &lt;= 10<sup>5</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='element-appearing-more-than-25-in-sorted-array'
class Solution:
    def findSpecialInteger(self, arr: List[int]) -> int:
        N = len(arr)
        freq = N // 4

        for i in range(N - freq + 1):
            if arr[i] == arr[i + freq]:
                return arr[i]
```

