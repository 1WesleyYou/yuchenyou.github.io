---
layout: single
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
toc: true
toc_sticky: true
last_modified_at: 2025-08-19
---

> **Actively seeking PhD positions (Fall 2026) in Operating Systems & Distributed Systems & Networking.**

[Download PDF](/yuchenyou.github.io/files/Resume.pdf){: .btn .btn--primary }

**Yuchen You**  
Unit 5030, 1929 Plymouth Rd., Ann Arbor, MI 48105 · (+1) 734 510 0456 · <yuchenxr@umich.edu> <wesley_you@sjtu.edu.cn>

---

### Education

- **University of Michigan**, Ann Arbor, MI — _B.S.E. in Computer Science_  
  GPA **3.94/4.00** (updated May 20, 2025). _2024–Present._
- **Shanghai Jiao Tong University**, Shanghai — _B.E. in Mechanical Engineering_  
  GPA **3.83/4.00**. _2022–2024._

---

### Research Experience

- **SoftRobot Electronic Control**, HDR Lab, Robotics (Advisor: Xiaonan Huang) — _UMich_  
  _Sept 2024–Present._  
  Designed motion planning, state reconstruction, and pose rendering for modular soft robotic arm sections; led STM32 & Orange Pi control algorithms (dynamics, PID, CAN/I²C) in C++/Rust; contributed to PCB design; set up inter-MCU networking.  
  _Workshops & recognition:_ ICRA 2025 Workshop (Best Poster), RoboSoft 2025 Workshop (EPFL), ICON 2025 (Purdue).

- **Control Developer**, UM–SJTU Joint Institute (Advisor: Yutong Ban)  
  _Feb 2024–Sept 2024._  
  Built control for a Flexiv 7-DoF arm (Flexiv-RDK), integrating forward/inverse kinematics, depth sensing (ZED), and path planning for natural-language task execution.

---

### Selected Projects

- **Simulated Basic Operating System** — EECS 482 (Jan–Apr 2025)

  - Concurrent scheduler using Mesa monitors.
  - User-level threading via `swapcontext/makecontext`; lifecycle + mutex/condvar/spinlock; interrupt & core-suspend; FIFO run queues.
  - Pager/MMU sim: SWAP/FILE-backed pages, page tables/dirty bits, COW, clock eviction; fork/mmap-like ops.
  - Unix-style **NFS** with inode model and Boost shared/upgrade/unique locks; robust error handling.

- **Network Simulation with Mininet** — EECS 489 (Jan–Apr 2025)

  - Custom topologies; RTT/throughput measurement (C++ sockets).
  - Video proxy with `select/poll`; round-robin LB; **DASH** adaptive streaming.
  - Transport emulation: TCP sliding window over UDP; Go-Back-N & Selective Repeat; cumulative/selective ACKs.
  - L3 router: multi-IF routing, ARP cache, ICMP echo, simple intra-domain logic.

- **Digital Forensics & Security** — EECS 388 (Jan–Apr 2025)  
  Cryptanalysis (length-extension, padding-oracle), password cracking (John the Ripper), SSH brute-force (Hydra), web exploitation (XSS/SQLi), binary exploitation (BOF, ROP, NOP-sled vs DEP/ASLR), reverse engineering (Ghidra), steganalysis, TLS 1.3 study, TOTP generator.

- **Origami-Inspired Soft Robotic Arm** — HDR Lab (Sept 2024–Present)  
  Kresling origami, pneumatic actuation workflow, STM32/Orange Pi firmware (dynamics, PID, CAN/I²C) in C++/Rust; PCB collaboration.

- **Auto Sentry Robot Control** — RoboMaster (2023–2024)  
  STM32-F407; dual-gimbal stabilization; 4-wheel high-response chassis; CAN/UART pipelines for CV & LiDAR; IMU-based absolute pose control.

---

### Skills

- **Languages:** C++, Python, C, Rust, MATLAB, Elm, Shell Script, Visual Basic
- **Frameworks/Libs:** C++ Boost (threads/mutex/regex), C++/Python sockets, FreeRTOS, Django, Flexiv RDK, PyTorch, spdlog
- **Scripting/Markup:** JavaScript, HTML
- **Databases:** SQLite3
- **Security Tools:** John-the-Ripper, Hydra, sqlmap, Wireshark, Ghidra, Autopsy, StegSeek
- **Linux/Dev Tools:** Git, Docker, GDB (codelldb), Mininet, Neovim + LSP (Mason), CMake, Makefile, clang-format

---

### Honors & Awards

- **ICRA Best Poster Award** (May 2025)
- **Cheng–Family Scholarship** (Jun 2024)
- **RoboMaster University Championship (RMUC)** — Eastern Region **Champion** (May 2024)
- **RMUL Champion** (Apr 2024)
- **SJTU Excellence Scholarship, Level B** (Dec 2023)
- **University Physics Competition, Silver Medal** (Nov 2023)
- **Wu Jiong Sun Jie Sunshine Scholarship** (Nov 2023)
- **RMUC National Champion** (Aug 2023)
- **SJTU Social Practice, Third Prize** (Aug 2023)

---

### Service & Activities

- **Volunteer**, IEEE ICRA (Georgia Tech), May 2025
- **Teaching Assistant**, SJTU ENGR 1000J (Intro to Software Engineering), 2024
- **UM–SJTU Joint Institute Youth Volunteer Team**, 2023
- **Old Friends Youth Team (Shanghai)** — Intergenerational communication events, 2023

---

### Personal

- **Languages:** English (TOEFL 106/120), Chinese (Mandarin)
- **Hobbies:** Rubik's Cube, badminton, MOBA games
