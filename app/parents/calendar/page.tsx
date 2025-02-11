"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"

const events = [
    { id: 1, name: "Parent-Teacher Conference", date: "2024-03-15", type: "school" },
    { id: 2, name: "Math Quiz", date: "2024-03-20", type: "class" },
    { id: 3, name: "Science Fair", date: "2024-03-25", type: "school" },
    { id: 4, name: "English Essay Due", date: "2024-03-28", type: "class" },
    { id: 5, name: "Spring Break Starts", date: "2024-04-01", type: "school" },
]

export default function EventCalendarPage() {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

    const selectedDateEvents = events.filter((event) => event.date === selectedDate?.toISOString().split("T")[0])

    return (
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
                <div className="flex items-center justify-between space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">Event Calendar</h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="col-span-1 lg:col-span-2">
                        <CardHeader>
                            <CardTitle>Calendar</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Calendar
                                mode="single"
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                                className="rounded-md border"
                                components={{
                                    DayContent: ({ date }) => {
                                        const eventsOnDay = events.filter((e) => e.date === date.toISOString().split("T")[0])
                                        return eventsOnDay.length > 0 ? (
                                            <div className="flex items-center justify-center w-full h-full relative">
                                                <span>{date.getDate()}</span>
                                                <Badge variant="secondary" className="absolute bottom-0 right-0 -mb-2 -mr-2">
                                                    {eventsOnDay.length}
                                                </Badge>
                                            </div>
                                        ) : (
                                            date.getDate()
                                        )
                                    },
                                }}
                            />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Events on {selectedDate?.toDateString()}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {selectedDateEvents.length > 0 ? (
                                <ul className="space-y-2">
                                    {selectedDateEvents.map((event) => (
                                        <li key={event.id} className="flex items-center justify-between">
                                            <span>{event.name}</span>
                                            <Badge variant={event.type === "school" ? "default" : "secondary"}>{event.type}</Badge>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No events scheduled for this day.</p>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
    )
}

