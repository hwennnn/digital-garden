---
title: 3031. Minimum Time to Revert Word to Initial State II
draft: false
tags: 
  - leetcode-hard
  - string
  - rolling-hash
  - string-matching
  - hash-function
  - weekly-contest-383
  - contest-question
date: 2024-02-04
---

[Problem Link](https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-ii/)

## Description

---
<p>You are given a <strong>0-indexed</strong> string <code>word</code> and an integer <code>k</code>.</p>

<p>At every second, you must perform the following operations:</p>

<ul>
	<li>Remove the first <code>k</code> characters of <code>word</code>.</li>
	<li>Add any <code>k</code> characters to the end of <code>word</code>.</li>
</ul>

<p><strong>Note</strong> that you do not necessarily need to add the same characters that you removed. However, you must perform <strong>both</strong> operations at every second.</p>

<p>Return <em>the <strong>minimum</strong> time greater than zero required for</em> <code>word</code> <em>to revert to its <strong>initial</strong> state</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> word = &quot;abacaba&quot;, k = 3
<strong>Output:</strong> 2
<strong>Explanation:</strong> At the 1st second, we remove characters &quot;aba&quot; from the prefix of word, and add characters &quot;bac&quot; to the end of word. Thus, word becomes equal to &quot;cababac&quot;.
At the 2nd second, we remove characters &quot;cab&quot; from the prefix of word, and add &quot;aba&quot; to the end of word. Thus, word becomes equal to &quot;abacaba&quot; and reverts to its initial state.
It can be shown that 2 seconds is the minimum time greater than zero required for word to revert to its initial state.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> word = &quot;abacaba&quot;, k = 4
<strong>Output:</strong> 1
<strong>Explanation:</strong> At the 1st second, we remove characters &quot;abac&quot; from the prefix of word, and add characters &quot;caba&quot; to the end of word. Thus, word becomes equal to &quot;abacaba&quot; and reverts to its initial state.
It can be shown that 1 second is the minimum time greater than zero required for word to revert to its initial state.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> word = &quot;abcbabcd&quot;, k = 2
<strong>Output:</strong> 4
<strong>Explanation:</strong> At every second, we will remove the first 2 characters of word, and add the same characters to the end of word.
After 4 seconds, word becomes equal to &quot;abcbabcd&quot; and reverts to its initial state.
It can be shown that 4 seconds is the minimum time greater than zero required for word to revert to its initial state.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= word.length &lt;= 10<sup>6</sup></code></li>
	<li><code>1 &lt;= k &lt;= word.length</code></li>
	<li><code>word</code> consists only of lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='minimum-time-to-revert-word-to-initial-state-ii'
class RabinKarp:
    def __init__(self, A):
        self.P = P = 37
        self.MOD = MOD = 344555666677777
        Pinv = 46561576578078
        self.pre = pre = [0]
        self.pinvs = pinvs = [1]
        
        ha = 0
        pwr = pwrinv = 1
        for i, x in enumerate(A):
            ha = (ha + x * pwr) % MOD
            pwr = pwr * P % MOD
            pwrinv = pwrinv * Pinv % MOD
            pre.append(ha)
            pinvs.append(pwrinv)

    def query(self, i, j):
        # return hash of s[i..j]
        return (self.pre[j+1] - self.pre[i]) * self.pinvs[i] % self.MOD

class Solution:
    def minimumTimeToInitialState(self, s: str, k: int) -> int:
        N = len(s)
        rk = RabinKarp([ord(x) - ord('a') for x in s])
        res = 1
        
        for i in range(k, N, k):
            if rk.query(i, N - 1) == rk.query(0, N - i - 1):
                return res
            
            res += 1
        
        return res
```
### C++
``` cpp title='minimum-time-to-revert-word-to-initial-state-ii'
vector<int> z_function(string s) {
    int n = s.size();
    vector<int> z(n);
    int l = 0, r = 0;
    for(int i = 1; i < n; i++) {
        if(i < r) {
            z[i] = min(r - i, z[i - l]);
        }
        while(i + z[i] < n && s[z[i]] == s[i + z[i]]) {
            z[i]++;
        }
        if(i + z[i] > r) {
            l = i;
            r = i + z[i];
        }
    }
    return z;
}

class Solution {
public:
    int minimumTimeToInitialState(string word, int k) {
        int N = word.size();
        vector<int> Z = z_function(word);
        int res = 1;

        for (int i = k; i < N; i += k, res++) {
            // word[i : N] == word[0 : N - i]
            if (Z[i] == N - i) return res;
        }

        return res;
    }
};
```

