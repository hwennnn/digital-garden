---
title: 1054. Distant Barcodes
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - greedy
  - sorting
  - heap-priority-queue
  - counting
  - weekly-contest-138
  - contest-question
date: 2021-06-05
---

[Problem Link](https://leetcode.com/problems/distant-barcodes/)

## Description

---
<p>In a warehouse, there is a row of barcodes, where the <code>i<sup>th</sup></code> barcode is <code>barcodes[i]</code>.</p>

<p>Rearrange the barcodes so that no two adjacent barcodes are equal. You may return any answer, and it is guaranteed an answer exists.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> barcodes = [1,1,1,2,2,2]
<strong>Output:</strong> [2,1,2,1,2,1]
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> barcodes = [1,1,1,1,2,2,3,3]
<strong>Output:</strong> [1,3,1,3,1,2,1,2]
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= barcodes.length &lt;= 10000</code></li>
	<li><code>1 &lt;= barcodes[i] &lt;= 10000</code></li>
</ul>


## Solution

---
### Python3
``` py title='distant-barcodes'
class Solution:
    def rearrangeBarcodes(self, barcodes: List[int]) -> List[int]:
        counter = collections.Counter(barcodes)
        count = sorted([(counter[x], x) for x in counter], key = lambda x : -x[0])
        i = 0
        n = len(barcodes)
        res = [None] * n
        
        for cnt,key in count:
            for _ in range(cnt):
                if i >= n: i = 1
                res[i] = key
                i += 2
        
        return res
        
```

