"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const exams = [
  { id: 1, name: "Mathematics Midterm", subject: "Mathematics", averageGrade: 85 },
  { id: 2, name: "English Final", subject: "English", averageGrade: 78 },
  { id: 3, name: "Science Quiz", subject: "Science", averageGrade: 92 },
]

const students = [
  { id: 1, name: "Alice Johnson", grades: { "Mathematics Midterm": 90, "English Final": 85, "Science Quiz": 95 } },
  { id: 2, name: "Bob Smith", grades: { "Mathematics Midterm": 80, "English Final": 75, "Science Quiz": 88 } },
  { id: 3, name: "Charlie Brown", grades: { "Mathematics Midterm": 85, "English Final": 74, "Science Quiz": 93 } },
]

export default function ExamsAndGradesPage() {
  const [selectedExam, setSelectedExam] = useState<string | null>(null)

  return (
    <div>
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Exams Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Exam Name</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Average Grade</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {exams.map((exam) => (
                <TableRow key={exam.id}>
                  <TableCell>{exam.name}</TableCell>
                  <TableCell>{exam.subject}</TableCell>
                  <TableCell>{exam.averageGrade}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Student Grades</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Select onValueChange={setSelectedExam}>
              <SelectTrigger>
                <SelectValue placeholder="Select an exam" />
              </SelectTrigger>
              <SelectContent>
                {exams.map((exam) => (
                  <SelectItem key={exam.id} value={exam.name}>
                    {exam.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {selectedExam && (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student Name</TableHead>
                  <TableHead>Grade</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.grades[selectedExam as keyof typeof student.grades]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

