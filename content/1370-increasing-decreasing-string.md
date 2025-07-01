---
title: 1370. Increasing Decreasing String
draft: false
tags: 
  - leetcode-easy
  - hash-table
  - string
  - counting
  - biweekly-contest-21
  - contest-question
date: 2020-08-29
---

[Problem Link](https://leetcode.com/problems/increasing-decreasing-string/)

## Description

---
<p>You are given a string <code>s</code>. Reorder the string using the following algorithm:</p>

<ol>
	<li>Remove the <strong>smallest</strong> character from <code>s</code> and <strong>append</strong> it to the result.</li>
	<li>Remove the <strong>smallest</strong> character from <code>s</code> that is greater than the last appended character, and <strong>append</strong> it to the result.</li>
	<li>Repeat step 2 until no more characters can be removed.</li>
	<li>Remove the <strong>largest</strong> character from <code>s</code> and <strong>append</strong> it to the result.</li>
	<li>Remove the <strong>largest</strong> character from <code>s</code> that is smaller than the last appended character, and <strong>append</strong> it to the result.</li>
	<li>Repeat step 5 until no more characters can be removed.</li>
	<li>Repeat steps 1 through 6 until all characters from <code>s</code> have been removed.</li>
</ol>

<p>If the smallest or largest character appears more than once, you may choose any occurrence to append to the result.</p>

<p>Return the resulting string after reordering <code>s</code> using this algorithm.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;aaaabbbbcccc&quot;
<strong>Output:</strong> &quot;abccbaabccba&quot;
<strong>Explanation:</strong> After steps 1, 2 and 3 of the first iteration, result = &quot;abc&quot;
After steps 4, 5 and 6 of the first iteration, result = &quot;abccba&quot;
First iteration is done. Now s = &quot;aabbcc&quot; and we go back to step 1
After steps 1, 2 and 3 of the second iteration, result = &quot;abccbaabc&quot;
After steps 4, 5 and 6 of the second iteration, result = &quot;abccbaabccba&quot;
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;rat&quot;
<strong>Output:</strong> &quot;art&quot;
<strong>Explanation:</strong> The word &quot;rat&quot; becomes &quot;art&quot; after re-ordering it with the mentioned algorithm.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 500</code></li>
	<li><code>s</code> consists of only lowercase English letters.</li>
</ul>


## Solution

---
### Python3
``` py title='increasing-decreasing-string'
class Solution:
    def sortString(self, S: str) -> str:
        mp = collections.defaultdict(int)
        n = len(S)
        for s in S:
            mp[s] += 1
        
        mp = dict(sorted(mp.items()))
        res = []
        while len(res) != n:
            for key in mp:
                if mp[key]:
                    res.append(key)
                    mp[key] -= 1

            for key in dict(sorted(mp.items(), reverse = True)):
                if mp[key]:
                    res.append(key)
                    mp[key] -= 1

        
        return "".join(res)
            
```
### C++
``` cpp title='increasing-decreasing-string'
class Solution {
public:
    string sortString(string s, string res = "") {
        int cnt[26] = {};
        for (auto ch : s)
            ++cnt[ch - 'a'];
        
        while (res.length() != s.length()){
            for (int i = 0; i < 26; i++)
                res += string(--cnt[i] >= 0 ? 1 : 0, 'a' + i);
            
            for (int i = 25; i >= 0; i--)
                res += string(--cnt[i] >= 0 ? 1 : 0, 'a' + i);
        }
        
        return res;
            
    }
};
```

