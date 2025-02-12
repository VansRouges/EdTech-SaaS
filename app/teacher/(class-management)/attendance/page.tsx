"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"

const classes = [
    { id: 1, name: "Mathematics 101" },
    { id: 2, name: "Algebra II" },
    { id: 3, name: "Calculus" },
]

const students = [
    { id: 1, name: "Alice Johnson", class: "Mathematics 101" },
    { id: 2, name: "Bob Smith", class: "Mathematics 101" },
    { id: 3, name: "Charlie Brown", class: "Algebra II" },
    { id: 4, name: "Diana Ross", class: "Algebra II" },
    { id: 5, name: "Edward Norton", class: "Calculus" },
    { id: 6, name: "Fiona Apple", class: "Calculus" },
]

export default function AttendancePage() {
    const [selectedClass, setSelectedClass] = useState("")
    const [attendance, setAttendance] = useState<Record<number, boolean>>({})

    const handleAttendanceChange = (studentId: number, isPresent: boolean) => {
        setAttendance((prev) => ({ ...prev, [studentId]: isPresent }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send this data to your backend
        console.log("Submitted attendance:", attendance)
    }

    const filteredStudents = students.filter((student) => student.class === selectedClass)

    return (
        <Card>
                <CardHeader>
                    <CardTitle>Attendance Management</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="class">Select Class</Label>
                            <Select value={selectedClass} onValueChange={setSelectedClass}>
                                <SelectTrigger id="class">
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
                        {selectedClass && (
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Student Name</TableHead>
                                        <TableHead>Present</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {filteredStudents.map((student) => (
                                        <TableRow key={student.id}>
                                            <TableCell>{student.name}</TableCell>
                                            <TableCell>
                                                <Checkbox
                                                    checked={attendance[student.id] || false}
                                                    onCheckedChange={(checked) => handleAttendanceChange(student.id, checked as boolean)}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        )}
                        <Button type="submit">Submit Attendance</Button>
                    </form>
                </CardContent>
            </Card>
    )
}
