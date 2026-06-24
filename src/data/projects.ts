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
    tools: ["Unreal Engine"],
    year: "In development",
    impact:
      "Defined visual quality standards and environment look/feel to strengthen atmosphere, readability, and immersion for cooperative gameplay.",
    description: [
      "On Benthos, I am the Graphics Lead. My focus is on the look and feel of the game: lighting, materials, color, and how the environment reads to a player who has never seen it before.",
      "A lot of the work is about building spatial trust. Players need to feel comfortable navigating an alien underwater world without a map in their hand, so the visuals have to do a lot of the communicating.",
      "We treat the project as a learning experience as much as a product, which means we ship, get feedback, and adjust. That loop has pushed the quality forward faster than trying to get it perfect before anyone sees it."
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
    siteLabel: "Visit Site (In Construction)",
    steamUrl: "https://store.steampowered.com/app/4276370/Benthos/",
    process: [
      { heading: "Establishing the visual language", body: "TODO: describe how you defined the lighting, materials, and color palette for Benthos." },
      { heading: "Iterating in-engine", body: "TODO: describe your workflow for testing and refining visuals inside Unreal Engine." },
      { heading: "Shipping and adjusting", body: "TODO: describe the feedback loop between builds and how it shaped the final look." }
    ],
    challenges: [
      "TODO: describe a technical or creative challenge you faced as Graphics Lead.",
      "TODO: describe a challenge specific to underwater environments or cooperative gameplay readability."
    ],
    lessons: [
      "TODO: what did you take away from leading graphics on a shipped (or shipping) game?",
      "TODO: what would you do differently next time?"
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
      { path: "/images/placeholders/project-immersion-2026.png", alt: "Sharkways onsite deliverable: mobile WebAR screenshots at Hometown Heroes" }
    ],
    mediaFocus: "68% 52%",
    githubUrl: "https://github.com/klevrlab/city-project",
    pressUrl: "https://sjsu.foleon.com/sjsu-magazine/spring-2026-sjsu-magazine/",
    process: [
      { heading: "Scoping for real-world devices", body: "TODO: describe how you researched device constraints before building the AR experience." },
      { heading: "Building the performance fallback", body: "TODO: describe how you implemented the adaptive physics/fallback system." },
      { heading: "Event day deployment", body: "TODO: describe what it was like running the demo live at Hometown Heroes." }
    ],
    challenges: [
      "TODO: describe the hardest technical problem you hit building for mobile WebAR.",
      "TODO: describe any last-minute issues at the event and how you handled them."
    ],
    lessons: [
      "TODO: what did shipping a public-facing demo teach you about resilience and UX?",
      "TODO: what would you build differently with more time?"
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
      { heading: "Designing accessible curriculum", body: "TODO: describe how you structured the drone coding or photogrammetry curriculum for non-technical audiences." },
      { heading: "Running the workshop", body: "TODO: describe what the event day looked like and how you facilitated hands-on activity." },
      { heading: "Adapting on the fly", body: "TODO: describe any moments where you had to adjust based on audience needs or technical issues." }
    ],
    challenges: [
      "TODO: describe the challenge of making technical content accessible to people with no prior coding or 3D experience.",
      "TODO: describe any logistical or equipment challenges at the events."
    ],
    lessons: [
      "TODO: what did facilitating public workshops teach you about communication and education?",
      "TODO: what would you improve about the curriculum or delivery?"
    ],
    mediaAlt: "SJSU iSchool drone coding workshop at STEM Zone Santa Clara 2026",
    mediaPath: "/images/placeholders/StemZoneSantaClara1.jpg",
    mediaSlides: [
      { path: "/images/placeholders/StemZoneSantaClara1.jpg", alt: "SJSU iSchool booth at STEM Zone Santa Clara 2026" },
      { path: "/images/placeholders/StemZoneSantaClara2.jpg", alt: "Drone coding workshop activity at STEM Zone Santa Clara 2026" },
      { path: "/images/placeholders/PhotogrametryWorkshop.jfif", alt: "Photogrammetry and cultural preservation workshop at ATALM 2025" }
    ]
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
      "Gives students faster answers to common advising questions while freeing up iSchool staff to focus on cases that actually need a person.",
    description: [
      "SJSU advisors and professors already work 40 to 60 hours a week. A big chunk of that goes to answering the same questions over and over. This chatbot handles those.",
      "Responses are grounded in official iSchool sources like the program handbook and FAQs, so students get cited answers instead of guesses. Anything outside that scope gets routed to a real advisor.",
      "Built with React on the front end and Python on the back end. We tested several LLMs to find the best fit, and added an admin dashboard so staff can see what questions keep coming up.",
      "This is an ongoing senior design project with teammates Marios Tawdros and Joshua Rieta, advised by Karen D. Wang."
    ],
    tags: ["AI", "Chatbot", "RAG", "React", "Python", "Higher Education"],
    process: [
      { heading: "Identifying the problem", body: "TODO: describe how you scoped the chatbot's purpose and spoke to advisors about pain points." },
      { heading: "Building the RAG pipeline", body: "TODO: describe the retrieval-augmented generation setup and how you grounded responses in iSchool sources." },
      { heading: "Testing and iteration", body: "TODO: describe how you evaluated response quality and iterated with your team." }
    ],
    challenges: [
      "TODO: describe the challenge of keeping LLM responses accurate and on-topic for a specific institution.",
      "TODO: describe any challenges working across a team on a senior design timeline."
    ],
    lessons: [
      "TODO: what did you learn about building production-ready AI applications?",
      "TODO: what would you add or change given more time?"
    ],
    mediaAlt: "iSchool Advising Support Chatbot interface screenshot",
    mediaPath: "/images/placeholders/project-ischool-chatbot.png",
    githubUrl: "https://github.com/SJSU-CMPE-195/group-project-team-22"
  }
];
