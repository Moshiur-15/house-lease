"use client";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  MapIcon,
  PieChart,
  AddIcon,
  PaymentIcon
} from "lucide-react";
import { FaPlus, FaMoneyCheckAlt } from "react-icons/fa";

import { NavMain } from "@/components/nav-main";
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
                  title: "ADMIN DASHBOARD",
                  url: "/dashboard",
                  icon: PieChart,
                },
                {
                  id: 2,
                  title: "MANAGE USERS",
                  url: "/dashboard/allUsers",
                  icon: Bot,
                },
                {
                  id: 3,
                  title: "MANAGE PROPERTIES",
                  url: "/dashboard/viewAllProperty",
                  icon: MapIcon,
                },
                {
                  id: 4,
                  title: "ADD BLOG",
                  url: "/dashboard/addBlog",
                  icon: FaPlus,
                },
                {
                  id: 5,
                  title: "MANAGE BLOGS",
                  url: "/dashboard/manageBlog",
                  icon: BookOpen,
                },
              ],
            },

            {
              section: "Seller",
              items: [
                {
                  id: 8,
                  title: "SELLER DASHBOARD",
                  url: "/dashboard/seller",
                  icon: PieChart,
                },
                {
                  id: 9,
                  title: "ADD PROPERTY",
                  url: "/dashboard/add-property",
                  icon: Frame,
                },
                {
                  id: 10,
                  title: "MANAGE PROPERTIES",
                  url: "/dashboard/managePropertie",
                  icon: MapIcon,
                },
                {
                  id: 11,
                  title: "MANAGE BOOKINGS",
                  url: "/dashboard/manageBookings",
                  icon: BookOpen,
                },
                {
                  id: 20,
                  title: "PAYMENT",
                  url: "/dashboard/paymentBookingUser",
                  icon: FaMoneyCheckAlt,
                },
              ],
            },

            {
              section: "User",
              items: [
                {
                  id: 12,
                  title: "ANALYTICS",
                  url: "/dashboard/analytics",
                  icon: Command,
                },
                {
                  id: 13,
                  title: "PAYMENT HISTORY",
                  url: "/dashboard/paymentHistory",
                  icon: MapIcon,
                },
                {
                  id: 14,
                  title: "WISHLIST",
                  url: "/dashboard/wishlist",
                  icon: GalleryVerticalEnd,
                },
                {
                  id: 15,
                  title: "MY BOOKINGS",
                  url: "/dashboard/myBookings",
                  icon: BookOpen,
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
