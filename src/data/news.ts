export interface News {
  date: string
  title: string
  description: string
  link?: string
}

export const newsData: News[] = [
  {
    date: "Feb 2025",
    title: "Project Internship @ TNO",
    description: "Started a research project internship at TNO focusing on robust machine learning systems.",
    link: "https://www.tno.nl/en/",
  },
  {
    date: "Sep 2024",
    title: "Started MSc @ TU/e",
    description: "Began Master's program in Artificial Intelligence & Engineering Systems at Eindhoven University of Technology.",
    link: "https://www.tue.nl/en/",
  },
  {
    date: "Aug 2023",
    title: "Graduated from Yonsei University",
    description: "Graduated with Honors in Electrical & Electronic Engineering with a minor in Physics (Full Merit Scholarship, GPA 4.06/4.30).",
    link: "https://www.yonsei.ac.kr/en_sc/",
  },
  {
    date: "Dec 2021",
    title: "Research Intern @ KAIST Visual AI Group",
    description: "Joined Prof. Seungryong Kim's Visual AI lab focusing on computer vision and visual representation learning.",
    link: "https://visualai.kaist.ac.kr",
  },
]

