import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const teachers = [
  {
    id: 1,
    name: "Dr. Jane Smith",
    subject: "Mathematics",
    phone: "(123) 456-7890",
    email: "jane.smith@school.edu",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Prof. John Doe",
    subject: "Science",
    phone: "(234) 567-8901",
    email: "john.doe@school.edu",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Ms. Emily Brown",
    subject: "English Literature",
    phone: "(345) 678-9012",
    email: "emily.brown@school.edu",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "Mr. Michael Johnson",
    subject: "History",
    phone: "(456) 789-0123",
    email: "michael.johnson@school.edu",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 5,
    name: "Mrs. Sarah Davis",
    subject: "Art",
    phone: "(567) 890-1234",
    email: "sarah.davis@school.edu",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function TeachersPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
    <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Teachers</h2>
    </div>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {teachers.map((teacher) => (
        <Card key={teacher.id}>
            <CardHeader>
            <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                <AvatarImage src={teacher.image} alt={teacher.name} />
                <AvatarFallback>
                    {teacher.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
                </Avatar>
                <div>
                <CardTitle>{teacher.name}</CardTitle>
                <Badge variant="secondary">{teacher.subject}</Badge>
                </div>
            </div>
            </CardHeader>
            <CardContent>
            <div className="space-y-2">
                <p className="text-sm">
                <span className="font-semibold">Phone:</span> {teacher.phone}
                </p>
                <p className="text-sm">
                <span className="font-semibold">Email:</span> {teacher.email}
                </p>
            </div>
            </CardContent>
        </Card>
        ))}
    </div>
    </div>
  )
}

