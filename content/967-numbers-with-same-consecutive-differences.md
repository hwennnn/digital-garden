---
title: 967. Numbers With Same Consecutive Differences
draft: false
tags: 
  - leetcode-medium
  - backtracking
  - breadth-first-search
  - weekly-contest-117
  - contest-question
date: 2020-08-17
---

[Problem Link](https://leetcode.com/problems/numbers-with-same-consecutive-differences/)

## Description

---
<p>Given two integers n and k, return <em>an array of all the integers of length </em><code>n</code><em> where the difference between every two consecutive digits is </em><code>k</code>. You may return the answer in <strong>any order</strong>.</p>

<p>Note that the integers should not have leading zeros. Integers as <code>02</code> and <code>043</code> are not allowed.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 3, k = 7
<strong>Output:</strong> [181,292,707,818,929]
<strong>Explanation:</strong> Note that 070 is not a valid number, because it has leading zeroes.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 2, k = 1
<strong>Output:</strong> [10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= n &lt;= 9</code></li>
	<li><code>0 &lt;= k &lt;= 9</code></li>
</ul>


## Solution

---
### Python3
``` py title='numbers-with-same-consecutive-differences'
class Solution:
    def numsSameConsecDiff(self, n: int, k: int) -> List[int]:
        res = []
        
        def go(index, curr):
            if index == n:
                res.append(curr)
                return
            
            last = curr % 10
            
            for nxt in {last + k, last - k}:
                if 0 <= nxt < 10:
                    go(index + 1, curr * 10 + nxt)
        
        for x in range(1, 10):
            go(1, x)
        
        return res
```
### C++
``` cpp title='numbers-with-same-consecutive-differences'
class Solution {
public:
    vector<int> numsSameConsecDiff(int N, int K) {
        vector<int> cur = {1, 2, 3, 4, 5, 6, 7, 8, 9, 0};
        for (int i = 2; i <= N; ++i) {
            vector<int> cur2;
            for (int x : cur) {
                int y = x % 10;
                if (x > 0 && y + K < 10)
                    cur2.push_back(x * 10 + y + K);
                if (x > 0 && K > 0 && y - K >= 0)
                    cur2.push_back(x * 10 + y - K);
            }
            cur = cur2;
        }
        return cur;
    }
};
```

