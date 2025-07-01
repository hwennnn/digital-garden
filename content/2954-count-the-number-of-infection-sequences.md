---
title: 2954. Count the Number of Infection Sequences
draft: false
tags: 
  - leetcode-hard
  - array
  - math
  - combinatorics
  - weekly-contest-374
  - contest-question
date: 2023-12-10
---

[Problem Link](https://leetcode.com/problems/count-the-number-of-infection-sequences/)

## Description

---
<p>You are given an integer <code>n</code> and an array <code>sick</code> sorted in increasing order, representing positions of infected people in a line of <code>n</code> people.</p>

<p>At each step, <strong>one </strong>uninfected person <strong>adjacent</strong> to an infected person gets infected. This process continues until everyone is infected.</p>

<p>An <strong>infection sequence</strong> is the order in which uninfected people become infected, excluding those initially infected.</p>

<p>Return the number of different infection sequences possible, modulo <code>10<sup>9</sup>+7</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 5, sick = [0,4]</span></p>

<p><strong>Output:</strong> <span class="example-io">4</span></p>

<p><strong>Explanation:</strong></p>

<p>There is a total of 6 different sequences overall.</p>

<ul>
	<li>Valid infection sequences are <code>[1,2,3]</code>, <code>[1,3,2]</code>, <code>[3,2,1]</code> and <code>[3,1,2]</code>.</li>
	<li><code>[2,3,1]</code> and <code>[2,1,3]</code> are not valid infection sequences because the person at index 2 cannot be infected at the first step.</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 4, sick = [1]</span></p>

<p><strong>Output:</strong> <span class="example-io">3</span></p>

<p><strong>Explanation:</strong></p>

<p>There is a total of 6 different sequences overall.</p>

<ul>
	<li>Valid infection sequences are <code>[0,2,3]</code>, <code>[2,0,3]</code> and <code>[2,3,0]</code>.</li>
	<li><code>[3,2,0]</code>, <code>[3,0,2]</code>, and <code>[0,3,2]</code> are not valid infection sequences because the infection starts at the person at index 1, then the order of infection is 2, then 3, and hence 3 cannot be infected earlier than 2.</li>
</ul>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= sick.length &lt;= n - 1</code></li>
	<li><code>0 &lt;= sick[i] &lt;= n - 1</code></li>
	<li><code>sick</code> is sorted in increasing order.</li>
</ul>


## Solution

---
### Python3
``` py title='count-the-number-of-infection-sequences'
class Solution:
    MOD = 10 ** 9 + 7

    @staticmethod
    @cache
    def factorial(n: int) -> int:
        if n == 0:
            return 1
        return n * Solution.factorial(n - 1) % Solution.MOD

    def numberOfSequence(self, n: int, sick: List[int]) -> int:
        # DD, DDD, DDDD
        # 9! / 2! / 3! / 4! * (1) * (2 * 2 * 1) * (1)
        lengths = [sick[0], n - sick[-1] - 1]
        for a, b in pairwise(sick):
            length = b - a - 1
            if length > 0:
                lengths.append(length)

        res = Solution.factorial(sum(lengths))
        for i, x in enumerate(lengths):
            res *= pow(Solution.factorial(x), -1, Solution.MOD)
            res %= Solution.MOD

            # do not multiply by 2 for beginning and end
            if i >= 2:
                res *= pow(2, x - 1, Solution.MOD)
                res %= Solution.MOD

        return res
```

