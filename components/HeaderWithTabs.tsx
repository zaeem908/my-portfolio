"use client"

import { useTheme } from "next-themes"
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

import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Props = {
  activeTab: string
  setActiveTab: (tab: string) => void
  setMobileMenuOpen: (open: boolean) => void
}

export const HeaderWithTabs = ({ activeTab, setActiveTab, setMobileMenuOpen }: Props) => {
  const { theme, setTheme } = useTheme()

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("your.email@example.com")
  }

  return (
    <>
      {/* Header */}
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
                    {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {[["https://github.com", Github, "GitHub"], ["https://linkedin.com", Linkedin, "LinkedIn"]].map(
              ([href, Icon, label], i) => (
                <TooltipProvider key={i}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="rounded-2xl" asChild>
                        <a target="_blank" rel="noopener noreferrer">
                          <Icon className="h-5 w-5" />
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent></TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )
            )}

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
              <DropdownMenuContent className="w-56 rounded-2xl" align="end" forceMount>
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

      {/* Tabs */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-4 pt-4">
        <TabsList className="grid w-full max-w-[500px] grid-cols-4 rounded-2xl p-1 bg-muted">
          {["home", "projects", "about", "contact"].map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              onClick={() => setActiveTab(tab)}
              className="rounded-xl data-[state=active]:bg-background data-[state=active]:text-foreground"
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="hidden md:flex gap-2">
          <Button variant="outline" className="rounded-2xl bg-transparent">
          <a href="/untitled.pdf" target="_blank" rel="noopener noreferrer">
          <FileText className="mr-2 h-4 w-4" />
            <Download className="mr-2 h-4 w-4" />
            Download CV
            </a>
          </Button>
          <Button className="rounded-2xl" asChild>
            <a href="https://mail.google.com/mail/?view=cm&to=zaeem.khan.dev@gmail.com" target="_blank">Get In Touch</a>
          </Button>
        </div>
      </div>
    </>
  )
}
