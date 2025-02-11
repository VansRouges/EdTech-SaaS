"use client"

import { useState } from "react"
import { MoreHorizontal, Pencil, Plus, Trash2, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const classes = [
    {
        id: "1",
        name: "Mathematics 101",
        teacher: "John Smith",
        grade: "9th Grade",
        students: 28,
        schedule: "Mon, Wed, Fri 9:00 AM",
    },
    {
        id: "2",
        name: "English Literature",
        teacher: "Sarah Johnson",
        grade: "10th Grade",
        students: 25,
        schedule: "Tue, Thu 10:30 AM",
    },
    {
        id: "3",
        name: "Physics",
        teacher: "Robert Wilson",
        grade: "11th Grade",
        students: 22,
        schedule: "Mon, Wed 2:00 PM",
    },
]

export default function ClassesPage() {
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    return (
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
                <div className="flex items-center justify-between space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">Classes</h2>
                    <div className="flex items-center space-x-2">
                        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                            <DialogTrigger asChild>
                                <Button>
                                    <Plus className="mr-2 h-4 w-4" />
                                    Add Class
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Add New Class</DialogTitle>
                                    <DialogDescription>Create a new class and assign a teacher.</DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="name">Class Name</Label>
                                        <Input id="name" placeholder="Enter class name" />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="teacher">Teacher</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select teacher" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="john-smith">John Smith</SelectItem>
                                                <SelectItem value="sarah-johnson">Sarah Johnson</SelectItem>
                                                <SelectItem value="robert-wilson">Robert Wilson</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="grade">Grade</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select grade" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="9">9th Grade</SelectItem>
                                                <SelectItem value="10">10th Grade</SelectItem>
                                                <SelectItem value="11">11th Grade</SelectItem>
                                                <SelectItem value="12">12th Grade</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="schedule">Schedule</Label>
                                        <Input id="schedule" placeholder="Enter class schedule" />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                                        Cancel
                                    </Button>
                                    <Button type="submit">Create Class</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Class Name</TableHead>
                                <TableHead>Teacher</TableHead>
                                <TableHead>Grade</TableHead>
                                <TableHead>Students</TableHead>
                                <TableHead>Schedule</TableHead>
                                <TableHead className="w-[70px]"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {classes.map((class_) => (
                                <TableRow key={class_.id}>
                                    <TableCell className="font-medium">{class_.name}</TableCell>
                                    <TableCell>{class_.teacher}</TableCell>
                                    <TableCell>{class_.grade}</TableCell>
                                    <TableCell>{class_.students}</TableCell>
                                    <TableCell>{class_.schedule}</TableCell>
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                    <span className="sr-only">Open menu</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>
                                                    <Users className="mr-2 h-4 w-4" />
                                                    Manage Students
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <Pencil className="mr-2 h-4 w-4" />
                                                    Edit
                                                </DropdownMenuItem>
                                                <DropdownMenuItem className="text-red-600">
                                                    <Trash2 className="mr-2 h-4 w-4" />
                                                    Delete
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
    )
}

