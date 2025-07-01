---
title: 1345. Jump Game IV
draft: false
tags: 
  - leetcode-hard
  - array
  - hash-table
  - breadth-first-search
  - biweekly-contest-19
  - contest-question
date: 2023-03-05
---

[Problem Link](https://leetcode.com/problems/jump-game-iv/)

## Description

---
<p>Given an array of&nbsp;integers <code>arr</code>, you are initially positioned at the first index of the array.</p>

<p>In one step you can jump from index <code>i</code> to index:</p>

<ul>
	<li><code>i + 1</code> where:&nbsp;<code>i + 1 &lt; arr.length</code>.</li>
	<li><code>i - 1</code> where:&nbsp;<code>i - 1 &gt;= 0</code>.</li>
	<li><code>j</code> where: <code>arr[i] == arr[j]</code> and <code>i != j</code>.</li>
</ul>

<p>Return <em>the minimum number of steps</em> to reach the <strong>last index</strong> of the array.</p>

<p>Notice that you can not jump outside of the array at any time.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> arr = [100,-23,-23,404,100,23,23,23,3,404]
<strong>Output:</strong> 3
<strong>Explanation:</strong> You need three jumps from index 0 --&gt; 4 --&gt; 3 --&gt; 9. Note that index 9 is the last index of the array.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> arr = [7]
<strong>Output:</strong> 0
<strong>Explanation:</strong> Start index is the last index. You do not need to jump.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> arr = [7,6,9,6,9,6,9,7]
<strong>Output:</strong> 1
<strong>Explanation:</strong> You can jump directly from index 0 to index 7 which is last index of the array.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= arr.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>-10<sup>8</sup> &lt;= arr[i] &lt;= 10<sup>8</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='jump-game-iv'
class Solution:
    def minJumps(self, arr: List[int]) -> int:
        N = len(arr)
        mp = defaultdict(list)

        for i, x in enumerate(arr):
            mp[x].append(i)
        
        num_seen = set()
        pos_seen = set([0])
        queue = deque([0])
        steps = 0

        while queue:
            M = len(queue)

            for _ in range(M):
                index = queue.popleft()
                num = arr[index]

                if index == N - 1: return steps

                for nxt in [index + 1, index - 1] + (mp[num] * (num not in num_seen)):
                    if 0 <= nxt < N and nxt not in pos_seen:
                        pos_seen.add(nxt)
                        queue.append(nxt)
                
                num_seen.add(num)

            
            steps += 1

        return -1
```

