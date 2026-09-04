---
permalink: /
title: ""
excerpt: ""
description: "Siying Li is a Ph.D. candidate at Tongji University working on 3D vision, neural simulation, and end-to-end autonomous driving."
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<span class="anchor" id="about-me"></span>

<section class="intro-card" data-panel="OPENING" aria-labelledby="intro-title">
  <p class="eyebrow">Computer Vision · Autonomous Driving</p>
  <h1 id="intro-title">Building virtual worlds for safer autonomous driving.</h1>
  <p class="intro-lead">I am a Ph.D. candidate in Transportation Engineering at Tongji University, advised by <a href="https://tops.tongji.edu.cn/info/1031/1186.htm" target="_blank" rel="noopener">Prof. Ying Ni</a> and co-advised by <a href="https://haotianshi.github.io/" target="_blank" rel="noopener">Prof. Haotian Shi</a>.</p>
  <p>My research lies at the intersection of <strong>3D vision, neural simulation, and end-to-end autonomous driving</strong>. I build realistic, interactive environments for systematic evaluation, diagnosis, and improvement of autonomous driving systems.</p>
  <div class="intro-actions" aria-label="Profile links">
    <a class="action-link action-link--primary" href="https://scholar.google.com/citations?user=fRYUMuQAAAAJ" target="_blank" rel="noopener">Google Scholar <span aria-hidden="true">↗</span></a>
    <a class="action-link" href="https://github.com/siyingli99" target="_blank" rel="noopener">GitHub <span aria-hidden="true">↗</span></a>
    <a class="action-link" href="mailto:siyingli@tongji.edu.cn">Email</a>
  </div>
</section>

<section class="now-panel" id="now" aria-labelledby="now-title">
  <div class="now-panel__heading">
    <p class="eyebrow">Current frame · 2026.09</p>
    <h2 id="now-title">Now</h2>
  </div>
  <div class="now-grid">
    <div class="now-item">
      <span>Exploring</span>
      <p>Sim-to-real consistency for neural driving simulation.</p>
    </div>
    <div class="now-item">
      <span>Building</span>
      <p>Evaluation and diagnosis methods for end-to-end driving systems.</p>
    </div>
    <div class="now-item">
      <span>Open to</span>
      <p>Research conversations around 3D vision and autonomous driving safety.</p>
    </div>
  </div>
</section>

<span class="anchor" id="news"></span>
<section class="content-section" data-chapter="CHAPTER 01" aria-labelledby="news-title">
  <div class="section-heading">
    <p class="eyebrow">Updates</p>
    <h2 id="news-title">News</h2>
  </div>

  <div class="news-list">
    <div class="news-item">
      <time datetime="2026-08">2026.08</time>
      <p><span class="news-mark">Latest</span> Three manuscripts are currently under review.</p>
    </div>
    <div class="news-item">
      <time datetime="2026-07">2026.07</time>
      <p>Our paper <strong>DecoupleGS</strong> was accepted to <strong>ECCV 2026</strong>.</p>
    </div>
    <div class="news-item">
      <time datetime="2025-11">2025.11</time>
      <p>Two papers were published at <strong>IEEE ITSC 2025</strong>.</p>
    </div>
  </div>
</section>

<span class="anchor" id="publications"></span>
<section class="content-section" data-chapter="CHAPTER 02" aria-labelledby="publications-title">
  <div class="section-heading section-heading--with-copy">
    <div>
      <p class="eyebrow">Selected work</p>
      <h2 id="publications-title">Publications</h2>
    </div>
    <p>Research on interactive simulation, safety-critical scenarios, and evaluation for autonomous driving.</p>
  </div>

  <div class="publication-group-heading">
    <h3>Peer-reviewed</h3>
    <span>2025–2026</span>
  </div>

  <article class="paper-box paper-box--featured" id="paper-decouplegs">
    <div class="paper-box-image">
      <img src="{{ '/images/decouplegs.png' | relative_url }}" alt="Overview of the DecoupleGS interactive 3D driving simulation method" width="1131" height="504" loading="lazy" decoding="async">
    </div>
    <div class="paper-box-text">
      <div class="paper-meta">
        <span class="paper-label">ECCV 2026</span>
        <span class="paper-status paper-status--accepted">Accepted</span>
      </div>
      <h3>DecoupleGS: Interactive 3D Gaussian Splatting for End-to-End Autonomous Driving Testing</h3>
      <p class="paper-authors"><strong>Siying Li</strong>, Ying Ni, Jie Sun, Jian Sun, Haotian Shi</p>
      <p class="paper-venue">European Conference on Computer Vision (ECCV), 2026</p>
      <div class="paper-links">
        <a href="https://arxiv.org/abs/2608.01761" target="_blank" rel="noopener">arXiv <span aria-hidden="true">↗</span></a>
        <button class="paper-toggle" type="button" aria-expanded="false" aria-controls="details-decouplegs">Read abstract <span aria-hidden="true">＋</span></button>
      </div>
    </div>
    <div class="paper-details" id="details-decouplegs" hidden>
      <p class="paper-details__label">Abstract</p>
      <p>End-to-end driving systems need closed-loop testing environments that are simultaneously photorealistic, interactive, and fast enough for online control. DecoupleGS meets these requirements by separating a persistent high-fidelity background from reusable dynamic agents represented in object-centric canonical coordinates, then compositing them through a unified 3D Gaussian rasterizer. Three targeted modules resolve the conflicts introduced by dynamic scene composition: perceptual pruning and vector quantization compress traffic assets; map-guided registration aligns agent trajectories and road contact in metric space; and proxy-based relighting transfers local illumination and contact shadows without online neural inference. Together, they support controllable multi-agent sensor simulation while preserving geometric and photometric consistency.</p>
      <ul class="paper-highlights" aria-label="DecoupleGS highlights">
        <li><strong>System design</strong><span>Decouples static infrastructure from manipulable canonical agents and renders both streams together with physically consistent occlusion.</span></li>
        <li><strong>Evaluation</strong><span>Evaluated on nuScenes and PandaSet scenes with 3DRealCar assets, plus UniAD and VAD open- and closed-loop testing.</span></li>
        <li><strong>Key result</strong><span>Runs at 45 FPS in the simulator comparison, reaches 0.884 Driving Score and 0.956 Route Completion, and scales to 50 agents.</span></li>
      </ul>
      <div class="keyword-strip" aria-label="Key topics">
        <span>3D Gaussian Splatting</span><span>Dynamic scene composition</span><span>Sensor simulation</span><span>Closed-loop testing</span>
      </div>
      <div class="citation-block">
        <div class="citation-block__heading">
          <span>BibTeX</span>
          <button class="copy-citation" type="button" data-copy-target="bibtex-decouplegs">Copy</button>
        </div>
        <pre id="bibtex-decouplegs"><code>@article{li2026decouplegs,
  title={DecoupleGS: Interactive 3D Gaussian Splatting for End-to-End Autonomous Driving Testing},
  author={Li, Siying and Ni, Ying and Sun, Jie and Sun, Jian and Shi, Haotian},
  journal={arXiv preprint arXiv:2608.01761},
  year={2026}
}</code></pre>
      </div>
    </div>
  </article>

  <article class="paper-box paper-box--text" id="paper-vru-hazard">
    <div class="paper-box-text">
      <div class="paper-meta">
        <span class="paper-label">ITSC 2025</span>
        <span class="paper-status paper-status--published">Published</span>
      </div>
      <h3>VRU-Centric Hazardous Scenario Detection via Monocular Spatiotemporal Feature Fusion</h3>
      <p class="paper-authors">Ying Ni, <strong>Siying Li</strong>, Jialin Fan</p>
      <p class="paper-venue">2025 IEEE 28th International Conference on Intelligent Transportation Systems, pp. 4685–4690</p>
      <div class="paper-links">
        <a href="https://doi.org/10.1109/ITSC60802.2025.11423759" target="_blank" rel="noopener">Paper <span aria-hidden="true">↗</span></a>
        <button class="paper-toggle" type="button" aria-expanded="false" aria-controls="details-vru-hazard">Read abstract <span aria-hidden="true">＋</span></button>
      </div>
    </div>
    <div class="paper-details" id="details-vru-hazard" hidden>
      <p class="paper-details__label">Abstract</p>
      <p>Hazardous interactions between vehicles and vulnerable road users often emerge through subtle spatial and motion cues that are difficult to identify from monocular video. VRU-HazardNet addresses this challenge with a multi-stream spatiotemporal architecture: monocular 3D detection provides geometric context, optical flow captures motion dynamics, and transformer-based temporal self-attention fuses these signals to recognize early hazard precursors. The work also introduces VRUHI, a dedicated benchmark for vehicle–VRU interaction risk, establishing a concrete evaluation setting for proactive safety assessment rather than post-event recognition.</p>
      <ul class="paper-highlights" aria-label="VRU-HazardNet highlights">
        <li><strong>Architecture</strong><span>Fuses monocular 3D localization and optical-flow dynamics through a transformer-based temporal model.</span></li>
        <li><strong>Dataset</strong><span>VRUHI contains 6,000 urban dashcam clips at 25 FPS: 2,000 hazardous interactions and 4,000 safe cases.</span></li>
        <li><strong>Key result</strong><span>Achieves 78.37% AUC and 41.03% F1-score on VRUHI, outperforming the reported prior methods.</span></li>
      </ul>
      <div class="keyword-strip" aria-label="Key topics">
        <span>VRU safety</span><span>Monocular 3D detection</span><span>Optical flow</span><span>Spatiotemporal fusion</span>
      </div>
      <div class="citation-block">
        <div class="citation-block__heading">
          <span>BibTeX</span>
          <button class="copy-citation" type="button" data-copy-target="bibtex-vru-hazard">Copy</button>
        </div>
        <pre id="bibtex-vru-hazard"><code>@inproceedings{ni2025vru,
  title={VRU-Centric Hazardous Scenario Detection via Monocular Spatiotemporal Feature Fusion},
  author={Ni, Ying and Li, Siying and Fan, Jialin},
  booktitle={2025 IEEE 28th International Conference on Intelligent Transportation Systems (ITSC)},
  pages={4685--4690},
  year={2025},
  doi={10.1109/ITSC60802.2025.11423759}
}</code></pre>
      </div>
    </div>
  </article>

  <article class="paper-box paper-box--text" id="paper-capo">
    <div class="paper-box-text">
      <div class="paper-meta">
        <span class="paper-label">ITSC 2025</span>
        <span class="paper-status paper-status--published">Published</span>
      </div>
      <h3>Interactive Adversarial Scenario Generation for Autonomous Driving: A Continual Learning Framework with Safety Constraints</h3>
      <p class="paper-authors">Jialin Fan, Ying Ni, Yuhang Chen, <strong>Siying Li</strong>, Jie Sun, Jian Sun</p>
      <p class="paper-venue">2025 IEEE 28th International Conference on Intelligent Transportation Systems, pp. 4656–4662</p>
      <div class="paper-links">
        <a href="https://doi.org/10.1109/ITSC60802.2025.11423840" target="_blank" rel="noopener">Paper <span aria-hidden="true">↗</span></a>
        <button class="paper-toggle" type="button" aria-expanded="false" aria-controls="details-capo">Read abstract <span aria-hidden="true">＋</span></button>
      </div>
    </div>
    <div class="paper-details" id="details-capo" hidden>
      <p class="paper-details__label">Abstract</p>
      <p>Safety-critical scenarios are valuable for autonomous-driving validation but rare in natural data, while unconstrained adversarial generation often produces unrealistic or inevitable collisions that leave the tested vehicle no meaningful response. Constrained-Adversarial Policy Optimization (CAPO) introduces adversarial rationality through a two-phase continual-learning framework. The first phase uses multi-agent reinforcement learning with a safety-constraint function so traffic agents learn valid interaction and task completion. The second phase introduces an autonomous-vehicle expert and optimizes adversarial behavior subject to the expert’s minimum safety constraint, producing challenging interactions that remain solvable rather than degenerating into unavoidable crashes.</p>
      <ul class="paper-highlights" aria-label="CAPO highlights">
        <li><strong>Core problem</strong><span>Balances scenario criticality with solvability so adversarial traffic remains useful for decision-making tests.</span></li>
        <li><strong>Two phases</strong><span>Learns safety-aligned multi-agent behavior first, then introduces an AV expert for constrained adversarial generation.</span></li>
        <li><strong>Reported outcome</strong><span>Open- and closed-loop tests produce more solvable safety-critical cases while reducing unrealistic and unavoidable collisions.</span></li>
      </ul>
      <div class="keyword-strip" aria-label="Key topics">
        <span>Adversarial scenarios</span><span>Multi-agent reinforcement learning</span><span>Continual learning</span><span>Safety constraints</span>
      </div>
      <div class="citation-block">
        <div class="citation-block__heading">
          <span>BibTeX</span>
          <button class="copy-citation" type="button" data-copy-target="bibtex-capo">Copy</button>
        </div>
        <pre id="bibtex-capo"><code>@inproceedings{fan2025interactive,
  title={Interactive Adversarial Scenario Generation for Autonomous Driving: A Continual Learning Framework with Safety Constraints},
  author={Fan, Jialin and Ni, Ying and Chen, Yuhang and Li, Siying and Sun, Jie and Sun, Jian},
  booktitle={2025 IEEE 28th International Conference on Intelligent Transportation Systems (ITSC)},
  pages={4656--4662},
  year={2025},
  doi={10.1109/ITSC60802.2025.11423840}
}</code></pre>
      </div>
    </div>
  </article>

  <span class="anchor" id="under-review"></span>
  <div class="publication-group-heading publication-group-heading--review">
    <div>
      <h3>Manuscripts under review</h3>
      <p>Ongoing work shared for research communication.</p>
    </div>
    <span>Under review</span>
  </div>

  <article class="paper-box" id="paper-echosplat">
    <div class="paper-box-image">
      <img src="{{ '/images/echosplat.png' | relative_url }}" alt="EchoSplat camera and LiDAR neural simulation pipeline" width="1215" height="657" loading="lazy" decoding="async">
    </div>
    <div class="paper-box-text">
      <div class="paper-meta">
        <span class="paper-label">Manuscript</span>
        <span class="paper-status paper-status--review">Under review</span>
      </div>
      <h3>EchoSplat: Self-Improving Camera–LiDAR Neural Simulation for Autonomous Driving Testing</h3>
      <p class="paper-authors"><strong>Siying Li</strong>, Ying Ni, Yujia Zhao, Yuanbiao Cao, Jie Sun, Xintao Yan, Ye Tian, Jian Sun, Haotian Shi</p>
      <p class="paper-venue">Manuscript under review.</p>
      <div class="paper-links">
        <button class="paper-toggle" type="button" aria-expanded="false" aria-controls="details-echosplat">Read abstract <span aria-hidden="true">＋</span></button>
      </div>
    </div>
    <div class="paper-details" id="details-echosplat" hidden>
      <p class="paper-details__label">Abstract</p>
      <p>Closed-loop testing requires realistic camera and LiDAR observations at policy-induced ego poses, yet reconstruction-based neural simulators degrade when the vehicle moves away from recorded trajectories. EchoSplat addresses this limitation with a shared multi-node 3D Gaussian representation for synchronized camera and LiDAR synthesis. Sensor-specific restoration networks recover degraded off-trajectory observations, while uncertainty-aware multimodal reverse distillation feeds reliable corrections back into the shared scene. This persistent render–restore–refine loop improves novel-view fidelity, cross-modal consistency, representation-level generalization, and downstream driving consistency.</p>
      <ul class="paper-highlights" aria-label="EchoSplat highlights">
        <li><strong>Core idea</strong><span>Shared 3D Gaussians with a dynamic-aware spherical LiDAR head for range, intensity, and ray-return synthesis.</span></li>
        <li><strong>Evaluation</strong><span>Restoration models trained on nuScenes and evaluated on unseen PandaSet scenes without target-scene fine-tuning.</span></li>
        <li><strong>Key result</strong><span>Achieves 22.18 PSNR and 0.2432 LPIPS for RGB novel views, with the best downstream results in both camera-only and camera–LiDAR tracks.</span></li>
      </ul>
      <div class="keyword-strip" aria-label="Key topics"><span>Camera–LiDAR simulation</span><span>3D Gaussian Splatting</span><span>Reverse distillation</span><span>Novel-view synthesis</span></div>
    </div>
  </article>

  <article class="paper-box" id="paper-scene2flow">
    <div class="paper-box-image">
      <img src="{{ '/images/scene2flow.png' | relative_url }}" alt="Scene2Flow evaluation framework for traffic participants beyond the ego vehicle" width="1206" height="426" loading="lazy" decoding="async">
    </div>
    <div class="paper-box-text">
      <div class="paper-meta">
        <span class="paper-label">Manuscript</span>
        <span class="paper-status paper-status--review">Under review</span>
      </div>
      <h3>Scene2Flow: Evaluating End-to-End Autonomous Driving Beyond the Ego Vehicle</h3>
      <p class="paper-authors">Yuanbiao Cao<sup>†</sup>, <strong>Siying Li<sup>†</sup></strong>, Yujia Zhao, Tong Nie, Xiaocong Zhao, Jie Sun, Peng Hang, Haotian Shi</p>
      <p class="paper-venue">Manuscript under review.</p>
      <p class="paper-note"><sup>†</sup> Equal contribution.</p>
      <div class="paper-links">
        <button class="paper-toggle" type="button" aria-expanded="false" aria-controls="details-scene2flow">Read abstract <span aria-hidden="true">＋</span></button>
      </div>
    </div>
    <div class="paper-details" id="details-scene2flow" hidden>
      <p class="paper-details__label">Abstract</p>
      <p>Existing closed-loop benchmarks mainly judge task completion, ego safety, and ride comfort, leaving the effects of a driving system on surrounding traffic underexplored. Scene2Flow introduces a traffic-aware evaluation framework built on editable 3D Gaussian scenes, combining action-conditioned multi-camera rendering, reactive background traffic, and a unified interface for heterogeneous end-to-end systems. It aligns ego outcomes and local traffic responses within a common task window, then evaluates traffic efficiency, background-vehicle kinematic fluctuations, and localized oscillation responses. The results show that similar ego-level performance can produce substantially different disturbances in surrounding traffic, and that favorable aggregate efficiency can coexist with amplified post-conflict oscillations.</p>
      <ul class="paper-highlights" aria-label="Scene2Flow highlights">
        <li><strong>Evaluation scope</strong><span>240 closed-loop runs covering seven end-to-end systems, a reference policy, two scenarios, three traffic levels, and five random seeds.</span></li>
        <li><strong>Metric space</strong><span>Jointly characterizes ego outcomes, macroscopic efficiency, kinematic fluctuation, and local wavelet-based oscillation.</span></li>
        <li><strong>Diagnostic value</strong><span>Reveals weak or condition-dependent agreement between ego-centric rankings and traffic-aware rankings.</span></li>
      </ul>
      <div class="keyword-strip" aria-label="Key topics"><span>Traffic-aware evaluation</span><span>Editable 3DGS</span><span>Closed-loop testing</span><span>Traffic-flow analysis</span></div>
    </div>
  </article>

  <article class="paper-box" id="paper-targetdrive">
    <div class="paper-box-image">
      <img src="{{ '/images/targetdrive.png' | relative_url }}" alt="TargetDrive training allocation framework for end-to-end autonomous driving" width="1230" height="861" loading="lazy" decoding="async">
    </div>
    <div class="paper-box-text">
      <div class="paper-meta">
        <span class="paper-label">Manuscript</span>
        <span class="paper-status paper-status--review">Under review</span>
      </div>
      <h3>TargetDrive: Closing the Loop on Training Allocation for End-to-End Autonomous Driving</h3>
      <p class="paper-authors">Yujia Zhao, Jie Wang, <strong>Siying Li</strong>, Yuanbiao Cao, Yixin Li, Jialin Fan, Ying Ni, Haotian Shi, Jie Sun, Jian Sun</p>
      <p class="paper-venue">Manuscript under review.</p>
      <div class="paper-links">
        <button class="paper-toggle" type="button" aria-expanded="false" aria-controls="details-targetdrive">Read abstract <span aria-hidden="true">＋</span></button>
      </div>
    </div>
    <div class="paper-details" id="details-targetdrive" hidden>
      <p class="paper-details__label">Abstract</p>
      <p>End-to-end driving models are trained on offline source-domain logs, while deployment quality is determined by closed-loop interaction in a target environment. TargetDrive closes this objective gap with a learner-agnostic outer-loop framework that uses sparse target-domain feedback to guide training allocation. Its Objective-Conditioned Response Teacher estimates context-dependent utility at the scenario-family level, refines those estimates with clip-level safety priors, and converts them into family quotas, replay priorities, and sample weights without changing the learner architecture or learner-side training budget. Experiments on NAVSIM-v2 and Bench2Drive show consistent gains across regression-, diffusion-, and scoring-based planners, particularly in interaction-intensive scenarios.</p>
      <ul class="paper-highlights" aria-label="TargetDrive highlights">
        <li><strong>Core idea</strong><span>Uses sparse closed-loop probing to align offline data allocation with target-domain deployment objectives.</span></li>
        <li><strong>Generalization</strong><span>Evaluated with LTF, DiffusionDrive, NavFormer, VAD, and HiP-AD across NAVSIM-v2 and Bench2Drive.</span></li>
        <li><strong>Key result</strong><span>Reaches 32.9 EPDMS with LTF, improving by 5.2 points over GLISTER and 3.5 points over the matched-feedback LESS baseline.</span></li>
      </ul>
      <div class="keyword-strip" aria-label="Key topics"><span>Training allocation</span><span>Sparse closed-loop feedback</span><span>Data valuation</span><span>End-to-end driving</span></div>
    </div>
  </article>
</section>

<span class="anchor" id="aether"></span>
<section class="content-section aether-section" data-chapter="SYSTEM / LIVE" aria-labelledby="aether-title">
  <div class="section-heading section-heading--with-copy">
    <div>
      <p class="eyebrow">Research system</p>
      <h2 id="aether-title">AETHER</h2>
    </div>
    <p>A continuously evolving engineering platform that turns research ideas into an executable autonomous-driving simulator.</p>
  </div>

  <article class="aether-project">
    <div class="aether-project__topline">
      <span>Public research code</span>
      <span class="aether-project__status"><i aria-hidden="true"></i>Active development</span>
    </div>

    <div class="aether-project__intro">
      <div>
        <p class="aether-project__index">PROJECT // 01</p>
        <h3>High-fidelity, multimodal closed-loop simulation for end-to-end driving</h3>
        <p>AETHER is an editable driving-scene pipeline built around 3D Gaussian Splatting. It reconstructs real scenes, inserts and controls traffic actors, synthesizes synchronized RGB and LiDAR observations, and feeds those observations into closed-loop driving and diagnosis. Rather than being a static demo, it serves as the engineering convergence point for the simulation, self-improvement, and evaluation ideas developed across this research.</p>
      </div>
      <div class="aether-project__actions">
        <a class="action-link action-link--primary" href="https://github.com/siyingli99/Aether" target="_blank" rel="noopener">Explore on GitHub <span aria-hidden="true">↗</span></a>
        <a class="action-link" href="https://github.com/siyingli99/Aether/blob/main/METHODOLOGY.md" target="_blank" rel="noopener">Read methodology <span aria-hidden="true">↗</span></a>
      </div>
    </div>

    <ol class="aether-pipeline" aria-label="AETHER simulation pipeline">
      <li><span>01</span><strong>Reconstruct</strong><small>Real-world 3DGS scenes</small></li>
      <li><span>02</span><strong>Edit</strong><small>Actors, routes, and events</small></li>
      <li><span>03</span><strong>Sense</strong><small>RGB and LiDAR views</small></li>
      <li><span>04</span><strong>Roll out</strong><small>End-to-end closed loop</small></li>
      <li><span>05</span><strong>Refine</strong><small>Distillation and diagnosis</small></li>
    </ol>

    <div class="aether-capabilities">
      <section>
        <span>01 / Scene</span>
        <h4>Editable neural environments</h4>
        <p>Reconstructs real driving scenes with 3DGS and provides scenario editing for actor placement, trajectory replay, termination logic, and controlled interaction.</p>
      </section>
      <section>
        <span>02 / Sensors</span>
        <h4>Camera–LiDAR synthesis</h4>
        <p>Combines RGB rendering and enhancement with geometric or learned LiDAR simulation covering range, intensity, ray returns, point clouds, and novel viewpoints.</p>
      </section>
      <section>
        <span>03 / Closed loop</span>
        <h4>Policy-in-the-loop testing</h4>
        <p>Connects synchronized sensor observations to a maintained UniAD adapter, updates the scene from policy actions, and records replayable multimodal rollouts.</p>
      </section>
      <section>
        <span>04 / Feedback</span>
        <h4>Self-improvement and diagnosis</h4>
        <p>Supports reverse distillation from enhanced observations, semantic-causal diagnosis, and evaluation with HUGSIM-, NAVSIM-, and Bench2Drive-style metrics.</p>
      </section>
    </div>

    <div class="aether-project__lineage">
      <span>Research → system</span>
      <p>Decoupled scene composition, multimodal novel-view enhancement, reverse distillation, and beyond-ego diagnosis are brought together in one reproducible pipeline that will continue to evolve.</p>
    </div>
  </article>
</section>

<span class="anchor" id="research"></span>
<section class="content-section" data-chapter="CHAPTER 03" aria-labelledby="research-title">
  <div class="section-heading section-heading--with-copy">
    <div>
      <p class="eyebrow">Research agenda</p>
      <h2 id="research-title">Research</h2>
    </div>
    <p>From realistic scene reconstruction to systematic diagnosis of autonomous driving systems.</p>
  </div>

  <div class="focus-grid">
    <article class="focus-card">
      <span class="focus-index">01</span>
      <h3>3D Vision</h3>
      <p>Reconstructing dynamic, photorealistic driving environments from multimodal observations.</p>
    </article>
    <article class="focus-card">
      <span class="focus-index">02</span>
      <h3>Neural Simulation</h3>
      <p>Building interactive virtual worlds that respond faithfully to agent behavior.</p>
    </article>
    <article class="focus-card">
      <span class="focus-index">03</span>
      <h3>End-to-End Driving</h3>
      <p>Evaluating and improving driving systems through closed-loop testing and diagnosis.</p>
    </article>
  </div>

  <section class="research-map" aria-labelledby="research-map-title">
    <div class="research-map__heading">
      <div>
        <p class="eyebrow">Connection map</p>
        <h3 id="research-map-title">Research threads → papers</h3>
      </div>
      <p>Select a research thread to trace it through the publication list.</p>
    </div>
    <div class="research-map__stage" data-map-stage data-active="all">
      <div class="map-topics" aria-label="Research threads">
        <button type="button" data-map-topic="vision" aria-pressed="false"><span>01</span>3D Vision</button>
        <button type="button" data-map-topic="simulation" aria-pressed="false"><span>02</span>Neural Simulation</button>
        <button type="button" data-map-topic="evaluation" aria-pressed="false"><span>03</span>Driving Evaluation</button>
      </div>
      <svg class="map-lines" viewBox="0 0 240 360" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path class="map-link map-link--vision" d="M0 60 C90 60 150 30 240 30" />
        <path class="map-link map-link--vision" d="M0 60 C90 60 150 90 240 90" />
        <path class="map-link map-link--vision" d="M0 60 C90 60 150 150 240 150" />
        <path class="map-link map-link--vision" d="M0 60 C90 60 150 270 240 270" />
        <path class="map-link map-link--simulation" d="M0 180 C90 180 150 30 240 30" />
        <path class="map-link map-link--simulation" d="M0 180 C90 180 150 90 240 90" />
        <path class="map-link map-link--simulation" d="M0 180 C90 180 150 210 240 210" />
        <path class="map-link map-link--evaluation" d="M0 300 C90 300 150 30 240 30" />
        <path class="map-link map-link--evaluation" d="M0 300 C90 300 150 90 240 90" />
        <path class="map-link map-link--evaluation" d="M0 300 C90 300 150 150 240 150" />
        <path class="map-link map-link--evaluation" d="M0 300 C90 300 150 210 240 210" />
        <path class="map-link map-link--evaluation" d="M0 300 C90 300 150 270 240 270" />
        <path class="map-link map-link--evaluation" d="M0 300 C90 300 150 330 240 330" />
      </svg>
      <div class="map-papers" aria-label="Related publications">
        <a class="map-paper" href="#paper-decouplegs" data-map-topics="vision simulation evaluation"><span>P-01</span><strong>DecoupleGS</strong><small>3D · SIM · EVAL</small></a>
        <a class="map-paper" href="#paper-echosplat" data-map-topics="vision simulation evaluation"><span>P-02</span><strong>EchoSplat</strong><small>3D · SIM · EVAL</small></a>
        <a class="map-paper" href="#paper-scene2flow" data-map-topics="vision evaluation"><span>P-03</span><strong>Scene2Flow</strong><small>3D · EVAL</small></a>
        <a class="map-paper" href="#paper-targetdrive" data-map-topics="simulation evaluation"><span>P-04</span><strong>TargetDrive</strong><small>SIM · EVAL</small></a>
        <a class="map-paper" href="#paper-vru-hazard" data-map-topics="vision evaluation"><span>P-05</span><strong>VRU Hazard</strong><small>3D · EVAL</small></a>
        <a class="map-paper" href="#paper-capo" data-map-topics="evaluation"><span>P-06</span><strong>CAPO</strong><small>EVAL</small></a>
      </div>
    </div>
  </section>

  <div class="research-list">
    <article class="research-item">
      <p class="research-kicker">Evaluation</p>
      <h3>Sim-to-Real Evaluation for Autonomous Driving Simulation</h3>
      <p>Developing systematic methodologies for measuring how faithfully virtual environments reproduce real-world system behavior, across both open-loop and closed-loop settings.</p>
    </article>
    <article class="research-item">
      <p class="research-kicker">Diagnosis</p>
      <h3>Diagnosis of End-to-End Autonomous Driving Systems</h3>
      <p>Identifying failure-critical temporal windows, traffic participants, and system capabilities to characterize model limitations and safety boundaries.</p>
    </article>
    <article class="research-item">
      <p class="research-kicker">Understanding</p>
      <h3>Hazardous Traffic Scenario Understanding</h3>
      <p>Studying vision-based and 3D spatial reasoning for safety-critical interactions involving vulnerable road users and complex traffic behavior.</p>
    </article>
  </div>
</section>

<span class="anchor" id="experience"></span>
<section class="content-section" data-chapter="CHAPTER 04" aria-labelledby="experience-title">
  <div class="section-heading">
    <p class="eyebrow">Background</p>
    <h2 id="experience-title">Experience</h2>
  </div>

  <div class="experience-grid">
    <section class="experience-card" id="education" aria-labelledby="education-title">
      <p class="experience-label">Education</p>
      <div class="timeline">
        <div class="timeline-item">
          <time>2024.09 – Present</time>
          <h3 id="education-title">Ph.D. in Transportation Engineering</h3>
          <p>College of Transportation, Tongji University<br>Shanghai, China</p>
        </div>
        <div class="timeline-item">
          <time>2020.09 – 2024.07</time>
          <h3>B.S. in Mathematics and Applied Mathematics</h3>
          <p>Guohao School, Tongji University<br>Shanghai, China</p>
        </div>
      </div>
    </section>

    <section class="experience-card" id="service" aria-labelledby="service-title">
      <p class="experience-label">Academic service</p>
      <h3 id="service-title" class="sr-only">Academic service</h3>
      <ul class="clean-list">
        <li><strong>Reviewer</strong><span>WiCV at ECCV 2026</span></li>
        <li><strong>Reviewer</strong><span>ECCV Main Conference</span></li>
        <li><strong>Reviewer</strong><span>IEEE ITSC 2025</span></li>
      </ul>
    </section>

    <section class="experience-card" id="awards" aria-labelledby="awards-title">
      <p class="experience-label">Award</p>
      <h3 id="awards-title">National Third Prize</h3>
      <p>Huawei Cup China Graduate Mathematical Contest in Modeling, 2024</p>
    </section>

    <section class="experience-card" id="patents" aria-labelledby="patent-title">
      <p class="experience-label">Patent</p>
      <h3 id="patent-title">Method and System for 3D Gaussian Scene Simulation for End-to-End Autonomous Driving Testing</h3>
      <p>Ying Ni, <strong>Siying Li</strong>, Haotian Shi, Jian Sun</p>
      <p class="experience-meta">Chinese Patent · 122473353A</p>
    </section>
  </div>
</section>

<span class="anchor" id="contact"></span>
<section class="contact-card" data-chapter="EPILOGUE" aria-labelledby="contact-title">
  <div>
    <p class="eyebrow">Get in touch</p>
    <h2 id="contact-title">Interested in research collaboration?</h2>
    <p>I am always happy to discuss 3D vision, simulation, and autonomous driving research.</p>
  </div>
  <div class="contact-actions">
    <a href="mailto:siyingli@tongji.edu.cn">siyingli@tongji.edu.cn</a>
    <a href="https://orcid.org/0009-0002-8943-5758" target="_blank" rel="noopener">ORCID <span aria-hidden="true">↗</span></a>
  </div>
</section>
