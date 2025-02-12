"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const initialEvents = [
  { id: 1, title: "Parent-Teacher Conference", date: "2024-03-15", description: "Annual meeting with parents" },
  { id: 2, title: "Science Fair", date: "2024-04-20", description: "Showcase of student science projects" },
  { id: 3, title: "Sports Day", date: "2024-05-10", description: "Annual school sports event" },
]

export default function SchoolEventsPage() {
  const [events, setEvents] = useState(initialEvents)
  // const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  // const [newEvent, setNewEvent] = useState({ title: "", date: "", description: "" })

  // const handleAddEvent = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   const id = events.length + 1
  //   setEvents([...events, { ...newEvent, id }])
  //   setNewEvent({ title: "", date: "", description: "" })
  //   setIsAddDialogOpen(false)
  // }

  const currentDate = new Date()

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">School Events</h1>
      </div>

      <Tabs defaultValue="upcoming">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="past">Past Events</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {events
              .filter((event) => new Date(event.date) >= currentDate)
              .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
              .map((event) => (
                <Card key={event.id}>
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">Date: {event.date}</p>
                    <p className="text-sm">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="past">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {events
              .filter((event) => new Date(event.date) < currentDate)
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .map((event) => (
                <Card key={event.id}>
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">Date: {event.date}</p>
                    <p className="text-sm">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

