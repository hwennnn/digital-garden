---
title: 1802. Maximum Value at a Given Index in a Bounded Array
draft: false
tags: 
  - leetcode-medium
  - math
  - binary-search
  - greedy
  - weekly-contest-233
  - contest-question
date: 2023-11-14
---

[Problem Link](https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/)

## Description

---
<p>You are given three positive integers:&nbsp;<code>n</code>, <code>index</code>, and <code>maxSum</code>. You want to construct an array <code>nums</code> (<strong>0-indexed</strong>)<strong> </strong>that satisfies the following conditions:</p>

<ul>
	<li><code>nums.length == n</code></li>
	<li><code>nums[i]</code> is a <strong>positive</strong> integer where <code>0 &lt;= i &lt; n</code>.</li>
	<li><code>abs(nums[i] - nums[i+1]) &lt;= 1</code> where <code>0 &lt;= i &lt; n-1</code>.</li>
	<li>The sum of all the elements of <code>nums</code> does not exceed <code>maxSum</code>.</li>
	<li><code>nums[index]</code> is <strong>maximized</strong>.</li>
</ul>

<p>Return <code>nums[index]</code><em> of the constructed array</em>.</p>

<p>Note that <code>abs(x)</code> equals <code>x</code> if <code>x &gt;= 0</code>, and <code>-x</code> otherwise.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 4, index = 2,  maxSum = 6
<strong>Output:</strong> 2
<strong>Explanation:</strong> nums = [1,2,<u><strong>2</strong></u>,1] is one array that satisfies all the conditions.
There are no arrays that satisfy all the conditions and have nums[2] == 3, so 2 is the maximum nums[2].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 6, index = 1,  maxSum = 10
<strong>Output:</strong> 3
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= maxSum &lt;= 10<sup>9</sup></code></li>
	<li><code>0 &lt;= index &lt; n</code></li>
</ul>


## Solution

---
### Python3
``` py title='maximum-value-at-a-given-index-in-a-bounded-array'
class Solution:
    def maxValue(self, n: int, index: int, maxSum: int) -> int:
        left, right = 1, maxSum

        def f(start, end):
            return (end * (end - 1) // 2) - (start * (start - 1) // 2)
        
        def good(k):
            left = index
            right = n - index - 1

            # x x x x x 3 x x x x x

            extras = max(0, left - k + 1) + max(0, right - k + 1)
            leftCount = f(max(1, k - left), k)
            rightCount = f(max(1, k - right), k)

            return leftCount + rightCount + extras + k <= maxSum
        
        while left < right:
            mid = (left + right + 1) // 2
            
            if good(mid):
                left = mid
            else:
                right = mid - 1
        
        return left
```

