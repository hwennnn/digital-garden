---
title: 949. Largest Time for Given Digits
draft: false
tags: 
  - leetcode-medium
  - array
  - string
  - backtracking
  - enumeration
  - weekly-contest-113
  - contest-question
date: 2020-09-01
---

[Problem Link](https://leetcode.com/problems/largest-time-for-given-digits/)

## Description

---
<p>Given an array <code>arr</code> of 4 digits, find the latest 24-hour time that can be made using each digit <strong>exactly once</strong>.</p>

<p>24-hour times are formatted as <code>&quot;HH:MM&quot;</code>, where <code>HH</code> is between <code>00</code> and <code>23</code>, and <code>MM</code> is between <code>00</code> and <code>59</code>. The earliest 24-hour time is <code>00:00</code>, and the latest is <code>23:59</code>.</p>

<p>Return <em>the latest 24-hour time in <code>&quot;HH:MM&quot;</code> format</em>. If no valid time can be made, return an empty string.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> arr = [1,2,3,4]
<strong>Output:</strong> &quot;23:41&quot;
<strong>Explanation:</strong> The valid 24-hour times are &quot;12:34&quot;, &quot;12:43&quot;, &quot;13:24&quot;, &quot;13:42&quot;, &quot;14:23&quot;, &quot;14:32&quot;, &quot;21:34&quot;, &quot;21:43&quot;, &quot;23:14&quot;, and &quot;23:41&quot;. Of these times, &quot;23:41&quot; is the latest.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> arr = [5,5,5,5]
<strong>Output:</strong> &quot;&quot;
<strong>Explanation:</strong> There are no valid 24-hour times as &quot;55:55&quot; is not valid.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>arr.length == 4</code></li>
	<li><code>0 &lt;= arr[i] &lt;= 9</code></li>
</ul>


## Solution

---
### Python3
``` py title='largest-time-for-given-digits'
class Solution:
    def largestTimeFromDigits(self, arr: List[int]) -> str:
        for perm in permutations(sorted(arr, reverse = 1)):
            if perm[0] * 10 + perm[1] < 24 and perm[2] < 6:
                return f"{perm[0]}{perm[1]}:{perm[2]}{perm[3]}"
        
        return ""
```
### C++
``` cpp title='largest-time-for-given-digits'
class Solution {
public:
	string largestTimeFromDigits(vector<int>& A) {
		string ans = "";
		sort(A.begin(),A.end());
		do
		{
			if((A[0]==2 && A[1]<=3 || A[0]<2) && A[2]<=5)
			{
				string temp = to_string(A[0])+to_string(A[1])+":"
					+to_string(A[2])+to_string(A[3]);
				if(temp > ans) ans = temp;
			}       
		}while(next_permutation(A.begin(),A.end()));
		return ans;
	}
};

```

