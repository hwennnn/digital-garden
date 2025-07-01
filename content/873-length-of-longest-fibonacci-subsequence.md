---
title: 873. Length of Longest Fibonacci Subsequence
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - dynamic-programming
  - weekly-contest-94
  - contest-question
date: 2020-08-11
---

[Problem Link](https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/)

## Description

---
<p>A sequence <code>x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>n</sub></code> is <em>Fibonacci-like</em> if:</p>

<ul>
	<li><code>n &gt;= 3</code></li>
	<li><code>x<sub>i</sub> + x<sub>i+1</sub> == x<sub>i+2</sub></code> for all <code>i + 2 &lt;= n</code></li>
</ul>

<p>Given a <b>strictly increasing</b> array <code>arr</code> of positive integers forming a sequence, return <em>the <strong>length</strong> of the longest Fibonacci-like subsequence of</em> <code>arr</code>. If one does not exist, return <code>0</code>.</p>

<p>A <strong>subsequence</strong> is derived from another sequence <code>arr</code> by deleting any number of elements (including none) from <code>arr</code>, without changing the order of the remaining elements. For example, <code>[3, 5, 8]</code> is a subsequence of <code>[3, 4, 5, 6, 7, 8]</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> arr = [1,2,3,4,5,6,7,8]
<strong>Output:</strong> 5
<strong>Explanation:</strong> The longest subsequence that is fibonacci-like: [1,2,3,5,8].</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> arr = [1,3,7,11,12,14,18]
<strong>Output:</strong> 3
<strong>Explanation</strong>:<strong> </strong>The longest subsequence that is fibonacci-like: [1,11,12], [3,11,14] or [7,11,18].</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>3 &lt;= arr.length &lt;= 1000</code></li>
	<li><code>1 &lt;= arr[i] &lt; arr[i + 1] &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### C++
``` cpp title='length-of-longest-fibonacci-subsequence'
class Solution {
public:
   int lenLongestFibSubseq(vector<int>& A) {
        unordered_set<int> s(A.begin(), A.end());
        int res = 0;
        for (int i = 0; i < A.size(); i++){
            for (int j = i+1; j < A.size(); j++){
                int first = A[i], second = A[j], l = 2;
                
                while (s.count(first+second)){
                    second = first+second, first = second-first, ++l;
                    res = max(res, l);
                }
            }
        }
       
       return res > 2 ? res : 0;
    }
};


```
### Python3
``` py title='length-of-longest-fibonacci-subsequence'
class Solution:
    def lenLongestFibSubseq(self, arr: List[int]) -> int:
        N = len(arr)
        s = set(arr)
        res = 0

        for i in range(N):
            for j in range(i + 1, N):
                a, b = arr[i], arr[j]
                count = 2

                while a + b in s:
                    a, b = b, a + b
                    count += 1
                
                res = max(res, count)
        
        if res < 3: return 0

        return res
            

```

