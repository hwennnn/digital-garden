---
title: 2976. Minimum Cost to Convert String I
draft: false
tags: 
  - leetcode-medium
  - array
  - string
  - graph
  - shortest-path
  - weekly-contest-377
  - contest-question
date: 2023-12-24
---

[Problem Link](https://leetcode.com/problems/minimum-cost-to-convert-string-i/)

## Description

---
<p>You are given two <strong>0-indexed</strong> strings <code>source</code> and <code>target</code>, both of length <code>n</code> and consisting of <strong>lowercase</strong> English letters. You are also given two <strong>0-indexed</strong> character arrays <code>original</code> and <code>changed</code>, and an integer array <code>cost</code>, where <code>cost[i]</code> represents the cost of changing the character <code>original[i]</code> to the character <code>changed[i]</code>.</p>

<p>You start with the string <code>source</code>. In one operation, you can pick a character <code>x</code> from the string and change it to the character <code>y</code> at a cost of <code>z</code> <strong>if</strong> there exists <strong>any</strong> index <code>j</code> such that <code>cost[j] == z</code>, <code>original[j] == x</code>, and <code>changed[j] == y</code>.</p>

<p>Return <em>the <strong>minimum</strong> cost to convert the string </em><code>source</code><em> to the string </em><code>target</code><em> using <strong>any</strong> number of operations. If it is impossible to convert</em> <code>source</code> <em>to</em> <code>target</code>, <em>return</em> <code>-1</code>.</p>

<p><strong>Note</strong> that there may exist indices <code>i</code>, <code>j</code> such that <code>original[j] == original[i]</code> and <code>changed[j] == changed[i]</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> source = &quot;abcd&quot;, target = &quot;acbe&quot;, original = [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;c&quot;,&quot;e&quot;,&quot;d&quot;], changed = [&quot;b&quot;,&quot;c&quot;,&quot;b&quot;,&quot;e&quot;,&quot;b&quot;,&quot;e&quot;], cost = [2,5,5,1,2,20]
<strong>Output:</strong> 28
<strong>Explanation:</strong> To convert the string &quot;abcd&quot; to string &quot;acbe&quot;:
- Change value at index 1 from &#39;b&#39; to &#39;c&#39; at a cost of 5.
- Change value at index 2 from &#39;c&#39; to &#39;e&#39; at a cost of 1.
- Change value at index 2 from &#39;e&#39; to &#39;b&#39; at a cost of 2.
- Change value at index 3 from &#39;d&#39; to &#39;e&#39; at a cost of 20.
The total cost incurred is 5 + 1 + 2 + 20 = 28.
It can be shown that this is the minimum possible cost.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> source = &quot;aaaa&quot;, target = &quot;bbbb&quot;, original = [&quot;a&quot;,&quot;c&quot;], changed = [&quot;c&quot;,&quot;b&quot;], cost = [1,2]
<strong>Output:</strong> 12
<strong>Explanation:</strong> To change the character &#39;a&#39; to &#39;b&#39; change the character &#39;a&#39; to &#39;c&#39; at a cost of 1, followed by changing the character &#39;c&#39; to &#39;b&#39; at a cost of 2, for a total cost of 1 + 2 = 3. To change all occurrences of &#39;a&#39; to &#39;b&#39;, a total cost of 3 * 4 = 12 is incurred.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> source = &quot;abcd&quot;, target = &quot;abce&quot;, original = [&quot;a&quot;], changed = [&quot;e&quot;], cost = [10000]
<strong>Output:</strong> -1
<strong>Explanation:</strong> It is impossible to convert source to target because the value at index 3 cannot be changed from &#39;d&#39; to &#39;e&#39;.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= source.length == target.length &lt;= 10<sup>5</sup></code></li>
	<li><code>source</code>, <code>target</code> consist of lowercase English letters.</li>
	<li><code>1 &lt;= cost.length == original.length == changed.length &lt;= 2000</code></li>
	<li><code>original[i]</code>, <code>changed[i]</code> are lowercase English letters.</li>
	<li><code>1 &lt;= cost[i] &lt;= 10<sup>6</sup></code></li>
	<li><code>original[i] != changed[i]</code></li>
</ul>


## Solution

---
### C++
``` cpp title='minimum-cost-to-convert-string-i'
class Solution {
public:
    long long minimumCost(string source, string target, vector<char>& original, vector<char>& changed, vector<int>& cost) {
        vector<vector<long long>> dist(26, vector<long long>(26, INT_MAX));

        for (int i = 0; i < original.size(); i++) {
            int s = original[i] - 'a', t = changed[i] - 'a';
            dist[s][t] = min(dist[s][t], (long long)cost[i]);
        }

        for (int k = 0; k < 26; k++)
            for (int i = 0; i < 26; i++)
                for (int j = 0; j < 26; j++)
                    dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]);

        long long ans = 0;

        for (int i = 0; i < source.size(); i++) {
            if (source[i] != target[i]) {
                int s = source[i] - 'a', t = target[i] - 'a';

                if (dist[s][t] >= INT_MAX)
                    return -1;
                
                ans += dist[s][t];
            }
        }

        return ans;
    }
};
```
### Python3
``` py title='minimum-cost-to-convert-string-i'
class Solution:
    def minimumCost(self, source: str, target: str, original: List[str], changed: List[str], cost: List[int]) -> int:
        change = [[inf] * 26 for _ in range(26)]
        
        def f(x):
            return ord(x) - ord('a')
        
        for x, y, cost in zip(original, changed, cost):
            change[f(x)][f(y)] = min(change[f(x)][f(y)], cost)
        
        for k in range(26):
            for i in range(26):
                for j in range(26):
                    change[i][j] = min(change[i][j], change[i][k] + change[k][j])
        
        res = 0
        for x, y in zip(source, target):
            if x == y: continue
            
            if change[f(x)][f(y)] == inf: return -1
            
            res += change[f(x)][f(y)]
        
        return res
```

