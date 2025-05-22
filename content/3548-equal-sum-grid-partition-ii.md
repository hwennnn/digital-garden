---
title: 3548. Equal Sum Grid Partition II
draft: false
tags: 
  - leetcode-hard
  - array
  - hash-table
  - matrix
  - enumeration
  - prefix-sum
date: 2025-05-22
---

[Problem Link](https://leetcode.com/problems/equal-sum-grid-partition-ii/)

## Description

---
<p>You are given an <code>m x n</code> matrix <code>grid</code> of positive integers. Your task is to determine if it is possible to make <strong>either one horizontal or one vertical cut</strong> on the grid such that:</p>

<ul>
	<li>Each of the two resulting sections formed by the cut is <strong>non-empty</strong>.</li>
	<li>The sum of elements in both sections is <b>equal</b>, or can be made equal by discounting <strong>at most</strong> one single cell in total (from either section).</li>
	<li>If a cell is discounted, the rest of the section must <strong>remain connected</strong>.</li>
</ul>

<p>Return <code>true</code> if such a partition exists; otherwise, return <code>false</code>.</p>

<p><strong>Note:</strong> A section is <strong>connected</strong> if every cell in it can be reached from any other cell by moving up, down, left, or right through other cells in the section.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">grid = [[1,4],[2,3]]</span></p>

<p><strong>Output:</strong> <span class="example-io">true</span></p>

<p><strong>Explanation:</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2025/03/30/lc.jpeg" style="height: 180px; width: 180px;" /></p>

<ul>
	<li>A horizontal cut after the first row gives sums <code>1 + 4 = 5</code> and <code>2 + 3 = 5</code>, which are equal. Thus, the answer is <code>true</code>.</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">grid = [[1,2],[3,4]]</span></p>

<p><strong>Output:</strong> <span class="example-io">true</span></p>

<p><strong>Explanation:</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2025/04/01/chatgpt-image-apr-1-2025-at-05_28_12-pm.png" style="height: 180px; width: 180px;" /></p>

<ul>
	<li>A vertical cut after the first column gives sums <code>1 + 3 = 4</code> and <code>2 + 4 = 6</code>.</li>
	<li>By discounting 2 from the right section (<code>6 - 2 = 4</code>), both sections have equal sums and remain connected. Thus, the answer is <code>true</code>.</li>
</ul>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">grid = [[1,2,4],[2,3,5]]</span></p>

<p><strong>Output:</strong> <span class="example-io">false</span></p>

<p><strong>Explanation:</strong></p>

<p><strong><img alt="" src="https://assets.leetcode.com/uploads/2025/04/01/chatgpt-image-apr-2-2025-at-02_50_29-am.png" style="height: 180px; width: 180px;" /></strong></p>

<ul>
	<li>A horizontal cut after the first row gives <code>1 + 2 + 4 = 7</code> and <code>2 + 3 + 5 = 10</code>.</li>
	<li>By discounting 3 from the bottom section (<code>10 - 3 = 7</code>), both sections have equal sums, but they do not remain connected as it splits the bottom section into two parts (<code>[2]</code> and <code>[5]</code>). Thus, the answer is <code>false</code>.</li>
</ul>
</div>

<p><strong class="example">Example 4:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">grid = [[4,1,8],[3,2,6]]</span></p>

<p><strong>Output:</strong> <span class="example-io">false</span></p>

<p><strong>Explanation:</strong></p>

<p>No valid cut exists, so the answer is <code>false</code>.</p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= m == grid.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= n == grid[i].length &lt;= 10<sup>5</sup></code></li>
	<li><code>2 &lt;= m * n &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= grid[i][j] &lt;= 10<sup>5</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='equal-sum-grid-partition-ii'
class Solution:
    def canPartitionGrid(self, grid: List[List[int]]) -> bool:
        rows, cols = len(grid), len(grid[0])

        MAXV = 100000
        prefixRowWise = [0] * rows
        prefixColWise = [0] * cols

        minRow = [None] * (MAXV + 1)
        maxRow = [None] * (MAXV + 1)
        minCol = [None] * (MAXV + 1)
        maxCol = [None] * (MAXV + 1)

        for i in range(rows):
            for j in range(cols):
                val = grid[i][j]
                prefixRowWise[i] += val
                prefixColWise[j] += val

                if minRow[val] is None:
                    minRow[val] = maxRow[val] = i
                    minCol[val] = maxCol[val] = j
                else:
                    minRow[val] = min(minRow[val], i)
                    maxRow[val] = max(maxRow[val], i)
                    minCol[val] = min(minCol[val], j)
                    maxCol[val] = max(maxCol[val], j)

        totalRowSum = sum(prefixRowWise)
        totalColSum = totalRowSum

        currentRowUpperSum = 0
        for i in range(rows - 1):
            currentRowUpperSum += prefixRowWise[i]
            lowerSegmentSum = totalRowSum - currentRowUpperSum
            if currentRowUpperSum == lowerSegmentSum:
                return True
            elif currentRowUpperSum > lowerSegmentSum:
                diff = currentRowUpperSum - lowerSegmentSum
                if diff <= MAXV and minRow[diff] is not None:
                    if i == 0 or cols == 1:
                        if diff in (grid[0][0], grid[0][cols - 1], grid[i][0]):
                            return True
                    elif minRow[diff] <= i:
                        return True
            else:
                diff = lowerSegmentSum - currentRowUpperSum
                if diff <= MAXV and maxRow[diff] is not None:
                    if i == rows - 2 or cols == 1:
                        if diff in (grid[i + 1][0], grid[i + 1][cols - 1], grid[rows - 1][0]):
                            return True
                    elif maxRow[diff] > i:
                        return True

        currentColLeftSum = 0
        for j in range(cols - 1):
            currentColLeftSum += prefixColWise[j]
            rightSegmentSum = totalColSum - currentColLeftSum
            if currentColLeftSum == rightSegmentSum:
                return True
            elif currentColLeftSum > rightSegmentSum:
                diff = currentColLeftSum - rightSegmentSum
                if diff <= MAXV and minCol[diff] is not None:
                    if j == 0 or rows == 1:
                        if diff in (grid[0][0], grid[rows - 1][0]):
                            return True
                    elif minCol[diff] <= j:
                        return True
            else:
                diff = rightSegmentSum - currentColLeftSum
                if diff <= MAXV and maxCol[diff] is not None:
                    if j == cols - 2 or rows == 1:
                        if diff in (grid[0][j + 1], grid[rows - 1][j + 1]):
                            return True
                    elif maxCol[diff] > j:
                        return True

        return False
```

