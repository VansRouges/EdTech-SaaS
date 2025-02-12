"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const initialClasses = [
  { id: 1, name: "Class 1A", grade: "1st Grade" },
  { id: 2, name: "Class 2B", grade: "2nd Grade" },
  { id: 3, name: "Class 3C", grade: "3rd Grade" },
]

export default function ClassesPage() {
  const [classes, setClasses] = useState(initialClasses)
  const [newClass, setNewClass] = useState({ name: "", grade: "" })
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

  const handleAddClass = (e: React.FormEvent) => {
    e.preventDefault()
    const id = classes.length + 1
    setClasses([...classes, { ...newClass, id }])
    setNewClass({ name: "", grade: "" })
    setIsAddDialogOpen(false)
  }

  const handleRemoveClass = (id: number) => {
    setClasses(classes.filter((c) => c.id !== id))
  }

  return (
    <Card>
    <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Classes</CardTitle>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogTrigger asChild>
            <Button>Add Class</Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Add New Class</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAddClass} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="name">Class Name</Label>
                <Input
                id="name"
                value={newClass.name}
                onChange={(e) => setNewClass({ ...newClass, name: e.target.value })}
                required
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="grade">Grade</Label>
                <Input
                id="grade"
                value={newClass.grade}
                onChange={(e) => setNewClass({ ...newClass, grade: e.target.value })}
                required
                />
            </div>
            <Button type="submit">Add Class</Button>
            </form>
        </DialogContent>
        </Dialog>
    </CardHeader>
    <CardContent>
        <Table>
        <TableHeader>
            <TableRow>
            <TableHead>Class Name</TableHead>
            <TableHead>Grade</TableHead>
            <TableHead>Action</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {classes.map((cls) => (
            <TableRow key={cls.id}>
                <TableCell>{cls.name}</TableCell>
                <TableCell>{cls.grade}</TableCell>
                <TableCell>
                <Button variant="destructive" onClick={() => handleRemoveClass(cls.id)}>
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

