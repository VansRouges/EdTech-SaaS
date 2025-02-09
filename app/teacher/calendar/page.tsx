"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const classes = [
    { id: 1, name: "Mathematics 101" },
    { id: 2, name: "Algebra II" },
    { id: 3, name: "Calculus" },
]

export default function CalendarPage() {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [eventTitle, setEventTitle] = useState("")
    const [eventClass, setEventClass] = useState("")
    const [eventDescription, setEventDescription] = useState("")

    const handleAddEvent = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send this data to your backend
        console.log("Added event:", { date, eventTitle, eventClass, eventDescription })
        setIsDialogOpen(false)
    }

    return (
        <Card>
                <CardHeader>
                    <CardTitle>Event Calendar</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-between">
                    <div className="w-1/2">
                        <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
                    </div>
                    <div className="w-1/2 pl-4">
                        <h3 className="text-lg font-semibold mb-2">Selected Date: {date?.toDateString()}</h3>
                        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                            <DialogTrigger asChild>
                                <Button>Add Event</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Add New Event</DialogTitle>
                                    <DialogDescription>
                                        Create a new event for the selected date. Click save when you're done.
                                    </DialogDescription>
                                </DialogHeader>
                                <form onSubmit={handleAddEvent}>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="event-title" className="text-right">
                                                Title
                                            </Label>
                                            <Input
                                                id="event-title"
                                                value={eventTitle}
                                                onChange={(e) => setEventTitle(e.target.value)}
                                                className="col-span-3"
                                            />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="event-class" className="text-right">
                                                Class
                                            </Label>
                                            <Select value={eventClass} onValueChange={setEventClass}>
                                                <SelectTrigger id="event-class" className="col-span-3">
                                                    <SelectValue placeholder="Select a class" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {classes.map((cls) => (
                                                        <SelectItem key={cls.id} value={cls.name}>
                                                            {cls.name}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="event-description" className="text-right">
                                                Description
                                            </Label>
                                            <Textarea
                                                id="event-description"
                                                value={eventDescription}
                                                onChange={(e) => setEventDescription(e.target.value)}
                                                className="col-span-3"
                                            />
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button type="submit">Save Event</Button>
                                    </DialogFooter>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </div>
                </CardContent>
            </Card>
    )
}

