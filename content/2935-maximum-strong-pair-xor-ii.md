---
title: 2935. Maximum Strong Pair XOR II
draft: false
tags: 
  - leetcode-hard
  - array
  - hash-table
  - bit-manipulation
  - trie
  - sliding-window
  - weekly-contest-371
  - contest-question
date: 2023-11-13
---

[Problem Link](https://leetcode.com/problems/maximum-strong-pair-xor-ii/)

## Description

---
<p>You are given a <strong>0-indexed</strong> integer array <code>nums</code>. A pair of integers <code>x</code> and <code>y</code> is called a <strong>strong</strong> pair if it satisfies the condition:</p>

<ul>
	<li><code>|x - y| &lt;= min(x, y)</code></li>
</ul>

<p>You need to select two integers from <code>nums</code> such that they form a strong pair and their bitwise <code>XOR</code> is the <strong>maximum</strong> among all strong pairs in the array.</p>

<p>Return <em>the <strong>maximum</strong> </em><code>XOR</code><em> value out of all possible strong pairs in the array</em> <code>nums</code>.</p>

<p><strong>Note</strong> that you can pick the same integer twice to form a pair.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,4,5]
<strong>Output:</strong> 7
<strong>Explanation:</strong> There are 11 strong pairs in the array <code>nums</code>: (1, 1), (1, 2), (2, 2), (2, 3), (2, 4), (3, 3), (3, 4), (3, 5), (4, 4), (4, 5) and (5, 5).
The maximum XOR possible from these pairs is 3 XOR 4 = 7.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [10,100]
<strong>Output:</strong> 0
<strong>Explanation:</strong> There are 2 strong pairs in the array nums: (10, 10) and (100, 100).
The maximum XOR possible from these pairs is 10 XOR 10 = 0 since the pair (100, 100) also gives 100 XOR 100 = 0.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [500,520,2500,3000]
<strong>Output:</strong> 1020
<strong>Explanation:</strong> There are 6 strong pairs in the array nums: (500, 500), (500, 520), (520, 520), (2500, 2500), (2500, 3000) and (3000, 3000).
The maximum XOR possible from these pairs is 500 XOR 520 = 1020 since the only other non-zero XOR value is 2500 XOR 3000 = 636.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 2<sup>20</sup> - 1</code></li>
</ul>


## Solution

---
### Python3
``` py title='maximum-strong-pair-xor-ii'
class Solution:
    def maximumStrongPairXor(self, nums: List[int]) -> int:
        N = len(nums)
        nums.sort()
        MAX_BIT = nums[-1].bit_length()
        root = [None, None, 0]
        COUNT = 2
        
        def add(x):
            curr = root
            
            for k in range(MAX_BIT, -1, -1):
                if x & (1 << k) > 0:
                    bit = 1
                else:
                    bit = 0
                
                if curr[bit] is None:
                    curr[bit] = [None, None, 0]
                
                curr = curr[bit]
                curr[COUNT] += 1
        
        def remove(x):
            curr = root
            
            for k in range(MAX_BIT, -1, -1):
                if x & (1 << k) > 0:
                    bit = 1
                else:
                    bit = 0
                
                if curr[bit] is None:
                    curr[bit] = [None, None, 0]
                
                curr = curr[bit]
                curr[COUNT] -= 1
        
        def query(x):
            curr = root
            res = 0
            
            for k in range(MAX_BIT, -1, -1):
                if x & (1 << k) > 0:
                    bit = 1
                else:
                    bit = 0
                    
                opp = 1 - bit
                
                if curr is not None and curr[opp] is not None and curr[opp][COUNT] > 0:
                    res += (1 << k)
                    curr = curr[opp]
                else:
                    curr = curr[bit]
            
            return res
                    
        res = j = 0
        for i, x in enumerate(nums):
            while j < N and x * 2 >= nums[j]:
                add(nums[j])
                j += 1
            
            res = max(res, query(x))
            remove(x)
        
        return res
                
```

