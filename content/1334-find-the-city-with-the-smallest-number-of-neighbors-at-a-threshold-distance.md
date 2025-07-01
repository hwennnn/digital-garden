---
title: 1334. Find the City With the Smallest Number of Neighbors at a Threshold Distance
draft: false
tags: 
  - leetcode-medium
  - dynamic-programming
  - graph
  - shortest-path
  - weekly-contest-173
  - contest-question
date: 2021-12-31
---

[Problem Link](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/)

## Description

---
<p>There are <code>n</code> cities numbered from <code>0</code> to <code>n-1</code>. Given the array <code>edges</code> where <code>edges[i] = [from<sub>i</sub>, to<sub>i</sub>, weight<sub>i</sub>]</code> represents a bidirectional and weighted edge between cities <code>from<sub>i</sub></code> and <code>to<sub>i</sub></code>, and given the integer <code>distanceThreshold</code>.</p>

<p>Return the city with the smallest number of cities that are reachable through some path and whose distance is <strong>at most</strong> <code>distanceThreshold</code>, If there are multiple such cities, return the city with the greatest number.</p>

<p>Notice that the distance of a path connecting cities <em><strong>i</strong></em> and <em><strong>j</strong></em> is equal to the sum of the edges&#39; weights along that path.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2024/08/23/problem1334example1.png" style="width: 300px; height: 224px;" /></p>

<pre>
<strong>Input:</strong> n = 4, edges = [[0,1,3],[1,2,1],[1,3,4],[2,3,1]], distanceThreshold = 4
<strong>Output:</strong> 3
<strong>Explanation: </strong>The figure above describes the graph.&nbsp;
The neighboring cities at a distanceThreshold = 4 for each city are:
City 0 -&gt; [City 1, City 2]&nbsp;
City 1 -&gt; [City 0, City 2, City 3]&nbsp;
City 2 -&gt; [City 0, City 1, City 3]&nbsp;
City 3 -&gt; [City 1, City 2]&nbsp;
Cities 0 and 3 have 2 neighboring cities at a distanceThreshold = 4, but we have to return city 3 since it has the greatest number.
</pre>

<p><strong class="example">Example 2:</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2024/08/23/problem1334example0.png" style="width: 300px; height: 224px;" /></p>

<pre>
<strong>Input:</strong> n = 5, edges = [[0,1,2],[0,4,8],[1,2,3],[1,4,2],[2,3,1],[3,4,1]], distanceThreshold = 2
<strong>Output:</strong> 0
<strong>Explanation: </strong>The figure above describes the graph.&nbsp;
The neighboring cities at a distanceThreshold = 2 for each city are:
City 0 -&gt; [City 1]&nbsp;
City 1 -&gt; [City 0, City 4]&nbsp;
City 2 -&gt; [City 3, City 4]&nbsp;
City 3 -&gt; [City 2, City 4]
City 4 -&gt; [City 1, City 2, City 3]&nbsp;
The city 0 has 1 neighboring city at a distanceThreshold = 2.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= n &lt;= 100</code></li>
	<li><code>1 &lt;= edges.length &lt;= n * (n - 1) / 2</code></li>
	<li><code>edges[i].length == 3</code></li>
	<li><code>0 &lt;= from<sub>i</sub> &lt; to<sub>i</sub> &lt; n</code></li>
	<li><code>1 &lt;= weight<sub>i</sub>,&nbsp;distanceThreshold &lt;= 10^4</code></li>
	<li>All pairs <code>(from<sub>i</sub>, to<sub>i</sub>)</code> are distinct.</li>
</ul>


## Solution

---
### C++
``` cpp title='find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance'
class Solution {
public:
    int findTheCity(int n, vector<vector<int>>& edges, int distanceThreshold) {
        vector<vector<int>> dist(n, vector<int>(n, 1e4+1));

        for (auto edge: edges) {
            int u = edge[0], v = edge[1], w = edge[2];
            dist[u][v] = w;
            dist[v][u] = w;
        }

        for (int k = 0; k < n; k++) {
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    if (dist[i][k] + dist[k][j] < dist[i][j]) dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }

        int minNumber = INT_MAX, res = -1;
        for (int i = 0; i < n; i++) {
            int count = 0;

            for (int j = 0; j < n; j++) {
                if (j != i && dist[i][j] <= distanceThreshold) count++;
            }

            if (count < minNumber) {
                minNumber = count;
                res = i;
            } else if (count == minNumber) {
                res = i;
            }
        }

        return res;
    }
};
```
### Python3
``` py title='find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance'
class Solution:
    def findTheCity(self, n: int, edges: List[List[int]], distanceThreshold: int) -> int:
        
        graph = collections.defaultdict(list)
        
        for x, y, weight in edges:
            graph[x].append((weight, y))
            graph[y].append((weight, x))
        
        def dijkstra(src):
            weights = [float('inf')] * n
            weights[src] = 0
            
            pq = [(0, src)]
            
            while pq:
                weight, node = heapq.heappop(pq)
                
                if weight != weights[node]: continue
                
                for w, nei in graph[node]:
                    old = weights[nei]
                    new = weights[node] + w
                    
                    if new < old:
                        heapq.heappush(pq, (new, nei))
                        weights[nei] = new
            
            count = 0
            
            for weight in weights:
                if weight <= distanceThreshold:
                    count += 1
            
            return count - 1
        
        res = -1
        smallest = float('inf')
        
        for i in range(n):
            d = dijkstra(i)
            
            if d <= smallest:
                res = i
                smallest = d
        
        return res
```

