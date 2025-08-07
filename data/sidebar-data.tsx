import type React from "react";
import { Home, FolderOpen, User, Mail } from "lucide-react";

export interface SidebarItem {
  title: string;
  url: string;
  icon: React.ReactNode;
  isActive?: boolean;
  badge?: string;
  items?: {
    title: string;
    url: string;
  }[];
}

export const sidebarItems: SidebarItem[] = [
  {
    title: "Home",
    icon: <Home />,
    isActive: true,
    url: "/",
  },
  // {
  //   title: "Projects",
  //   icon: <FolderOpen />,
  //   items: [
  //     { title: "All Projects", url: "#" },
  //     { title: "Web Development", url: "#" },
  //     { title: "Mobile Apps", url: "#" },
  //     { title: "UI/UX Design", url: "#" },
  //   ],
  // },
  {
    title: "About",
    icon: <User />,
    url: "/about",
    // items: [
    //   { title: "My Story", url: "#" },
    //   { title: "Skills", url: "#" },
    //   { title: "Experience", url: "#" },
    //   { title: "Education", url: "#" },
    // ],
  },
  {
    title: "Contact",
    icon: <Mail />,
    url: "/contact",
    //   items: [
    //     { title: "Get In Touch", url: "#" },
    //     { title: "Social Media", url: "#" },
    //     { title: "Resume", url: "#" },
    //   ],
  },
];
