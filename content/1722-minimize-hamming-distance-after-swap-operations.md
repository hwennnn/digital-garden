---
title: 1722. Minimize Hamming Distance After Swap Operations
draft: false
tags: 
  - leetcode-medium
  - array
  - depth-first-search
  - union-find
  - weekly-contest-223
  - contest-question
date: 2021-01-10
---

[Problem Link](https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations/)

## Description

---
<p>You are given two integer arrays, <code>source</code> and <code>target</code>, both of length <code>n</code>. You are also given an array <code>allowedSwaps</code> where each <code>allowedSwaps[i] = [a<sub>i</sub>, b<sub>i</sub>]</code> indicates that you are allowed to swap the elements at index <code>a<sub>i</sub></code> and index <code>b<sub>i</sub></code> <strong>(0-indexed)</strong> of array <code>source</code>. Note that you can swap elements at a specific pair of indices <strong>multiple</strong> times and in <strong>any</strong> order.</p>

<p>The <strong>Hamming distance</strong> of two arrays of the same length, <code>source</code> and <code>target</code>, is the number of positions where the elements are different. Formally, it is the number of indices <code>i</code> for <code>0 &lt;= i &lt;= n-1</code> where <code>source[i] != target[i]</code> <strong>(0-indexed)</strong>.</p>

<p>Return <em>the <strong>minimum Hamming distance</strong> of </em><code>source</code><em> and </em><code>target</code><em> after performing <strong>any</strong> amount of swap operations on array </em><code>source</code><em>.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> source = [1,2,3,4], target = [2,1,4,5], allowedSwaps = [[0,1],[2,3]]
<strong>Output:</strong> 1
<strong>Explanation:</strong> source can be transformed the following way:
- Swap indices 0 and 1: source = [<u>2</u>,<u>1</u>,3,4]
- Swap indices 2 and 3: source = [2,1,<u>4</u>,<u>3</u>]
The Hamming distance of source and target is 1 as they differ in 1 position: index 3.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> source = [1,2,3,4], target = [1,3,2,4], allowedSwaps = []
<strong>Output:</strong> 2
<strong>Explanation:</strong> There are no allowed swaps.
The Hamming distance of source and target is 2 as they differ in 2 positions: index 1 and index 2.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> source = [5,1,2,4,3], target = [1,5,4,2,3], allowedSwaps = [[0,4],[4,2],[1,3],[1,4]]
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == source.length == target.length</code></li>
	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= source[i], target[i] &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= allowedSwaps.length &lt;= 10<sup>5</sup></code></li>
	<li><code>allowedSwaps[i].length == 2</code></li>
	<li><code>0 &lt;= a<sub>i</sub>, b<sub>i</sub> &lt;= n - 1</code></li>
	<li><code>a<sub>i</sub> != b<sub>i</sub></code></li>
</ul>


## Solution

---
### Python3
``` py title='minimize-hamming-distance-after-swap-operations'
class Solution:
    def minimumHammingDistance(self, source: List[int], target: List[int], allowedSwaps: List[List[int]]) -> int:
        res = n = len(source)
        s = [set() for _ in range(n)]
        seen = [0] * n
        
        for a,b in allowedSwaps:
            s[a].add(b)
            s[b].add(a)
        
        def dfs(i):
            seen[i] = 1
            found.append(i)
            for j in s[i]:
                if not seen[j]:
                    dfs(j)
        
        for i in range(n):
            if seen[i]: continue
            
            found = []
            dfs(i)
            
            count1 = Counter(source[x] for x in found)
            count2 = Counter(target[x] for x in found)
            
            res -= sum((count1&count2).values())
            
        return res
```

