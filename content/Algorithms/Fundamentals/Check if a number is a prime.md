---
title: Check if a number is a prime
tags:
  - algorithms
  - math
  - prime-numbers
date: 2025-05-25
---
## Introduction
A **prime number** is a natural number greater than 1 that has no positive divisors other than 1 and itself. Efficiently checking if a number is prime is a common task in mathematics and computer science, especially in cryptography and number theory.

## Implementation
```py
import math

def is_prime(n: int) -> bool:
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False

    # check for factors from 5 to sqrt(n), skipping even multiples
    for i in range(5, int(math.isqrt(n)) + 1, 6):
        if n % i == 0 or n % (i + 2) == 0:
            return False

    return True
```

## Complexity
- Time complexity: $O(\sqrt{n})$ — We check for factors only up to the square root of n, and skip unnecessary checks (like even numbers).
- Space complexity: $O(1)$ — Constant extra space is used regardless of input size.
## Resources