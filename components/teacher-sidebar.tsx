"use client"
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

const data = {
    versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
    navMain: [
        {
            title: "Dashboard",
            url: "#",
            items: [
                { title: "Overview", url: "/teacher" },
                { title: "My Schedule", url: "/teacher/schedule" },
            ],
        },
        {
            title: "Communication",
            url: "#",
            items: [
                { title: "Notices", url: "/teacher/notices" },
                { title: "Messages", url: "/teacher/messages" },
            ],
        },        
        {
            title: "Class Management",
            url: "#",
            items: [
                { title: "My Classes", url: "/teacher/classes" },
                { title: "Assignments", url: "/teacher/assignments" },
                { title: "Attendance", url: "/teacher/attendance" },
                { title: "Grades & Reports", url: "/teacher/grades" },
            ],
        },
        {
            title: "Student Interaction",
            url: "#",
            items: [
                { title: "Student List", url: "/teacher/students" },
                { title: "Feedback", url: "#" },
            ],
        },
        {
            title: "Resources",
            url: "#",
            items: [
                { title: "Learning Materials", url: "/teacher/materials" },
                { title: "Exam Preparation", url: "/teacher/exams" },
                { title: "School Events", url: "/teacher/events" },
            ],
        },
        {
            title: "Settings",
            url: "#",
            items: [
                { title: "Profile Settings", url: "#" },
                { title: "Account Security", url: "#" },
            ],
        },
    ],
};

export function TeacherSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const pathname = usePathname();
    const name: string = "EdTech Teacher";

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
                    <SidebarGroup key={group.title}>
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
    );
}
