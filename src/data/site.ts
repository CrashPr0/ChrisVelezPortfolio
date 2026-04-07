export const siteConfig = {
  name: "Christopher Velez",
  title: "Christopher Velez | XR, Graphics, and Interactive Systems",
  shortTitle: "Christopher Velez Portfolio",
  description:
    "Computer Engineering student building XR, AR/VR, graphics, and interactive systems across research, public engagement, and game technology.",
  email: "christopher.al.velez@gmail.com",
  linkedIn: "https://www.linkedin.com/in/christopher-velez-437704264/",
  github: "https://github.com/CrashPr0",
  resumePath: "/resume/Chris_s_Resume_General.pdf",
  headshotPath: "/images/placeholders/Chris_Velez_Headshot.jpeg"
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
  "XR, AR, and VR systems",
  "Graphics and immersive experiences",
  "Digital heritage and cultural preservation",
  "Game and interactive technology"
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
