"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Filter, Search, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { allProjects } from "@/data/projects-data"
import { cn } from "@/lib/utils"

export function ProjectsTab() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [showSuggestions, setShowSuggestions] = useState(false)

  // Get unique categories from projects
  const categories = useMemo(() => {
    const cats = ["All", ...new Set(allProjects.flatMap((project) => project.technologies))]
    return cats
  }, [])

  // Filter projects based on search and category
  const filteredProjects = useMemo(() => {
    let filtered = allProjects

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((project) => project.technologies.includes(selectedCategory))
    }

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (project) =>
          project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

    return filtered
  }, [searchQuery, selectedCategory])

  // Get search suggestions
  const searchSuggestions = useMemo(() => {
    if (!searchQuery.trim()) return []

    const suggestions = new Set<string>()

    allProjects.forEach((project) => {
      // Add project names
      if (project.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        suggestions.add(project.name)
      }

      // Add technologies
      project.technologies.forEach((tech) => {
        if (tech.toLowerCase().includes(searchQuery.toLowerCase())) {
          suggestions.add(tech)
        }
      })

      // Add description keywords
      const words = project.description.toLowerCase().split(" ")
      words.forEach((word) => {
        if (word.includes(searchQuery.toLowerCase()) && word.length > 3) {
          suggestions.add(word)
        }
      })
    })

    return Array.from(suggestions).slice(0, 5)
  }, [searchQuery])

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion)
    setShowSuggestions(false)
  }

  const clearSearch = () => {
    setSearchQuery("")
    setShowSuggestions(false)
  }

  return (
    <>
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 dark:from-purple-700 dark:via-violet-700 dark:to-indigo-700 p-8 text-white shadow-lg dark:shadow-2xl"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">My Projects</h2>
              <p className="max-w-[600px] text-white/80">
                A collection of projects I've worked on, showcasing my skills and experience.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-white/20 text-white hover:bg-white/30 rounded-xl border-0 shadow-lg">
                {filteredProjects.length} Projects
              </Badge>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Search and Filter Section */}
      <section className="space-y-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search projects, technologies..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setShowSuggestions(true)
              }}
              onFocus={() => setShowSuggestions(true)}
              className="w-full rounded-2xl pl-9 pr-10 border-border bg-background"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-xl"
                onClick={clearSearch}
              >
                <X className="h-4 w-4" />
              </Button>
            )}

            {/* Search Suggestions */}
            {showSuggestions && searchSuggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 z-10 mt-1 bg-background border border-border rounded-2xl shadow-lg">
                {searchSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-4 py-2 hover:bg-muted/50 first:rounded-t-2xl last:rounded-b-2xl transition-colors"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    <div className="flex items-center gap-2">
                      <Search className="h-3 w-3 text-muted-foreground" />
                      <span className="text-sm">{suggestion}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.slice(0, 6).map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                className={cn(
                  "rounded-2xl transition-all",
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-transparent border-border hover:bg-muted/50",
                )}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
            {categories.length > 6 && (
              <Button variant="outline" size="sm" className="rounded-2xl bg-transparent border-border">
                <Filter className="mr-1 h-3 w-3" />
                More
              </Button>
            )}
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>
            Showing {filteredProjects.length} of {allProjects.length} projects
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </span>
          {(searchQuery || selectedCategory !== "All") && (
            <Button
              variant="ghost"
              size="sm"
              className="rounded-xl"
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("All")
                setShowSuggestions(false)
              }}
            >
              Clear filters
            </Button>
          )}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="space-y-4">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
              <Search className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">No projects found</h3>
            <p className="text-muted-foreground mb-4">Try adjusting your search or filter criteria</p>
            <Button
              variant="outline"
              className="rounded-2xl bg-transparent"
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("All")
                setShowSuggestions(false)
              }}
            >
              Clear all filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="overflow-hidden rounded-3xl border hover:border-primary/50 transition-all duration-300 bg-card shadow-sm dark:shadow-lg">
                  <div className="aspect-video overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-600 dark:via-purple-600 dark:to-pink-600 relative">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/20 text-white hover:bg-white/30 rounded-xl border-0 shadow-lg">
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-foreground">{project.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className={cn(
                            "rounded-xl text-xs border-border cursor-pointer transition-colors",
                            selectedCategory === tech && "bg-primary/10 border-primary text-primary",
                          )}
                          onClick={() => setSelectedCategory(tech)}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button
                      variant="secondary"
                      className="flex-1 rounded-2xl bg-secondary hover:bg-secondary/80"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-2xl border-border bg-transparent" asChild>
                      {/* <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a> */}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </>
  )
}
