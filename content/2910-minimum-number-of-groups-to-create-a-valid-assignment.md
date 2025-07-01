---
title: 2910. Minimum Number of Groups to Create a Valid Assignment
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - greedy
  - weekly-contest-368
  - contest-question
date: 2023-10-22
---

[Problem Link](https://leetcode.com/problems/minimum-number-of-groups-to-create-a-valid-assignment/)

## Description

---
<p>You are given a collection of numbered <code>balls</code>&nbsp;and instructed to sort them into boxes for a nearly balanced distribution. There are two rules you must follow:</p>

<ul>
	<li>Balls with the same&nbsp;box must have the same value. But, if you have more than one ball with the same number, you can put them in different boxes.</li>
	<li>The biggest box can only have one more ball than the smallest box.</li>
</ul>

<p>​Return the <em>fewest number of boxes</em> to sort these balls following these rules.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1: </strong></p>

<div class="example-block" style="border-color: var(--border-tertiary); border-left-width: 2px; color: var(--text-secondary); font-size: .875rem; margin-bottom: 1rem; margin-top: 1rem; overflow: visible; padding-left: 1rem;">
<p><strong>Input: </strong> <span class="example-io" style="font-family: Menlo,sans-serif; font-size: 0.85rem;"> balls = [3,2,3,2,3] </span></p>

<p><strong>Output: </strong> <span class="example-io" style="font-family: Menlo,sans-serif; font-size: 0.85rem;"> 2 </span></p>

<p><strong>Explanation:</strong></p>

<p>We can sort <code>balls</code> into boxes as follows:</p>

<ul>
	<li><code>[3,3,3]</code></li>
	<li><code>[2,2]</code></li>
</ul>

<p>The size difference between the two boxes doesn&#39;t exceed one.</p>
</div>

<p><strong class="example">Example 2: </strong></p>

<div class="example-block" style="border-color: var(--border-tertiary); border-left-width: 2px; color: var(--text-secondary); font-size: .875rem; margin-bottom: 1rem; margin-top: 1rem; overflow: visible; padding-left: 1rem;">
<p><strong>Input: </strong> <span class="example-io" style="font-family: Menlo,sans-serif; font-size: 0.85rem;"> balls = [10,10,10,3,1,1] </span></p>

<p><strong>Output: </strong> <span class="example-io" style="font-family: Menlo,sans-serif; font-size: 0.85rem;"> 4 </span></p>

<p><strong>Explanation:</strong></p>

<p>We can sort <code>balls</code> into boxes as follows:</p>

<ul>
</ul>

<ul>
	<li><code>[10]</code></li>
	<li><code>[10,10]</code></li>
	<li><code>[3]</code></li>
	<li><code>[1,1]</code></li>
</ul>

<p>You can&#39;t use fewer than four boxes while still following the rules. For example, putting all three balls numbered 10 in one box would break the rule about the maximum size difference between boxes.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='minimum-number-of-groups-to-create-a-valid-assignment'
class Solution:
    def minGroupsForValidAssignment(self, nums: List[int]) -> int:
        N = len(nums)
        counter = Counter(nums)
        minCount = min(counter.values())

        def count(size):
            res = 0

            for v in counter.values():
                d, rem = divmod(v, size + 1)

                if rem == 0:
                    res += d
                # So far we have divided things into numGroups + 1 groups
                # where the first numGroups have size + 1 elements
                # and the last group has has remaining = {1 ... size} elements.
                # 
                # In order to make this grouping valid, each group out of numGroups
                # can potentially give 1 element to the last group.
                # 
                # The idea is that a subset of those groups should be able to give 1 element 
                # each to the last group so that the last group also has size elements. 
                # 
                # In other words, in order for the last group to have size elements, 
                # size - remaining groups have to contribute 1 element each.
                #  
                # So there must be at least size - remaining groups of size + 1 elements.
                elif d >= (size - rem):
                    res += d + 1
                else:
                    return -1
            
            return res
        
        for size in range(minCount, 0, -1):
            cnt = count(size)
            if cnt != -1:
                return cnt

        return -1
```

