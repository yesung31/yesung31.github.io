export interface News {
  date: string
  title: string
  description: string
  link?: string
}

export const newsData: News[] = [
  {
    date: "Oct 2026",
    title: "Started Ph.D. @ TU/e",
    description: "Started my Ph.D. in Computer Science at Eindhoven University of Technology, advised by Dr. Devendra Dhami.",
    link: "https://www.tue.nl/en/",
  },
  {
    date: "Aug 2026",
    title: "Completed M.Sc. with Cum Laude",
    description: "Graduated with M.Sc. in Artificial Intelligence & Engineering Systems from TU/e with a final grade of 9.54/10.0 (cum laude).",
    link: "https://www.tue.nl/en/",
  },
  {
    date: "Feb 2025",
    title: "Team Internship @ TNO",
    description: "Completed research project internship at TNO developing a traffic light perception system for automated driving in the Netherlands.",
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
    description: "Graduated with Honors in Electrical & Electronic Engineering with a minor in Physics (Merit Full Scholarship, GPA 4.06/4.30).",
    link: "https://www.yonsei.ac.kr/en_sc/",
  },
  {
    date: "Dec 2021",
    title: "Research Intern @ KAIST Visual AI Lab",
    description: "Joined Dr. Minhyuk Sung's Visual AI Lab focusing on 3D deep learning and neural representations.",
    link: "https://visualai.kaist.ac.kr",
  },
]

