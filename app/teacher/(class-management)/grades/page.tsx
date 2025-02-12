"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const classes = [
  { id: 1, name: "Mathematics 101" },
  { id: 2, name: "Calculus" },
  { id: 3, name: "Geometry" },
]

const students = [
  { id: 1, name: "Alice Johnson", class: "Mathematics 101", grade: "A" },
  { id: 2, name: "Bob Smith", class: "Mathematics 101", grade: "B" },
  { id: 3, name: "Charlie Brown", class: "Calculus", grade: "B+" },
  { id: 4, name: "David Lee", class: "Calculus", grade: "A-" },
  { id: 5, name: "Emma Davis", class: "Geometry", grade: "A" },
]

export default function GradesPage() {
  const [selectedClass, setSelectedClass] = useState("")
  const [isGradeDialogOpen, setIsGradeDialogOpen] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState<(typeof students)[0] | null>(null)
  const [newGrade, setNewGrade] = useState("")

  const filteredStudents = students.filter((student) => student.class === selectedClass)

  const handleGradeSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedStudent) {
      // Here you would typically send this data to your backend
      console.log(`Updating grade for ${selectedStudent.name} to ${newGrade}`)
      setIsGradeDialogOpen(false)
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Grades & Reports</h1>
      <Card>
        <CardHeader>
          <CardTitle>Student Grades</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
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
                    <TableHead>Grade</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredStudents.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>{student.name}</TableCell>
                      <TableCell>{student.grade}</TableCell>
                      <TableCell>
                        <Button
                          onClick={() => {
                            setSelectedStudent(student)
                            setNewGrade(student.grade)
                            setIsGradeDialogOpen(true)
                          }}
                        >
                          Update Grade
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </div>
        </CardContent>
      </Card>

      <Dialog open={isGradeDialogOpen} onOpenChange={setIsGradeDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Grade for {selectedStudent?.name}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleGradeSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="grade">New Grade</Label>
              <Input
                id="grade"
                value={newGrade}
                onChange={(e) => setNewGrade(e.target.value)}
                placeholder="Enter new grade"
              />
            </div>
            <Button type="submit">Update Grade</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

