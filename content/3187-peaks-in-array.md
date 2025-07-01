---
title: 3187. Peaks in Array
draft: false
tags: 
  - leetcode-hard
  - array
  - binary-indexed-tree
  - segment-tree
  - weekly-contest-402
  - contest-question
date: 2024-06-16
---

[Problem Link](https://leetcode.com/problems/peaks-in-array/)

## Description

---
<p>A <strong>peak</strong> in an array <code>arr</code> is an element that is <strong>greater</strong> than its previous and next element in <code>arr</code>.</p>

<p>You are given an integer array <code>nums</code> and a 2D integer array <code>queries</code>.</p>

<p>You have to process queries of two types:</p>

<ul>
	<li><code>queries[i] = [1, l<sub>i</sub>, r<sub>i</sub>]</code>, determine the count of <strong>peak</strong> elements in the <span data-keyword="subarray">subarray</span> <code>nums[l<sub>i</sub>..r<sub>i</sub>]</code>.<!-- notionvc: 73b20b7c-e1ab-4dac-86d0-13761094a9ae --></li>
	<li><code>queries[i] = [2, index<sub>i</sub>, val<sub>i</sub>]</code>, change <code>nums[index<sub>i</sub>]</code> to <code><font face="monospace">val<sub>i</sub></font></code>.</li>
</ul>

<p>Return an array <code>answer</code> containing the results of the queries of the first type in order.<!-- notionvc: a9ccef22-4061-4b5a-b4cc-a2b2a0e12f30 --></p>

<p><strong>Notes:</strong></p>

<ul>
	<li>The <strong>first</strong> and the <strong>last</strong> element of an array or a subarray<!-- notionvc: fcffef72-deb5-47cb-8719-3a3790102f73 --> <strong>cannot</strong> be a peak.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [3,1,4,2,5], queries = [[2,3,4],[1,0,4]]</span></p>

<p><strong>Output:</strong> <span class="example-io">[0]</span></p>

<p><strong>Explanation:</strong></p>

<p>First query: We change <code>nums[3]</code> to 4 and <code>nums</code> becomes <code>[3,1,4,4,5]</code>.</p>

<p>Second query: The number of peaks in the <code>[3,1,4,4,5]</code> is 0.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [4,1,4,2,1,5], queries = [[2,2,4],[1,0,2],[1,0,4]]</span></p>

<p><strong>Output:</strong> <span class="example-io">[0,1]</span></p>

<p><strong>Explanation:</strong></p>

<p>First query: <code>nums[2]</code> should become 4, but it is already set to 4.</p>

<p>Second query: The number of peaks in the <code>[4,1,4]</code> is 0.</p>

<p>Third query: The second 4 is a peak in the <code>[4,1,4,2,1]</code>.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>3 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= queries.length &lt;= 10<sup>5</sup></code></li>
	<li><code>queries[i][0] == 1</code> or <code>queries[i][0] == 2</code></li>
	<li>For all <code>i</code> that:
	<ul>
		<li><code>queries[i][0] == 1</code>: <code>0 &lt;= queries[i][1] &lt;= queries[i][2] &lt;= nums.length - 1</code></li>
		<li><code>queries[i][0] == 2</code>: <code>0 &lt;= queries[i][1] &lt;= nums.length - 1</code>, <code>1 &lt;= queries[i][2] &lt;= 10<sup>5</sup></code></li>
	</ul>
	</li>
</ul>


## Solution

---
### C++
``` cpp title='peaks-in-array'
const int MAXN = 100005;

class Solution {
public:
    int arr[MAXN];
    int t[4 * MAXN];
    
    void build(int a[], int v, int tl, int tr) {
        if (tl == tr) {
            t[v] = a[tl];
        } else {
            int tm = (tl + tr) / 2;
            build(a, v*2, tl, tm);
            build(a, v*2+1, tm+1, tr);
            t[v] = t[v*2] + t[v*2 + 1];
        }
    }
    
    void update(int v, int tl, int tr, int pos, int new_val) {
        if (tl == tr) {
            t[v] = new_val;
        } else {
            int tm = (tl + tr) / 2;
            if (pos <= tm)
                update(v*2, tl, tm, pos, new_val);
            else
                update(v*2+1, tm+1, tr, pos, new_val);
            t[v] = t[v*2] + t[v*2+1];
        }
    }

    int query(int v, int tl, int tr, int l, int r) {
        if (l > r)
            return 0;
        if (l == tl && tr == r)
            return t[v];
        
        int tm = (tl + tr) / 2;
        return query(v*2, tl, tm, l, min(r, tm)) + query(v*2+1, tm+1, tr, max(l, tm+1), r);
    }
    
    vector<int> countOfPeaks(vector<int>& nums, vector<vector<int>>& queries) {
        int N = nums.size();
        memset(arr, 0, sizeof arr);
        
        for (int i = 1; i < N - 1; i++) {
            arr[i] = nums[i] > nums[i - 1] && nums[i] > nums[i + 1];
        }
        
        vector<int> ans;
        build(arr, 1, 0, MAXN - 1);

        for (auto& q: queries) {
            if (q[0] == 1) {
                int v = query(1, 0, MAXN - 1, q[1] + 1, q[2] - 1);
                ans.push_back(v);
            } else {
                int index = q[1], val = q[2];
                nums[index] = val;
                
                for (int i = index - 1; i <= index + 1; i++) {
                    int count = (i > 0 && i < N - 1 && nums[i] > nums[i - 1] && nums[i] > nums[i + 1]);
                    if (i < nums.size() - 1 && count != arr[i]) {
                        update(1, 0, MAXN - 1, i, count);
                        arr[i] = count;
                    }
                }
            }

        }
        
        return ans;
    }
};
```
### Python3
``` py title='peaks-in-array'
class SegmentTree:
	def __init__(self, arr):
		self.n = len(arr)
		self.tree = [0] * (4 * self.n)		
		self._build(1, 0, self.n - 1, arr)

	def _build(self, v, tl, tr, arr):
		if tl == tr:
			self.tree[v] = arr[tl]
		else:
			tm = tl + (tr - tl) // 2
			self._build(v * 2, tl, tm, arr)
			self._build(v * 2 + 1, tm + 1, tr, arr)
			self.tree[v] = self.tree[v * 2] + self.tree[v * 2 + 1]

	def query(self, v, tl, tr, l, r):
		if l > r: return 0
		
		if tl == l and tr == r:
			return self.tree[v]
		else:
			tm = tl + (tr - tl) // 2
			
			return self.query(v * 2, tl, tm, l, min(tm, r)) + self.query(v * 2 + 1, tm + 1, tr, max(tm + 1, l), r)

	def update(self, v, tl, tr, pos, value):
		if tl == tr:
			self.tree[v] = value
		else:
			tm = tl + (tr - tl) // 2

			if pos <= tm:
				self.update(v * 2, tl, tm, pos, value)
			else:
				self.update(v * 2 + 1, tm + 1, tr, pos, value)

			self.tree[v] = self.tree[v * 2] + self.tree[v * 2 + 1]
            
class Solution:
    def countOfPeaks(self, nums: List[int], queries: List[List[int]]) -> List[int]:
        N = len(nums)
        isPeaked = [0] * N
        res = []
        
        def isPeak(j):
            return int(0 < j < N - 1 and nums[j] > nums[j - 1] and nums[j] > nums[j + 1])
        
        for i in range(1, N - 1):
            isPeaked[i] = isPeak(i)
        
        st = SegmentTree(isPeaked)
        
        for query in queries:
            if query[0] == 1:
                _, l, r = query
                v = st.query(1, 0, N - 1, l + 1, r - 1)
                res.append(v)
            else:
                _, index, val = query
                nums[index] = val
                
                for j in [index - 1, index, index + 1]:
                    count = isPeak(j)
                    if j < N and count != isPeaked[j]:
                        st.update(1, 0, N - 1, j, count)
                        isPeaked[j] = count
        
        return res
```

