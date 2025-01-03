---
title: 2097. Valid Arrangement of Pairs
draft: false
tags: 
  - depth-first-search
  - graph
  - eulerian-circuit
date: 2024-11-30
---

![Difficulty](https://img.shields.io/badge/Difficulty-Hard-blue.svg)

## Description

---
<p>You are given a <strong>0-indexed</strong> 2D integer array <code>pairs</code> where <code>pairs[i] = [start<sub>i</sub>, end<sub>i</sub>]</code>. An arrangement of <code>pairs</code> is <strong>valid</strong> if for every index <code>i</code> where <code>1 &lt;= i &lt; pairs.length</code>, we have <code>end<sub>i-1</sub> == start<sub>i</sub></code>.</p>

<p>Return <em><strong>any</strong> valid arrangement of </em><code>pairs</code>.</p>

<p><strong>Note:</strong> The inputs will be generated such that there exists a valid arrangement of <code>pairs</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> pairs = [[5,1],[4,5],[11,9],[9,4]]
<strong>Output:</strong> [[11,9],[9,4],[4,5],[5,1]]
<strong>Explanation:
</strong>This is a valid arrangement since end<sub>i-1</sub> always equals start<sub>i</sub>.
end<sub>0</sub> = 9 == 9 = start<sub>1</sub> 
end<sub>1</sub> = 4 == 4 = start<sub>2</sub>
end<sub>2</sub> = 5 == 5 = start<sub>3</sub>
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> pairs = [[1,3],[3,2],[2,1]]
<strong>Output:</strong> [[1,3],[3,2],[2,1]]
<strong>Explanation:</strong>
This is a valid arrangement since end<sub>i-1</sub> always equals start<sub>i</sub>.
end<sub>0</sub> = 3 == 3 = start<sub>1</sub>
end<sub>1</sub> = 2 == 2 = start<sub>2</sub>
The arrangements [[2,1],[1,3],[3,2]] and [[3,2],[2,1],[1,3]] are also valid.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> pairs = [[1,2],[1,3],[2,1]]
<strong>Output:</strong> [[1,2],[2,1],[1,3]]
<strong>Explanation:</strong>
This is a valid arrangement since end<sub>i-1</sub> always equals start<sub>i</sub>.
end<sub>0</sub> = 2 == 2 = start<sub>1</sub>
end<sub>1</sub> = 1 == 1 = start<sub>2</sub>
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= pairs.length &lt;= 10<sup>5</sup></code></li>
	<li><code>pairs[i].length == 2</code></li>
	<li><code>0 &lt;= start<sub>i</sub>, end<sub>i</sub> &lt;= 10<sup>9</sup></code></li>
	<li><code>start<sub>i</sub> != end<sub>i</sub></code></li>
	<li>No two pairs are exactly the same.</li>
	<li>There <strong>exists</strong> a valid arrangement of <code>pairs</code>.</li>
</ul>


## Solution

---
### Python
``` py title='valid-arrangement-of-pairs'
class Solution:
    def validArrangement(self, pairs: List[List[int]]) -> List[List[int]]:
        graph = defaultdict(list)
        din, dout = Counter(), Counter()
        
        for x, y in pairs:
            graph[x].append(y)
            dout[x] += 1
            din[y] += 1
        
        head = pairs[0][0]
        for x in dout:
            if dout[x] - din[x] == 1:
                head = x
                break
        
        stack = [head]
        routes = []
        
        while stack:
            while graph[stack[-1]]:
                stack.append(graph[stack[-1]].pop())
            routes.append(stack.pop())
        
        routes.reverse()
        
        return [[routes[i], routes[i + 1]] for i in range(len(routes) - 1)]

```

