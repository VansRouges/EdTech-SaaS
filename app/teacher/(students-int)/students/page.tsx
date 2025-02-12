"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search } from "lucide-react"

const students = [
  { id: 1, name: "Alice Johnson", grade: "9th", class: "Mathematics 101", performance: "A" },
  { id: 2, name: "Bob Smith", grade: "9th", class: "Mathematics 101", performance: "B" },
  { id: 3, name: "Charlie Brown", grade: "10th", class: "Algebra II", performance: "B+" },
  { id: 4, name: "Diana Ross", grade: "10th", class: "Algebra II", performance: "A-" },
  { id: 5, name: "Edward Norton", grade: "12th", class: "Calculus", performance: "A" },
  { id: 6, name: "Fiona Apple", grade: "12th", class: "Calculus", performance: "B-" },
]

export default function StudentListPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.class.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Card>
    <CardHeader>
        <CardTitle>Student List</CardTitle>
    </CardHeader>
    <CardContent>
        <div className="flex items-center py-4">
        <Input
            placeholder="Search students..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
        />
        <Search className="ml-2 h-4 w-4 text-gray-500" />
        </div>
        <Table>
        <TableHeader>
            <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Grade</TableHead>
            <TableHead>Class</TableHead>
            <TableHead>Performance</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {filteredStudents.map((student) => (
            <TableRow key={student.id}>
                <TableCell className="font-medium">{student.name}</TableCell>
                <TableCell>{student.grade}</TableCell>
                <TableCell>{student.class}</TableCell>
                <TableCell>{student.performance}</TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </CardContent>
    </Card>
  )
}

