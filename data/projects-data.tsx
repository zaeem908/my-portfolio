export interface Project {
  name: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  status: string
}

export const featuredProjects: Project[] = [
  {
    name: "Athena Sols Agency Website",
    description: "Developed a sleek agency site using Next.js, Node.js, Express, MongoDB, and Tailwind CSS.",
    image: "./project-1.png?height=300&width=400",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express"],
    liveUrl: "https://athenasols.com",
    status: "Live",
  },
  {
    name: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features",
    image: "./project-2.png?height=300&width=400",
    technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io", "PostgreSQL"],
    liveUrl: "https://babies-ruby.vercel.app",
    status: "Live",
  },
  {
    name: "Weather Dashboard",
    description: "A beautiful weather dashboard with location-based forecasts and interactive charts",
    image: "./project-3.png?height=300&width=400",
    technologies: ["React", "API Integration", "Chart.js", "CSS3"],
    liveUrl: "https://dawg-project.vercel.app",
    status: "Live",
  },
]

export const allProjects: Project[] = [
  ...featuredProjects,
  {
    name: "Portfolio Website",
    description: "A responsive portfolio website built with Next.js and Tailwind CSS showcasing my work",
    image: "./project-4.png?height=300&width=400",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    liveUrl: "https://springboard-eosin.vercel.app",
    status: "Live",
  },
  {
    name: "Blog Platform",
    description: "A modern blog platform with CMS integration and SEO optimization for content creators",
    image: "./project-5.png?height=300&width=400",
    technologies: ["Next.js", "Sanity CMS", "SEO", "React", "GraphQL"],
    liveUrl: "https://xtrail-dusky.vercel.app",
    status: "In Progress",
  },
  {
    name: "Mobile Banking App",
    description: "A secure mobile banking application with biometric authentication and financial tracking",
    image: "./project-6.png?height=300&width=400",
    technologies: ["React Native", "Firebase", "Biometrics", "Redux"],
    liveUrl: "https://shipleap.com",
    status: "Live",
  },
]

export const projects = allProjects;
