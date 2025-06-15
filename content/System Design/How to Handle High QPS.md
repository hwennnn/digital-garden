---
title: How to Handle High QPS
tags:
  - system-design
  - distributed-systems
date: 2025-06-15
---

# Backend optimization

- **Load Balancing**: Nginx/Envoy, DNS Round Robin
- **Caching**: CDN (Akamai, Cloudflare), Redis/Memcached
- **DB optimization**: Connection pooling, Query tuning, Read replicas, Sharding
- **Async processing**: Message queues (Kafka, RabbitMQ), background workers
- **Horizontal scaling**: Add more servers, stateless service design
- **Rate limiting**: To prevent abuse, e.g. token bucket/leaky bucket
- **Circuit Breakers & Failover**: Prevent cascading failures (Hystrix, Sentinel)
# Frontend optimization

- **HTTP/2 multiplexing**    
- **Preloading resources**
# Architecture Design

- **Microservices**: Independent scaling
- **Event-driven design**: Reduce synchronous operations
- **Database Partitioning**: To spread load
- **Auto-scaling (Kubernetes)**: Dynamically spin up/down pods  
# Infrastructure

- **Use of cloud providers (AWS/GCP/Azure)** with Auto Scaling Groups, Global Load Balancers
- **Service Mesh** (Istio, Linkerd) for better traffic control