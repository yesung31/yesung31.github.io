export interface Education {
  year: string
  institution: string
  degree: string
  advisor?: string
  thesis?: string
  thesisUrl?: string
}

export const educationData: Education[] = [
  {
    year: "2024 — Present",
    institution: "Eindhoven University of Technology (TU/e)",
    degree: "M.Sc. in Artificial Intelligence & Engineering Systems",
    advisor: "Prof. Devendra Dhami",
    thesis: "Structured & Causal Representation Learning for OOD Generalization",
  },
  {
    year: "2015 — 2023",
    institution: "Yonsei University",
    degree: "B.Sc. in Electrical & Electronic Engineering (Minor in Physics)",
    thesis: "Honors Program Full Scholarship (GPA: 4.06 / 4.30)",
  },
]

