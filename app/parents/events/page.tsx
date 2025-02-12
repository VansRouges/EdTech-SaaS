"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

const events = [
  {
    id: 1,
    name: "Parent-Teacher Conference",
    date: "2024-03-15",
    type: "Meeting",
    description:
      "Individual meetings with teachers to discuss student progress. This is a crucial opportunity for parents and teachers to connect, share insights, and collaborate on strategies to support each student's learning journey. These meetings will cover academic performance, social development, and any specific concerns. Each meeting is scheduled for 20 minutes, allowing for focused discussions.",
  },
  {
    id: 2,
    name: "Science Fair",
    date: "2024-03-20",
    type: "Academic",
    description: "Annual science fair showcasing student projects across all grades.",
  },
  {
    id: 3,
    name: "School Play: Romeo and Juliet",
    date: "2024-03-25",
    type: "Performance",
    description: "Drama club's performance of Shakespeare's classic tragedy.",
  },
  {
    id: 4,
    name: "Career Day",
    date: "2024-04-01",
    type: "Special",
    description: "Professionals from various fields visit to discuss career opportunities.",
  },
  {
    id: 5,
    name: "Field Day",
    date: "2024-04-10",
    type: "Sports",
    description: "Annual outdoor event with various sports and team-building activities.",
  },
  {
    id: 6,
    name: "Art Exhibition",
    date: "2024-04-15",
    type: "Exhibition",
    description: "Showcase of student artwork from throughout the year.",
  },
]

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<(typeof events)[0] | null>(null)

  return (
    <div>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">School Events</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <Card
              key={event.id}
              className="cursor-pointer transition-all hover:shadow-md"
              onClick={() => setSelectedEvent(event)}
            >
              <CardHeader>
                <CardTitle>{event.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">Date: {event.date}</p>
                <Badge>{event.type}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {selectedEvent && (
        <div className="fixed inset-y-0 right-0 w-full max-w-md bg-background shadow-lg p-6 overflow-y-auto transition-transform transform duration-300 ease-in-out translate-x-0">
          <Button variant="ghost" size="icon" className="absolute top-4 right-4" onClick={() => setSelectedEvent(null)}>
            <X className="h-4 w-4" />
          </Button>
          <h3 className="text-2xl font-bold mb-4">{selectedEvent.name}</h3>
          <p className="text-sm text-muted-foreground mb-2">Date: {selectedEvent.date}</p>
          <Badge className="mb-4">{selectedEvent.type}</Badge>
          <p className="text-sm">{selectedEvent.description}</p>
        </div>
      )}
    </div>
  )
}

