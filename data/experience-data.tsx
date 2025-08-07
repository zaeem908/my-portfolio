export interface Experience {
  position: string
  company: string
  duration: string
  description: string
}

export const experience: Experience[] = [
  {
    position: "Senior Full Stack Developer",
    company: "Tech Vertex Inc.",
    duration: "2023 - Present",
    description:
      "Leading development of web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting scalable solutions.",
  },
  {
    position: "Junior Web Developer",
    company: "Tech Vertex Inc.",
    duration: "2022 - 2023",
    description:
      "Built and maintained company websites using HTML, CSS, JavaScript, Rust and AntDesign. Gained experience in full-stack development and agile methodologies.",
  },
  {
    position: "Freelance Developer",
    company: "Self-Employed",
    duration: "2021 - 2022",
    description:
      "Worked with various clients to develop custom websites and web applications. Managed projects from conception to deployment.",
  }
]
