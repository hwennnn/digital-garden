---
title: 952. Largest Component Size by Common Factor
draft: false
tags: 
  - leetcode-hard
  - array
  - hash-table
  - math
  - union-find
  - number-theory
  - weekly-contest-113
  - contest-question
date: 2022-02-24
---

[Problem Link](https://leetcode.com/problems/largest-component-size-by-common-factor/)

## Description

---
<p>You are given an integer array of unique positive integers <code>nums</code>. Consider the following graph:</p>

<ul>
	<li>There are <code>nums.length</code> nodes, labeled <code>nums[0]</code> to <code>nums[nums.length - 1]</code>,</li>
	<li>There is an undirected edge between <code>nums[i]</code> and <code>nums[j]</code> if <code>nums[i]</code> and <code>nums[j]</code> share a common factor greater than <code>1</code>.</li>
</ul>

<p>Return <em>the size of the largest connected component in the graph</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2018/12/01/ex1.png" style="width: 500px; height: 97px;" />
<pre>
<strong>Input:</strong> nums = [4,6,15,35]
<strong>Output:</strong> 4
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2018/12/01/ex2.png" style="width: 500px; height: 85px;" />
<pre>
<strong>Input:</strong> nums = [20,50,9,63]
<strong>Output:</strong> 2
</pre>

<p><strong class="example">Example 3:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2018/12/01/ex3.png" style="width: 500px; height: 260px;" />
<pre>
<strong>Input:</strong> nums = [2,3,6,7,4,12,21,39]
<strong>Output:</strong> 8
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 2 * 10<sup>4</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>
	<li>All the values of <code>nums</code> are <strong>unique</strong>.</li>
</ul>


## Solution

---
### Python3
``` py title='largest-component-size-by-common-factor'
class DSU:
    def __init__(self, n):
        self.graph = list(range(n))

    def find(self, x):
        if self.graph[x] != x:
            self.graph[x] = self.find(self.graph[x])

        return self.graph[x]

    def union(self, x, y):
        ux, uy = self.find(x), self.find(y)
        self.graph[ux] = uy

class Solution:
    def largestComponentSize(self, nums: List[int]) -> int:
        n = len(nums)
        dsu = DSU(n)
        primes = defaultdict(list)
        
        def getPrimesSet(x):
            for i in range(2, int(math.sqrt(x)) + 1):
                if x % i == 0:
                    return getPrimesSet(x // i) | set([i])
            
            return set([x])
        
        for i, x in enumerate(nums):
            p = getPrimesSet(x)
            for prime in p:
                primes[prime].append(i)
        
        for indexes in primes.values():
            for x, y in zip(indexes, indexes[1:]):
                dsu.union(x, y)
        
        return max(Counter(dsu.find(i) for i in range(n)).values())
            
```

