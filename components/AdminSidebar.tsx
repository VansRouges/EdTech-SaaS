"use client"
import * as React from "react"
import { usePathname } from "next/navigation";
import { SearchForm } from "./search-form"
import { VersionSwitcher } from "./version-switcher"
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
} from "@/components/ui/sidebar"

// Refined data for school admin functionalities
const data = {
    versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
    navMain: [
        {
            id: 1,
            title: "Dashboard",
            items: [
                { title: "Overview", url: "/admin" },
                { title: "Reports", url: "#" }, 
                { title: "Events Calendar", url: "/admin/events" }
            ],
        },
        {
            id: 2,
            title: "Academic Management",
            items: [
                { title: "Classes", url: "/admin/classes" },
                { title: "Subjects", url: "/admin/subjects" },
                { title: "Timetables", url: "/admin/timetables" },
                { title: "Exams & Grades", url: "/admin/exams" }
            ],
        },
        {
            id: 3,
            title: "Communication",
            items: [
                { title: "Notices", url: "#" },
                { title: "Messages", url: "#" }
            ],
        },
        {
            id: 4,
            title: "Personnel",
            items: [
                { title: "Teachers", url: "#" },
                { title: "Staff", url: "#" },
                { title: "Assignments", url: "#" }
            ],
        },
        {
            id: 5,
            title: "Students & Parents",
            items: [
                { title: "Students", url: "#" },
                { title: "Admissions", url: "#" },
                { title: "Parents", url: "#" },
                { title: "Attendance", url: "#" }
            ],
        },
        {
            id: 6,
            title: "Finance",
            items: [
                { title: "Payments", url: "#" },
                { title: "Fee Management", url: "#" },
                { title: "Scholarships", url: "#" }
            ],
        },
        {
            id: 7,
            title: "Settings",
            items: [
                { title: "School Profile", url: "#" },
                { title: "User Management", url: "#" },
                { title: "System Settings", url: "#" }
            ],
        }
    ],
};

export function AdminSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const pathname = usePathname();  
    const name = "EdTech Admin";

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
                {data.navMain.map((group) => (
                    <SidebarGroup key={group.id}>
                        <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {group.items.map((item) => {
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
    )
}
