---
title: Coroutine
tags:
  - OS
date: 2025-06-15
---
# Introduction
A **coroutine** is a function that can suspend its execution and be resumed later, allowing for cooperative multitasking

Coroutines are typically implemented using:
- **User-space context switching**: the compiler/runtime saves registers, stack pointers, and instruction pointers of the coroutine so it can resume later.
- **State machines**: in languages like Go (goroutines) or Python (async/await), the compiler transforms functions into state machines that can yield execution and resume later.
- **Event loop (for async coroutines)**: coroutines cooperate and are scheduled in a single thread via an event loop (e.g. Python’s asyncio, JavaScript).
- Go uses M:N scheduling (many goroutines multiplexed onto fewer OS threads).

# [[Thread]] vs [[Coroutine]] – Key Differences and Application Scenarios

|**Aspect**|**Thread**|**Coroutine**|
|---|---|---|
|**Switching**|Kernel space (slow)|User space (fast)|
|**Memory footprint**|Heavy (MBs stack per thread)|Light (KBs stack per coroutine)|
|**Parallelism**|True parallelism (multi-core)|Single-threaded unless supported|
|**Blocking**|Can block the whole thread|Designed for non-blocking async|
|**Creation overhead**|High|Very low|
|**Scheduling**|OS-managed|Program/runtime-managed|

## When to use coroutines

- High I/O-bound workloads (e.g. web servers, async database queries)
- Many lightweight concurrent tasks (e.g. millions of requests in Nginx, Go servers)
## When to use threads
- CPU-bound workloads (e.g. heavy computation, image processing)
- True parallelism needed on multiple cores
- Blocking system calls required (e.g. file system, legacy code)
