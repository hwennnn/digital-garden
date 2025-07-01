---
title: 2305. Fair Distribution of Cookies
draft: false
tags: 
  - leetcode-medium
  - array
  - dynamic-programming
  - backtracking
  - bit-manipulation
  - bitmask
  - weekly-contest-297
  - contest-question
date: 2023-07-01
---

[Problem Link](https://leetcode.com/problems/fair-distribution-of-cookies/)

## Description

---
<p>You are given an integer array <code>cookies</code>, where <code>cookies[i]</code> denotes the number of cookies in the <code>i<sup>th</sup></code> bag. You are also given an integer <code>k</code> that denotes the number of children to distribute <strong>all</strong> the bags of cookies to. All the cookies in the same bag must go to the same child and cannot be split up.</p>

<p>The <strong>unfairness</strong> of a distribution is defined as the <strong>maximum</strong> <strong>total</strong> cookies obtained by a single child in the distribution.</p>

<p>Return <em>the <strong>minimum</strong> unfairness of all distributions</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> cookies = [8,15,10,20,8], k = 2
<strong>Output:</strong> 31
<strong>Explanation:</strong> One optimal distribution is [8,15,8] and [10,20]
- The 1<sup>st</sup> child receives [8,15,8] which has a total of 8 + 15 + 8 = 31 cookies.
- The 2<sup>nd</sup> child receives [10,20] which has a total of 10 + 20 = 30 cookies.
The unfairness of the distribution is max(31,30) = 31.
It can be shown that there is no distribution with an unfairness less than 31.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> cookies = [6,1,3,2,2,4,1,2], k = 3
<strong>Output:</strong> 7
<strong>Explanation:</strong> One optimal distribution is [6,1], [3,2,2], and [4,1,2]
- The 1<sup>st</sup> child receives [6,1] which has a total of 6 + 1 = 7 cookies.
- The 2<sup>nd</sup> child receives [3,2,2] which has a total of 3 + 2 + 2 = 7 cookies.
- The 3<sup>rd</sup> child receives [4,1,2] which has a total of 4 + 1 + 2 = 7 cookies.
The unfairness of the distribution is max(7,7,7) = 7.
It can be shown that there is no distribution with an unfairness less than 7.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= cookies.length &lt;= 8</code></li>
	<li><code>1 &lt;= cookies[i] &lt;= 10<sup>5</sup></code></li>
	<li><code>2 &lt;= k &lt;= cookies.length</code></li>
</ul>


## Solution

---
### Python3
``` py title='fair-distribution-of-cookies'
class Solution:
    def distributeCookies(self, cookies: List[int], k: int) -> int:
        n = len(cookies)
        INF = 10 ** 20
        total = [0] * (1 << n)
        
        for mask in range(1 << n):
            m = 0
            for j in range(n):
                if mask & (1 << j) > 0:
                    m += cookies[j]
            total[mask] = m
        
        @cache
        def go(index, mask):
            if index == k:
                return 0 if mask == 0 else INF
            
            res = INF
            sub = mask
            
            while sub > 0:
                res = min(res, max(total[sub], go(index + 1, mask ^ sub)))
                sub = (sub - 1) & mask
        
            return res
        
        return go(0, (1 << n) - 1)
```
### C++
``` cpp title='fair-distribution-of-cookies'
class Solution {
public:
    int ans = INT_MAX;
    void solve(int start, vector<int>& nums, vector<int>& v, int k){
        if(start==nums.size()){
            int maxm = INT_MIN;
            for(int i=0;i<k;i++){
                maxm = max(maxm,v[i]);
            }
            ans = min(ans,maxm);
            return;
        }
        for(int i=0;i<k;i++){
            v[i] += nums[start];
            solve(start+1,nums,v,k);
            v[i] -= nums[start];
        }
    }
    
    int distributeCookies(vector<int>& nums, int k) { // nums is the cookies vector
        int n = nums.size();
        vector<int> v(k,0); // v is to store each sum of the k subsets
        solve(0,nums,v,k);
        return ans;
    }
};
```

