---
title: 1442. Count Triplets That Can Form Two Arrays of Equal XOR
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - math
  - bit-manipulation
  - prefix-sum
  - weekly-contest-188
  - contest-question
date: 2024-05-30
---

[Problem Link](https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/)

## Description

---
<p>Given an array of integers <code>arr</code>.</p>

<p>We want to select three indices <code>i</code>, <code>j</code> and <code>k</code> where <code>(0 &lt;= i &lt; j &lt;= k &lt; arr.length)</code>.</p>

<p>Let&#39;s define <code>a</code> and <code>b</code> as follows:</p>

<ul>
	<li><code>a = arr[i] ^ arr[i + 1] ^ ... ^ arr[j - 1]</code></li>
	<li><code>b = arr[j] ^ arr[j + 1] ^ ... ^ arr[k]</code></li>
</ul>

<p>Note that <strong>^</strong> denotes the <strong>bitwise-xor</strong> operation.</p>

<p>Return <em>the number of triplets</em> (<code>i</code>, <code>j</code> and <code>k</code>) Where <code>a == b</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> arr = [2,3,1,6,7]
<strong>Output:</strong> 4
<strong>Explanation:</strong> The triplets are (0,1,2), (0,2,2), (2,3,4) and (2,4,4)
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> arr = [1,1,1,1,1]
<strong>Output:</strong> 10
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= arr.length &lt;= 300</code></li>
	<li><code>1 &lt;= arr[i] &lt;= 10<sup>8</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='count-triplets-that-can-form-two-arrays-of-equal-xor'
class Solution:
    def countTriplets(self, arr: List[int]) -> int:
        N = len(arr)
        prefix = [0] * (N + 1)
        res = 0

        # since a == b
        # a ^ a = b ^ a
        # 0 = b ^ a
        # arr[i] ^ arr[i + 1] ^ ... ^ arr[k] == 0
        # prefix[k + 1] == prefix[i]

        for i in range(1, N + 1):
            prefix[i] = arr[i - 1] ^ prefix[i - 1]

        count = Counter()
        total = Counter()

        for i in range(N + 1):
            res += count[prefix[i]] * (i - 1) - total[prefix[i]]
            count[prefix[i]] += 1
            total[prefix[i]] += i
        
        return res
```

