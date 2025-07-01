---
title: 990. Satisfiability of Equality Equations
draft: false
tags: 
  - leetcode-medium
  - array
  - string
  - union-find
  - graph
  - weekly-contest-123
  - contest-question
date: 2022-09-26
---

[Problem Link](https://leetcode.com/problems/satisfiability-of-equality-equations/)

## Description

---
<p>You are given an array of strings <code>equations</code> that represent relationships between variables where each string <code>equations[i]</code> is of length <code>4</code> and takes one of two different forms: <code>&quot;x<sub>i</sub>==y<sub>i</sub>&quot;</code> or <code>&quot;x<sub>i</sub>!=y<sub>i</sub>&quot;</code>.Here, <code>x<sub>i</sub></code> and <code>y<sub>i</sub></code> are lowercase letters (not necessarily different) that represent one-letter variable names.</p>

<p>Return <code>true</code><em> if it is possible to assign integers to variable names so as to satisfy all the given equations, or </em><code>false</code><em> otherwise</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> equations = [&quot;a==b&quot;,&quot;b!=a&quot;]
<strong>Output:</strong> false
<strong>Explanation:</strong> If we assign say, a = 1 and b = 1, then the first equation is satisfied, but not the second.
There is no way to assign the variables to satisfy both equations.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> equations = [&quot;b==a&quot;,&quot;a==b&quot;]
<strong>Output:</strong> true
<strong>Explanation:</strong> We could assign a = 1 and b = 1 to satisfy both equations.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= equations.length &lt;= 500</code></li>
	<li><code>equations[i].length == 4</code></li>
	<li><code>equations[i][0]</code> is a lowercase letter.</li>
	<li><code>equations[i][1]</code> is either <code>&#39;=&#39;</code> or <code>&#39;!&#39;</code>.</li>
	<li><code>equations[i][2]</code> is <code>&#39;=&#39;</code>.</li>
	<li><code>equations[i][3]</code> is a lowercase letter.</li>
</ul>


## Solution

---
### Python3
``` py title='satisfiability-of-equality-equations'
class UnionFind:
    def __init__(self):
        self._parent = {}
        self._size = {}

    def union(self, a, b):
        a, b = self.find(a), self.find(b)
        if a == b:
            return
        if self._size[a] < self._size[b]:
            a, b = b, a
        self._parent[b] = a
        self._size[a] += self._size[b]

    def find(self, x):
        if x not in self._parent:
            self._parent[x] = x
            self._size[x] = 1
        while self._parent[x] != x:
            self._parent[x] = self._parent[self._parent[x]]
            x = self._parent[x]
        return x

class Solution:
    def equationsPossible(self, equations: List[str]) -> bool:
        N = len(equations)
        uf = UnionFind()

        for x, e, _ , y in equations:
            if e == "=":
                uf.union(x, y)
        
        return not any(e == "!" and uf.find(x) == uf.find(y) for x, e, _, y in equations)

```

