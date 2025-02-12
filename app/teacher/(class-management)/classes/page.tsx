"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const classes = [
  {
    id: 1,
    name: "Mathematics 101",
    topic: "Introduction to Algebra",
    students: [
      { id: 1, name: "Alice Johnson" },
      { id: 2, name: "Bob Smith" },
      { id: 3, name: "Charlie Brown" },
    ],
    period: "current",
  },
  {
    id: 2,
    name: "Calculus",
    topic: "Limits and Continuity",
    students: [
      { id: 4, name: "David Lee" },
      { id: 5, name: "Emma Davis" },
      { id: 6, name: "Frank Wilson" },
    ],
    period: "current",
  },
  {
    id: 3,
    name: "Geometry",
    topic: "Triangles and Congruence",
    students: [
      { id: 7, name: "Grace Taylor" },
      { id: 8, name: "Henry Martinez" },
      { id: 9, name: "Ivy Chen" },
    ],
    period: "upcoming",
  },
  {
    id: 4,
    name: "Statistics",
    topic: "Probability Distributions",
    students: [
      { id: 10, name: "Jack Anderson" },
      { id: 11, name: "Karen Lopez" },
      { id: 12, name: "Liam Wright" },
    ],
    period: "previous",
  },
]

export default function MyClassesPage() {
  const [selectedClass, setSelectedClass] = useState<typeof classes[0] | null>(null)

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Classes</h1>
      <Tabs defaultValue="current">
        <TabsList>
          <TabsTrigger value="current">Current Classes</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming Classes</TabsTrigger>
          <TabsTrigger value="previous">Previous Classes</TabsTrigger>
        </TabsList>
        {["current", "upcoming", "previous"].map((period) => (
          <TabsContent key={period} value={period}>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {classes
                .filter((c) => c.period === period)
                .map((class_) => (
                  <Card key={class_.id} className="cursor-pointer" onClick={() => setSelectedClass(class_)}>
                    <CardHeader>
                      <CardTitle>{class_.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">Topic: {class_.topic}</p>
                      <p className="text-sm">Students: {class_.students.length}</p>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <Dialog open={!!selectedClass} onOpenChange={() => setSelectedClass(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedClass?.name}</DialogTitle>
          </DialogHeader>
          <div>
            <h3 className="font-semibold mb-2">Topic: {selectedClass?.topic}</h3>
            <h4 className="font-semibold mb-2">Students:</h4>
            <ul className="list-disc pl-5">
              {selectedClass?.students.map((student) => (
                <li key={student.id}>{student.name}</li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
