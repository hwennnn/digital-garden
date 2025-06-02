---
title: 135. Candy
draft: false
tags: 
  - leetcode-hard
  - array
  - greedy
date: 2025-06-02
---

[Problem Link](https://leetcode.com/problems/candy/)

## Description

---
<p>There are <code>n</code> children standing in a line. Each child is assigned a rating value given in the integer array <code>ratings</code>.</p>

<p>You are giving candies to these children subjected to the following requirements:</p>

<ul>
	<li>Each child must have at least one candy.</li>
	<li>Children with a higher rating get more candies than their neighbors.</li>
</ul>

<p>Return <em>the minimum number of candies you need to have to distribute the candies to the children</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> ratings = [1,0,2]
<strong>Output:</strong> 5
<strong>Explanation:</strong> You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> ratings = [1,2,2]
<strong>Output:</strong> 4
<strong>Explanation:</strong> You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
The third child gets 1 candy because it satisfies the above two conditions.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == ratings.length</code></li>
	<li><code>1 &lt;= n &lt;= 2 * 10<sup>4</sup></code></li>
	<li><code>0 &lt;= ratings[i] &lt;= 2 * 10<sup>4</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='candy'
class Solution:
    def candy(self, ratings: List[int]) -> int:
        N = len(ratings)
        candies = [1] * N
        
        for i in range(1, N):
            if ratings[i] > ratings[i - 1]:
                candies[i] = candies[i - 1] + 1
        
        for i in range(N - 2, -1, -1):
            if ratings[i] > ratings[i + 1]:
                candies[i] = max(candies[i], candies[i + 1] + 1)

        return sum(candies)
```

