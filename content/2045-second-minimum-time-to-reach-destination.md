---
title: 2045. Second Minimum Time to Reach Destination
draft: false
tags: 
  - leetcode-hard
  - breadth-first-search
  - graph
  - shortest-path
  - weekly-contest-263
  - contest-question
date: 2024-07-28
---

[Problem Link](https://leetcode.com/problems/second-minimum-time-to-reach-destination/)

## Description

---
<p>A city is represented as a <strong>bi-directional connected</strong> graph with <code>n</code> vertices where each vertex is labeled from <code>1</code> to <code>n</code> (<strong>inclusive</strong>). The edges in the graph are represented as a 2D integer array <code>edges</code>, where each <code>edges[i] = [u<sub>i</sub>, v<sub>i</sub>]</code> denotes a bi-directional edge between vertex <code>u<sub>i</sub></code> and vertex <code>v<sub>i</sub></code>. Every vertex pair is connected by <strong>at most one</strong> edge, and no vertex has an edge to itself. The time taken to traverse any edge is <code>time</code> minutes.</p>

<p>Each vertex has a traffic signal which changes its color from <strong>green</strong> to <strong>red</strong> and vice versa every&nbsp;<code>change</code> minutes. All signals change <strong>at the same time</strong>. You can enter a vertex at <strong>any time</strong>, but can leave a vertex <strong>only when the signal is green</strong>. You <strong>cannot wait </strong>at a vertex if the signal is <strong>green</strong>.</p>

<p>The <strong>second minimum value</strong> is defined as the smallest value<strong> strictly larger </strong>than the minimum value.</p>

<ul>
	<li>For example the second minimum value of <code>[2, 3, 4]</code> is <code>3</code>, and the second minimum value of <code>[2, 2, 4]</code> is <code>4</code>.</li>
</ul>

<p>Given <code>n</code>, <code>edges</code>, <code>time</code>, and <code>change</code>, return <em>the <strong>second minimum time</strong> it will take to go from vertex </em><code>1</code><em> to vertex </em><code>n</code>.</p>

<p><strong>Notes:</strong></p>

<ul>
	<li>You can go through any vertex <strong>any</strong> number of times, <strong>including</strong> <code>1</code> and <code>n</code>.</li>
	<li>You can assume that when the journey <strong>starts</strong>, all signals have just turned <strong>green</strong>.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/09/29/e1.png" style="width: 200px; height: 250px;" /> &emsp; &emsp; &emsp; &emsp;<img alt="" src="https://assets.leetcode.com/uploads/2021/09/29/e2.png" style="width: 200px; height: 250px;" />
<pre>
<strong>Input:</strong> n = 5, edges = [[1,2],[1,3],[1,4],[3,4],[4,5]], time = 3, change = 5
<strong>Output:</strong> 13
<strong>Explanation:</strong>
The figure on the left shows the given graph.
The blue path in the figure on the right is the minimum time path.
The time taken is:
- Start at 1, time elapsed=0
- 1 -&gt; 4: 3 minutes, time elapsed=3
- 4 -&gt; 5: 3 minutes, time elapsed=6
Hence the minimum time needed is 6 minutes.

The red path shows the path to get the second minimum time.
- Start at 1, time elapsed=0
- 1 -&gt; 3: 3 minutes, time elapsed=3
- 3 -&gt; 4: 3 minutes, time elapsed=6
- Wait at 4 for 4 minutes, time elapsed=10
- 4 -&gt; 5: 3 minutes, time elapsed=13
Hence the second minimum time is 13 minutes.      
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/09/29/eg2.png" style="width: 225px; height: 50px;" />
<pre>
<strong>Input:</strong> n = 2, edges = [[1,2]], time = 3, change = 2
<strong>Output:</strong> 11
<strong>Explanation:</strong>
The minimum time path is 1 -&gt; 2 with time = 3 minutes.
The second minimum time path is 1 -&gt; 2 -&gt; 1 -&gt; 2 with time = 11 minutes.</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= n &lt;= 10<sup>4</sup></code></li>
	<li><code>n - 1 &lt;= edges.length &lt;= min(2 * 10<sup>4</sup>, n * (n - 1) / 2)</code></li>
	<li><code>edges[i].length == 2</code></li>
	<li><code>1 &lt;= u<sub>i</sub>, v<sub>i</sub> &lt;= n</code></li>
	<li><code>u<sub>i</sub> != v<sub>i</sub></code></li>
	<li>There are no duplicate edges.</li>
	<li>Each vertex can be reached directly or indirectly from every other vertex.</li>
	<li><code>1 &lt;= time, change &lt;= 10<sup>3</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='second-minimum-time-to-reach-destination'
class Solution:
    def secondMinimum(self, n: int, edges: List[List[int]], time: int, change: int) -> int:
        graph = defaultdict(list)

        for a, b in edges:
            graph[a].append(b)
            graph[b].append(a)
        
        dist = [set() for _ in range(n + 1)]

        pq = [(0, 1)]
        while pq:
            d, curr = heappop(pq)

            if len(dist[curr]) >= 2: continue

            if len(dist[curr]) == 1 and d == max(dist[curr]): continue

            if curr == n and len(dist[n]) == 1 and d not in dist[n]: return d

            dist[curr].add(d)

            for adj in graph[curr]:
                if len(dist[adj]) >= 2: continue

                if (d // change) % 2 == 0:
                    heappush(pq, (d + time, adj))
                else:
                    heappush(pq, (((d // change) + 1) * change + time, adj))
```
### C++
``` cpp title='second-minimum-time-to-reach-destination'
class Solution {
public:
    const int INF = 1e9;
    int secondMinimum(int n, vector<vector<int>>& edges, int time, int change) {
        vector<vector<int>> adj(n);
        for (auto &edge : edges){
            int u = edge[0] - 1, v = edge[1] - 1;
            adj[u].push_back(v);
            adj[v].push_back(u);
        }
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> min_heap;
        vector<pair<int, int>> dist(n, {INF, INF});
        dist[0].first = 0;
        min_heap.push({0, 0});
        while (min_heap.size()){
            auto [tin, u] = min_heap.top();
            min_heap.pop();
            if (tin != dist[u].first && tin != dist[u].second){
                continue;
            }
            if (u == n - 1 && tin == dist[u].second){
                return tin;
            }
            int m = tin / change;
            if (m & 1){
                tin = (m + 1) * change;
            }
            int tout = tin + time;
            for (auto &v : adj[u]){
                if (tout < dist[v].first){
                    dist[v].first = tout;
                    min_heap.push({tout, v});
                }
                else if (tout != dist[v].first && tout < dist[v].second){
                    dist[v].second = tout;
                    min_heap.push({tout, v});
                }
            }
        }
        return -1;
    }
};
```

