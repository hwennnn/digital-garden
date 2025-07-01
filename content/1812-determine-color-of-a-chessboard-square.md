---
title: 1812. Determine Color of a Chessboard Square
draft: false
tags: 
  - leetcode-easy
  - math
  - string
  - biweekly-contest-49
  - contest-question
date: 2021-04-04
---

[Problem Link](https://leetcode.com/problems/determine-color-of-a-chessboard-square/)

## Description

---
<p>You are given <code>coordinates</code>, a string that represents the coordinates of a square of the chessboard. Below is a chessboard for your reference.</p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/screenshot-2021-02-20-at-22159-pm.png" style="width: 400px; height: 396px;" /></p>

<p>Return <code>true</code><em> if the square is white, and </em><code>false</code><em> if the square is black</em>.</p>

<p>The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> coordinates = &quot;a1&quot;
<strong>Output:</strong> false
<strong>Explanation:</strong> From the chessboard above, the square with coordinates &quot;a1&quot; is black, so return false.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> coordinates = &quot;h3&quot;
<strong>Output:</strong> true
<strong>Explanation:</strong> From the chessboard above, the square with coordinates &quot;h3&quot; is white, so return true.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> coordinates = &quot;c7&quot;
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>coordinates.length == 2</code></li>
	<li><code>&#39;a&#39; &lt;= coordinates[0] &lt;= &#39;h&#39;</code></li>
	<li><code>&#39;1&#39; &lt;= coordinates[1] &lt;= &#39;8&#39;</code></li>
</ul>


## Solution

---
### Python3
``` py title='determine-color-of-a-chessboard-square'
class Solution:
    def squareIsWhite(self, coordinates: str) -> bool:
        a, b = ord(coordinates[0]) - ord('a'), int(coordinates[1])
        
        return (a % 2 == 0 and b % 2 == 0) or (a & 1 and b & 1)
```

