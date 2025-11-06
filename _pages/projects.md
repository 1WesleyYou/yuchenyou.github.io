---
layout: single
title: "Projects"
permalink: /projects/
author_profile: true
toc: false
---

## Agentic Distributed System Ops

[Order Lab](https://orderlab.io/) @ UMich, May 2025–Present, Advised by [Ryan Huang](https://web.eecs.umich.edu/~ryanph/)

![agentic-ds-ops](/yuchenyou.github.io/images/agent_ds_ops.png)

- Built an **agent-based auto-mitigation loop** (reproduce $\rightarrow$ measure $\rightarrow$ decide $\rightarrow$ mitigate) for common failures: overload, network latency/loss/partitions.
- **Targets:** Apache **ZooKeeper/HDFS** (3-node dev clusters); faults via **ChaosBlade/Chaos Mesh** and `tc` network controls; synthetic workload generators.
- **Mitigation:** **HAProxy** (TCP routing/failover) and **Resilience4j** (circuit breaker, bulkhead, rate limiter) with self-implemented scripted rollback/timeout policies.
- **Observability:** **Prometheus + JMX Exporter + ps/JVM Flags** tracking SLO metrics `p99_latency`, `outstanding_requests`, and System resources metrics `IFACE_throughput`, `cpu_usage`

## Cuda Proxy Player

UMich CSE 582 Term Project (Advanced Operating Systems by [Prof. Ryan Huang](https://web.eecs.umich.edu/~ryanph)), Aug-Dec 2025

![cuda-proxy-player](/yuchenyou.github.io/images/cpp_workflow.png)

- Designed a **hybrid CUDA runtime** combining **CUDA Graphs** for stable compute paths and **persistent kernels** for irregular on-device tasks.  
- Reduced **kernel launch overhead** and **tail latency** without brittle fusion, enabling dynamic routing and static graph reuse.  
- Implemented bucket-based static pooling, piecewise graph capture, and stream-level synchronization for efficient MoE execution.  

## Cloud VLM for AV Control

UMich CSE 589 Term Project (Advanced Networking by [Prof. Z. Morley Mao](https://web.eecs.umich.edu/~zmao/)), Aug-Dec 2025

![fastEMMA](/yuchenyou.github.io/images/fastEMMA.drawio.png)

- Designed a **hybrid local–cloud pipeline** combining OpenEMMA and large VLMs for efficient & reliable decision-making.  
- **Selective offloading** of static-scene context (e.g., construction, obstacles) to cloud models; dynamic agents handled locally.  
- **Network-aware control** adapts send rate and compression based on latency to balance accuracy and responsiveness.

---

## Simulated Basic Operating System

UMich EECS 482, Jan–Apr 2025

- **Threads:** user-level multicore threads (swapcontext/makecontext), Mesa monitors; interrupts/core-suspend; **non-preemptive FIFO** run queues.
- **Pager/MMU:** SWAP & FILE-backed pages; page tables with present/reference/dirty bits; **COW + clock** eviction; supports `fork`/`mmap`.
- **NFS:** inode-based, Unix-style NFS; concurrency with Boost shared/upgrade/unique locks; robust error handling.

---

## Network Simulation with Mininet

EECS 489, Jan–Apr 2025

- Custom topologies with **iperf-style** RTT/throughput (C++ sockets); proxy via `select`/`poll` + round-robin; **DASH** adaptive streaming.
- Transport emulation: TCP sliding window over UDP (**GBN/SR**, cumulative/selective ACKs); **L3 router** with ARP, ICMP, basic intra-domain routing.

---

## Digital Forensics

EECS 388, Jan–Apr 2025

- **Cryptanalysis & cracking:** length-extension, padding-oracle; John the Ripper (PDF/ODT), Hydra (SSH).
- **Web exploitation:** data enumeration; auth bypass via **XSS/SQLi/CSRF**.
- **Binary/RE:** BOF; **ROP/NOP-sled** vs DEP/ASLR; Ghidra decompilation & triage.
- **Protocols/2FA:** TLS 1.3 handshake; Google-style **TOTP**.

---

## Origami-Inspired Soft Robotic Arm

[HDR Lab](https://soft.robotics.umich.edu/) @ UMich, Sept 2024–Present, Advised by [Xiaonan Huang](https://soft.robotics.umich.edu/)

- Kresling origami + pneumatic actuation for confined-space manipulation.
- Led STM32 & Orange Pi firmware (dynamics/PID, **CAN/I²C**); C++/**Rust** core algorithms; contributed to PCB design.
- Demos/extended abstracts: **ICRA 2025 Workshop (Best Poster)**, RoboSoft 2025 Workshop, ICON 2025.  

---

## LLM-Guided Manipulation with Flexiv 7-DoF Arm

[Sirius Lab](https://banyutong.github.io/sirius_lab_website/) @ SJTU, Feb–Sept 2024, Advised by [Yutong Ban](https://people.csail.mit.edu/yban/)

- Built an **LLM-driven pipeline** that turns natural-language instructions as well as RGBD visual inputs into executable manipulation plans on a **Flexiv 7-DoF** manipulator.
- Implemented **FK/IK** and motion planning with **Flexiv RDK**; integrated **ZED** depth perception for scene understanding and grasp placement.
- Designed a constraints-aware controller (joint/velocity/workspace limits) with smooth trajectories and **closed-loop** refinement from vision feedback.
- Combined **simulation data** with real runs to improve task reliability.
  
---

## Auto Sentry Robot Control

RoboMaster @ SJTU, 2023–2024, Won National Championship in the 2023 RoboMaster Competition (Awarded by DJI)

- STM32-F407 platform; dual-gimbal stabilization with optimized PID controller; high-response 4 steering wheel chassis.
- **CAN/UART** pipelines for CV/LiDAR;
- IMU-based absolute-pose control.
- High precision shooting with flywheel speed & lead-angle compensation.
