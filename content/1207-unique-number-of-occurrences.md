---
title: 1207. Unique Number of Occurrences
draft: false
tags: 
  - leetcode-easy
  - array
  - hash-table
  - weekly-contest-156
  - contest-question
date: 2019-10-08
---

[Problem Link](https://leetcode.com/problems/unique-number-of-occurrences/)

## Description

---
<p>Given an array of integers <code>arr</code>, return <code>true</code> <em>if the number of occurrences of each value in the array is <strong>unique</strong> or </em><code>false</code><em> otherwise</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> arr = [1,2,2,1,1,3]
<strong>Output:</strong> true
<strong>Explanation:</strong>&nbsp;The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> arr = [1,2]
<strong>Output:</strong> false
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> arr = [-3,0,1,-3,1,1,1,-3,10,0]
<strong>Output:</strong> true
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= arr.length &lt;= 1000</code></li>
	<li><code>-1000 &lt;= arr[i] &lt;= 1000</code></li>
</ul>


## Solution

---
### Python3
``` py title='unique-number-of-occurrences'
class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        return (cnt:= Counter(arr)) and len(set(cnt.values())) == len(cnt)
```
### Python
``` py title='unique-number-of-occurrences'
class Solution(object):
    def uniqueOccurrences(self, arr):
        """
        :type arr: List[int]
        :rtype: bool
        """
        res = []
        lst=  []
        
        for i in arr:
            if i not in res:
                res.append(i)
                
        for i in range(len(res)):
            lst.append(arr.count(res[i]))
        
        check_lst = []
        for i in range(len(lst)):
            if i>0:
                if lst[i-1] == lst[i]:
                    break
            check_lst.append(lst.count(lst[i]))
        
        for i in check_lst:
            if i>1:
                return False
            
        return True
        
        
       
```

