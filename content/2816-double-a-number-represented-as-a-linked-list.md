---
title: 2816. Double a Number Represented as a Linked List
draft: false
tags: 
  - leetcode-medium
  - linked-list
  - math
  - stack
  - weekly-contest-358
  - contest-question
date: 2024-05-07
---

[Problem Link](https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/)

## Description

---
<p>You are given the <code>head</code> of a <strong>non-empty</strong> linked list representing a non-negative integer without leading zeroes.</p>

<p>Return <em>the </em><code>head</code><em> of the linked list after <strong>doubling</strong> it</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2023/05/28/example.png" style="width: 401px; height: 81px;" />
<pre>
<strong>Input:</strong> head = [1,8,9]
<strong>Output:</strong> [3,7,8]
<strong>Explanation:</strong> The figure above corresponds to the given linked list which represents the number 189. Hence, the returned linked list represents the number 189 * 2 = 378.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2023/05/28/example2.png" style="width: 401px; height: 81px;" />
<pre>
<strong>Input:</strong> head = [9,9,9]
<strong>Output:</strong> [1,9,9,8]
<strong>Explanation:</strong> The figure above corresponds to the given linked list which represents the number 999. Hence, the returned linked list reprersents the number 999 * 2 = 1998. 
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the list is in the range <code>[1, 10<sup>4</sup>]</code></li>
	<li><font face="monospace"><code>0 &lt;= Node.val &lt;= 9</code></font></li>
	<li>The input is generated such that the list represents a number that does not have leading zeros, except the number <code>0</code> itself.</li>
</ul>


## Solution

---
### Python3
``` py title='double-a-number-represented-as-a-linked-list'
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def doubleIt(self, head: Optional[ListNode]) -> Optional[ListNode]:

        def reverseLL(head):
            prev = None

            while head:
                nxt = head.next
                head.next = prev
                prev = head
                head = nxt

            return prev

        head = reverseLL(head)
        res = curr = ListNode(-1)
        carry = 0

        while head or carry:
            if head:
                carry += head.val * 2
                head = head.next
            
            curr.next = ListNode(carry % 10)
            curr = curr.next
            carry //= 10

        return reverseLL(res.next)
```

