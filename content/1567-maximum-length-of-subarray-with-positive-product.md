---
title: 1567. Maximum Length of Subarray With Positive Product
draft: false
tags: 
  - leetcode-medium
  - array
  - dynamic-programming
  - greedy
  - weekly-contest-204
  - contest-question
date: 2020-08-30
---

[Problem Link](https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/)

## Description

---
<p>Given an array of integers <code>nums</code>, find the maximum length of a subarray where the product of all its elements is positive.</p>

<p>A subarray of an array is a consecutive sequence of zero or more values taken out of that array.</p>

<p>Return <em>the maximum length of a subarray with positive product</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,-2,-3,4]
<strong>Output:</strong> 4
<strong>Explanation:</strong> The array nums already has a positive product of 24.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [0,1,-2,-3,-4]
<strong>Output:</strong> 3
<strong>Explanation:</strong> The longest subarray with positive product is [1,-2,-3] which has a product of 6.
Notice that we cannot include 0 in the subarray since that&#39;ll make the product 0 which is not positive.</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [-1,-2,-3,0,1]
<strong>Output:</strong> 2
<strong>Explanation:</strong> The longest subarray with positive product is [-1,-2] or [-2,-3].
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>


## Solution

---
### Python3
``` py title='maximum-length-of-subarray-with-positive-product'
class Solution:
    def getMaxLen(self, nums: List[int]) -> int:
        res = negCount = 0
        zeroPos = negPos = -1
        
        for i, x in enumerate(nums):
            if x < 0:
                negCount += 1
                if negPos == -1:
                    negPos = i
            elif x == 0:
                negCount = 0
                zeroPos = i
                negPos = -1
            
            if negCount % 2 == 0:
                res = max(res, i - zeroPos)
            else:
                res = max(res, i - negPos)
        
        return res
```
### C++
``` cpp title='maximum-length-of-subarray-with-positive-product'
class Solution {
public:
    int getMaxLen(vector<int>& nums) {
        int n = nums.size();
        int lastZero = -1;
        int firstNegative = -1;
        int res = 0;
        int neg = 0;
        
        for (int i = 0; i < n; i++){
            if (nums[i] < 0){
                 neg++;
                if (firstNegative == -1){
                    firstNegative = i;
                }
        
            }
            
            if (nums[i] == 0){
                neg = 0;
                firstNegative = -1;
                lastZero = i;
            }else{
                if (neg%2 == 0){
                    res = max(res, i - lastZero);
                }
                else{
                    res = max(res, i - firstNegative);
                }
            }
            
            
               
        }
        
        return res;
            
            
            
    }
};

```
### Java
``` java title='maximum-length-of-subarray-with-positive-product'
class Solution {
      public int getMaxLen(int[] nums) {
        // sum is used to count the number of negative numbers from zeroPosition to current index
        int firstNegative = -1, zeroPosition = -1, sum = 0, max = 0;
        for(int i = 0;i < nums.length; i++){
            if(nums[i] < 0){
                sum++;
				// we only need to know index of first negative number
                if(firstNegative == -1) firstNegative = i;
            }
			// if current number is 0, we can't use any element from index 0 to i anymore, so update zeroPosition, and reset sum and firstNegative. If it is a game, we should refresh the game when we meet 0. 
            if(nums[i] == 0){
                sum = 0;
                firstNegative = -1;
                zeroPosition = i;
            }
            else{
			    // consider index of zero
                if(sum%2 == 0) max = Math.max(i - zeroPosition, max);
				// consider index of first negative number
                else max = Math.max(i - firstNegative, max);   
            }
        }
        return max;
    }
}
```

