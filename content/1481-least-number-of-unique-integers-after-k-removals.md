---
title: 1481. Least Number of Unique Integers after K Removals
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - greedy
  - sorting
  - counting
date: 2024-02-16
---

[Problem Link](https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/)

## Description

---
<p>Given an array of integers&nbsp;<code>arr</code>&nbsp;and an integer <code>k</code>.&nbsp;Find the <em>least number of unique integers</em>&nbsp;after removing <strong>exactly</strong> <code>k</code> elements<b>.</b></p>

<ol>
</ol>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input: </strong>arr = [5,5,4], k = 1
<strong>Output: </strong>1
<strong>Explanation</strong>: Remove the single 4, only 5 is left.
</pre>
<strong class="example">Example 2:</strong>

<pre>
<strong>Input: </strong>arr = [4,3,1,1,3,3,2], k = 3
<strong>Output: </strong>2
<strong>Explanation</strong>: Remove 4, 2 and either one of the two 1s or three 3s. 1 and 3 will be left.</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= arr.length&nbsp;&lt;= 10^5</code></li>
	<li><code>1 &lt;= arr[i] &lt;= 10^9</code></li>
	<li><code>0 &lt;= k&nbsp;&lt;= arr.length</code></li>
</ul>

## Solution

---
### Python3
``` py title='least-number-of-unique-integers-after-k-removals'
class Solution:
    def findLeastNumOfUniqueInts(self, arr: List[int], k: int) -> int:
        V = sorted(Counter(arr).values())
        N = len(V)

        for i, v in enumerate(V):
            if k < v:
                return N - i
                
            k -= v
        
        return 0
```

