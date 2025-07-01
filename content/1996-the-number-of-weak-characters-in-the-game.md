---
title: 1996. The Number of Weak Characters in the Game
draft: false
tags: 
  - leetcode-medium
  - array
  - stack
  - greedy
  - sorting
  - monotonic-stack
  - weekly-contest-257
  - contest-question
date: 2022-09-09
---

[Problem Link](https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/)

## Description

---
<p>You are playing a game that contains multiple characters, and each of the characters has <strong>two</strong> main properties: <strong>attack</strong> and <strong>defense</strong>. You are given a 2D integer array <code>properties</code> where <code>properties[i] = [attack<sub>i</sub>, defense<sub>i</sub>]</code> represents the properties of the <code>i<sup>th</sup></code> character in the game.</p>

<p>A character is said to be <strong>weak</strong> if any other character has <strong>both</strong> attack and defense levels <strong>strictly greater</strong> than this character&#39;s attack and defense levels. More formally, a character <code>i</code> is said to be <strong>weak</strong> if there exists another character <code>j</code> where <code>attack<sub>j</sub> &gt; attack<sub>i</sub></code> and <code>defense<sub>j</sub> &gt; defense<sub>i</sub></code>.</p>

<p>Return <em>the number of <strong>weak</strong> characters</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> properties = [[5,5],[6,3],[3,6]]
<strong>Output:</strong> 0
<strong>Explanation:</strong> No character has strictly greater attack and defense than the other.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> properties = [[2,2],[3,3]]
<strong>Output:</strong> 1
<strong>Explanation:</strong> The first character is weak because the second character has a strictly greater attack and defense.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> properties = [[1,5],[10,4],[4,3]]
<strong>Output:</strong> 1
<strong>Explanation:</strong> The third character is weak because the second character has a strictly greater attack and defense.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= properties.length &lt;= 10<sup>5</sup></code></li>
	<li><code>properties[i].length == 2</code></li>
	<li><code>1 &lt;= attack<sub>i</sub>, defense<sub>i</sub> &lt;= 10<sup>5</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='the-number-of-weak-characters-in-the-game'
class Solution:
    def numberOfWeakCharacters(self, A: List[List[int]]) -> int:
        A.sort(key = lambda x : (x[0], -x[1]))
        res = 0
        stack = []
        
        for a, b in A:
            while stack and a > stack[-1][0] and b > stack[-1][1]:
                res += 1
                stack.pop()
            
            stack.append((a, b))
        
        return res
```

