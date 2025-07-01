---
title: 1089. Duplicate Zeros
draft: false
tags: 
  - leetcode-easy
  - array
  - two-pointers
  - weekly-contest-141
  - contest-question
date: 2021-05-29
---

[Problem Link](https://leetcode.com/problems/duplicate-zeros/)

## Description

---
<p>Given a fixed-length integer array <code>arr</code>, duplicate each occurrence of zero, shifting the remaining elements to the right.</p>

<p><strong>Note</strong> that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> arr = [1,0,2,3,0,4,5,0]
<strong>Output:</strong> [1,0,0,2,3,0,0,4]
<strong>Explanation:</strong> After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> arr = [1,2,3]
<strong>Output:</strong> [1,2,3]
<strong>Explanation:</strong> After calling your function, the input array is modified to: [1,2,3]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= arr.length &lt;= 10<sup>4</sup></code></li>
	<li><code>0 &lt;= arr[i] &lt;= 9</code></li>
</ul>


## Solution

---
### Python3
``` py title='duplicate-zeros'
class Solution:
    def duplicateZeros(self, arr: List[int]) -> None:
        """
        Do not return anything, modify arr in-place instead.
        """
        
        zeroes = arr.count(0)
        n = len(arr)
        
        for i in range(n - 1, -1, -1):
            
            if i + zeroes < n:
                arr[i + zeroes] = arr[i]
            
            if arr[i] == 0:
                zeroes -= 1
                
                if i + zeroes < n:
                    arr[i + zeroes] = 0
```

