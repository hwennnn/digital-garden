---
title: 3624. Number of Integers With Popcount-Depth Equal to K II
draft: false
tags: 
  - leetcode-hard
  - weekly-contest-459
  - contest-question
date: 2025-07-20
---

[Problem Link](https://leetcode.com/problems/number-of-integers-with-popcount-depth-equal-to-k-ii/)

## Description

---
<p>You are given an integer array <code>nums</code>.</p>

<p>For any positive integer <code>x</code>, define the following sequence:</p>

<ul>
	<li><code>p<sub>0</sub> = x</code></li>
	<li><code>p<sub>i+1</sub> = popcount(p<sub>i</sub>)</code> for all <code>i &gt;= 0</code>, where <code>popcount(y)</code> is the number of set bits (1&#39;s) in the binary representation of <code>y</code>.</li>
</ul>

<p>This sequence will eventually reach the value 1.</p>

<p>The <strong>popcount-depth</strong> of <code>x</code> is defined as the <strong>smallest</strong> integer <code>d &gt;= 0</code> such that <code>p<sub>d</sub> = 1</code>.</p>

<p>For example, if <code>x = 7</code> (binary representation <code>&quot;111&quot;</code>). Then, the sequence is: <code>7 &rarr; 3 &rarr; 2 &rarr; 1</code>, so the popcount-depth of 7 is 3.</p>

<p>You are also given a 2D integer array <code>queries</code>, where each <code>queries[i]</code> is either:</p>

<ul>
	<li><code>[1, l, r, k]</code> - <strong>Determine</strong> the number of indices <code>j</code> such that <code>l &lt;= j &lt;= r</code> and the <strong>popcount-depth</strong> of <code>nums[j]</code> is equal to <code>k</code>.</li>
	<li><code>[2, idx, val]</code> - <strong>Update</strong> <code>nums[idx]</code> to <code>val</code>.</li>
</ul>

<p>Return an integer array <code>answer</code>, where <code>answer[i]</code> is the number of indices for the <code>i<sup>th</sup></code> query of type <code>[1, l, r, k]</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [2,4], queries = [[1,0,1,1],[2,1,1],[1,0,1,0]]</span></p>

<p><strong>Output:</strong> <span class="example-io">[2,1]</span></p>

<p><strong>Explanation:</strong></p>

<table style="border: 1px solid black;">
	<thead>
		<tr>
			<th style="border: 1px solid black;"><code>i</code></th>
			<th style="border: 1px solid black;"><code>queries[i]</code></th>
			<th style="border: 1px solid black;"><code>nums</code></th>
			<th style="border: 1px solid black;">binary(<code>nums</code>)</th>
			<th style="border: 1px solid black;">popcount-<br />
			depth</th>
			<th style="border: 1px solid black;"><code>[l, r]</code></th>
			<th style="border: 1px solid black;"><code>k</code></th>
			<th style="border: 1px solid black;">Valid<br />
			<code>nums[j]</code></th>
			<th style="border: 1px solid black;">updated<br />
			<code>nums</code></th>
			<th style="border: 1px solid black;">Answer</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border: 1px solid black;">0</td>
			<td style="border: 1px solid black;">[1,0,1,1]</td>
			<td style="border: 1px solid black;">[2,4]</td>
			<td style="border: 1px solid black;">[10, 100]</td>
			<td style="border: 1px solid black;">[1, 1]</td>
			<td style="border: 1px solid black;">[0, 1]</td>
			<td style="border: 1px solid black;">1</td>
			<td style="border: 1px solid black;">[0, 1]</td>
			<td style="border: 1px solid black;">&mdash;</td>
			<td style="border: 1px solid black;">2</td>
		</tr>
		<tr>
			<td style="border: 1px solid black;">1</td>
			<td style="border: 1px solid black;">[2,1,1]</td>
			<td style="border: 1px solid black;">[2,4]</td>
			<td style="border: 1px solid black;">[10, 100]</td>
			<td style="border: 1px solid black;">[1, 1]</td>
			<td style="border: 1px solid black;">&mdash;</td>
			<td style="border: 1px solid black;">&mdash;</td>
			<td style="border: 1px solid black;">&mdash;</td>
			<td style="border: 1px solid black;">[2,1]</td>
			<td style="border: 1px solid black;">&mdash;</td>
		</tr>
		<tr>
			<td style="border: 1px solid black;">2</td>
			<td style="border: 1px solid black;">[1,0,1,0]</td>
			<td style="border: 1px solid black;">[2,1]</td>
			<td style="border: 1px solid black;">[10, 1]</td>
			<td style="border: 1px solid black;">[1, 0]</td>
			<td style="border: 1px solid black;">[0, 1]</td>
			<td style="border: 1px solid black;">0</td>
			<td style="border: 1px solid black;">[1]</td>
			<td style="border: 1px solid black;">&mdash;</td>
			<td style="border: 1px solid black;">1</td>
		</tr>
	</tbody>
</table>

<p>Thus, the final <code>answer</code> is <code>[2, 1]</code>.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [3,5,6], queries = [[1,0,2,2],[2,1,4],[1,1,2,1],[1,0,1,0]]</span></p>

<p><strong>Output:</strong> <span class="example-io">[3,1,0]</span></p>

<p><strong>Explanation:</strong></p>

<table style="border: 1px solid black;">
	<thead>
		<tr>
			<th style="border: 1px solid black;"><code>i</code></th>
			<th style="border: 1px solid black;"><code>queries[i]</code></th>
			<th style="border: 1px solid black;"><code>nums</code></th>
			<th style="border: 1px solid black;">binary(<code>nums</code>)</th>
			<th style="border: 1px solid black;">popcount-<br />
			depth</th>
			<th style="border: 1px solid black;"><code>[l, r]</code></th>
			<th style="border: 1px solid black;"><code>k</code></th>
			<th style="border: 1px solid black;">Valid<br />
			<code>nums[j]</code></th>
			<th style="border: 1px solid black;">updated<br />
			<code>nums</code></th>
			<th style="border: 1px solid black;">Answer</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border: 1px solid black;">0</td>
			<td style="border: 1px solid black;">[1,0,2,2]</td>
			<td style="border: 1px solid black;">[3, 5, 6]</td>
			<td style="border: 1px solid black;">[11, 101, 110]</td>
			<td style="border: 1px solid black;">[2, 2, 2]</td>
			<td style="border: 1px solid black;">[0, 2]</td>
			<td style="border: 1px solid black;">2</td>
			<td style="border: 1px solid black;">[0, 1, 2]</td>
			<td style="border: 1px solid black;">&mdash;</td>
			<td style="border: 1px solid black;">3</td>
		</tr>
		<tr>
			<td style="border: 1px solid black;">1</td>
			<td style="border: 1px solid black;">[2,1,4]</td>
			<td style="border: 1px solid black;">[3, 5, 6]</td>
			<td style="border: 1px solid black;">[11, 101, 110]</td>
			<td style="border: 1px solid black;">[2, 2, 2]</td>
			<td style="border: 1px solid black;">&mdash;</td>
			<td style="border: 1px solid black;">&mdash;</td>
			<td style="border: 1px solid black;">&mdash;</td>
			<td style="border: 1px solid black;">[3, 4, 6]</td>
			<td style="border: 1px solid black;">&mdash;</td>
		</tr>
		<tr>
			<td style="border: 1px solid black;">2</td>
			<td style="border: 1px solid black;">[1,1,2,1]</td>
			<td style="border: 1px solid black;">[3, 4, 6]</td>
			<td style="border: 1px solid black;">[11, 100, 110]</td>
			<td style="border: 1px solid black;">[2, 1, 2]</td>
			<td style="border: 1px solid black;">[1, 2]</td>
			<td style="border: 1px solid black;">1</td>
			<td style="border: 1px solid black;">[1]</td>
			<td style="border: 1px solid black;">&mdash;</td>
			<td style="border: 1px solid black;">1</td>
		</tr>
		<tr>
			<td style="border: 1px solid black;">3</td>
			<td style="border: 1px solid black;">[1,0,1,0]</td>
			<td style="border: 1px solid black;">[3, 4, 6]</td>
			<td style="border: 1px solid black;">[11, 100, 110]</td>
			<td style="border: 1px solid black;">[2, 1, 2]</td>
			<td style="border: 1px solid black;">[0, 1]</td>
			<td style="border: 1px solid black;">0</td>
			<td style="border: 1px solid black;">[]</td>
			<td style="border: 1px solid black;">&mdash;</td>
			<td style="border: 1px solid black;">0</td>
		</tr>
	</tbody>
</table>

<p>Thus, the final <code>answer</code> is <code>[3, 1, 0]</code>.</p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [1,2], queries = [[1,0,1,1],[2,0,3],[1,0,0,1],[1,0,0,2]]</span></p>

<p><strong>Output:</strong> <span class="example-io">[1,0,1]</span></p>

<p><strong>Explanation:</strong></p>

<table style="border: 1px solid black;">
	<thead>
		<tr>
			<th style="border: 1px solid black;"><code>i</code></th>
			<th style="border: 1px solid black;"><code>queries[i]</code></th>
			<th style="border: 1px solid black;"><code>nums</code></th>
			<th style="border: 1px solid black;">binary(<code>nums</code>)</th>
			<th style="border: 1px solid black;">popcount-<br />
			depth</th>
			<th style="border: 1px solid black;"><code>[l, r]</code></th>
			<th style="border: 1px solid black;"><code>k</code></th>
			<th style="border: 1px solid black;">Valid<br />
			<code>nums[j]</code></th>
			<th style="border: 1px solid black;">updated<br />
			<code>nums</code></th>
			<th style="border: 1px solid black;">Answer</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border: 1px solid black;">0</td>
			<td style="border: 1px solid black;">[1,0,1,1]</td>
			<td style="border: 1px solid black;">[1, 2]</td>
			<td style="border: 1px solid black;">[1, 10]</td>
			<td style="border: 1px solid black;">[0, 1]</td>
			<td style="border: 1px solid black;">[0, 1]</td>
			<td style="border: 1px solid black;">1</td>
			<td style="border: 1px solid black;">[1]</td>
			<td style="border: 1px solid black;">&mdash;</td>
			<td style="border: 1px solid black;">1</td>
		</tr>
		<tr>
			<td style="border: 1px solid black;">1</td>
			<td style="border: 1px solid black;">[2,0,3]</td>
			<td style="border: 1px solid black;">[1, 2]</td>
			<td style="border: 1px solid black;">[1, 10]</td>
			<td style="border: 1px solid black;">[0, 1]</td>
			<td style="border: 1px solid black;">&mdash;</td>
			<td style="border: 1px solid black;">&mdash;</td>
			<td style="border: 1px solid black;">&mdash;</td>
			<td style="border: 1px solid black;">[3, 2]</td>
			<td style="border: 1px solid black;">&nbsp;</td>
		</tr>
		<tr>
			<td style="border: 1px solid black;">2</td>
			<td style="border: 1px solid black;">[1,0,0,1]</td>
			<td style="border: 1px solid black;">[3, 2]</td>
			<td style="border: 1px solid black;">[11, 10]</td>
			<td style="border: 1px solid black;">[2, 1]</td>
			<td style="border: 1px solid black;">[0, 0]</td>
			<td style="border: 1px solid black;">1</td>
			<td style="border: 1px solid black;">[]</td>
			<td style="border: 1px solid black;">&mdash;</td>
			<td style="border: 1px solid black;">0</td>
		</tr>
		<tr>
			<td style="border: 1px solid black;">3</td>
			<td style="border: 1px solid black;">[1,0,0,2]</td>
			<td style="border: 1px solid black;">[3, 2]</td>
			<td style="border: 1px solid black;">[11, 10]</td>
			<td style="border: 1px solid black;">[2, 1]</td>
			<td style="border: 1px solid black;">[0, 0]</td>
			<td style="border: 1px solid black;">2</td>
			<td style="border: 1px solid black;">[0]</td>
			<td style="border: 1px solid black;">&mdash;</td>
			<td style="border: 1px solid black;">1</td>
		</tr>
	</tbody>
</table>

<p>Thus, the final <code>answer</code> is <code>[1, 0, 1]</code>.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n == nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>15</sup></code></li>
	<li><code>1 &lt;= queries.length &lt;= 10<sup>5</sup></code></li>
	<li><code>queries[i].length == 3</code> or <code>4</code>
	<ul>
		<li><code>queries[i] == [1, l, r, k]</code> or,</li>
		<li><code>queries[i] == [2, idx, val]</code></li>
		<li><code>0 &lt;= l &lt;= r &lt;= n - 1</code></li>
		<li><code>0 &lt;= k &lt;= 5</code></li>
		<li><code>0 &lt;= idx &lt;= n - 1</code></li>
		<li><code>1 &lt;= val &lt;= 10<sup>15</sup></code></li>
	</ul>
	</li>
</ul>


## Solution

---
### Python3
``` py title='number-of-integers-with-popcount-depth-equal-to-k-ii'
class SegmentTree:
    def __init__(self, arr):
        self.n = len(arr)
        self.tree = [0] * (4 * self.n + 1)
        self.build(1, 0, self.n - 1, arr)
 
    def build(self, v, tl, tr, arr):
        if tl == tr:
            self.tree[v] = arr[tl]
        else:
            tm = tl + (tr - tl) // 2
            self.build(v * 2, tl, tm, arr)
            self.build(v * 2 + 1, tm + 1, tr, arr)
            self.tree[v] = self.tree[v * 2] + self.tree[v * 2 + 1]
 
    def query(self, v, tl, tr, l, r):
        if l > r: return 0
 
        if tl == l and tr == r:
            return self.tree[v]
        else:
            tm = tl + (tr - tl) // 2
 
        return self.query(v * 2, tl, tm, l, min(tm, r)) + self.query(v * 2 + 1, tm + 1, tr, max(tm + 1, l), r)
 
    def update(self, v, tl, tr, pos, value):
        if tl == tr:
            self.tree[v] = value
        else:
            tm = tl + (tr - tl) // 2
 
            if pos <= tm:
                self.update(v * 2, tl, tm, pos, value)
            else:
                self.update(v * 2 + 1, tm + 1, tr, pos, value)
 
            self.tree[v] = self.tree[v * 2] + self.tree[v * 2 + 1]

class Solution:
    def popcountDepth(self, nums: List[int], queries: List[List[int]]) -> List[int]:
        N = len(nums)

        def compute(x):
            depth = 0

            while x > 1:
                x = x.bit_count()
                depth += 1
            
            return depth

        sts = []
        for ev in range(6):
            A = []
            for x in nums:
                if compute(x) == ev:
                    A.append(1)
                else:
                    A.append(0)

            sts.append(SegmentTree(A))


        ans = []
        for query in queries:
            if query[0] == 1:
                _, l, r, k = query
                count = sts[k].query(1, 0, N - 1, l, r)
                ans.append(count)
            else:
                _, idx, val = query
                
                for i in range(6):
                    sts[i].update(1, 0, N - 1, idx, 1 if compute(val) == i else 0)

        return ans
```

