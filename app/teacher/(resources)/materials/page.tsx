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

const initialMaterials = [
  { id: 1, title: "Algebra Basics", class: "Mathematics 101", link: "https://example.com/algebra-basics" },
  { id: 2, title: "Limits and Continuity", class: "Calculus", link: "https://example.com/limits-continuity" },
  { id: 3, title: "Triangles and Congruence", class: "Geometry", link: "https://example.com/triangles-congruence" },
]

export default function LearningMaterialsPage() {
  const [materials, setMaterials] = useState(initialMaterials)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [newMaterial, setNewMaterial] = useState({ title: "", class: "", link: "" })

  const handleAddMaterial = (e: React.FormEvent) => {
    e.preventDefault()
    const id = materials.length + 1
    setMaterials([...materials, { ...newMaterial, id }])
    setNewMaterial({ title: "", class: "", link: "" })
    setIsAddDialogOpen(false)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Learning Materials</h1>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>Add Material</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Learning Material</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAddMaterial} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={newMaterial.title}
                  onChange={(e) => setNewMaterial({ ...newMaterial, title: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="class">Class</Label>
                <Select
                  value={newMaterial.class}
                  onValueChange={(value) => setNewMaterial({ ...newMaterial, class: value })}
                >
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
                <Label htmlFor="link">Link</Label>
                <Input
                  id="link"
                  type="url"
                  value={newMaterial.link}
                  onChange={(e) => setNewMaterial({ ...newMaterial, link: e.target.value })}
                  required
                />
              </div>
              <Button type="submit">Add Material</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Materials</TabsTrigger>
          {classes.map((cls) => (
            <TabsTrigger key={cls.id} value={cls.name}>
              {cls.name}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="all">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {materials.map((material) => (
              <Card key={material.id}>
                <CardHeader>
                  <CardTitle>{material.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Class: {material.class}</p>
                  <a
                    href={material.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View Material
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        {classes.map((cls) => (
          <TabsContent key={cls.id} value={cls.name}>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {materials
                .filter((material) => material.class === cls.name)
                .map((material) => (
                  <Card key={material.id}>
                    <CardHeader>
                      <CardTitle>{material.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <a
                        href={material.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        View Material
                      </a>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

