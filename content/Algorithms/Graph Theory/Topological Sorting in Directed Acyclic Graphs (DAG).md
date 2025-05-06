---
title: Topological Sorting in Directed Acyclic Graphs (DAG)
tags:
  - algorithms
  - graph-theory
  - topological-sort
date: 2024-05-13
---

## Introduction

A **topological sort** is an ordering of the nodes of a directed graph such that if there is path from node ${a}$ to node ${b}$, then node ${a}$ appears before node ${b}$ in the ordering. An acyclic graph always has a topological sort.

## Implementation

### To check if a graph has a cycle

If the graph contains a cycle, it is not possible to form a topological sort, because no node of the cycle can appear before the other nodes of the cycle in the ordering.

```py
# state 0: the node has not been processed
# state 1: the node is under processing
# state 2: the node has been processed

def hasCycle(N, graph):
    state = [0] * N

    def dfs(node):
        state[node] = 1

        for adj in graph[node]:
            if state[node] == 2: continue
            if state[node] == 1: return True

            if dfs(adj):
                return True

        state[node] = 2

        return False

    for node in range(N):
        if state[node] == 0 and go(node):
            return True

    return False # the graph does not contain a cycle

```

### Topological sorting

```py
def topological_sort(N, graph):
    visited = [False] * N
    order = []

    def dfs(node):
        visited[node] = True

        for adj in graph[node]:
            if not visited[adj]:
                dfs(adj)

        order.append(node)

    for node in range(N):
        if not visited[node]:
            dfs(node)

    order.reverse()
```

## Complexity

- Time complexity: $O(V + E)$
- Space complexity:
