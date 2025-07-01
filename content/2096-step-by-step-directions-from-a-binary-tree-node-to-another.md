---
title: 2096. Step-By-Step Directions From a Binary Tree Node to Another
draft: false
tags: 
  - leetcode-medium
  - string
  - tree
  - depth-first-search
  - binary-tree
  - weekly-contest-270
  - contest-question
date: 2024-07-16
---

[Problem Link](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/)

## Description

---
<p>You are given the <code>root</code> of a <strong>binary tree</strong> with <code>n</code> nodes. Each node is uniquely assigned a value from <code>1</code> to <code>n</code>. You are also given an integer <code>startValue</code> representing the value of the start node <code>s</code>, and a different integer <code>destValue</code> representing the value of the destination node <code>t</code>.</p>

<p>Find the <strong>shortest path</strong> starting from node <code>s</code> and ending at node <code>t</code>. Generate step-by-step directions of such path as a string consisting of only the <strong>uppercase</strong> letters <code>&#39;L&#39;</code>, <code>&#39;R&#39;</code>, and <code>&#39;U&#39;</code>. Each letter indicates a specific direction:</p>

<ul>
	<li><code>&#39;L&#39;</code> means to go from a node to its <strong>left child</strong> node.</li>
	<li><code>&#39;R&#39;</code> means to go from a node to its <strong>right child</strong> node.</li>
	<li><code>&#39;U&#39;</code> means to go from a node to its <strong>parent</strong> node.</li>
</ul>

<p>Return <em>the step-by-step directions of the <strong>shortest path</strong> from node </em><code>s</code><em> to node</em> <code>t</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/11/15/eg1.png" style="width: 214px; height: 163px;" />
<pre>
<strong>Input:</strong> root = [5,1,2,3,null,6,4], startValue = 3, destValue = 6
<strong>Output:</strong> &quot;UURL&quot;
<strong>Explanation:</strong> The shortest path is: 3 &rarr; 1 &rarr; 5 &rarr; 2 &rarr; 6.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/11/15/eg2.png" style="width: 74px; height: 102px;" />
<pre>
<strong>Input:</strong> root = [2,1], startValue = 2, destValue = 1
<strong>Output:</strong> &quot;L&quot;
<strong>Explanation:</strong> The shortest path is: 2 &rarr; 1.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is <code>n</code>.</li>
	<li><code>2 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= Node.val &lt;= n</code></li>
	<li>All the values in the tree are <strong>unique</strong>.</li>
	<li><code>1 &lt;= startValue, destValue &lt;= n</code></li>
	<li><code>startValue != destValue</code></li>
</ul>


## Solution

---
### C++
``` cpp title='step-by-step-directions-from-a-binary-tree-node-to-another'
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
    TreeNode* findLCA(TreeNode* node, int start, int end) {
        if (!node) return NULL;

        if (node->val == start || node->val == end) return node;

        TreeNode* left = findLCA(node->left, start, end);
        TreeNode* right = findLCA(node->right, start, end);

        if (left && right) return node;

        return left ? left : right;
    }

    bool dfs(TreeNode* node, string& path, int val)  {
        if (!node) return false;

        if (node->val == val) return true;

        path.push_back('L');
        if (dfs(node->left, path, val)) return true;
        path.pop_back();

        path.push_back('R');
        if (dfs(node->right, path, val)) return true;
        path.pop_back();

        return false;
    }

    string getDirections(TreeNode* root, int startValue, int destValue) {
        TreeNode* lca = findLCA(root, startValue, destValue);
        string start = "", end = "";

        dfs(lca, start, startValue);
        dfs(lca, end, destValue);

        for (auto& c : start) c = 'U';

        return start + end;
    }
};
```
### Python3
``` py title='step-by-step-directions-from-a-binary-tree-node-to-another'
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def getDirections(self, root: Optional[TreeNode], startValue: int, destValue: int) -> str:
        nodes = collections.defaultdict(tuple)
        
        def go(node, parent):
            if not node: return
            
            nodes[node.val] = (parent, node)
            
            go(node.left, node.val)
            go(node.right, node.val)
        
        go(root, -1)
        
        deq = collections.deque([(startValue, "")])
        visited = set([startValue])
        
        while deq:
            x, path = deq.popleft()

            if x == destValue: return path
            
            if x == -1: continue
            parent, node = nodes[x]
            
            if parent not in visited:
                visited.add(parent)
                deq.append((parent, path + "U"))
            
            if node.left and node.left.val not in visited:
                visited.add(node.left.val)
                deq.append((node.left.val, path + "L"))
            
            if node.right and node.right.val not in visited:
                visited.add(node.right.val)
                deq.append((node.right.val, path + "R"))
            
```

