---
title: 1169. Invalid Transactions
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - string
  - sorting
  - weekly-contest-151
  - contest-question
date: 2021-05-15
---

[Problem Link](https://leetcode.com/problems/invalid-transactions/)

## Description

---
<p>A transaction is possibly invalid if:</p>

<ul>
	<li>the amount exceeds <code>$1000</code>, or;</li>
	<li>if it occurs within (and including) <code>60</code> minutes of another transaction with the <strong>same name</strong> in a <strong>different city</strong>.</li>
</ul>

<p>You are given an array of strings <code>transaction</code> where <code>transactions[i]</code> consists of comma-separated values representing the name, time (in minutes), amount, and city of the transaction.</p>

<p>Return a list of <code>transactions</code> that are possibly invalid. You may return the answer in <strong>any order</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> transactions = [&quot;alice,20,800,mtv&quot;,&quot;alice,50,100,beijing&quot;]
<strong>Output:</strong> [&quot;alice,20,800,mtv&quot;,&quot;alice,50,100,beijing&quot;]
<strong>Explanation:</strong> The first transaction is invalid because the second transaction occurs within a difference of 60 minutes, have the same name and is in a different city. Similarly the second one is invalid too.</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> transactions = [&quot;alice,20,800,mtv&quot;,&quot;alice,50,1200,mtv&quot;]
<strong>Output:</strong> [&quot;alice,50,1200,mtv&quot;]
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> transactions = [&quot;alice,20,800,mtv&quot;,&quot;bob,50,1200,mtv&quot;]
<strong>Output:</strong> [&quot;bob,50,1200,mtv&quot;]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>transactions.length &lt;= 1000</code></li>
	<li>Each <code>transactions[i]</code> takes the form <code>&quot;{name},{time},{amount},{city}&quot;</code></li>
	<li>Each <code>{name}</code> and <code>{city}</code> consist of lowercase English letters, and have lengths between <code>1</code> and <code>10</code>.</li>
	<li>Each <code>{time}</code> consist of digits, and represent an integer between <code>0</code> and <code>1000</code>.</li>
	<li>Each <code>{amount}</code> consist of digits, and represent an integer between <code>0</code> and <code>2000</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='invalid-transactions'
class Solution:
    def invalidTransactions(self, transactions: List[str]) -> List[str]:
        ans = []
        length = len(transactions)
        if not length: return ans
        name,time,money,city = [],[],[],[]
        add = [1] * length
        
        for trans in transactions:
            tran = trans.split(',')
            name.append(tran[0])
            time.append(int(tran[1]))
            money.append(int(tran[2]))
            city.append(tran[3])
            
        for i in range(length):
            if money[i] > 1000:
                add[i] = False
            for j in range(i+1,length):
                if name[i] == name[j] and abs(time[i]-time[j])<= 60 and city[i]!=city[j]:
                    add[i] = False
                    add[j] = False
                    
        for ind,val in enumerate(add):
            if not val:
                ans.append(transactions[ind])
                
        return ans
```

