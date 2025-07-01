---
title: 2177. Find Three Consecutive Integers That Sum to a Given Number
draft: false
tags: 
  - leetcode-medium
  - math
  - simulation
  - biweekly-contest-72
  - contest-question
date: 2022-02-19
---

[Problem Link](https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/)

## Description

---
<p>Given an integer <code>num</code>, return <em>three consecutive integers (as a sorted array)</em><em> that <strong>sum</strong> to </em><code>num</code>. If <code>num</code> cannot be expressed as the sum of three consecutive integers, return<em> an <strong>empty</strong> array.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> num = 33
<strong>Output:</strong> [10,11,12]
<strong>Explanation:</strong> 33 can be expressed as 10 + 11 + 12 = 33.
10, 11, 12 are 3 consecutive integers, so we return [10, 11, 12].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> num = 4
<strong>Output:</strong> []
<strong>Explanation:</strong> There is no way to express 4 as the sum of 3 consecutive integers.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= num &lt;= 10<sup>15</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='find-three-consecutive-integers-that-sum-to-a-given-number'
class Solution:
    def sumOfThree(self, num: int) -> List[int]:
        if num % 3 != 0: return []
        mid = num // 3
        return [mid - 1, mid, mid + 1]
```

