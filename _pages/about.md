---
layout: single
title: "Yuchen You 游宇宸"
permalink: /
classes: wide
comments: true
---

> 🎓 **Seeking MS/PhD (Fall 2026) in Distributed Systems, Operating Systems, and Networking.**

👋 Hi, I'm Yuchen You

I'm a senior undergraduate in **Computer Science** at the **University of Michigan**, also pursuing a dual degree in **Mechanical Engineering** at **Shanghai Jiao Tong University**.

My research interests lie broadly in **operating systems, distributed systems, and computer networking**, with a focus on building _efficient and reliable system_. I am doing some related projects in agentic distributed system, MoE inference acceleration, etc.

Before focusing on systems research, I worked extensively in robotics and embedded system, where I designed and implemented real-time control stacks for many kinds of robots and autonomous systems. That hands-on experience with concurrency, feedback loops, and fault-tolerant control has strongly shaped how I now think about building robust, adaptive computer systems.

## Research Focus

- **Distributed systems:** failure reproduction & auto-mitigation; SLO-based observability
- **Operating systems:** concurrency; VM/paging; interface hardening
- **Networking:** dependable protocols; load shedding/failover; fault emulation

## Featured

<style>
	/* Scoped only to the homepage Featured block */
	.home-featured .archive__item-title { font-size: 1.15rem; margin-bottom: 0.25rem; }
	.home-featured .archive__item-excerpt { font-size: 0.95rem; line-height: 1.55; }
	.home-featured .btn { padding: 0.3rem 0.6rem; font-size: 0.85rem; }
	@media (min-width: 768px){
		.home-featured .archive__item-teaser img { max-height: 180px; object-fit: cover; }
	}
	/* Optional: reduce vertical gap between items */
	.home-featured .feature__item--left { margin-bottom: 1.25rem; }
	.home-featured .archive__item-excerpt p { margin: 0; }
	.home-featured .archive__item { align-items: center; }
	/* If your theme stacks too tight on mobile, you can tune here */
	@media (max-width: 480px){
		.home-featured .archive__item-title { font-size: 1.05rem; }
		.home-featured .archive__item-excerpt { font-size: 0.92rem; }
	}
</style>

<section class="home-featured">

<div class="feature__wrapper">

	<div class="feature__item--left">
		<div class="archive__item">
			<div class="archive__item-teaser">
				<img src="{{ '/yuchenyou.github.io/images/agent_ds_ops.png' | relative_url }}" alt="Agentic DS Ops">
			</div>
			<div class="archive__item-body">
				<h2 class="archive__item-title">Agentic Distributed System Ops</h2>
				<div class="archive__item-excerpt">
					Agent-based auto-mitigation loop (reproduce → measure → decide → mitigate) on ZooKeeper/HDFS.
					Inject faults with ChaosBlade/Chaos Mesh and <code>tc</code>; mitigate via HAProxy failover + Resilience4j (circuit breaker/bulkhead/rate limit).
					SLO-driven observability: <code>p99_latency</code>, <code>outstanding_requests</code>; system metrics: interface throughput, CPU.
				</div>
				<p><a href="{{ '/yuchenyou.github.io/projects/#agentic-distributed-system-ops' | relative_url }}" class="btn btn--primary">Learn more</a></p>
			</div>
		</div>
	</div>

	<div class="feature__item--left">
		<div class="archive__item">
			<div class="archive__item-teaser">
				<img src="{{ '/yuchenyou.github.io/images/cpp_workflow.png' | relative_url }}" alt="OS Projects">
			</div>
			<div class="archive__item-body">
				<h2 class="archive__item-title">CUDA Proxy Player (EECS 582)</h2>
				<div class="archive__item-excerpt">
					Hybrid CUDA runtime combining CUDA Graphs (stable paths) with persistent kernels (irregular tasks) to cut launch overhead and tail latency.
					Enables dynamic routing with static graph reuse; implements bucketed pooling, piecewise graph capture, and stream-level sync for efficient MoE execution.
				</div>
				<p><a href="{{ '/yuchenyou.github.io/projects/#cuda-proxy-player' | relative_url }}" class="btn">Learn more</a></p>
			</div>
		</div>
	</div>

	<!-- Cloud VLM for AV Control (Networking/VLM project) -->
	<div class="feature__item--left">
		<div class="archive__item">
			<div class="archive__item-teaser">
				<img src="{{ '/yuchenyou.github.io/images/fastEMMA.drawio.png' | relative_url }}" alt="Cloud VLM for AV Control">
			</div>
			<div class="archive__item-body">
				<h2 class="archive__item-title">Cloud VLM for AV Control</h2>
				<div class="archive__item-excerpt">
					Hybrid local–cloud pipeline with selective offloading to large VLMs and network-aware control for accuracy vs. responsiveness.
				</div>
				<p><a href="{{ '/yuchenyou.github.io/projects/#cloud-vlm-for-av-control' | relative_url }}" class="btn">Learn more</a></p>
			</div>
		</div>
	</div>

	<div class="feature__item--left">
		<div class="archive__item">
			<div class="archive__item-teaser">
				<img src="{{ '/yuchenyou.github.io/images/modular_arm.jpg' | relative_url }}" alt="Origami Soft Robotic Arm">
			</div>
			<div class="archive__item-body">
				<h2 class="archive__item-title">[ICRA 2025 Best Poster] Origami-Inspired Soft Robotic Arm</h2>
				<div class="archive__item-excerpt">
					Kresling origami + pneumatic actuation. Led embedded stack: STM32 & Orange Pi firmware (PID/dynamics), CAN/I²C buses, real-time control loops; C++/Rust core and PCB contribution.
				</div>
				<span class="img-tag tag--preprint">ICRA 2025 Best Poster</span>
				<p><a href="{{ '/yuchenyou.github.io/projects/#origami-inspired-soft-robotic-arm' | relative_url }}" class="btn">Learn more</a></p>
			</div>
		</div>
	</div>

</div>

</section>

## 📰 News

- 2025-05 — ICRA 2025 Workshop (Atlanta, GA): **Best Poster**
- 2025-05 — Joined **Order Lab**; started **Agentic-DS-Ops**
- 2025-05 — Origami Inspired Soft Robotic Arm accepted to ICRA 2025 Workshop
- 2024-12 — Origami Inspired Soft Robotic Arm accepted to (IEEE) RoboSoft 2025 Workshop

## 🔗 Quick links

[📄 CV](/yuchenyou.github.io/cv/) - [💻 Projects](/yuchenyou.github.io/projects/) - [✍️ Blog](https://www.whoami-wesleyyou.top) - [🧑‍💻GitHub](https://github.com/1WesleyYou) - [💼 LinkedIn](https://www.linkedin.com/in/yuchen-you-1w/) - [✉️ Email](mailto:yuchenxr@umich.edu)

 
