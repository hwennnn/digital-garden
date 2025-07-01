---
title: 2611. Mice and Cheese
draft: false
tags: 
  - leetcode-medium
  - array
  - greedy
  - sorting
  - heap-priority-queue
  - weekly-contest-339
  - contest-question
date: 2023-04-02
---

[Problem Link](https://leetcode.com/problems/mice-and-cheese/)

## Description

---
<p>There are two mice and <code>n</code> different types of cheese, each type of cheese should be eaten by exactly one mouse.</p>

<p>A point of the cheese with index <code>i</code> (<strong>0-indexed</strong>) is:</p>

<ul>
	<li><code>reward1[i]</code> if the first mouse eats it.</li>
	<li><code>reward2[i]</code> if the second mouse eats it.</li>
</ul>

<p>You are given a positive integer array <code>reward1</code>, a positive integer array <code>reward2</code>, and a non-negative integer <code>k</code>.</p>

<p>Return <em><strong>the maximum</strong> points the mice can achieve if the first mouse eats exactly </em><code>k</code><em> types of cheese.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> reward1 = [1,1,3,4], reward2 = [4,4,1,1], k = 2
<strong>Output:</strong> 15
<strong>Explanation:</strong> In this example, the first mouse eats the 2<sup>nd</sup>&nbsp;(0-indexed) and the 3<sup>rd</sup>&nbsp;types of cheese, and the second mouse eats the 0<sup>th</sup>&nbsp;and the 1<sup>st</sup> types of cheese.
The total points are 4 + 4 + 3 + 4 = 15.
It can be proven that 15 is the maximum total points that the mice can achieve.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> reward1 = [1,1], reward2 = [1,1], k = 2
<strong>Output:</strong> 2
<strong>Explanation:</strong> In this example, the first mouse eats the 0<sup>th</sup>&nbsp;(0-indexed) and 1<sup>st</sup>&nbsp;types of cheese, and the second mouse does not eat any cheese.
The total points are 1 + 1 = 2.
It can be proven that 2 is the maximum total points that the mice can achieve.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n == reward1.length == reward2.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= reward1[i],&nbsp;reward2[i] &lt;= 1000</code></li>
	<li><code>0 &lt;= k &lt;= n</code></li>
</ul>


## Solution

---
### Python3
``` py title='mice-and-cheese'
class Solution:
    def miceAndCheese(self, reward1: List[int], reward2: List[int], k: int) -> int:
        N = len(reward1)
        A = sorted([(a - b, index) for index, (a, b) in enumerate(zip(reward1, reward2))], reverse = 1)
        res = 0

        for i in range(k):
            res += reward1[A[i][1]]
            
        for i in range(k, N):
            res += reward2[A[i][1]]
        
        return res
        
            
```

