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
};

export const projects: Project[] = [
  {
    slug: "benthos",
    title: "Benthos",
    summary:
      "A co-op submarine underwater exploration game where players work together to uncover the secrets of Europa's ocean.",
    role: "Graphics Lead",
    tools: ["Unreal Engine"],
    year: "In development",
    impact:
      "Defined visual quality standards and environment look/feel to strengthen atmosphere, readability, and immersion for cooperative gameplay.",
    description: [
      "On Benthos, I serve as Graphics Lead, focusing on visual direction, mood, and a cohesive underwater identity that supports exploration and teamwork.",
      "My work includes shaping lighting language, material consistency, and environmental storytelling so players can navigate unknown spaces while still feeling a sense of spatial trust.",
      "Our team intentionally treats mistakes as learning opportunities. That mindset helps us improve rapidly while keeping scope aligned with the intended player experience."
    ],
    tags: ["Co-op", "Underwater", "Atmosphere", "Graphics Direction", "Unreal"],
    mediaAlt: "Benthos header artwork",
    mediaPath: "/images/placeholders/benthos-header.png",
    mediaSlides: [
      { path: "/images/placeholders/benthos-header.png", alt: "Benthos header artwork" },
      { path: "/images/placeholders/benthos.png", alt: "Benthos in-game view: first-person perspective inside a rusted underwater interior with a diver in a teal suit ahead" }
    ],
    mediaFocus: "50% 58%",
    siteUrl: "https://doodlefishgames.pages.dev/benthos/",
    siteLabel: "Visit Site (In Construction)"
  },
  {
    slug: "immersion-2026-featured-showcase",
    title: "Immersion 2026 Featured Showcase",
    summary:
      "Built a mobile WebAR experience showcased to 50 attendees at Hometown Heroes — featured in SJSU Spring 2026 Magazine.",
    role: "Developer",
    tools: ["8th Wall", "A-Frame", "AR.js", "Mobile WebAR"],
    year: "2026",
    impact:
      "Delivered a stable, public-facing immersive demo with adaptive performance logic for heterogeneous mobile devices.",
    description: [
      "This project was engineered for real-world reliability in a live event setting, where device variation is expected rather than exceptional.",
      "I implemented dynamic device performance checks and conditionally enabled real-time physics simulation only on capable devices to maintain a smooth experience.",
      "The final deployment balanced visual ambition and practical stability, ensuring consistent interaction quality for attendees.",
      "The project was recognized in the SJSU Spring 2026 Magazine as part of the Immersion 2026 showcase coverage."
    ],
    tags: ["WebAR", "Public Demo", "Performance Tuning", "8th Wall", "A-Frame", "AR.js"],
    mediaAlt:
      "Sharkways onsite deliverable: two mobile WebAR screenshots of a shark character on a sidewalk, including a selfie view and an event prompt screen",
    mediaPath: "/images/placeholders/project-immersion-2026.png",
    mediaFocus: "68% 52%",
    githubUrl: "https://github.com/klevrlab/city-project",
    pressUrl: "https://sjsu.foleon.com/sjsu-magazine/spring-2026-sjsu-magazine/"
  },
  {
    slug: "digital-tools-cultural-preservation-workshop",
    title: "Community Education & Outreach",
    summary:
      "Led hands-on STEM and digital preservation workshops at public events — including a drone coding session at the City of Santa Clara's STEM Zone and a photogrammetry workshop at ATALM 2025.",
    role: "Workshop Facilitator",
    tools: ["Polycam", "Photogrammetry", "DJI Tello", "Scratch", "Python"],
    year: "2025–2026",
    impact:
      "Brought accessible, hands-on technology education to diverse public audiences — from indigenous cultural stewards digitizing artifacts to students writing their first lines of drone code.",
    description: [
      "At the City of Santa Clara's STEM Zone (April 2026), I facilitated a drone coding workshop as part of the SJSU iSchool's booth alongside Stanford, SCU, and Mission College. Participants learned to program DJI Ryze Tello drones using Scratch and Python, turning flight paths into a first coding experience.",
      "At ATALM 2025, I co-developed curriculum and live exercises making photogrammetry approachable for audiences with limited technical background, with a focus on cultural artifact digitization for indigenous communities.",
      "Both workshops shared a core design principle: technical tools should lower barriers, not raise them. Outputs were practical, portable, and participant-owned."
    ],
    tags: ["Education", "Drones", "Photogrammetry", "Accessibility", "Cultural Preservation", "Community"],
    mediaAlt: "SJSU iSchool drone coding workshop at STEM Zone Santa Clara 2026",
    mediaPath: "/images/placeholders/StemZoneSantaClara1.jpg",
    mediaSlides: [
      { path: "/images/placeholders/StemZoneSantaClara1.jpg", alt: "SJSU iSchool booth at STEM Zone Santa Clara 2026" },
      { path: "/images/placeholders/StemZoneSantaClara2.jpg", alt: "Drone coding workshop activity at STEM Zone Santa Clara 2026" },
      { path: "/images/placeholders/PhotogrametryWorkshop.jfif", alt: "Photogrammetry and cultural preservation workshop at ATALM 2025" }
    ]
  },
  {
    slug: "ar-google-maps-demo",
    title: "AR Google Maps Demo",
    summary:
      "Led design and Unity development of an AR navigation demo featuring 8 points of interest, deployed live with 40+ participants.",
    role: "Lead Designer / Unity Developer",
    tools: ["Unity", "Google Earth", "Cesium", "Image Anchors"],
    year: "2024",
    impact:
      "Proved live AR wayfinding feasibility by combining mapped POIs, image-anchored alignment, and event-ready deployment workflows.",
    description: [
      "I led both product direction and technical implementation, ensuring the demo communicated location context clearly while remaining intuitive during live use.",
      "The system integrated image anchors with Google Earth and Cesium data, mapping eight points of interest into a coherent mixed-reality navigation flow.",
      "Deployment focused on practical demonstration value: onboarding participants quickly, maintaining alignment reliability, and validating the concept with real users."
    ],
    tags: ["AR Navigation", "Unity", "Cesium", "Live Deployment", "Mapping"],
    mediaAlt: "AR Google Maps demo placeholder",
    mediaPath: "/images/placeholders/project-ar-maps.svg"
  },
  {
    slug: "ischool-advising-chatbot",
    title: "iSchool Advising Support Chatbot",
    summary:
      "Designed and built an AI-powered advising chatbot for SJSU's School of Information to answer program-specific questions with cited, accurate responses.",
    role: "Developer",
    tools: ["React", "Python", "LLM APIs", "RAG"],
    year: "2026",
    impact:
      "Reduced repetitive advising load for iSchool staff by providing students instant, source-backed answers to common program and course questions.",
    description: [
      "Advisors and professors at SJSU average 40–60 hours of work per week, with a significant portion spent answering repeated student questions — a problem this chatbot was built to address.",
      "The system grounds responses in a vetted knowledge base drawn from official iSchool sources (program handbooks, FAQs, websites), returning cited answers and routing edge cases to human advisors.",
      "Built with a React frontend and Python backend, the pipeline evaluates multiple LLMs to optimize accuracy, while an admin analytics dashboard surfaces documentation gaps and common confusion points.",
      "This is an ongoing senior design project developed with teammates Marios Tawdros and Joshua Rieta, advised by Karen D. Wang."
    ],
    tags: ["AI", "Chatbot", "RAG", "React", "Python", "Higher Education"],
    mediaAlt: "iSchool Advising Support Chatbot interface screenshot",
    mediaPath: "/images/placeholders/project-ischool-chatbot.png",
    githubUrl: "https://github.com/SJSU-CMPE-195/group-project-team-22"
  }
];
