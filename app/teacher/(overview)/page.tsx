import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MessageSquare, Users } from "lucide-react"

export default function TeacherDashboard() {
    const assignedClasses = [
        { id: 1, name: "Mathematics 101", grade: "9th Grade", students: 28 },
        { id: 2, name: "Algebra II", grade: "10th Grade", students: 25 },
        { id: 3, name: "Calculus", grade: "12th Grade", students: 22 },
    ]

    const upcomingEvents = [
        { id: 1, name: "Math Quiz", date: "2024-03-15", class: "Mathematics 101" },
        { id: 2, name: "Parent-Teacher Meeting", date: "2024-03-20", class: "All Classes" },
        { id: 3, name: "End of Term Exam", date: "2024-03-25", class: "Calculus" },
    ]

    const recentMessages = [
        { id: 1, from: "Jane Doe", subject: "Homework Question", date: "2024-03-10" },
        { id: 2, from: "John Smith", subject: "Absence Notification", date: "2024-03-09" },
        { id: 3, from: "Emily Brown", subject: "Extra Credit Inquiry", date: "2024-03-08" },
    ]

    return (
        <div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{assignedClasses.reduce((sum, c) => sum + c.students, 0)}</div>
                        <p className="text-xs text-muted-foreground">across all classes</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Assigned Classes</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{assignedClasses.length}</div>
                        <p className="text-xs text-muted-foreground">active classes</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{upcomingEvents.length}</div>
                        <p className="text-xs text-muted-foreground">in the next 30 days</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Unread Messages</CardTitle>
                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{recentMessages.length}</div>
                        <p className="text-xs text-muted-foreground">from parents</p>
                    </CardContent>
                </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Assigned Classes</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {assignedClasses.map((cls) => (
                                <div key={cls.id} className="flex items-center">
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none">{cls.name}</p>
                                        <p className="text-sm text-muted-foreground">{cls.grade}</p>
                                    </div>
                                    <div className="ml-auto font-medium">{cls.students} students</div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Upcoming Events</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {upcomingEvents.map((event) => (
                                <div key={event.id} className="flex items-center">
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none">{event.name}</p>
                                        <p className="text-sm text-muted-foreground">{event.date}</p>
                                    </div>
                                    <Badge variant="outline" className="ml-auto">
                                        {event.class}
                                    </Badge>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
            <Card className="mt-4">
                <CardHeader>
                    <CardTitle>Recent Messages</CardTitle>
                    <CardDescription>Latest communications from parents</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {recentMessages.map((message) => (
                            <div key={message.id} className="flex items-center">
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none">{message.from}</p>
                                    <p className="text-sm text-muted-foreground">{message.subject}</p>
                                </div>
                                <div className="ml-auto text-sm text-muted-foreground">{message.date}</div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

