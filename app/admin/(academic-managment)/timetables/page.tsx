"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const initialTimetables = [
  { id: 1, class: "Class 1A", day: "Monday", time: "09:00 AM", subject: "Mathematics" },
  { id: 2, class: "Class 1A", day: "Monday", time: "10:00 AM", subject: "English" },
  { id: 3, class: "Class 2B", day: "Tuesday", time: "09:00 AM", subject: "Science" },
]

const classes = ["Class 1A", "Class 2B", "Class 3C"]
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
const subjects = ["Mathematics", "English", "Science"]

export default function TimetablesPage() {
  const [timetables, setTimetables] = useState(initialTimetables)
  const [newTimetable, setNewTimetable] = useState({ class: "", day: "", time: "", subject: "" })
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

  const handleAddTimetable = (e: React.FormEvent) => {
    e.preventDefault()
    const id = timetables.length + 1
    setTimetables([...timetables, { ...newTimetable, id }])
    setNewTimetable({ class: "", day: "", time: "", subject: "" })
    setIsAddDialogOpen(false)
  }

  return (
    <Card>
    <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Timetables</CardTitle>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogTrigger asChild>
            <Button>Add Timetable Entry</Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Add New Timetable Entry</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAddTimetable} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="class">Class</Label>
                <Select
                value={newTimetable.class}
                onValueChange={(value) => setNewTimetable({ ...newTimetable, class: value })}
                >
                <SelectTrigger>
                    <SelectValue placeholder="Select a class" />
                </SelectTrigger>
                <SelectContent>
                    {classes.map((cls) => (
                    <SelectItem key={cls} value={cls}>
                        {cls}
                    </SelectItem>
                    ))}
                </SelectContent>
                </Select>
            </div>
            <div className="space-y-2">
                <Label htmlFor="day">Day</Label>
                <Select
                value={newTimetable.day}
                onValueChange={(value) => setNewTimetable({ ...newTimetable, day: value })}
                >
                <SelectTrigger>
                    <SelectValue placeholder="Select a day" />
                </SelectTrigger>
                <SelectContent>
                    {days.map((day) => (
                    <SelectItem key={day} value={day}>
                        {day}
                    </SelectItem>
                    ))}
                </SelectContent>
                </Select>
            </div>
            <div className="space-y-2">
                <Label htmlFor="time">Time</Label>
                <Input
                id="time"
                type="time"
                value={newTimetable.time}
                onChange={(e) => setNewTimetable({ ...newTimetable, time: e.target.value })}
                required
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select
                value={newTimetable.subject}
                onValueChange={(value) => setNewTimetable({ ...newTimetable, subject: value })}
                >
                <SelectTrigger>
                    <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                    {subjects.map((subject) => (
                    <SelectItem key={subject} value={subject}>
                        {subject}
                    </SelectItem>
                    ))}
                </SelectContent>
                </Select>
            </div>
            <Button type="submit">Add Timetable Entry</Button>
            </form>
        </DialogContent>
        </Dialog>
    </CardHeader>
    <CardContent>
        <Table>
        <TableHeader>
            <TableRow>
            <TableHead>Class</TableHead>
            <TableHead>Day</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Subject</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {timetables.map((timetable) => (
            <TableRow key={timetable.id}>
                <TableCell>{timetable.class}</TableCell>
                <TableCell>{timetable.day}</TableCell>
                <TableCell>{timetable.time}</TableCell>
                <TableCell>{timetable.subject}</TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </CardContent>
    </Card>
  )
}

