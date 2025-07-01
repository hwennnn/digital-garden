---
title: 456. 132 Pattern
draft: false
tags: 
  - leetcode-medium
  - array
  - binary-search
  - stack
  - monotonic-stack
  - ordered-set
  - smarking-algorithm-contest-4
  - contest-question
date: 2024-06-22
---

[Problem Link](https://leetcode.com/problems/132-pattern/)

## Description

---
<p>Given an array of <code>n</code> integers <code>nums</code>, a <strong>132 pattern</strong> is a subsequence of three integers <code>nums[i]</code>, <code>nums[j]</code> and <code>nums[k]</code> such that <code>i &lt; j &lt; k</code> and <code>nums[i] &lt; nums[k] &lt; nums[j]</code>.</p>

<p>Return <code>true</code><em> if there is a <strong>132 pattern</strong> in </em><code>nums</code><em>, otherwise, return </em><code>false</code><em>.</em></p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,3,4]
<strong>Output:</strong> false
<strong>Explanation:</strong> There is no 132 pattern in the sequence.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,1,4,2]
<strong>Output:</strong> true
<strong>Explanation:</strong> There is a 132 pattern in the sequence: [1, 4, 2].
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [-1,3,2,0]
<strong>Output:</strong> true
<strong>Explanation:</strong> There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == nums.length</code></li>
	<li><code>1 &lt;= n &lt;= 2 * 10<sup>5</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### C++
``` cpp title='132-pattern'
class Solution {
public:
    bool find132pattern(vector<int>& nums) {
        int N = nums.size();
        stack<int> st;
        int midElement = INT_MIN;

        for (int i = N - 1; i >= 0; i--) {
            if (nums[i] < midElement) return true;

            while (!st.empty() && nums[i] > st.top()) {
                midElement = st.top(); st.pop();
            }

            st.push(nums[i]);
        }

        return false;
    }
};
```
### Python3
``` py title='132-pattern'
class Solution:
    def find132pattern(self, nums: List[int]) -> bool:
        N = len(nums)
        stack = [] # to maintain a monotonic decreasing stack
        s3 = -inf

        for i in range(N - 1, -1, -1):
            if nums[i] < s3: # represents nums[i] < nums[k]
                return True

            # when this condition meets, nums[i] here will be nums[j], the third element
            # while the popped element is nums[k], the s3 element
            # s3 will always be the largest possible element, because when a smaller element is encountered, the answer would have already been returned
            # In short, the below function ensures (j, k) -> which nums[j] > nums[k]
            while stack and nums[i] > stack[-1]:
                s3 = stack.pop()
            
            stack.append(nums[i])

        return False
```

