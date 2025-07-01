---
title: 1566. Detect Pattern of Length M Repeated K or More Times
draft: false
tags: 
  - leetcode-easy
  - array
  - enumeration
  - weekly-contest-204
  - contest-question
date: 2020-08-30
---

[Problem Link](https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/)

## Description

---
<p>Given an array of positive integers <code>arr</code>, find a pattern of length <code>m</code> that is repeated <code>k</code> or more times.</p>

<p>A <strong>pattern</strong> is a subarray (consecutive sub-sequence) that consists of one or more values, repeated multiple times <strong>consecutively </strong>without overlapping. A pattern is defined by its length and the number of repetitions.</p>

<p>Return <code>true</code> <em>if there exists a pattern of length</em> <code>m</code> <em>that is repeated</em> <code>k</code> <em>or more times, otherwise return</em> <code>false</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> arr = [1,2,4,4,4,4], m = 1, k = 3
<strong>Output:</strong> true
<strong>Explanation: </strong>The pattern <strong>(4)</strong> of length 1 is repeated 4 consecutive times. Notice that pattern can be repeated k or more times but not less.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> arr = [1,2,1,2,1,1,1,3], m = 2, k = 2
<strong>Output:</strong> true
<strong>Explanation: </strong>The pattern <strong>(1,2)</strong> of length 2 is repeated 2 consecutive times. Another valid pattern <strong>(2,1) is</strong> also repeated 2 times.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> arr = [1,2,1,2,1,3], m = 2, k = 3
<strong>Output:</strong> false
<strong>Explanation: </strong>The pattern (1,2) is of length 2 but is repeated only 2 times. There is no pattern of length 2 that is repeated 3 or more times.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= arr.length &lt;= 100</code></li>
	<li><code>1 &lt;= arr[i] &lt;= 100</code></li>
	<li><code>1 &lt;= m &lt;= 100</code></li>
	<li><code>2 &lt;= k &lt;= 100</code></li>
</ul>


## Solution

---
### Python3
``` py title='detect-pattern-of-length-m-repeated-k-or-more-times'
class Solution:
    def containsPattern(self, arr: List[int], m: int, k: int) -> bool:
        n = len(arr)
        res = 0
        
        for i in range(n-m):
            
            if arr[i] != arr[i+m]:
                res = 0
                
            res += (arr[i] == arr[i+m])
            
            if res == (k-1)*m:
                return True
        
        return False
            
```
### C++
``` cpp title='detect-pattern-of-length-m-repeated-k-or-more-times'
class Solution {
public:
    bool containsPattern(vector<int>& arr, int m, int k) {
        int cnt=0;
        for(int i=0;i+m < arr.size(); i++){
            
            if(arr[i]!=arr[i+m]){
              cnt=0;  
            }
            cnt += (arr[i] == arr[i+m]);
            if(cnt == (k-1)*m)
                return true;
            
        }
        return false;
    }
};
```

