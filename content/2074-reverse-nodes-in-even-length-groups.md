---
title: 2074. Reverse Nodes in Even Length Groups
draft: false
tags: 
  - leetcode-medium
  - linked-list
  - weekly-contest-267
  - contest-question
date: 2021-11-14
---

[Problem Link](https://leetcode.com/problems/reverse-nodes-in-even-length-groups/)

## Description

---
<p>You are given the <code>head</code> of a linked list.</p>

<p>The nodes in the linked list are <strong>sequentially</strong> assigned to <strong>non-empty</strong> groups whose lengths form the sequence of the natural numbers (<code>1, 2, 3, 4, ...</code>). The <strong>length</strong> of a group is the number of nodes assigned to it. In other words,</p>

<ul>
	<li>The <code>1<sup>st</sup></code> node is assigned to the first group.</li>
	<li>The <code>2<sup>nd</sup></code> and the <code>3<sup>rd</sup></code> nodes are assigned to the second group.</li>
	<li>The <code>4<sup>th</sup></code>, <code>5<sup>th</sup></code>, and <code>6<sup>th</sup></code> nodes are assigned to the third group, and so on.</li>
</ul>

<p>Note that the length of the last group may be less than or equal to <code>1 + the length of the second to last group</code>.</p>

<p><strong>Reverse</strong> the nodes in each group with an <strong>even</strong> length, and return <em>the</em> <code>head</code> <em>of the modified linked list</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/10/25/eg1.png" style="width: 699px; height: 124px;" />
<pre>
<strong>Input:</strong> head = [5,2,6,3,9,1,7,3,8,4]
<strong>Output:</strong> [5,6,2,3,9,1,4,8,3,7]
<strong>Explanation:</strong>
- The length of the first group is 1, which is odd, hence no reversal occurs.
- The length of the second group is 2, which is even, hence the nodes are reversed.
- The length of the third group is 3, which is odd, hence no reversal occurs.
- The length of the last group is 4, which is even, hence the nodes are reversed.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/10/25/eg2.png" style="width: 284px; height: 114px;" />
<pre>
<strong>Input:</strong> head = [1,1,0,6]
<strong>Output:</strong> [1,0,1,6]
<strong>Explanation:</strong>
- The length of the first group is 1. No reversal occurs.
- The length of the second group is 2. The nodes are reversed.
- The length of the last group is 1. No reversal occurs.
</pre>

<p><strong class="example">Example 3:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/11/17/ex3.png" style="width: 348px; height: 114px;" />
<pre>
<strong>Input:</strong> head = [1,1,0,6,5]
<strong>Output:</strong> [1,0,1,5,6]
<strong>Explanation:</strong>
- The length of the first group is 1. No reversal occurs.
- The length of the second group is 2. The nodes are reversed.
- The length of the last group is 2. The nodes are reversed.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the list is in the range <code>[1, 10<sup>5</sup>]</code>.</li>
	<li><code>0 &lt;= Node.val &lt;= 10<sup>5</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='reverse-nodes-in-even-length-groups'
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseEvenLengthGroups(self, head: Optional[ListNode]) -> Optional[ListNode]:
        curr = head
        k = 1
        
        while curr:
            count = 0
            p = curr
            stack = []
            
            while curr and count < k:
                stack.append(curr.val)
                count += 1
                curr = curr.next
            
            if count % 2 == 0:
                while p != curr:
                    p.val = stack.pop()
                    p = p.next
                    
            k += 1
            
        return head
```

