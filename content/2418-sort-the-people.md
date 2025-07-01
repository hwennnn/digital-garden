---
title: 2418. Sort the People
draft: false
tags: 
  - leetcode-easy
  - array
  - hash-table
  - string
  - sorting
  - weekly-contest-312
  - contest-question
date: 2022-09-25
---

[Problem Link](https://leetcode.com/problems/sort-the-people/)

## Description

---
<p>You are given an array of strings <code>names</code>, and an array <code>heights</code> that consists of <strong>distinct</strong> positive integers. Both arrays are of length <code>n</code>.</p>

<p>For each index <code>i</code>, <code>names[i]</code> and <code>heights[i]</code> denote the name and height of the <code>i<sup>th</sup></code> person.</p>

<p>Return <code>names</code><em> sorted in <strong>descending</strong> order by the people&#39;s heights</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> names = [&quot;Mary&quot;,&quot;John&quot;,&quot;Emma&quot;], heights = [180,165,170]
<strong>Output:</strong> [&quot;Mary&quot;,&quot;Emma&quot;,&quot;John&quot;]
<strong>Explanation:</strong> Mary is the tallest, followed by Emma and John.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> names = [&quot;Alice&quot;,&quot;Bob&quot;,&quot;Bob&quot;], heights = [155,185,150]
<strong>Output:</strong> [&quot;Bob&quot;,&quot;Alice&quot;,&quot;Bob&quot;]
<strong>Explanation:</strong> The first Bob is the tallest, followed by Alice and the second Bob.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == names.length == heights.length</code></li>
	<li><code>1 &lt;= n &lt;= 10<sup>3</sup></code></li>
	<li><code>1 &lt;= names[i].length &lt;= 20</code></li>
	<li><code>1 &lt;= heights[i] &lt;= 10<sup>5</sup></code></li>
	<li><code>names[i]</code> consists of lower and upper case English letters.</li>
	<li>All the values of <code>heights</code> are distinct.</li>
</ul>


## Solution

---
### C++
``` cpp title='sort-the-people'
class Solution {
public:
    vector<string> sortPeople(vector<string>& names, vector<int>& heights) {
        int N = names.size();
        vector<int> idx(N);
        for (int i = 0; i < N; i++) idx[i] = i;

        sort(idx.begin(), idx.end(), [&](int i, int j) {
            return heights[i] > heights[j];
        });

        vector<string> ans(N);

        for (int i = 0; i < N; i++) {
            ans[i] = names[idx[i]];
        }

        return ans;
    }
};
```
### Python3
``` py title='sort-the-people'
class Solution:
    def sortPeople(self, names: List[str], heights: List[int]) -> List[str]:
        A = sorted([(a, b) for a, b in zip(names, heights)], key = lambda x : (-x[1]))
        
        return [a for a, _ in A]
```

