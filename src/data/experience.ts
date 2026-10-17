export interface Experience {
  date: string
  title: string
  company: string
  location?: string
  description?: string
  points?: string[]
  advisor?: string
  advisorUrl?: string
  manager?: string
  companyUrl?: string
}

export const experienceData: Experience[] = [
  {
    date: "Feb 2025 — Jun 2025",
    title: "Team Internship (AI & ES Program)",
    company: "TNO",
    companyUrl: "https://www.tno.nl/en/",
    location: "Helmond, The Netherlands",
    // description: "Traffic Light Perception System for Automated Driving in the Netherlands",
    // points: [
    //   "Delivered full-stack solution for traffic light perception: data collection, annotation, object detection, and 3D tracking.",
    // ],
  },
  {
    date: "Dec 2021 — Dec 2022",
    title: "Undergraduate Intern",
    company: "KAIST (Visual AI Lab)",
    companyUrl: "https://visualai.kaist.ac.kr",
    location: "Daejeon, Republic of Korea",
    // advisor: "Dr. Minhyuk Sung",
    // advisorUrl: "https://mhsung.github.io",
    // points: [
    //   "Hyperbolic Embedding Space for Language-driven Shape Manipulation: Derived the projection of text to shape region in hyperbolic CLIP embedding space to reduce training time.",
    //   "Differentiable Discrete Poisson Solver: Devised fast differentiable Poisson equation solver, enabling deep learning integration.",
    // ],
  },
  {
    date: "Jul 2021 — Aug 2021",
    title: "Research Intern",
    company: "Kakao Mobility",
    companyUrl: "https://www.kakaomobility.com",
    location: "Seoul, Republic of Korea",
    // points: [
    //   "Developed real-time continuous-time SLAM using bounded surface features for large-scale indoor mapping.",
    //   "Implemented multi-LiDAR movement distortion correction using IMU and LiDAR–LiDAR calibration.",
    // ],
  },
  {
    date: "Jan 2020 — Feb 2021",
    title: "Research Intern",
    company: "Stryx (acquired by Kakao Mobility)",
    companyUrl: "https://www.kakaomobility.com",
    location: "Seoul, Republic of Korea",
    // points: [
    //   "Developed pointcloud registration algorithms for city-scale HD mapping.",
    //   "Designed GPS noise detection and reduction methods for precise localization.",
    //   "Improved SLAM feature extraction for indoor–outdoor map integration.",
    //   "Worked on LiDAR+IMU localization algorithms for tunnels.",
    // ],
  },
  // {
  //   date: "Mar 2018 — Nov 2019",
  //   title: "Coast Guard",
  //   company: "Republic of Korea Army",
  //   location: "Republic of Korea",
  //   description: "Mandatory Military Service.",
  // },
]

