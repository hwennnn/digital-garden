---
title: 2916. Subarrays Distinct Element Sum of Squares II
draft: false
tags: 
  - leetcode-hard
  - array
  - dynamic-programming
  - binary-indexed-tree
  - segment-tree
  - biweekly-contest-116
  - contest-question
date: 2023-11-01
---

[Problem Link](https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-ii/)

## Description

---
<p>You are given a <strong>0-indexed </strong>integer array <code>nums</code>.</p>

<p>The <strong>distinct count</strong> of a subarray of <code>nums</code> is defined as:</p>

<ul>
	<li>Let <code>nums[i..j]</code> be a subarray of <code>nums</code> consisting of all the indices from <code>i</code> to <code>j</code> such that <code>0 &lt;= i &lt;= j &lt; nums.length</code>. Then the number of distinct values in <code>nums[i..j]</code> is called the distinct count of <code>nums[i..j]</code>.</li>
</ul>

<p>Return <em>the sum of the <strong>squares</strong> of <strong>distinct counts</strong> of all subarrays of </em><code>nums</code>.</p>

<p>Since the answer may be very large, return it <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>

<p>A subarray is a contiguous <strong>non-empty</strong> sequence of elements within an array.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,1]
<strong>Output:</strong> 15
<strong>Explanation:</strong> Six possible subarrays are:
[1]: 1 distinct value
[2]: 1 distinct value
[1]: 1 distinct value
[1,2]: 2 distinct values
[2,1]: 2 distinct values
[1,2,1]: 2 distinct values
The sum of the squares of the distinct counts in all subarrays is equal to 1<sup>2</sup> + 1<sup>2</sup> + 1<sup>2</sup> + 2<sup>2</sup> + 2<sup>2</sup> + 2<sup>2</sup> = 15.
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,2]
<strong>Output:</strong> 3
<strong>Explanation:</strong> Three possible subarrays are:
[2]: 1 distinct value
[2]: 1 distinct value
[2,2]: 1 distinct value
The sum of the squares of the distinct counts in all subarrays is equal to 1<sup>2</sup> + 1<sup>2</sup> + 1<sup>2</sup> = 3.</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='subarrays-distinct-element-sum-of-squares-ii'
MOD = 1000000007

class LazySegmentTree:
    def __init__(self, N):
        self.n = N
        self.tree = [0] * (4 * self.n)
        self.lazy = [0] * (4 * self.n)

    def query(self, v, tl, tr, l, r):
        self.push(v, tl, tr)

        if tr < l or tl > r:
            return 0

        if tl >= l and tr <= r:
            res = self.tree[v] % MOD
            self.lazy[v] += 1
            self.push(v, tl, tr)
            return res
        else:
            tm = tl + (tr - tl) // 2

            res = (self.query(2 * v, tl, tm, l, min(tm, r)) + self.query(2 * v + 1, tm + 1, tr, max(tm + 1, l), r)) % MOD
            self.tree[v] = (self.tree[2 * v] + self.tree[2 * v + 1]) % MOD

            return res

    def push(self, v, tl, tr):
        if self.lazy[v] != 0:
            self.tree[v] += (tr - tl + 1) * self.lazy[v]

            if tl < tr:
                self.lazy[2 * v] += self.lazy[v]
                self.lazy[2 * v + 1] += self.lazy[v]

            self.lazy[v] = 0

class Solution:
    def sumCounts(self, nums):
        N = len(nums)
        st = LazySegmentTree(N)
        last_seen = defaultdict(lambda : -1)
        curr = 0
        res = 0

        for i in range(N):
            x = nums[i]
            last = last_seen[x] + 1
            queryLength = i - last + 1
            curr = (curr + queryLength + 2 * st.query(1, 0, N - 1, last, i)) % MOD
            res = (res + curr) % MOD
            last_seen[x] = i

        return res

```
### C++
``` cpp title='subarrays-distinct-element-sum-of-squares-ii'
const int MOD = 1000000007;

class LazySegmentTree {
public:
    LazySegmentTree(int N) {
        n = N;
        tree.assign(4 * n, 0);
        lazy.assign(4 * n, 0);
    }

    int query(int v, int tl, int tr, int l, int r) {
        lazy_update(v, tl, tr);

        if (tr < l || tl > r) return 0;
        
        if (tl >= l && tr <= r) {
            return tree[v] % MOD;
        } else {
            int tm = tl + (tr - tl) / 2;

            return (query(2 * v, tl, tm, l, min(tm, r)) + query(2 * v + 1, tm + 1, tr, max(tm + 1, l), r)) % MOD;
        }
    }

    void lazy_update(int v, int tl, int tr) {
        if (lazy[v] != 0) {
            tree[v] += (tr - tl + 1) * lazy[v];
            tree[v] %= MOD;

            if (tl < tr) {
                lazy[2 * v] += lazy[v];
                lazy[2 * v] %= MOD;
                lazy[2 * v + 1] += lazy[v];
                lazy[2 * v + 1] %= MOD;
            }

            lazy[v] = 0;
        }
    }

    void range_update(int v, int tl, int tr, int l, int r, int value) {
        lazy_update(v, tl, tr);

        if (tr < l || tl > r) return;

        if (tl >= l and tr <= r) {
            lazy[v] += value;
            lazy[v] %= MOD;
            lazy_update(v, tl, tr);
        } else {
            int tm = tl + (tr - tl) / 2;

            range_update(2 * v, tl, tm, l, min(tm, r), value);
            range_update(2 * v + 1, tm + 1, tr, max(tm + 1, l), r, value);
            tree[v] = (tree[2 * v] + tree[2 * v + 1]) % MOD;
        }
    }

private:
    int n;
    vector<int> tree;
    vector<int> lazy;
};

class Solution {
public:
    int sumCounts(vector<int>& nums) {
        int N = nums.size();
        LazySegmentTree st(N);
        unordered_map<int, int> last_seen;
        long long curr = 0;
        long long res = 0;

        for (int i = 0; i < N; i++) {
            int x = nums[i];
            int last = (last_seen.find(x) != last_seen.end() ? last_seen[x]: -1) + 1;
            int queryLength = i - last + 1;
            curr = (curr + queryLength + 2 * st.query(1, 0, N - 1, last, i)) % MOD;
            st.range_update(1, 0, N - 1, last, i, 1);
            res = (res + curr) % MOD;
            last_seen[x] = i;
        }

        return (int) res;
    }
};

```

