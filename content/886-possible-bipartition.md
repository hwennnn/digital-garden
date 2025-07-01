---
title: 886. Possible Bipartition
draft: false
tags: 
  - leetcode-medium
  - depth-first-search
  - breadth-first-search
  - union-find
  - graph
  - weekly-contest-97
  - contest-question
date: 2022-12-21
---

[Problem Link](https://leetcode.com/problems/possible-bipartition/)

## Description

---
<p>We want to split a group of <code>n</code> people (labeled from <code>1</code> to <code>n</code>) into two groups of <strong>any size</strong>. Each person may dislike some other people, and they should not go into the same group.</p>

<p>Given the integer <code>n</code> and the array <code>dislikes</code> where <code>dislikes[i] = [a<sub>i</sub>, b<sub>i</sub>]</code> indicates that the person labeled <code>a<sub>i</sub></code> does not like the person labeled <code>b<sub>i</sub></code>, return <code>true</code> <em>if it is possible to split everyone into two groups in this way</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 4, dislikes = [[1,2],[1,3],[2,4]]
<strong>Output:</strong> true
<strong>Explanation:</strong> The first group has [1,4], and the second group has [2,3].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 3, dislikes = [[1,2],[1,3],[2,3]]
<strong>Output:</strong> false
<strong>Explanation:</strong> We need at least 3 groups to divide them. We cannot put them in two groups.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 2000</code></li>
	<li><code>0 &lt;= dislikes.length &lt;= 10<sup>4</sup></code></li>
	<li><code>dislikes[i].length == 2</code></li>
	<li><code>1 &lt;= a<sub>i</sub> &lt; b<sub>i</sub> &lt;= n</code></li>
	<li>All the pairs of <code>dislikes</code> are <strong>unique</strong>.</li>
</ul>


## Solution

---
### Python3
``` py title='possible-bipartition'
class Solution:
    def possibleBipartition(self, n: int, dislikes: List[List[int]]) -> bool:
        graph = defaultdict(list)

        for a, b in dislikes:
            graph[a].append(b)
            graph[b].append(a)
        
        color = {}

        def go(node):
            for hate in graph[node]:
                if hate not in color:
                    color[hate] = -color[node]
                    if not go(hate):
                        return False
                else:
                    if color[hate] == color[node]:
                        return False
            
            return True

        for node in range(1, n + 1):
            if node not in color:
                color[node] = 1
                if not go(node):
                    return False
        
        return True
        

```

