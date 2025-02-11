"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const teachers = [
    { id: 1, name: "Ms. Johnson", subject: "Mathematics" },
    { id: 2, name: "Mr. Smith", subject: "Science" },
    { id: 3, name: "Mrs. Davis", subject: "English" },
    { id: 4, name: "Mr. Wilson", subject: "History" },
    { id: 5, name: "Ms. Brown", subject: "Art" },
]

export default function MessagingPage() {
    const [recipient, setRecipient] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send this data to your backend
        console.log("Submitted message:", { recipient, subject, message })
    }

    return (
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
                <div className="flex items-center justify-between space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">Messages</h2>
                </div>
                <Card>
                    <CardHeader>
                        <CardTitle>Send Message</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="recipient">Recipient</Label>
                                <Select value={recipient} onValueChange={setRecipient}>
                                    <SelectTrigger id="recipient">
                                        <SelectValue placeholder="Select a teacher" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {teachers.map((teacher) => (
                                            <SelectItem key={teacher.id} value={teacher.name}>
                                                {teacher.name} ({teacher.subject})
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="subject">Subject</Label>
                                <Input
                                    id="subject"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    placeholder="Enter message subject"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Type your message here..."
                                    rows={5}
                                />
                            </div>
                            <Button type="submit">Send Message</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
    )
}

