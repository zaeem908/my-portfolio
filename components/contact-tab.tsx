"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactTab() {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "zaeem.khan.dev@gmail.com",
      href:"https://mail.google.com/mail/?view=cm&to=zaeem.khan.dev@gmail.com",
    },
    { icon: <Phone className="h-5 w-5" />, label: "Phone", value: "+92 325 4904656", href: "tel:+15551234567" },
    { icon: <MapPin className="h-5 w-5" />, label: "Location", value: "Lahore, Punjab, Pakistan", href: "#" },
  ]

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, label: "GitHub", href: "https://github.com" },
    { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: <Twitter className="h-5 w-5" />, label: "Twitter", href: "https://twitter.com" },
  ]

  return (
    <>
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-3xl bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 dark:from-orange-700 dark:via-red-700 dark:to-pink-700 p-8 text-white shadow-lg dark:shadow-2xl"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Get In Touch</h2>
              <p className="max-w-[600px] text-white/80">
                Have a project in mind? Let's work together to bring your ideas to life.
              </p>
            </div>
            <Badge className="w-fit bg-white/20 text-white hover:bg-white/30 rounded-xl border-0 shadow-lg">
              Available for Freelance
            </Badge>
          </div>
        </motion.div>
      </section>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <section className="space-y-6">
          <Card className="rounded-3xl bg-card shadow-sm dark:shadow-lg border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Contact Information</CardTitle>
              <CardDescription className="text-muted-foreground">
                Feel free to reach out through any of these channels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((contact) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center gap-3 p-3 rounded-2xl hover:bg-muted/50 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{contact.label}</p>
                    <p className="text-sm text-muted-foreground">{contact.value}</p>
                  </div>
                </motion.a>
              ))}
            </CardContent>
          </Card>

          {/* <Card className="rounded-3xl bg-card shadow-sm dark:shadow-lg border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Follow Me</CardTitle>
              <CardDescription className="text-muted-foreground">Connect with me on social media</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="icon"
                    className="rounded-2xl border-border bg-transparent"
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      {social.icon}
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card> */}
        </section>

        <section>
          <Card className="rounded-3xl bg-card shadow-sm dark:shadow-lg border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Send a Message</CardTitle>
              <CardDescription className="text-muted-foreground">
                I'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" className="rounded-2xl border-border bg-background" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="rounded-2xl border-border bg-background"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">
                  Subject
                </label>
                <Input id="subject" placeholder="Project inquiry" className="rounded-2xl border-border bg-background" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  className="rounded-2xl min-h-[120px] border-border bg-background"
                />
              </div>
              <Button className="w-full rounded-2xl">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  )
}
