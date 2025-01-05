---
title: 575. Distribute Candies
draft: false
tags: 
  - leetcode-easy
  - array
  - hash-table
date: 2019-10-08
---

[Problem Link](https://leetcode.com/problems/distribute-candies/)

## Description

---
<p>Alice has <code>n</code> candies, where the <code>i<sup>th</sup></code> candy is of type <code>candyType[i]</code>. Alice noticed that she started to gain weight, so she visited a doctor.</p>

<p>The doctor advised Alice to only eat <code>n / 2</code> of the candies she has (<code>n</code> is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor&#39;s advice.</p>

<p>Given the integer array <code>candyType</code> of length <code>n</code>, return <em>the <strong>maximum</strong> number of different types of candies she can eat if she only eats </em><code>n / 2</code><em> of them</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> candyType = [1,1,2,2,3,3]
<strong>Output:</strong> 3
<strong>Explanation:</strong> Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> candyType = [1,1,2,3]
<strong>Output:</strong> 2
<strong>Explanation:</strong> Alice can only eat 4 / 2 = 2 candies. Whether she eats types [1,2], [1,3], or [2,3], she still can only eat 2 different types.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> candyType = [6,6,6,6]
<strong>Output:</strong> 1
<strong>Explanation:</strong> Alice can only eat 4 / 2 = 2 candies. Even though she can eat 2 candies, she only has 1 type.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == candyType.length</code></li>
	<li><code>2 &lt;= n &lt;= 10<sup>4</sup></code></li>
	<li><code>n</code>&nbsp;is even.</li>
	<li><code>-10<sup>5</sup> &lt;= candyType[i] &lt;= 10<sup>5</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='distribute-candies'
class Solution:
    def distributeCandies(self, candies: List[int]) -> int:
        
        return int(min(len(candies)/2,len(set(candies))))
```
### Python
``` py title='distribute-candies'
class Solution(object):
    def distributeCandies(self, candies):
        """
        :type candies: List[int]
        :rtype: int
        """
        return min(len(candies) / 2, len(set(candies)))
```
