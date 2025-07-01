---
title: 1053. Previous Permutation With One Swap
draft: false
tags: 
  - leetcode-medium
  - array
  - greedy
  - weekly-contest-138
  - contest-question
date: 2021-06-05
---

[Problem Link](https://leetcode.com/problems/previous-permutation-with-one-swap/)

## Description

---
<p>Given an array of positive integers <code>arr</code> (not necessarily distinct), return <em>the </em><span data-keyword="lexicographically-smaller-array"><em>lexicographically</em></span><em> largest permutation that is smaller than</em> <code>arr</code>, that can be <strong>made with exactly one swap</strong>. If it cannot be done, then return the same array.</p>

<p><strong>Note</strong> that a <em>swap</em> exchanges the positions of two numbers <code>arr[i]</code> and <code>arr[j]</code></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> arr = [3,2,1]
<strong>Output:</strong> [3,1,2]
<strong>Explanation:</strong> Swapping 2 and 1.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> arr = [1,1,5]
<strong>Output:</strong> [1,1,5]
<strong>Explanation:</strong> This is already the smallest permutation.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> arr = [1,9,4,6,7]
<strong>Output:</strong> [1,7,4,6,9]
<strong>Explanation:</strong> Swapping 9 and 7.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= arr.length &lt;= 10<sup>4</sup></code></li>
	<li><code>1 &lt;= arr[i] &lt;= 10<sup>4</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='previous-permutation-with-one-swap'
class Solution:
    def prevPermOpt1(self, arr: List[int]) -> List[int]:
        n = len(arr)
        if n <= 1: return arr
        
        index = -1
        for i in range(n - 1, 0, -1):
            if arr[i] < arr[i - 1]:
                index = i - 1
                break
                
        if index == -1: return arr
        for i in range(n - 1, index - 1, -1):
            if arr[i] < arr[index] and arr[i] != arr[i - 1]:
                arr[i], arr[index] = arr[index], arr[i]
                break
        
        return arr
        
```

