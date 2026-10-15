export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
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
    slug: "benthos",
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
    slug: "ischool-advising-chatbot",
    title: "iSchool Advising Support Chatbot",
    summary:
      "Designed and built an AI-powered advising chatbot for SJSU's School of Information to answer program-specific questions with cited, accurate responses.",
    role: "Developer",
    tools: ["Flask", "Python", "Azure App Service", "Azure OpenAI", "RAG"],
    year: "2026",
    impact:
      "Gives students faster answers to common advising questions while freeing up iSchool staff to focus on cases that actually need a person.",
    description: [
      "SJSU advisors and professors already work 40 to 60 hours a week. A big chunk of that goes to answering the same questions over and over. This chatbot handles those.",
      "Answers come from official SJSU catalog pages for BS ISDA students. Retrieval is hybrid BM25 plus vector search, so a reply can cite the page it used. Anything outside that material should go to a real advisor.",
      "The app is Flask and Python on Azure App Service. Azure OpenAI runs gpt-4o-mini as the primary model, with a backup model when that call fails. Students get chat history in tabs, and answers render as markdown.",
      "This is my CMPE-195 senior project, team 22, with teammates Marios Tawdros and Joshua Rieta, advised by Dr. Karen Wang."
    ],
    tags: ["AI", "Chatbot", "RAG", "Flask", "Azure", "Higher Education"],
    process: [
      {
        heading: "Identifying the problem",
        body: "This is my CMPE-195 senior project with team 22, advised by Dr. Karen Wang. iSchool advisors already lose hours to the same questions from BS ISDA students. We scoped the bot to those questions, using official SJSU catalog pages, and to hand anything else to a person."
      },
      {
        heading: "Building the RAG pipeline",
        body: "The service is Flask and Python on Azure App Service. Azure OpenAI serves gpt-4o-mini first and a backup model if that request fails. Search is hybrid BM25 plus vectors built with Azure OpenAI embeddings of the catalog pages. The UI keeps chat history in tabs and renders markdown."
      },
      {
        heading: "Testing and iteration",
        body: "We store reviews of answers so we can score them instead of guessing from a demo. CI runs pytest and pip-audit. That is how a bad retrieval or a dependency issue gets caught before it sits on main."
      }
    ],
    challenges: [
      "Azure rate limits and latency showed up as soon as we used the bot like a student would. I capped answer tokens, fell back to keyword search when vector search was throttled, and turned on Always On so the app was not cold-starting every visit. Stale index detection flags when the crawl is behind the pages people are asking about.",
      "The model will invent a link if you let it. After each answer, an allowlist strips any URL that was not in the retrieved pages and logs it, which is also how we spot gaps in the knowledge base. A crisis and distress safety layer is in the app and still waiting on advisor review before we treat it as done. I rotated a key that had leaked and added a budget alert so a loop cannot quietly spend the Azure account."
    ],
    lessons: [
      "Swapping the model was the small part. Grounding, and a reviews database we could actually score, changed the answers more than another pass on the prompt.",
      "Cost and ops are part of the product: token caps, a backup model, Always On, and a budget alert. We shipped that work as small reviewed pull requests so the three of us could see what changed."
    ],
    mediaAlt: "iSchool Advising Support Chatbot interface screenshot",
    mediaPath: "/images/placeholders/project-ischool-chatbot.png"
  },
  {
    slug: "cyverse",
    title: "CyVerse",
    summary:
      "A browser-based, first-person cybersecurity training game. Walk a virtual security operations floor and practice the work, with no install.",
    role: "Lead Systems Engineer",
    tools: ["Unity 2022.3 LTS", "C#", "WebGL"],
    year: "Beta",
    impact:
      "Public WebGL beta for identity, defense, and forensics practice in a desktop browser, with captions and a reduce-motion option.",
    description: [
      "CyVerse is a desktop cybersecurity training game you play in the browser. Keyboard and mouse, no VR, and no install. I built the gameplay across every level, plus the walkable hub, the level doors, and the Mission Status board. Those levels cover orientation, identity and access, cyber defense, and digital forensics. Level 1 is the identity and access example: a briefing, badge enrollment, an MFA vault, data triage, an audit hunt, and a certification exam, with glossary entries that unlock once a station is reviewed.",
      "It was a team project at San José State University, where I led systems engineering and wrote most of the gameplay code. The Security+ Prep Terminal uses practice question sets provided by Dr. San Nicolas-Rocca."
    ],
    tags: ["Cybersecurity", "Unity", "WebGL", "Education", "Accessibility"],
    mediaAlt: "CyVerse hub with the Mission Status board",
    mediaPath: "/images/projects/cyverse-hub.jpg",
    mediaSlides: [
      { path: "/images/projects/cyverse-hub.jpg", alt: "CyVerse hub with the Mission Status board" },
      { path: "/images/projects/cyverse-level1-portal.jpg", alt: "Level 1 I/AM portal door" },
      { path: "/images/projects/cyverse-level1-briefing.jpg", alt: "Level 1 security briefing room with the training checklist" },
      { path: "/images/projects/cyverse-glossary.jpg", alt: "In-game glossary panel" }
    ],
    githubUrl: "https://github.com/CrashPr0/Cyverse",
    siteUrl: "https://crashpr0.github.io/Cyverse/",
    siteLabel: "Play the beta",
    process: [
      {
        heading: "Hub and level flow",
        body: "The hub is the menu you walk around in. Hub doors take their open or locked state from LevelProgress. Orientation and Level 1 start open. A later story level opens when the one before it is complete, and digital forensics also waits until three SOC key items are stored. The Mission Status board refreshes from that same record: operative callsign, clearance out of 4, and each row ready, locked, or in development. A return door inside a level stays shut until that level's manager opens it."
      },
      {
        heading: "Accessibility in the build",
        body: "The live page and the Esc menu both cover captions with adjustable text size, Reduce Motion, look sensitivity, field of view, and status shown by shape and label rather than color alone. Volume splits into master, voice, and effects. In a WebGL build, a line without a recorded clip can be read with the browser Web Speech API. Captions stay on, recorded clips take priority, and TTS is skipped in the editor."
      },
      {
        heading: "Procedural rooms and visual passes",
        body: "Some levels exist twice: a procedural scene built at play time, and a hand-authored visual pass. SceneCatalog loads the visual pass when that scene is in the build, and falls back to the procedural room if it is missing. Art can live as prefabs under Assets/Resources/Props. If a prefab is absent, the builder uses a primitive, so a missing prop does not break the build."
      }
    ],
    challenges: [
      "Level 1 finds its stations in the scene, so a procedural room and a hand-built room share one flow: briefing, four tasks, then the exam. Scenes from before that task rework fall back to the older review path, and both paths still have to finish the level.",
      "The public page and the repo do not number every level the same way, and Level 4 is still in development."
    ],
    lessons: [
      "Reduce Motion in this project freezes shader animation, hologram spin, HUD pulses, and screen fades. Captions stay on when speech is skipped. That is the bar I want on a first-person browser game, not a caption file added at the end.",
      "I keep the hub doors and the Mission Status board on one progress record. Marking a level complete has to open the next door and update clearance together, including the extra keys digital forensics waits on."
    ]
  },
  {
    slug: "nsf-sdg-discovery-hall",
    title: "UN SDG Discovery Hall",
    summary:
      "Unity project for an NSF-funded attention study with the SJSU LTI Lab, the ALA IRC UN Subcommittee, and VERA. One build is documented for Quest in the lab and a desktop or WebGL sample.",
    role: "Role to confirm",
    tools: ["Unity 6", "C#", "Meta Quest", "WebGL", "VERA"],
    year: "Prototype",
    impact:
      "Logs gaze, fixations, station visits, and clicks for Passive, Interactive, and Guided conditions, and writes research CSV files. No participant results are reported here.",
    description: [
      "The README is a Unity project for an NSF-funded study of information-seeking and attention in immersive environments. It names the SJSU LTI Lab, the ALA IRC UN Subcommittee, and VERA (Virtual Experience Research Accelerator). I did not find a public play link. The image on this page is a screenshot of that README. SCREENSHOTS.md says scene renders are not checked in, and that producing them needs a local Unity editor with a GPU.",
      "Quest Pro has eye tracking. Quest 3 does not, so the project falls back to head gaze. The gaze_source column records which signal a sample used. Fixations use I-VT with a 30 degrees per second threshold and a 100 ms minimum, citing Salvucci and Goldberg 2000. The three conditions are Passive, Interactive, and Guided.",
      "The menu command Build Discovery Hall Scene generates DiscoveryHall.unity with three placeholder stations: SDG 4, SDG 11, and SDG 13. The README says to rebuild that scene before an editor headset build, because the file is generated output. Unity is pinned to 6000.3.9f1. The project started on 2022.3 and moved to Unity 6 because the VERA plugin requires 6000.0 or newer.",
      "docs/STUDY_DESIGN.md includes my name, Chris Velez, in the team list, in the same sentence as the words undergraduate assistant. I am not printing a job title from that line. The same note has planned sample sizes and dates. Those stay off this page. CONTENT_SOURCES.md says UN icons and photos in the Unity project should be checked against UN guidelines before redistributing them. I did not copy those files here."
    ],
    tags: ["VR", "Research", "Quest", "Eye tracking", "Unity", "WebGL"],
    mediaAlt: "GitHub README for the NSF UN SDG Discovery Hall Unity project",
    mediaPath: "/images/projects/nsf-discovery-hall-readme.jpg",
    githubUrl: "https://github.com/CrashPr0/NFS-Grant",
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
