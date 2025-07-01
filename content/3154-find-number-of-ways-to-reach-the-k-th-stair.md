---
title: 3154. Find Number of Ways to Reach the K-th Stair
draft: false
tags: 
  - leetcode-hard
  - math
  - dynamic-programming
  - bit-manipulation
  - memoization
  - combinatorics
  - weekly-contest-398
  - contest-question
date: 2024-05-19
---

[Problem Link](https://leetcode.com/problems/find-number-of-ways-to-reach-the-k-th-stair/)

## Description

---
<p>You are given a <strong>non-negative</strong> integer <code>k</code>. There exists a staircase with an infinite number of stairs, with the <strong>lowest</strong> stair numbered 0.</p>

<p>Alice has an integer <code>jump</code>, with an initial value of 0. She starts on stair 1 and wants to reach stair <code>k</code> using <strong>any</strong> number of <strong>operations</strong>. If she is on stair <code>i</code>, in one <strong>operation</strong> she can:</p>

<ul>
	<li>Go down to stair <code>i - 1</code>. This operation <strong>cannot</strong> be used consecutively or on stair 0.</li>
	<li>Go up to stair <code>i + 2<sup>jump</sup></code>. And then, <code>jump</code> becomes <code>jump + 1</code>.</li>
</ul>

<p>Return the <em>total</em> number of ways Alice can reach stair <code>k</code>.</p>

<p><strong>Note</strong> that it is possible that Alice reaches the stair <code>k</code>, and performs some operations to reach the stair <code>k</code> again.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">k = 0</span></p>

<p><strong>Output:</strong> <span class="example-io">2</span></p>

<p><strong>Explanation:</strong></p>

<p>The 2 possible ways of reaching stair 0 are:</p>

<ul>
	<li>Alice starts at stair 1.
	<ul>
		<li>Using an operation of the first type, she goes down 1 stair to reach stair 0.</li>
	</ul>
	</li>
	<li>Alice starts at stair 1.
	<ul>
		<li>Using an operation of the first type, she goes down 1 stair to reach stair 0.</li>
		<li>Using an operation of the second type, she goes up 2<sup>0</sup> stairs to reach stair 1.</li>
		<li>Using an operation of the first type, she goes down 1 stair to reach stair 0.</li>
	</ul>
	</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">k = 1</span></p>

<p><strong>Output:</strong> <span class="example-io">4</span></p>

<p><strong>Explanation:</strong></p>

<p>The 4 possible ways of reaching stair 1 are:</p>

<ul>
	<li>Alice starts at stair 1. Alice is at stair 1.</li>
	<li>Alice starts at stair 1.
	<ul>
		<li>Using an operation of the first type, she goes down 1 stair to reach stair 0.</li>
		<li>Using an operation of the second type, she goes up 2<sup>0</sup> stairs to reach stair 1.</li>
	</ul>
	</li>
	<li>Alice starts at stair 1.
	<ul>
		<li>Using an operation of the second type, she goes up 2<sup>0</sup> stairs to reach stair 2.</li>
		<li>Using an operation of the first type, she goes down 1 stair to reach stair 1.</li>
	</ul>
	</li>
	<li>Alice starts at stair 1.
	<ul>
		<li>Using an operation of the first type, she goes down 1 stair to reach stair 0.</li>
		<li>Using an operation of the second type, she goes up 2<sup>0</sup> stairs to reach stair 1.</li>
		<li>Using an operation of the first type, she goes down 1 stair to reach stair 0.</li>
		<li>Using an operation of the second type, she goes up 2<sup>1</sup> stairs to reach stair 2.</li>
		<li>Using an operation of the first type, she goes down 1 stair to reach stair 1.</li>
	</ul>
	</li>
</ul>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= k &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='find-number-of-ways-to-reach-the-k-th-stair'
class Solution:
    def waysToReachStair(self, k: int) -> int:
        
        @cache
        def go(pos, jump, canDown):
            if pos > k + 1: return 0
            
            res = 0
            
            if pos == k: res += 1
            
            if pos != 0 and canDown:
                res += go(pos - 1, jump, False)
            
            res += go(pos + pow(2, jump), jump + 1, True)
            
            return res

        return go(1, 0, True)
            
```

