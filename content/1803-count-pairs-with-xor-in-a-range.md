---
title: 1803. Count Pairs With XOR in a Range
draft: false
tags: 
  - leetcode-hard
  - array
  - bit-manipulation
  - trie
  - weekly-contest-233
  - contest-question
date: 2023-11-14
---

[Problem Link](https://leetcode.com/problems/count-pairs-with-xor-in-a-range/)

## Description

---
<p>Given a <strong>(0-indexed)</strong> integer array <code>nums</code> and two integers <code>low</code> and <code>high</code>, return <em>the number of <strong>nice pairs</strong></em>.</p>

<p>A <strong>nice pair</strong> is a pair <code>(i, j)</code> where <code>0 &lt;= i &lt; j &lt; nums.length</code> and <code>low &lt;= (nums[i] XOR nums[j]) &lt;= high</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,4,2,7], low = 2, high = 6
<strong>Output:</strong> 6
<strong>Explanation:</strong> All nice pairs (i, j) are as follows:
    - (0, 1): nums[0] XOR nums[1] = 5 
    - (0, 2): nums[0] XOR nums[2] = 3
    - (0, 3): nums[0] XOR nums[3] = 6
    - (1, 2): nums[1] XOR nums[2] = 6
    - (1, 3): nums[1] XOR nums[3] = 3
    - (2, 3): nums[2] XOR nums[3] = 5
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [9,8,4,2,1], low = 5, high = 14
<strong>Output:</strong> 8
<strong>Explanation:</strong> All nice pairs (i, j) are as follows:
​​​​​    - (0, 2): nums[0] XOR nums[2] = 13
&nbsp;   - (0, 3): nums[0] XOR nums[3] = 11
&nbsp;   - (0, 4): nums[0] XOR nums[4] = 8
&nbsp;   - (1, 2): nums[1] XOR nums[2] = 12
&nbsp;   - (1, 3): nums[1] XOR nums[3] = 10
&nbsp;   - (1, 4): nums[1] XOR nums[4] = 9
&nbsp;   - (2, 3): nums[2] XOR nums[3] = 6
&nbsp;   - (2, 4): nums[2] XOR nums[4] = 5</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 2 * 10<sup>4</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 2 * 10<sup>4</sup></code></li>
	<li><code>1 &lt;= low &lt;= high &lt;= 2 * 10<sup>4</sup></code></li>
</ul>

## Solution

---
### Python3
``` py title='count-pairs-with-xor-in-a-range'
class Solution:
    def countPairs(self, nums: List[int], low: int, high: int) -> int:
        N = len(nums)
        MAX_BIT = 15
        root = [None, None, 0]
        COUNT = 2
        
        def add(x):
            curr = root
            
            for k in range(MAX_BIT, -1, -1):
                if x & (1 << k):
                    bit = 1
                else:
                    bit = 0
                
                if curr[bit] is None:
                    curr[bit] = [None, None, 0]
                
                curr = curr[bit]
                curr[COUNT] += 1
        
        def query(x, limit):
            curr = root
            res = 0
            
            for k in range(MAX_BIT, -1, -1):
                if x & (1 << k):
                    x_bit = 1
                else:
                    x_bit = 0
                
                if limit & (1 << k):
                    l_bit = 1
                else:
                    l_bit = 0
                
                # the trie below is not constructed yet
                if curr is None: break
                
                # when l_bit == 0
                # x_bit ^ x_bit = l_bit (0)
                if l_bit == 0:
                    curr = curr[x_bit]
                    continue
                
                # when l_bit == 1
                # to achieve the sum less than limit,
                # find the same x_bit to achieve XOR of 0
                if curr[x_bit] is not None:
                    res += curr[x_bit][COUNT]
                
                # explore the opposite bit
                # since we may have taken the pairs as the condition above
                curr = curr[1 - x_bit]
                
            return res
    
        ans = 0
        for x in nums:
            ans += query(x, high + 1) - query(x, low)
            add(x)
        
        return ans
```

