---
title: 1583. Count Unhappy Friends
draft: false
tags: 
  - array
  - simulation
date: 2023-10-03
---

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-blue.svg)

## Description

---
<p>You are given a list of&nbsp;<code>preferences</code>&nbsp;for&nbsp;<code>n</code>&nbsp;friends, where <code>n</code> is always <strong>even</strong>.</p>

<p>For each person <code>i</code>,&nbsp;<code>preferences[i]</code>&nbsp;contains&nbsp;a list of friends&nbsp;<strong>sorted</strong> in the <strong>order of preference</strong>. In other words, a friend earlier in the list is more preferred than a friend later in the list.&nbsp;Friends in&nbsp;each list are&nbsp;denoted by integers from <code>0</code> to <code>n-1</code>.</p>

<p>All the friends are divided into pairs.&nbsp;The pairings are&nbsp;given in a list&nbsp;<code>pairs</code>,&nbsp;where <code>pairs[i] = [x<sub>i</sub>, y<sub>i</sub>]</code> denotes <code>x<sub>i</sub></code>&nbsp;is paired with <code>y<sub>i</sub></code> and <code>y<sub>i</sub></code> is paired with <code>x<sub>i</sub></code>.</p>

<p>However, this pairing may cause some of the friends to be unhappy.&nbsp;A friend <code>x</code>&nbsp;is unhappy if <code>x</code>&nbsp;is paired with <code>y</code>&nbsp;and there exists a friend <code>u</code>&nbsp;who&nbsp;is paired with <code>v</code>&nbsp;but:</p>

<ul>
	<li><code>x</code>&nbsp;prefers <code>u</code>&nbsp;over <code>y</code>,&nbsp;and</li>
	<li><code>u</code>&nbsp;prefers <code>x</code>&nbsp;over <code>v</code>.</li>
</ul>

<p>Return <em>the number of unhappy friends</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 4, preferences = [[1, 2, 3], [3, 2, 0], [3, 1, 0], [1, 2, 0]], pairs = [[0, 1], [2, 3]]
<strong>Output:</strong> 2
<strong>Explanation:</strong>
Friend 1 is unhappy because:
- 1 is paired with 0 but prefers 3 over 0, and
- 3 prefers 1 over 2.
Friend 3 is unhappy because:
- 3 is paired with 2 but prefers 1 over 2, and
- 1 prefers 3 over 0.
Friends 0 and 2 are happy.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 2, preferences = [[1], [0]], pairs = [[1, 0]]
<strong>Output:</strong> 0
<strong>Explanation:</strong> Both friends 0 and 1 are happy.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> n = 4, preferences = [[1, 3, 2], [2, 3, 0], [1, 3, 0], [0, 2, 1]], pairs = [[1, 3], [0, 2]]
<strong>Output:</strong> 4
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= n &lt;= 500</code></li>
	<li><code>n</code>&nbsp;is even.</li>
	<li><code>preferences.length&nbsp;== n</code></li>
	<li><code>preferences[i].length&nbsp;== n - 1</code></li>
	<li><code>0 &lt;= preferences[i][j] &lt;= n - 1</code></li>
	<li><code>preferences[i]</code>&nbsp;does not contain <code>i</code>.</li>
	<li>All values in&nbsp;<code>preferences[i]</code>&nbsp;are unique.</li>
	<li><code>pairs.length&nbsp;== n/2</code></li>
	<li><code>pairs[i].length&nbsp;== 2</code></li>
	<li><code>x<sub>i</sub> != y<sub>i</sub></code></li>
	<li><code>0 &lt;= x<sub>i</sub>, y<sub>i</sub>&nbsp;&lt;= n - 1</code></li>
	<li>Each person is contained in <strong>exactly one</strong> pair.</li>
</ul>


## Solution

---
### Python
``` py title='count-unhappy-friends'
class Solution:
    def unhappyFriends(self, n: int, preferences: List[List[int]], pairs: List[List[int]]) -> int:
        M = len(pairs)
        res = 0

        mp = [0] * n
        for a, b in pairs:
            mp[a] = b
            mp[b] = a
        
        rankings = [{ranking : i for i, ranking in enumerate(rankings)} for rankings in preferences]

        for i in range(n):
            for j in preferences[i]:
                if rankings[i][j] < rankings[i][mp[i]] and rankings[j][i] < rankings[j][mp[j]]:
                    res += 1
                    break

        return res

```

