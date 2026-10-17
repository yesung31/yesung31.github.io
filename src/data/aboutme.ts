export interface AboutMe {
  name: string
  title: string
  institution: string
  description: string
  email: string
  imageUrl?: string
  blogUrl?: string
  cvUrl?: string
  googleScholarUrl?: string
  twitterUsername?: string
  githubUsername?: string
  linkedinUsername?: string
  funDescription?: string
  secretDescription?: string
  altName?: string
  institutionUrl?: string
}

export const aboutMe: AboutMe = {
  name: "Yesung Hwang",
  title: "MSc Candidate in AI & Engineering Systems",
  institution: "Eindhoven University of Technology (TU/e)",
  institutionUrl: "https://www.tue.nl/en/",
  description:
    "I am a Master's Student in <a href='https://www.tue.nl/en/' target='_blank' rel='noopener noreferrer'>Artificial Intelligence & Engineering Systems</a> at Eindhoven University of Technology (TU/e), conducting my master's thesis under the supervision of <a href='https://sites.google.com/view/devendradhami' target='_blank' rel='noopener noreferrer'>Prof. Devendra Dhami</a>. I completed my Bachelor of Science in Electrical & Electronic Engineering with a minor in Physics at Yonsei University. Previously, I worked as a research intern at the <a href='https://visualai.kaist.ac.kr' target='_blank' rel='noopener noreferrer'>KAIST Visual AI Group</a> and <a href='https://www.kakaomobility.com' target='_blank' rel='noopener noreferrer'>Kakao Mobility</a>.<br/><br/>My research focuses on building AI systems that generalize beyond their training data by learning structured and abstract representations. Rather than relying on superficial correlations, I explore approaches that identify underlying data-generating mechanisms—such as causal relationships, compositional abstractions, and symbolic models—to support robust, transferable, and explainable reasoning.",
  email: "yesung.hw@gmail.com",
  imageUrl: "/avatar.jpg",
  cvUrl: "/resume.pdf",
  githubUsername: "yesung31",
  linkedinUsername: "yesung-hwang-a4b4a0223",
  funDescription:
    "Big Questions: Theory of Everything, Hard Problem of Consciousness, Nature of Intelligence.<br/>Creative: Guitar & Bass, Analog Effect Pedals, World Traveling.",
  secretDescription: "Built with Vite & React — Tovacinni template architecture.",
}

