---
title: 2148. Count Elements With Strictly Smaller and Greater Elements 
draft: false
tags: 
  - leetcode-easy
  - array
  - sorting
  - counting
  - weekly-contest-277
  - contest-question
date: 2022-01-23
---

[Problem Link](https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/)

## Description

---
<p>Given an integer array <code>nums</code>, return <em>the number of elements that have <strong>both</strong> a strictly smaller and a strictly greater element appear in </em><code>nums</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [11,7,2,15]
<strong>Output:</strong> 2
<strong>Explanation:</strong> The element 7 has the element 2 strictly smaller than it and the element 11 strictly greater than it.
Element 11 has element 7 strictly smaller than it and element 15 strictly greater than it.
In total there are 2 elements having both a strictly smaller and a strictly greater element appear in <code>nums</code>.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [-3,3,3,90]
<strong>Output:</strong> 2
<strong>Explanation:</strong> The element 3 has the element -3 strictly smaller than it and the element 90 strictly greater than it.
Since there are two elements with the value 3, in total there are 2 elements having both a strictly smaller and a strictly greater element appear in <code>nums</code>.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 100</code></li>
	<li><code>-10<sup>5</sup> &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='count-elements-with-strictly-smaller-and-greater-elements'
class Solution:
    def countElements(self, nums: List[int]) -> int:
        nums.sort()
        res = 0
        n = len(nums)
        
        for i in range(1, n - 1):
            smaller = False
            
            for j in range(i):
                if nums[j] < nums[i]:
                    smaller = True
                    break
                    
            if not smaller: continue
                
            larger = False
            
            for j in range(i + 1, n):
                if nums[j] > nums[i]:
                    larger = True
                    break
            
            if not larger: continue
            
            res += 1
        
        
        return res
```

