"use client"

import { motion } from "framer-motion"
import { Download, Award, Users, Coffee } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function AboutTab() {
  const stats = [
    { icon: <Award className="h-6 w-6" />, value: "50+", label: "Projects Completed" },
    { icon: <Users className="h-6 w-6" />, value: "30+", label: "Happy Clients" },
    { icon: <Coffee className="h-6 w-6" />, value: "1000+", label: "Cups of Coffee" },
  ]

  return (
    <>
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-3xl bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 dark:from-green-700 dark:via-emerald-700 dark:to-teal-700 p-8 text-white shadow-lg dark:shadow-2xl"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">About Me</h2>
              <p className="max-w-[600px] text-white/80">
                Learn more about my journey, skills, and what drives my passion for development.
              </p>
            </div>
            {/* <Button className="w-fit rounded-2xl bg-white text-emerald-700 hover:bg-white/90 shadow-lg">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button> */}
          </div>
        </motion.div>
      </section>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="rounded-3xl text-center bg-card shadow-sm dark:shadow-lg border-border">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4 text-primary">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2 text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <section className="space-y-6">
        <Card className="rounded-3xl bg-card shadow-sm dark:shadow-lg border-border">
          <CardHeader>
            <CardTitle className="text-foreground">My Story</CardTitle>
            <CardDescription className="text-muted-foreground">How I became a developer</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground">
              I started my journey in web development 4 years ago when I discovered the power of creating digital
              experiences that can impact people's lives. What began as curiosity quickly turned into a passion for
              clean code and beautiful design.
            </p>
            <p className="text-foreground">
              Today, I specialize in full-stack development with a focus on React, Node.js, and modern web technologies.
              I love working on projects that challenge me to learn new things and push the boundaries of what's
              possible on the web.
            </p>
            <p className="text-foreground">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing my knowledge with the developer community.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl bg-card shadow-sm dark:shadow-lg border-border">
          <CardHeader>
            <CardTitle className="text-foreground">What I Do</CardTitle>
            <CardDescription className="text-muted-foreground">My areas of expertise</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Frontend Development</h4>
                <p className="text-sm text-muted-foreground">
                  Creating responsive, interactive user interfaces with React, Next.js, and modern CSS.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="rounded-xl border-border">
                    React
                  </Badge>
                  <Badge variant="outline" className="rounded-xl border-border">
                    Next.js
                  </Badge>
                  <Badge variant="outline" className="rounded-xl border-border">
                    TypeScript
                  </Badge>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Backend Development</h4>
                <p className="text-sm text-muted-foreground">
                  Building scalable APIs and server-side applications with Node.js and databases.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="rounded-xl border-border">
                    Node.js
                  </Badge>
                  <Badge variant="outline" className="rounded-xl border-border">
                    Express
                  </Badge>
                  <Badge variant="outline" className="rounded-xl border-border">
                    MongoDB
                  </Badge>
                  <Badge variant="outline" className="rounded-xl border-border">
                    Rust
                  </Badge>
                  <Badge variant="outline" className="rounded-xl border-border">
                    PostgreSQL
                  </Badge>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">UI/UX Design</h4>
                <p className="text-sm text-muted-foreground">
                  Designing user-centered interfaces that are both beautiful and functional.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="rounded-xl border-border">
                    Figma
                  </Badge>
                  <Badge variant="outline" className="rounded-xl border-border">
                    Adobe XD
                  </Badge>
                  <Badge variant="outline" className="rounded-xl border-border">
                    Sketch
                  </Badge>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">DevOps & Tools</h4>
                <p className="text-sm text-muted-foreground">
                  Setting up CI/CD pipelines and managing cloud infrastructure.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="rounded-xl border-border">
                    Docker
                  </Badge>
                  <Badge variant="outline" className="rounded-xl border-border">
                    AWS
                  </Badge>
                  <Badge variant="outline" className="rounded-xl border-border">
                    Vercel
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  )
}
