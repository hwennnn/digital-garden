---
title: 3132. Find the Integer Added to Array II
draft: false
tags: 
  - array
  - two-pointers
  - sorting
  - enumeration
date: 2024-04-28
---

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-blue.svg)

## Description

---
<p>You are given two integer arrays <code>nums1</code> and <code>nums2</code>.</p>

<p>From <code>nums1</code> two elements have been removed, and all other elements have been increased (or decreased in the case of negative) by an integer, represented by the variable <code>x</code>.</p>

<p>As a result, <code>nums1</code> becomes <strong>equal</strong> to <code>nums2</code>. Two arrays are considered <strong>equal</strong> when they contain the same integers with the same frequencies.</p>

<p>Return the <strong>minimum</strong> possible integer<em> </em><code>x</code><em> </em>that achieves this equivalence.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io" style="
    font-family: Menlo,sans-serif;
    font-size: 0.85rem;
">nums1 = [4,20,16,12,8], nums2 = [14,18,10]</span></p>

<p><strong>Output:</strong> <span class="example-io" style="
    font-family: Menlo,sans-serif;
    font-size: 0.85rem;
">-2</span></p>

<p><strong>Explanation:</strong></p>

<p>After removing elements at indices <code>[0,4]</code> and adding -2, <code>nums1</code> becomes <code>[18,14,10]</code>.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io" style="
    font-family: Menlo,sans-serif;
    font-size: 0.85rem;
">nums1 = [3,5,5,3], nums2 = [7,7]</span></p>

<p><strong>Output:</strong> <span class="example-io" style="
    font-family: Menlo,sans-serif;
    font-size: 0.85rem;
">2</span></p>

<p><strong>Explanation:</strong></p>

<p>After removing elements at indices <code>[0,3]</code> and adding 2, <code>nums1</code> becomes <code>[7,7]</code>.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>3 &lt;= nums1.length &lt;= 200</code></li>
	<li><code>nums2.length == nums1.length - 2</code></li>
	<li><code>0 &lt;= nums1[i], nums2[i] &lt;= 1000</code></li>
	<li>The test cases are generated in a way that there is an integer <code>x</code> such that <code>nums1</code> can become equal to <code>nums2</code> by removing two elements and adding <code>x</code> to each element of <code>nums1</code>.</li>
</ul>


## Solution

---
### Python
``` py title='find-the-integer-added-to-array-ii'
class Solution:
    def minimumAddedInteger(self, nums1: List[int], nums2: List[int]) -> int:
        N = len(nums1)
        M = N - 2
        nums2.sort()
        nums1.sort()
        res = inf

        def check(d):
            skip = j = 0

            for i in range(N):
                if nums2[j] - nums1[i] == d:
                    j += 1
                else:
                    skip += 1
                
                if skip > 2 or j == M:
                    break

            return skip <= 2

        for i in range(N):
            d = nums2[0] - nums1[i]

            if check(d):
                res = min(res, d)

        return res

```

