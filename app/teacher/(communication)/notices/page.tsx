"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

const notices = [
  {
    id: 1,
    title: "School Closure",
    date: "2024-03-15",
    priority: "high",
    read: false,
    content: "School will be closed on March 20th due to maintenance.",
  },
  {
    id: 2,
    title: "Parent-Teacher Meeting",
    date: "2024-03-18",
    priority: "medium",
    read: true,
    content: "Parent-Teacher meetings scheduled for next week.",
  },
  {
    id: 3,
    title: "New Curriculum Announcement",
    date: "2024-03-20",
    priority: "low",
    read: false,
    content: "New curriculum to be implemented from next semester.",
  },
  {
    id: 4,
    title: "Sports Day Postponed",
    date: "2024-03-22",
    priority: "medium",
    read: false,
    content: "Annual Sports Day has been postponed to next month.",
  },
  {
    id: 5,
    title: "Teacher Training Workshop",
    date: "2024-03-25",
    priority: "high",
    read: true,
    content: "Mandatory training workshop for all teachers on March 30th.",
  },
]

export default function NoticesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [priorityFilter, setPriorityFilter] = useState("all")
  const [readFilter, setReadFilter] = useState("all")

  const filteredNotices = notices.filter((notice) => {
    const matchesSearch =
      notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notice.content.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPriority = priorityFilter === "all" || notice.priority === priorityFilter
    const matchesRead =
      readFilter === "all" || (readFilter === "read" && notice.read) || (readFilter === "unread" && !notice.read)
    return matchesSearch && matchesPriority && matchesRead
  })

  return (
    <Card>
    <CardHeader>
        <CardTitle>Notices</CardTitle>
    </CardHeader>
    <CardContent>
        <div className="flex flex-col md:flex-row gap-4 py-4">
        <Input
            placeholder="Search notices..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="md:max-w-sm"
        />
        <Select value={priorityFilter} onValueChange={setPriorityFilter}>
            <SelectTrigger className="md:w-[180px]">
            <SelectValue placeholder="Filter by priority" />
            </SelectTrigger>
            <SelectContent>
            <SelectItem value="all">All Priorities</SelectItem>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="low">Low</SelectItem>
            </SelectContent>
        </Select>
        <Select value={readFilter} onValueChange={setReadFilter}>
            <SelectTrigger className="md:w-[180px]">
            <SelectValue placeholder="Filter by read status" />
            </SelectTrigger>
            <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="read">Read</SelectItem>
            <SelectItem value="unread">Unread</SelectItem>
            </SelectContent>
        </Select>
        </div>
        <div className="space-y-4">
        {filteredNotices.map((notice) => (
            <Card key={notice.id}>
            <CardHeader>
                <div className="flex justify-between items-center">
                <CardTitle>{notice.title}</CardTitle>
                <Badge
                    variant={
                    notice.priority === "high"
                        ? "destructive"
                        : notice.priority === "medium"
                        ? "default"
                        : "secondary"
                    }
                >
                    {notice.priority}
                </Badge>
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground mb-2">Date: {notice.date}</p>
                <p>{notice.content}</p>
                {!notice.read && (
                <Badge variant="outline" className="mt-2">
                    Unread
                </Badge>
                )}
            </CardContent>
            </Card>
        ))}
        </div>
    </CardContent>
    </Card>
  )
}

