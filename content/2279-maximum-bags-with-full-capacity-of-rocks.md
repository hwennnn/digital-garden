---
title: 2279. Maximum Bags With Full Capacity of Rocks
draft: false
tags: 
  - leetcode-medium
  - array
  - greedy
  - sorting
  - weekly-contest-294
  - contest-question
date: 2022-12-27
---

[Problem Link](https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/)

## Description

---
<p>You have <code>n</code> bags numbered from <code>0</code> to <code>n - 1</code>. You are given two <strong>0-indexed</strong> integer arrays <code>capacity</code> and <code>rocks</code>. The <code>i<sup>th</sup></code> bag can hold a maximum of <code>capacity[i]</code> rocks and currently contains <code>rocks[i]</code> rocks. You are also given an integer <code>additionalRocks</code>, the number of additional rocks you can place in <strong>any</strong> of the bags.</p>

<p>Return<em> the <strong>maximum</strong> number of bags that could have full capacity after placing the additional rocks in some bags.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> capacity = [2,3,4,5], rocks = [1,2,4,4], additionalRocks = 2
<strong>Output:</strong> 3
<strong>Explanation:</strong>
Place 1 rock in bag 0 and 1 rock in bag 1.
The number of rocks in each bag are now [2,3,4,4].
Bags 0, 1, and 2 have full capacity.
There are 3 bags at full capacity, so we return 3.
It can be shown that it is not possible to have more than 3 bags at full capacity.
Note that there may be other ways of placing the rocks that result in an answer of 3.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> capacity = [10,2,2], rocks = [2,2,0], additionalRocks = 100
<strong>Output:</strong> 3
<strong>Explanation:</strong>
Place 8 rocks in bag 0 and 2 rocks in bag 2.
The number of rocks in each bag are now [10,2,2].
Bags 0, 1, and 2 have full capacity.
There are 3 bags at full capacity, so we return 3.
It can be shown that it is not possible to have more than 3 bags at full capacity.
Note that we did not use all of the additional rocks.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == capacity.length == rocks.length</code></li>
	<li><code>1 &lt;= n &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>1 &lt;= capacity[i] &lt;= 10<sup>9</sup></code></li>
	<li><code>0 &lt;= rocks[i] &lt;= capacity[i]</code></li>
	<li><code>1 &lt;= additionalRocks &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='maximum-bags-with-full-capacity-of-rocks'
class Solution:
    def maximumBags(self, capacity: List[int], rocks: List[int], additionalRocks: int) -> int:
        res = 0
        toFill = []

        for cap, rock in zip(capacity, rocks):
            if rock < cap:
                toFill.append(cap - rock)
            else:
                res += 1
        
        toFill.sort()

        for rock in toFill:
            if additionalRocks >= rock:
                res += 1
                additionalRocks -= rock
            else:
                break

        return res
```

