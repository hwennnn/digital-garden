---
title: Floyd-Warshall Algorithm
tags:
  - algorithms
  - graph
date: 2024-05-10
---

## Introduction

The **Floyd-Warshall algorithm** finds all shortest paths between the nodes in a single run. It is particular useful when the ${n}$ is small.

## Implementation

```py
def floydWarshall(N, adj):
    distance = [[inf] * N for _ in range(N)]

    for i in range(N):
        for j in range(N):
            if i == j:
                distance[i][j] = 0
            elif adj[i][j]:
                distance[i][j] = adj[i][j]

    for k in range(N):
        for i in range(N):
            for j in range(N):
                distance[i][j] = min(distance[i][j], distance[i][k] + distance[k][j])
```

## Complexity

- Time complexity: $O(V^3)$
- Space complexity: $O(V^2)$
