---
title: 2570. Merge Two 2D Arrays by Summing Values
draft: false
tags: 
  - leetcode-easy
  - array
  - hash-table
  - two-pointers
date: 2025-03-02
---

[Problem Link](https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/)

## Description

---
<p>You are given two <strong>2D</strong> integer arrays <code>nums1</code> and <code>nums2.</code></p>

<ul>
	<li><code>nums1[i] = [id<sub>i</sub>, val<sub>i</sub>]</code>&nbsp;indicate that the number with the id <code>id<sub>i</sub></code> has a value equal to <code>val<sub>i</sub></code>.</li>
	<li><code>nums2[i] = [id<sub>i</sub>, val<sub>i</sub>]</code>&nbsp;indicate that the number with the id <code>id<sub>i</sub></code> has a value equal to <code>val<sub>i</sub></code>.</li>
</ul>

<p>Each array contains <strong>unique</strong> ids and is sorted in <strong>ascending</strong> order by id.</p>

<p>Merge the two arrays into one array that is sorted in ascending order by id, respecting the following conditions:</p>

<ul>
	<li>Only ids that appear in at least one of the two arrays should be included in the resulting array.</li>
	<li>Each id should be included <strong>only once</strong> and its value should be the sum of the values of this id in the two arrays. If the id does not exist in one of the two arrays then its value in that array is considered to be <code>0</code>.</li>
</ul>

<p>Return <em>the resulting array</em>. The returned array must be sorted in ascending order by id.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [[1,2],[2,3],[4,5]], nums2 = [[1,4],[3,2],[4,1]]
<strong>Output:</strong> [[1,6],[2,3],[3,2],[4,6]]
<strong>Explanation:</strong> The resulting array contains the following:
- id = 1, the value of this id is 2 + 4 = 6.
- id = 2, the value of this id is 3.
- id = 3, the value of this id is 2.
- id = 4, the value of this id is 5 + 1 = 6.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [[2,4],[3,6],[5,5]], nums2 = [[1,3],[4,3]]
<strong>Output:</strong> [[1,3],[2,4],[3,6],[4,3],[5,5]]
<strong>Explanation:</strong> There are no common ids, so we just include each id with its value in the resulting list.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums1.length, nums2.length &lt;= 200</code></li>
	<li><code>nums1[i].length == nums2[j].length == 2</code></li>
	<li><code>1 &lt;= id<sub>i</sub>, val<sub>i</sub> &lt;= 1000</code></li>
	<li>Both arrays contain unique ids.</li>
	<li>Both arrays are in&nbsp;strictly ascending order by id.</li>
</ul>


## Solution

---
### Python3
``` py title='merge-two-2d-arrays-by-summing-values'
class Solution:
    def mergeArrays(self, nums1: List[List[int]], nums2: List[List[int]]) -> List[List[int]]:
        N, M = len(nums1), len(nums2)
        res = []
        i = j = 0

        while i < N or j < M:
            if i < N and j < M:
                if nums1[i][0] == nums2[j][0]:
                    res.append([nums1[i][0], nums1[i][1] + nums2[j][1]])
                    i += 1
                    j += 1
                elif nums1[i][0] < nums2[j][0]:
                    res.append(nums1[i])
                    i += 1
                else:
                    res.append(nums2[j])
                    j += 1
            elif i < N:
                res.append(nums1[i])
                i += 1
            else:
                res.append(nums2[j])
                j += 1
        
        return res
```

