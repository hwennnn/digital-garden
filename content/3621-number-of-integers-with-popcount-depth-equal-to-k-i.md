---
title: 3621. Number of Integers With Popcount-Depth Equal to K I
draft: false
tags: 
  - leetcode-hard
  - biweekly-contest-161
  - contest-question
date: 2025-07-20
---

[Problem Link](https://leetcode.com/problems/number-of-integers-with-popcount-depth-equal-to-k-i/)

## Description

---
<p>You are given two integers <code>n</code> and <code>k</code>.</p>

<p>For any positive integer <code>x</code>, define the following sequence:</p>

<ul>
	<li><code>p<sub>0</sub> = x</code></li>
	<li><code>p<sub>i+1</sub> = popcount(p<sub>i</sub>)</code> for all <code>i &gt;= 0</code>, where <code>popcount(y)</code> is the number of set bits (1&#39;s) in the binary representation of <code>y</code>.</li>
</ul>

<p>This sequence will eventually reach the value 1.</p>

<p>The <strong>popcount-depth</strong> of <code>x</code> is defined as the <strong>smallest</strong> integer <code>d &gt;= 0</code> such that <code>p<sub>d</sub> = 1</code>.</p>

<p>For example, if <code>x = 7</code> (binary representation <code>&quot;111&quot;</code>). Then, the sequence is: <code>7 &rarr; 3 &rarr; 2 &rarr; 1</code>, so the popcount-depth of 7 is 3.</p>

<p>Your task is to determine the number of integers in the range <code>[1, n]</code> whose popcount-depth is <strong>exactly</strong> equal to <code>k</code>.</p>

<p>Return the number of such integers.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 4, k = 1</span></p>

<p><strong>Output:</strong> <span class="example-io">2</span></p>

<p><strong>Explanation:</strong></p>

<p>The following integers in the range <code>[1, 4]</code> have popcount-depth exactly equal to 1:</p>

<table style="border: 1px solid black;">
	<thead>
		<tr>
			<th align="center" style="border: 1px solid black;">x</th>
			<th align="center" style="border: 1px solid black;">Binary</th>
			<th align="left" style="border: 1px solid black;">Sequence</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td align="center" style="border: 1px solid black;">2</td>
			<td align="center" style="border: 1px solid black;"><code>&quot;10&quot;</code></td>
			<td align="left" style="border: 1px solid black;"><code>2 &rarr; 1</code></td>
		</tr>
		<tr>
			<td align="center" style="border: 1px solid black;">4</td>
			<td align="center" style="border: 1px solid black;"><code>&quot;100&quot;</code></td>
			<td align="left" style="border: 1px solid black;"><code>4 &rarr; 1</code></td>
		</tr>
	</tbody>
</table>

<p>Thus, the answer is 2.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 7, k = 2</span></p>

<p><strong>Output:</strong> <span class="example-io">3</span></p>

<p><strong>Explanation:</strong></p>

<p>The following integers in the range <code>[1, 7]</code> have popcount-depth exactly equal to 2:</p>

<table style="border: 1px solid black;">
	<thead>
		<tr>
			<th style="border: 1px solid black;">x</th>
			<th style="border: 1px solid black;">Binary</th>
			<th style="border: 1px solid black;">Sequence</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border: 1px solid black;">3</td>
			<td style="border: 1px solid black;"><code>&quot;11&quot;</code></td>
			<td style="border: 1px solid black;"><code>3 &rarr; 2 &rarr; 1</code></td>
		</tr>
		<tr>
			<td style="border: 1px solid black;">5</td>
			<td style="border: 1px solid black;"><code>&quot;101&quot;</code></td>
			<td style="border: 1px solid black;"><code>5 &rarr; 2 &rarr; 1</code></td>
		</tr>
		<tr>
			<td style="border: 1px solid black;">6</td>
			<td style="border: 1px solid black;"><code>&quot;110&quot;</code></td>
			<td style="border: 1px solid black;"><code>6 &rarr; 2 &rarr; 1</code></td>
		</tr>
	</tbody>
</table>

<p>Thus, the answer is 3.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 10<sup>15</sup></code></li>
	<li><code>0 &lt;= k &lt;= 5</code></li>
</ul>


## Solution

---
### Python3
``` py title='number-of-integers-with-popcount-depth-equal-to-k-i'
class Solution:
    def popcountDepth(self, n: int, k: int) -> int:
        if k == 0: return 1
        
        def compute(x):
            depth = 0

            while x > 1:
                x = x.bit_count()
                depth += 1
            
            return depth
        
        seen = set()
        for i in range(1, 65):
            if compute(i) + 1 == k:
                seen.add(i)
        
        if not seen: return 0

        nums = list(map(int, bin(n)[2:]))

        @cache
        def dp(index, tight, ones):
            if index == len(nums):
                return 1 if ones in seen else 0
            
            digit = nums[index] if tight else 1
            count = 0

            for d in range(digit + 1):
                newTight = tight and d == digit
                count += dp(index + 1, newTight, ones + d)

            return count
        
        ans = dp(0, True, 0)

        if k == 1 and 1 in seen:
            return ans - 1
        
        return ans
```

