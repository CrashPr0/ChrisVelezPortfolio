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
    mediaAlt:
      "Benthos in-game view: first-person perspective inside a rusted underwater interior with a diver in a teal suit ahead",
    mediaPath: "/images/placeholders/benthos.png"
  },
  {
    slug: "immersion-2026-featured-showcase",
    title: "Immersion 2026 Featured Showcase",
    summary:
      "Built a mobile WebAR experience showcased to 50 attendees at Hometown Heroes.",
    role: "Developer",
    tools: ["A-Frame", "AR.js", "Mobile WebAR"],
    year: "2026",
    impact:
      "Delivered a stable, public-facing immersive demo with adaptive performance logic for heterogeneous mobile devices.",
    description: [
      "This project was engineered for real-world reliability in a live event setting, where device variation is expected rather than exceptional.",
      "I implemented dynamic device performance checks and conditionally enabled real-time physics simulation only on capable devices to maintain a smooth experience.",
      "The final deployment balanced visual ambition and practical stability, ensuring consistent interaction quality for attendees."
    ],
    tags: ["WebAR", "Public Demo", "Performance Tuning", "A-Frame", "AR.js"],
    mediaAlt: "Immersion 2026 mobile WebAR placeholder",
    mediaPath: "/images/placeholders/project-immersion-2026.svg"
  },
  {
    slug: "digital-tools-cultural-preservation-workshop",
    title: "Digital Tools for Cultural Preservation Workshop",
    summary:
      "Co-developed and facilitated a cultural preservation workshop at ATALM 2025 focused on accessible artifact digitization workflows for low digital-literacy audiences.",
    role: "Co-developer / Facilitator",
    tools: ["Polycam", "Photogrammetry"],
    year: "2025",
    impact:
      "Enabled participants to capture and digitize cultural artifacts through approachable workflows that support preservation, education, and long-term access.",
    description: [
      "I co-developed curriculum and live exercises for a workshop designed to make photogrammetry approachable, even for audiences with limited technical background.",
      "The work emphasized accessibility, language clarity, and practical outputs that participants could continue using after the session.",
      "This project reflects both technical execution and community impact by connecting digital tooling with cultural stewardship goals."
    ],
    tags: ["Photogrammetry", "Education", "Accessibility", "Cultural Preservation"],
    mediaAlt: "Photogrammetry and cultural preservation workshop at ATALM 2025",
    mediaPath: "/images/placeholders/PhotogrametryWorkshop.jfif"
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
    slug: "tilt-five-racing-game",
    title: "Tilt Five Racing Game",
    summary:
      "Developed a 3D racing game for Tilt Five AR glasses with real-time object tracking and physics systems.",
    role: "Developer",
    tools: ["Tilt Five SDK", "AR", "Physics Systems"],
    year: "2023",
    impact:
      "Built an interaction-rich AR gameplay prototype with responsive tracking and tuned physics behavior for tabletop mixed reality.",
    description: [
      "This project focused on blending arcade-style racing mechanics with the unique affordances of Tilt Five's spatial hardware.",
      "I implemented tracking-aware gameplay behavior and a physics pipeline that felt consistent under real-time tabletop constraints.",
      "The result was a playable AR experience that demonstrated system integration across rendering, interactions, and simulation."
    ],
    tags: ["Tilt Five", "AR Gameplay", "Physics", "Real-time Tracking"],
    mediaAlt: "Tilt Five racing game placeholder",
    mediaPath: "/images/placeholders/project-tilt-five.svg"
  }
];
