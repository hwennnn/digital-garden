---
title: 3072. Distribute Elements Into Two Arrays II
draft: false
tags: 
  - leetcode-hard
  - array
  - binary-indexed-tree
  - segment-tree
  - simulation
  - weekly-contest-387
  - contest-question
date: 2024-03-09
---

[Problem Link](https://leetcode.com/problems/distribute-elements-into-two-arrays-ii/)

## Description

---
<p>You are given a <strong>1-indexed</strong> array of integers <code>nums</code> of length <code>n</code>.</p>

<p>We define a function <code>greaterCount</code> such that <code>greaterCount(arr, val)</code> returns the number of elements in <code>arr</code> that are <strong>strictly greater</strong> than <code>val</code>.</p>

<p>You need to distribute all the elements of <code>nums</code> between two arrays <code>arr1</code> and <code>arr2</code> using <code>n</code> operations. In the first operation, append <code>nums[1]</code> to <code>arr1</code>. In the second operation, append <code>nums[2]</code> to <code>arr2</code>. Afterwards, in the <code>i<sup>th</sup></code> operation:</p>

<ul>
	<li>If <code>greaterCount(arr1, nums[i]) &gt; greaterCount(arr2, nums[i])</code>, append <code>nums[i]</code> to <code>arr1</code>.</li>
	<li>If <code>greaterCount(arr1, nums[i]) &lt; greaterCount(arr2, nums[i])</code>, append <code>nums[i]</code> to <code>arr2</code>.</li>
	<li>If <code>greaterCount(arr1, nums[i]) == greaterCount(arr2, nums[i])</code>, append <code>nums[i]</code> to the array with a <strong>lesser</strong> number of elements.</li>
	<li>If there is still a tie, append <code>nums[i]</code> to <code>arr1</code>.</li>
</ul>

<p>The array <code>result</code> is formed by concatenating the arrays <code>arr1</code> and <code>arr2</code>. For example, if <code>arr1 == [1,2,3]</code> and <code>arr2 == [4,5,6]</code>, then <code>result = [1,2,3,4,5,6]</code>.</p>

<p>Return <em>the integer array</em> <code>result</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,1,3,3]
<strong>Output:</strong> [2,3,1,3]
<strong>Explanation:</strong> After the first 2 operations, arr1 = [2] and arr2 = [1].
In the 3<sup>rd</sup> operation, the number of elements greater than 3 is zero in both arrays. Also, the lengths are equal, hence, append nums[3] to arr1.
In the 4<sup>th</sup> operation, the number of elements greater than 3 is zero in both arrays. As the length of arr2 is lesser, hence, append nums[4] to arr2.
After 4 operations, arr1 = [2,3] and arr2 = [1,3].
Hence, the array result formed by concatenation is [2,3,1,3].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [5,14,3,1,2]
<strong>Output:</strong> [5,3,1,2,14]
<strong>Explanation:</strong> After the first 2 operations, arr1 = [5] and arr2 = [14].
In the 3<sup>rd</sup> operation, the number of elements greater than 3 is one in both arrays. Also, the lengths are equal, hence, append nums[3] to arr1.
In the 4<sup>th</sup> operation, the number of elements greater than 1 is greater in arr1 than arr2 (2 &gt; 1). Hence, append nums[4] to arr1.
In the 5<sup>th</sup> operation, the number of elements greater than 2 is greater in arr1 than arr2 (2 &gt; 1). Hence, append nums[5] to arr1.
After 5 operations, arr1 = [5,3,1,2] and arr2 = [14].
Hence, the array result formed by concatenation is [5,3,1,2,14].
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,3,3,3]
<strong>Output:</strong> [3,3,3,3]
<strong>Explanation:</strong> At the end of 4 operations, arr1 = [3,3] and arr2 = [3,3].
Hence, the array result formed by concatenation is [3,3,3,3].
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>3 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='distribute-elements-into-two-arrays-ii'
from sortedcontainers import SortedList

class Solution:
    def resultArray(self, nums: List[int]) -> List[int]:
        N = len(nums)
        arr1 = SortedList([nums[0]])
        arr2 = SortedList([nums[1]])
        res1, res2 = [nums[0]], [nums[1]]
        
        for i in range(2, N):
            greaterCount1 = len(res1) - arr1.bisect(nums[i])
            greaterCount2 = len(res2) - arr2.bisect(nums[i])
            
            if greaterCount1 > greaterCount2:
                arr1.add(nums[i])
                res1.append(nums[i])
            elif greaterCount1 < greaterCount2:
                arr2.add(nums[i])
                res2.append(nums[i])
            else:
                if len(res2) < len(res1):
                    arr2.add(nums[i])
                    res2.append(nums[i])
                else:
                    arr1.add(nums[i])
                    res1.append(nums[i])
        
        return res1 + res2
```

