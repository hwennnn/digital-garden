---
title: 3186. Maximum Total Damage With Spell Casting
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - two-pointers
  - binary-search
  - dynamic-programming
  - sorting
  - counting
  - weekly-contest-402
  - contest-question
date: 2024-06-16
---

[Problem Link](https://leetcode.com/problems/maximum-total-damage-with-spell-casting/)

## Description

---
<p>A magician has various spells.</p>

<p>You are given an array <code>power</code>, where each element represents the damage of a spell. Multiple spells can have the same damage value.</p>

<p>It is a known fact that if a magician decides to cast a spell with a damage of <code>power[i]</code>, they <strong>cannot</strong> cast any spell with a damage of <code>power[i] - 2</code>, <code>power[i] - 1</code>, <code>power[i] + 1</code>, or <code>power[i] + 2</code>.</p>

<p>Each spell can be cast <strong>only once</strong>.</p>

<p>Return the <strong>maximum</strong> possible <em>total damage</em> that a magician can cast.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">power = [1,1,3,4]</span></p>

<p><strong>Output:</strong> <span class="example-io">6</span></p>

<p><strong>Explanation:</strong></p>

<p>The maximum possible damage of 6 is produced by casting spells 0, 1, 3 with damage 1, 1, 4.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">power = [7,1,6,6]</span></p>

<p><strong>Output:</strong> <span class="example-io">13</span></p>

<p><strong>Explanation:</strong></p>

<p>The maximum possible damage of 13 is produced by casting spells 1, 2, 3 with damage 1, 6, 6.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= power.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= power[i] &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='maximum-total-damage-with-spell-casting'
class Solution:
    def maximumTotalDamage(self, power: List[int]) -> int:
        counter = Counter(power)
        A = sorted(counter.keys())
        N = len(counter)
        
        @cache
        def go(index):
            if index == N:
                return 0
            
            # skip
            res = go(index + 1)
            
            # take
            nextIndex = index + 1
            while nextIndex < N and A[nextIndex] - A[index] <= 2:
                nextIndex += 1
            
            res = max(res, A[index] * counter[A[index]] + go(nextIndex))
            
            return res
        
        return go(0)
            
            
```

