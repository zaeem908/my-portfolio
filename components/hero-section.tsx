"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"

export function HeroSection() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 dark:from-violet-700 dark:via-indigo-700 dark:to-blue-700 p-8 text-white shadow-lg dark:shadow-2xl"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4">
            <Badge className="bg-white/20 text-white hover:bg-white/30 rounded-xl border-0">Available for Work</Badge>
            <h2 className="text-3xl font-bold">Hi, I'm Zaeem Khan</h2>
            <h3 className="text-xl text-white/90">Full Stack Developer & UI/UX Designer</h3>
            <p className="max-w-[600px] text-white/80">
              I create beautiful, functional, and user-centered digital experiences. Passionate about clean code,
              innovative design, and solving complex problems through technology.
            </p>
            <div className="flex flex-wrap gap-3">
            <Button className="rounded-2xl bg-white text-indigo-700 hover:bg-white/90 shadow-lg" asChild>
            <a href="https://mail.google.com/mail/?view=cm&to=zaeem.khan.dev@gmail.com" target="_blank" rel="noopener noreferrer">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </a>
          </Button>
              {/* <Button
                variant="outline"
                className="rounded-2xl bg-transparent border-white text-white hover:bg-white/10 border-2"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button> */}
            </div>
            {/* <div className="flex gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-2xl bg-white/10 hover:bg-white/20 border-0"
                asChild
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-2xl bg-white/10 hover:bg-white/20 border-0"
                asChild
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div> */}
          </div>
          <div className="hidden lg:block">
            <img src="./profile.jpg" className="w-72 h-72 rounded-full" alt="" />
            {/* <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="relative h-40 w-40"
            >
              <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-md" />
              <div className="absolute inset-4 rounded-full bg-white/20" />
              <div className="absolute inset-8 rounded-full bg-white/30" />
              <div className="absolute inset-12 rounded-full bg-white/40" />
              <div className="absolute inset-16 rounded-full bg-white/50" />
            </motion.div> */}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
