"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  // navMain: [
  //   {
  //     title: "Playground",
  //     url: "#",
  //     icon: SquareTerminal,
  //   },
  //   {
  //     title: "Models",
  //     url: "#",
  //     icon: Bot,
  //     items: [
  //       {
  //         title: "Genesis",
  //         url: "#",
  //       },
  //       {
  //         title: "Explorer",
  //         url: "#",
  //       },
  //       {
  //         title: "Quantum",
  //         url: "#",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Documentation",
  //     url: "#",
  //     icon: BookOpen,
  //     items: [
  //       {
  //         title: "Introduction",
  //         url: "#",
  //       },
  //       {
  //         title: "Get Started",
  //         url: "#",
  //       },
  //       {
  //         title: "Tutorials",
  //         url: "#",
  //       },
  //       {
  //         title: "Changelog",
  //         url: "#",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Settings",
  //     url: "#",
  //     icon: Settings2,
  //     items: [
  //       {
  //         title: "General",
  //         url: "#",
  //       },
  //       {
  //         title: "Team",
  //         url: "#",
  //       },
  //       {
  //         title: "Billing",
  //         url: "#",
  //       },
  //       {
  //         title: "Limits",
  //         url: "#",
  //       },
  //     ],
  //   },
  // ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain
          items={[
            {
              section: "Admin",
              items: [
                {
                  id: 1,
                  title: "Admin Dashboard",
                  url: "/admin/dashboard",
                  icon: PieChart,
                },
                {
                  id: 2,
                  title: "Manage Users",
                  url: "/admin/users",
                  icon: Bot,
                },
                {
                  id: 3,
                  title: "View Properties",
                  url: "/admin/properties",
                  icon: Map,
                },
                {
                  id: 4,
                  title: "Reports",
                  url: "/admin/reports",
                  icon: SquareTerminal,
                },
                {
                  id: 5,
                  title: "Payments",
                  url: "/admin/payments",
                  icon: AudioWaveform,
                },
                {
                  id: 6,
                  title: "Blog Management",
                  url: "/admin/blog-management",
                  icon: BookOpen,
                },
                {
                  id: 7,
                  title: "Add Blog",
                  url: "/admin/add-blog",
                  icon: GalleryVerticalEnd,
                },
              ],
            },
            {
              section: "Seller",
              items: [
                {
                  id: 8,
                  title: "Agent Dashboard",
                  url: "/agent/dashboard",
                  icon: PieChart,
                },
                {
                  id: 9,
                  title: "My Properties",
                  url: "/agent/properties",
                  icon: Map,
                },
                {
                  id: 10,
                  title: "Add Property",
                  url: "/agent/add-property",
                  icon: Frame,
                },
                {
                  id: 11,
                  title: "Manage Bookings",
                  url: "/agent/bookings",
                  icon: BookOpen,
                },
              ],
            },
            {
              section: "User",
              items: [
                {
                  id: 12,
                  title: "Homepage",
                  url: "/home",
                  icon: Command,
                },
                {
                  id: 13,
                  title: "Properties",
                  url: "/properties",
                  icon: Map,
                },
                {
                  id: 14,
                  title: "Wishlist",
                  url: "/wishlist",
                  icon: GalleryVerticalEnd,
                },
                {
                  id: 15,
                  title: "Manage Bookings",
                  url: "/bookings",
                  icon: BookOpen,
                },
                {
                  id: 16,
                  title: "Profile",
                  url: "/profile",
                  icon: Settings2,
                },
              ],
            },
          ]}
        />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
