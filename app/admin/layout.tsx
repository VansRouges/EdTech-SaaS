import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AdminSidebar } from "@/components/AdminSidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EdTech: Admin",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
          <body
              className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
          <SidebarProvider>
            <AdminSidebar/>
            <SidebarInset>
              <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                  <SidebarTrigger className="-ml-1"/>
                  <Separator orientation="vertical" className="mr-2 h-4"/>
                  <Breadcrumb>
                      <BreadcrumbList>
                          <BreadcrumbItem className="hidden md:block">
                              <BreadcrumbLink href="#">
                                  Building Your Application
                              </BreadcrumbLink>
                          </BreadcrumbItem>
                          <BreadcrumbSeparator className="hidden md:block"/>
                          <BreadcrumbItem>
                              <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                          </BreadcrumbItem>
                      </BreadcrumbList>
                  </Breadcrumb>
              </header>
              <div className="flex flex-1 flex-col gap-4 p-4">
                  {children}
              </div>
            </SidebarInset>
          </SidebarProvider>
        </body>
      </html>
);}
