---
title: 1361. Validate Binary Tree Nodes
draft: false
tags: 
  - leetcode-medium
  - tree
  - depth-first-search
  - breadth-first-search
  - union-find
  - graph
  - binary-tree
  - weekly-contest-177
  - contest-question
date: 2020-10-16
---

[Problem Link](https://leetcode.com/problems/validate-binary-tree-nodes/)

## Description

---
<p>You have <code>n</code> binary tree nodes numbered from <code>0</code> to <code>n - 1</code> where node <code>i</code> has two children <code>leftChild[i]</code> and <code>rightChild[i]</code>, return <code>true</code> if and only if <strong>all</strong> the given nodes form <strong>exactly one</strong> valid binary tree.</p>

<p>If node <code>i</code> has no left child then <code>leftChild[i]</code> will equal <code>-1</code>, similarly for the right child.</p>

<p>Note that the nodes have no values and that we only use the node numbers in this problem.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/08/23/1503_ex1.png" style="width: 195px; height: 287px;" />
<pre>
<strong>Input:</strong> n = 4, leftChild = [1,-1,3,-1], rightChild = [2,-1,-1,-1]
<strong>Output:</strong> true
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/08/23/1503_ex2.png" style="width: 183px; height: 272px;" />
<pre>
<strong>Input:</strong> n = 4, leftChild = [1,-1,3,-1], rightChild = [2,3,-1,-1]
<strong>Output:</strong> false
</pre>

<p><strong class="example">Example 3:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/08/23/1503_ex3.png" style="width: 82px; height: 174px;" />
<pre>
<strong>Input:</strong> n = 2, leftChild = [1,0], rightChild = [-1,-1]
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == leftChild.length == rightChild.length</code></li>
	<li><code>1 &lt;= n &lt;= 10<sup>4</sup></code></li>
	<li><code>-1 &lt;= leftChild[i], rightChild[i] &lt;= n - 1</code></li>
</ul>


## Solution

---
### Python3
``` py title='validate-binary-tree-nodes'
class Solution:
    def countNodes(self, root, leftChild, rightChild):
        if root == -1:
            return 0
        
        return 1 + self.countNodes(leftChild[root], leftChild, rightChild) + self.countNodes(rightChild[root], leftChild, rightChild)

    def validateBinaryTreeNodes(self, n: int, leftChild: List[int], rightChild: List[int]) -> bool:
        indegree = [0] * n
        root = None

        for i, (left, right) in enumerate(zip(leftChild, rightChild)):
            if left != -1:
                indegree[left] += 1

                if indegree[left] > 1:
                    return False
            
            if right != -1:
                indegree[right] += 1

                if indegree[right] > 1:
                    return False
        
        for i in range(n):
            if indegree[i] == 0:
                if root is not None: 
                    return False

                root = i
        
        if root is None:
            return False
        
        return self.countNodes(root, leftChild, rightChild) == n
```
### C++
``` cpp title='validate-binary-tree-nodes'
class Solution {
public:
   int countNodes(vector<int> &l,vector<int> &r,int root)   // DFS from root to validate that all nodes are visited.
    {
        if(root==-1)
            return 0;
        return 1+countNodes(l,r,l[root])+countNodes(l,r,r[root]);
    }
    bool validateBinaryTreeNodes(int n, vector<int>& leftChild, vector<int>& rightChild) 
    {
        vector<int> inDegree(n,0);
        int root=-1;
        for(int i=0;i<leftChild.size();i++)
            if(leftChild[i]!=-1&&inDegree[leftChild[i]]++==1)  //If in-degree exceeds 1 return false.
                return false;
            else if(rightChild[i]!=-1&&inDegree[rightChild[i]]++==1)  //If in-degree exceeds 1 return false.
                return false;
        for(int i=0;i<leftChild.size();i++)    //Find root and also check for multiple roots.
            if(inDegree[i]==0)  //If in-degree = 0 and has children it's a root.
                if(root==-1)   //Store the root.
                    root=i;
                else    //We have multiple roots, return false
                    return false;
        if(root==-1)
            return false;
        return countNodes(leftChild,rightChild,root)==n;
    }
};
```

