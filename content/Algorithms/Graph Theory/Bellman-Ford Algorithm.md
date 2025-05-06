---
title: Bellman-Ford Algorithm
tags:
  - algorithms
  - graph
  - bellman-ford
date: 2024-05-10
---

## Introduction

The **Bellman-Ford algorithm** finds shortest paths from a starting node to all nodes of the graph. It can be also used to find if the graph contains a negative cycle.

## Implementation

```py
def bellmanFord(N, start, edges):
    distance = [inf] * N
    distance[start] = 0

    for _ in range(N - 1):
        for a, b, w in edges:
            distance[b] = min(distance[b], distance[a] + w)
```

The algorithm consists of ${n-1}$ rounds and iterates through all ${m}$ edges during a round. In practice, the final distances can usually be found faster than in ${n - 1}$ rounds. Thus, a possible way to make the algorithm more efficient is to stop the algorithm if no distance can be reduced during a round.

## Detect a negative cycle using Bellman-Ford algorithm

If the graph contains a negative cycle, we can shorten infinitely many times any path that contains the cycle by repeating the cycle again and again. Thus, the concept of a shortest path is not meaningful in this situation.

To detect the negative cycle, we can run the algorithm for ${n}$ rounds instead. If the distance is shorten during the last round, it indicates the graph contains a negative cycle.

## Complexity

- Time complexity: ${O(VE)}$
- Space complexity: ${O(V)}$
