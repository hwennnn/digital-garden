---
title: Threads
tags:
  - OS
date: 2025-06-14
---
A **thread** is a unit of execution that is given some time to run by the operating system.
Threads within a process share access to resources. A CPU can execute instructions
from one or more threads at the same time, depending on the number of cores. One
of the jobs of an operating system is to schedule threads on the CPU to make sure
that every [[process]] (and every thread within a process) gets a chance to run.