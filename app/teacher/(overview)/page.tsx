"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MessageSquare, Users } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function TeacherDashboard() {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const assignedClasses = [
    { id: 1, name: "Mathematics 101", grade: "9th Grade", students: 28 },
    { id: 2, name: "Algebra II", grade: "10th Grade", students: 25 },
    { id: 3, name: "Calculus", grade: "12th Grade", students: 22 },
  ]

  const upcomingEvents = [
    { id: 1, name: "Math Quiz", date: "2024-03-15", class: "Mathematics 101" },
    { id: 2, name: "Parent-Teacher Meeting", date: "2024-03-20", class: "All Classes" },
    { id: 3, name: "End of Term Exam", date: "2024-03-25", class: "Calculus" },
  ]

  const recentMessages = [
    { id: 1, from: "Jane Doe", subject: "Homework Question", date: "2024-03-10" },
    { id: 2, from: "John Smith", subject: "Absence Notification", date: "2024-03-09" },
    { id: 3, from: "Emily Brown", subject: "Extra Credit Inquiry", date: "2024-03-08" },
  ]

  const todaySchedule = [
    { id: 1, name: "Mathematics 101", time: "09:00 AM - 10:30 AM", grade: "9th Grade" },
    { id: 2, name: "Algebra II", time: "11:00 AM - 12:30 PM", grade: "10th Grade" },
    { id: 3, name: "Office Hours", time: "01:00 PM - 02:00 PM", grade: "All Grades" },
    { id: 4, name: "Calculus", time: "02:30 PM - 04:00 PM", grade: "12th Grade" },
    { id: 5, name: "Math Club", time: "04:30 PM - 05:30 PM", grade: "All Grades" },
    { id: 6, name: "Lesson Planning", time: "05:30 PM - 06:30 PM", grade: "N/A" },
  ]

  const ScheduleDetails = () => (
    <div className="grid grid-cols-3 gap-2">
      {todaySchedule.map((class_) => (
        <Card key={class_.id}>
          <CardHeader>
            <CardTitle>{class_.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Time: {class_.time}</p>
            <p className="text-sm text-muted-foreground">Grade: {class_.grade}</p>
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
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{assignedClasses.reduce((sum, c) => sum + c.students, 0)}</div>
            <p className="text-xs text-muted-foreground">across all classes</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Assigned Classes</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{assignedClasses.length}</div>
            <p className="text-xs text-muted-foreground">active classes</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{upcomingEvents.length}</div>
            <p className="text-xs text-muted-foreground">in the next 30 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unread Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{recentMessages.length}</div>
            <p className="text-xs text-muted-foreground">from parents</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Today's Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {todaySchedule.slice(0, 4).map((class_) => (
                <div key={class_.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{class_.name}</p>
                    <p className="text-sm text-muted-foreground">{class_.time}</p>
                  </div>
                  <Badge variant="outline">{class_.grade}</Badge>
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
                    <DialogTitle>Today's Full Schedule</DialogTitle>
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
                    <DrawerTitle>Today's Full Schedule</DrawerTitle>
                  </DrawerHeader>
                  <div className="px-4">
                    <ScheduleDetails />
                  </div>
                </DrawerContent>
              </Drawer>
            )}
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-center cursor-pointer">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{event.name}</p>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                  </div>
                  <Badge variant="outline" className="ml-auto">
                    {event.class}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Recent Messages</CardTitle>
          <CardDescription>Latest communications from parents</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentMessages.map((message) => (
              <div key={message.id} className="flex items-center cursor-pointer">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">{message.from}</p>
                  <p className="text-sm text-muted-foreground">{message.subject}</p>
                </div>
                <div className="ml-auto text-sm text-muted-foreground">{message.date}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

