---
title: 3213. Construct String with Minimum Cost
draft: false
tags: 
  - leetcode-hard
  - array
  - string
  - dynamic-programming
  - suffix-array
  - weekly-contest-405
  - contest-question
date: 2024-07-12
---

[Problem Link](https://leetcode.com/problems/construct-string-with-minimum-cost/)

## Description

---
<p>You are given a string <code>target</code>, an array of strings <code>words</code>, and an integer array <code>costs</code>, both arrays of the same length.</p>

<p>Imagine an empty string <code>s</code>.</p>

<p>You can perform the following operation any number of times (including <strong>zero</strong>):</p>

<ul>
	<li>Choose an index <code>i</code> in the range <code>[0, words.length - 1]</code>.</li>
	<li>Append <code>words[i]</code> to <code>s</code>.</li>
	<li>The cost of operation is <code>costs[i]</code>.</li>
</ul>

<p>Return the <strong>minimum</strong> cost to make <code>s</code> equal to <code>target</code>. If it&#39;s not possible, return <code>-1</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">target = &quot;abcdef&quot;, words = [&quot;abdef&quot;,&quot;abc&quot;,&quot;d&quot;,&quot;def&quot;,&quot;ef&quot;], costs = [100,1,1,10,5]</span></p>

<p><strong>Output:</strong> <span class="example-io">7</span></p>

<p><strong>Explanation:</strong></p>

<p>The minimum cost can be achieved by performing the following operations:</p>

<ul>
	<li>Select index 1 and append <code>&quot;abc&quot;</code> to <code>s</code> at a cost of 1, resulting in <code>s = &quot;abc&quot;</code>.</li>
	<li>Select index 2 and append <code>&quot;d&quot;</code> to <code>s</code> at a cost of 1, resulting in <code>s = &quot;abcd&quot;</code>.</li>
	<li>Select index 4 and append <code>&quot;ef&quot;</code> to <code>s</code> at a cost of 5, resulting in <code>s = &quot;abcdef&quot;</code>.</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">target = &quot;aaaa&quot;, words = [&quot;z&quot;,&quot;zz&quot;,&quot;zzz&quot;], costs = [1,10,100]</span></p>

<p><strong>Output:</strong> <span class="example-io">-1</span></p>

<p><strong>Explanation:</strong></p>

<p>It is impossible to make <code>s</code> equal to <code>target</code>, so we return -1.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= target.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>1 &lt;= words.length == costs.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>1 &lt;= words[i].length &lt;= target.length</code></li>
	<li>The total sum of <code>words[i].length</code> is less than or equal to <code>5 * 10<sup>4</sup></code>.</li>
	<li><code>target</code> and <code>words[i]</code> consist only of lowercase English letters.</li>
	<li><code>1 &lt;= costs[i] &lt;= 10<sup>4</sup></code></li>
</ul>


## Solution

---
### C++
``` cpp title='construct-string-with-minimum-cost'
struct TrieNode {
    TrieNode *sfx = nullptr;
    TrieNode *dict = nullptr;
    std::array<TrieNode*, 26> child{};
    int word_id = -1;
};
static TrieNode preallocated_nodes[(int)5e4 + 5];
static TrieNode *preallocated_queue[(int)5e4 + 5];
static int dp[(int)1e5 + 5];

class Solution {
public:
    int minimumCost(string &target, vector<string>& words, vector<int>& costs) {
        auto trie = Trie(words, costs);
        int n = target.size();
        dp[0] = 0;
        for (int i = 1; i <= n; ++i) {
            dp[i] = 1e9;
            for (int j : trie.suffixesAfterAppending(target[i - 1])) {
                dp[i] = std::min(dp[i], dp[i - words[j].size()] + costs[j]);
            }
        }
        return dp[n] == 1e9 ? -1 : dp[n];
    }

    struct Trie {
        int count = 0;
        TrieNode *newTrieNode() {
            preallocated_nodes[count] = TrieNode();
            return &preallocated_nodes[count++];
        }
    
        TrieNode *root = nullptr, *curr = nullptr;
        Trie(vector<string>& words, vector<int> &costs) {
            root = newTrieNode();
            root->sfx = root->dict = root;
            for (int i = 0; i < words.size(); ++i) {
                auto &&word = words[i];
                TrieNode *u = root;
                for (auto c : word) {
                    if (!u->child[c - 'a']) {
                        u->child[c - 'a'] = newTrieNode();
                    }
                    u = u->child[c - 'a'];
                }
                if (u->word_id < 0 || costs[i] < costs[u->word_id]) {
                    u->word_id = i;
                }
            }
    
            Queue q;
            q.push(root);
            while (!q.empty()) {
                TrieNode *u = q.pop();
                for (int i = 0; i < 26; ++i) {
                    auto v = u->child[i];
                    if (!v) {
                        continue;
                    }
    
                    TrieNode *p = u->sfx;
                    while (p != root && !p->child[i]) {
                        p = p->sfx;
                    }
    
                    if (u != root && p->child[i]) {
                        v->sfx = p->child[i];
                    } else {
                        v->sfx = root;
                    }
    
                    v->dict = v->sfx->word_id >= 0 ? v->sfx : v->sfx->dict;
                    q.push(v);
                }
            }
            curr = root;
        }


        Trie &suffixesAfterAppending(char letter) {
            while (curr != root && !curr->child[letter - 'a']) {
                curr = curr->sfx;
            }
    
            if (curr->child[letter - 'a']) {
                curr = curr->child[letter - 'a'];
                start = curr->word_id >= 0 ? curr : curr->dict;
            } else {
                start = root;
            }

            return *this;
        }

        // Iterate all suffixes for current prefix, longest to shortest
        TrieNode *start = root;
        struct Iterator {
            TrieNode *u = nullptr;
            Iterator &operator++() { u = u->dict; return *this; }
            bool operator==(Iterator &o) { return u == o.u; }
            int operator*() { return u->word_id; }
        };
        Iterator begin() { return Iterator{start}; } 
        Iterator end() { return Iterator{root}; } 

        // Optimization literally just for fun
        struct Queue {
            int start = 0, end = 0;
            inline void push(TrieNode *u) { preallocated_queue[end++] = u; }
            inline TrieNode *pop() { return preallocated_queue[start++]; }
            bool empty() { return start == end; }
        };
    };
};
```
### Python3
``` py title='construct-string-with-minimum-cost'
class Solution:
    def minimumCost(self, target: str, words: List[str], costs: List[int]) -> int:
        d = [{} for _ in range(max(len(x) for x in words) + 1)]
        for w, c in zip(words, costs):
            if w not in d[len(w)]: d[len(w)][w] = c
            elif c < d[len(w)][w]: d[len(w)][w] = c
        
        lengths = [i for i in range(len(d)) if len(d[i])]
        n = len(target)
        
        dp = [10 ** 9] * (n + 1)
        dp[0] = 0
        for i in range(n):
            for j in lengths:
                if i + j > n: break
                else:
                    try:
                        cost = d[j][target[i:i+j]]
                        if dp[i+j] > dp[i] + cost:
                            dp[i+j] = dp[i] + cost
                    except:
                        pass
        return dp[n] if dp[n] < 10 ** 9 else -1
```

