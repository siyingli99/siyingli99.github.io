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
      <time datetime="2026-09">2026.09</time>
      <p><span class="news-mark">Latest</span> <strong>AETHER</strong>, our multimodal closed-loop autonomous-driving simulator, is now open source.</p>
    </div>
    <div class="news-item">
      <time datetime="2026-08">2026.08</time>
      <p>Three manuscripts are currently under review.</p>
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

  {% for paper in site.data.publications.peer_reviewed %}
    {% include publication-card.html paper=paper %}
  {% endfor %}

  <span class="anchor" id="under-review"></span>
  <div class="publication-group-heading publication-group-heading--review">
    <div>
      <h3>Manuscripts under review</h3>
      <p>Ongoing work shared for research communication.</p>
    </div>
    <span>Under review</span>
  </div>

  {% for paper in site.data.publications.under_review %}
    {% include publication-card.html paper=paper %}
  {% endfor %}
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

    <section class="aether-demo" aria-labelledby="aether-demo-title">
      <div class="aether-subsection-heading">
        <div>
          <span>Demo deck // 06 clips</span>
          <h4 id="aether-demo-title">From scene layers to closed-loop driving</h4>
        </div>
        <p>The panels follow the simulator from editable scene representation, through multimodal sensing, to policy-in-the-loop evaluation. Playback remains user-controlled.</p>
      </div>

      <div class="aether-demo-pair" aria-label="Decoupled scene layers from the same driving scene">
        <figure class="aether-video-card">
          <div class="aether-video-frame">
            <video controls muted playsinline preload="metadata" aria-label="Static background reconstruction">
              <source src="{{ '/videos/web/background.mp4' | relative_url }}" type="video/mp4">
            </video>
            <span>Layer 01</span>
          </div>
          <figcaption><strong>Static background</strong><small>The persistent road, infrastructure, and environment after dynamic actors are decoupled.</small></figcaption>
        </figure>
        <figure class="aether-video-card">
          <div class="aether-video-frame">
            <video controls muted playsinline preload="metadata" aria-label="Dynamic foreground reconstruction">
              <source src="{{ '/videos/web/foreground.mp4' | relative_url }}" type="video/mp4">
            </video>
            <span>Layer 02</span>
          </div>
          <figcaption><strong>Dynamic foreground</strong><small>The movable traffic actors isolated from the same scene for independent editing and replay.</small></figcaption>
        </figure>
      </div>

      <figure class="aether-video-card aether-video-card--lidar">
        <div class="aether-video-frame">
          <video controls muted playsinline preload="metadata" aria-label="LiDAR point-cloud simulation in camera and bird's-eye views">
            <source src="{{ '/videos/web/lidar-sim.mp4' | relative_url }}" type="video/mp4">
          </video>
          <span>Sensor stack</span>
        </div>
        <figcaption><strong>LiDAR simulation</strong><small>The upper panel projects simulated point clouds into all six camera views; the lower panel shows the corresponding bird's-eye-view geometry.</small></figcaption>
      </figure>

      <div class="aether-weather" data-weather-demo>
        <div class="aether-weather__topline">
          <div>
            <span>UniAD closed loop</span>
            <strong>One policy, three conditions</strong>
          </div>
          <div class="aether-weather__tabs" role="tablist" aria-label="Select a closed-loop environment">
            <button id="weather-tab-sunny" type="button" role="tab" aria-selected="true" aria-controls="weather-panel-sunny" data-weather-tab="sunny">Sunny</button>
            <button id="weather-tab-cloudy" type="button" role="tab" aria-selected="false" aria-controls="weather-panel-cloudy" data-weather-tab="cloudy" tabindex="-1">Cloudy</button>
            <button id="weather-tab-night" type="button" role="tab" aria-selected="false" aria-controls="weather-panel-night" data-weather-tab="night" tabindex="-1">Night</button>
          </div>
        </div>
        <figure class="aether-weather__panel" id="weather-panel-sunny" role="tabpanel" aria-labelledby="weather-tab-sunny" data-weather-panel="sunny">
          <video controls muted playsinline preload="metadata" aria-label="UniAD closed-loop simulation in sunny conditions">
            <source src="{{ '/videos/web/sunny.mp4' | relative_url }}" type="video/mp4">
          </video>
          <figcaption><strong>Sunny</strong><span>Closed-loop rollout with clear daylight appearance.</span></figcaption>
        </figure>
        <figure class="aether-weather__panel" id="weather-panel-cloudy" role="tabpanel" aria-labelledby="weather-tab-cloudy" data-weather-panel="cloudy" hidden>
          <video controls muted playsinline preload="metadata" aria-label="UniAD closed-loop simulation in cloudy conditions">
            <source src="{{ '/videos/web/cloudy.mp4' | relative_url }}" type="video/mp4">
          </video>
          <figcaption><strong>Cloudy</strong><span>The same testing interface under diffuse overcast illumination.</span></figcaption>
        </figure>
        <figure class="aether-weather__panel" id="weather-panel-night" role="tabpanel" aria-labelledby="weather-tab-night" data-weather-panel="night" hidden>
          <video controls muted playsinline preload="metadata" aria-label="UniAD closed-loop simulation at night">
            <source src="{{ '/videos/web/night.mp4' | relative_url }}" type="video/mp4">
          </video>
          <figcaption><strong>Night</strong><span>A low-light closed-loop test for appearance-shift robustness.</span></figcaption>
        </figure>
      </div>
    </section>

    <div class="aether-project__lineage">
      <span>Research → system</span>
      <p>Decoupled scene composition, multimodal novel-view enhancement, reverse distillation, and beyond-ego diagnosis are brought together in one reproducible pipeline that will continue to evolve.</p>
    </div>

    <section class="aether-progress" aria-labelledby="aether-progress-title">
      <div class="aether-subsection-heading">
        <div>
          <span>Development log</span>
          <h4 id="aether-progress-title">Where AETHER is—and where it goes next</h4>
        </div>
      </div>
      <div class="aether-progress__grid">
        <article class="aether-progress__item aether-progress__item--latest">
          <span>01 / Latest update</span>
          <h5>Open-source release</h5>
          <p>The simulator code is now public, covering editable 3DGS reconstruction, actor control, RGB and two-mode LiDAR synthesis, Difix restoration, multimodal rollout, reverse distillation, UniAD closed-loop driving, diagnosis, and output evaluation.</p>
        </article>
        <article class="aether-progress__item">
          <span>02 / Current milestone</span>
          <h5>Reliable scene-level testing</h5>
          <p>Current development focuses on reliable testing across reconstructed scenes from public driving datasets. The internal system already supports multiple scenes and multiple driving algorithms, although not every integration is included in the public repository yet. Scenario editing is still centered on one vehicle at a time, while broader traffic composition and scene diversity remain active work.</p>
        </article>
        <article class="aether-progress__item aether-progress__item--next">
          <span>03 / Next target</span>
          <h5>2D traffic flow × 3D neural rendering</h5>
          <p>The next stage will connect TESS NG and LimSim for trajectory-level traffic-flow simulation in 2D, then render the evolving traffic state in AETHER's 3D scenes. TESS NG integration is an active collaboration with Jida (济达).</p>
        </article>
      </div>
    </section>
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
        <h3 id="research-map-title">Papers → AETHER → evaluation</h3>
      </div>
      <p>Select a thread to trace how individual studies converge in the simulator and surface as measurable system behavior.</p>
    </div>
    <div class="research-map__stage" data-map-stage data-active="all">
      <div class="map-topics" aria-label="Research threads" data-stage-label="Threads">
        <button type="button" data-map-topic="vision" aria-pressed="false"><span>01</span>3D Vision</button>
        <button type="button" data-map-topic="simulation" aria-pressed="false"><span>02</span>Neural Simulation</button>
        <button type="button" data-map-topic="evaluation" aria-pressed="false"><span>03</span>Driving Evaluation</button>
      </div>
      <div class="map-papers map-stage-node" aria-label="Related publications" data-stage-label="Papers">
        <a class="map-paper" href="#paper-decouplegs" data-map-topics="vision simulation evaluation"><span>P-01</span><strong>DecoupleGS</strong><small>3D · SIM · EVAL</small></a>
        <a class="map-paper" href="#paper-echosplat" data-map-topics="vision simulation evaluation"><span>P-02</span><strong>EchoSplat</strong><small>3D · SIM · EVAL</small></a>
        <a class="map-paper" href="#paper-scene2flow" data-map-topics="vision evaluation"><span>P-03</span><strong>Scene2Flow</strong><small>3D · EVAL</small></a>
        <a class="map-paper" href="#paper-targetdrive" data-map-topics="simulation evaluation"><span>P-04</span><strong>TargetDrive</strong><small>SIM · EVAL</small></a>
        <a class="map-paper" href="#paper-vru-hazard" data-map-topics="vision evaluation"><span>P-05</span><strong>VRU Hazard</strong><small>3D · EVAL</small></a>
        <a class="map-paper" href="#paper-capo" data-map-topics="evaluation"><span>P-06</span><strong>CAPO</strong><small>EVAL</small></a>
      </div>
      <a class="map-system map-stage-node" href="#aether" data-stage-label="System">
        <span>Open-source core</span>
        <strong>AETHER</strong>
        <small>Reconstruct · Edit · Sense · Roll out · Refine</small>
      </a>
      <div class="map-outcomes map-stage-node" aria-label="System outputs" data-stage-label="Evaluation">
        <div class="map-outcome" data-map-topics="vision simulation"><span>E-01</span><strong>Sensor fidelity</strong><small>RGB · LiDAR · novel views</small></div>
        <div class="map-outcome" data-map-topics="simulation evaluation"><span>E-02</span><strong>Closed-loop behavior</strong><small>policy consistency · safety</small></div>
        <div class="map-outcome" data-map-topics="evaluation"><span>E-03</span><strong>System diagnosis</strong><small>failures · traffic impact</small></div>
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
