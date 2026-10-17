export interface Publication {
  year: string
  conference: string
  title: string
  authors: string
  paperUrl?: string
  codeUrl?: string
  bibtex?: string
  tldr?: string
  imageUrl?: string
  award?: string
}

export const publicationData: Publication[] = [
  // {
  //   year: "2026",
  //   conference: "M.Sc. Thesis / Research",
  //   title: "Learning Structured and Abstract Representation for Out-of-Distribution Generalization in AI",
  //   authors: "Yesung Hwang, Devendra Dhami",
  //   paperUrl: "https://github.com/yesung31/resume/releases/latest/download/resume.pdf",
  //   codeUrl: "https://github.com/yesung31",
  //   tldr: "Learning invariant causal mechanisms and abstract representations to improve robustness and generalization under severe domain and distribution shifts.",
  // },
  {
    year: "2020",
    conference: "Patent KR102624644B1",
    title: "Method of estimating the location of a moving object using vector map",
    authors: "Work done at Kakao Mobility",
    paperUrl: "https://patents.google.com/patent/KR102624644B1/en",
    // tldr: "Continuous localization and pose estimation algorithm using high-definition vector map features.",
  },
]

