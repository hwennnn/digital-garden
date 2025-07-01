---
title: 2385. Amount of Time for Binary Tree to Be Infected
draft: false
tags: 
  - leetcode-medium
  - hash-table
  - tree
  - depth-first-search
  - breadth-first-search
  - binary-tree
  - weekly-contest-307
  - contest-question
date: 2024-01-10
---

[Problem Link](https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/)

## Description

---
<p>You are given the <code>root</code> of a binary tree with <strong>unique</strong> values, and an integer <code>start</code>. At minute <code>0</code>, an <strong>infection</strong> starts from the node with value <code>start</code>.</p>

<p>Each minute, a node becomes infected if:</p>

<ul>
	<li>The node is currently uninfected.</li>
	<li>The node is adjacent to an infected node.</li>
</ul>

<p>Return <em>the number of minutes needed for the entire tree to be infected.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/06/25/image-20220625231744-1.png" style="width: 400px; height: 306px;" />
<pre>
<strong>Input:</strong> root = [1,5,3,null,4,10,6,9,2], start = 3
<strong>Output:</strong> 4
<strong>Explanation:</strong> The following nodes are infected during:
- Minute 0: Node 3
- Minute 1: Nodes 1, 10 and 6
- Minute 2: Node 5
- Minute 3: Node 4
- Minute 4: Nodes 9 and 2
It takes 4 minutes for the whole tree to be infected so we return 4.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/06/25/image-20220625231812-2.png" style="width: 75px; height: 66px;" />
<pre>
<strong>Input:</strong> root = [1], start = 1
<strong>Output:</strong> 0
<strong>Explanation:</strong> At minute 0, the only node in the tree is infected so we return 0.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[1, 10<sup>5</sup>]</code>.</li>
	<li><code>1 &lt;= Node.val &lt;= 10<sup>5</sup></code></li>
	<li>Each node has a <strong>unique</strong> value.</li>
	<li>A node with a value of <code>start</code> exists in the tree.</li>
</ul>


## Solution

---
### Python3
``` py title='amount-of-time-for-binary-tree-to-be-infected'
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def amountOfTime(self, root: Optional[TreeNode], start: int) -> int:
        graph = defaultdict(list)

        def go(node, prev):
            if not node: return

            if prev:
                graph[prev.val].append(node.val)
                graph[node.val].append(prev.val)
            
            go(node.left, node)
            go(node.right, node)

        go(root, None)
        
        queue = deque([start])
        visited = set()
        visited.add(start)
        time = -1

        while queue:
            for _ in range(len(queue)):
                node = queue.popleft()
                for adj in graph[node]:
                    if adj not in visited:
                        visited.add(adj)
                        queue.append(adj)
            
            time += 1
        
        return time
```

