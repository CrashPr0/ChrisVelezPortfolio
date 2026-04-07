export type Experience = {
  company: string;
  title: string;
  location: string;
  dates: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    company: "San Jose State School of Information",
    title: "Library Technology Integration Assistant",
    location: "San Jose, CA",
    dates: "June 2025 - Present",
    highlights: [
      "Deliver 4-hour digital literacy workshops on digitizing Native American cultural artifacts through Polycam photogrammetry.",
      "Facilitated 3 sessions at ATALM 2025 with 50 participants total, plus additional sessions at State of the Valley, San Jose African American Community Center, and Santa Clara STEMZone with 70-80 attendees per event.",
      "Collaborate with faculty, librarians, and the Northern Cheyenne Tribe on Seeking Immortality.",
      "Capture scans, refine 3D models, and develop XR-ready assets that preserve language and cultural artifacts.",
      "Program and maintain SoftBank Pepper and LG CLOi GuideBot robots on a weekly cadence.",
      "Update event behaviors, deploy XR and robotics demos for large-scale conferences, and author operational documentation."
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
