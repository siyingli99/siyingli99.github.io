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
      <p><span class="news-mark">Latest</span> Three papers are currently under review at <strong>AAAI 2027</strong>.</p>
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
      <p>DecoupleGS is a decoupled 3D Gaussian Splatting framework for large-scale, closed-loop end-to-end autonomous driving evaluation. It separates a persistent high-fidelity background from manipulable dynamic agents, then addresses efficiency, geometric alignment, and photometric consistency through asset compression, map-guided registration, and proxy-based relighting. The resulting system balances visual fidelity, interactivity, and real-time performance for practical sensor simulation.</p>
      <div class="keyword-strip" aria-label="Key topics">
        <span>3D Gaussian Splatting</span><span>Closed-loop testing</span><span>Neural simulation</span>
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
      <p>This work targets early recognition of hazardous interactions between vehicles and vulnerable road users. It combines monocular 3D localization, optical-flow dynamics, and transformer-based temporal fusion to capture subtle geometric and motion cues. The accompanying VRUHI benchmark contains 6,000 urban dashcam clips and supports proactive evaluation of VRU-related hazard detection.</p>
      <div class="keyword-strip" aria-label="Key topics">
        <span>VRU safety</span><span>Spatiotemporal fusion</span><span>Hazard detection</span>
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
      <p>This paper introduces Constrained-Adversarial Policy Optimization (CAPO) for generating safety-critical yet solvable autonomous-driving scenarios. A two-phase continual-learning framework first trains agents to complete driving tasks under safety constraints, then introduces an autonomous-vehicle expert so adversarial agents can generate challenging interactions without collapsing into unavoidable collisions.</p>
      <div class="keyword-strip" aria-label="Key topics">
        <span>Scenario generation</span><span>Continual learning</span><span>Safety constraints</span>
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
    <span>AAAI 2027</span>
  </div>

  <article class="paper-box" id="paper-echosplat">
    <div class="paper-box-image">
      <img src="{{ '/images/echosplat.png' | relative_url }}" alt="EchoSplat camera and LiDAR neural simulation pipeline" width="1215" height="657" loading="lazy" decoding="async">
    </div>
    <div class="paper-box-text">
      <div class="paper-meta">
        <span class="paper-label">AAAI 2027</span>
        <span class="paper-status paper-status--review">Under review</span>
      </div>
      <h3>EchoSplat: Self-Improving Camera–LiDAR Neural Simulation for End-to-End Autonomous Driving Testing</h3>
      <p class="paper-authors"><strong>Siying Li</strong>, Ying Ni, Yujia Zhao, Yuanbiao Cao, Jie Sun, Xintao Yan, Ye Tian, Jian Sun, Haotian Shi</p>
      <p class="paper-venue">Under review at the AAAI Conference on Artificial Intelligence.</p>
      <div class="paper-links">
        <button class="paper-toggle" type="button" aria-expanded="false" aria-controls="details-echosplat">Research focus <span aria-hidden="true">＋</span></button>
      </div>
    </div>
    <div class="paper-details" id="details-echosplat" hidden>
      <p class="paper-details__label">Research focus</p>
      <p>The manuscript focuses on self-improving camera–LiDAR neural simulation for end-to-end autonomous driving testing. Additional technical details and public materials will be linked after release.</p>
      <div class="keyword-strip" aria-label="Key topics"><span>Camera–LiDAR</span><span>Self-improvement</span><span>Neural simulation</span></div>
    </div>
  </article>

  <article class="paper-box" id="paper-scene2flow">
    <div class="paper-box-image">
      <img src="{{ '/images/scene2flow.png' | relative_url }}" alt="Scene2Flow evaluation framework for traffic participants beyond the ego vehicle" width="1206" height="426" loading="lazy" decoding="async">
    </div>
    <div class="paper-box-text">
      <div class="paper-meta">
        <span class="paper-label">AAAI 2027</span>
        <span class="paper-status paper-status--review">Under review</span>
      </div>
      <h3>Scene2Flow: Evaluating End-to-End Autonomous Driving Beyond the Ego Vehicle</h3>
      <p class="paper-authors">Yuanbiao Cao<sup>†</sup>, <strong>Siying Li<sup>†</sup></strong>, Yujia Zhao, Tong Nie, Xiaocong Zhao, Jie Sun, Peng Hang, Haotian Shi</p>
      <p class="paper-venue">Under review at the AAAI Conference on Artificial Intelligence.</p>
      <p class="paper-note"><sup>†</sup> Equal contribution.</p>
      <div class="paper-links">
        <button class="paper-toggle" type="button" aria-expanded="false" aria-controls="details-scene2flow">Research focus <span aria-hidden="true">＋</span></button>
      </div>
    </div>
    <div class="paper-details" id="details-scene2flow" hidden>
      <p class="paper-details__label">Research focus</p>
      <p>The manuscript studies evaluation of end-to-end autonomous driving beyond the ego vehicle, with attention to how the surrounding scene and traffic participants evolve. Additional technical details and public materials will be linked after release.</p>
      <div class="keyword-strip" aria-label="Key topics"><span>Scene flow</span><span>Beyond ego</span><span>Driving evaluation</span></div>
    </div>
  </article>

  <article class="paper-box" id="paper-targetdrive">
    <div class="paper-box-image">
      <img src="{{ '/images/targetdrive.png' | relative_url }}" alt="TargetDrive training allocation framework for end-to-end autonomous driving" width="1230" height="861" loading="lazy" decoding="async">
    </div>
    <div class="paper-box-text">
      <div class="paper-meta">
        <span class="paper-label">AAAI 2027</span>
        <span class="paper-status paper-status--review">Under review</span>
      </div>
      <h3>TargetDrive: Closing the Loop on Training Allocation for End-to-End Autonomous Driving</h3>
      <p class="paper-authors">Yujia Zhao, Jie Wang, <strong>Siying Li</strong>, Yuanbiao Cao, Yixin Li, Jialin Fan, Ying Ni, Haotian Shi, Jie Sun, Jian Sun</p>
      <p class="paper-venue">Under review at the AAAI Conference on Artificial Intelligence.</p>
      <div class="paper-links">
        <button class="paper-toggle" type="button" aria-expanded="false" aria-controls="details-targetdrive">Research focus <span aria-hidden="true">＋</span></button>
      </div>
    </div>
    <div class="paper-details" id="details-targetdrive" hidden>
      <p class="paper-details__label">Research focus</p>
      <p>The manuscript explores how evaluation signals can close the loop on training-data allocation for end-to-end autonomous driving. Additional technical details and public materials will be linked after release.</p>
      <div class="keyword-strip" aria-label="Key topics"><span>Training allocation</span><span>Feedback loop</span><span>End-to-end driving</span></div>
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
