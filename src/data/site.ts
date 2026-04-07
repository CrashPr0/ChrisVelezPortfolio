export const siteConfig = {
  name: "Christopher Velez",
  title: "Christopher Velez | XR, Graphics, and Interactive Systems",
  shortTitle: "Christopher Velez Portfolio",
  description:
    "Computer Engineering student building XR, AR/VR, graphics, and interactive systems across research, public engagement, and game technology.",
  email: "[your.email@example.com]",
  linkedIn: "[LinkedIn URL]",
  github: "[GitHub URL]",
  resumePath: "[Resume PDF path]",
  headshotPath: "/images/placeholders/headshot-placeholder.svg"
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" }
] as const;

export const currentFocus = [
  "XR / AR / VR systems",
  "graphics and immersive experiences",
  "digital heritage / cultural preservation",
  "game and interactive technology"
] as const;

export const education = {
  university: "San Jose State University",
  degree: "B.S. Computer Engineering",
  graduation: "Expected Graduation: Fall 2026"
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
