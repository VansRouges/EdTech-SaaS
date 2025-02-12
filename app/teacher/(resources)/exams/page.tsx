"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const classes = [
  { id: 1, name: "Mathematics 101" },
  { id: 2, name: "Calculus" },
  { id: 3, name: "Geometry" },
]

const initialExams = [
  { id: 1, title: "Midterm Exam", class: "Mathematics 101", date: "2024-04-15" },
  { id: 2, title: "Final Exam", class: "Calculus", date: "2024-06-01" },
]

export default function ExamPreparationPage() {
  const [exams, setExams] = useState(initialExams)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [newExam, setNewExam] = useState({ title: "", class: "", date: "" })

  const handleAddExam = (e: React.FormEvent) => {
    e.preventDefault()
    const id = exams.length + 1
    setExams([...exams, { ...newExam, id }])
    setNewExam({ title: "", class: "", date: "" })
    setIsAddDialogOpen(false)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Exam Preparation</h1>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>Create Exam</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Exam</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAddExam} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Exam Title</Label>
                <Input
                  id="title"
                  value={newExam.title}
                  onChange={(e) => setNewExam({ ...newExam, title: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="class">Class</Label>
                <Select value={newExam.class} onValueChange={(value) => setNewExam({ ...newExam, class: value })}>
                  <SelectTrigger>
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
              <div className="space-y-2">
                <Label htmlFor="date">Exam Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={newExam.date}
                  onChange={(e) => setNewExam({ ...newExam, date: e.target.value })}
                  required
                />
              </div>
              <Button type="submit">Create Exam</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Exams</TabsTrigger>
          {classes.map((cls) => (
            <TabsTrigger key={cls.id} value={cls.name}>
              {cls.name}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="all">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {exams.map((exam) => (
              <Card key={exam.id}>
                <CardHeader>
                  <CardTitle>{exam.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Class: {exam.class}</p>
                  <p className="text-sm text-muted-foreground">Date: {exam.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        {classes.map((cls) => (
          <TabsContent key={cls.id} value={cls.name}>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {exams
                .filter((exam) => exam.class === cls.name)
                .map((exam) => (
                  <Card key={exam.id}>
                    <CardHeader>
                      <CardTitle>{exam.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Date: {exam.date}</p>
                    </CardContent>
                  </Card>
                ))}
              {exams.filter((exam) => exam.class === cls.name).length === 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>No Exams Set</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">No exams have been set for this class yet.</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

