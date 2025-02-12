"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const initialSubjects = [
  { id: 1, name: "Mathematics", code: "MATH101" },
  { id: 2, name: "English", code: "ENG101" },
  { id: 3, name: "Science", code: "SCI101" },
]

export default function SubjectsPage() {
  const [subjects, setSubjects] = useState(initialSubjects)
  const [newSubject, setNewSubject] = useState({ name: "", code: "" })
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

  const handleAddSubject = (e: React.FormEvent) => {
    e.preventDefault()
    const id = subjects.length + 1
    setSubjects([...subjects, { ...newSubject, id }])
    setNewSubject({ name: "", code: "" })
    setIsAddDialogOpen(false)
  }

  const handleRemoveSubject = (id: number) => {
    setSubjects(subjects.filter((s) => s.id !== id))
  }

  return (
    <Card>
    <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Subjects</CardTitle>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogTrigger asChild>
            <Button>Add Subject</Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Add New Subject</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAddSubject} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="name">Subject Name</Label>
                <Input
                id="name"
                value={newSubject.name}
                onChange={(e) => setNewSubject({ ...newSubject, name: e.target.value })}
                required
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="code">Subject Code</Label>
                <Input
                id="code"
                value={newSubject.code}
                onChange={(e) => setNewSubject({ ...newSubject, code: e.target.value })}
                required
                />
            </div>
            <Button type="submit">Add Subject</Button>
            </form>
        </DialogContent>
        </Dialog>
    </CardHeader>
    <CardContent>
        <Table>
        <TableHeader>
            <TableRow>
            <TableHead>Subject Name</TableHead>
            <TableHead>Subject Code</TableHead>
            <TableHead>Action</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {subjects.map((subject) => (
            <TableRow key={subject.id}>
                <TableCell>{subject.name}</TableCell>
                <TableCell>{subject.code}</TableCell>
                <TableCell>
                <Button variant="destructive" onClick={() => handleRemoveSubject(subject.id)}>
                    Remove
                </Button>
                </TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </CardContent>
    </Card>
  )
}

