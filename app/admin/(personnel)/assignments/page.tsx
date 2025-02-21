"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const initialAssignments = [
  {
    id: 1,
    title: "Math Homework",
    teacher: "John Doe",
    class: "10A",
    subject: "Mathematics",
    submitted: 15,
    total: 20,
  },
  { id: 2, title: "English Essay", teacher: "Jane Smith", class: "11B", subject: "English", submitted: 18, total: 22 },
  {
    id: 3,
    title: "Science Project",
    teacher: "Bob Johnson",
    class: "9C",
    subject: "Science",
    submitted: 12,
    total: 25,
  },
]

export default function AssignmentsPage() {
  const [assignments, setAssignments] = useState(initialAssignments)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredAssignments = assignments.filter(
    (assignment) =>
      assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      assignment.teacher.toLowerCase().includes(searchTerm.toLowerCase()) ||
      assignment.class.toLowerCase().includes(searchTerm.toLowerCase()) ||
      assignment.subject.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Card>
    <CardHeader>
        <CardTitle>Assignments</CardTitle>
    </CardHeader>
    <CardContent>
        <div className="flex items-center space-x-2 mb-4">
        <Search className="w-4 h-4 text-gray-500" />
        <Input
            placeholder="Search assignments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
        />
        </div>
        <Table>
        <TableHeader>
            <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Teacher</TableHead>
            <TableHead>Class</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Submitted</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {filteredAssignments.map((assignment) => (
            <TableRow key={assignment.id}>
                <TableCell>{assignment.title}</TableCell>
                <TableCell>{assignment.teacher}</TableCell>
                <TableCell>{assignment.class}</TableCell>
                <TableCell>{assignment.subject}</TableCell>
                <TableCell>{`${assignment.submitted}/${assignment.total}`}</TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </CardContent>
    </Card>
  )
}

