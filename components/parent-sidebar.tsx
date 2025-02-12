"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { SearchForm } from "./search-form";
import { VersionSwitcher } from "./version-switcher";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar";

// Sample data without hardcoded isActive 
const data = {
    versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
    navMain: [
        {
            id: 1,
            items: [
                { title: "Dashboard", url: "/parents" }, 
                { title: "School Activities", url: "/parents/activity" },
                { title: "Performance", url: "/parents/performance" },
                { title: "Teachers", url: "/parents/teachers" },
                { title: "Events", url: "/parents/events" },
                { title: "Payments", url: "/parents/payments" },
                { title: "Parent's Guide", url: "/parents/guide" },
            ],
        },
    ],
};

export function ParentSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const pathname = usePathname();  // Get current route path
    const name: string = "EdTech Parent";

    return (
        <Sidebar {...props}>
            <SidebarHeader>
                <VersionSwitcher
                    versions={data.versions}
                    defaultVersion={data.versions[0]}
                    name={name}
                />
                <SearchForm />
            </SidebarHeader>
            <SidebarContent>
                {/* SidebarGroup for navigation items */}
                {data.navMain.map((group) => (
                    <SidebarGroup key={group.id}>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {group.items.map((item) => {
                                    // Dynamically set isActive based on current route
                                    const isActive = pathname === item.url;

                                    return (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton asChild isActive={isActive}>
                                                <a href={item.url}>{item.title}</a>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    );
                                })}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    );
}
