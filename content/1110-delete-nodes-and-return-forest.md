---
title: 1110. Delete Nodes And Return Forest
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - tree
  - depth-first-search
  - binary-tree
date: 2021-05-23
---

[Problem Link](https://leetcode.com/problems/delete-nodes-and-return-forest/)

## Description

---
<p>Given the <code>root</code> of a binary tree, each node in the tree has a distinct value.</p>

<p>After deleting all nodes with a value in <code>to_delete</code>, we are left with a forest (a disjoint union of trees).</p>

<p>Return the roots of the trees in the remaining forest. You may return the result in any order.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/07/01/screen-shot-2019-07-01-at-53836-pm.png" style="width: 237px; height: 150px;" />
<pre>
<strong>Input:</strong> root = [1,2,3,4,5,6,7], to_delete = [3,5]
<strong>Output:</strong> [[1,2,null,4],[6],[7]]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> root = [1,2,4,null,3], to_delete = [3]
<strong>Output:</strong> [[1,2,4]]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the given tree is at most <code>1000</code>.</li>
	<li>Each node has a distinct value between <code>1</code> and <code>1000</code>.</li>
	<li><code>to_delete.length &lt;= 1000</code></li>
	<li><code>to_delete</code> contains distinct values between <code>1</code> and <code>1000</code>.</li>
</ul>


## Solution

---
### C++
``` cpp title='delete-nodes-and-return-forest'
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
    TreeNode* dfs(TreeNode* curr, bool isRoot, vector<TreeNode*>& res, unordered_set<int>& s) {
        if (!curr) return curr;

        bool shouldDelete = s.find(curr->val) != s.end();

        if (isRoot && !shouldDelete) {
            res.push_back(curr);
        }

        curr->left = dfs(curr->left, shouldDelete, res, s);
        curr->right = dfs(curr->right, shouldDelete, res, s);

        return shouldDelete ? NULL : curr;
    }

    vector<TreeNode*> delNodes(TreeNode* root, vector<int>& to_delete) {
        vector<TreeNode*> res;
        unordered_set<int> s(to_delete.begin(), to_delete.end());

        dfs(root, true, res, s);

        return res;
    }
};
```
### Python3
``` py title='delete-nodes-and-return-forest'
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def delNodes(self, root: TreeNode, to_delete: List[int]) -> List[TreeNode]:
        res = []
        delete = set(to_delete)
        
        def dfs(node, is_root):
            if not node: return None
            
            to_delete = node.val in delete
            
            if is_root and not to_delete:
                res.append(node)
            
            node.left = dfs(node.left, to_delete)
            node.right = dfs(node.right, to_delete)
            
            return None if to_delete else node
                        
        dfs(root, True)
        
        return res
```

