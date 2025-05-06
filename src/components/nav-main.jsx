import Link from "next/link";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavMain({ items }) {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <div key={item.section}>
            {/* Section Heading */}
            <h2 className="font-bold text-lg mt-4">{item.section}</h2>

            {item.items.map((subItem) => (
              <SidebarMenuItem key={subItem.id}>
                <Link href={subItem.url} className="w-full">
                  <SidebarMenuButton>
                    {subItem.icon && <subItem.icon className="w-4 h-4" />}
                    <span>{subItem.title}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </div>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
