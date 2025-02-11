"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const upcomingEvents = [
  {
    id: "1",
    name: "Book Fair",
    date: "March 15, 2024",
    location: "School Library",
    description: "Annual book fair featuring various publishers and book sellers.",
  },
  {
    id: "2",
    name: "Parent-Teacher Conference",
    date: "March 20, 2024",
    location: "Main Hall",
    description: "Semester-end meeting between parents and teachers.",
  },
  {
    id: "3",
    name: "Science Exhibition",
    date: "March 25, 2024",
    location: "Science Block",
    description: "Student projects showcasing scientific innovations.",
  },
]

export default function EventsPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Events</h2>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button>Create Event</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Create Event</DialogTitle>
                  <DialogDescription>Plan a new school event. Fill in the event details below.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Event Name</Label>
                    <Input id="name" placeholder="Enter event name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="date">Date</Label>
                    <Input id="date" type="date" placeholder="Select event date" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="Enter event location" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="type">Event Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="academic">Academic</SelectItem>
                        <SelectItem value="sports">Sports</SelectItem>
                        <SelectItem value="cultural">Cultural</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" placeholder="Enter event description" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Create Event</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>View and manage all scheduled school events</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="space-y-8">
                  {upcomingEvents.map((event) => (
                      <div key={event.id} className="flex items-start gap-4">
                        <div className="rounded-lg bg-gray-100 p-2 w-16 text-center">
                          <div className="text-sm font-semibold">
                            {new Date(event.date).toLocaleDateString("en-US", {
                              month: "short",
                            })}
                          </div>
                          <div className="text-2xl font-bold">{new Date(event.date).getDate()}</div>
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-xl font-semibold">{event.name}</h4>
                          <p className="text-sm text-gray-500">{event.location}</p>
                          <p className="text-sm">{event.description}</p>
                        </div>
                      </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Calendar</CardTitle>
                <CardDescription>Select a date to view or create events</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
              </CardContent>
            </Card>
          </div>
        </div>
  )
}

