export const siteConfig = {
  name: "Christopher Velez",
  title: "Christopher Velez | Robotics, Embedded & Interactive Systems",
  shortTitle: "Christopher Velez Portfolio",
  description:
    "SJSU B.S. Computer Engineering student focused on robotics, human-robot interaction, embedded and digital logic foundations, and AI and XR interactive systems.",
  email: "christopher.al.velez@gmail.com",
  linkedIn: "https://www.linkedin.com/in/christopher-velez-437704264/",
  github: "https://github.com/CrashPr0",
  resumePath: "/resume/Christopher_Velez_CV.pdf",
  headshotPath: "/images/placeholders/Chris_Velez_Headshot.jpeg"
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" }
] as const;

export const proofPoints = [
  {
    label: "RAG advising chatbot",
    detail: "In production on Azure for SJSU iSchool advisors",
    href: "/projects/ischool-advising-chatbot"
  },
  {
    label: "Robot Pilot, Figure AI",
    detail: "Humanoid robot teleoperation, via Insight Global"
  },
  {
    label: "VR TA, Meta Summer Academy",
    detail: "Taught Unity and Meta Quest Pro to 26 high schoolers"
  },
  {
    label: "Public XR and AR projects",
    detail: "CyVerse and Banned Book Week AR, playable in the browser",
    href: "/projects"
  }
] as const;

export const homeSkills = ["Python", "OpenAI / Azure OpenAI", "RAG", "Flask", "Unity / C#", "C / C++"] as const;

export const education = {
  university: "San Jose State University",
  degree: "B.S. Computer Engineering",
  graduation: "Expected December 2026"
};

export const skillGroups = {
  Languages: ["Python", "C", "C++", "C#", "x86 Assembly", "HTML", "CSS", "JavaScript"],
  "Tools / Platforms": [
    "Unity",
    "Unreal Engine",
    "Tilt Five",
    "Apple Vision Pro",
    "Meta Quest",
    "HoloLens",
    "Varjo",
    "LG CloudStation",
    "SoftBank Robotics Choregraphe",
    "Vivado"
  ],
  Expertise: [
    "XR / AR / VR Systems",
    "Photogrammetry",
    "Digital Logic Design",
    "Human-Robot Interaction",
    "Unix",
    "Graphics / Immersive Experience Design"
  ],
  "Soft Skills": ["Project Management", "Communication", "Analytical Thinking", "Problem Solving"]
} as const;
