---
title: 3585. Find Weighted Median Node in Tree
draft: false
tags: 
  - leetcode-hard
  - array
  - binary-search
  - dynamic-programming
  - tree
  - depth-first-search
  - weekly-contest-454
  - contest-question
date: 2025-06-16
---

[Problem Link](https://leetcode.com/problems/find-weighted-median-node-in-tree/)

## Description

---
<p>You are given an integer <code>n</code> and an <strong>undirected, weighted</strong> tree rooted at node 0 with <code>n</code> nodes numbered from 0 to <code>n - 1</code>. This is represented by a 2D array <code>edges</code> of length <code>n - 1</code>, where <code>edges[i] = [u<sub>i</sub>, v<sub>i</sub>, w<sub>i</sub>]</code> indicates an edge from node <code>u<sub>i</sub></code> to <code>v<sub>i</sub></code> with weight <code>w<sub>i</sub></code>.</p>

<p>The <strong>weighted median node</strong> is defined as the <strong>first</strong> node <code>x</code> on the path from <code>u<sub>i</sub></code> to <code>v<sub>i</sub></code> such that the sum of edge weights from <code>u<sub>i</sub></code> to <code>x</code> is <strong>greater than or equal to half</strong> of the total path weight.</p>

<p>You are given a 2D integer array <code>queries</code>. For each <code>queries[j] = [u<sub>j</sub>, v<sub>j</sub>]</code>, determine the weighted median node along the path from <code>u<sub>j</sub></code> to <code>v<sub>j</sub></code>.</p>

<p>Return an array <code>ans</code>, where <code>ans[j]</code> is the node index of the weighted median for <code>queries[j]</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 2, edges = [[0,1,7]], queries = [[1,0],[0,1]]</span></p>

<p><strong>Output:</strong> <span class="example-io">[0,1]</span></p>

<p><strong>Explanation:</strong></p>

<p><img src="https://assets.leetcode.com/uploads/2025/05/26/screenshot-2025-05-26-at-193447.png" style="width: 200px; height: 64px;" /></p>

<table style="border: 1px solid black;">
	<thead>
		<tr>
			<th style="border: 1px solid black;">Query</th>
			<th style="border: 1px solid black;">Path</th>
			<th style="border: 1px solid black;">Edge<br />
			Weights</th>
			<th style="border: 1px solid black;">Total<br />
			Path<br />
			Weight</th>
			<th style="border: 1px solid black;">Half</th>
			<th style="border: 1px solid black;">Explanation</th>
			<th style="border: 1px solid black;">Answer</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border: 1px solid black;"><code>[1, 0]</code></td>
			<td style="border: 1px solid black;"><code>1 &rarr; 0</code></td>
			<td style="border: 1px solid black;"><code>[7]</code></td>
			<td style="border: 1px solid black;">7</td>
			<td style="border: 1px solid black;">3.5</td>
			<td style="border: 1px solid black;">Sum from <code>1 &rarr; 0 = 7 &gt;= 3.5</code>, median is node 0.</td>
			<td style="border: 1px solid black;">0</td>
		</tr>
		<tr>
			<td style="border: 1px solid black;"><code>[0, 1]</code></td>
			<td style="border: 1px solid black;"><code>0 &rarr; 1</code></td>
			<td style="border: 1px solid black;"><code>[7]</code></td>
			<td style="border: 1px solid black;">7</td>
			<td style="border: 1px solid black;">3.5</td>
			<td style="border: 1px solid black;">Sum from <code>0 &rarr; 1 = 7 &gt;= 3.5</code>, median is node 1.</td>
			<td style="border: 1px solid black;">1</td>
		</tr>
	</tbody>
</table>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 3, edges = [[0,1,2],[2,0,4]], queries = [[0,1],[2,0],[1,2]]</span></p>

<p><strong>Output:</strong> <span class="example-io">[1,0,2]</span></p>

<p><strong>E</strong><strong>xplanation:</strong></p>

<p><img src="https://assets.leetcode.com/uploads/2025/05/26/screenshot-2025-05-26-at-193610.png" style="width: 180px; height: 149px;" /></p>

<table style="border: 1px solid black;">
	<thead>
		<tr>
			<th style="border: 1px solid black;">Query</th>
			<th style="border: 1px solid black;">Path</th>
			<th style="border: 1px solid black;">Edge<br />
			Weights</th>
			<th style="border: 1px solid black;">Total<br />
			Path<br />
			Weight</th>
			<th style="border: 1px solid black;">Half</th>
			<th style="border: 1px solid black;">Explanation</th>
			<th style="border: 1px solid black;">Answer</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border: 1px solid black;"><code>[0, 1]</code></td>
			<td style="border: 1px solid black;"><code>0 &rarr; 1</code></td>
			<td style="border: 1px solid black;"><code>[2]</code></td>
			<td style="border: 1px solid black;">2</td>
			<td style="border: 1px solid black;">1</td>
			<td style="border: 1px solid black;">Sum from <code>0 &rarr; 1 = 2 &gt;= 1</code>, median is node 1.</td>
			<td style="border: 1px solid black;">1</td>
		</tr>
		<tr>
			<td style="border: 1px solid black;"><code>[2, 0]</code></td>
			<td style="border: 1px solid black;"><code>2 &rarr; 0</code></td>
			<td style="border: 1px solid black;"><code>[4]</code></td>
			<td style="border: 1px solid black;">4</td>
			<td style="border: 1px solid black;">2</td>
			<td style="border: 1px solid black;">Sum from <code>2 &rarr; 0 = 4 &gt;= 2</code>, median is node 0.</td>
			<td style="border: 1px solid black;">0</td>
		</tr>
		<tr>
			<td style="border: 1px solid black;"><code>[1, 2]</code></td>
			<td style="border: 1px solid black;"><code>1 &rarr; 0 &rarr; 2</code></td>
			<td style="border: 1px solid black;"><code>[2, 4]</code></td>
			<td style="border: 1px solid black;">6</td>
			<td style="border: 1px solid black;">3</td>
			<td style="border: 1px solid black;">Sum from <code>1 &rarr; 0 = 2 &lt; 3</code>.<br />
			Sum from <code>1 &rarr; 2 = 2 + 4 = 6 &gt;= 3</code>, median is node 2.</td>
			<td style="border: 1px solid black;">2</td>
		</tr>
	</tbody>
</table>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">n = 5, edges = [[0,1,2],[0,2,5],[1,3,1],[2,4,3]], queries = [[3,4],[1,2]]</span></p>

<p><strong>Output:</strong> <span class="example-io">[2,2]</span></p>

<p><strong>Explanation:</strong></p>

<p><img src="https://assets.leetcode.com/uploads/2025/05/26/screenshot-2025-05-26-at-193857.png" style="width: 150px; height: 229px;" /></p>

<table style="border: 1px solid black;">
	<thead>
		<tr>
			<th style="border: 1px solid black;">Query</th>
			<th style="border: 1px solid black;">Path</th>
			<th style="border: 1px solid black;">Edge<br />
			Weights</th>
			<th style="border: 1px solid black;">Total<br />
			Path<br />
			Weight</th>
			<th style="border: 1px solid black;">Half</th>
			<th style="border: 1px solid black;">Explanation</th>
			<th style="border: 1px solid black;">Answer</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border: 1px solid black;"><code>[3, 4]</code></td>
			<td style="border: 1px solid black;"><code>3 &rarr; 1 &rarr; 0 &rarr; 2 &rarr; 4</code></td>
			<td style="border: 1px solid black;"><code>[1, 2, 5, 3]</code></td>
			<td style="border: 1px solid black;">11</td>
			<td style="border: 1px solid black;">5.5</td>
			<td style="border: 1px solid black;">Sum from <code>3 &rarr; 1 = 1 &lt; 5.5</code>.<br />
			Sum from <code>3 &rarr; 0 = 1 + 2 = 3 &lt; 5.5</code>.<br />
			Sum from <code>3 &rarr; 2 = 1 + 2 + 5 = 8 &gt;= 5.5</code>, median is node 2.</td>
			<td style="border: 1px solid black;">2</td>
		</tr>
		<tr>
			<td style="border: 1px solid black;"><code>[1, 2]</code></td>
			<td style="border: 1px solid black;"><code>1 &rarr; 0 &rarr; 2</code></td>
			<td style="border: 1px solid black;"><code>[2, 5]</code></td>
			<td style="border: 1px solid black;">7</td>
			<td style="border: 1px solid black;">3.5</td>
			<td style="border: 1px solid black;">
			<p>Sum from <code>1 &rarr; 0 = 2 &lt; 3.5</code>.<br />
			Sum from <code>1 &rarr; 2 = 2 + 5 = 7 &gt;= 3.5</code>, median is node 2.</p>
			</td>
			<td style="border: 1px solid black;">2</td>
		</tr>
	</tbody>
</table>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>edges.length == n - 1</code></li>
	<li><code>edges[i] == [u<sub>i</sub>, v<sub>i</sub>, w<sub>i</sub>]</code></li>
	<li><code>0 &lt;= u<sub>i</sub>, v<sub>i</sub> &lt; n</code></li>
	<li><code>1 &lt;= w<sub>i</sub> &lt;= 10<sup>9</sup></code></li>
	<li><code>1 &lt;= queries.length &lt;= 10<sup>5</sup></code></li>
	<li><code>queries[j] == [u<sub>j</sub>, v<sub>j</sub>]</code></li>
	<li><code>0 &lt;= u<sub>j</sub>, v<sub>j</sub> &lt; n</code></li>
	<li>The input is generated such that <code>edges</code> represents a valid tree.</li>
</ul>


## Solution

---
### Python3
``` py title='find-weighted-median-node-in-tree'
class Solution:
    def findMedian(self, N: int, edges: List[List[int]], queries: List[List[int]]) -> List[int]:
        M = N.bit_length() + 1
        graph = defaultdict(list)
        
        for a, b, w in edges:
            graph[a].append((b, w))
            graph[b].append((a, w))
            
        parent = [[0] * M for _ in range(N)]
        weights = [0] * N
        d = [0] * N
        
        def dfs(node, prev, depth, w):
            parent[node][0] = prev
            d[node] = depth
            weights[node] = w
        
            for adj, w2 in graph[node]:
                if adj != prev:
                    dfs(adj, node, depth + 1, w + w2)
        
        dfs(0, 0, 0, 0)
        
        # binary lifting
        for power in range(1, M):
            for node in range(N):
                parent[node][power] = parent[parent[node][power - 1]][power - 1]
        
        def lca(a, b):
            if d[a] > d[b]:
                a, b = b, a
        
            # let a and b jump to the same depth
            diff = d[b] - d[a]
            for p in range(M):
                if diff & (1 << p):
                    b = parent[b][p]
        
            if a == b: return a
        
            for p in range(M - 1, -1, -1):
                if parent[a][p] != parent[b][p]:
                    a = parent[a][p]
                    b = parent[b][p]
        
            return parent[a][0]
        
        def pathSum(a, b, ancestor):
            return weights[a] + weights[b] - 2 * weights[ancestor]

        res = []
        for a, b in queries:
            if a == b:
                res.append(a)
                continue

            oa, ob = a, b
            ancestor = lca(a, b)
            w = pathSum(a, b, ancestor)
            median = w / 2

            ok = False

            if pathSum(a, ancestor, ancestor) >= median:
                k = 0
                while True:
                    p = parent[a][k]
                    if pathSum(oa, p, p) >= median:
                        if k == 0:
                            res.append(p)
                            ok = True
                            break
                        else:
                            a = parent[a][k - 1]
                            k = -1
                    
                    k += 1
            
            if ok: continue

            offset = pathSum(a, ancestor, ancestor)
            k = 0
            while True:
                p = parent[b][k]

                if pathSum(ancestor, p, ancestor) + offset < median:
                    if k == 0:
                        break
                    else:
                        b = parent[b][k - 1]
                        k = -1
                
                k += 1
            
            res.append(b)

        return res
```
### C++
``` cpp title='find-weighted-median-node-in-tree'
int n, l;
vector<vector<array<int, 2>>> adj;

int timer;
vector<int> tin, tout;
vector<vector<int>> up;

void dfs(int v, int p)
{
    tin[v] = ++timer;
    up[v][0] = p;
    for (int i = 1; i <= l; ++i)
        up[v][i] = up[up[v][i-1]][i-1];

    for (auto& [u, w] : adj[v]) {
        if (u != p)
            dfs(u, v);
    }

    tout[v] = ++timer;
}

bool is_ancestor(int u, int v)
{
    return tin[u] <= tin[v] && tout[u] >= tout[v];
}

int lca(int u, int v)
{
    if (is_ancestor(u, v))
        return u;
    if (is_ancestor(v, u))
        return v;
    for (int i = l; i >= 0; --i) {
        if (!is_ancestor(up[u][i], v))
            u = up[u][i];
    }
    return up[u][0];
}

void preprocess(int root) {
    tin.resize(n);
    tout.resize(n);
    timer = 0;
    l = ceil(log2(n));
    up.assign(n, vector<int>(l + 1));
    dfs(root, root);
}
                
class Solution {
public:
    vector<int> findMedian(int _n, vector<vector<int>>& edges, vector<vector<int>>& queries) {
        n = _n;
        adj.clear();
        adj.resize(n);
        for(auto& edge : edges) {
            adj[edge[0]].push_back({edge[1], edge[2]});
            adj[edge[1]].push_back({edge[0], edge[2]});
        }
        preprocess(0);
        vector<long long> rootWeightDist(n), rootDist(n);
        [&](this auto&& go, int v, int p, long long cur, int d) -> void {
            rootWeightDist[v] = cur, rootDist[v] = d;
            for(auto& [ce, w] : adj[v]) {
                if(ce == p) continue;
                go(ce, v, cur + w, d + 1);
            }
        }(0, -1, 0, 0);

        auto pathSum = [&](int u, int v, int ancestor) -> long long {
            return rootWeightDist[u] + rootWeightDist[v] - 2 * rootWeightDist[ancestor];
        };

        int qSz = queries.size();
        vector<int> res(qSz);
        for(int i = 0; i < qSz; i++) {
            int u = queries[i][0], v = queries[i][1];
            int orU = u, orV = v;

            if(u == v) {
                res[i] = u;
                continue;
            }
            int ancestor = lca(u, v);
            long long median = (pathSum(u, v, ancestor) + 1) / 2;
            if(pathSum(u, ancestor, ancestor) >= median) {
                // somewhere between (u, ancestor) [go up from u to ancestor]
                for(int p = 0;; p++) {
                    int uUp = up[u][p];
                    if(pathSum(orU, uUp, uUp) >= median) {
                        // if this is over median, we need to backtrack -1 then go again from p = 0
                        // this ensures we get the exact front node
                        // if p is already 0, then `uUp` is the best node
                        if(p == 0) {
                            res[i] = uUp;
                            break;
                        }else {
                            u = up[u][p - 1];
                            p = -1;
                        }
                    }
                }
            }else {
                // somewhere between (v, ancestor) [go down from ancestor to v]
                // offset is path from (u, ancestor) which we're not accounting for
                long long offset = pathSum(u, ancestor, ancestor);
                for(int p = 0;; p++) {
                    int vUp = up[v][p];
                    // this time, we're going down from ancestor to v
                    // but we only have up[] so still go up
                    // once it goes below median, then `vUp` is a bad node
                    // so backtrack -1 then go again from p = 0
                    // if p = 0 then `v` is the best node and `vUp` is the "least bad node".
                    if(pathSum(ancestor, vUp, ancestor) + offset < median) {
                        if(p == 0) {
                            break;
                        }else {
                            v = up[v][p - 1];
                            p = -1;
                        }
                    }
                }
                res[i] = v;
            }
        }
        return res;
    }
};
```

