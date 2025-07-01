---
title: 1171. Remove Zero Sum Consecutive Nodes from Linked List
draft: false
tags: 
  - leetcode-medium
  - hash-table
  - linked-list
  - weekly-contest-151
  - contest-question
date: 2024-03-12
---

[Problem Link](https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/)

## Description

---
<p>Given the <code>head</code> of a linked list, we repeatedly delete consecutive sequences of nodes that sum to <code>0</code> until there are no such sequences.</p>

<p>After doing so, return the head of the final linked list.&nbsp; You may return any such answer.</p>

<p>&nbsp;</p>
<p>(Note that in the examples below, all sequences are serializations of <code>ListNode</code> objects.)</p>

<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> head = [1,2,-3,3,1]
<strong>Output:</strong> [3,1]
<strong>Note:</strong> The answer [1,2,1] would also be accepted.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> head = [1,2,3,-3,4]
<strong>Output:</strong> [1,2,4]
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> head = [1,2,3,-3,-2]
<strong>Output:</strong> [1]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The given linked list will contain between <code>1</code> and <code>1000</code> nodes.</li>
	<li>Each node in the linked list has <code>-1000 &lt;= node.val &lt;= 1000</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='remove-zero-sum-consecutive-nodes-from-linked-list'
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeZeroSumSublists(self, head: ListNode) -> ListNode:
        curr = 0
        seen = {}
        dummy = ListNode(0, head)
        seen[0] = dummy

        while head:
            curr += head.val
            seen[curr] = head
            head = head.next
        
        curr = 0
        head = dummy

        while head:
            curr += head.val
            head.next = seen[curr].next
            head = head.next
        
        return dummy.next
```

