---
title: 923. 3Sum With Multiplicity
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - two-pointers
  - sorting
  - counting
  - weekly-contest-106
  - contest-question
date: 2020-09-01
---

[Problem Link](https://leetcode.com/problems/3sum-with-multiplicity/)

## Description

---
<p>Given an integer array <code>arr</code>, and an integer <code>target</code>, return the number of tuples <code>i, j, k</code> such that <code>i &lt; j &lt; k</code> and <code>arr[i] + arr[j] + arr[k] == target</code>.</p>

<p>As the answer can be very large, return it <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> arr = [1,1,2,2,3,3,4,4,5,5], target = 8
<strong>Output:</strong> 20
<strong>Explanation: </strong>
Enumerating by the values (arr[i], arr[j], arr[k]):
(1, 2, 5) occurs 8 times;
(1, 3, 4) occurs 8 times;
(2, 2, 4) occurs 2 times;
(2, 3, 3) occurs 2 times.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> arr = [1,1,2,2,2,2], target = 5
<strong>Output:</strong> 12
<strong>Explanation: </strong>
arr[i] = 1, arr[j] = arr[k] = 2 occurs 12 times:
We choose one 1 from [1,1] in 2 ways,
and two 2s from [2,2,2,2] in 6 ways.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> arr = [2,1,3], target = 6
<strong>Output:</strong> 1
<strong>Explanation:</strong> (1, 2, 3) occured one time in the array so we return 1.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>3 &lt;= arr.length &lt;= 3000</code></li>
	<li><code>0 &lt;= arr[i] &lt;= 100</code></li>
	<li><code>0 &lt;= target &lt;= 300</code></li>
</ul>


## Solution

---
### Python3
``` py title='3sum-with-multiplicity'
class Solution:
    def threeSumMulti(self, arr: List[int], target: int) -> int:
        n = len(arr)
        count = Counter()
        M = 10 ** 9 + 7
        res = 0
        
        for i in range(n):
            res = (res + count[target - arr[i]]) % M
            
            for j in range(i):
                m = arr[i] + arr[j]
                
                count[m] += 1
        
        return res
        
```
### Java
``` java title='3sum-with-multiplicity'
class Solution {
    public int threeSumMulti(int[] A, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        
        int res = 0;
        int mod = 1000000007;
        for (int i = 0; i < A.length; i++) {
            res = (res + map.getOrDefault(target - A[i], 0)) % mod;
            
            for (int j = 0; j < i; j++) {
                int temp = A[i] + A[j];
                map.put(temp, map.getOrDefault(temp, 0) + 1);
            }
        }
        return res;
    }
}
```

