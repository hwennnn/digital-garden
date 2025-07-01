---
title: 719. Find K-th Smallest Pair Distance
draft: false
tags: 
  - leetcode-hard
  - array
  - two-pointers
  - binary-search
  - sorting
  - weekly-contest-56
  - contest-question
date: 2024-08-15
---

[Problem Link](https://leetcode.com/problems/find-k-th-smallest-pair-distance/)

## Description

---
<p>The <strong>distance of a pair</strong> of integers <code>a</code> and <code>b</code> is defined as the absolute difference between <code>a</code> and <code>b</code>.</p>

<p>Given an integer array <code>nums</code> and an integer <code>k</code>, return <em>the</em> <code>k<sup>th</sup></code> <em>smallest <strong>distance among all the pairs</strong></em> <code>nums[i]</code> <em>and</em> <code>nums[j]</code> <em>where</em> <code>0 &lt;= i &lt; j &lt; nums.length</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,3,1], k = 1
<strong>Output:</strong> 0
<strong>Explanation:</strong> Here are all the pairs:
(1,3) -&gt; 2
(1,1) -&gt; 0
(3,1) -&gt; 2
Then the 1<sup>st</sup> smallest distance pair is (1,1), and its distance is 0.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,1,1], k = 2
<strong>Output:</strong> 0
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,6,1], k = 3
<strong>Output:</strong> 5
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == nums.length</code></li>
	<li><code>2 &lt;= n &lt;= 10<sup>4</sup></code></li>
	<li><code>0 &lt;= nums[i] &lt;= 10<sup>6</sup></code></li>
	<li><code>1 &lt;= k &lt;= n * (n - 1) / 2</code></li>
</ul>


## Solution

---
### Python3
``` py title='find-k-th-smallest-pair-distance'
class Solution:
    def smallestDistancePair(self, nums: List[int], k: int) -> int:
        N = len(nums)
        nums.sort()

        # find the number of pairs where nums[j] - nums[i] <= mid
        def good(mid):
            count = 0
            i = 0

            for j in range(N):
                while nums[j] - nums[i] > mid:
                    i += 1
                
                count += (j - i)

            return count >= k

        return bisect_left(range(10 ** 7), True, key = good)
```

