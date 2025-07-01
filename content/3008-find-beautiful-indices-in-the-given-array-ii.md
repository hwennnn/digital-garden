---
title: 3008. Find Beautiful Indices in the Given Array II
draft: false
tags: 
  - leetcode-hard
  - two-pointers
  - string
  - binary-search
  - rolling-hash
  - string-matching
  - hash-function
  - weekly-contest-380
  - contest-question
date: 2024-01-14
---

[Problem Link](https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-ii/)

## Description

---
<p>You are given a <strong>0-indexed</strong> string <code>s</code>, a string <code>a</code>, a string <code>b</code>, and an integer <code>k</code>.</p>

<p>An index <code>i</code> is <strong>beautiful</strong> if:</p>

<ul>
	<li><code>0 &lt;= i &lt;= s.length - a.length</code></li>
	<li><code>s[i..(i + a.length - 1)] == a</code></li>
	<li>There exists an index <code>j</code> such that:
	<ul>
		<li><code>0 &lt;= j &lt;= s.length - b.length</code></li>
		<li><code>s[j..(j + b.length - 1)] == b</code></li>
		<li><code>|j - i| &lt;= k</code></li>
	</ul>
	</li>
</ul>

<p>Return <em>the array that contains beautiful indices in <strong>sorted order from smallest to largest</strong></em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;isawsquirrelnearmysquirrelhouseohmy&quot;, a = &quot;my&quot;, b = &quot;squirrel&quot;, k = 15
<strong>Output:</strong> [16,33]
<strong>Explanation:</strong> There are 2 beautiful indices: [16,33].
- The index 16 is beautiful as s[16..17] == &quot;my&quot; and there exists an index 4 with s[4..11] == &quot;squirrel&quot; and |16 - 4| &lt;= 15.
- The index 33 is beautiful as s[33..34] == &quot;my&quot; and there exists an index 18 with s[18..25] == &quot;squirrel&quot; and |33 - 18| &lt;= 15.
Thus we return [16,33] as the result.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;abcd&quot;, a = &quot;a&quot;, b = &quot;a&quot;, k = 4
<strong>Output:</strong> [0]
<strong>Explanation:</strong> There is 1 beautiful index: [0].
- The index 0 is beautiful as s[0..0] == &quot;a&quot; and there exists an index 0 with s[0..0] == &quot;a&quot; and |0 - 0| &lt;= 4.
Thus we return [0] as the result.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= k &lt;= s.length &lt;= 5 * 10<sup>5</sup></code></li>
	<li><code>1 &lt;= a.length, b.length &lt;= 5 * 10<sup>5</sup></code></li>
	<li><code>s</code>, <code>a</code>, and <code>b</code> contain only lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='find-beautiful-indices-in-the-given-array-ii'
def rabin_karp(s, t):
    p = 31
    m = 10 ** 9 + 9
    S, T = len(s), len(t)
    
    p_pow = [0] * max(S, T)
    p_pow[0] = 1
    for i in range(1, len(p_pow)):
        p_pow[i] = (p_pow[i - 1] * p) % m
    
    h = [0] * (T + 1)
    for i in range(T):
        h[i + 1] = (h[i] + (ord(t[i]) - ord('a') + 1) * p_pow[i]) % m
    
    h_s = 0
    for i in range(S):
        h_s = (h_s + (ord(s[i]) - ord('a') + 1) * p_pow[i]) % m
    
    occurences = []
    for i in range(T - S + 1):
        cur_h = (h[i + S] + m - h[i]) % m
        if cur_h == h_s * p_pow[i] % m:
            occurences.append(i)
    
    return occurences

class Solution:
    def beautifulIndices(self, s: str, a: str, b: str, k: int) -> List[int]:
        N = len(s)
        A = rabin_karp(a, s)
        B = rabin_karp(b, s)
        res = []
        
        for ai in A:
            index = bisect_right(B, ai)
            
            if index < len(B) and abs(B[index] - ai) <= k:
                res.append(ai)
            elif index - 1 >= 0 and abs(B[index - 1] - ai) <= k:
                res.append(ai)
        
        return res
        
```
### C++
``` cpp title='find-beautiful-indices-in-the-given-array-ii'
vector<int> rabin_karp(string const& s, string const& t) {
    const int p = 31; 
    const int m = 1e9 + 9;
    int S = s.size(), T = t.size();

    vector<long long> p_pow(max(S, T)); 
    p_pow[0] = 1; 
    for (int i = 1; i < (int)p_pow.size(); i++) 
        p_pow[i] = (p_pow[i-1] * p) % m;

    vector<long long> h(T + 1, 0); 
    for (int i = 0; i < T; i++)
        h[i+1] = (h[i] + (t[i] - 'a' + 1) * p_pow[i]) % m; 
    long long h_s = 0; 
    for (int i = 0; i < S; i++) 
        h_s = (h_s + (s[i] - 'a' + 1) * p_pow[i]) % m; 

    vector<int> occurrences;
    for (int i = 0; i + S - 1 < T; i++) {
        long long cur_h = (h[i+S] + m - h[i]) % m;
        if (cur_h == h_s * p_pow[i] % m)
            occurrences.push_back(i);
    }
    return occurrences;
}

class Solution {
public:
    vector<int> beautifulIndices(string s, string a, string b, int k) {
        int N = s.length();
        vector<int> A = rabin_karp(a, s);
        vector<int> B = rabin_karp(b, s);
        vector<int> res;
        
        for (int ai : A) {
            auto it = upper_bound(B.begin(), B.end(), ai);
            if (it != B.end() && abs(*it - ai) <= k) {
                res.push_back(ai);
            } else if (it != B.begin() && abs(*prev(it) - ai) <= k) {
                res.push_back(ai);
            }
        }
        
        return res;
    }
};
```

