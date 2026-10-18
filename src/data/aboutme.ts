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
  altName?: string
  institutionUrl?: string
}

export const aboutMe: AboutMe = {
  name: "Yesung Hwang",
  title: "Ph.D. Candidate",
  institution: "Eindhoven University of Technology (TU/e)",
  institutionUrl: "https://www.tue.nl/en/",
  description:
    "I am a Ph.D. Candidate at <a href='https://www.tue.nl/en/' target='_blank' rel='noopener noreferrer'>Eindhoven University of Technology (TU/e)</a>, advised by <a href='https://sites.google.com/view/devendradhami' target='_blank' rel='noopener noreferrer'>Dr. Devendra Dhami (Assistant Professor)</a>. I received my M.Sc. in Artificial Intelligence & Engineering Systems (<em>cum laude</em>) from TU/e and my B.Sc. in Electrical and Electronic Engineering with a minor in Physics from Yonsei University. Previously, I worked as a research intern at <a href='https://www.tno.nl/en/' target='_blank' rel='noopener noreferrer'>TNO</a>, <a href='https://visualai.kaist.ac.kr' target='_blank' rel='noopener noreferrer'>KAIST Visual AI Lab</a>, and <a href='https://www.kakaomobility.com' target='_blank' rel='noopener noreferrer'>Kakao Mobility</a>.<br/><br/>My research focuses on <strong>Learning Causal World Models</strong> that generalize beyond their training data by learning structured and abstract representations. Rather than relying on superficial correlations, I explore approaches that identify underlying data-generating mechanisms to support robust, transferable, and explainable reasoning.",
  email: "y.hwang@tue.nl",
  imageUrl: "/avatar.jpg",
  cvUrl: "https://yesung31.github.io/resume/resume.pdf",
  githubUsername: "yesung31",
  linkedinUsername: "yesung-hwang-a4b4a0223",
}

