---
title: 3445. Maximum Difference Between Even and Odd Frequency II
draft: false
tags: 
  - leetcode-hard
  - string
  - sliding-window
  - enumeration
  - prefix-sum
date: 2025-06-12
---

[Problem Link](https://leetcode.com/problems/maximum-difference-between-even-and-odd-frequency-ii/)

## Description

---
<p>You are given a string <code>s</code> and an integer <code>k</code>. Your task is to find the <strong>maximum</strong> difference between the frequency of <strong>two</strong> characters, <code>freq[a] - freq[b]</code>, in a <span data-keyword="substring">substring</span> <code>subs</code> of <code>s</code>, such that:</p>

<ul>
	<li><code>subs</code> has a size of <strong>at least</strong> <code>k</code>.</li>
	<li>Character <code>a</code> has an <em>odd frequency</em> in <code>subs</code>.</li>
	<li>Character <code>b</code> has a <strong>non-zero</strong> <em>even frequency</em> in <code>subs</code>.</li>
</ul>

<p>Return the <strong>maximum</strong> difference.</p>

<p><strong>Note</strong> that <code>subs</code> can contain more than 2 <strong>distinct</strong> characters.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;12233&quot;, k = 4</span></p>

<p><strong>Output:</strong> <span class="example-io">-1</span></p>

<p><strong>Explanation:</strong></p>

<p>For the substring <code>&quot;12233&quot;</code>, the frequency of <code>&#39;1&#39;</code> is 1 and the frequency of <code>&#39;3&#39;</code> is 2. The difference is <code>1 - 2 = -1</code>.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;1122211&quot;, k = 3</span></p>

<p><strong>Output:</strong> <span class="example-io">1</span></p>

<p><strong>Explanation:</strong></p>

<p>For the substring <code>&quot;11222&quot;</code>, the frequency of <code>&#39;2&#39;</code> is 3 and the frequency of <code>&#39;1&#39;</code> is 2. The difference is <code>3 - 2 = 1</code>.</p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;110&quot;, k = 3</span></p>

<p><strong>Output:</strong> <span class="example-io">-1</span></p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>3 &lt;= s.length &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>s</code> consists only of digits <code>&#39;0&#39;</code> to <code>&#39;4&#39;</code>.</li>
	<li>The input is generated that at least one substring has a character with an even frequency and a character with an odd frequency.</li>
	<li><code>1 &lt;= k &lt;= s.length</code></li>
</ul>


## Solution

---
### Python3
``` py title='maximum-difference-between-even-and-odd-frequency-ii'
import numpy as np

class Solution:
    def maxDifference(self, s: str, k: int) -> int:
        n = len(s)
        arr = np.frombuffer(s.encode('ascii'), dtype=np.uint8) - ord('0')
        pre = np.empty((5, n), dtype=np.int64)
        for x in range(5):
            is_x = (arr == x).astype(np.int64)
            pre[x] = np.cumsum(is_x)
        closest_right = np.full((5, n), n, dtype=np.int64)
        for x in range(5):
            indices = np.flatnonzero(arr == x)
            if indices.size:
                pos = np.searchsorted(indices, np.arange(n))
                valid = pos < indices.size
                closest_right[x, valid] = indices[pos[valid]]
        
        best = -10**9
        for odd in range(5):
            for even in range(5):
                if odd == even:
                    continue
                odd_pre = pre[odd]
                even_pre = pre[even]
                
                odd_parity = (odd_pre % 2).astype(np.int64)
                even_parity = (even_pre % 2).astype(np.int64)
                
                suf = np.full((2, 2, n), -10**9, dtype=np.int64)
                
                valid_mask = (odd_pre > 0) & (even_pre > 0)
                diff = odd_pre - even_pre
                idx = np.where(valid_mask)[0]
                
                suf[odd_parity[idx], even_parity[idx], idx] = diff[idx]
                
                
                for p in (0, 1):
                    for q in (0, 1):
                        suf[p, q] = np.maximum.accumulate(suf[p, q][::-1])[::-1]
                
                m = n - k + 1
                start_idx = np.arange(m, dtype=np.int64)

                odd_below = np.where(start_idx == 0, 0, odd_pre[start_idx - 1])
                even_below = np.where(start_idx == 0, 0, even_pre[start_idx - 1])
                
                good_odd_parity = (odd_below + 1) % 2
                good_even_parity = even_below % 2
               
                q1 = start_idx + k - 1
                q2 = closest_right[odd, start_idx]
                q3 = closest_right[even, start_idx]
                query = np.maximum.reduce([q1, q2, q3])
                
                valid_q = query < n
                candidate = -10**9 * np.ones(m, dtype=np.int64)
                
                for p in (0, 1):
                    for q in (0, 1):
                        mask = (good_odd_parity == p) & (good_even_parity == q) & valid_q
                        if np.any(mask):
                            candidate[mask] = np.maximum(candidate[mask],
                                                         suf[p, q][query[mask]] - odd_below[mask] + even_below[mask])
                best = max(best, candidate.max())
        return int(best)
```

