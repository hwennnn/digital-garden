---
title: Binary Lifting
tags:
  - algorithms
  - lca
date: 2023-10-21
---

## Introduction

**Binary Lifting** is a commonly used technique to to efficiently compute powers of a number or perform other exponentiation-related operations. It is particularly useful in algorithms and data structures where you need to repeatedly calculate powers of a value. The binary lifting technique reduces the number of multiplications required to compute the result, making it faster than simple repeated multiplication.

## Generic Binary Lifting Template

```py
# M here is the largest power possible
M = k.bit_length() + 1
parent = [[0] * M for _ in range(N)]

for node, p in enumerate(A):
    parent[node][0] = p

# construct binary jumping array
for power in range(1, M):
    for node in range(N):
    parent[node][power] = parent[parent[node][power - 1]][power - 1]
```

### Complexity for Generic Binary Lifting

- Time complexity: $O(n \log k)$, where k is the maximum bit length
- Space complexity: $O(n \log k)$

## Find Lowest Common Ancestor

```py
M = N.bit_length() + 1
graph = defaultdict(list)

for a, b in edges:
    graph[a].append(b)
    graph[b].append(a)

parent = [[0] * M for _ in range(N)]
d = [0] * N

def dfs(node, prev, depth):
    parent[node][0] = prev
    d[node] = depth

    for adj in graph[node]:
        if adj != prev:
            dfs(adj, node, depth + 1)

dfs(0, 0, 0)

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
```

### Complexity for Finding LCA

- Time complexity: $O(n \log n)$
- Space complexity: $O(n \log n)$

## Resources

1. [LCA Binary Lifting - CP Algorithms](https://cp-algorithms.com/graph/lca_binary_lifting.html)
2. [Binary Jumping - USACO Guide](https://usaco.guide/plat/binary-jump?lang=cpp)
3. [LCA in a Tree using Binary Lifting Technique - GeeksforGeeks](https://www.geeksforgeeks.org/lca-in-a-tree-using-binary-lifting-technique/)
