"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Search, Plus, Pencil, Trash2 } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

const initialClasses = [
  { id: 1, name: "Class 10A", students: 25 },
  { id: 2, name: "Class 11B", students: 30 },
  { id: 3, name: "Class 9C", students: 28 },
]

const initialStudents = [
  { id: 1, name: "Alice Johnson", class: "Class 10A", age: 15 },
  { id: 2, name: "Bob Smith", class: "Class 10A", age: 16 },
  { id: 3, name: "Charlie Brown", class: "Class 11B", age: 17 },
]

export default function StudentsPage() {
  const router = useRouter()
  const [classes, setClasses] = useState(initialClasses)
  const [students, setStudents] = useState(initialStudents)
  const [selectedClass, setSelectedClass] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [newStudent, setNewStudent] = useState({ name: "", class: "", age: "" })

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedClass ? student.class === selectedClass : true),
  )

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault()
    const id = students.length + 1
    setStudents([...students, { ...newStudent, id, age: Number.parseInt(newStudent.age) }])
    setNewStudent({ name: "", class: "", age: "" })
    setIsAddDialogOpen(false)
  }

  const handleRemoveStudent = (id: number) => {
    setStudents(students.filter((student) => student.id !== id))
  }

  const handleEditStudent = (id: number) => {
    router.push(`/admin/students/${id}`)
  }

  return (
    <>
      {selectedClass ? (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>{selectedClass} Students</CardTitle>
            <div className="space-x-2">
              <Button onClick={() => setSelectedClass(null)}>Back to Classes</Button>
              <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Student
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Student</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleAddStudent} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={newStudent.name}
                        onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="class">Class</Label>
                      <Input id="class" value={selectedClass} readOnly />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Input
                        id="age"
                        type="number"
                        value={newStudent.age}
                        onChange={(e) => setNewStudent({ ...newStudent, age: e.target.value })}
                        required
                      />
                    </div>
                    <Button type="submit">Add Student</Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2 mb-4">
              <Search className="w-4 h-4 text-gray-500" />
              <Input
                placeholder="Search students..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-sm"
              />
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Age</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStudents.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.age}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" onClick={() => handleEditStudent(student.id)}>
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button variant="destructive" size="sm" onClick={() => handleRemoveStudent(student.id)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Classes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {classes.map((cls) => (
                <Card key={cls.id} className="cursor-pointer" onClick={() => setSelectedClass(cls.name)}>
                  <CardHeader>
                    <CardTitle>{cls.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Number of students: {cls.students}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}

