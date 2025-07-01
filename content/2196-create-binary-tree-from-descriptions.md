---
title: 2196. Create Binary Tree From Descriptions
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - tree
  - binary-tree
  - weekly-contest-283
  - contest-question
date: 2024-07-15
---

[Problem Link](https://leetcode.com/problems/create-binary-tree-from-descriptions/)

## Description

---
<p>You are given a 2D integer array <code>descriptions</code> where <code>descriptions[i] = [parent<sub>i</sub>, child<sub>i</sub>, isLeft<sub>i</sub>]</code> indicates that <code>parent<sub>i</sub></code> is the <strong>parent</strong> of <code>child<sub>i</sub></code> in a <strong>binary</strong> tree of <strong>unique</strong> values. Furthermore,</p>

<ul>
	<li>If <code>isLeft<sub>i</sub> == 1</code>, then <code>child<sub>i</sub></code> is the left child of <code>parent<sub>i</sub></code>.</li>
	<li>If <code>isLeft<sub>i</sub> == 0</code>, then <code>child<sub>i</sub></code> is the right child of <code>parent<sub>i</sub></code>.</li>
</ul>

<p>Construct the binary tree described by <code>descriptions</code> and return <em>its <strong>root</strong></em>.</p>

<p>The test cases will be generated such that the binary tree is <strong>valid</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/02/09/example1drawio.png" style="width: 300px; height: 236px;" />
<pre>
<strong>Input:</strong> descriptions = [[20,15,1],[20,17,0],[50,20,1],[50,80,0],[80,19,1]]
<strong>Output:</strong> [50,20,80,15,17,19]
<strong>Explanation:</strong> The root node is the node with value 50 since it has no parent.
The resulting binary tree is shown in the diagram.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2022/02/09/example2drawio.png" style="width: 131px; height: 300px;" />
<pre>
<strong>Input:</strong> descriptions = [[1,2,1],[2,3,0],[3,4,1]]
<strong>Output:</strong> [1,2,null,null,3,4]
<strong>Explanation:</strong> The root node is the node with value 1 since it has no parent.
The resulting binary tree is shown in the diagram.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= descriptions.length &lt;= 10<sup>4</sup></code></li>
	<li><code>descriptions[i].length == 3</code></li>
	<li><code>1 &lt;= parent<sub>i</sub>, child<sub>i</sub> &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= isLeft<sub>i</sub> &lt;= 1</code></li>
	<li>The binary tree described by <code>descriptions</code> is valid.</li>
</ul>


## Solution

---
### C++
``` cpp title='create-binary-tree-from-descriptions'
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
    unordered_map<int, vector<pair<int, bool>>> graph;
    unordered_map<int, int> indegree;

    TreeNode* dfs(int val) {
        TreeNode* node = new TreeNode(val);
        
        for (const auto& [child, isLeft] : graph[val]) {
            if (isLeft)  node->left = dfs(child);
            else node->right = dfs(child);
        }

        return node;
    }

    TreeNode* createBinaryTree(vector<vector<int>>& descriptions) {
        graph.clear();
        indegree.clear();
        
        for (auto &desc : descriptions) {
            auto parent = desc[0], child = desc[1], isLeft = desc[2];
            graph[parent].push_back({child, isLeft});
            indegree[child]++;
        }

        int root = -1;
        for (auto &desc: descriptions) {
            if (indegree[desc[0]] == 0) {
                root = desc[0];
                break;
            }
        }


        return dfs(root);
    }
};
```
### Python3
``` py title='create-binary-tree-from-descriptions'
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def createBinaryTree(self, descriptions: List[List[int]]) -> Optional[TreeNode]:
        graph = defaultdict(list)
        indegree = defaultdict(int)

        for parent, child, isLeft in descriptions:
            graph[parent].append((child, isLeft))
            indegree[child] += 1
        
        root = -1
        for parent, _, _ in descriptions:
            if indegree[parent] == 0:
                root = parent
                break
        
        assert root != -1

        def dfs(val):
            node = TreeNode(val)

            for child, isLeft in graph[val]:
                if isLeft:
                    node.left = dfs(child)
                else:
                    node.right = dfs(child)
            
            return node
        
        return dfs(root)
```

