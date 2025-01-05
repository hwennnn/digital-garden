---
title: 3193. Count the Number of Inversions
draft: false
tags: 
  - leetcode-hard
  - array
  - dynamic-programming
date: 2024-06-23
---

[Problem Link](https://leetcode.com/problems/count-the-number-of-inversions/)

## Description

---
<p>You are given an integer <code>n</code> and a 2D array <code>requirements</code>, where <code>requirements[i] = [end<sub>i</sub>, cnt<sub>i</sub>]</code> represents the end index and the <strong>inversion</strong> count of each requirement.</p>

<p>A pair of indices <code>(i, j)</code> from an integer array <code>nums</code> is called an <strong>inversion</strong> if:</p>

<ul>
	<li><code>i &lt; j</code> and <code>nums[i] &gt; nums[j]</code></li>
</ul>

<p>Return the number of <span data-keyword="permutation">permutations</span> <code>perm</code> of <code>[0, 1, 2, ..., n - 1]</code> such that for <strong>all</strong> <code>requirements[i]</code>, <code>perm[0..end<sub>i</sub>]</code> has exactly <code>cnt<sub>i</sub></code> inversions.</p>

<p>Since the answer may be very large, return it <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 3, requirements = [[2,2],[0,0]]</span></p>

<p><strong>Output:</strong> <span class="example-io">2</span></p>

<p><strong>Explanation:</strong></p>

<p>The two permutations are:</p>

<ul>
	<li><code>[2, 0, 1]</code>

	<ul>
		<li>Prefix <code>[2, 0, 1]</code> has inversions <code>(0, 1)</code> and <code>(0, 2)</code>.</li>
		<li>Prefix <code>[2]</code> has 0 inversions.</li>
	</ul>
	</li>
	<li><code>[1, 2, 0]</code>
	<ul>
		<li>Prefix <code>[1, 2, 0]</code> has inversions <code>(0, 2)</code> and <code>(1, 2)</code>.</li>
		<li>Prefix <code>[1]</code> has 0 inversions.</li>
	</ul>
	</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 3, requirements = [[2,2],[1,1],[0,0]]</span></p>

<p><strong>Output:</strong> 1</p>

<p><strong>Explanation:</strong></p>

<p>The only satisfying permutation is <code>[2, 0, 1]</code>:</p>

<ul>
	<li>Prefix <code>[2, 0, 1]</code> has inversions <code>(0, 1)</code> and <code>(0, 2)</code>.</li>
	<li>Prefix <code>[2, 0]</code> has an inversion <code>(0, 1)</code>.</li>
	<li>Prefix <code>[2]</code> has 0 inversions.</li>
</ul>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 2, requirements = [[0,0],[1,0]]</span></p>

<p><strong>Output:</strong> <span class="example-io">1</span></p>

<p><strong>Explanation:</strong></p>

<p>The only satisfying permutation is <code>[0, 1]</code>:</p>

<ul>
	<li>Prefix <code>[0]</code> has 0 inversions.</li>
	<li>Prefix <code>[0, 1]</code> has an inversion <code>(0, 1)</code>.</li>
</ul>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= n &lt;= 300</code></li>
	<li><code>1 &lt;= requirements.length &lt;= n</code></li>
	<li><code>requirements[i] = [end<sub>i</sub>, cnt<sub>i</sub>]</code></li>
	<li><code>0 &lt;= end<sub>i</sub> &lt;= n - 1</code></li>
	<li><code>0 &lt;= cnt<sub>i</sub> &lt;= 400</code></li>
	<li>The input is generated such that there is at least one <code>i</code> such that <code>end<sub>i</sub> == n - 1</code>.</li>
	<li>The input is generated such that all <code>end<sub>i</sub></code> are unique.</li>
</ul>


## Solution

---
### Python3
``` py title='count-the-number-of-inversions'
class Solution:
    def numberOfPermutations(self, n: int, requirements: List[List[int]]) -> int:
        MOD = 10 ** 9 + 7
        have = [-1] * n

        for end, cnt in requirements:
            have[end] = cnt

        @cache
        def go(index, left):
            if index == 0: return int(left == 0)

            res = 0

            if have[index] == -1 or have[index] == left:
                for k in range(min(index, left) + 1):
                    res += go(index - 1, left - k)
                    res %= MOD

            return res

        return go(n - 1, have[n - 1])
```
