"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const assignments = [
  {
    id: 1,
    title: "Algebra Basics",
    class: "Mathematics 101",
    dueDate: "2024-03-20",
    submissions: [
      { id: 1, studentName: "Alice Johnson", submitted: true },
      { id: 2, studentName: "Bob Smith", submitted: true },
      { id: 3, studentName: "Charlie Brown", submitted: false },
    ],
  },
  {
    id: 2,
    title: "Limits and Continuity",
    class: "Calculus",
    dueDate: "2024-03-25",
    submissions: [
      { id: 4, studentName: "David Lee", submitted: true },
      { id: 5, studentName: "Emma Davis", submitted: false },
      { id: 6, studentName: "Frank Wilson", submitted: true },
    ],
  },
]

export default function AssignmentsPage() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [selectedAssignment, setSelectedAssignment] = useState<typeof assignments[0] | null>(null)

  const handleCreateAssignment = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log("Creating new assignment")
    setIsCreateDialogOpen(false)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Assignments</h1>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>Create Assignment</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Assignment</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleCreateAssignment} className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input id="title" required />
              </div>
              <div>
                <Label htmlFor="class">Class</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a class" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="math101">Mathematics 101</SelectItem>
                    <SelectItem value="calculus">Calculus</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="dueDate">Due Date</Label>
                <Input id="dueDate" type="date" required />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" required />
              </div>
              <Button type="submit">Create Assignment</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {assignments.map((assignment) => (
          <Card key={assignment.id} className="cursor-pointer" onClick={() => setSelectedAssignment(assignment)}>
            <CardHeader>
              <CardTitle>{assignment.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Class: {assignment.class}</p>
              <p className="text-sm text-muted-foreground mb-2">Due Date: {assignment.dueDate}</p>
              <p className="text-sm">
                Submissions: {assignment.submissions.filter((s) => s.submitted).length} /{" "}
                {assignment.submissions.length}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedAssignment} onOpenChange={() => setSelectedAssignment(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedAssignment?.title}</DialogTitle>
          </DialogHeader>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Class: {selectedAssignment?.class}</p>
            <p className="text-sm text-muted-foreground mb-4">Due Date: {selectedAssignment?.dueDate}</p>
            <h4 className="font-semibold mb-2">Submissions:</h4>
            <ul className="space-y-2">
              {selectedAssignment?.submissions.map((submission) => (
                <li key={submission.id} className="flex justify-between items-center">
                  <span>{submission.studentName}</span>
                  <span className={submission.submitted ? "text-green-500" : "text-red-500"}>
                    {submission.submitted ? "Submitted" : "Not Submitted"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
