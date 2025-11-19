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
	/* Button style: blue background, white text, rounded corners */
	.home-featured .btn,
	.home-featured .btn.btn--primary {
		padding: 0.38rem 0.8rem;
		font-size: 0.85rem;
		line-height: 1.1;
		background: #0d6efd;
		color: #fff;
		border-radius: 999px;
		border: 1px solid transparent;
		text-decoration: none;
		display: inline-block;
		box-shadow: 0 2px 6px rgba(13, 110, 253, 0.25);
		transition: background .15s ease, box-shadow .15s ease, transform .08s ease;
	}
	.home-featured .btn:hover,
	.home-featured .btn.btn--primary:hover {
		background: #0b5ed7;
		color: #fff;
		box-shadow: 0 4px 10px rgba(13, 110, 253, 0.35);
		transform: translateY(-1px);
	}
	.home-featured .btn:active,
	.home-featured .btn.btn--primary:active { transform: translateY(0); }
	/* Make the first (Agentic) image taller */
	.home-featured .feature--agentic .archive__item-teaser img { max-height: 320px; }
	@media (min-width: 868px){
		.home-featured .archive__item-teaser img { max-height: 250px; object-fit: cover; }
	}
	/* Optional: reduce vertical gap between items */
	.home-featured .feature__item--left { margin-bottom: 1.25rem; }
	.home-featured .archive__item-excerpt p { margin: 0; }
	/* Align image and text to top, and pad image a little bit */
	.home-featured .archive__item { align-items: flex-start; }
	.home-featured .archive__item-teaser { margin-top: 0.35rem; }
	/* Image + floating tag stack design */
	.home-featured .archive__item-teaser { position: relative; overflow: hidden; border-radius: 6px; }
	.home-featured .archive__item-teaser img { display:block; width:100%; height:auto; }
	.home-featured .tag-stack { position:absolute; top:8px; left:8px; display:flex; gap:6px; z-index:2; }
	.home-featured .tag { padding:3px 8px; font-size:0.65rem; font-weight:600; line-height:1; color:#fff; background:#343a40; border-radius:6px; letter-spacing:.5px; box-shadow:0 2px 4px rgba(0,0,0,.25); backdrop-filter:blur(2px); }
	.home-featured .tag--preprint { background:#1047b5; }
	.home-featured .tag--runtime { background:#6f42c1; }
	.home-featured .tag--vlm { background:#198754; }
	.home-featured .tag--embedded { background:#c2185b; }
	.home-featured .tag--cloud { background:#0d6efd; }
	.home-featured .archive__item-teaser:hover .tag { box-shadow:0 3px 8px rgba(0,0,0,.35); }
	@media (max-width:480px){ .home-featured .tag { font-size:0.58rem; padding:2px 6px; } }
	/* If your theme stacks too tight on mobile, you can tune here */
	@media (max-width: 480px){
		.home-featured .archive__item-title { font-size: 1.05rem; }
		.home-featured .archive__item-excerpt { font-size: 0.92rem; }
	}
</style>

<section class="home-featured">

<div class="feature__wrapper">

	<div class="feature__item--left feature--agentic">
		<div class="archive__item">
			<div class="archive__item-teaser">
				<div class="tag-stack"><span class="tag tag--preprint">Agentic</span><span class="tag tag--cloud">SLO</span></div>
				<img src="{{ '/yuchenyou.github.io/images/agent_ds_ops.png' | relative_url }}" alt="Agentic DS Ops">
			</div>
			<div class="archive__item-body">
				<h2 class="archive__item-title">Agentic Distributed System Ops</h2>
				<div class="archive__item-excerpt">
					Agent-based auto-mitigation loop (reproduce → measure → decide → mitigate) on ZooKeeper.
                    Automatic mitigation (both rule-based static and agentic) to the common failures in the distributed systems, such as overload, network fluctuations.
				</div>
				<p><a href="{{ '/yuchenyou.github.io/projects/#agentic-distributed-system-ops' | relative_url }}" class="btn btn--primary">Learn more</a></p>
			</div>
		</div>
	</div>

	<div class="feature__item--left">
		<div class="archive__item">
			<div class="archive__item-teaser">
				<div class="tag-stack"><span class="tag tag--runtime">Runtime</span></div>
				<img src="{{ '/yuchenyou.github.io/images/cpp_workflow.png' | relative_url }}" alt="OS Projects">
			</div>
			<div class="archive__item-body">
				<h2 class="archive__item-title">CUDA Proxy Player</h2>
				<div class="archive__item-excerpt">
					Hybrid CUDA runtime: combine CUDA Graphs with persistent kernels to reduce launch overhead and tail latency, enabling dynamic routing with static graph reuse for efficient MoE execution.
				</div>
				<p><a href="{{ '/yuchenyou.github.io/projects/#cuda-proxy-player' | relative_url }}" class="btn">Learn more</a></p>
			</div>
		</div>
	</div>

	<!-- Cloud VLM for AV Control (Networking/VLM project) -->
	<div class="feature__item--left">
		<div class="archive__item">
			<div class="archive__item-teaser">
				<div class="tag-stack"><span class="tag tag--vlm">CSE589</span><span class="tag tag--cloud">Network</span></div>
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
				<div class="tag-stack"><span class="tag tag--embedded">ICRA 2025 Best Poster</span></div>
				<img src="{{ '/yuchenyou.github.io/images/modular_arm.jpg' | relative_url }}" alt="Origami Soft Robotic Arm">
			</div>
			<div class="archive__item-body">
				<h2 class="archive__item-title">Origami-Inspired Soft Robotic Arm</h2>
				<div class="archive__item-excerpt">
					Kresling origami + pneumatic actuation. Led embedded stack: STM32 & Orange Pi firmware (PID/dynamics), CAN/I²C buses, real-time control loops; C++/Rust core and PCB contribution.
				</div>
				<!-- <span class="img-tag tag--preprint">ICRA 2025 Best Poster</span> -->
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

 
