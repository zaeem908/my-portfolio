"use client";

import { useState } from "react";
import {
  ChevronDown,
  X,
  Search,
  Sun,
  Moon,
  Copy,
  ExternalLink,
} from "lucide-react";
import { Home, User, Mail } from "lucide-react";
import { useTheme } from "next-themes";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { sidebarItems } from "@/data/sidebar-data";
import Link from "next/link";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { User, FileText, Mail } from "lucide-react "

interface SidebarProps {
  sidebarOpen: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export function Sidebar({
  sidebarOpen,
  mobileMenuOpen,
  setMobileMenuOpen,
}: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {}
  );
  // const { theme, setTheme } = useTheme();

  const toggleExpanded = (title: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  // const handleCopyEmail = () => {
  //   navigator.clipboard.writeText("your.email@example.com");
  //   // You can add a toast notification here
  // };

  const SidebarContent = () => (
    <div className="flex h-full flex-col bg-background border-r border-border">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="flex aspect-square size-10 items-center justify-center rounded-full">
            <img src="./profile.jpg" alt="" className="rounded-full" />
          </div>
          <div>
            <h2 className="font-semibold text-foreground">Zaeem Khan</h2>
            <p className="text-xs text-muted-foreground">
              Full Stack Developer
            </p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* <div className="px-3 py-2">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-2xl bg-muted/50 pl-9 pr-4 py-2 border-0 focus-visible:ring-1 focus-visible:ring-ring"
          />
        </div>
      </div> */}

      <ScrollArea className="flex-1 px-3 py-7">
        <div className="space-y-1">
          <Link href="/" className="mb-1">
            <button className="flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium transition-colors hover:bg-muted/50 text-foreground">
              <div className="flex items-center gap-3">
                {/* Replace with actual icon if needed */}
                <span><Home/></span>
                <span>Home</span>
              </div>
            </button>
          </Link>

          <Link href="/about" className="mb-1">
            <button className="flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium transition-colors hover:bg-muted/50 text-foreground">
              <div className="flex items-center gap-3">
                {/* Replace with actual icon if needed */}
                <span><User /></span>
                <span>About</span>
              </div>
            </button>
          </Link>

          <Link href="/contact" className="mb-1">
            <button className="flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium transition-colors hover:bg-muted/50 text-foreground">
              <div className="flex items-center gap-3">
                {/* Replace with actual icon if needed */}
                <span><Mail /></span>
                <span>Contact</span>
              </div>
            </button>
          </Link>
        </div>
      </ScrollArea>

      {/* <div className="border-t border-border p-3">
        <div className="space-y-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <Avatar className="h-6 w-6 border border-border">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Your Name" />
                    <AvatarFallback className="text-xs">YN</AvatarFallback>
                  </Avatar>
                  <span className="text-foreground">Zaeem Khan</span>
                </div>
                <Badge
                  variant="outline"
                  className="ml-auto border-green-500/20 bg-green-500/10 text-green-600 dark:text-green-400"
                >
                  Available
                </Badge>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 rounded-2xl bg-red text-black dark:bg-[#141718] dark:text-white" align="end" side="right">
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Your Name</p>
                  <p className="text-xs leading-none text-muted-foreground">Full Stack Developer</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="rounded-xl cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>About Me</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-xl cursor-pointer" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  <span>Download Resume</span>
                  <ExternalLink className="ml-auto h-3 w-3" />
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-xl cursor-pointer" onClick={handleCopyEmail}>
                <Copy className="mr-2 h-4 w-4" />
                <span>Copy Email</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-xl cursor-pointer">
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
      </div> */}
    </div>
  );

  return (
    <>
      {/* Mobile Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out md:hidden",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <SidebarContent />
      </div>

      {/* Desktop Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-30 hidden w-64 transform transition-transform duration-300 ease-in-out md:block",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <SidebarContent />
      </div>
    </>
  );
}
