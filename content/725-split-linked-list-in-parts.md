---
title: 725. Split Linked List in Parts
draft: false
tags: 
  - leetcode-medium
  - linked-list
  - weekly-contest-58
  - contest-question
date: 2025-01-01
---

[Problem Link](https://leetcode.com/problems/split-linked-list-in-parts/)

## Description

---
<p>Given the <code>head</code> of a singly linked list and an integer <code>k</code>, split the linked list into <code>k</code> consecutive linked list parts.</p>

<p>The length of each part should be as equal as possible: no two parts should have a size differing by more than one. This may lead to some parts being null.</p>

<p>The parts should be in the order of occurrence in the input list, and parts occurring earlier should always have a size greater than or equal to parts occurring later.</p>

<p>Return <em>an array of the </em><code>k</code><em> parts</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/06/13/split1-lc.jpg" style="width: 400px; height: 134px;" />
<pre>
<strong>Input:</strong> head = [1,2,3], k = 5
<strong>Output:</strong> [[1],[2],[3],[],[]]
<strong>Explanation:</strong>
The first element output[0] has output[0].val = 1, output[0].next = null.
The last element output[4] is null, but its string representation as a ListNode is [].
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/06/13/split2-lc.jpg" style="width: 600px; height: 60px;" />
<pre>
<strong>Input:</strong> head = [1,2,3,4,5,6,7,8,9,10], k = 3
<strong>Output:</strong> [[1,2,3,4],[5,6,7],[8,9,10]]
<strong>Explanation:</strong>
The input has been split into consecutive parts with size difference at most 1, and earlier parts are a larger size than the later parts.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the list is in the range <code>[0, 1000]</code>.</li>
	<li><code>0 &lt;= Node.val &lt;= 1000</code></li>
	<li><code>1 &lt;= k &lt;= 50</code></li>
</ul>


## Solution

---
### Python3
``` py title='split-linked-list-in-parts'
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def splitListToParts(self, head: Optional[ListNode], k: int) -> List[Optional[ListNode]]:
        res = []
        N = 0
        curr = head
        while curr:
            N += 1
            curr = curr.next
        
        size, rem = divmod(N, k)
        currSize = 0
        dummy = curr = ListNode(-1)

        while head:
            currSize += 1
            curr.next = ListNode(head.val)
            curr = curr.next

            if currSize == size and rem == 0:
                res.append(dummy.next)
                dummy = curr = ListNode(-1)
                currSize = 0
            elif currSize == size + 1:
                rem -= 1
                res.append(dummy.next)
                dummy = curr = ListNode(-1)
                currSize = 0

            head = head.next

        for _ in range(k - len(res)):
            res.append(None)

        return res
```

