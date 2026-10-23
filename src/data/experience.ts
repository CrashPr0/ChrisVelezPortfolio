export type Experience = {
  company: string;
  title: string;
  location: string;
  dates: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    company: "Figure AI (contract via Insight Global)",
    title: "Robot Pilot",
    location: "San Jose, CA",
    dates: "August 2026 - Present",
    highlights: [
      "I teleoperate humanoid robots on swing shift, keeping remote sessions stable and collecting data for humanoid robots.",
      "I run deployment testing on a new robot build as part of a pilot team selected by the head deployment engineer.",
      "I work with a proprietary robotics stack under strict IP controls on what can be seen, logged, or shared.",
      "I document each shift in handoff notes so the next crew can pick up without redoing setup."
    ]
  },
  {
    company: "Meta Summer Academy / Mission Bit",
    title: "Virtual Reality Teaching Assistant",
    location: "Menlo Park, CA",
    dates: "June 2026 - August 2026",
    highlights: [
      "I taught Unity and Meta Quest Pro to 26 high school students at Meta HQ through twice-weekly lectures and live coding.",
      "I coached students one-on-one on their projects and debugged hardware in class, keeping sessions focused on building."
    ]
  },
  {
    company: "San Jose State School of Information",
    title: "Library Technology Integration Assistant",
    location: "San Jose, CA",
    dates: "June 2025 - July 2026",
    highlights: [
      "I scripted SoftBank Pepper and LG CLOi robot behaviors in Choregraphe and ran them live at library and academic events.",
      "I created XR, AI, and hologram installations, including Seeking Immortality, on Meta Quest and HoloLens.",
      "I facilitated an XR and photogrammetry technology literacy workshop at ATALM 2025 for the Cherokee community in North Carolina.",
      "I was selected by the School of Information director to program the school's robots for the California Library Association.",
      "I collaborated with faculty, librarians, and the Northern Cheyenne Tribe on Seeking Immortality.",
      "I prepared 3D-scanned and photogrammetry assets for live public demos.",
      "I troubleshot hardware and software live at events and documented setups so each run was repeatable."
    ]
  },
  {
    company: "Martin Luther King Library",
    title: "Virtual Reality Software Engineer & Coordinator",
    location: "San Jose, CA",
    dates: "September 2023 - June 2025",
    highlights: [
      "Developed 10 AR/VR/WebXR projects in Unity and Meta Quest for classes, public demos, faculty research, and campus events.",
      "Managed 30+ VR headsets and 3D scanning and motion-capture systems.",
      "Trained 20 students per semester on EinScan S/H workflows and XR lab best practices.",
      "Led technology evaluation and budget planning for a $20K XR lab expansion.",
      "Recommended Quest 3, Sony, and Rokoko motion capture systems based on instructional and research needs."
    ]
  }
];
