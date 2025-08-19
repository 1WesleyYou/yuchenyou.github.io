---
layout: single
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
toc: true
toc_sticky: true
last_modified_at: 2025-08-19
---

> **Actively seeking MS/PhD (Fall 2026) in Distributed Systems, Operating Systems, and Networking.**

[Download PDF](/files/Resume.pdf){: .btn .btn--primary }

**Yuchen You**  
Unit 5030, 1929 Plymouth Rd., Ann Arbor, MI 48105 · (+1) 734-510-0456 · <yuchenxr@umich.edu>  
Alt: <wesley_you@sjtu.edu.cn>

---

### Education
- **University of Michigan**, Ann Arbor, MI — *B.S.E. in Computer Science*, **GPA 3.94/4.00** *(2024–Present)*  
- **Shanghai Jiao Tong University**, Shanghai — *B.E. in Mechanical Engineering*, **GPA 3.83/4.00** *(2022–2024)*

---

### Research Experience
- **Agentic Distributed System Ops**, **Order Lab** (CSE), University of Michigan — *Advisor: Ryan (Peng) Huang*  *(May 2025–Present)*  
  - Built an **agent-based auto-mitigation** prototype for common distributed failures (overload, network faults).  
  - Evaluated on **ZooKeeper**; integrated **Prometheus** metrics and mitigation via **HAProxy**, **Resilience4j**; faults via **ChaosBlade**/**Kazoo**.  
  - Automated loop: *reproduce → measure → mitigate → verify*.

- **SoftRobot Electronic Control**, **HDR Lab** (Dept. of Robotics), University of Michigan — *Advisor: Xiaonan (Sean) Huang*  *(Sept 2024–Present)*  
  - Motion planning, **state estimation**, and pose rendering for modular soft-robotic arm sections.  
  - Led STM32 & Orange Pi control (C++/Rust): dynamics/PID, **CAN/I²C**, inter-MCU networking; contributed to PCB.  
  - PyTorch (ResNet) for model optimization; **industry collaboration with General Motors**.  
  - Demos/extended abstracts: **ICRA 2025 Workshop (Best Poster, Atlanta)**, RoboSoft 2025 Workshop (Lausanne), ICON 2025 (Purdue).

- **LLM-Guided Manipulation with Flexiv 7-DoF Arm**, **Sirius Lab** (SJTU) — *Advisor: Yutong Ban*  *(Feb–Sept 2024)*  
  - LLM→plan pipeline on **Flexiv RDK** with **ZED** depth sensing; FK/IK, smooth trajectories, constraints-aware control.  
  - Combined simulation and real runs to improve task reliability (e.g., jigsaw assembly).

---

### Selected Projects
- **Simulated Basic Operating System** — *EECS 482 (Jan–Apr 2025)*  
  - **Threads:** user-level multicore threads (swapcontext/makecontext), Mesa monitors; interrupts/core-suspend; **non-preemptive FIFO** queues.  
  - **Pager/MMU:** SWAP & FILE-backed pages; PTE present/reference/dirty bits; **COW + clock** eviction; supports `fork`/`mmap`.  
  - **NFS:** inode-based Unix-style NFS; concurrency via Boost shared/upgrade/unique locks; robust error handling.

- **Network Simulation with Mininet** — *EECS 489 (Jan–Apr 2025)*  
  - Custom topologies with **iperf-style** RTT/throughput (C++ sockets); proxy via `select`/`poll` + round-robin; **DASH** adaptive streaming.  
  - Transport emulation: TCP sliding window over UDP (**GBN/SR**, cumulative/selective ACKs); **L3 router** with ARP, ICMP, basic intra-domain routing.

- **Digital Forensics** — *EECS 388 (Jan–Apr 2025)*  
  - **Cryptanalysis & cracking:** length-extension, padding-oracle; John the Ripper (PDF/ODT), Hydra (SSH).  
  - **Web exploitation:** XSS/SQLi/CSRF; data enumeration.  
  - **Binary/RE:** BOF; **ROP/NOP-sled** vs DEP/ASLR; Ghidra decompilation & triage.  
  - **Protocols/2FA:** TLS 1.3 handshake; Google-style **TOTP**.

- **Origami-Inspired Soft Robotic Arm** — *HDR Lab (Sept 2024–Present)*  
  - Kresling origami + pneumatic actuation for confined-space manipulation.  
  - STM32/Orange Pi firmware (dynamics/PID, **CAN/I²C**); C++/Rust core algorithms; PCB collaboration.

- **Auto Sentry Robot Control** — *RoboMaster (2023–2024)*  
  - STM32-F407 platform; dual-gimbal stabilization; high-response 4-wheel chassis.  
  - **CAN/UART** pipelines for CV/LiDAR; IMU-based absolute-pose control.

---

### Skills
- **Programming:** C/C++, Rust, Python, Java, Bash; Git; CMake, Makefile, Maven  
- **Systems:** Linux; concurrency; MMU/paging; POSIX sockets (`select`/`poll`)  
- **Networking:** `tc`/iproute2; **HAProxy**; **Mininet**; TCP (GBN/SR), L3 routing  
- **Distributed:** Docker (Compose), Kubernetes; **ZooKeeper**, **HDFS**; **Prometheus + Grafana** (JMX Exporter)  
- **Reliability/Chaos:** **Resilience4j**, **ChaosBlade**  
- **Security:** Wireshark, Ghidra, John the Ripper, Hydra, sqlmap, Autopsy, Stegseek; ROP, padding-oracle, length-extension  
- **Robotics:** STM32, FreeRTOS; **CAN/I²C**; Flexiv RDK; PID/dynamics; C++/Rust firmware  
- **ML:** PyTorch  
- **Other:** SQLite; JavaScript/HTML/Markdown/LaTeX; Neovim (LSP via Mason), SSH, tmux, GDB/LLDB

---

### Honors & Awards
- **ICRA 2025 Workshop — Best Poster Award** *(May 2025)*  
- Cheng–Family Scholarship *(Jun 2024)*  
- RoboMaster University Championship — **Eastern Region Champion** *(May 2024)*  
- RoboMaster University League — **National Champion** *(Apr 2024)*  
- University Physics Competition — **Silver Medal** *(Nov 2023)*  
- SJTU Excellence Scholarship, Level B *(Dec 2023)*  
- Wu Jiong Sun Jie Sunshine Scholarship *(Nov 2023)*  
- RoboMaster University Championship — **National Champion** *(Aug 2023)*  
- SJTU Social Practice — **Third Prize** *(Aug 2023)*

---

### Service & Activities
- **Volunteer**, IEEE ICRA (Atlanta, GA), *May 2025*  
- **Teaching Assistant**, SJTU ENGR 1000J (Intro to Software Engineering), *2024*  
- **UM–SJTU Joint Institute Youth Volunteer Team**, *2023*  
- **Old Friends Youth Team (Shanghai)** — intergenerational communication events, *2023*

---

### Personal
- **Languages:** English (TOEFL 106/120), Chinese (Native)  
- **Hobbies:** Badminton; Rubik’s Cube; Linux customization (Arch Linux + Hyprland + Neovim + Fcitx5); MOBA games