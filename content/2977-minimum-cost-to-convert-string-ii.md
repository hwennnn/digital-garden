---
title: 2977. Minimum Cost to Convert String II
draft: false
tags: 
  - leetcode-hard
  - array
  - string
  - dynamic-programming
  - graph
  - trie
  - shortest-path
  - weekly-contest-377
  - contest-question
date: 2023-12-27
---

[Problem Link](https://leetcode.com/problems/minimum-cost-to-convert-string-ii/)

## Description

---
<p>You are given two <strong>0-indexed</strong> strings <code>source</code> and <code>target</code>, both of length <code>n</code> and consisting of <strong>lowercase</strong> English characters. You are also given two <strong>0-indexed</strong> string arrays <code>original</code> and <code>changed</code>, and an integer array <code>cost</code>, where <code>cost[i]</code> represents the cost of converting the string <code>original[i]</code> to the string <code>changed[i]</code>.</p>

<p>You start with the string <code>source</code>. In one operation, you can pick a <strong>substring</strong> <code>x</code> from the string, and change it to <code>y</code> at a cost of <code>z</code> <strong>if</strong> there exists <strong>any</strong> index <code>j</code> such that <code>cost[j] == z</code>, <code>original[j] == x</code>, and <code>changed[j] == y</code>. You are allowed to do <strong>any</strong> number of operations, but any pair of operations must satisfy <strong>either</strong> of these two conditions:</p>

<ul>
	<li>The substrings picked in the operations are <code>source[a..b]</code> and <code>source[c..d]</code> with either <code>b &lt; c</code> <strong>or</strong> <code>d &lt; a</code>. In other words, the indices picked in both operations are <strong>disjoint</strong>.</li>
	<li>The substrings picked in the operations are <code>source[a..b]</code> and <code>source[c..d]</code> with <code>a == c</code> <strong>and</strong> <code>b == d</code>. In other words, the indices picked in both operations are <strong>identical</strong>.</li>
</ul>

<p>Return <em>the <strong>minimum</strong> cost to convert the string </em><code>source</code><em> to the string </em><code>target</code><em> using <strong>any</strong> number of operations</em>. <em>If it is impossible to convert</em> <code>source</code> <em>to</em> <code>target</code>,<em> return</em> <code>-1</code>.</p>

<p><strong>Note</strong> that there may exist indices <code>i</code>, <code>j</code> such that <code>original[j] == original[i]</code> and <code>changed[j] == changed[i]</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> source = &quot;abcd&quot;, target = &quot;acbe&quot;, original = [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;c&quot;,&quot;e&quot;,&quot;d&quot;], changed = [&quot;b&quot;,&quot;c&quot;,&quot;b&quot;,&quot;e&quot;,&quot;b&quot;,&quot;e&quot;], cost = [2,5,5,1,2,20]
<strong>Output:</strong> 28
<strong>Explanation:</strong> To convert &quot;abcd&quot; to &quot;acbe&quot;, do the following operations:
- Change substring source[1..1] from &quot;b&quot; to &quot;c&quot; at a cost of 5.
- Change substring source[2..2] from &quot;c&quot; to &quot;e&quot; at a cost of 1.
- Change substring source[2..2] from &quot;e&quot; to &quot;b&quot; at a cost of 2.
- Change substring source[3..3] from &quot;d&quot; to &quot;e&quot; at a cost of 20.
The total cost incurred is 5 + 1 + 2 + 20 = 28. 
It can be shown that this is the minimum possible cost.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> source = &quot;abcdefgh&quot;, target = &quot;acdeeghh&quot;, original = [&quot;bcd&quot;,&quot;fgh&quot;,&quot;thh&quot;], changed = [&quot;cde&quot;,&quot;thh&quot;,&quot;ghh&quot;], cost = [1,3,5]
<strong>Output:</strong> 9
<strong>Explanation:</strong> To convert &quot;abcdefgh&quot; to &quot;acdeeghh&quot;, do the following operations:
- Change substring source[1..3] from &quot;bcd&quot; to &quot;cde&quot; at a cost of 1.
- Change substring source[5..7] from &quot;fgh&quot; to &quot;thh&quot; at a cost of 3. We can do this operation because indices [5,7] are disjoint with indices picked in the first operation.
- Change substring source[5..7] from &quot;thh&quot; to &quot;ghh&quot; at a cost of 5. We can do this operation because indices [5,7] are disjoint with indices picked in the first operation, and identical with indices picked in the second operation.
The total cost incurred is 1 + 3 + 5 = 9.
It can be shown that this is the minimum possible cost.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> source = &quot;abcdefgh&quot;, target = &quot;addddddd&quot;, original = [&quot;bcd&quot;,&quot;defgh&quot;], changed = [&quot;ddd&quot;,&quot;ddddd&quot;], cost = [100,1578]
<strong>Output:</strong> -1
<strong>Explanation:</strong> It is impossible to convert &quot;abcdefgh&quot; to &quot;addddddd&quot;.
If you select substring source[1..3] as the first operation to change &quot;abcdefgh&quot; to &quot;adddefgh&quot;, you cannot select substring source[3..7] as the second operation because it has a common index, 3, with the first operation.
If you select substring source[3..7] as the first operation to change &quot;abcdefgh&quot; to &quot;abcddddd&quot;, you cannot select substring source[1..3] as the second operation because it has a common index, 3, with the first operation.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= source.length == target.length &lt;= 1000</code></li>
	<li><code>source</code>, <code>target</code> consist only of lowercase English characters.</li>
	<li><code>1 &lt;= cost.length == original.length == changed.length &lt;= 100</code></li>
	<li><code>1 &lt;= original[i].length == changed[i].length &lt;= source.length</code></li>
	<li><code>original[i]</code>, <code>changed[i]</code> consist only of lowercase English characters.</li>
	<li><code>original[i] != changed[i]</code></li>
	<li><code>1 &lt;= cost[i] &lt;= 10<sup>6</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='minimum-cost-to-convert-string-ii'
class Solution:
    def minimumCost(self, source: str, target: str, original: List[str], changed: List[str], cost: List[int]) -> int:
        N = len(source)
        change = defaultdict(lambda : defaultdict(lambda: inf))
        mp = defaultdict(set)
        INF = inf

        def f(x):
            return ord(x) - ord('a')
        
        for x, y, c in zip(original, changed, cost):
            change[x][y] = min(change[x][y], c)
            mp[len(x)].add(x)
            mp[len(x)].add(y)
            
        for length in mp.keys():
            V = list(mp[length])
            l = len(V)
            
            for k in V:
                for i in V:
                    for j in V:
                        change[i][j] = min(change[i][j], change[i][k] + change[k][j])
        
        # C[firstChar][key][destination] = cost
        C = [defaultdict(lambda : defaultdict(lambda: inf)) for _ in range(26)]
        
        for key in change.keys():
            for dest, v in change[key].items():
                C[f(key[0])][key][dest] = v

        @cache
        def dp(index):
            if index == N: return 0
            
            res = INF
            
            if source[index] == target[index]:
                res = min(res, dp(index + 1))
            
            k = f(source[index])

            for key in C[k]:
                if len(key) + index > N or key != source[index : index + len(key)]: continue
                    
                for dest, v in C[k][key].items():
                    if dest != target[index : index + len(key)]: continue
                    
                    res = min(res, dp(index + len(key)) + v)
                    
            return res
            
        ans = dp(0)
        return -1 if ans == INF else ans
```

