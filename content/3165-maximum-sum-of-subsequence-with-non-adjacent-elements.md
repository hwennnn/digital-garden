---
title: 3165. Maximum Sum of Subsequence With Non-adjacent Elements
draft: false
tags: 
  - leetcode-hard
  - array
  - divide-and-conquer
  - dynamic-programming
  - segment-tree
  - weekly-contest-399
  - contest-question
date: 2024-06-23
---

[Problem Link](https://leetcode.com/problems/maximum-sum-of-subsequence-with-non-adjacent-elements/)

## Description

---
<p>You are given an array <code>nums</code> consisting of integers. You are also given a 2D array <code>queries</code>, where <code>queries[i] = [pos<sub>i</sub>, x<sub>i</sub>]</code>.</p>

<p>For query <code>i</code>, we first set <code>nums[pos<sub>i</sub>]</code> equal to <code>x<sub>i</sub></code>, then we calculate the answer to query <code>i</code> which is the <strong>maximum</strong> sum of a <span data-keyword="subsequence-array">subsequence</span> of <code>nums</code> where <strong>no two adjacent elements are selected</strong>.</p>

<p>Return the <em>sum</em> of the answers to all queries.</p>

<p>Since the final answer may be very large, return it <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>

<p>A <strong>subsequence</strong> is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [3,5,9], queries = [[1,-2],[0,-3]]</span></p>

<p><strong>Output:</strong> <span class="example-io">21</span></p>

<p><strong>Explanation:</strong><br />
After the 1<sup>st</sup> query, <code>nums = [3,-2,9]</code> and the maximum sum of a subsequence with non-adjacent elements is <code>3 + 9 = 12</code>.<br />
After the 2<sup>nd</sup> query, <code>nums = [-3,-2,9]</code> and the maximum sum of a subsequence with non-adjacent elements is 9.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [0,-1], queries = [[0,-5]]</span></p>

<p><strong>Output:</strong> <span class="example-io">0</span></p>

<p><strong>Explanation:</strong><br />
After the 1<sup>st</sup> query, <code>nums = [-5,-1]</code> and the maximum sum of a subsequence with non-adjacent elements is 0 (choosing an empty subsequence).</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>-10<sup>5</sup> &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= queries.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>queries[i] == [pos<sub>i</sub>, x<sub>i</sub>]</code></li>
	<li><code>0 &lt;= pos<sub>i</sub> &lt;= nums.length - 1</code></li>
	<li><code>-10<sup>5</sup> &lt;= x<sub>i</sub> &lt;= 10<sup>5</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='maximum-sum-of-subsequence-with-non-adjacent-elements'
class Node:
    def __init__(self, val=0, a=0, b=0, c=0):
        self.max_sum = max(0, val)
        self.exclude_first = a
        self.exclude_last = b
        self.exclude_first_last = c

class SegmentTree:
    def __init__(self, arr):
        self.n = len(arr)
        self.tree = [None] * (4 * self.n)        
        self.build(1, 0, self.n - 1, arr)

    def build(self, v, tl, tr, arr):
        if tl == tr:
            self.tree[v] = Node(arr[tl])
        else:
            tm = tl + (tr - tl) // 2
            self.build(v * 2, tl, tm, arr)
            self.build(v * 2 + 1, tm + 1, tr, arr)
            
            if tr - tl == 1:
                self.tree[v] = self.merge2(self.tree[v * 2], self.tree[v * 2 + 1])
            else:
                self.tree[v] = self.merge(self.tree[v * 2], self.tree[v * 2 + 1])

    def merge(self, left, right):
        node = Node()

        node.exclude_first = max(
            0,
            right.max_sum,
            left.exclude_first,
            right.exclude_first,
            right.exclude_last,
            left.exclude_first + right.exclude_first,
            right.max_sum + left.exclude_first_last
        )

        node.exclude_last = max(
            0,
            left.max_sum,
            left.exclude_first,
            left.exclude_last,
            left.max_sum + right.exclude_first_last,
            right.exclude_last + left.exclude_last
        )

        node.max_sum = max(
            0,
            node.exclude_first,
            node.exclude_last,
            left.max_sum + right.exclude_first,
            left.exclude_last + right.max_sum,
            left.max_sum,
            right.max_sum,
            left.exclude_last + right.exclude_last,
            left.exclude_first + right.exclude_first,
            left.exclude_last + right.exclude_first
        )

        node.exclude_first_last = max(
            0,
            left.exclude_first + right.exclude_first_last,
            right.exclude_last + left.exclude_first_last
        )

        return node

    def merge2(self, left, right):
        node = Node()

        node.exclude_first = max(0, right.max_sum)
        node.exclude_last = max(0, left.max_sum)
        node.max_sum = max(left.max_sum, right.max_sum)
        node.exclude_first_last = 0

        return node

    def query(self):
        return self.tree[1].max_sum

    def update(self, v, tl, tr, pos, value):
        if tl == tr:
            self.tree[v] = Node(value)
        else:
            tm = tl + (tr - tl) // 2

            if pos <= tm:
                self.update(v * 2, tl, tm, pos, value)
            else:
                self.update(v * 2 + 1, tm + 1, tr, pos, value)

            if tr - tl == 1:
                self.tree[v] = self.merge2(self.tree[v * 2], self.tree[v * 2 + 1])
            else:
                self.tree[v] = self.merge(self.tree[v * 2], self.tree[v * 2 + 1])

class Solution:
    def maximumSumSubsequence(self, nums, queries):
        N = len(nums)
        st = SegmentTree(nums)
        M = 10 ** 9 + 7
        res = 0

        for pos, value in queries:
            st.update(1, 0, N - 1, pos, value)
            res += st.query()
            if res >= M:
                res %= M
        
        return res

```

