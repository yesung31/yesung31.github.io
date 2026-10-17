export interface Experience {
  date: string
  title: string
  company: string
  description?: string
  advisor?: string
  manager?: string
  companyUrl?: string
}

export const experienceData: Experience[] = [
  {
    date: "Feb 2025 — Jun 2025",
    title: "Project Intern",
    company: "TNO",
    companyUrl: "https://www.tno.nl/en/",
    description: "Applied research and engineering for robust machine learning systems.",
  },
  {
    date: "Dec 2021 — Dec 2022",
    title: "Undergraduate Research Intern",
    company: "Visual AI Group @ KAIST",
    companyUrl: "https://visualai.kaist.ac.kr",
    description: "Conducted research on computer vision, deep representation learning, and multi-modal alignment.",
  },
  {
    date: "Jul 2020 — Aug 2021",
    title: "Research Intern",
    company: "Kakao Mobility",
    companyUrl: "https://www.kakaomobility.com",
    description: "Autonomous driving algorithms and mobility trajectory data analysis.",
  },
  {
    date: "Jan 2020 — Feb 2021",
    title: "Research Intern",
    company: "Stryx",
    description: "Machine learning research and development.",
  },
  {
    date: "Mar 2018 — Nov 2019",
    title: "Military Service",
    company: "Republic of Korea Army",
    description: "Completed mandatory military service.",
  },
]

