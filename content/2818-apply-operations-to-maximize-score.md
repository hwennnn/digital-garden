---
title: 2818. Apply Operations to Maximize Score
draft: false
tags: 
  - leetcode-hard
  - array
  - math
  - stack
  - greedy
  - monotonic-stack
  - number-theory
date: 2025-03-29
---

[Problem Link](https://leetcode.com/problems/apply-operations-to-maximize-score/)

## Description

---
<p>You are given an array <code>nums</code> of <code>n</code> positive integers and an integer <code>k</code>.</p>

<p>Initially, you start with a score of <code>1</code>. You have to maximize your score by applying the following operation at most <code>k</code> times:</p>

<ul>
	<li>Choose any <strong>non-empty</strong> subarray <code>nums[l, ..., r]</code> that you haven&#39;t chosen previously.</li>
	<li>Choose an element <code>x</code> of <code>nums[l, ..., r]</code> with the highest <strong>prime score</strong>. If multiple such elements exist, choose the one with the smallest index.</li>
	<li>Multiply your score by <code>x</code>.</li>
</ul>

<p>Here, <code>nums[l, ..., r]</code> denotes the subarray of <code>nums</code> starting at index <code>l</code> and ending at the index <code>r</code>, both ends being inclusive.</p>

<p>The <strong>prime score</strong> of an integer <code>x</code> is equal to the number of distinct prime factors of <code>x</code>. For example, the prime score of <code>300</code> is <code>3</code> since <code>300 = 2 * 2 * 3 * 5 * 5</code>.</p>

<p>Return <em>the <strong>maximum possible score</strong> after applying at most </em><code>k</code><em> operations</em>.</p>

<p>Since the answer may be large, return it modulo <code>10<sup>9 </sup>+ 7</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [8,3,9,3,8], k = 2
<strong>Output:</strong> 81
<strong>Explanation:</strong> To get a score of 81, we can apply the following operations:
- Choose subarray nums[2, ..., 2]. nums[2] is the only element in this subarray. Hence, we multiply the score by nums[2]. The score becomes 1 * 9 = 9.
- Choose subarray nums[2, ..., 3]. Both nums[2] and nums[3] have a prime score of 1, but nums[2] has the smaller index. Hence, we multiply the score by nums[2]. The score becomes 9 * 9 = 81.
It can be proven that 81 is the highest score one can obtain.</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [19,12,14,6,10,18], k = 3
<strong>Output:</strong> 4788
<strong>Explanation:</strong> To get a score of 4788, we can apply the following operations: 
- Choose subarray nums[0, ..., 0]. nums[0] is the only element in this subarray. Hence, we multiply the score by nums[0]. The score becomes 1 * 19 = 19.
- Choose subarray nums[5, ..., 5]. nums[5] is the only element in this subarray. Hence, we multiply the score by nums[5]. The score becomes 19 * 18 = 342.
- Choose subarray nums[2, ..., 3]. Both nums[2] and nums[3] have a prime score of 2, but nums[2] has the smaller index. Hence, we multipy the score by nums[2]. The score becomes 342 * 14 = 4788.
It can be proven that 4788 is the highest score one can obtain.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length == n &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= k &lt;= min(n * (n + 1) / 2, 10<sup>9</sup>)</code></li>
</ul>


## Solution

---
### Python3
``` py title='apply-operations-to-maximize-score'
def get_primes(n):
    p = 3
    sieve = [1 for _ in range(n+1)]
    while p*p <= n:
        if sieve[p]:
            for x in range(p*p, n+1, 2*p):
                sieve[x] = 0
        p += 2
    ret = [2]
    for i in range(3, n+1, 2):
        if sieve[i]:
            ret.append(i)
    return ret

PRIMES = get_primes(318)

class Solution:
    def maximumScore(self, nums: List[int], k: int) -> int:
        N = len(nums)
        M = 10 ** 9 + 7
        res = 1
        A = []
        count = []
        
        for i, x in enumerate(nums):
            p = 0

            for prime in PRIMES:
                if x % prime == 0:
                    p += 1
                
                while x % prime == 0:
                    x //= prime
                
                if prime * prime > x:
                    break
                
            if x != 1:
                p += 1

            count.append(p)
            A.append((p, i))

        A.sort(key = lambda x : (-x[0], x[1]))

        left = []
        stack = []

        for i in range(N):
            while stack and count[i] > count[stack[-1]]:
                stack.pop()
            
            if stack:
                left.append(i - stack[-1])
            else:
                left.append(i + 1)

            stack.append(i)
        
        right = []
        stack = []

        for i in range(N - 1, -1, -1):
            while stack and count[i] >= count[stack[-1]]:
                stack.pop()
            
            if stack:
                right.append(stack[-1] - i)
            else:
                right.append(N - i)
            
            stack.append(i)
        right.reverse()

        B = []

        for i, x in enumerate(nums):
            B.append((left[i] * right[i], x))
        
        B.sort(key = lambda x : -x[1])

        for n, x in B:
            operations = min(n, k)
            k -= operations
            res *= pow(x, operations, M)
            res %= M

            if k == 0: break
        
        return res


```

