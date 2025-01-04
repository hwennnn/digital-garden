---
title: 1399. Count Largest Group
draft: false
tags: 
  - leetcode-easy
  - hash-table
  - math
date: 2020-10-14
---

[Problem Link](https://leetcode.com/problems/count-largest-group/)

## Description

---
<p>You are given an integer <code>n</code>.</p>

<p>Each number from <code>1</code> to <code>n</code> is grouped according to the sum of its digits.</p>

<p>Return <em>the number of groups that have the largest size</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 13
<strong>Output:</strong> 4
<strong>Explanation:</strong> There are 9 groups in total, they are grouped according sum of its digits of numbers from 1 to 13:
[1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9].
There are 4 groups with largest size.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 2
<strong>Output:</strong> 2
<strong>Explanation:</strong> There are 2 groups [1], [2] of size 1.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 10<sup>4</sup></code></li>
</ul>


## Solution

---
### Python
``` py title='count-largest-group'
class Solution:
    def countLargestGroup(self, n: int) -> int:
        d = collections.defaultdict(int)
        for i in range(1, n + 1):
            t = sum(map(int, list(str(i))))
            d[t] += 1
        return sum(1 for i in d.values() if i >= max(d.values()))

```
