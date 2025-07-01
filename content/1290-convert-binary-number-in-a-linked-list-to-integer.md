---
title: 1290. Convert Binary Number in a Linked List to Integer
draft: false
tags: 
  - leetcode-easy
  - linked-list
  - math
  - weekly-contest-167
  - contest-question
date: 2020-12-13
---

[Problem Link](https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/)

## Description

---
<p>Given <code>head</code> which is a reference node to a singly-linked list. The value of each node in the linked list is either <code>0</code> or <code>1</code>. The linked list holds the binary representation of a number.</p>

<p>Return the <em>decimal value</em> of the number in the linked list.</p>

<p>The <strong>most significant bit</strong> is at the head of the linked list.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/12/05/graph-1.png" style="width: 426px; height: 108px;" />
<pre>
<strong>Input:</strong> head = [1,0,1]
<strong>Output:</strong> 5
<strong>Explanation:</strong> (101) in base 2 = (5) in base 10
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> head = [0]
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The Linked List is not empty.</li>
	<li>Number of nodes will not exceed <code>30</code>.</li>
	<li>Each node&#39;s value is either <code>0</code> or <code>1</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='convert-binary-number-in-a-linked-list-to-integer'
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def getDecimalValue(self, head: ListNode) -> int:
        res = 0
        
        while head:
            res = res * 2 + head.val
            head = head.next
        
        return res
```
### C++
``` cpp title='convert-binary-number-in-a-linked-list-to-integer'
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    int getDecimalValue(ListNode* head) {
        if (head == nullptr) return 0;
        int total = 0;
        
        while (head){
            total <<= 1;
            total |= head->val;
            head = head->next;
        }
        
        return total;
    }
    
};
```

