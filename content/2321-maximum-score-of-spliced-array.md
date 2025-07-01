---
title: 2321. Maximum Score Of Spliced Array
draft: false
tags: 
  - leetcode-hard
  - array
  - dynamic-programming
  - weekly-contest-299
  - contest-question
date: 2022-06-26
---

[Problem Link](https://leetcode.com/problems/maximum-score-of-spliced-array/)

## Description

---
<p>You are given two <strong>0-indexed</strong> integer arrays <code>nums1</code> and <code>nums2</code>, both of length <code>n</code>.</p>

<p>You can choose two integers <code>left</code> and <code>right</code> where <code>0 &lt;= left &lt;= right &lt; n</code> and <strong>swap</strong> the subarray <code>nums1[left...right]</code> with the subarray <code>nums2[left...right]</code>.</p>

<ul>
	<li>For example, if <code>nums1 = [1,2,3,4,5]</code> and <code>nums2 = [11,12,13,14,15]</code> and you choose <code>left = 1</code> and <code>right = 2</code>, <code>nums1</code> becomes <code>[1,<strong><u>12,13</u></strong>,4,5]</code> and <code>nums2</code> becomes <code>[11,<strong><u>2,3</u></strong>,14,15]</code>.</li>
</ul>

<p>You may choose to apply the mentioned operation <strong>once</strong> or not do anything.</p>

<p>The <strong>score</strong> of the arrays is the <strong>maximum</strong> of <code>sum(nums1)</code> and <code>sum(nums2)</code>, where <code>sum(arr)</code> is the sum of all the elements in the array <code>arr</code>.</p>

<p>Return <em>the <strong>maximum possible score</strong></em>.</p>

<p>A <strong>subarray</strong> is a contiguous sequence of elements within an array. <code>arr[left...right]</code> denotes the subarray that contains the elements of <code>nums</code> between indices <code>left</code> and <code>right</code> (<strong>inclusive</strong>).</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [60,60,60], nums2 = [10,90,10]
<strong>Output:</strong> 210
<strong>Explanation:</strong> Choosing left = 1 and right = 1, we have nums1 = [60,<u><strong>90</strong></u>,60] and nums2 = [10,<u><strong>60</strong></u>,10].
The score is max(sum(nums1), sum(nums2)) = max(210, 80) = 210.</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [20,40,20,70,30], nums2 = [50,20,50,40,20]
<strong>Output:</strong> 220
<strong>Explanation:</strong> Choosing left = 3, right = 4, we have nums1 = [20,40,20,<u><strong>40,20</strong></u>] and nums2 = [50,20,50,<u><strong>70,30</strong></u>].
The score is max(sum(nums1), sum(nums2)) = max(140, 220) = 220.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [7,11,13], nums2 = [1,1,1]
<strong>Output:</strong> 31
<strong>Explanation:</strong> We choose not to swap any subarray.
The score is max(sum(nums1), sum(nums2)) = max(31, 3) = 31.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == nums1.length == nums2.length</code></li>
	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums1[i], nums2[i] &lt;= 10<sup>4</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='maximum-score-of-spliced-array'
class Solution:
    def maximumsSplicedArray(self, nums1: List[int], nums2: List[int]) -> int:
        n = len(nums1)
        
        def kadane(A):
            curr = res = 0
            
            for x in A:
                curr = max(curr + x, x)
                res = max(res, curr)
            
            return res
        
        def f(A, B):
            return sum(A) + kadane([b - a for a, b in zip(A, B)])
        
        return max(f(nums1, nums2), f(nums2, nums1))
```
### C++
``` cpp title='maximum-score-of-spliced-array'
// https://leetcode.com/discuss/interview-question/2189149/Amazon-Online-Assessment-Questions

class Solution {
public:
    vector<int> bestSplice(vector<int>& A, vector<int>& B) {
        // find the maximum subarray sum in B-A
        vector<int> ans(A.size());
        for (int i = 0; i < A.size(); i++) {
            ans[i] = B[i] - A[i];
        }

        int best = INT_MIN, start = 0, end = 0;
        int cur = 0, last = 0, cur_start = 0;
        for (int i = 0; i < ans.size(); i++) {
            if (last <= 0) cur_start = i;
            cur = ans[i] + max(last, 0);
            if (cur >= best) {
                best = cur;
                start = cur_start;
                end = i;
            }
            last = cur;
        }

        // copy over the ranges from A and B
        for (int i = 0; i < A.size(); i++) {
            ans[i] = A[i];
        }
        // only copy over the range from B if it increases the final sum
        if (best > 0) {
            for (int i = start; i <= end; i++) {
                ans[i] = B[i];
            }
        }
        return ans;
    }
    
    int maximumsSplicedArray(vector<int>& A, vector<int>& B) {
        vector<int> A_res = bestSplice(A, B);
        vector<int> B_res = bestSplice(B, A);

        // return the larger sum
        int A_sum = 0, B_sum = 0;
        for (int i = 0; i < A.size(); i++) {
            A_sum += A_res[i];
            B_sum += B_res[i];
        }

        return A_sum > B_sum ? A_sum : B_sum;
    }
};


```

