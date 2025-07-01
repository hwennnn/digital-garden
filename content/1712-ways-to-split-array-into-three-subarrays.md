---
title: 1712. Ways to Split Array Into Three Subarrays
draft: false
tags: 
  - leetcode-medium
  - array
  - two-pointers
  - binary-search
  - prefix-sum
  - weekly-contest-222
  - contest-question
date: 2021-01-03
---

[Problem Link](https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/)

## Description

---
<p>A split of an integer array is <strong>good</strong> if:</p>

<ul>
	<li>The array is split into three <strong>non-empty</strong> contiguous subarrays - named <code>left</code>, <code>mid</code>, <code>right</code> respectively from left to right.</li>
	<li>The sum of the elements in <code>left</code> is less than or equal to the sum of the elements in <code>mid</code>, and the sum of the elements in <code>mid</code> is less than or equal to the sum of the elements in <code>right</code>.</li>
</ul>

<p>Given <code>nums</code>, an array of <strong>non-negative</strong> integers, return <em>the number of <strong>good</strong> ways to split</em> <code>nums</code>. As the number may be too large, return it <strong>modulo</strong> <code>10<sup>9 </sup>+ 7</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,1,1]
<strong>Output:</strong> 1
<strong>Explanation:</strong> The only good way to split nums is [1] [1] [1].</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,2,2,5,0]
<strong>Output:</strong> 3
<strong>Explanation:</strong> There are three good ways of splitting nums:
[1] [2] [2,2,5,0]
[1] [2,2] [2,5,0]
[1,2] [2,2] [5,0]
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,2,1]
<strong>Output:</strong> 0
<strong>Explanation:</strong> There is no good way to split nums.</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>3 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='ways-to-split-array-into-three-subarrays'
class Solution:
    def waysToSplit(self, nums: List[int]) -> int:
        prefix = [0]
        for num in nums:
            prefix.append(prefix[-1] + num)
            
        n = len(nums)
        M = 10 ** 9 + 7
        res = 0

        for i in range(1, n-1):
            mid = bisect_left(prefix, 2 * prefix[i])
            right = bisect_right(prefix, (prefix[-1] + prefix[i]) // 2)
            res += max(0, min(n,right) - max(i+1, mid))
        
        return res % M
```
### C++
``` cpp title='ways-to-split-array-into-three-subarrays'
class Solution {
public:
    int waysToSplit(vector<int>& nums) {
        int M = 1e9 + 7;
        int n = nums.size();
        
        for (int i = 1; i < n; i++)
            nums[i] += nums[i-1];
        
        long long res = 0;
        for (int i = 0; i < n - 1; i++){
            int left = nums[i];
            int remaining = nums[n-1] - left;
            int max_mid = remaining / 2;
            
            int mid_start = lower_bound(nums.begin()+i+1, nums.end()-1, left * 2) - nums.begin();
            int right_start = upper_bound(nums.begin()+i+1, nums.end()-1, left + max_mid) - nums.begin();
            
            res += max(0, right_start - mid_start);
            res %= M;
        }
        
        return res % M;
    }
};
```
### Java
``` java title='ways-to-split-array-into-three-subarrays'
class Solution {
    public int waysToSplit(int[] nums) {

        int MOD = (int) (1e9 + 7);

        int N = nums.length;

        // prefix array
        int[] A = new int[N];
        A[0] = nums[0];
        for (int i = 1; i < N; ++i) A[i] = A[i - 1] + nums[i];

        int res = 0;
        for (int i = 1; i < N - 1; ++i) {

            int left = helper(A, A[i - 1], i, true);
            int right = helper(A, A[i - 1], i, false);

            if (left == -1 || right == -1) continue;  // none is satisfied

            res = (res + (right - left + 1) % MOD) % MOD;
        }

        return res;
    }

    private int helper(int[] A, int leftSum, int index, boolean searchLeft) {

        int N = A.length;
        int l = index, r = N - 2;
        int res = -1;

        while (l <= r) {

            int m = (r - l) / 2 + l;

            int midSum = A[m] - A[index - 1];
            int rightSum = A[N - 1] - A[m];

            if (leftSum <= midSum && midSum <= rightSum) {
                res = m;
                if (searchLeft) r = m - 1;
                else l = m + 1;
            } else if (leftSum > midSum) {  // shrink left
                l = m + 1;
            } else {  // shrink right
                r = m - 1;
            }
        }

        return res;
    }
}
```

