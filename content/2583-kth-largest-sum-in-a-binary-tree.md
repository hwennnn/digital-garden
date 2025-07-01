---
title: 2583. Kth Largest Sum in a Binary Tree
draft: false
tags: 
  - leetcode-medium
  - tree
  - breadth-first-search
  - sorting
  - binary-tree
  - weekly-contest-335
  - contest-question
date: 2025-01-05
---

[Problem Link](https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/)

## Description

---
<p>You are given the <code>root</code> of a binary tree and a positive integer <code>k</code>.</p>

<p>The <strong>level sum</strong> in the tree is the sum of the values of the nodes that are on the <strong>same</strong> level.</p>

<p>Return<em> the </em><code>k<sup>th</sup></code><em> <strong>largest</strong> level sum in the tree (not necessarily distinct)</em>. If there are fewer than <code>k</code> levels in the tree, return <code>-1</code>.</p>

<p><strong>Note</strong> that two nodes are on the same level if they have the same distance from the root.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/12/14/binaryytreeedrawio-2.png" style="width: 301px; height: 284px;" />
<pre>
<strong>Input:</strong> root = [5,8,9,2,1,3,7,4,6], k = 2
<strong>Output:</strong> 13
<strong>Explanation:</strong> The level sums are the following:
- Level 1: 5.
- Level 2: 8 + 9 = 17.
- Level 3: 2 + 1 + 3 + 7 = 13.
- Level 4: 4 + 6 = 10.
The 2<sup>nd</sup> largest level sum is 13.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/12/14/treedrawio-3.png" style="width: 181px; height: 181px;" />
<pre>
<strong>Input:</strong> root = [1,2,null,3], k = 1
<strong>Output:</strong> 3
<strong>Explanation:</strong> The largest level sum is 3.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is <code>n</code>.</li>
	<li><code>2 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= Node.val &lt;= 10<sup>6</sup></code></li>
	<li><code>1 &lt;= k &lt;= n</code></li>
</ul>


## Solution

---
### Python3
``` py title='kth-largest-sum-in-a-binary-tree'
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def kthLargestLevelSum(self, root: Optional[TreeNode], k: int) -> int:
        queue = deque([root])
        minHeap = []

        while queue:
            N = len(queue)
            count = 0

            for _ in range(N):
                node = queue.popleft()
                count += node.val

                for adj in filter(None, (node.left, node.right)):
                    queue.append(adj)
            
            if len(minHeap) < k:
                heappush(minHeap, count)
            else:
                heappushpop(minHeap, count)
        
        if len(minHeap) != k:
            return -1

        return heappop(minHeap)
```

