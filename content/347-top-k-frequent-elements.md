---
title: 347. Top K Frequent Elements
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - divide-and-conquer
  - sorting
  - heap-priority-queue
  - bucket-sort
  - counting
  - quickselect
date: 2020-10-16
---

[Problem Link](https://leetcode.com/problems/top-k-frequent-elements/)

## Description

---
<p>Given an integer array <code>nums</code> and an integer <code>k</code>, return <em>the</em> <code>k</code> <em>most frequent elements</em>. You may return the answer in <strong>any order</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [1,1,1,2,2,3], k = 2
<strong>Output:</strong> [1,2]
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [1], k = 1
<strong>Output:</strong> [1]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
	<li><code>k</code> is in the range <code>[1, the number of unique elements in the array]</code>.</li>
	<li>It is <strong>guaranteed</strong> that the answer is <strong>unique</strong>.</li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong> Your algorithm&#39;s time complexity must be better than <code>O(n log n)</code>, where n is the array&#39;s size.</p>


## Solution

---
### Python3
``` py title='top-k-frequent-elements'
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        counter = Counter(nums)
        pq = []

        for key, v in counter.items():
            if len(pq) == k:
                heappushpop(pq, (v, key))
            else:
                heappush(pq, (v, key))
        
        return [key for _, key in pq]
```
### C++
``` cpp title='top-k-frequent-elements'
class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        unordered_map<int,int> mp;
        
        for (int num: nums)
            ++mp[num];
        
        
        vector<vector<int>> buckets(nums.size() + 1); 
        for (auto v: mp)
            buckets[v.second].push_back(v.first);
        
        
        vector<int> res;
        for (int i = buckets.size() - 1; i >= 0 && res.size() < k; --i){
            for (int num : buckets[i]){
                res.push_back(num);
                
                if (res.size() == k)
                    break;
            }
        }
        
        return res;
    }
};
```

