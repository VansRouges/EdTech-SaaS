"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MessageSquare, UserCheck } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { useMediaQuery } from "@/hooks/use-media-query"

const gradeData = [
  { subject: "Math", grade: 85 },
  { subject: "Science", grade: 92 },
  { subject: "English", grade: 78 },
  { subject: "History", grade: 88 },
  { subject: "Art", grade: 95 },
]

const attendanceData = [
  { status: "Present", count: 45 },
  { status: "Absent", count: 3 },
  { status: "Late", count: 2 },
]

const upcomingEvents = [
  { id: 1, name: "Parent-Teacher Conference", date: "2024-03-15" },
  { id: 2, name: "Science Fair", date: "2024-03-20" },
  { id: 3, name: "Spring Break", date: "2024-03-25" },
]

const recentMessages = [
  { id: 1, from: "Ms. Johnson", subject: "Math Project Update", date: "2024-03-10" },
  { id: 2, from: "Mr. Smith", subject: "Field Trip Permission", date: "2024-03-09" },
]

const todaySchedule = [
  { id: 1, subject: "Mathematics", time: "09:00 AM - 10:30 AM", teacher: "Dr. Jane Smith" },
  { id: 2, subject: "Science", time: "10:45 AM - 12:15 PM", teacher: "Prof. John Doe" },
  { id: 3, subject: "English Literature", time: "01:00 PM - 02:30 PM", teacher: "Ms. Emily Brown" },
  { id: 4, subject: "Physical Education", time: "02:45 PM - 03:45 PM", teacher: "Mr. Mike Johnson" },
  { id: 5, subject: "History", time: "04:00 PM - 05:30 PM", teacher: "Mrs. Sarah Davis" },
  { id: 6, subject: "Art", time: "05:45 PM - 07:15 PM", teacher: "Ms. Lisa Taylor" },
]

export default function ParentDashboard() {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const ScheduleDetails = () => (
    <div className="grid grid-cols-3 gap-4 space-y-4">
      {todaySchedule.map((class_) => (
        <Card key={class_.id}>
          <CardHeader>
            <CardTitle>{class_.subject}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Time: {class_.time}</p>
            <p className="text-sm text-muted-foreground">Teacher: {class_.teacher}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Grade</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87.6%</div>
            <p className="text-xs text-muted-foreground">+2.5% from last semester</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">90%</div>
            <p className="text-xs text-muted-foreground">Last 30 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{upcomingEvents.length}</div>
            <p className="text-xs text-muted-foreground">Next 30 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unread Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{recentMessages.length}</div>
            <p className="text-xs text-muted-foreground">From teachers</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Grade Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={gradeData}>
                <XAxis dataKey="subject" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}%`}
                />
                <Bar dataKey="grade" fill="#adfa1d" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Today&#39;s Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {todaySchedule.slice(0, 4).map((class_) => (
                <div key={class_.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{class_.subject}</p>
                    <p className="text-sm text-muted-foreground">{class_.time}</p>
                  </div>
                  <Badge variant="outline">{class_.teacher}</Badge>
                </div>
              ))}
            </div>
            {isDesktop ? (
              <Dialog open={isScheduleOpen} onOpenChange={setIsScheduleOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full mt-4">View Full Schedule</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[625px]">
                  <DialogHeader>
                    <DialogTitle>Today&#39;s Full Schedule</DialogTitle>
                  </DialogHeader>
                  <ScheduleDetails />
                </DialogContent>
              </Dialog>
            ) : (
              <Drawer open={isScheduleOpen} onOpenChange={setIsScheduleOpen}>
                <DrawerTrigger asChild>
                  <Button className="w-full mt-4">View Full Schedule</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader className="text-left">
                    <DrawerTitle>Today&#39;s Full Schedule</DrawerTitle>
                  </DrawerHeader>
                  <ScheduleDetails />
                </DrawerContent>
              </Drawer>
            )}
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {recentMessages.map((message) => (
                <div key={message.id} className="flex items-center">
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">{message.subject}</p>
                    <p className="text-sm text-muted-foreground">From: {message.from}</p>
                  </div>
                  <div className="ml-auto font-medium">{new Date(message.date).toLocaleDateString()}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Attendance Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={attendanceData}>
                <XAxis dataKey="status" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <Bar dataKey="count" fill="#adfa1d" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

