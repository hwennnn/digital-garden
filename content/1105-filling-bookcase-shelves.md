---
title: 1105. Filling Bookcase Shelves
draft: false
tags: 
  - leetcode-medium
  - array
  - dynamic-programming
  - weekly-contest-143
  - contest-question
date: 2024-07-31
---

[Problem Link](https://leetcode.com/problems/filling-bookcase-shelves/)

## Description

---
<p>You are given an array <code>books</code> where <code>books[i] = [thickness<sub>i</sub>, height<sub>i</sub>]</code> indicates the thickness and height of the <code>i<sup>th</sup></code> book. You are also given an integer <code>shelfWidth</code>.</p>

<p>We want to place these books in order onto bookcase shelves that have a total width <code>shelfWidth</code>.</p>

<p>We choose some of the books to place on this shelf such that the sum of their thickness is less than or equal to <code>shelfWidth</code>, then build another level of the shelf of the bookcase so that the total height of the bookcase has increased by the maximum height of the books we just put down. We repeat this process until there are no more books to place.</p>

<p>Note that at each step of the above process, the order of the books we place is the same order as the given sequence of books.</p>

<ul>
	<li>For example, if we have an ordered list of <code>5</code> books, we might place the first and second book onto the first shelf, the third book on the second shelf, and the fourth and fifth book on the last shelf.</li>
</ul>

<p>Return <em>the minimum possible height that the total bookshelf can be after placing shelves in this manner</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/06/24/shelves.png" style="height: 500px; width: 337px;" />
<pre>
<strong>Input:</strong> books = [[1,1],[2,3],[2,3],[1,1],[1,1],[1,1],[1,2]], shelfWidth = 4
<strong>Output:</strong> 6
<strong>Explanation:</strong>
The sum of the heights of the 3 shelves is 1 + 3 + 2 = 6.
Notice that book number 2 does not have to be on the first shelf.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> books = [[1,3],[2,4],[3,2]], shelfWidth = 6
<strong>Output:</strong> 4
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= books.length &lt;= 1000</code></li>
	<li><code>1 &lt;= thickness<sub>i</sub> &lt;= shelfWidth &lt;= 1000</code></li>
	<li><code>1 &lt;= height<sub>i</sub> &lt;= 1000</code></li>
</ul>


## Solution

---
### C++
``` cpp title='filling-bookcase-shelves'
class Solution {
public:
    int minHeightShelves(vector<vector<int>>& books, int shelfWidth) {
        int N = books.size();
        vector<int> dp(N + 1);

        for (int i = 0; i < N; i++) {
            int w = books[i][0], h = books[i][1], j = i + 1;
            dp[i + 1] = dp[i] + h;
            
            for (int j = i - 1; j >= 0; j--) {
                if (w + books[j][0] > shelfWidth) break;
                h = max(h, books[j][1]);
                w += books[j][0];
                dp[i + 1] = min(dp[i + 1], dp[j] + h);
            }
        }

        return dp.back();
    }
};
```
### Python3
``` py title='filling-bookcase-shelves'
class Solution:
    def minHeightShelves(self, books: List[List[int]], shelf_width: int) -> int:
        n = len(books)
        dp = [0] * (n + 1)
        
        for i, (width, height) in enumerate(books, 1):
            dp[i] = dp[i - 1] + height
            
            j = i - 1
            while j > 0 and books[j - 1][0] + width <= shelf_width:
                height = max(height, books[j - 1][1])
                width += books[j - 1][0]
                dp[i] = min(dp[i], dp[j - 1] + height)
                j -= 1
            
        return dp[-1]
```

