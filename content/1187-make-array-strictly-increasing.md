---
title: 1187. Make Array Strictly Increasing
draft: false
tags: 
  - leetcode-hard
  - array
  - binary-search
  - dynamic-programming
  - sorting
date: 2023-06-17
---

[Problem Link](https://leetcode.com/problems/make-array-strictly-increasing/)

## Description

---
<p>Given two integer arrays&nbsp;<code>arr1</code> and <code>arr2</code>, return the minimum number of operations (possibly zero) needed&nbsp;to make <code>arr1</code> strictly increasing.</p>

<p>In one operation, you can choose two indices&nbsp;<code>0 &lt;=&nbsp;i &lt; arr1.length</code>&nbsp;and&nbsp;<code>0 &lt;= j &lt; arr2.length</code>&nbsp;and do the assignment&nbsp;<code>arr1[i] = arr2[j]</code>.</p>

<p>If there is no way to make&nbsp;<code>arr1</code>&nbsp;strictly increasing,&nbsp;return&nbsp;<code>-1</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> arr1 = [1,5,3,6,7], arr2 = [1,3,2,4]
<strong>Output:</strong> 1
<strong>Explanation:</strong> Replace <code>5</code> with <code>2</code>, then <code>arr1 = [1, 2, 3, 6, 7]</code>.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> arr1 = [1,5,3,6,7], arr2 = [4,3,1]
<strong>Output:</strong> 2
<strong>Explanation:</strong> Replace <code>5</code> with <code>3</code> and then replace <code>3</code> with <code>4</code>. <code>arr1 = [1, 3, 4, 6, 7]</code>.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> arr1 = [1,5,3,6,7], arr2 = [1,6,3,3]
<strong>Output:</strong> -1
<strong>Explanation:</strong> You can&#39;t make <code>arr1</code> strictly increasing.</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= arr1.length, arr2.length &lt;= 2000</code></li>
	<li><code>0 &lt;= arr1[i], arr2[i] &lt;= 10^9</code></li>
</ul>

<p>&nbsp;</p>


## Solution

---
### Python
``` py title='make-array-strictly-increasing'
class Solution:
    def makeArrayIncreasing(self, arr1: List[int], arr2: List[int]) -> int:
        M, N = len(arr1), len(arr2)
        arr2.sort()

        @cache
        def go(i, prev):
            if i == M: return 0

            j = bisect_right(arr2, prev)

            res = inf

            if j < N:
                res = min(res, 1 + go(i + 1, arr2[j]))
            
            if prev < arr1[i]:
                res = min(res, go(i + 1, arr1[i]))

            return res
        
        res = go(0, -inf)

        return -1 if res == inf else res
```
