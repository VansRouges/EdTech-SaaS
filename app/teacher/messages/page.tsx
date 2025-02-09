"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const parents = [
    { id: 1, name: "John Doe", student: "Alice Johnson" },
    { id: 2, name: "Jane Smith", student: "Bob Smith" },
    { id: 3, name: "Mike Brown", student: "Charlie Brown" },
    { id: 4, name: "Sarah Ross", student: "Diana Ross" },
    { id: 5, name: "Tom Norton", student: "Edward Norton" },
    { id: 6, name: "Lisa Apple", student: "Fiona Apple" },
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
                                    <SelectValue placeholder="Select a parent" />
                                </SelectTrigger>
                                <SelectContent>
                                    {parents.map((parent) => (
                                        <SelectItem key={parent.id} value={parent.name}>
                                            {parent.name} (Parent of {parent.student})
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
    )
}

