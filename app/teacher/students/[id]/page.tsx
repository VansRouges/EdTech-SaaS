"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const student = {
    id: 1,
    name: "Alice Johnson",
    grade: "9th",
    class: "Mathematics 101",
    performance: "Excellent",
}

export default function StudentPerformancePage() {
    const [grade, setGrade] = useState("")
    const [notes, setNotes] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send this data to your backend
        console.log("Submitted:", { grade, notes })
    }

    return (
        <Card>
                <CardHeader>
                    <CardTitle>Student Performance: {student.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="grade">Grade</Label>
                            <Select value={grade} onValueChange={setGrade}>
                                <SelectTrigger id="grade">
                                    <SelectValue placeholder="Select a grade" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="A">A</SelectItem>
                                    <SelectItem value="B">B</SelectItem>
                                    <SelectItem value="C">C</SelectItem>
                                    <SelectItem value="D">D</SelectItem>
                                    <SelectItem value="F">F</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="notes">Performance Notes</Label>
                            <Textarea
                                id="notes"
                                placeholder="Enter performance notes here..."
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                            />
                        </div>
                        <Button type="submit">Update Performance</Button>
                    </form>
                </CardContent>
            </Card>
    )
}

