---
layout: single
title: "Projects"
permalink: /projects/
author_profile: true
toc: false
---

## Agentic Distributed System Ops

*(Order Lab @ UMich, May 2025–Present, Advised by [Ryan Huang](https://web.eecs.umich.edu/~ryanph/))*

- Built an **agent-based auto-mitigation loop** (reproduce $\rightarrow$ measure $\rightarrow$ decide $\rightarrow$ mitigate) for common failures: overload, network latency/loss/partitions.
- **Targets:** Apache **ZooKeeper/HDFS** (3-node dev clusters); faults via **ChaosBlade/Chaos Mesh** and `tc` network controls; synthetic workload generators.
- **Mitigation:** **HAProxy** (TCP routing/failover) and **Resilience4j** (circuit breaker, bulkhead, rate limiter) with scripted rollback/timeout policies.
- **Observability:** **Prometheus + JMX Exporter** tracking `avg_latency`, `outstanding_requests`, connections, session expirations, leader stability, and error rate; SLO-oriented dashboards.

---

## Simulated Basic Operating System

*(UMich EECS 482, Jan–Apr 2025)*

- **Threads:** user-level multicore threads (swapcontext/makecontext), Mesa monitors; interrupts/core-suspend; **non-preemptive FIFO** run queues.
- **Pager/MMU:** SWAP & FILE-backed pages; page tables with present/reference/dirty bits; **COW + clock** eviction; supports `fork`/`mmap`.
- **NFS:** inode-based, Unix-style NFS; concurrency with Boost shared/upgrade/unique locks; robust error handling.

---

## Network Simulation with Mininet *(EECS 489, Jan–Apr 2025)*

- Custom topologies with **iperf-style** RTT/throughput (C++ sockets); proxy via `select`/`poll` + round-robin; **DASH** adaptive streaming.
- Transport emulation: TCP sliding window over UDP (**GBN/SR**, cumulative/selective ACKs); **L3 router** with ARP, ICMP, basic intra-domain routing.

---

## Digital Forensics *(EECS 388, Jan–Apr 2025)*

- **Cryptanalysis & cracking:** length-extension, padding-oracle; John the Ripper (PDF/ODT), Hydra (SSH).
- **Web exploitation:** data enumeration; auth bypass via **XSS/SQLi/CSRF**.
- **Binary/RE:** BOF; **ROP/NOP-sled** vs DEP/ASLR; Ghidra decompilation & triage.
- **Protocols/2FA:** TLS 1.3 handshake; Google-style **TOTP**.

---

## Origami-Inspired Soft Robotic Arm

*(HDR Lab @ UMich, Sept 2024–Present, Advised by [Xiaonan Huang](https://soft.robotics.umich.edu/))*

- Kresling origami + pneumatic actuation for confined-space manipulation.
- Led STM32 & Orange Pi firmware (dynamics/PID, **CAN/I²C**); C++/Rust core algorithms; contributed to PCB design.
- Demos/extended abstracts: **ICRA 2025 Workshop (Best Poster)**, RoboSoft 2025 Workshop, ICON 2025.  
  Lab: [HDR Lab](https://soft.robotics.umich.edu/)

---

## LLM-Guided Manipulation with Flexiv 7-DoF Arm 

*(Sirius Lab @ SJTU, Feb–Sept 2024, Advised by [Yutong Ban](https://people.csail.mit.edu/yban/))*

- Built an **LLM-driven pipeline** that turns natural-language instructions into executable manipulation plans on a Flexiv **7-DoF** arm.
- Implemented **FK/IK** and motion planning with **Flexiv RDK**; integrated **ZED** depth perception for scene understanding and grasp placement.
- Designed a constraints-aware controller (joint/velocity/workspace limits) with smooth trajectories and **closed-loop** refinement from vision feedback.
- Combined **simulation data** with real runs to improve task reliability (e.g., jigsaw puzzle assembly).
  
---

## Auto Sentry Robot Control *(RoboMaster @ SJTU, 2023–2024)*

- STM32-F407 platform; dual-gimbal stabilization; high-response 4-wheel chassis.
- **CAN/UART** pipelines for CV/LiDAR; IMU-based absolute-pose control.
