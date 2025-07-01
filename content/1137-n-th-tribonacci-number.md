---
title: 1137. N-th Tribonacci Number
draft: false
tags: 
  - leetcode-easy
  - math
  - dynamic-programming
  - memoization
  - weekly-contest-147
  - contest-question
date: 2019-10-10
---

[Problem Link](https://leetcode.com/problems/n-th-tribonacci-number/)

## Description

---
<p>The Tribonacci sequence T<sub>n</sub> is defined as follows:&nbsp;</p>

<p>T<sub>0</sub> = 0, T<sub>1</sub> = 1, T<sub>2</sub> = 1, and T<sub>n+3</sub> = T<sub>n</sub> + T<sub>n+1</sub> + T<sub>n+2</sub> for n &gt;= 0.</p>

<p>Given <code>n</code>, return the value of T<sub>n</sub>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 4
<strong>Output:</strong> 4
<strong>Explanation:</strong>
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 25
<strong>Output:</strong> 1389537
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= n &lt;= 37</code></li>
	<li>The answer is guaranteed to fit within a 32-bit integer, ie. <code>answer &lt;= 2^31 - 1</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='n-th-tribonacci-number'
class Solution:
    def tribonacci(self, n: int) -> int:
        if n == 0: return 0
        if n <= 2: return 1

        a, b, c = 0, 1, 1
        for _ in range(n - 3):
            a, b, c = b, c, a + b + c
        
        return a + b + c
```
### C++
``` cpp title='n-th-tribonacci-number'
class Solution {
public:
    int arr[38];
    int recur(int n){
        if (arr[n] != -1) return arr[n];
        int result = recur(n-1) + recur(n-2) + recur(n-3);
        arr[n] = result;
        return result;
    }
    int tribonacci(int n) {
        fill_n(arr, 38, -1);
        arr[0] = 0;
        arr[1] = 1;
        arr[2] = 1;
        return recur(n);
    }
};
```
### Python
``` py title='n-th-tribonacci-number'
class Solution(object):
    def tribonacci(self, n):
        a, b, c = 1, 0, 0
        for _ in xrange(n): a, b, c = b, c, a + b + c
        return c
```

