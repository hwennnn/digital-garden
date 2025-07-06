---
title: 3333. Find the Original Typed String II
draft: false
tags: 
  - leetcode-hard
  - string
  - dynamic-programming
  - prefix-sum
  - biweekly-contest-142
  - contest-question
date: 2025-07-03
---

[Problem Link](https://leetcode.com/problems/find-the-original-typed-string-ii/)

## Description

---
<p>Alice is attempting to type a specific string on her computer. However, she tends to be clumsy and <strong>may</strong> press a key for too long, resulting in a character being typed <strong>multiple</strong> times.</p>

<p>You are given a string <code>word</code>, which represents the <strong>final</strong> output displayed on Alice&#39;s screen. You are also given a <strong>positive</strong> integer <code>k</code>.</p>

<p>Return the total number of <em>possible</em> original strings that Alice <em>might</em> have intended to type, if she was trying to type a string of size <strong>at least</strong> <code>k</code>.</p>

<p>Since the answer may be very large, return it <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">word = &quot;aabbccdd&quot;, k = 7</span></p>

<p><strong>Output:</strong> <span class="example-io">5</span></p>

<p><strong>Explanation:</strong></p>

<p>The possible strings are: <code>&quot;aabbccdd&quot;</code>, <code>&quot;aabbccd&quot;</code>, <code>&quot;aabbcdd&quot;</code>, <code>&quot;aabccdd&quot;</code>, and <code>&quot;abbccdd&quot;</code>.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">word = &quot;aabbccdd&quot;, k = 8</span></p>

<p><strong>Output:</strong> <span class="example-io">1</span></p>

<p><strong>Explanation:</strong></p>

<p>The only possible string is <code>&quot;aabbccdd&quot;</code>.</p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">word = &quot;aaabbb&quot;, k = 3</span></p>

<p><strong>Output:</strong> <span class="example-io">8</span></p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= word.length &lt;= 5 * 10<sup>5</sup></code></li>
	<li><code>word</code> consists only of lowercase English letters.</li>
	<li><code>1 &lt;= k &lt;= 2000</code></li>
</ul>


## Solution

---
### C++
``` cpp title='find-the-original-typed-string-ii'
class Solution {
public:
    vector<long long> buildFreqArray(string& word) {
        vector<long long> freq;
        int n = word.size(), i = 0;
        while (i < n) {
            i++;
            int f = 1;
            while ((i < n) && (word[i] == word[i - 1]))
                i++, f++;
            freq.push_back(f);
        }
        return freq;
    }
    int findTotal(vector<long long>& freq, long long mod) {
        long long ans = 1;
        for (auto f : freq) {
            ans = (ans * f) % mod;
        }
        return ans;
    }
    int possibleStringCount(string word, int k) {
        int n = word.size(), mod = 1e9 + 7, ans = 0;
        if (n <= k)
            return n == k;
        vector<long long> freq = buildFreqArray(word);
        int total = findTotal(freq, mod);
        int m = freq.size();
        if (m >= k)
            return total;
        vector<vector<int>> dp(2, vector<int>(k, 0));
        dp[m&1][0] = 1;
        vector<int> prefix(k, 1);
        for (int idx = m - 1; idx >= 0; idx--) {
            dp[idx & 1][0] = 0;
            vector<int> temp(k, 0);
            for (int K = 1; K < k; K++) {
                int res = (prefix[K - 1] - ((K - freq[idx] > 0) ? prefix[K - freq[idx] - 1] : 0) + mod) % mod;
                temp[K] += res;
                dp[idx&1][K] = res;
            }
            for (int i = 1; i < k; i++)
            temp[i] = (temp[i] + temp[i - 1]) % mod;
            prefix = temp;
        }
        for (int i = 1; i < k; i++)
        {
            ans = (ans + dp[0][i]) % mod;
        };
        return (total - ans + mod) % mod;
    }
};
```

