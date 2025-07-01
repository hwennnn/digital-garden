---
title: 982. Triples with Bitwise AND Equal To Zero
draft: false
tags: 
  - leetcode-hard
  - array
  - hash-table
  - bit-manipulation
  - weekly-contest-121
  - contest-question
date: 2022-02-21
---

[Problem Link](https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/)

## Description

---
<p>Given an integer array nums, return <em>the number of <strong>AND triples</strong></em>.</p>

<p>An <strong>AND triple</strong> is a triple of indices <code>(i, j, k)</code> such that:</p>

<ul>
	<li><code>0 &lt;= i &lt; nums.length</code></li>
	<li><code>0 &lt;= j &lt; nums.length</code></li>
	<li><code>0 &lt;= k &lt; nums.length</code></li>
	<li><code>nums[i] &amp; nums[j] &amp; nums[k] == 0</code>, where <code>&amp;</code> represents the bitwise-AND operator.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,1,3]
<strong>Output:</strong> 12
<strong>Explanation:</strong> We could choose the following i, j, k triples:
(i=0, j=0, k=1) : 2 &amp; 2 &amp; 1
(i=0, j=1, k=0) : 2 &amp; 1 &amp; 2
(i=0, j=1, k=1) : 2 &amp; 1 &amp; 1
(i=0, j=1, k=2) : 2 &amp; 1 &amp; 3
(i=0, j=2, k=1) : 2 &amp; 3 &amp; 1
(i=1, j=0, k=0) : 1 &amp; 2 &amp; 2
(i=1, j=0, k=1) : 1 &amp; 2 &amp; 1
(i=1, j=0, k=2) : 1 &amp; 2 &amp; 3
(i=1, j=1, k=0) : 1 &amp; 1 &amp; 2
(i=1, j=2, k=0) : 1 &amp; 3 &amp; 2
(i=2, j=0, k=1) : 3 &amp; 2 &amp; 1
(i=2, j=1, k=0) : 3 &amp; 1 &amp; 2
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [0,0,0]
<strong>Output:</strong> 27
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 1000</code></li>
	<li><code>0 &lt;= nums[i] &lt; 2<sup>16</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='triples-with-bitwise-and-equal-to-zero'
class Solution:
    def countTriplets(self, nums: List[int]) -> int:
        mp = collections.defaultdict(int)
        res = 0
        
        for a in nums:
            for b in nums:
                mp[a & b] += 1
        
        for c in nums:
            for ab in mp:
                if ab & c == 0:
                    res += mp[ab]
        
        return res
```

