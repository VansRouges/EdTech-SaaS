"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const recipients = [
  { id: 1, name: "John Doe", role: "Teacher", subject: "English" },
  { id: 2, name: "Jane Smith", role: "Teacher", subject: "Science" },
  { id: 3, name: "Alice Johnson", role: "Parent", student: "Bob Johnson" },
  { id: 4, name: "Mike Brown", role: "Parent", student: "Emily Brown" },
]

const messages = [
  { id: 1, from: "John Doe", to: "You", subject: "Staff Meeting", date: "2024-03-15", read: true },
  { id: 2, from: "You", to: "Jane Smith", subject: "Curriculum Update", date: "2024-03-14", read: true },
  { id: 3, from: "Alice Johnson", to: "You", subject: "Bob's Progress", date: "2024-03-13", read: false },
  { id: 4, from: "You", to: "Mike Brown", subject: "Emily's Performance", date: "2024-03-12", read: true },
]

export default function MessagesPage() {
  const [isComposeOpen, setIsComposeOpen] = useState(false)
  const [newMessage, setNewMessage] = useState({ to: "", subject: "", content: "" })

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log("Sending message:", newMessage)
    setNewMessage({ to: "", subject: "", content: "" })
    setIsComposeOpen(false)
  }

  return (
    <Card>
    <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Messages</CardTitle>
        <Dialog open={isComposeOpen} onOpenChange={setIsComposeOpen}>
        <DialogTrigger asChild>
            <Button>Compose Message</Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Compose New Message</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSendMessage} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="recipient">To</Label>
                <Select value={newMessage.to} onValueChange={(value) => setNewMessage({ ...newMessage, to: value })}>
                <SelectTrigger>
                    <SelectValue placeholder="Select recipient" />
                </SelectTrigger>
                <SelectContent>
                    {recipients.map((recipient) => (
                    <SelectItem key={recipient.id} value={recipient.name}>
                        {recipient.name} ({recipient.role})
                    </SelectItem>
                    ))}
                </SelectContent>
                </Select>
            </div>
            <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                id="subject"
                value={newMessage.subject}
                onChange={(e) => setNewMessage({ ...newMessage, subject: e.target.value })}
                required
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="content">Message</Label>
                <Textarea
                id="content"
                value={newMessage.content}
                onChange={(e) => setNewMessage({ ...newMessage, content: e.target.value })}
                required
                />
            </div>
            <Button type="submit">Send Message</Button>
            </form>
        </DialogContent>
        </Dialog>
    </CardHeader>
    <CardContent>
        <Table>
        <TableHeader>
            <TableRow>
            <TableHead>From/To</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {messages.map((message) => (
            <TableRow key={message.id}>
                <TableCell>{message.from === "You" ? message.to : message.from}</TableCell>
                <TableCell>{message.subject}</TableCell>
                <TableCell>{message.date}</TableCell>
                <TableCell>{message.read ? "Read" : "Unread"}</TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </CardContent>
    </Card>
  )
}

