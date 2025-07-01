---
title: 1675. Minimize Deviation in Array
draft: false
tags: 
  - leetcode-hard
  - array
  - greedy
  - heap-priority-queue
  - ordered-set
  - weekly-contest-217
  - contest-question
date: 2023-02-24
---

[Problem Link](https://leetcode.com/problems/minimize-deviation-in-array/)

## Description

---
<p>You are given an array <code>nums</code> of <code>n</code> positive integers.</p>

<p>You can perform two types of operations on any element of the array any number of times:</p>

<ul>
	<li>If the element is <strong>even</strong>, <strong>divide</strong> it by <code>2</code>.

	<ul>
		<li>For example, if the array is <code>[1,2,3,4]</code>, then you can do this operation on the last element, and the array will be <code>[1,2,3,<u>2</u>].</code></li>
	</ul>
	</li>
	<li>If the element is <strong>odd</strong>, <strong>multiply</strong> it by <code>2</code>.
	<ul>
		<li>For example, if the array is <code>[1,2,3,4]</code>, then you can do this operation on the first element, and the array will be <code>[<u>2</u>,2,3,4].</code></li>
	</ul>
	</li>
</ul>

<p>The <strong>deviation</strong> of the array is the <strong>maximum difference</strong> between any two elements in the array.</p>

<p>Return <em>the <strong>minimum deviation</strong> the array can have after performing some number of operations.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,4]
<strong>Output:</strong> 1
<strong>Explanation:</strong> You can transform the array to [1,2,3,<u>2</u>], then to [<u>2</u>,2,3,2], then the deviation will be 3 - 2 = 1.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [4,1,5,20,3]
<strong>Output:</strong> 3
<strong>Explanation:</strong> You can transform the array after two operations to [4,<u>2</u>,5,<u>5</u>,3], then the deviation will be 5 - 2 = 3.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,10,8]
<strong>Output:</strong> 3
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == nums.length</code></li>
	<li><code>2 &lt;= n &lt;= 5 * 10<sup><span style="font-size: 10.8333px;">4</span></sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='minimize-deviation-in-array'
class Solution:
    def minimumDeviation(self, nums: List[int]) -> int:
        N = len(nums)
        heap = []

        for x in nums:
            heappush(heap, -x if x % 2 == 0 else -x * 2)
        
        mmin = -max(heap)
        res = inf

        while len(heap) == N:
            x = -heappop(heap)
            res = min(res, x - mmin)

            if x % 2 == 0:
                mmin = min(mmin, x // 2)
                heappush(heap, -x // 2)

        return res
```

