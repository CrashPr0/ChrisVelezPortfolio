export type Project = {
  slug: string;
  title: string;
  summary: string;
  role?: string;
  tools: string[];
  year: string;
  impact: string;
  description: string[];
  tags: string[];
  mediaAlt: string;
  mediaPath: string;
  /** Additional images for a slideshow. First slide is mediaPath. */
  mediaSlides?: { path: string; alt: string }[];
  /**
   * CSS `object-position` value for `object-fit: cover` images.
   * Example: "50% 40%" (x y).
   */
  mediaFocus?: string;
  /** Headline numbers shown on the card and project page. */
  proof?: { value: string; label: string }[];
  /** Caveat shown under the proof numbers. */
  proofNote?: string;
  /** Short list of what I personally built. */
  myRole?: string[];
  /** 1-based homepage Selected Projects order. Omitted projects are not featured. */
  featured?: number;
  githubUrl?: string;
  pressUrl?: string;
  siteUrl?: string;
  siteLabel?: string;
  steamUrl?: string;
  process?: { heading: string; body: string }[];
  challenges?: string[];
  lessons?: string[];
};

export const projects: Project[] = [
  {
    slug: "spatial-drop",
    title: "Spatial Drop",
    summary:
      "Turns GLB models into AR web experiences with shareable links and QR codes.",
    role: "Lead Developer",
    tools: ["TypeScript", "React", "vinext", "Vite", "Cloudflare R2", "@google/model-viewer"],
    year: "Not specified",
    impact:
      "Supports viewing models through Apple Quick Look, Android Scene Viewer, and WebXR.",
    description: [
      "The full application stores uploaded GLB models in Cloudflare R2 and provides shareable viewing pages with QR codes.",
      "The static GitHub Pages preview can preview local GLB files and share links to public HTTPS GLB URLs; persistent uploads require the upload API and object storage."
    ],
    tags: ["AR", "3D", "WebXR"],
    mediaAlt: "Spatial Drop Studio showing the SJSU Spartan Loop 3D model in the live browser preview",
    mediaPath: "/images/projects/spatial-drop-studio.webp",
    mediaSlides: [
      { path: "/images/projects/spatial-drop-studio.webp", alt: "Spatial Drop Studio showing the SJSU Spartan Loop 3D model in the live browser preview" },
      { path: "/images/projects/spatial-drop-share.webp", alt: "Spatial Drop share panel with generated AR link and scannable QR code" },
      { path: "/images/projects/spatial-drop-beam.webp", alt: "Spatial Drop QR Beam mode for serverless Fountain QR and Cimbar optical model transfer" }
    ],
    githubUrl: "https://github.com/CrashPr0/spatial-drop",
    siteUrl: "https://crashpr0.github.io/spatial-drop/",
    siteLabel: "Open Studio preview"
  },
  {
    slug: "echoes-of-expression",
    title: "Echoes of Expression",
    summary:
      "A location-based AR exhibition for Immersion 2026 across SJSU, the MLK Library, and San José City Hall.",
    role: "Lead Developer",
    tools: ["JavaScript", "A-Frame", "Niantic Spatial XR"],
    year: "2026",
    impact:
      "Places artworks at geographic coordinates and opens artist statements when visitors tap them.",
    description: [
      "The browser experience uses GPS, compass readings, and the Niantic Spatial XR engine to place artworks along a walking route. Models load as visitors approach and are released as they leave.",
      "A desktop preview offers mouse-look and WASD navigation without a camera or GPS. Exhibition content and placement settings live in artworks.js."
    ],
    tags: ["AR", "Exhibition", "Location-based"],
    mediaAlt: "Echoes of Expression AR exhibition start screen for SJSU campus, MLK Library, and San José City Hall",
    mediaPath: "/images/projects/echoes-landing.webp",
    mediaSlides: [
      { path: "/images/projects/echoes-landing.webp", alt: "Echoes of Expression AR exhibition start screen for SJSU campus, MLK Library, and San José City Hall" },
      { path: "/images/projects/echoes-works.webp", alt: "All works exhibition directory showing AR artworks and distances across the walking route" },
      { path: "/images/projects/echoes-3d-preview.webp", alt: "Commotion, Part 1 3D television sculpture loaded in Echoes of Expression desktop preview mode" },
      { path: "/images/projects/echoes-statement.webp", alt: "Artwork detail panel showing location metadata and preview for Commotion, Part 1" }
    ],
    githubUrl: "https://github.com/CrashPr0/EchoesOfExpression",
    siteUrl: "https://crashpr0.github.io/EchoesOfExpression/?preview",
    siteLabel: "Open Desktop Preview"
  },
  {
    slug: "ischool-hologram-workshop",
    title: "Spectre Hologram Workshop",
    summary:
      "A browser tool that formats images and videos for Spectre pyramid displays, styled for the SJSU School of Information.",
    role: "Lead Developer",
    tools: ["JavaScript", "Canvas API", "Tailwind CSS", "CSS 3D transforms"],
    year: "Not specified",
    impact:
      "Provides four-face formatting, live previews, a simulated viewer, and downloads for pyramid display content.",
    description: [
      "Users upload an image or video, preview its four-face layout, and download the formatted content for a phone topped with a Spectre pyramid prism.",
      "Canvas handles image and video processing, while CSS 3D transforms simulate the viewer. The display uses the reflection-based Pepper's Ghost effect."
    ],
    tags: ["Hologram", "Workshop", "Image Processing"],
    mediaAlt: "Spectre Hologram Workshop prism viewer displaying a four-face SJSU Spartan layout",
    mediaPath: "/images/projects/hologram-viewer.webp",
    mediaSlides: [
      { path: "/images/projects/hologram-viewer.webp", alt: "Spectre Hologram Workshop prism viewer displaying a four-face SJSU Spartan layout" },
      { path: "/images/projects/hologram-home.webp", alt: "Spectre Hologram Workshop interface showing Pepper's Ghost instructions and upload controls" }
    ],
    githubUrl: "https://github.com/CrashPr0/ischool-hologram-workshop",
    siteUrl: "https://crashpr0.github.io/ischool-hologram-workshop/",
    siteLabel: "Open Workshop Tool"
  },
  {
    slug: "ischool-advising-chatbot",
    title: "iSchool Advising Support Chatbot",
    summary:
      "A team project that answers ISDA and MLIS advising questions from official SJSU iSchool sources, with citations and a path to human help.",
    role: "Main contributor",
    tools: ["Flask", "Python", "OpenAI", "Azure OpenAI", "RAG", "BM25", "Azure App Service", "pytest", "pip-audit"],
    year: "2026",
    proof: [
      { value: "~60%", label: "of commits (about 137 of ~230)" },
      { value: "84/84", label: "citation links valid" },
      { value: "75%", label: "hit rate at top 4 retrieved results" }
    ],
    proofNote:
      "Citation and retrieval figures come from an offline evaluation that used stand-in embeddings. Commit share is from the team repository history.",
    myRole: [
      "Ingestion pipeline",
      "Azure deployment",
      "Retrieval tuning",
      "Link verification",
      "Advisor handoff",
      "PDF export",
      "Canvas embedding"
    ],
    impact:
      "Supports academic advisors with source-based answers while keeping student records out of the bot and routing distress to a human handoff.",
    description: [
      "I build this chatbot with Marios Tawdros and Joshua Rieta, advised by Dr. Karen Wang. Our goal is to support academic advisors in their work without replacing them.",
      "The app uses Flask and OpenAI / Azure OpenAI for retrieval-augmented generation over official SJSU iSchool sources. Students select ISDA or MLIS, and hybrid BM25 retrieval finds material for their program. Answers cite their sources, and invented links are stripped from replies.",
      "The mobile-friendly UI includes one-click PDF export. Students can report an issue, and a reviewer dashboard lets the team review those reports. Reports are automatically deleted after 90 days.",
      "Student records stay out of the bot entirely. Students in distress are routed to a human handoff instead of an automated reply. CI runs pytest and pip-audit, and the app is deployed on Azure App Service."
    ],
    tags: ["AI", "Chatbot", "RAG", "Flask", "Azure", "Higher Education"],
    process: [
      {
        heading: "Scoping advising support",
        body: "We use official SJSU iSchool sources for ISDA and MLIS advising questions. The program selector keeps the student's program explicit, and student records stay out of the bot."
      },
      {
        heading: "Retrieval and citations",
        body: "The Flask app uses OpenAI / Azure OpenAI with RAG and hybrid BM25 retrieval. Answers include source citations, and invented links are stripped before the reply reaches the student."
      },
      {
        heading: "Review and deployment",
        body: "Issue reporting feeds a reviewer dashboard, with reports automatically deleted after 90 days. We evaluate answers against the advising test set, including distress and sensitive-data cases. CI runs pytest and pip-audit, and we deploy to Azure App Service."
      }
    ],
    challenges: [
      "A generated answer can include an invented link. We strip those links and keep source citations tied to official SJSU iSchool material.",
      "Advising questions can involve private records or distress. We keep student records out of the bot and route students in distress to a human handoff."
    ],
    lessons: [
      "Source citations and the ISDA / MLIS selector make it easier to see which program and material an answer covers.",
      "Issue reports give the team a way to review answers, while automatic deletion limits how long those reports are kept."
    ],
    mediaAlt: "SJSU iSchool Advising Support Chatbot live web interface for BS ISDA, MLIS, MARA, and MS Informatics",
    mediaPath: "/images/projects/ischool-chatbot-live.webp",
    mediaSlides: [
      { path: "/images/projects/ischool-chatbot-live.webp", alt: "SJSU iSchool Advising Support Chatbot live web interface for BS ISDA, MLIS, MARA, and MS Informatics" },
      { path: "/images/projects/ischool-chatbot-architecture.png", alt: "Architecture diagram of the iSchool Advising Chatbot" }
    ],
    siteUrl: "https://ischooladvisingchatbot-dx4ynl.azurewebsites.net",
    siteLabel: "Try the live chatbot"
  },
  {
    slug: "benthos",
    featured: 1,
    title: "Benthos",
    summary:
      "A co-op submarine underwater exploration game where players work together to uncover the secrets of Europa's ocean.",
    role: "Graphics Lead",
    tools: ["Unreal Engine 5.4", "C++", "Blueprint"],
    year: "In development",
    impact:
      "Integrated and polished a multiplayer treasure-and-interaction loop in UE5.4—fixing replication and crash bugs in C++, separating post-process pipelines, and unifying crosshair feedback with E-prompt overlap detection.",
    description: [
      "On Benthos, I am the Graphics Lead. My focus is on the look and feel of the game: lighting, materials, color, and how the environment reads to a player who has never seen it before.",
      "Recent work on the treasuresystem branch covered cross-system integration beyond visuals: treasure hunting, shared inventory and hotbar, submarine deposits, downed/revive mechanics, shield and power consoles, and interaction prompts—the “E” UI. The goal was not a feature list but production-grade polish where C++, Blueprint, replication, and UX all had to agree.",
      "A lot of the work is about building spatial trust. Players need to feel comfortable navigating an alien underwater world without a map in their hand, so the visuals have to do a lot of the communicating—and feedback systems like the crosshair and outline effects have to reinforce that same language.",
      "We treat the project as a learning experience as much as a product, which means we ship, get feedback, and adjust. That loop has pushed the quality forward faster than trying to get it perfect before anyone sees it."
    ],
    tags: ["Co-op", "Underwater", "Multiplayer", "Unreal C++", "Gameplay Systems", "UX", "Graphics Direction"],
    mediaAlt: "Benthos header artwork",
    mediaPath: "/images/placeholders/benthos-header.png",
    mediaSlides: [
      { path: "/images/placeholders/benthos-header.png", alt: "Benthos header artwork" },
      { path: "/images/placeholders/benthos.jpg", alt: "Benthos in-game view: first-person perspective inside a rusted underwater interior with a diver in a teal suit ahead" }
    ],
    mediaFocus: "50% 58%",
    siteUrl: "https://doodlefishgames.pages.dev/benthos/",
    siteLabel: "Visit Site (In Construction)",
    steamUrl: "https://store.steampowered.com/app/4276370/Benthos/",
    process: [
      {
        heading: "Sync and assess",
        body: "Pulled and fast-forwarded a local branch that had fallen ~112 commits behind remote after crosshair HUD, shield system, debug console, and map work landed elsewhere. Audited recent C++ for bugs, replication gaps, and polish issues rather than guessing from commit messages alone."
      },
      {
        heading: "Audit by priority",
        body: "Reviewed gameplay code in parallel for TODOs, replication correctness, crash risks, and debug noise. Prioritized P0 crashes and correctness first, then logging and performance polish."
      },
      {
        heading: "Fix crashes and replication",
        body: "Added bounds-checked power-tier mapping, OnRep_IsDead for death state ordering, weak lambda timers for revive, and treasure destruction on deposit with a DepositedTreasureCount counter. Gated debug spam behind bLogPickupQueryDebug and stripped on-screen messages in shipping builds."
      },
      {
        heading: "Playtest-driven UX",
        body: "Tracked down why disabling pickup outline did not remove the submarine hologram look, and why the crosshair enlarged for treasure pickups but not when the E prompt appeared at terminals and ladders. Separated the two post-process pipelines and unified detection so crosshair and interaction prompts share one feedback language."
      },
      {
        heading: "Extend systems cleanly",
        body: "Added HasInteractionPromptFocus(), RegisterInteractionPromptSource / Unregister for Blueprint overlap events, an IInteractionFocusProvider interface, and an InteractionPrompt actor tag—instead of hardcoding every Blueprint class name. Verified with a full BenthosEditor compile after interface and timer fixes."
      }
    ],
    challenges: [
      "Stale branch plus a large integration surface: integration debt showed up as broken Blueprint references and mismatched systems, not just merge conflicts.",
      "High-impact C++ bugs—power consoles indexing arrays without bounds checks, shield visuals updating before power values, death replication arriving out of order on clients, revive timers capturing raw this, and deposited treasures hidden but never destroyed.",
      "Blueprint compile failures after a shield refactor: BP_AdvancedSubmarine pointed at the wrong actor/class after child-actor and component renames, not because properties were deleted from AShieldConsole.",
      "Two separate post-process pipelines controlled by one checkbox: pickup outline (M_PP_Outline on interactables) vs submarine hologram (MI_ShieldHologram / MI_SubHologram on a post-process volume)—turning off one did not remove the other.",
      "Split interaction detection: pickups used a center-screen trace and cone query while E prompts relied on overlap volumes in Blueprint, so the crosshair system never knew the player was in an interaction zone."
    ],
    lessons: [
      "Big content branches need periodic sync; integration debt accumulates quietly until playtesting or compile errors surface it.",
      "C++ refactors with child-actor setups need a deliberate Blueprint validation pass—compiler errors often mean wrong target, not missing property.",
      "A visual “one effect” can be multiple pipelines; document which Blueprint or asset owns each so toggles behave as players expect.",
      "UX consistency requires unified “am I targeting this?” logic. If pickups and interactables use different detection, presentation will drift.",
      "Multiplayer correctness details matter: OnRep ordering, weak delegates for timers, bounds checks, and destroying replicated actors instead of only hiding them."
    ]
  },
  {
    slug: "immersion-2026-featured-showcase",
    featured: 2,
    title: "Immersion 2026 Featured Showcase",
    summary:
      "Built a mobile WebAR experience showcased to 50 attendees at Hometown Heroes, featured in SJSU Spring 2026 Magazine.",
    role: "Developer",
    tools: ["8th Wall", "A-Frame", "AR.js", "Mobile WebAR"],
    year: "2026",
    impact:
      "Shipped a stable, public-facing WebAR demo with device performance checks so it ran smoothly across all the different phones attendees brought.",
    description: [
      "This project had to work in the real world, not just in testing. Attendees showed up with all kinds of devices, so I built in performance checks that scaled the experience up or down depending on what each phone could handle.",
      "On capable devices, real-time physics ran live. On lower-end phones, it fell back gracefully without breaking the experience.",
      "It was featured in the SJSU Spring 2026 Magazine as part of the Immersion 2026 showcase coverage."
    ],
    tags: ["WebAR", "Public Demo", "Performance Tuning", "8th Wall", "A-Frame", "AR.js"],
    mediaAlt: "Sharks Way AR experience: teal shark character overlaid on the SJSU campus sidewalk",
    mediaPath: "/images/placeholders/SharksWayIMG1.jpg",
    mediaSlides: [
      { path: "/images/placeholders/SharksWayIMG1.jpg", alt: "Sharks Way AR: teal shark on SJSU campus sidewalk with checkpoint UI" },
      { path: "/images/placeholders/SharksWayIMG2.jpg", alt: "Sharks Way AR: second view of the shark AR experience on campus" },
      { path: "/images/placeholders/project-immersion-2026.jpg", alt: "Sharkways onsite deliverable: mobile WebAR screenshots at Hometown Heroes" }
    ],
    mediaFocus: "68% 52%",
    githubUrl: "https://github.com/klevrlab/city-project",
    pressUrl: "https://www.sjsu.edu/magazine/archive/2026-spring/sj-26-where-digital-art-thrives.html",
    process: [
      {
        heading: "Scoping for real-world devices",
        body: "Hometown Heroes was a public booth, so the demo had to run on the phones people already carried. I scoped Sharks Way as mobile WebAR with 8th Wall, A-Frame, and AR.js, and I treated the spread of those phones as part of the design."
      },
      {
        heading: "Building the performance fallback",
        body: "The page checks the device before it turns on the heavy layer. On a phone that can take it, real-time physics runs live. On a weaker phone, that layer stays off and the AR scene still loads. One experience degrades. It does not die on half the handsets."
      },
      {
        heading: "Event day deployment",
        body: "At the booth the job was keeping that path stable while people walked up with their own devices. The same Immersion 2026 season includes a separate build in my EchoesOfExpression repo: a location-based exhibition for a walking route across the SJSU campus, the MLK Library, and San Jose City Hall. That one uses A-Frame with Niantic's distributed Spatial XR engine. Phones need HTTPS before the camera, compass, and GPS will start, and a ?preview mode walks the route on a desktop with no camera and no GPS. Statements, coordinates, and placement sit in one artworks.js file."
      }
    ],
    challenges: [
      "The hard problem was the spread of phones, not one bug. Physics that feels fine on a test device will stutter on the next phone in line. The performance check is what makes the Sharks Way scene safe to hand to a stranger.",
      "Public WebAR has a hard floor, and EchoesOfExpression spells it out: camera, compass, and GPS are blocked on plain HTTP except for localhost. A live demo has to be served over HTTPS, with a no-sensor preview for checking placement at a desk."
    ],
    lessons: [
      "A public demo is a fallback problem. If physics cannot run, the visitor should still see the shark and the checkpoint UI. The page has to make sense on the weak phone, not only on mine.",
      "With more time I would split content from the tracker the way EchoesOfExpression already does, so statements and coordinates can change without a scene rewrite. I would keep a no-sensor preview next to every phone build. That is the fastest check before a booth opens."
    ]
  },
  {
    slug: "digital-tools-cultural-preservation-workshop",
    title: "Community Education & Outreach",
    summary:
      "Led hands-on STEM and digital preservation workshops at public events, including a drone coding session at Santa Clara's STEM Zone and a photogrammetry workshop at ATALM 2025.",
    role: "Workshop Facilitator",
    tools: ["Polycam", "Photogrammetry", "DJI Tello", "Scratch", "Python"],
    year: "2025–2026",
    impact:
      "Ran hands-on technology workshops for public audiences ranging from students writing their first drone code to indigenous communities digitizing cultural artifacts.",
    description: [
      "At the City of Santa Clara's STEM Zone (April 2026), I ran a drone coding workshop at the SJSU iSchool's booth alongside Stanford, SCU, and Mission College. Participants programmed DJI Ryze Tello drones in Scratch and Python, many of them for the first time.",
      "At ATALM 2025, I co-developed curriculum and hands-on exercises to make photogrammetry accessible to audiences with limited technical backgrounds, focused on digitizing indigenous cultural artifacts.",
      "The goal in both cases was the same: make the technology easy enough to actually use, and leave people with something they can take home."
    ],
    tags: ["Education", "Drones", "Photogrammetry", "Accessibility", "Cultural Preservation", "Community"],
    process: [
      {
        heading: "Designing accessible curriculum",
        body: "For the photogrammetry workshop I kept the session on Polycam: capture, clean up a model, leave with a file. The audience was people digitizing cultural artifacts who do not already do 3D. For the Santa Clara STEM Zone drone session, the path was Scratch and Python on a DJI Ryze Tello, short enough that a first program could move the aircraft. My TelloProject repo is a separate browser workshop for the same drone: one-click takeoff and landing, direction and flip controls, and a block builder."
      },
      {
        heading: "Running the workshop",
        body: "STEM Zone was a booth: people stopped, wrote a short drone program, and watched a Tello respond. The photogrammetry workshop was hands-on capture in Polycam, aimed at audiences with limited technical background. ischool-hologram-workshop is another public iSchool page, for Spectre displays. You drop in an image or video, it builds the four-face layout the pyramid prism needs, then you preview or download it."
      },
      {
        heading: "Adapting on the fly",
        body: "The setups fail in different ways, so one plan cannot cover every table. TelloProject only reaches the drone from a computer already joined to that aircraft's Wi-Fi (the drone hosts a network named TELLO- plus an id). The hologram page is static files, so it still opens on GitHub Pages if you only have a phone. When the live drone link is the fragile part, the Polycam path does not need the aircraft at all."
      }
    ],
    challenges: [
      "The first ten minutes are the hard part for someone who has never coded or scanned. Polycam has to be a capture recipe, not a lecture on meshes. Scratch or Python has to end in a movement the person can see. If the step after hello is unclear, the tool lost them.",
      "The gear is picky. A Tello takes commands from a device on its own Wi-Fi, so a laptop still on venue Wi-Fi will not connect. That constraint is written into TelloProject. A Spectre prism needs a four-face clip, not a normal fullscreen video, which is why the hologram page reformats the file before download."
    ],
    lessons: [
      "Facilitating these rooms is mostly translation. People remember the model or the flight, not the stack. I try to end on something they can take with them: a Polycam file, or a program they watched run.",
      "I would write the participant path first and keep the instructor demo as the fallback. TelloProject already has large manual controls and blocks, and it still depends on that drone Wi-Fi. The hologram app formats a file and previews it. It is not yet a step-by-step lesson."
    ],
    mediaAlt: "SJSU iSchool drone coding workshop at STEM Zone Santa Clara 2026",
    mediaPath: "/images/placeholders/StemZoneSantaClara1.jpg",
    mediaSlides: [
      { path: "/images/placeholders/StemZoneSantaClara1.jpg", alt: "SJSU iSchool booth at STEM Zone Santa Clara 2026" },
      { path: "/images/placeholders/StemZoneSantaClara2.jpg", alt: "Drone coding workshop activity at STEM Zone Santa Clara 2026" },
      { path: "/images/placeholders/PhotogrametryWorkshop.jpg", alt: "Photogrammetry and cultural preservation workshop at ATALM 2025" }
    ]
  },
  {
    slug: "cyverse",
    featured: 3,
    title: "CyVerse",
    summary:
      "A browser-based, first-person cybersecurity training game built with Dr. Tonia San Nicolas-Rocca at SJSU. Four playable levels, a 294-question Security+ bank, and an end-of-game certificate.",
    role: "Lead Systems Engineer",
    tools: ["Unity 2022.3 LTS", "C#", "WebGL", "Unity Test Framework", "GitHub Actions"],
    year: "2026",
    impact:
      "Public WebGL training game covering Identity & Access, Cyber Defense, Digital Forensics, and Cyber Attack, verified through Play Mode end-flow tests and playtest telemetry export.",
    description: [
      "CyVerse is a desktop cybersecurity training simulation built for the CyberVerse Project at San José State University with Dr. Tonia San Nicolas-Rocca. Players use keyboard and mouse in a browser with no install and no VR headset required. As Lead Systems Engineer and primary developer, I built the walkable Hub, Mission Status board, progression system, accessibility controls, automated tests, and the gameplay across Orientation and all four story levels.",
      "The game opens in the Hub, where players set an operative callsign and move sequentially through Identity & Access (badge enrollment, MFA vault with an in-world authenticator phone, data triage, audit hunt, and exam), Cyber Defense (four-workstation SOC alert queue, evidence locker handoff, and incident response playbook), Digital Forensics (chain-of-custody intake, write-blocked imaging with SHA-256 verification, an interactive Evidence Explorer with optional OCR, hash matching, and AI triage leads, plus a five-question knowledge check), and Cyber Attack (four red-team arcade stations teaching phishing lures, MFA fatigue, privilege escalation, and network attack surfaces).",
      "Completing a normal run unlocks Hard Mode for that level in the Hub's west wing, removing the objective beacon and adding a 1.5x score multiplier. Dr. San Nicolas-Rocca provided the 294-question CompTIA Security+ study bank organized across five NICE Workforce Framework categories. Finishing all four story levels unlocks a personalized Certificate of Completion that players can save as a PNG from the browser, and Settings includes local CSV or JSON playtest log export and a Start Over reset for study sessions."
    ],
    tags: ["Cybersecurity", "Unity", "WebGL", "Education", "Accessibility", "Digital Forensics"],
    mediaAlt: "CyVerse Hub showing the Mission Status board for all four levels and Orientation",
    mediaPath: "/images/projects/cyverse-hub.webp",
    mediaSlides: [
      { path: "/images/projects/cyverse-hub.webp", alt: "CyVerse Hub showing the Mission Status board for all four levels, Orientation, and central beacon" },
      { path: "/images/projects/cyverse-level1-briefing.webp", alt: "Level 1 Identity and Access security briefing screen and six-step training checklist" },
      { path: "/images/projects/cyverse-level2-soc-floor.webp", alt: "Level 2 Cyber Defense SOC floor showing analyst pods WS-01 through WS-04" },
      { path: "/images/projects/cyverse-level2-alert-board.webp", alt: "Level 2 SOC Alert Board listing workstation events across WS-01 through WS-04 for investigation" },
      { path: "/images/projects/cyverse-level3-imaging-hash.webp", alt: "Level 3 Digital Forensics imaging station after write-blocked acquisition, with matching hash values ready for analysis" },
      { path: "/images/projects/cyverse-level3-evidence-explorer.webp", alt: "Level 3 Evidence Explorer three-pane phone triage for Case 1 Spartan Gold, with text messages open to tag as evidence" },
      { path: "/images/projects/cyverse-level3-knowledge-check.webp", alt: "Level 3 knowledge check question on chain-of-custody item numbers after the phone moves from the SOC to the lab" },
      { path: "/images/projects/cyverse-level4-spot-the-phish.webp", alt: "Level 4 Spot the Phish arcade station, a social engineering exercise asking whether a job post is a scam or legitimate" },
      { path: "/images/projects/cyverse-level4-phish-frenzy.webp", alt: "Level 4 Phish Frenzy arcade station on bypassing MFA, with a phishing inbox and the target user's phone" },
      { path: "/images/projects/cyverse-level4-access-grabber.webp", alt: "Level 4 Access Grabber arcade station on escalating privileges, with a claw machine grabbing over-permissioned access cards" },
      { path: "/images/projects/cyverse-level4-network-attack.webp", alt: "Level 4 Network Attack station showing The Company Network map of LAN devices, firewall, cloud, and databases" },
      { path: "/images/projects/cyverse-level4-certificate.webp", alt: "Level 4 Certificate of Completion from CyVerse Security Academy for finishing the training program" }
    ],
    githubUrl: "https://github.com/CrashPr0/Cyverse",
    siteUrl: "https://crashpr0.github.io/Cyverse/play/",
    siteLabel: "Play in Browser (WebGL)",
    process: [
      {
        heading: "Hub progression, Hard Mode, and session reset",
        body: "The Hub serves as a walkable menu backed by LevelProgress and HardMode. Orientation and Level 1 start open, and Levels 2 through 4 unlock in sequence, with Cyber Defense handing seized device evidence directly into Digital Forensics. Each page load starts a fresh run while keeping user settings, and Settings -> Start Over resets progress, score, and callsign between playtesters without reloading the tab."
      },
      {
        heading: "Evidence Explorer, knowledge checks, and end-of-game certificate",
        body: "Level 3 centers on a three-pane Evidence Explorer where players configure case acquisition, run optional keyword, hash-match, OCR, and fallible AI triage passes, pivot across phone artifacts, and tag proof before taking a five-question knowledge check. Level 4 pairs four simulated red-team stations with immediate defensive debriefs, and completing all four levels unlocks CertificateCard with browser PNG download marked as a training keepsake."
      },
      {
        heading: "Accessibility, custom WebGL font, and automated CI",
        body: "A release audit uncovered missing glyphs in the default WebGL font, so the project ships a bundled Cyverse Sans font alongside adjustable caption sizing, Reduce Motion, Invert Colors, optional Web Speech voiceover, and per-frame look clamping. Pull requests run Unity Play Mode tests (covering end-to-end Level 1 flow, SOC handoff, and playtest CSV/JSON export) before building and deploying WebGL to GitHub Pages."
      }
    ],
    challenges: [
      "Replacing legacy Level 3 KQL queries with the multi-pass Evidence Explorer and building four playable Level 4 red-team stations while keeping every objective deterministic and verifiable in headless Play Mode tests.",
      "Making WebGL playtest-ready for shared study browsers: fixing missing Unicode glyphs in builds, preventing pointer-lock camera snaps, and separating consecutive participant runs cleanly with playthrough counters in local CSV/JSON exports."
    ],
    lessons: [
      "Driving the live WebGL build with automated Play Mode tests and headless browser checks catches font, UI-layering, and scene-wiring regressions before playtesters ever sit down.",
      "Combining hands-on forensic pivoting and simulated attack stations with immediate defensive debriefs and a saveable completion certificate gives students both practice and a clear takeaway."
    ]
  },
  {
    slug: "nsf-sdg-discovery-hall",
    title: "UN SDG Discovery Hall",
    summary:
      "Unity project for an NSF-funded attention study with the SJSU LTI Lab, the ALA IRC UN Subcommittee, and VERA. One build is documented for Quest in the lab and a desktop or WebGL sample. I built the Unity scene for the VERA software and wrote nearly all of the code, including all interaction logic and behavior.",
    role: "Unity Developer (sole programmer)",
    tools: ["Unity 6", "C#", "Meta Quest", "WebGL", "VERA"],
    year: "Prototype",
    impact:
      "Logs gaze, fixations, station visits, and clicks for Passive, Interactive, and Guided conditions, and writes research CSV files. No participant results are reported here.",
    description: [
      "The README is a Unity project for an NSF-funded study of information-seeking and attention in immersive environments. It names the SJSU LTI Lab, the ALA IRC UN Subcommittee, and VERA (Virtual Experience Research Accelerator). A WebGL build of the desktop sample is playable in the browser, and the images on this page are in-game captures from the Discovery Hall.",
      "Quest Pro has eye tracking. Quest 3 does not, so the project falls back to head gaze. The gaze_source column records which signal a sample used. Fixations use I-VT with a 30 degrees per second threshold and a 100 ms minimum, citing Salvucci and Goldberg 2000. The three conditions are Passive, Interactive, and Guided.",
      "The menu command Build Discovery Hall Scene generates DiscoveryHall.unity with three placeholder stations: SDG 4, SDG 11, and SDG 13. The README says to rebuild that scene before an editor headset build, because the file is generated output. Unity is pinned to 6000.3.9f1. The project started on 2022.3 and moved to Unity 6 because the VERA plugin requires 6000.0 or newer.",
      "The study design note has planned sample sizes and dates. Those stay off this page. CONTENT_SOURCES.md says UN icons and photos in the Unity project should be checked against UN guidelines before redistributing them. I did not copy those files here."
    ],
    myRole: [
      "Built the Unity scene for the VERA software at Discovery Hall and wrote nearly all of the code, including all interaction logic and behavior (looking around, how interactions work).",
      "Worked from provided assets and a target look. Dr. Chow, the former director, helped design the physical space."
    ],
    tags: ["VR", "Research", "Quest", "Eye tracking", "Unity", "WebGL"],
    mediaAlt: "In-game view of the Discovery Hall hub with a UN SDG Discovery Hall welcome sign and the SDG 11 room ahead",
    mediaPath: "/images/projects/nsf-hall-welcome.webp",
    mediaSlides: [
      { path: "/images/projects/nsf-hall-welcome.webp", alt: "Discovery Hall hub with the UN SDG Discovery Hall welcome sign and the SDG 11 room ahead" },
      { path: "/images/projects/nsf-hall-waterfall-sdg4.webp", alt: "Discovery Hall hub with a waterfall beside the entrance to the SDG 4 room" },
      { path: "/images/projects/nsf-sdg4-minerva.webp", alt: "MINERVA guide character in the SDG 4 Quality Education room next to progress data panels" },
      { path: "/images/projects/nsf-sdg11-hina.webp", alt: "HINA guide character in the SDG 11 Sustainable Cities room" }
    ],
    githubUrl: "https://github.com/CrashPr0/NFS-Grant",
    siteUrl: "https://crashpr0.github.io/NFS-Grant/",
    siteLabel: "Play in Browser (WebGL)",
    process: [
      {
        heading: "One scene, two rigs",
        body: "The builder places an OVRCameraRig, with left and right eye gaze, and a DesktopPlayer in the same scene, and switches them at runtime. Desktop controls are WASD or the arrow keys, click to look, and Esc to free the cursor. WEBGL_BUILD.md describes the shareable browser build as that desktop rig, not the Quest APK. On Quest, the README uses the left stick to walk, the right stick to teleport and snap-turn, and either trigger to select what the gaze ray hits."
      },
      {
        heading: "What the session writes",
        body: "GazeProvider emits one gaze ray per frame. AttentionTarget stores dwell, look count, and time to first look for a labeled area. SdgStation records visits. StudyEventLogger writes clicks, key presses, station enter and exit, docent guidance, quiz responses, and session start and end. A web sample can POST the CSVs through RemoteDataUploader. VeraBridge is the seam to the VERA plugin. Portal credentials load from vera_credentials.json, which is gitignored."
      },
      {
        heading: "WebGL when Meta's registry fails",
        body: "WEBGL_BUILD.md says Unity can fail the whole package resolve when Meta's npm registry is unreachable, which also blocks VERA's dependencies. The documented escape hatch removes com.meta.xr.sdk.core and the scoped registry, then adds the scripting define NSFGRANT_NO_META so gaze scripts compile against stubs. Those stubs are not a headset runtime. The note says to put the Meta package back and clear the define before a Quest build."
      }
    ],
    challenges: [
      "Quest 3 has no eye tracker. Head gaze is the fallback, and the two signals have to stay separable. Dropping gaze_source would mix them.",
      "The Discovery Hall scene file is generated. An editor build that skips the menu command ships whatever scene was already on disk. SCREENSHOTS.md also says the scene files are not in the repository until that command runs.",
      "The README treats eye-tracking data as identifiable. Logs go to the app's private storage, and StudyData plus CSV exports are gitignored. This page does not include session files, and it does not claim an IRB status."
    ],
    lessons: [
      "A frame-aligned gaze sample is not the headset's native eye-tracker clock. The README says analyses that need the native timestamps should resample on timestamp_utc_ms.",
      "The browser demo and the lab headset are not the same signal. WEBGL_BUILD.md is explicit that the WebGL build is the desktop rig. I do not want a share link described as the Quest study."
    ]
  },
  {
    slug: "banned-book-week-ar",
    featured: 4,
    title: "Banned Book Week AR",
    summary:
      "A phone scanner for Banned Books Week at SJSU King Library. Point the camera at a featured cover and a floating book plus a readable summary appear.",
    role: "Creator",
    tools: ["MindAR", "A-Frame", "JavaScript", "jsQR"],
    year: "2026",
    impact:
      "Public scanner for the library event: eighteen cover targets, eight floors, one library, with camera processing kept on the phone.",
    description: [
      "The live page credits me, Chris Velez, as the creator. The banner is the 2026 Let Books Be campaign, October 4-10, 2026. Its alt text names SJSU King Library, the College of Humanities and the Arts, the Pride Center, the Campus Reading Program, and the Ethnic Studies Collaborative.",
      "The landing says 18 books, 8 floors, one library. Find a featured book in King Library, point the camera at the cover, and the app anchors a floating, spinning 3D book. An HTML summary opens at the same time so the text stays readable. Browse all featured books works with no camera. If the camera is blocked, the page offers a visual preview. The privacy line says camera processing stays on the device and is never recorded.",
      "The README's target pack is eighteen covers: seventeen from the installation sheet, plus the approved 2008 Bantam trade paperback of I, Robot. At runtime the app reads only same-origin files under public/data and public/assets. It does not contact a catalog. The README also lists a private Sites host. I am not linking that here, and I am not putting the cover image files on this portfolio."
    ],
    tags: ["AR", "Library", "Mobile", "MindAR", "A-Frame"],
    mediaAlt: "Banned Books AR landing page for the King Library scanner",
    mediaPath: "/images/projects/banned-book-week.jpg",
    githubUrl: "https://github.com/CrashPr0/Banned-Book-Week",
    siteUrl: "https://crashpr0.github.io/Banned-Book-Week/",
    siteLabel: "Open the scanner",
    process: [
      {
        heading: "Event page, then the camera",
        body: "The first screen is the week, not one title. Start the AR scanner requests the camera, which needs HTTPS or localhost. A printed sticker can open one book with ?book= plus the book id, for example candide. QR decoding runs at most four times a second and pauses while a cover is tracked, so MindAR keeps priority."
      },
      {
        heading: "Compiling the image targets",
        body: "npm run compile:target opens MindAR 1.2.5's compiler in the browser, compiles every cover in order, writes public/assets/banned-books.mind, and records each cover's SHA-256. The live page loads A-Frame 1.6.0 and that MindAR build from vendor files. jsQR is the dependency that reads the stickers. npm run check:target compares the pack with those hashes."
      },
      {
        heading: "Covers and the catalog",
        body: "npm run scrape can refresh one pinned cover from Penguin Random House's ISBN endpoint. The script allowlists that host, checks that the bytes are a JPEG, and marks the MindAR target stale if the image changes. Live SJPL fetching stays off unless the command is run with --live-sjpl --authorized, and the README says to do that only after permission is documented. Candidate covers are marked unreviewed until they are matched to the physical books."
      }
    ],
    challenges: [
      "The README says to test the physical library copy, not only a photo on another screen. Jackets, stickers, glare, and reprints can change whether the target still matches.",
      "The repository records where a cover came from. That note is not a license to reproduce the art. The cover files stay in the project repo, not on this site.",
      "A-Frame, MindAR, the cover, and the .mind file are pinned together. The README says to re-test iOS Safari and Android Chrome when any of those change. I am not claiming that re-test is done."
    ],
    lessons: [
      "The spinning book is the moment people see. The HTML panel is what makes the summary readable, and it is also the path when the camera never starts.",
      "Keeping the video on the device is a product rule, not a footer. The app never uploads the camera stream, and the browse path still works when permission is denied."
    ]
  }
];
