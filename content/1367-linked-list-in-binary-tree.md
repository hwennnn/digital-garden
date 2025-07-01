---
title: 1367. Linked List in Binary Tree
draft: false
tags: 
  - leetcode-medium
  - linked-list
  - tree
  - depth-first-search
  - binary-tree
  - weekly-contest-178
  - contest-question
date: 2025-01-01
---

[Problem Link](https://leetcode.com/problems/linked-list-in-binary-tree/)

## Description

---
<p>Given a binary tree <code>root</code> and a&nbsp;linked list with&nbsp;<code>head</code>&nbsp;as the first node.&nbsp;</p>

<p>Return True if all the elements in the linked list starting from the <code>head</code> correspond to some <em>downward path</em> connected in the binary tree&nbsp;otherwise return False.</p>

<p>In this context downward path means a path that starts at some node and goes downwards.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<p><strong><img alt="" src="https://assets.leetcode.com/uploads/2020/02/12/sample_1_1720.png" style="width: 220px; height: 280px;" /></strong></p>

<pre>
<strong>Input:</strong> head = [4,2,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
<strong>Output:</strong> true
<strong>Explanation:</strong> Nodes in blue form a subpath in the binary Tree.  
</pre>

<p><strong class="example">Example 2:</strong></p>

<p><strong><img alt="" src="https://assets.leetcode.com/uploads/2020/02/12/sample_2_1720.png" style="width: 220px; height: 280px;" /></strong></p>

<pre>
<strong>Input:</strong> head = [1,4,2,6], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
<strong>Output:</strong> true
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> head = [1,4,2,6,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
<strong>Output:</strong> false
<strong>Explanation:</strong> There is no path in the binary tree that contains all the elements of the linked list from <code>head</code>.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree will be in the range <code>[1, 2500]</code>.</li>
	<li>The number of nodes in the list will be in the range <code>[1, 100]</code>.</li>
	<li><code>1 &lt;= Node.val&nbsp;&lt;= 100</code>&nbsp;for each node in the linked list and binary tree.</li>
</ul>


## Solution

---
### Python3
``` py title='linked-list-in-binary-tree'
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSubPath(self, head: Optional[ListNode], root: Optional[TreeNode]) -> bool:
        
        if not head: return True
        
        if not root: return False
        
        def go(node, ll, curr):
            if not curr: return True
            
            if not node: return False
            
            if node.val == curr.val:
                curr = curr.next
            elif node.val == ll.val:
                curr = ll.next
            else:
                return False
            
            return go(node.left, ll, curr) or go(node.right, ll, curr)
            
        return go(root, head, head) or self.isSubPath(head, root.left) or self.isSubPath(head, root.right)
```

