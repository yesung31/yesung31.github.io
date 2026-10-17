export interface Portfolio {
  title: string
  description: string
  technologies?: string[]
  imageUrl?: string
  projectUrl?: string
  codeUrl?: string
}

export const portfolioData: Portfolio[] = [
  {
    title: "Vacuum Tube Amp Simulation (NAM)",
    description:
      "Simulating vacuum tube guitar amplifiers (especially Marshalls) and packaging them into high-fidelity Neural Amp Modeler (NAM) models. Developing cross-platform audio plugins for macOS/iOS.",
    technologies: ["Audio DSP", "Neural Amp Modeler", "C++ / JUCE", "iOS"],
    projectUrl: "https://www.tone3000.com/padoaudio",
    imageUrl: "/projects/amp-sim.png",
  },
  {
    title: "RPG Game Developing & Plot Generation",
    description:
      "Role Playing Game with procedural plot generation development and system design at Himna Studio.",
    technologies: ["Game Development", "Procedural Generation", "Unity"],
    imageUrl: "/projects/himna.png",
  },
]

