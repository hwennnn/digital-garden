---
title: 2050. Parallel Courses III
draft: false
tags: 
  - leetcode-hard
  - array
  - dynamic-programming
  - graph
  - topological-sort
  - weekly-contest-264
  - contest-question
date: 2023-10-18
---

[Problem Link](https://leetcode.com/problems/parallel-courses-iii/)

## Description

---
<p>You are given an integer <code>n</code>, which indicates that there are <code>n</code> courses labeled from <code>1</code> to <code>n</code>. You are also given a 2D integer array <code>relations</code> where <code>relations[j] = [prevCourse<sub>j</sub>, nextCourse<sub>j</sub>]</code> denotes that course <code>prevCourse<sub>j</sub></code> has to be completed <strong>before</strong> course <code>nextCourse<sub>j</sub></code> (prerequisite relationship). Furthermore, you are given a <strong>0-indexed</strong> integer array <code>time</code> where <code>time[i]</code> denotes how many <strong>months</strong> it takes to complete the <code>(i+1)<sup>th</sup></code> course.</p>

<p>You must find the <strong>minimum</strong> number of months needed to complete all the courses following these rules:</p>

<ul>
	<li>You may start taking a course at <strong>any time</strong> if the prerequisites are met.</li>
	<li><strong>Any number of courses</strong> can be taken at the <strong>same time</strong>.</li>
</ul>

<p>Return <em>the <strong>minimum</strong> number of months needed to complete all the courses</em>.</p>

<p><strong>Note:</strong> The test cases are generated such that it is possible to complete every course (i.e., the graph is a directed acyclic graph).</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<strong><img alt="" src="https://assets.leetcode.com/uploads/2021/10/07/ex1.png" style="width: 392px; height: 232px;" /></strong>

<pre>
<strong>Input:</strong> n = 3, relations = [[1,3],[2,3]], time = [3,2,5]
<strong>Output:</strong> 8
<strong>Explanation:</strong> The figure above represents the given graph and the time required to complete each course. 
We start course 1 and course 2 simultaneously at month 0.
Course 1 takes 3 months and course 2 takes 2 months to complete respectively.
Thus, the earliest time we can start course 3 is at month 3, and the total time required is 3 + 5 = 8 months.
</pre>

<p><strong class="example">Example 2:</strong></p>
<strong><img alt="" src="https://assets.leetcode.com/uploads/2021/10/07/ex2.png" style="width: 500px; height: 365px;" /></strong>

<pre>
<strong>Input:</strong> n = 5, relations = [[1,5],[2,5],[3,5],[3,4],[4,5]], time = [1,2,3,4,5]
<strong>Output:</strong> 12
<strong>Explanation:</strong> The figure above represents the given graph and the time required to complete each course.
You can start courses 1, 2, and 3 at month 0.
You can complete them after 1, 2, and 3 months respectively.
Course 4 can be taken only after course 3 is completed, i.e., after 3 months. It is completed after 3 + 4 = 7 months.
Course 5 can be taken only after courses 1, 2, 3, and 4 have been completed, i.e., after max(1,2,3,7) = 7 months.
Thus, the minimum time needed to complete all the courses is 7 + 5 = 12 months.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>0 &lt;= relations.length &lt;= min(n * (n - 1) / 2, 5 * 10<sup>4</sup>)</code></li>
	<li><code>relations[j].length == 2</code></li>
	<li><code>1 &lt;= prevCourse<sub>j</sub>, nextCourse<sub>j</sub> &lt;= n</code></li>
	<li><code>prevCourse<sub>j</sub> != nextCourse<sub>j</sub></code></li>
	<li>All the pairs <code>[prevCourse<sub>j</sub>, nextCourse<sub>j</sub>]</code> are <strong>unique</strong>.</li>
	<li><code>time.length == n</code></li>
	<li><code>1 &lt;= time[i] &lt;= 10<sup>4</sup></code></li>
	<li>The given graph is a directed acyclic graph.</li>
</ul>


## Solution

---
### Python3
``` py title='parallel-courses-iii'
class Solution:
    def minimumTime(self, n: int, relations: List[List[int]], time: List[int]) -> int:
        indegree = [0] * n
        graph = defaultdict(list)
        dist = [-inf] * n

        for a, b in relations:
            a -= 1
            b -= 1

            graph[a].append(b)
            indegree[b] += 1
        
        queue = deque()
        for i in range(n):
            if indegree[i] == 0:
                queue.append(i)
                dist[i] = time[i]
        
        while queue:
            node = queue.popleft()

            for adj in graph[node]:
                indegree[adj] -= 1
                dist[adj] = max(dist[adj], dist[node] + time[adj])

                if indegree[adj] == 0:
                    queue.append(adj)
                
        
        return max(dist)
```

