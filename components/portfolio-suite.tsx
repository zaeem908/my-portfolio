"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  Download,
  Sun,
  Moon,
  User,
  FileText,
  ExternalLink,
  Copy,
} from "lucide-react"
import { useTheme } from "next-themes"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

import { HeroSection } from "@/components/hero-section"
import { FeaturedProjects } from "@/components/featured-projects"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { ProjectsTab } from "@/components/projects-tab"
import { AboutTab } from "@/components/about-tab"
import { ContactTab } from "@/components/contact-tab"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function PortfolioSuite() {
  const [activeTab, setActiveTab] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("your.email@example.com")
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-background transition-colors duration-300">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-20 dark:opacity-10"
        animate={{
          background: [
            "radial-gradient(circle at 50% 50%, rgba(120, 41, 190, 0.5) 0%, rgba(53, 71, 125, 0.5) 50%, rgba(0, 0, 0, 0) 100%)",
            "radial-gradient(circle at 30% 70%, rgba(233, 30, 99, 0.5) 0%, rgba(81, 45, 168, 0.5) 50%, rgba(0, 0, 0, 0) 100%)",
            "radial-gradient(circle at 70% 30%, rgba(76, 175, 80, 0.5) 0%, rgba(32, 119, 188, 0.5) 50%, rgba(0, 0, 0, 0) 100%)",
            "radial-gradient(circle at 50% 50%, rgba(120, 41, 190, 0.5) 0%, rgba(53, 71, 125, 0.5) 50%, rgba(0, 0, 0, 0) 100%)",
          ],
        }}
        transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Main Content */}
      <div className="min-h-screen transition-all duration-300 ease-in-out">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-3 border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex flex-1 items-center justify-between">
            <h1 className="text-xl font-semibold">Portfolio</h1>
            <div className="flex items-center gap-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-2xl"
                      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                      {theme === "dark" ? (
                        <Sun className="h-5 w-5 transition-all" />
                      ) : (
                        <Moon className="h-5 w-5 transition-all" />
                      )}
                      <span className="sr-only">Toggle theme</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>{theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-2xl" asChild>
                      <a href="https://github.com/zaeem908" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>GitHub</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-2xl" asChild>
                      <a href="https://pk.linkedin.com/in/zaeem-khan-dev" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>LinkedIn</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-2xl" asChild>
                      <a href="https://mail.google.com/mail/?view=cm&to=zaeem.khan.dev@gmail.com" target="_blank">
                        <Mail className="h-5 w-5" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Email</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative rounded-full">
                    <img src="./profile.jpg" className="rounded-full w-9 h-9" alt="" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56 rounded-2xl bg-white/80 dark:bg-zinc-800/60 backdrop-blur-md supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-zinc-800/40 border border-border shadow-lg"
                  align="end"
                  forceMount
                >
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">Zaeem Khan</p>
                      <p className="text-xs leading-none text-muted-foreground">Full Stack Developer</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="rounded-xl cursor-pointer" onClick={() => setActiveTab("about")}>
                    <User className="mr-2 h-4 w-4" />
                    <span>About Me</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="rounded-xl cursor-pointer" asChild>
                    <a href="/untitled.pdf" target="_blank" rel="noopener noreferrer">
                      <FileText className="mr-2 h-4 w-4" />
                      <span>Download Resume</span>
                      <ExternalLink className="ml-auto h-3 w-3" />
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="rounded-xl cursor-pointer" onClick={handleCopyEmail}>
                    <Copy className="mr-2 h-4 w-4" />
                    <span>Copy Email</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="rounded-xl cursor-pointer" onClick={() => setActiveTab("contact")}>
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Contact Me</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="rounded-xl cursor-pointer"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  >
                    {theme === "dark" ? (
                      <>
                        <Sun className="mr-2 h-4 w-4" />
                        <span>Light Mode</span>
                      </>
                    ) : (
                      <>
                        <Moon className="mr-2 h-4 w-4" />
                        <span>Dark Mode</span>
                      </>
                    )}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-6">
          <Tabs defaultValue="home" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <TabsList className="grid w-full max-w-[500px] grid-cols-4 rounded-2xl p-1 bg-muted">
                <TabsTrigger
                  value="home"
                  className="rounded-xl data-[state=active]:bg-background data-[state=active]:text-foreground"
                >
                  Home
                </TabsTrigger>
                <TabsTrigger
                  value="projects"
                  className="rounded-xl data-[state=active]:bg-background data-[state=active]:text-foreground"
                >
                  Projects
                </TabsTrigger>
                <TabsTrigger
                  value="about"
                  className="rounded-xl data-[state=active]:bg-background data-[state=active]:text-foreground"
                >
                  About
                </TabsTrigger>
                <TabsTrigger
                  value="contact"
                  className="rounded-xl data-[state=active]:bg-background data-[state=active]:text-foreground"
                >
                  Contact
                </TabsTrigger>
              </TabsList>
              <div className="hidden md:flex gap-2">
                <Button variant="outline" className="rounded-2xl bg-transparent">
                <a href="/untitled.pdf" target="_blank" rel="noopener noreferrer">
                  Download CV
                  </a>
                </Button>
                <Button className="rounded-2xl" asChild>
                  <a href="https://mail.google.com/mail/?view=cm&to=zaeem.khan.dev@gmail.com" target="_blank">Get In Touch</a>
                </Button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <TabsContent value="home" className="space-y-8 mt-0">
                  <HeroSection />
                  <FeaturedProjects />
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <Skills />
                    <Experience />
                  </div>
                </TabsContent>

                <TabsContent value="projects" className="space-y-8 mt-0">
                  <ProjectsTab />
                </TabsContent>

                <TabsContent value="about" className="space-y-8 mt-0">
                  <AboutTab />
                </TabsContent>

                <TabsContent value="contact" className="space-y-8 mt-0">
                  <ContactTab />
                </TabsContent>
              </motion.div>
            </AnimatePresence>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
