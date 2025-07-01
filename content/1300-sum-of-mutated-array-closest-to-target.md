---
title: 1300. Sum of Mutated Array Closest to Target
draft: false
tags: 
  - leetcode-medium
  - array
  - binary-search
  - sorting
  - biweekly-contest-16
  - contest-question
date: 2022-04-20
---

[Problem Link](https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/)

## Description

---
<p>Given an integer array <code>arr</code> and a target value <code>target</code>, return the integer <code>value</code> such that when we change all the integers larger than <code>value</code> in the given array to be equal to <code>value</code>, the sum of the array gets as close as possible (in absolute difference) to <code>target</code>.</p>

<p>In case of a tie, return the minimum such integer.</p>

<p>Notice that the answer is not neccesarilly a number from <code>arr</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> arr = [4,9,3], target = 10
<strong>Output:</strong> 3
<strong>Explanation:</strong> When using 3 arr converts to [3, 3, 3] which sums 9 and that&#39;s the optimal answer.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> arr = [2,3,5], target = 10
<strong>Output:</strong> 5
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> arr = [60864,25176,27249,21296,20204], target = 56803
<strong>Output:</strong> 11361
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= arr.length &lt;= 10<sup>4</sup></code></li>
	<li><code>1 &lt;= arr[i], target &lt;= 10<sup>5</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='sum-of-mutated-array-closest-to-target'
class Solution:
    def findBestValue(self, arr: List[int], target: int) -> int:
        
        def getSum(k):
            s = 0
            
            for x in arr:
                s += min(x, k)
            
            return s
        
        left, right = 0, max(arr)
        
        while left <= right:
            mid = left + (right - left) // 2
            
            total = getSum(mid)
            
            if total == target:
                return mid
            elif total < target:
                left = mid + 1
            else:
                right = mid - 1
        
        l2 = left - 1
        
        if abs(getSum(left) - target) < abs(getSum(l2) - target):
            return left
        
        return l2
        
```

