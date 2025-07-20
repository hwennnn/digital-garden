---
title: 3615. Longest Palindromic Path in Graph
draft: false
tags: 
  - leetcode-hard
  - string
  - dynamic-programming
  - bit-manipulation
  - graph
  - weekly-contest-458
  - contest-question
date: 2025-07-19
---

[Problem Link](https://leetcode.com/problems/longest-palindromic-path-in-graph/)

## Description

---
<p>You are given an integer <code>n</code> and an <strong>undirected</strong> graph with <code>n</code> nodes labeled from 0 to <code>n - 1</code> and a 2D array <code>edges</code>, where <code>edges[i] = [u<sub>i</sub>, v<sub>i</sub>]</code> indicates an edge between nodes <code>u<sub>i</sub></code> and <code>v<sub>i</sub></code>.</p>

<p>You are also given a string <code>label</code> of length <code>n</code>, where <code>label[i]</code> is the character associated with node <code>i</code>.</p>

<p>You may start at any node and move to any adjacent node, visiting each node <strong>at most</strong> once.</p>

<p>Return the <strong>maximum</strong> possible length of a <strong><span data-keyword="palindrome-string">palindrome</span></strong> that can be formed by visiting a set of <strong>unique</strong> nodes along a valid path.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 3, edges = [[0,1],[1,2]], label = &quot;aba&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">3</span></p>

<p><strong>Exp</strong><strong>lanation:</strong></p>

<p><img src="https://assets.leetcode.com/uploads/2025/06/13/screenshot-2025-06-13-at-230714.png" style="width: 250px; height: 85px;" /></p>

<ul>
	<li>The longest palindromic path is from node 0 to node 2 via node 1, following the path <code>0 &rarr; 1 &rarr; 2</code> forming string <code>&quot;aba&quot;</code>.</li>
	<li>This is a valid palindrome of length 3.</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 3, edges = [[0,1],[0,2]], label = &quot;abc&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">1</span></p>

<p><strong>Explanation:</strong></p>

<p><img src="https://assets.leetcode.com/uploads/2025/06/13/screenshot-2025-06-13-at-230017.png" style="width: 200px; height: 150px;" /></p>

<ul>
	<li>No path with more than one node forms a palindrome.</li>
	<li>The best option is any single node, giving a palindrome of length 1.</li>
</ul>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 4, edges = [[0,2],[0,3],[3,1]], label = &quot;bbac&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">3</span></p>

<p><strong>Explanation:</strong></p>

<p><img src="https://assets.leetcode.com/uploads/2025/06/13/screenshot-2025-06-13-at-230508.png" style="width: 200px; height: 200px;" /></p>

<ul>
	<li>The longest palindromic path is from node 0 to node 1, following the path <code>0 &rarr; 3 &rarr; 1</code>, forming string <code>&quot;bcb&quot;</code>.</li>
	<li>This is a valid palindrome of length 3.</li>
</ul>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 14</code></li>
	<li><code>n - 1 &lt;= edges.length &lt;= n * (n - 1) / 2</code></li>
	<li><code>edges[i] == [u<sub>i</sub>, v<sub>i</sub>]</code></li>
	<li><code>0 &lt;= u<sub>i</sub>, v<sub>i</sub> &lt;= n - 1</code></li>
	<li><code>u<sub>i</sub> != v<sub>i</sub></code></li>
	<li><code>label.length == n</code></li>
	<li><code>label</code> consists of lowercase English letters.</li>
	<li>There are no duplicate edges.</li>
</ul>


## Solution

---
### C++
``` cpp title='longest-palindromic-path-in-graph'
class Solution {
public:
    static const int MAXN = 14;
    int memo[1 << MAXN][MAXN][MAXN];

    int maxLen(int n, vector<vector<int>>& edges, string label) {
        vector<vector<int>> graph(n);

        for (const auto& edge : edges) {
            int u = edge[0], v = edge[1];
            graph[u].push_back(v);
            graph[v].push_back(u);
        }

        for (int m = 0; m < (1 << n); ++m)
            for (int i = 0; i < n; ++i)
                for (int j = 0; j < n; ++j)
                    memo[m][i][j] = -1;

        function<int(int, int, int)> dp = [&](int mask, int u, int v) -> int {
            if (memo[mask][u][v] != -1) return memo[mask][u][v];

            int res = 0;

            for (int u2 : graph[u]) {
                if (mask & (1 << u2)) continue;
                for (int v2 : graph[v]) {
                    if (u2 == v2) continue;
                    if (mask & (1 << v2)) continue;
                    if (label[u2] != label[v2]) continue;

                    int newMask = mask | (1 << u2) | (1 << v2);
                    res = max(res, 1 + dp(newMask, u2, v2));
                }
            }

            return memo[mask][u][v] = res;
        };

        int res = 1;

        // odd-length centers
        for (int node = 0; node < n; ++node) {
            int mask = 1 << node;
            res = max(res, 1 + 2 * dp(mask, node, node));
        }

        // even-length centers
        for (const auto& edge : edges) {
            int u = edge[0], v = edge[1];
            if (label[u] != label[v]) continue;
            int mask = (1 << u) | (1 << v);
            res = max(res, 2 * (1 + dp(mask, u, v)));
        }

        return res;
    }
};
```

