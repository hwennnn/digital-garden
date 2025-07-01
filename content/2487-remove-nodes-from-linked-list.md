---
title: 2487. Remove Nodes From Linked List
draft: false
tags: 
  - leetcode-medium
  - linked-list
  - stack
  - recursion
  - monotonic-stack
  - weekly-contest-321
  - contest-question
date: 2024-05-06
---

[Problem Link](https://leetcode.com/problems/remove-nodes-from-linked-list/)

## Description

---
<p>You are given the <code>head</code> of a linked list.</p>

<p>Remove every node which has a node with a greater value anywhere to the right side of it.</p>

<p>Return <em>the </em><code>head</code><em> of the modified linked list.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/10/02/drawio.png" style="width: 631px; height: 51px;" />
<pre>
<strong>Input:</strong> head = [5,2,13,3,8]
<strong>Output:</strong> [13,8]
<strong>Explanation:</strong> The nodes that should be removed are 5, 2 and 3.
- Node 13 is to the right of node 5.
- Node 13 is to the right of node 2.
- Node 8 is to the right of node 3.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> head = [1,1,1,1]
<strong>Output:</strong> [1,1,1,1]
<strong>Explanation:</strong> Every node has value 1, so no nodes are removed.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of the nodes in the given list is in the range <code>[1, 10<sup>5</sup>]</code>.</li>
	<li><code>1 &lt;= Node.val &lt;= 10<sup>5</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='remove-nodes-from-linked-list'
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
        def reverseLL(node):
            prev = None

            while node:
                nxt = node.next
                node.next = prev
                prev = node
                node = nxt

            return prev
        
        head = reverseLL(head)
        curr = head

        while curr and curr.next:
            if curr.val > curr.next.val:
                curr.next = curr.next.next
            else:
                curr = curr.next

        return reverseLL(head)
```

