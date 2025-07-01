---
title: 1203. Sort Items by Groups Respecting Dependencies
draft: false
tags: 
  - leetcode-hard
  - depth-first-search
  - breadth-first-search
  - graph
  - topological-sort
  - weekly-contest-155
  - contest-question
date: 2023-08-20
---

[Problem Link](https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/)

## Description

---
<p>There are&nbsp;<code>n</code>&nbsp;items each&nbsp;belonging to zero or one of&nbsp;<code>m</code>&nbsp;groups where <code>group[i]</code>&nbsp;is the group that the <code>i</code>-th item belongs to and it&#39;s equal to <code>-1</code>&nbsp;if the <code>i</code>-th item belongs to no group. The items and the groups are zero indexed. A group can have no item belonging to it.</p>

<p>Return a sorted list of the items such that:</p>

<ul>
	<li>The items that belong to the same group are next to each other in the sorted list.</li>
	<li>There are some&nbsp;relations&nbsp;between these items where&nbsp;<code>beforeItems[i]</code>&nbsp;is a list containing all the items that should come before the&nbsp;<code>i</code>-th item in the sorted array (to the left of the&nbsp;<code>i</code>-th item).</li>
</ul>

<p>Return any solution if there is more than one solution and return an <strong>empty list</strong>&nbsp;if there is no solution.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<p><strong><img alt="" src="https://assets.leetcode.com/uploads/2019/09/11/1359_ex1.png" style="width: 191px; height: 181px;" /></strong></p>

<pre>
<strong>Input:</strong> n = 8, m = 2, group = [-1,-1,1,0,0,1,0,-1], beforeItems = [[],[6],[5],[6],[3,6],[],[],[]]
<strong>Output:</strong> [6,3,4,1,5,2,0,7]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 8, m = 2, group = [-1,-1,1,0,0,1,0,-1], beforeItems = [[],[6],[5],[6],[3],[],[4],[]]
<strong>Output:</strong> []
<strong>Explanation:</strong>&nbsp;This is the same as example 1 except that 4 needs to be before 6 in the sorted list.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= m &lt;= n &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>group.length == beforeItems.length == n</code></li>
	<li><code>-1 &lt;= group[i] &lt;= m - 1</code></li>
	<li><code>0 &lt;= beforeItems[i].length &lt;= n - 1</code></li>
	<li><code>0 &lt;= beforeItems[i][j] &lt;= n - 1</code></li>
	<li><code>i != beforeItems[i][j]</code></li>
	<li><code>beforeItems[i]&nbsp;</code>does not contain&nbsp;duplicates elements.</li>
</ul>


## Solution

---
### Python3
``` py title='sort-items-by-groups-respecting-dependencies'
def topo_sort(predecessors, successors):
    order = []
    available = [i for i in range(len(predecessors)) if not predecessors[i]]
    while available:
        i = available.pop()
        order.append(i)
        for j in successors[i]:
            predecessors[j] -= 1
            if not predecessors[j]:
                available.append(j)
    return order

class Solution:
    def sortItems(self, n: int, m: int, group: List[int], beforeItems: List[List[int]]) -> List[int]:
        for i in range(n):
            if group[i] == -1:
                group[i] = m
                m += 1
        
        item_predecessors = [0] * n
        group_predecessors = [0] * m
        item_successors = [[] for _ in range(n)]
        group_successors = [[] for _ in range(m)]
        for i, (group_i, before_i) in enumerate(zip(group, beforeItems)):
            for j in before_i:
                item_predecessors[i] += 1
                item_successors[j].append(i)
                if group_i != group[j]:
                    group_predecessors[group_i] += 1
                    group_successors[group[j]].append(group_i)
        
        item_order = topo_sort(item_predecessors, item_successors)
        group_order = topo_sort(group_predecessors, group_successors)
        if len(item_order) != n or len(group_order) != m:
            return []
        
        group_orders = [[] for _ in range(m)]
        for i in item_order:
            group_orders[group[i]].append(i)
        
        return sum((group_orders[g] for g in group_order), [])
        
```

