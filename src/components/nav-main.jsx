import Link from "next/link";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavMain({ items }) {
  console.log(items)
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          item.items.map((subItem) => (
            <SidebarMenuItem key={subItem.id}>
              <Link href={subItem.url} className="w-full">
                <SidebarMenuButton>
                  {subItem.icon && <subItem.icon className="w-4 h-4" />}
                  <span>{subItem.title}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
