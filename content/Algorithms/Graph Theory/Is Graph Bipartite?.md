---
title: Is Graph Bipartite?
tags:
  - algorithms
  - graph
date: 2024-05-10
---

## Introduction

A graph is **bipartite** if it possible to color it using two colours. It turns out the a graph is **bipartite** exactly when it does not contain a cycle with an **odd** number of edges.

## Implementation

```py
def isBipartite(graph):
    N = len(graph)
    color = {}

    def go(node):
        for adj in graph[node]:
            if adj in color:
                if color[adj] == color[node]:
                    return False
            else:
                color[adj] = -color[node]

                if not go(adj):
                    return False

        return True

    for node in range(N):
        if node not in color:
            color[node] = 1

            if not go(node): return False

    return True
```

## Complexity

- Time complexity: $O(V + E)$
- Space complexity:
