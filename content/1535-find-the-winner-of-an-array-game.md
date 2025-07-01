---
title: 1535. Find the Winner of an Array Game
draft: false
tags: 
  - leetcode-medium
  - array
  - simulation
  - weekly-contest-200
  - contest-question
date: 2020-10-12
---

[Problem Link](https://leetcode.com/problems/find-the-winner-of-an-array-game/)

## Description

---
<p>Given an integer array <code>arr</code> of <strong>distinct</strong> integers and an integer <code>k</code>.</p>

<p>A game will be played between the first two elements of the array (i.e. <code>arr[0]</code> and <code>arr[1]</code>). In each round of the game, we compare <code>arr[0]</code> with <code>arr[1]</code>, the larger integer wins and remains at position <code>0</code>, and the smaller integer moves to the end of the array. The game ends when an integer wins <code>k</code> consecutive rounds.</p>

<p>Return <em>the integer which will win the game</em>.</p>

<p>It is <strong>guaranteed</strong> that there will be a winner of the game.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> arr = [2,1,3,5,4,6,7], k = 2
<strong>Output:</strong> 5
<strong>Explanation:</strong> Let&#39;s see the rounds of the game:
Round |       arr       | winner | win_count
  1   | [2,1,3,5,4,6,7] | 2      | 1
  2   | [2,3,5,4,6,7,1] | 3      | 1
  3   | [3,5,4,6,7,1,2] | 5      | 1
  4   | [5,4,6,7,1,2,3] | 5      | 2
So we can see that 4 rounds will be played and 5 is the winner because it wins 2 consecutive games.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> arr = [3,2,1], k = 10
<strong>Output:</strong> 3
<strong>Explanation:</strong> 3 will win the first 10 rounds consecutively.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= arr.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= arr[i] &lt;= 10<sup>6</sup></code></li>
	<li><code>arr</code> contains <strong>distinct</strong> integers.</li>
	<li><code>1 &lt;= k &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='find-the-winner-of-an-array-game'
class Solution:
    def getWinner(self, arr: List[int], k: int) -> int:
        N = len(arr)
        curr = arr[0]
        count = 0

        # the winner will always be max(A) if the winner is not decided after one pass coz no one can beat him

        for i in range(1, N):
            if arr[i] > curr:
                curr = arr[i]
                count = 0

            count += 1

            if count == k: break
        
        return curr

```
### C++
``` cpp title='find-the-winner-of-an-array-game'
class Solution {
public:
    int getWinner(vector<int>& arr, int k) {
        for (int i=1, j=0; i < arr.size() && j < k; ++i){
            if (arr[0] > arr[i])
                ++j;
            else{
                swap(arr[0], arr[i]);
                j = 1;
            }
                
        }
        
        return arr[0];
    }
};


```

