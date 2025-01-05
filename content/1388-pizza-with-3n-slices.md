---
title: 1388. Pizza With 3n Slices
draft: false
tags: 
  - leetcode-hard
  - array
  - dynamic-programming
  - greedy
  - heap-priority-queue
date: 2022-03-26
---

[Problem Link](https://leetcode.com/problems/pizza-with-3n-slices/)

## Description

---
<p>There is a pizza with <code>3n</code> slices of varying size, you and your friends will take slices of pizza as follows:</p>

<ul>
	<li>You will pick <strong>any</strong> pizza slice.</li>
	<li>Your friend Alice will pick the next slice in the anti-clockwise direction of your pick.</li>
	<li>Your friend Bob will pick the next slice in the clockwise direction of your pick.</li>
	<li>Repeat until there are no more slices of pizzas.</li>
</ul>

<p>Given an integer array <code>slices</code> that represent the sizes of the pizza slices in a clockwise direction, return <em>the maximum possible sum of slice sizes that you can pick</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/02/18/sample_3_1723.png" style="width: 500px; height: 266px;" />
<pre>
<strong>Input:</strong> slices = [1,2,3,4,5,6]
<strong>Output:</strong> 10
<strong>Explanation:</strong> Pick pizza slice of size 4, Alice and Bob will pick slices with size 3 and 5 respectively. Then Pick slices with size 6, finally Alice and Bob will pick slice of size 2 and 1 respectively. Total = 4 + 6.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/02/18/sample_4_1723.png" style="width: 500px; height: 299px;" />
<pre>
<strong>Input:</strong> slices = [8,9,8,6,1,1]
<strong>Output:</strong> 16
<strong>Explanation:</strong> Pick pizza slice of size 8 in each turn. If you pick slice with size 9 your partners will pick slices of size 8.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>3 * n == slices.length</code></li>
	<li><code>1 &lt;= slices.length &lt;= 500</code></li>
	<li><code>1 &lt;= slices[i] &lt;= 1000</code></li>
</ul>


## Solution

---
### Python3
``` py title='pizza-with-3n-slices'
class Solution:
    def maxSizeSlices(self, slices: List[int]) -> int:
        
        @cache
        def go(i, j, k):
            if k == 1: return max(slices[i : j + 1])
            
            if j - i + 1 < k * 2 - 1: return float('-inf')
            
            return max(go(i + 2, j, k - 1) + slices[i], go(i + 1, j, k))
        
        n = len(slices)
        
        return max(go(0, n - 2, n // 3), go(1, n - 1, n // 3))
```
