---
title: 1394. Find Lucky Integer in an Array
draft: false
tags: 
  - leetcode-easy
  - array
  - hash-table
  - counting
  - weekly-contest-182
  - contest-question
date: 2020-10-12
---

[Problem Link](https://leetcode.com/problems/find-lucky-integer-in-an-array/)

## Description

---
<p>Given an array of integers <code>arr</code>, a <strong>lucky integer</strong> is an integer that has a frequency in the array equal to its value.</p>

<p>Return <em>the largest <strong>lucky integer</strong> in the array</em>. If there is no <strong>lucky integer</strong> return <code>-1</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> arr = [2,2,3,4]
<strong>Output:</strong> 2
<strong>Explanation:</strong> The only lucky number in the array is 2 because frequency[2] == 2.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> arr = [1,2,2,3,3,3]
<strong>Output:</strong> 3
<strong>Explanation:</strong> 1, 2 and 3 are all lucky numbers, return the largest of them.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> arr = [2,2,2,3,3]
<strong>Output:</strong> -1
<strong>Explanation:</strong> There are no lucky numbers in the array.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= arr.length &lt;= 500</code></li>
	<li><code>1 &lt;= arr[i] &lt;= 500</code></li>
</ul>


## Solution

---
### Python3
``` py title='find-lucky-integer-in-an-array'
class Solution:
    def findLucky(self, arr: List[int]) -> int:
        
        C = collections.Counter(arr)
        res = -1
        for c in C:
            if c == C[c]:
                res = max(res, c)
        
        return res
```
### C++
``` cpp title='find-lucky-integer-in-an-array'
class Solution {
public:
    int findLucky(vector<int>& arr) {
        vector<int> freq(501);
        for (auto x : arr) freq[x]++;
        for (int i = 500; i > 0; i--) {
            if (freq[i] == i) return i;
        }
        return -1;
    }
};
```

