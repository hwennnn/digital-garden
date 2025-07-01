---
title: 2286. Booking Concert Tickets in Groups
draft: false
tags: 
  - leetcode-hard
  - binary-search
  - design
  - binary-indexed-tree
  - segment-tree
  - biweekly-contest-79
  - contest-question
date: 2022-06-02
---

[Problem Link](https://leetcode.com/problems/booking-concert-tickets-in-groups/)

## Description

---
<p>A concert hall has <code>n</code> rows numbered from <code>0</code> to <code>n - 1</code>, each with <code>m</code> seats, numbered from <code>0</code> to <code>m - 1</code>. You need to design a ticketing system that can allocate seats in the following cases:</p>

<ul>
	<li>If a group of <code>k</code> spectators can sit <strong>together</strong> in a row.</li>
	<li>If <strong>every</strong> member of a group of <code>k</code> spectators can get a seat. They may or <strong>may not</strong> sit together.</li>
</ul>

<p>Note that the spectators are very picky. Hence:</p>

<ul>
	<li>They will book seats only if each member of their group can get a seat with row number <strong>less than or equal</strong> to <code>maxRow</code>. <code>maxRow</code> can <strong>vary</strong> from group to group.</li>
	<li>In case there are multiple rows to choose from, the row with the <strong>smallest</strong> number is chosen. If there are multiple seats to choose in the same row, the seat with the <strong>smallest</strong> number is chosen.</li>
</ul>

<p>Implement the <code>BookMyShow</code> class:</p>

<ul>
	<li><code>BookMyShow(int n, int m)</code> Initializes the object with <code>n</code> as number of rows and <code>m</code> as number of seats per row.</li>
	<li><code>int[] gather(int k, int maxRow)</code> Returns an array of length <code>2</code> denoting the row and seat number (respectively) of the <strong>first seat</strong> being allocated to the <code>k</code> members of the group, who must sit <strong>together</strong>. In other words, it returns the smallest possible <code>r</code> and <code>c</code> such that all <code>[c, c + k - 1]</code> seats are valid and empty in row <code>r</code>, and <code>r &lt;= maxRow</code>. Returns <code>[]</code> in case it is <strong>not possible</strong> to allocate seats to the group.</li>
	<li><code>boolean scatter(int k, int maxRow)</code> Returns <code>true</code> if all <code>k</code> members of the group can be allocated seats in rows <code>0</code> to <code>maxRow</code>, who may or <strong>may not</strong> sit together. If the seats can be allocated, it allocates <code>k</code> seats to the group with the <strong>smallest</strong> row numbers, and the smallest possible seat numbers in each row. Otherwise, returns <code>false</code>.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input</strong>
[&quot;BookMyShow&quot;, &quot;gather&quot;, &quot;gather&quot;, &quot;scatter&quot;, &quot;scatter&quot;]
[[2, 5], [4, 0], [2, 0], [5, 1], [5, 1]]
<strong>Output</strong>
[null, [0, 0], [], true, false]

<strong>Explanation</strong>
BookMyShow bms = new BookMyShow(2, 5); // There are 2 rows with 5 seats each 
bms.gather(4, 0); // return [0, 0]
                  // The group books seats [0, 3] of row 0. 
bms.gather(2, 0); // return []
                  // There is only 1 seat left in row 0,
                  // so it is not possible to book 2 consecutive seats. 
bms.scatter(5, 1); // return True
                   // The group books seat 4 of row 0 and seats [0, 3] of row 1. 
bms.scatter(5, 1); // return False
                   // There is only one seat left in the hall.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>1 &lt;= m, k &lt;= 10<sup>9</sup></code></li>
	<li><code>0 &lt;= maxRow &lt;= n - 1</code></li>
	<li>At most <code>5 * 10<sup>4</sup></code> calls <strong>in total</strong> will be made to <code>gather</code> and <code>scatter</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='booking-concert-tickets-in-groups'
class Node:
    def __init__(self, start, end):
        self.left = None
        self.right = None
        self.start = start
        self.end = end
        self.total = 0
        self.mx = 0

class SegTree:

    def __init__(self, n, val):
        self.root = self.buildTree(0, n, val)
    
    def buildTree(self, start, end, val):
        if start > end: return None

        if start == end:
            node = Node(start, end)
            node.total = val
            node.mx = val
            
            return node
        
        node = Node(start, end)
        mid = start + (end - start) // 2
        node.left = self.buildTree(start, mid, val)
        node.right = self.buildTree(mid + 1, end, val)
        node.total = node.left.total + node.right.total
        node.mx = max(node.left.mx, node.right.mx)
        
        return node

    def update(self, index: int, val: int) -> None:
        self.updateR(self.root, index, val)
    
    def updateR(self, node, index, val):
        
        if node.start == node.end:
            node.total -= val
            node.mx -= val
        else:
            mid = node.start + (node.end - node.start) // 2
            if index <= mid:
                self.updateR(node.left, index, val)
            else:
                self.updateR(node.right, index, val)
            
            node.total = node.left.total + node.right.total
            node.mx = max(node.left.mx, node.right.mx)

    def sumRange(self, left: int, right: int) -> int:
        return self.sumRangeR(self.root, left, right)
    
    def sumRangeR(self, node, left, right):   
        if not node or node.start > right or node.end < left: return 0

        if node.start >= left and node.end <= right: return node.total
        
        l = self.sumRangeR(node.left, left, right)
        r = self.sumRangeR(node.right, left, right)
        
        return l + r
    
    def maxQuery(self, k, maxRow, seats):
        
        def maxQueryHelper(node):
            if node.start == node.end:
                if node.end > maxRow or node.total < k:
                    return []
                
                if node.end <= maxRow and node.total >= k:
                    return [node.end, seats - node.total]
        
            return maxQueryHelper(node.left) if node.left.mx >= k else maxQueryHelper(node.right)
        
        return maxQueryHelper(self.root)
        
class BookMyShow:

    def __init__(self, n: int, m: int):
        self.seg = SegTree(n - 1, m)  
        self.seats = [m] * n
        self.m = m
        self.n = n
        self.startRow = 0
        
    def gather(self, k: int, maxRow: int) -> List[int]:
        res = self.seg.maxQuery(k, maxRow, self.m)
        
        if res:
            row = res[0]
            self.seg.update(row, k)
            self.seats[row] -= k
        
        return res
        

    def scatter(self, k: int, maxRow: int) -> bool:
        if self.seg.sumRange(0, maxRow) < k:
            return False
    
        index = self.startRow
        curr = 0
        
        while curr < k:
            rest = k - curr
            
            if rest >= self.seats[index]:
                self.seg.update(index, self.seats[index])
                curr += self.seats[index]
                self.seats[index] = 0
                index += 1
                self.startRow = index
            else:
                self.seg.update(index, rest)
                self.seats[index] -= rest
                curr += rest
        
        return True
        
# Your BookMyShow object will be instantiated and called as such:
# obj = BookMyShow(n, m)
# param_1 = obj.gather(k,maxRow)
# param_2 = obj.scatter(k,maxRow)
```

