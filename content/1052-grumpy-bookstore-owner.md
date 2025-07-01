---
title: 1052. Grumpy Bookstore Owner
draft: false
tags: 
  - leetcode-medium
  - array
  - sliding-window
  - weekly-contest-138
  - contest-question
date: 2024-06-22
---

[Problem Link](https://leetcode.com/problems/grumpy-bookstore-owner/)

## Description

---
<p>There is a bookstore owner that has a store open for <code>n</code> minutes. You are given an integer array <code>customers</code> of length <code>n</code> where <code>customers[i]</code> is the number of the customers that enter the store at the start of the <code>i<sup>th</sup></code> minute and all those customers leave after the end of that minute.</p>

<p>During certain minutes, the bookstore owner is grumpy. You are given a binary array grumpy where <code>grumpy[i]</code> is <code>1</code> if the bookstore owner is grumpy during the <code>i<sup>th</sup></code> minute, and is <code>0</code> otherwise.</p>

<p>When the bookstore owner is grumpy, the customers entering during that minute are not <strong>satisfied</strong>. Otherwise, they are satisfied.</p>

<p>The bookstore owner knows a secret technique to remain <strong>not grumpy</strong> for <code>minutes</code> consecutive minutes, but this technique can only be used <strong>once</strong>.</p>

<p>Return the <strong>maximum</strong> number of customers that can be <em>satisfied</em> throughout the day.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], minutes = 3</span></p>

<p><strong>Output:</strong> <span class="example-io">16</span></p>

<p><strong>Explanation:</strong></p>

<p>The bookstore owner keeps themselves not grumpy for the last 3 minutes.</p>

<p>The maximum number of customers that can be satisfied = 1 + 1 + 1 + 1 + 7 + 5 = 16.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">customers = [1], grumpy = [0], minutes = 1</span></p>

<p><strong>Output:</strong> <span class="example-io">1</span></p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == customers.length == grumpy.length</code></li>
	<li><code>1 &lt;= minutes &lt;= n &lt;= 2 * 10<sup>4</sup></code></li>
	<li><code>0 &lt;= customers[i] &lt;= 1000</code></li>
	<li><code>grumpy[i]</code> is either <code>0</code> or <code>1</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='grumpy-bookstore-owner'
class Solution:
    def maxSatisfied(self, customers: List[int], grumpy: List[int], minutes: int) -> int:
        N = len(customers)
        res = mmax = curr = 0
        queue = deque()

        for i, (c, g) in enumerate(zip(customers, grumpy)):
            if g == 1:
                queue.append((i, c))
                curr += c
            else:
                res += c
            
            if queue and i - queue[0][0] == minutes:
                curr -= queue.popleft()[1]
            
            mmax = max(mmax, curr)

        return res + mmax
```

