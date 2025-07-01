---
title: 2166. Design Bitset
draft: false
tags: 
  - leetcode-medium
  - array
  - hash-table
  - string
  - design
  - weekly-contest-279
  - contest-question
date: 2022-02-06
---

[Problem Link](https://leetcode.com/problems/design-bitset/)

## Description

---
<p>A <strong>Bitset</strong> is a data structure that compactly stores bits.</p>

<p>Implement the <code>Bitset</code> class:</p>

<ul>
	<li><code>Bitset(int size)</code> Initializes the Bitset with <code>size</code> bits, all of which are <code>0</code>.</li>
	<li><code>void fix(int idx)</code> Updates the value of the bit at the index <code>idx</code> to <code>1</code>. If the value was already <code>1</code>, no change occurs.</li>
	<li><code>void unfix(int idx)</code> Updates the value of the bit at the index <code>idx</code> to <code>0</code>. If the value was already <code>0</code>, no change occurs.</li>
	<li><code>void flip()</code> Flips the values of each bit in the Bitset. In other words, all bits with value <code>0</code> will now have value <code>1</code> and vice versa.</li>
	<li><code>boolean all()</code> Checks if the value of <strong>each</strong> bit in the Bitset is <code>1</code>. Returns <code>true</code> if it satisfies the condition, <code>false</code> otherwise.</li>
	<li><code>boolean one()</code> Checks if there is <strong>at least one</strong> bit in the Bitset with value <code>1</code>. Returns <code>true</code> if it satisfies the condition, <code>false</code> otherwise.</li>
	<li><code>int count()</code> Returns the <strong>total number</strong> of bits in the Bitset which have value <code>1</code>.</li>
	<li><code>String toString()</code> Returns the current composition of the Bitset. Note that in the resultant string, the character at the <code>i<sup>th</sup></code> index should coincide with the value at the <code>i<sup>th</sup></code> bit of the Bitset.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input</strong>
[&quot;Bitset&quot;, &quot;fix&quot;, &quot;fix&quot;, &quot;flip&quot;, &quot;all&quot;, &quot;unfix&quot;, &quot;flip&quot;, &quot;one&quot;, &quot;unfix&quot;, &quot;count&quot;, &quot;toString&quot;]
[[5], [3], [1], [], [], [0], [], [], [0], [], []]
<strong>Output</strong>
[null, null, null, null, false, null, null, true, null, 2, &quot;01010&quot;]

<strong>Explanation</strong>
Bitset bs = new Bitset(5); // bitset = &quot;00000&quot;.
bs.fix(3);     // the value at idx = 3 is updated to 1, so bitset = &quot;00010&quot;.
bs.fix(1);     // the value at idx = 1 is updated to 1, so bitset = &quot;01010&quot;. 
bs.flip();     // the value of each bit is flipped, so bitset = &quot;10101&quot;. 
bs.all();      // return False, as not all values of the bitset are 1.
bs.unfix(0);   // the value at idx = 0 is updated to 0, so bitset = &quot;00101&quot;.
bs.flip();     // the value of each bit is flipped, so bitset = &quot;11010&quot;. 
bs.one();      // return True, as there is at least 1 index with value 1.
bs.unfix(0);   // the value at idx = 0 is updated to 0, so bitset = &quot;01010&quot;.
bs.count();    // return 2, as there are 2 bits with value 1.
bs.toString(); // return &quot;01010&quot;, which is the composition of bitset.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= size &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= idx &lt;= size - 1</code></li>
	<li>At most <code>10<sup>5</sup></code> calls will be made <strong>in total</strong> to <code>fix</code>, <code>unfix</code>, <code>flip</code>, <code>all</code>, <code>one</code>, <code>count</code>, and <code>toString</code>.</li>
	<li>At least one call will be made to <code>all</code>, <code>one</code>, <code>count</code>, or <code>toString</code>.</li>
	<li>At most <code>5</code> calls will be made to <code>toString</code>.</li>
</ul>


## Solution

---
### Python3
``` py title='design-bitset'
class Bitset:

    def __init__(self, size: int):
        self.n = size
        self.mask = [0] * size
        self.counts = 0
        self.hasFlip = False

    def fix(self, idx: int) -> None:
        if not self.hasFlip:
            self.fixHelper(idx)
        else:
            self.unfixHelper(idx)
        # print(self.toString())
    
    def fixHelper(self, idx):
        n = self.n - idx - 1
        
        if self.mask[idx] == 0:
            self.mask[idx] = 1
            self.counts += 1

    def unfix(self, idx: int) -> None:
        if self.hasFlip:
            self.fixHelper(idx)
        else:
            self.unfixHelper(idx)
    
    def unfixHelper(self, idx: int) -> None:
        n = self.n - idx - 1
        
        if self.mask[idx] == 1:
            self.mask[idx] = 0
            self.counts -= 1
        
    def flip(self) -> None:
        self.hasFlip = not self.hasFlip
        
    def all(self) -> bool:
        if not self.hasFlip:
            return self.counts == self.n
        else:
            return self.counts == 0

    def one(self) -> bool:
        if not self.hasFlip:
            return self.counts > 0
        else:
            return self.n - self.counts > 0

    def count(self) -> int:
        if not self.hasFlip:
            return self.counts
        else:
            return self.n - self.counts

    def toString(self) -> str:
        res = []
        
        for x in self.mask:
            if self.hasFlip:
                res.append("1" if x == 0 else "0")
            else:
                res.append(str(x))
        
        return "".join(res)


# Your Bitset object will be instantiated and called as such:
# obj = Bitset(size)
# obj.fix(idx)
# obj.unfix(idx)
# obj.flip()
# param_4 = obj.all()
# param_5 = obj.one()
# param_6 = obj.count()
# param_7 = obj.toString()
```

