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
  {
    year: "2025",
    conference: "Preprint",
    title: "Learning Structured and Causal Representations for Out-of-Distribution Generalization",
    authors: "Yesung Hwang, Devendra Dhami",
    paperUrl: "/resume.pdf",
    codeUrl: "https://github.com/yesung31",
    tldr: "Learning invariant causal mechanisms to improve robustness and generalization under severe domain and semantic shift.",
  },
]

