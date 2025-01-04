---
title: 2698. Find the Punishment Number of an Integer
draft: false
tags: 
  - leetcode-medium
  - math
  - backtracking
date: 2023-05-21
---

[Problem Link](https://leetcode.com/problems/find-the-punishment-number-of-an-integer/)

## Description

---
<p>Given a positive integer <code>n</code>, return <em>the <strong>punishment number</strong></em> of <code>n</code>.</p>

<p>The <strong>punishment number</strong> of <code>n</code> is defined as the sum of the squares of all integers <code>i</code> such that:</p>

<ul>
	<li><code>1 &lt;= i &lt;= n</code></li>
	<li>The decimal representation of <code>i * i</code> can be partitioned into contiguous substrings such that the sum of the integer values of these substrings equals <code>i</code>.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 10
<strong>Output:</strong> 182
<strong>Explanation:</strong> There are exactly 3 integers i that satisfy the conditions in the statement:
- 1 since 1 * 1 = 1
- 9 since 9 * 9 = 81 and 81 can be partitioned into 8 + 1.
- 10 since 10 * 10 = 100 and 100 can be partitioned into 10 + 0.
Hence, the punishment number of 10 is 1 + 81 + 100 = 182
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 37
<strong>Output:</strong> 1478
<strong>Explanation:</strong> There are exactly 4 integers i that satisfy the conditions in the statement:
- 1 since 1 * 1 = 1. 
- 9 since 9 * 9 = 81 and 81 can be partitioned into 8 + 1. 
- 10 since 10 * 10 = 100 and 100 can be partitioned into 10 + 0. 
- 36 since 36 * 36 = 1296 and 1296 can be partitioned into 1 + 29 + 6.
Hence, the punishment number of 37 is 1 + 81 + 100 + 1296 = 1478
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 1000</code></li>
</ul>


## Solution

---
### Python
``` py title='find-the-punishment-number-of-an-integer'
ans = [False] * (1001)

def helper(k, target):
    k = list(str(k))
    N = len(k)

    bfs = deque([(0, 0, 0)])

    while bfs:
        index, currSum, totalSum = bfs.popleft()
        
        if currSum + totalSum > target: continue

        if index == N:
            if currSum + totalSum == target:
                return True

            continue

        x = int(k[index])
        bfs.append((index + 1, currSum * 10 + x, totalSum))
        bfs.append((index + 1, x, currSum + totalSum))

    return False

for x in range(1, 1001):
    k = x * x
    if helper(k, x):
        ans[x] = True

class Solution:
    def punishmentNumber(self, n: int) -> int:
        res = 0
        
        for x in range(1, n + 1):
            if ans[x]:
                res += x * x
        
        return res
```
