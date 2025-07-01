---
title: 2392. Build a Matrix With Conditions
draft: false
tags: 
  - leetcode-hard
  - array
  - graph
  - topological-sort
  - matrix
  - weekly-contest-308
  - contest-question
date: 2023-07-27
---

[Problem Link](https://leetcode.com/problems/build-a-matrix-with-conditions/)

## Description

---
<p>You are given a <strong>positive</strong> integer <code>k</code>. You are also given:</p>

<ul>
	<li>a 2D integer array <code>rowConditions</code> of size <code>n</code> where <code>rowConditions[i] = [above<sub>i</sub>, below<sub>i</sub>]</code>, and</li>
	<li>a 2D integer array <code>colConditions</code> of size <code>m</code> where <code>colConditions[i] = [left<sub>i</sub>, right<sub>i</sub>]</code>.</li>
</ul>

<p>The two arrays contain integers from <code>1</code> to <code>k</code>.</p>

<p>You have to build a <code>k x k</code> matrix that contains each of the numbers from <code>1</code> to <code>k</code> <strong>exactly once</strong>. The remaining cells should have the value <code>0</code>.</p>

<p>The matrix should also satisfy the following conditions:</p>

<ul>
	<li>The number <code>above<sub>i</sub></code> should appear in a <strong>row</strong> that is strictly <strong>above</strong> the row at which the number <code>below<sub>i</sub></code> appears for all <code>i</code> from <code>0</code> to <code>n - 1</code>.</li>
	<li>The number <code>left<sub>i</sub></code> should appear in a <strong>column</strong> that is strictly <strong>left</strong> of the column at which the number <code>right<sub>i</sub></code> appears for all <code>i</code> from <code>0</code> to <code>m - 1</code>.</li>
</ul>

<p>Return <em><strong>any</strong> matrix that satisfies the conditions</em>. If no answer exists, return an empty matrix.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/07/06/gridosdrawio.png" style="width: 211px; height: 211px;" />
<pre>
<strong>Input:</strong> k = 3, rowConditions = [[1,2],[3,2]], colConditions = [[2,1],[3,2]]
<strong>Output:</strong> [[3,0,0],[0,0,1],[0,2,0]]
<strong>Explanation:</strong> The diagram above shows a valid example of a matrix that satisfies all the conditions.
The row conditions are the following:
- Number 1 is in row <u>1</u>, and number 2 is in row <u>2</u>, so 1 is above 2 in the matrix.
- Number 3 is in row <u>0</u>, and number 2 is in row <u>2</u>, so 3 is above 2 in the matrix.
The column conditions are the following:
- Number 2 is in column <u>1</u>, and number 1 is in column <u>2</u>, so 2 is left of 1 in the matrix.
- Number 3 is in column <u>0</u>, and number 2 is in column <u>1</u>, so 3 is left of 2 in the matrix.
Note that there may be multiple correct answers.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> k = 3, rowConditions = [[1,2],[2,3],[3,1],[2,3]], colConditions = [[2,1]]
<strong>Output:</strong> []
<strong>Explanation:</strong> From the first two conditions, 3 has to be below 1 but the third conditions needs 3 to be above 1 to be satisfied.
No matrix can satisfy all the conditions, so we return the empty matrix.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= k &lt;= 400</code></li>
	<li><code>1 &lt;= rowConditions.length, colConditions.length &lt;= 10<sup>4</sup></code></li>
	<li><code>rowConditions[i].length == colConditions[i].length == 2</code></li>
	<li><code>1 &lt;= above<sub>i</sub>, below<sub>i</sub>, left<sub>i</sub>, right<sub>i</sub> &lt;= k</code></li>
	<li><code>above<sub>i</sub> != below<sub>i</sub></code></li>
	<li><code>left<sub>i</sub> != right<sub>i</sub></code></li>
</ul>


## Solution

---
### C++
``` cpp title='build-a-matrix-with-conditions'
class Solution {
public:
    // With Kahn's algorithm
    vector<int> topoSort(vector<vector<int>>& A, int k) {
        vector<int> indegree(k);
        vector<vector<int>> graph(k);
        queue<int> q;

        for (auto& condition : A) {
            int u = condition[0] - 1, v = condition[1] - 1;
            graph[u].push_back(v);
            indegree[v]++;
        }

        for (int i = 0; i < k; i++) {
            if (indegree[i] == 0) q.push(i);
        }

        vector<int> order;

        while (!q.empty()) {
            int node = q.front(); q.pop();
            order.push_back(node);

            for (int adj: graph[node]) {
                indegree[adj]--;
                if (indegree[adj] == 0) {
                    q.push(adj);
                }
            }
        }

        if (order.size() != k) return vector<int>();

        return order;
    }

    vector<vector<int>> buildMatrix(int k, vector<vector<int>>& rowConditions, vector<vector<int>>& colConditions) {
        int rows = rowConditions.size(), cols = colConditions.size();
        vector<int> topoRow = topoSort(rowConditions, k), topoCol = topoSort(colConditions, k);

        if (topoRow.empty() || topoCol.empty()) return vector<vector<int>>();

        vector<vector<int>> ans(k, vector<int>(k));
        vector<int> rowMp(k), colMp(k);

        for (int i = 0; i < k; i++) {
            rowMp[topoRow[i]] = i;
            colMp[topoCol[i]] = i;
        }

        for (int i = 0; i < k; i++) {
            ans[rowMp[i]][colMp[i]] = i + 1;
        }

        return ans;

    }
};
```
### Python3
``` py title='build-a-matrix-with-conditions'
class Solution:
    def buildMatrix(self, k: int, rowConditions: List[List[int]], colConditions: List[List[int]]) -> List[List[int]]:
        res = [[0] * k for _ in range(k)]
        
        def topoSort(A):
            adj = [[] for _ in range(k + 1)] 
            
            for a, b in A:
                adj[a].append(b)
            
            seen = [False] * (k + 1)
            order = []
            
            def dfs(x):
                if seen[x]: return
                
                seen[x] = True
                
                for nei in adj[x]:
                    if not seen[nei]:
                        dfs(nei)
                
                order.append(x)
            
            for x in range(1, k + 1):
                dfs(x)
            
            order.reverse()
            M = {j: i for i, j in enumerate(order)}
            
            if all(M[i] < M[j] for i, j in A):
                return order
            
            return None
        
        R = topoSort(rowConditions)
        C = topoSort(colConditions)
        
        if R is None or C is None:
            return []
        
        RM = {j : i for i, j in enumerate(R)}
        CM = {j : i for i, j in enumerate(C)}
        
        for x in range(1, k + 1):
            res[RM[x]][CM[x]] = x
            
        return res
```

