---
title: 1806. Minimum Number of Operations to Reinitialize a Permutation
draft: false
tags: 
  - leetcode-medium
  - array
  - math
  - simulation
  - weekly-contest-234
  - contest-question
date: 2021-03-28
---

[Problem Link](https://leetcode.com/problems/minimum-number-of-operations-to-reinitialize-a-permutation/)

## Description

---
<p>You are given an <strong>even</strong> integer <code>n</code>​​​​​​. You initially have a permutation <code>perm</code> of size <code>n</code>​​ where <code>perm[i] == i</code>​ <strong>(0-indexed)</strong>​​​​.</p>

<p>In one operation, you will create a new array <code>arr</code>, and for each <code>i</code>:</p>

<ul>
	<li>If <code>i % 2 == 0</code>, then <code>arr[i] = perm[i / 2]</code>.</li>
	<li>If <code>i % 2 == 1</code>, then <code>arr[i] = perm[n / 2 + (i - 1) / 2]</code>.</li>
</ul>

<p>You will then assign <code>arr</code>​​​​ to <code>perm</code>.</p>

<p>Return <em>the minimum <strong>non-zero</strong> number of operations you need to perform on </em><code>perm</code><em> to return the permutation to its initial value.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 2
<strong>Output:</strong> 1
<strong>Explanation:</strong> perm = [0,1] initially.
After the 1<sup>st</sup> operation, perm = [0,1]
So it takes only 1 operation.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 4
<strong>Output:</strong> 2
<strong>Explanation:</strong> perm = [0,1,2,3] initially.
After the 1<sup>st</sup> operation, perm = [0,2,1,3]
After the 2<sup>nd</sup> operation, perm = [0,1,2,3]
So it takes only 2 operations.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> n = 6
<strong>Output:</strong> 4
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= n &lt;= 1000</code></li>
	<li><code>n</code>​​​​​​ is even.</li>
</ul>


## Solution

---
### Python3
``` py title='minimum-number-of-operations-to-reinitialize-a-permutation'
class Solution:
    def reinitializePermutation(self, n: int) -> int:
        arr = [i for i in range(n)]
        desired = [i for i in range(n)]
        
        count = 0
        
        while count == 0 or arr != desired:
            tmp = [0] * n 
            
            for i in range(n):
                if i % 2 == 0:
                    tmp[i] = arr[i // 2]
                else:
                    tmp[i] = arr[n // 2 + (i-1) // 2]
            
            arr = tmp
            count += 1
            
        return count
        
```

