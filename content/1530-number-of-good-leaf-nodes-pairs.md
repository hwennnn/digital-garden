---
title: 1530. Number of Good Leaf Nodes Pairs
draft: false
tags: 
  - leetcode-medium
  - tree
  - depth-first-search
  - binary-tree
  - weekly-contest-199
  - contest-question
date: 2024-07-18
---

[Problem Link](https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/)

## Description

---
<p>You are given the <code>root</code> of a binary tree and an integer <code>distance</code>. A pair of two different <strong>leaf</strong> nodes of a binary tree is said to be good if the length of <strong>the shortest path</strong> between them is less than or equal to <code>distance</code>.</p>

<p>Return <em>the number of good leaf node pairs</em> in the tree.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/07/09/e1.jpg" style="width: 250px; height: 250px;" />
<pre>
<strong>Input:</strong> root = [1,2,3,null,4], distance = 3
<strong>Output:</strong> 1
<strong>Explanation:</strong> The leaf nodes of the tree are 3 and 4 and the length of the shortest path between them is 3. This is the only good pair.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/07/09/e2.jpg" style="width: 250px; height: 182px;" />
<pre>
<strong>Input:</strong> root = [1,2,3,4,5,6,7], distance = 3
<strong>Output:</strong> 2
<strong>Explanation:</strong> The good pairs are [4,5] and [6,7] with shortest path = 2. The pair [4,6] is not good because the length of ther shortest path between them is 4.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> root = [7,1,4,6,null,5,3,null,null,null,null,null,2], distance = 3
<strong>Output:</strong> 1
<strong>Explanation:</strong> The only good pair is [2,5].
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the <code>tree</code> is in the range <code>[1, 2<sup>10</sup>].</code></li>
	<li><code>1 &lt;= Node.val &lt;= 100</code></li>
	<li><code>1 &lt;= distance &lt;= 10</code></li>
</ul>


## Solution

---
### C++
``` cpp title='number-of-good-leaf-nodes-pairs'
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int res;

    vector<int> dfs(TreeNode* node, int distance) {
        if (!node) return vector<int>(11, 0);

        vector<int> left = dfs(node->left, distance);
        vector<int> right = dfs(node->right, distance);

        vector<int> count(11, 0);

        if (!node->left && !node->right) {
            count[1] = 1;
            return count;
        }

        for (int i = 0; i <= 10; i++) 
            for (int j = 0; j <= 10; j++) 
                if (i + j <= distance) res += (left[i] * right[j]);
            
        for (int i = 0; i <= 9; i++) {
            count[i + 1] += left[i] + right[i];
        }

        return count;
    }


    int countPairs(TreeNode* root, int distance) {
        res = 0;

        dfs(root, distance);

        return res;
    }
};
```

