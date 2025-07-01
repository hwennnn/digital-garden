---
title: 1494. Parallel Courses II
draft: false
tags: 
  - leetcode-hard
  - dynamic-programming
  - bit-manipulation
  - graph
  - bitmask
  - biweekly-contest-29
  - contest-question
date: 2022-01-10
---

[Problem Link](https://leetcode.com/problems/parallel-courses-ii/)

## Description

---
<p>You are given an integer <code>n</code>, which indicates that there are <code>n</code> courses labeled from <code>1</code> to <code>n</code>. You are also given an array <code>relations</code> where <code>relations[i] = [prevCourse<sub>i</sub>, nextCourse<sub>i</sub>]</code>, representing a prerequisite relationship between course <code>prevCourse<sub>i</sub></code> and course <code>nextCourse<sub>i</sub></code>: course <code>prevCourse<sub>i</sub></code> has to be taken before course <code>nextCourse<sub>i</sub></code>. Also, you are given the integer <code>k</code>.</p>

<p>In one semester, you can take <strong>at most</strong> <code>k</code> courses as long as you have taken all the prerequisites in the <strong>previous</strong> semesters for the courses you are taking.</p>

<p>Return <em>the <strong>minimum</strong> number of semesters needed to take all courses</em>. The testcases will be generated such that it is possible to take every course.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/05/22/leetcode_parallel_courses_1.png" style="width: 269px; height: 147px;" />
<pre>
<strong>Input:</strong> n = 4, relations = [[2,1],[3,1],[1,4]], k = 2
<strong>Output:</strong> 3
<strong>Explanation:</strong> The figure above represents the given graph.
In the first semester, you can take courses 2 and 3.
In the second semester, you can take course 1.
In the third semester, you can take course 4.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/05/22/leetcode_parallel_courses_2.png" style="width: 271px; height: 211px;" />
<pre>
<strong>Input:</strong> n = 5, relations = [[2,1],[3,1],[4,1],[1,5]], k = 2
<strong>Output:</strong> 4
<strong>Explanation:</strong> The figure above represents the given graph.
In the first semester, you can only take courses 2 and 3 since you cannot take more than two per semester.
In the second semester, you can take course 4.
In the third semester, you can take course 1.
In the fourth semester, you can take course 5.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 15</code></li>
	<li><code>1 &lt;= k &lt;= n</code></li>
	<li><code>0 &lt;= relations.length &lt;= n * (n-1) / 2</code></li>
	<li><code>relations[i].length == 2</code></li>
	<li><code>1 &lt;= prevCourse<sub>i</sub>, nextCourse<sub>i</sub> &lt;= n</code></li>
	<li><code>prevCourse<sub>i</sub> != nextCourse<sub>i</sub></code></li>
	<li>All the pairs <code>[prevCourse<sub>i</sub>, nextCourse<sub>i</sub>]</code> are <strong>unique</strong>.</li>
	<li>The given graph is a directed acyclic graph.</li>
</ul>


## Solution

---
### Python3
``` py title='parallel-courses-ii'
class Solution:
    def minNumberOfSemesters(self, n: int, relations: List[List[int]], k: int) -> int:
        pre = [0] * n
        target = (1 << n) - 1
        dp = [n + 1] * (1 << n)

        for a, b in relations:
            a -= 1
            b -= 1
            pre[b] |= (1 << a)
        
        queue = deque([(0, 0)])
        
        while queue:
            state, steps = queue.popleft()
            available = []

            if state == target: return steps

            for course in range(n):
                # means the course is already taken
                if state & (1 << course) > 0: continue

                # does not meet the pre-req yet
                if (pre[course] & state) != pre[course]: continue

                available.append(course)
            
            if len(available) <= k:
                newState = state

                for course in available:
                    newState |= (1 << course)
                
                if steps + 1 < dp[newState]:
                    dp[newState] = steps + 1
                    queue.append((newState, steps + 1))
            else:
                for comb in combinations(available, k):
                    newState = state

                    for course in list(comb):
                        newState |= (1 << course)
                    
                    if steps + 1 < dp[newState]:
                        dp[newState] = steps + 1
                        queue.append((newState, steps + 1))
            
```
### C++
``` cpp title='parallel-courses-ii'
class Solution {
    int a[15],f[32768],o[32768];
public:
    int minNumberOfSemesters(int n, vector<vector<int>>& dependencies, int k) {
        memset(a,0,sizeof(a));
        int i,j,l;
        for(auto e:dependencies)a[e[1]-1]|=1<<e[0]-1;
        for(i=1;i<1<<n;i++)o[i]=o[i>>1]+(i&1);
        memset(f,127,sizeof(f));
        for(i=f[0]=0;i<1<<n;i++)if(f[i]<=n)
        {
            for(j=l=0;j<n;j++)if(!(i>>j&1)&&(a[j]&i)==a[j])l|=1<<j;
            for(j=l;j;j=j-1&l)if(o[j]<=k)f[i|j]=min(f[i|j],f[i]+1);
        }
        return f[(1<<n)-1];
    }
};
```

