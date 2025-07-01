---
title: 1146. Snapshot Array
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - binary-search
  - design
  - weekly-contest-148
  - contest-question
date: 2023-06-11
---

[Problem Link](https://leetcode.com/problems/snapshot-array/)

## Description

---
<p>Implement a SnapshotArray that supports the following interface:</p>

<ul>
	<li><code>SnapshotArray(int length)</code> initializes an array-like data structure with the given length. <strong>Initially, each element equals 0</strong>.</li>
	<li><code>void set(index, val)</code> sets the element at the given <code>index</code> to be equal to <code>val</code>.</li>
	<li><code>int snap()</code> takes a snapshot of the array and returns the <code>snap_id</code>: the total number of times we called <code>snap()</code> minus <code>1</code>.</li>
	<li><code>int get(index, snap_id)</code> returns the value at the given <code>index</code>, at the time we took the snapshot with the given <code>snap_id</code></li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> [&quot;SnapshotArray&quot;,&quot;set&quot;,&quot;snap&quot;,&quot;set&quot;,&quot;get&quot;]
[[3],[0,5],[],[0,6],[0,0]]
<strong>Output:</strong> [null,null,0,null,5]
<strong>Explanation: </strong>
SnapshotArray snapshotArr = new SnapshotArray(3); // set the length to be 3
snapshotArr.set(0,5);  // Set array[0] = 5
snapshotArr.snap();  // Take a snapshot, return snap_id = 0
snapshotArr.set(0,6);
snapshotArr.get(0,0);  // Get the value of array[0] with snap_id = 0, return 5</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>0 &lt;= index &lt; length</code></li>
	<li><code>0 &lt;= val &lt;= 10<sup>9</sup></code></li>
	<li><code>0 &lt;= snap_id &lt; </code>(the total number of times we call <code>snap()</code>)</li>
	<li>At most <code>5 * 10<sup>4</sup></code> calls will be made to <code>set</code>, <code>snap</code>, and <code>get</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='snapshot-array'
class SnapshotArray:

    def __init__(self, length: int):
        self.N = length
        self.A = [[[-1, 0]] for _ in range(self.N)]
        self.curr = 0

    def set(self, index: int, val: int) -> None:
        if self.A[index][-1][0] != self.curr:
            self.A[index].append([self.curr, val])
        else:
            self.A[index][-1][1] = val

    def snap(self) -> int:
        self.curr += 1

        return self.curr - 1

    def get(self, index: int, snap_id: int) -> int:
        i = bisect_right(self.A[index], [snap_id + 1, ]) - 1

        return self.A[index][i][1]


# Your SnapshotArray object will be instantiated and called as such:
# obj = SnapshotArray(length)
# obj.set(index,val)
# param_2 = obj.snap()
# param_3 = obj.get(index,snap_id)
```

