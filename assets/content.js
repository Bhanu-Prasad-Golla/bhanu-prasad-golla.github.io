/* ============================================================
   SHARED PORTFOLIO CONTENT — single source of truth
   Every field below is taken verbatim/condensed from
   Bhanu_Prasad_Golla_masterCv.pdf. Nothing is invented.
   All five prototypes import this file.
   ============================================================ */

window.CV = {
  name: "Bhanu Prasad Golla",
  firstName: "Bhanu",
  role: "Embedded Systems & Automotive Software Engineer",
  roleShort: "Embedded Systems Engineer",
  tagline: "MSc Embedded Systems Design · Automotive Test & Validation",
  location: "Bremen, Germany",

  /* ------------------------------------------------------------------
     AVAILABILITY — edit this block to change what you are looking for.
     It drives the hero badge, the contact section, the final "Next"
     milestone on the journey, and the structured data for recruiters.
     ------------------------------------------------------------------ */
  openTo: {
    badge: "Open to roles across Germany",
    based: "Based in Bremen, Germany",
    areas: ["Embedded Hardware", "Embedded Software", "Automotive Systems", "Robotics"],
    types: ["Werkstudent roles", "internships", "master's thesis projects", "graduate positions"],
    areasSentence: "embedded hardware, embedded software, automotive systems and robotics",
    sentence:
      "Open to Werkstudent roles, internships, master's thesis projects and graduate positions in embedded hardware, embedded software, automotive systems and robotics — anywhere in Germany."
  },
  email: "bhanuprasadgolla596@gmail.com",
  phone: "+49 15510864319",
  linkedin: "https://linkedin.com/in/bhanuprasadgolla",
  linkedinLabel: "linkedin.com/in/bhanuprasadgolla",
  photo: "../../assets/bhanu-portrait.jpg",
  photoOffice: "../../assets/bhanu-office.jpg",

  // Rotating hero descriptors (derived only from CV wording)
  rotator: [
    "Automotive System Testing",
    "Requirements-Based Validation",
    "Embedded Software in C & Python",
    "MATLAB / Simulink & Stateflow",
    "FPGA & VHDL Design",
    "Functional Safety · ISO 26262"
  ],

  summary:
    "MSc Embedded Systems Design student with nearly three years of experience in automotive software and system testing, requirements-based validation, and debugging for vehicle powertrain features. Experienced in analysing system requirements, developing structured test cases and test plans, executing manual and automated tests, and investigating system-level issues.",

  summary2:
    "Hands-on experience with Python, C, MATLAB/Simulink, Stateflow, IBM DOORS, JIRA, Confluence, and CI/CD workflows. Strong interest in automotive ECU system development, E/E architectures, vehicle communication, diagnostics, and software-defined vehicle platforms.",

  // Factual counters — all derived from the CV, not estimated
  stats: [
    { value: "2.8", suffix: " yrs", label: "Automotive test engineering", sub: "Tata Elxsi, 07/2022 – 04/2025" },
    { value: "7", suffix: "", label: "Engineering projects", sub: "Embedded, FPGA, control & safety" },
    { value: "4", suffix: "", label: "Vehicle bus protocols", sub: "CAN · LIN · FlexRay · Ethernet" },
    { value: "2", suffix: "", label: "Languages", sub: "English C1 · German B1" }
  ],

  skillGroups: [
    {
      title: "Programming",
      icon: "code",
      items: ["Python", "C", "C++ (basic)", "VHDL", "Java"]
    },
    {
      title: "Modelling & Simulation",
      icon: "wave",
      items: ["MATLAB", "Simulink", "Stateflow", "Software-in-the-Loop", "Vivado", "Vitis"]
    },
    {
      title: "Automotive Software & Architecture",
      icon: "chip",
      items: ["AUTOSAR (basic)", "E/E architecture fundamentals", "ECU system development"]
    },
    {
      title: "Communication Protocols",
      icon: "bus",
      items: ["CAN", "LIN", "FlexRay", "Automotive Ethernet", "UART", "AXI4-Lite"]
    },
    {
      title: "Functional Safety & Quality",
      icon: "shield",
      items: ["ISO 26262", "ASPICE", "FMEA", "Fault Tree Analysis"]
    },
    {
      title: "Tools & Process",
      icon: "tools",
      items: ["IBM DOORS", "JIRA", "Confluence", "Git", "CI/CD", "Agile / Scrum"]
    }
  ],

  // Proficiency bars — ordered by depth of CV evidence, shown as
  // relative emphasis rather than a measured score.
  skillBars: [
    { label: "System & Requirements-Based Testing", value: 95 },
    { label: "Python / C Embedded Development", value: 88 },
    { label: "MATLAB · Simulink · Stateflow", value: 85 },
    { label: "Vehicle Communication (CAN/LIN/FlexRay/Eth)", value: 80 },
    { label: "Functional Safety (ISO 26262 · FMEA · FTA)", value: 78 },
    { label: "FPGA / VHDL on Zynq & ZedBoard", value: 75 }
  ],

  experience: [
    {
      company: "Tata Elxsi",
      role: "Test Engineer — Automotive Systems",
      period: "07/2022 – 04/2025",
      location: "Hyderabad, India",
      tag: "Vehicle Powertrain Features Validation",
      bullets: [
        "Analysed vehicle-feature, software and system-level requirements for vehicle powertrain features and translated them into structured test cases, test sets and validation plans.",
        "Developed requirements-based test cases and test strategies to verify automotive system behaviour against defined functional requirements.",
        "Executed manual and automated system tests and evaluated actual system behaviour against expected results.",
        "Developed and maintained keyword-driven test scripts and supported test automation activities for vehicle-level testing environments.",
        "Investigated failed test results, analysed deviations and supported debugging and root-cause investigation of software and system-level issues.",
        "Performed CI/CD pipeline checks and quality reviews to improve test completeness, consistency and software-quality assurance.",
        "Created and maintained test reports, validation results, technical documentation and traceability information throughout the development lifecycle.",
        "Worked within an Agile/Scrum multidisciplinary development environment, using JIRA and Confluence for documentation, issue management and project-status reporting."
      ]
    },
    {
      company: "Nucleonix Systems Pvt. Ltd.",
      role: "Embedded Intern",
      period: "10/2021 – 02/2022",
      location: "India",
      tag: "Embedded Measurement Systems",
      bullets: [
        "Supported the development and testing of embedded measurement systems and microcontroller-based devices.",
        "Performed functional testing, sanity checks, calibration, and validation of completed systems.",
        "Debugged circuit and system-level issues and supported troubleshooting of hardware/software integration problems.",
        "Assisted with microcontroller programming and PCB-level testing during product development.",
        "Performed quality checks to verify correct system operation before final delivery.",
        "Prepared technical documentation and user manuals for developed systems."
      ]
    }
  ],

  projects: [
    {
      id: "ev3",
      title: "Autonomous Navigation of Lego EV3",
      period: "",
      category: "Robotics · Model-Based Design",
      summary:
        "Model-based control software for an embedded robotic platform, validated from simulation through to hardware deployment.",
      bullets: [
        "Analysed software and system requirements and translated them into functional control behaviour for an embedded robotic platform.",
        "Developed model-based control software using MATLAB/Simulink and Stateflow for straight, circular and square movement scenarios.",
        "Created structured test cases, test plans and test harnesses for functional verification of system requirements.",
        "Performed simulation, Software-in-the-Loop testing, debugging and validation before deployment to physical hardware.",
        "Generated embedded code, deployed the validated model to the EV3 target and performed final system-level hardware testing.",
        "Prepared complete technical, testing and validation documentation."
      ],
      stack: ["MATLAB", "Simulink", "Stateflow", "SiL", "Lego EV3"],
      // Simple architecture graph used by the dashboard-style designs
      arch: [
        { from: "Requirements", to: "Simulink Model" },
        { from: "Simulink Model", to: "SiL Testing" },
        { from: "SiL Testing", to: "Code Generation" },
        { from: "Code Generation", to: "EV3 Hardware" }
      ],
      metrics: [
        { k: "Motion modes", v: "3" },
        { k: "Toolchain", v: "Simulink" },
        { k: "Verification", v: "SiL + HW" }
      ]
    },
    {
      id: "fpga-stepper",
      title: "FPGA-Based Stepper Motor Control & Monitoring",
      period: "",
      category: "FPGA · Embedded C · GUI",
      summary:
        "Embedded C firmware with interrupt-based sampling and UART link, paired with a Java desktop GUI for live motor control.",
      bullets: [
        "Developed embedded software in C for motor configuration, interrupt-based sampling, UART communication, and data handling.",
        "Developed a Java/Eclipse GUI for speed, direction, and position control.",
        "Integrated software and hardware components and performed functional and integration testing.",
        "Debugged software/hardware communication and analysed system behaviour.",
        "Validated the complete system through simulation and hardware testing.",
        "Documented software architecture, interfaces, and verification results."
      ],
      stack: ["C", "FPGA", "UART", "Java", "Eclipse"],
      arch: [
        { from: "Java GUI", to: "UART Link" },
        { from: "UART Link", to: "FPGA Controller" },
        { from: "FPGA Controller", to: "Stepper Motor" }
      ],
      metrics: [
        { k: "Interface", v: "UART" },
        { k: "Control", v: "Speed · Dir · Pos" },
        { k: "Sampling", v: "Interrupt" }
      ]
    },
    {
      id: "elevator",
      title: "Acceleration-Based Elevator Height Measurement",
      period: "",
      category: "Sensors · Analog & Mixed Signal",
      summary:
        "MEMS accelerometer front-end with custom signal conditioning, acquired and processed on an ATmega32.",
      bullets: [
        "Designed, assembled, and tested an electronic acceleration measurement circuit using an ADXL335 MEMS accelerometer.",
        "Developed analog signal-conditioning circuitry including offset compensation, amplification, and active low-pass filtering.",
        "Configured the ATmega32 microcontroller for ADC-based sensor data acquisition and serial communication.",
        "Performed functional testing, calibration, circuit debugging, and measurement analysis using laboratory equipment.",
        "Analysed sensor noise, calibration errors, and signal deviations and documented the complete circuit design and test results."
      ],
      stack: ["ADXL335", "ATmega32", "ADC", "Analog Filtering"],
      arch: [
        { from: "ADXL335", to: "Signal Conditioning" },
        { from: "Signal Conditioning", to: "ATmega32 ADC" },
        { from: "ATmega32 ADC", to: "Serial Output" }
      ],
      metrics: [
        { k: "Sensor", v: "ADXL335" },
        { k: "MCU", v: "ATmega32" },
        { k: "Chain", v: "Analog + ADC" }
      ]
    },
    {
      id: "braking-safety",
      title: "Safety & Reliability Analysis of a Car Braking System",
      period: "",
      category: "Functional Safety · FMEA · FTA",
      summary:
        "Full hazard and reliability study of a dual-circuit hydraulic brake system, from FHA through fault trees to mitigation.",
      bullets: [
        "Performed a Functional Hazard Assessment for a dual-circuit hydraulic automotive braking system and classified potential hazards according to severity.",
        "Conducted Failure Mode and Effects Analysis (FMEA) covering mechanical, hydraulic and electrical system components.",
        "Developed fault-tree models to analyse system-level failure combinations and calculate failure probabilities.",
        "Evaluated safety-critical single points of failure and defined quantitative reliability requirements for total braking-system failure.",
        "Identified the tandem master cylinder as a critical system element and evaluated additional braking mechanisms as potential risk-mitigation measures.",
        "Documented safety assumptions, failure behaviour, reliability calculations and proposed mitigation strategies."
      ],
      stack: ["FHA", "FMEA", "Fault Tree Analysis", "ISO 26262"],
      arch: [
        { from: "Functional Hazard Assessment", to: "FMEA" },
        { from: "FMEA", to: "Fault Tree Models" },
        { from: "Fault Tree Models", to: "Mitigation Measures" }
      ],
      metrics: [
        { k: "System", v: "Dual-circuit" },
        { k: "Critical item", v: "Master cylinder" },
        { k: "Methods", v: "FHA · FMEA · FTA" }
      ]
    },
    {
      id: "seesaw",
      title: "Discrete Control of a Seesaw System",
      period: "05/2025 – 08/2025",
      category: "Control Engineering",
      summary:
        "Nonlinear seesaw–cart model linearised to a four-state space model, stabilised with pole-placement and PI state feedback.",
      bullets: [
        "Developed a nonlinear mathematical model of a seesaw–cart system in MATLAB/Simulink using its mechanical parameters and equations of motion.",
        "Linearized the nonlinear equations around the zero operating point and derived a four-state state-space model.",
        "Compared linear and nonlinear model responses and identified that the linear approximation is accurate only near the selected operating point.",
        "Observed significant divergence between the models after approximately 1–1.5 seconds for larger state deviations.",
        "Designed a full-state feedback controller using Ackermann's pole-placement method, including state-feedback and preamplifier gains.",
        "Investigated different pole locations and designed an augmented fifth-order PI state-feedback controller to improve disturbance rejection and steady-state accuracy."
      ],
      stack: ["MATLAB", "Simulink", "State-Space", "Ackermann", "PI Control"],
      arch: [
        { from: "Nonlinear Model", to: "Linearisation" },
        { from: "Linearisation", to: "4-State Model" },
        { from: "4-State Model", to: "Pole Placement" },
        { from: "Pole Placement", to: "5th-Order PI Controller" }
      ],
      metrics: [
        { k: "States", v: "4 → 5" },
        { k: "Method", v: "Ackermann" },
        { k: "Valid to", v: "~1–1.5 s" }
      ]
    },
    {
      id: "moving-light",
      title: "Moving Light Controller on ZedBoard",
      period: "04/2025 – 07/2026",
      category: "FPGA · VHDL",
      summary:
        "8-bit sequential LED pattern controller with pushbutton rotation and pattern load, verified by testbench and on hardware.",
      bullets: [
        "Implemented an 8-bit sequential LED pattern controller with pushbutton-controlled left/right rotation, stop and pattern-load functions.",
        "Developed a clock-divider process and synchronous control logic; validated via testbench simulation in Vivado and on ZedBoard hardware."
      ],
      stack: ["VHDL", "Vivado", "ZedBoard", "Testbench"],
      arch: [
        { from: "Pushbuttons", to: "Control Logic" },
        { from: "Clock Divider", to: "Control Logic" },
        { from: "Control Logic", to: "8-bit LED Pattern" }
      ],
      metrics: [
        { k: "Width", v: "8-bit" },
        { k: "Verified", v: "Sim + HW" },
        { k: "Target", v: "ZedBoard" }
      ]
    },
    {
      id: "prbs",
      title: "Hardware-Accelerated 8-Bit PRBS Generator on Zynq-7000",
      period: "04/2025 – 06/2025",
      category: "FPGA · SoC Integration",
      summary:
        "Custom AXI4-Lite IP core driven by a bare-metal C application on the ARM Cortex-A9 processing system.",
      bullets: [
        "Designed an 8-bit PRBS generator core in VHDL using a Fibonacci LFSR and packaged it as a custom AXI4-Lite slave IP core.",
        "Integrated the IP with the ARM Cortex-A9 processing system via AXI interconnect; mapped ZedBoard switches/pushbuttons and LEDs as I/O.",
        "Developed a bare-metal C application in Vitis with an interactive serial command interface for seed loading and step control, verified via KiTTY."
      ],
      stack: ["VHDL", "AXI4-Lite", "Zynq-7000", "Vitis", "Bare-metal C"],
      arch: [
        { from: "Cortex-A9 (PS)", to: "AXI Interconnect" },
        { from: "AXI Interconnect", to: "PRBS IP Core (PL)" },
        { from: "PRBS IP Core (PL)", to: "ZedBoard I/O" }
      ],
      metrics: [
        { k: "Core", v: "Fibonacci LFSR" },
        { k: "Bus", v: "AXI4-Lite" },
        { k: "SoC", v: "Zynq-7000" }
      ]
    }
  ],

  /* ------------------------------------------------------------------
     THE JOURNEY — education and work merged into one chronological
     track, 2016 to today. Every entry is drawn from the master CV.
     Note the deliberate overlap: the Nucleonix internship ran during
     the final year of the bachelor's degree.
     ------------------------------------------------------------------ */
  journey: [
    {
      year: "2016",
      period: "06/2016 – 03/2019",
      kind: "education",
      title: "Diploma in Electrical and Electronics Engineering",
      org: "Jayapraksh Narayan Engineering College",
      place: "Mahabubnagar, India",
      note: "Where the foundation was laid — electrical and electronics engineering from the ground up.",
      tags: ["Electrical", "Electronics"]
    },
    {
      year: "2019",
      period: "06/2019 – 04/2022",
      kind: "education",
      title: "B.E. Electrical and Electronics Engineering",
      org: "Veltech University",
      place: "Chennai, India",
      note: "Four years deepening the fundamentals, and the point where embedded systems became the direction.",
      tags: ["Embedded", "Microcontrollers"]
    },
    {
      year: "2021",
      period: "10/2021 – 02/2022",
      kind: "work",
      title: "Embedded Intern",
      org: "Nucleonix Systems Pvt. Ltd.",
      place: "India",
      note: "First industry role, during the final year of the degree. Embedded measurement systems, microcontroller programming, PCB-level testing and hardware/software debugging.",
      tags: ["Firmware", "PCB Testing", "Calibration"]
    },
    {
      year: "2022",
      period: "07/2022 – 04/2025",
      kind: "work",
      title: "Test Engineer — Automotive Systems",
      org: "Tata Elxsi",
      place: "Hyderabad, India",
      note: "Nearly three years on vehicle powertrain features validation: turning requirements into structured test cases, executing manual and automated tests, and tracing every deviation to its root cause.",
      tags: ["Requirements", "Test Automation", "Root-Cause Analysis", "CI/CD"]
    },
    {
      year: "2025",
      period: "04/2025 – Present",
      kind: "education",
      title: "M.Sc. Embedded Systems Design",
      org: "Hochschule Bremerhaven",
      place: "Bremerhaven, Germany",
      note: "A move to Germany and back to the hardware. FPGA and VHDL design on Zynq-7000 and ZedBoard, control engineering, and functional-safety analysis.",
      tags: ["VHDL", "Zynq-7000", "Control Design", "ISO 26262"],
      current: true
    },
    {
      year: "Next",
      period: "2026 →",
      kind: "next",
      title: "Embedded hardware, embedded software, automotive systems and robotics",
      org: "Open to roles across Germany",
      place: "Anywhere in Germany",
      note: "Open to Werkstudent roles, internships, master's thesis projects and graduate positions in any of these four areas.",
      tags: ["Werkstudent", "Internship", "Master's Thesis", "Graduate Role"],
      future: true
    }
  ],

  education: [
    {
      school: "Hochschule Bremerhaven",
      degree: "M.Sc. Embedded Systems Design",
      period: "04/2025 – Present",
      location: "Bremerhaven, Germany",
      current: true
    },
    {
      school: "Veltech University",
      degree: "B.E. Electrical and Electronics Engineering",
      period: "06/2019 – 04/2022",
      location: "Chennai, India",
      current: false
    },
    {
      school: "Jayapraksh Narayan Engineering College",
      degree: "Diploma in Electrical and Electronics Engineering",
      period: "06/2016 – 03/2019",
      location: "Mahabubnagar, India",
      current: false
    }
  ],

  languages: [
    { name: "English", level: "C1", pct: 90 },
    { name: "German", level: "B1", pct: 55 }
  ],

  nav: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "journey", label: "Journey" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" }
  ]
};

/* ---------- Small shared helpers reused by every prototype ---------- */
window.PF = {
  // Reveal-on-scroll: adds .in when element enters the viewport
  reveal(selector = "[data-reveal]", opts = {}) {
    // Allow reveal({threshold}) as a shorthand for reveal(default, {threshold})
    if (typeof selector === "object" && selector !== null) {
      opts = selector;
      selector = "[data-reveal]";
    }
    const els = document.querySelectorAll(selector);
    if (!("IntersectionObserver" in window)) {
      els.forEach(e => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          const d = en.target.dataset.delay || 0;
          setTimeout(() => en.target.classList.add("in"), +d);
          io.unobserve(en.target);
        }
      });
    }, { threshold: opts.threshold || 0.12, rootMargin: opts.rootMargin || "0px 0px -60px 0px" });
    els.forEach(e => io.observe(e));
  },

  // Count-up animation for stat numbers
  countUp(el, target, dur = 1400, decimals = 0) {
    const start = performance.now();
    const step = (now) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * eased).toFixed(decimals);
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target.toFixed(decimals);
    };
    requestAnimationFrame(step);
  },

  // Scroll progress bar (expects an element with id="progress")
  progress(id = "progress") {
    const bar = document.getElementById(id);
    if (!bar) return;
    const upd = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      bar.style.transform = `scaleX(${max > 0 ? h.scrollTop / max : 0})`;
    };
    document.addEventListener("scroll", upd, { passive: true });
    upd();
  },

  // Active-section highlighting for nav links
  scrollSpy(linkSel = "[data-spy]") {
    const links = [...document.querySelectorAll(linkSel)];
    if (!links.length) return;
    const sections = links
      .map(l => document.getElementById(l.dataset.spy))
      .filter(Boolean);
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.3;
      let active = sections[0];
      sections.forEach(s => { if (s.offsetTop <= y) active = s; });
      links.forEach(l => l.classList.toggle("active", active && l.dataset.spy === active.id));
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  },

  // Smooth anchor scrolling that respects reduced-motion
  smoothAnchors(scope = document) {
    scope.addEventListener("click", (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const el = document.getElementById(a.getAttribute("href").slice(1));
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
      history.replaceState(null, "", a.getAttribute("href"));
    });
  },

  reduced() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  },

  // Shared markup for the small "prototype X of 5" switcher on every page
  switcher(current) {
    const designs = [
      { k: "a", n: "Futuristic 3D" },
      { k: "b", n: "Minimal Pro" },
      { k: "c", n: "Dashboard" },
      { k: "d", n: "Cinematic" },
      { k: "e", n: "Hybrid" }
    ];
    const links = designs.map(d =>
      `<a href="../${d.k}/" class="pfsw-dot${d.k === current ? " on" : ""}" title="Design ${d.k.toUpperCase()} — ${d.n}">${d.k.toUpperCase()}</a>`
    ).join("");
    const el = document.createElement("div");
    el.className = "pfsw";
    el.innerHTML = `<a href="../../" class="pfsw-home" title="Back to comparison dashboard">◆ Compare</a><span class="pfsw-sep"></span>${links}`;
    document.body.appendChild(el);
    const style = document.createElement("style");
    style.textContent = `
      .pfsw{position:fixed;z-index:9999;left:50%;transform:translateX(-50%);bottom:18px;display:flex;align-items:center;gap:7px;
        padding:7px 12px;border-radius:999px;background:rgba(10,12,20,.82);backdrop-filter:blur(14px) saturate(160%);
        -webkit-backdrop-filter:blur(14px) saturate(160%);border:1px solid rgba(255,255,255,.16);
        box-shadow:0 10px 40px rgba(0,0,0,.45);font-family:ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;}
      .pfsw-home{color:#e7ecf5;font-size:11.5px;font-weight:600;text-decoration:none;letter-spacing:.02em;white-space:nowrap;opacity:.85}
      .pfsw-home:hover{opacity:1}
      .pfsw-sep{width:1px;height:16px;background:rgba(255,255,255,.2)}
      .pfsw-dot{width:25px;height:25px;border-radius:50%;display:grid;place-items:center;font-size:11px;font-weight:700;
        text-decoration:none;color:#9aa6bd;background:rgba(255,255,255,.07);transition:.22s ease;letter-spacing:0}
      .pfsw-dot:hover{color:#fff;background:rgba(255,255,255,.18);transform:translateY(-2px)}
      .pfsw-dot.on{color:#04070f;background:#49e0ff;box-shadow:0 0 16px rgba(73,224,255,.55)}
      @media print{.pfsw{display:none}}
    `;
    document.head.appendChild(style);
  }
};
