export interface Education {
  year: string
  institution: string
  institutionUrl?: string
  degree: string
  advisor?: string
  advisorUrl?: string
  focus?: string
  thesis?: string
  thesisUrl?: string
  grade?: string
}

export const educationData: Education[] = [
  {
    year: "2026 — Present",
    institution: "Eindhoven University of Technology (TU/e)",
    institutionUrl: "https://www.tue.nl/en/",
    degree: "Ph.D. Candidate in Computer Science",
    advisor: "Assistant Professor, Dr. Devendra Dhami",
    advisorUrl: "https://sites.google.com/view/devendradhami",
    focus: "Learning Causal World Models",
  },
  {
    year: "2024 — 2026",
    institution: "Eindhoven University of Technology (TU/e)",
    institutionUrl: "https://www.tue.nl/en/",
    degree: "M.Sc. in Artificial Intelligence and Engineering Systems",
    advisor: "Assistant Professor, Dr. Devendra Dhami",
    advisorUrl: "https://sites.google.com/view/devendradhami",
    thesis: "Learning Structured and Abstract Representation for Out-of-Distribution Generalization in AI",
    grade: "Final Grade: 9.54 / 10.0, cum laude",
  },
  {
    year: "2015 — 2023",
    institution: "Yonsei University",
    institutionUrl: "https://www.yonsei.ac.kr/en_sc/",
    degree: "B.Sc. in Electrical and Electronic Engineering (Minor in Physics)",
    advisor: "Prof. Dong-hyun Kim",
    advisorUrl: "https://kimchi.yonsei.ac.kr",
    thesis: "Accelerated mGRE Image Reconstruction for MWI via Deep Learning",
    grade: "Final Grade: 4.06 / 4.30 (Honors Program Merit-based Full Scholarship)",
  },
]

