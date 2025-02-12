"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
import { useMediaQuery } from "@/hooks/use-media-query"

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const schedule = {
  Monday: [
    { time: "09:00 AM - 10:30 AM", subject: "Mathematics 101", class: "9th Grade" },
    { time: "11:00 AM - 12:30 PM", subject: "Algebra II", class: "10th Grade" },
    { time: "02:00 PM - 03:30 PM", subject: "Calculus", class: "12th Grade" },
  ],
  Tuesday: [
    { time: "09:00 AM - 10:30 AM", subject: "Geometry", class: "9th Grade" },
    { time: "11:00 AM - 12:30 PM", subject: "Mathematics 101", class: "9th Grade" },
  ],
  Wednesday: [
    { time: "09:00 AM - 10:30 AM", subject: "Algebra II", class: "10th Grade" },
    { time: "11:00 AM - 12:30 PM", subject: "Calculus", class: "12th Grade" },
    { time: "02:00 PM - 03:30 PM", subject: "Mathematics 101", class: "9th Grade" },
  ],
  Thursday: [
    { time: "09:00 AM - 10:30 AM", subject: "Geometry", class: "9th Grade" },
    { time: "11:00 AM - 12:30 PM", subject: "Algebra II", class: "10th Grade" },
  ],
  Friday: [
    { time: "09:00 AM - 10:30 AM", subject: "Calculus", class: "12th Grade" },
    { time: "11:00 AM - 12:30 PM", subject: "Mathematics 101", class: "9th Grade" },
    { time: "02:00 PM - 03:30 PM", subject: "Geometry", class: "9th Grade" },
  ],
  Saturday: [],
  Sunday: [],
}

export default function MySchedulePage() {
  const [selectedDay, setSelectedDay] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const today = new Date()
  const currentWeek = Array.from({ length: 7 }, (_, i) => {
    const day = new Date(today)
    day.setDate(today.getDate() - today.getDay() + i)
    return day
  })

  const handleDayClick = (day: string) => {
    setSelectedDay(day)
    setIsOpen(true)
  }

  const ScheduleContent = () => (
    <div className="space-y-4">
      {schedule[selectedDay as keyof typeof schedule].map((item, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{item.subject}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{item.time}</p>
            <p className="text-sm">{item.class}</p>
          </CardContent>
        </Card>
      ))}
      {schedule[selectedDay as keyof typeof schedule].length === 0 && <p>No classes scheduled for this day.</p>}
    </div>
  )

  return (
    <Card>
    <CardHeader>
        <CardTitle>My Schedule</CardTitle>
    </CardHeader>
    <CardContent>
        <div className="grid grid-cols-7 gap-4">
        {currentWeek.map((date, index) => (
            <Button
            key={index}
            variant="outline"
            className="h-24 flex flex-col items-center justify-center"
            onClick={() => handleDayClick(weekDays[date.getDay()])}
            >
            <span className="text-sm font-semibold">{weekDays[date.getDay()].slice(0, 3)}</span>
            <span className="text-2xl font-bold">{date.getDate()}</span>
            </Button>
        ))}
        </div>
        {isDesktop ? (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent>
            <DialogHeader>
                <DialogTitle>{selectedDay}&apos;s Schedule</DialogTitle>
            </DialogHeader>
            <ScheduleContent />
            </DialogContent>
        </Dialog>
        ) : (
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerContent>
            <DrawerHeader>
                <DrawerTitle>{selectedDay}&apos;s Schedule</DrawerTitle>
            </DrawerHeader>
            <div className="p-4">
                <ScheduleContent />
            </div>
            </DrawerContent>
        </Drawer>
        )}
    </CardContent>
    </Card>
  )
}

