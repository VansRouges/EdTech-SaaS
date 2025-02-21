"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Search, Trash2, Plus } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

const initialStaff = [
  { id: 1, name: "Alice Johnson", position: "Administrator", email: "alice.johnson@example.com" },
  { id: 2, name: "Charlie Brown", position: "Librarian", email: "charlie.brown@example.com" },
  { id: 3, name: "Diana Ross", position: "Counselor", email: "diana.ross@example.com" },
]

export default function StaffPage() {
  const [staff, setStaff] = useState(initialStaff)
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [newStaff, setNewStaff] = useState({ name: "", position: "", email: "" })

  const filteredStaff = staff.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.position.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleRemoveStaff = (id: number) => {
    setStaff(staff.filter((member) => member.id !== id))
  }

  const handleAddStaff = (e: React.FormEvent) => {
    e.preventDefault()
    const id = staff.length + 1
    setStaff([...staff, { ...newStaff, id }])
    setNewStaff({ name: "", position: "", email: "" })
    setIsAddDialogOpen(false)
  }

  return (
    <Card>
    <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Staff</CardTitle>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogTrigger asChild>
            <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Staff
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Add New Staff Member</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAddStaff} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                id="name"
                value={newStaff.name}
                onChange={(e) => setNewStaff({ ...newStaff, name: e.target.value })}
                required
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="position">Position</Label>
                <Input
                id="position"
                value={newStaff.position}
                onChange={(e) => setNewStaff({ ...newStaff, position: e.target.value })}
                required
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                id="email"
                type="email"
                value={newStaff.email}
                onChange={(e) => setNewStaff({ ...newStaff, email: e.target.value })}
                required
                />
            </div>
            <Button type="submit">Add Staff Member</Button>
            </form>
        </DialogContent>
        </Dialog>
    </CardHeader>
    <CardContent>
        <div className="flex items-center space-x-2 mb-4">
        <Search className="w-4 h-4 text-gray-500" />
        <Input
            placeholder="Search staff..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
        />
        </div>
        <Table>
        <TableHeader>
            <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Action</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {filteredStaff.map((member) => (
            <TableRow key={member.id}>
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.position}</TableCell>
                <TableCell>{member.email}</TableCell>
                <TableCell>
                <Button variant="destructive" size="sm" onClick={() => handleRemoveStaff(member.id)}>
                    <Trash2 className="w-4 h-4" />
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

