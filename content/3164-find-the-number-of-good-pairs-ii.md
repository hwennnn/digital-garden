---
title: 3164. Find the Number of Good Pairs II
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - weekly-contest-399
  - contest-question
date: 2024-05-26
---

[Problem Link](https://leetcode.com/problems/find-the-number-of-good-pairs-ii/)

## Description

---
<p>You are given 2 integer arrays <code>nums1</code> and <code>nums2</code> of lengths <code>n</code> and <code>m</code> respectively. You are also given a <strong>positive</strong> integer <code>k</code>.</p>

<p>A pair <code>(i, j)</code> is called <strong>good</strong> if <code>nums1[i]</code> is divisible by <code>nums2[j] * k</code> (<code>0 &lt;= i &lt;= n - 1</code>, <code>0 &lt;= j &lt;= m - 1</code>).</p>

<p>Return the total number of <strong>good</strong> pairs.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums1 = [1,3,4], nums2 = [1,3,4], k = 1</span></p>

<p><strong>Output:</strong> <span class="example-io">5</span></p>

<p><strong>Explanation:</strong></p>
The 5 good pairs are <code>(0, 0)</code>, <code>(1, 0)</code>, <code>(1, 1)</code>, <code>(2, 0)</code>, and <code>(2, 2)</code>.</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums1 = [1,2,4,12], nums2 = [2,4], k = 3</span></p>

<p><strong>Output:</strong> <span class="example-io">2</span></p>

<p><strong>Explanation:</strong></p>

<p>The 2 good pairs are <code>(3, 0)</code> and <code>(3, 1)</code>.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n, m &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums1[i], nums2[j] &lt;= 10<sup>6</sup></code></li>
	<li><code>1 &lt;= k &lt;= 10<sup>3</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='find-the-number-of-good-pairs-ii'
factors = [[] for _ in range(10 ** 6 + 1)]
for i in range(1, 10 ** 6 + 1):
    for j in range(i, 10 ** 6 + 1, i):
        factors[j].append(i)

class Solution:
    def numberOfPairs(self, nums1: List[int], nums2: List[int], k: int) -> int:
        nums1 = [num // k for num in nums1 if num % k == 0]
        nums2 = Counter(nums2)

        res = 0
        for num in nums1:
            for factor in factors[num]:
                res += nums2[factor]
                
        return res
```
### C++
``` cpp title='find-the-number-of-good-pairs-ii'
class Solution {
public:
    long long numberOfPairs(vector<int>& nums1, vector<int>& nums2, int k) {
        long long ans = 0;
        unordered_map<int, int> mp;

        for (auto& x : nums2) mp[x * k]++;

        for (auto& x : nums1) {
            for (int d = 1; d * d <= x; d++) {
                if (x % d == 0) {
                    ans += (long long) mp[d];
                    if (d != (x / d)) ans += (long long) mp[x / d];
                }
            }
        }

        return ans;
    }
};
```

