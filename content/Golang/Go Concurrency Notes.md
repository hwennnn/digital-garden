---
title: Go Concurrency Notes
tags:
  - golang
  - concurrency
  - goroutines
date: 2025-06-15
---

> [!note]
> The notes were taken when reading the book [Learning Go](https://www.oreilly.com/library/view/learning-go/9781492077206/). Also check out this [Github repo](https://github.com/hwennnn/golang-tutorials) for the implementation of the examples.

## Core Concepts

### What is Concurrency?

- **Concurrency ≠ Parallelism**: Concurrency is about structure, not speed
- Go uses **CSP (Communicating Sequential Processes)** model
- **Key principle**: "Share memory by communicating; do not communicate by sharing memory"

### When to Use Concurrency

✅ **Use when**:

- Combining data from multiple independent operations
- I/O operations (network, disk) - thousands of times slower than memory
- Operations that can run without depending on each other's output

❌ **Don't use when**:

- Fast in-memory algorithms (overhead > benefits)
- Sequential dependencies exist
- Unsure if it helps (benchmark first!)

## Goroutines

### What is a Goroutine?

A goroutine is a lightweight, concurrent execution unit managed by the Go runtime. Think of it as a function that runs alongside other functions in the same address space, without the overhead of traditional threads.

### Key Features

- **Lightweight processes** managed by Go runtime
- Faster creation than OS threads
- Smaller initial stack size (grows as needed)
- Faster context switching (within process)
- Runtime scheduler optimizes with network poller & garbage collector

### Usage

```go
// Launch goroutine
go func() {
    // work here
}()

// Common pattern: closure for concurrency bookkeeping
func runThingConcurrently(in <-chan int, out chan<- int) {
    go func() {
        for val := range in {
            result := process(val)
            out <- result
        }
    }()
}
```

### Critical Rules

1. **Always clean up goroutines** - prevent goroutine leaks
2. **Pass variables to avoid capture issues**:

   ```go
   // Wrong - captures same variable
   for _, v := range items {
       go func() { use(v) }() // All see last value
   }

   // Right - pass as parameter
   for _, v := range items {
       go func(val int) { use(val) }(v)
   }
   ```

## Channels

### Types & Creation

```go
ch := make(chan int)           // Unbuffered
ch := make(chan int, 10)       // Buffered (capacity 10)
ch := make(<-chan int)         // Read-only
ch := make(chan<- int)         // Write-only
```

### Operations

```go
a := <-ch        // Read
ch <- b          // Write
v, ok := <-ch    // Read with closed check
close(ch)        // Close channel
```

### Channel States & Behavior

| State                  | Read                  | Write            | Close |
| ---------------------- | --------------------- | ---------------- | ----- |
| **Unbuffered, open**   | Pause until write     | Pause until read | Works |
| **Unbuffered, closed** | Return zero value     | PANIC            | PANIC |
| **Buffered, open**     | Pause if empty        | Pause if full    | Works |
| **Buffered, closed**   | Return remaining/zero | PANIC            | PANIC |
| **Nil**                | Hang forever          | Hang forever     | PANIC |

### Best Practices

- **Unbuffered by default** - use buffered only when you know exact goroutine count
- **Writer closes channel** - never the reader
- **Use comma ok idiom** for closed channel detection
- **for-range loops** automatically handle channel closing

## select Statement

### Purpose

- **Prevents starvation** - randomly chooses from available cases
- **Avoids deadlocks** - doesn't favor any particular case
- **Control structure for concurrency**

### Usage Patterns

```go
// Basic select
select {
case v := <-ch1:
    // handle ch1
case ch2 <- x:
    // wrote to ch2
case <-done:
    return
default:
    // non-blocking fallback
}

// for-select loop (common pattern)
for {
    select {
    case <-done:
        return
    case v := <-ch:
        process(v)
    }
}
```

### Advanced Techniques

- **Disable case with nil channel**: Set channel to `nil` to stop case from executing
- **Timeout pattern**: Use `time.After()` in select case
- **Non-blocking operations**: Use `default` case

## Common Patterns

### 1. Done Channel Pattern

```go
done := make(chan struct{})
// Signal completion by closing
close(done)
// Check in select
case <-done:
    return
```

### 2. Cancellation Function

```go
func countTo(max int) (<-chan int, func()) {
    ch := make(chan int)
    done := make(chan struct{})
    cancel := func() { close(done) }
    // ... goroutine with select on done
    return ch, cancel
}
```

### 3. Timeout Pattern

```go
select {
case result := <-workCh:
    return result, nil
case <-time.After(2 * time.Second):
    return nil, errors.New("timeout")
}
```

### 4. WaitGroup Pattern

```go
var wg sync.WaitGroup
wg.Add(3)
for i := 0; i < 3; i++ {
    go func() {
        defer wg.Done()
        doWork()
    }()
}
wg.Wait()
```

### 5. sync.Once Pattern

```go
var once sync.Once
var parser SlowParser

func getParser() SlowParser {
    once.Do(func() {
        parser = initParser() // Only runs once
    })
    return parser
}
```

### 6. Backpressure Pattern

```go
type PressureGauge struct {
    ch chan struct{}
}

func (pg *PressureGauge) Process(f func()) error {
    select {
    case <-pg.ch:
        f()
        pg.ch <- struct{}{}
        return nil
    default:
        return errors.New("no capacity")
    }
}
```

## Buffered vs Unbuffered Channels

### Unbuffered (Default)

- **Synchronous**: Writer waits for reader
- **Use for**: Coordination, handoffs, guaranteeing processing

### Buffered

- **Asynchronous**: Writer doesn't wait (until buffer full)
- **Use when**:
  - Know exact number of goroutines
  - Want to limit concurrent operations
  - Need to queue limited amount of work

## Mutexes - When Channels Aren't Right

### When to Use Mutexes

- **Sharing access to struct fields** (not transferring data)
- **Simple read/write operations** without processing
- **Performance critical sections** (after benchmarking)

### Types

```go
var mu sync.Mutex        // Exclusive lock
var rwmu sync.RWMutex    // Reader/writer lock

// Always use defer
mu.Lock()
defer mu.Unlock()

rwmu.RLock()    // Multiple readers OK
defer rwmu.RUnlock()
```

### Mutex Rules

- **Never copy mutexes** - always use pointers
- **Not reentrant** - same goroutine can't acquire twice
- **Always pair Lock/Unlock** - use defer
- **Don't hold locks during function calls** - risk of deadlock

## Decision Tree: Channels vs Mutexes

1. **Coordinating goroutines or tracking value transformation** → Use channels
2. **Sharing access to struct field** → Use mutexes
3. **Performance issue with channels** → Consider mutexes (after benchmarking)

## API Design Principles

### Keep Concurrency Internal

- **Don't expose channels/mutexes** in public APIs
- **Use closures** to wrap business logic
- **Separation of concerns**: concurrency vs business logic
- **Exception**: Concurrency helper libraries (like `time.After`)

## Advanced Topics (Brief)

### sync.Map

- **Rarely useful** - specific use cases only
- **When**: Insert once, read many times
- **Limitation**: Uses `interface{}` types

### Atomics (sync/atomic)

- **Expert-level optimization**
- **Most developers**: Stick to goroutines and mutexes
- **Use case**: Squeezing last bit of performance

## Key Takeaways

1. **Start simple** - use concurrency only when beneficial
2. **Benchmark first** - don't assume concurrency helps
3. **Clean up goroutines** - prevent leaks
4. **Channels for coordination** - mutexes for shared state
5. **Keep APIs concurrency-free** - hide implementation details
6. **Use established patterns** - don't reinvent the wheel
7. **Context for timeouts** - better than `time.After` alone
