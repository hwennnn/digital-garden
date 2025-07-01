---
title: 1395. Count Number of Teams
draft: false
tags: 
  - leetcode-medium
  - array
  - dynamic-programming
  - binary-indexed-tree
  - segment-tree
  - weekly-contest-182
  - contest-question
date: 2024-07-29
---

[Problem Link](https://leetcode.com/problems/count-number-of-teams/)

## Description

---
<p>There are <code>n</code> soldiers standing in a line. Each soldier is assigned a <strong>unique</strong> <code>rating</code> value.</p>

<p>You have to form a team of 3 soldiers amongst them under the following rules:</p>

<ul>
	<li>Choose 3 soldiers with index (<code>i</code>, <code>j</code>, <code>k</code>) with rating (<code>rating[i]</code>, <code>rating[j]</code>, <code>rating[k]</code>).</li>
	<li>A team is valid if: (<code>rating[i] &lt; rating[j] &lt; rating[k]</code>) or (<code>rating[i] &gt; rating[j] &gt; rating[k]</code>) where (<code>0 &lt;= i &lt; j &lt; k &lt; n</code>).</li>
</ul>

<p>Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams).</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> rating = [2,5,3,4,1]
<strong>Output:</strong> 3
<strong>Explanation:</strong> We can form three teams given the conditions. (2,3,4), (5,4,1), (5,3,1). 
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> rating = [2,1,3]
<strong>Output:</strong> 0
<strong>Explanation:</strong> We can&#39;t form any team given the conditions.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> rating = [1,2,3,4]
<strong>Output:</strong> 4
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == rating.length</code></li>
	<li><code>3 &lt;= n &lt;= 1000</code></li>
	<li><code>1 &lt;= rating[i] &lt;= 10<sup>5</sup></code></li>
	<li>All the integers in <code>rating</code> are <strong>unique</strong>.</li>
</ul>


## Solution

---
### C++
``` cpp title='count-number-of-teams'
class Solution {
public:
    int numTeams(vector<int>& rating) {
        int N = rating.size(), res = 0;

        for (int j = 1; j < N - 1; j++) {
            int leftSmaller = 0, leftBigger = 0;

            for (int i = 0; i < j; i++) {
                if (rating[i] < rating[j]) leftSmaller++;
                if (rating[i] > rating[j]) leftBigger++;
            }

            int rightSmaller = 0, rightBigger = 0;
            
            for (int k = j + 1; k < N; k++) {
                if (rating[k] > rating[j]) rightBigger++;
                if (rating[k] < rating[j]) rightSmaller++;
            }

            res += leftSmaller * rightBigger;
            res += leftBigger * rightSmaller;
        }

        return res;
    }
};
```
### Python3
``` py title='count-number-of-teams'
class Solution:
    def numTeams(self, rating: List[int]) -> int:
        res = 0
        for i in range(len(rating)):
            ls = rs = lb = rb = 0
            
            for j in range(i-1,-1,-1):
                if rating[j] < rating[i]:
                    ls += 1
                elif rating[j] > rating[i]:
                    lb += 1
            
            for j in range(i+1,len(rating)):
                if rating[j] > rating[i]:
                    rb += 1
                elif rating[j] < rating[i]:
                    rs += 1

            res += ls*rb + lb*rs
        return res
            
```

