---
title: 1669. Merge In Between Linked Lists
draft: false
tags: 
  - leetcode-medium
  - linked-list
  - biweekly-contest-40
  - contest-question
date: 2020-12-13
---

[Problem Link](https://leetcode.com/problems/merge-in-between-linked-lists/)

## Description

---
<p>You are given two linked lists: <code>list1</code> and <code>list2</code> of sizes <code>n</code> and <code>m</code> respectively.</p>

<p>Remove <code>list1</code>&#39;s nodes from the <code>a<sup>th</sup></code> node to the <code>b<sup>th</sup></code> node, and put <code>list2</code> in their place.</p>

<p>The blue edges and nodes in the following figure indicate the result:</p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/05/fig1.png" style="height: 130px; width: 504px;" />
<p><em>Build the result list and return its head.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2024/03/01/ll.png" style="width: 609px; height: 210px;" />
<pre>
<strong>Input:</strong> list1 = [10,1,13,6,9,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]
<strong>Output:</strong> [10,1,13,1000000,1000001,1000002,5]
<strong>Explanation:</strong> We remove the nodes 3 and 4 and put the entire list2 in their place. The blue edges and nodes in the above figure indicate the result.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/05/merge_linked_list_ex2.png" style="width: 463px; height: 140px;" />
<pre>
<strong>Input:</strong> list1 = [0,1,2,3,4,5,6], a = 2, b = 5, list2 = [1000000,1000001,1000002,1000003,1000004]
<strong>Output:</strong> [0,1,1000000,1000001,1000002,1000003,1000004,6]
<strong>Explanation:</strong> The blue edges and nodes in the above figure indicate the result.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>3 &lt;= list1.length &lt;= 10<sup>4</sup></code></li>
	<li><code>1 &lt;= a &lt;= b &lt; list1.length - 1</code></li>
	<li><code>1 &lt;= list2.length &lt;= 10<sup>4</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='merge-in-between-linked-lists'
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeInBetween(self, list1: ListNode, a: int, b: int, list2: ListNode) -> ListNode:
        curr = res = ListNode(-1, list1)

        for _ in range(a):
            curr = curr.next
        prev = curr
        
        for _ in range(b - a + 1):
            curr = curr.next
        
        l = list2
        while l.next:
            l = l.next
        l.next = curr.next
        prev.next = list2

        return res.next
```
### C++
``` cpp title='merge-in-between-linked-lists'
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
    ListNode* mergeInBetween(ListNode* list1, int a, int b, ListNode* list2) {
        ListNode *curr = new ListNode;
        curr->next = list1;
        ListNode *res = curr;
        
        for (int i = 0; i < a; i++)
            curr = curr->next;
        ListNode *prev = curr;
        
        for (int i = 0; i < b-a+1; i++)
            curr = curr->next;
        
        ListNode *temp = list2;
        while (temp->next)
            temp = temp->next;
        temp->next = curr->next;
        
        prev->next = list2;
        
        
        return res->next;
    }
};
```

