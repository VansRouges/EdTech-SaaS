"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Student {
  id: number
  name: string
  class: string
  age: number
  subjects: { name: string; grade: string }[]
  paymentHistory: { date: string; amount: number; status: string }[]
}

const mockStudentData: Student = {
  id: 1,
  name: "Alice Johnson",
  class: "Class 10A",
  age: 15,
  subjects: [
    { name: "Mathematics", grade: "A" },
    { name: "English", grade: "B+" },
    { name: "Science", grade: "A-" },
  ],
  paymentHistory: [
    { date: "2023-01-15", amount: 500, status: "Paid" },
    { date: "2023-02-15", amount: 500, status: "Paid" },
    { date: "2023-03-15", amount: 500, status: "Pending" },
  ],
}

export default function StudentProfilePage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [student, setStudent] = useState<Student | null>(null)

  useEffect(() => {
    // In a real application, you would fetch the student data from an API
    // For this example, we'll use the mock data
    setStudent(mockStudentData)
  }, [])

  if (!student) {
    return <div>Loading...</div>
  }

  return (
    <Card>
    <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Student Profile</CardTitle>
        <Button onClick={() => router.back()}>Back to Students</Button>
    </CardHeader>
    <CardContent>
        <div className="flex items-center space-x-4 mb-6">
        <Avatar className="w-20 h-20">
            <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${student.name}`} />
            <AvatarFallback>
            {student.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
        </Avatar>
        <div>
            <h2 className="text-2xl font-bold">{student.name}</h2>
            <p className="text-gray-500">Class: {student.class}</p>
            <p className="text-gray-500">Age: {student.age}</p>
        </div>
        </div>

        <div className="space-y-6">
        <div>
            <h3 className="text-xl font-semibold mb-2">Subjects and Grades</h3>
            <Table>
            <TableHeader>
                <TableRow>
                <TableHead>Subject</TableHead>
                <TableHead>Grade</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {student.subjects.map((subject, index) => (
                <TableRow key={index}>
                    <TableCell>{subject.name}</TableCell>
                    <TableCell>{subject.grade}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </div>

        <div>
            <h3 className="text-xl font-semibold mb-2">Payment History</h3>
            <Table>
            <TableHeader>
                <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {student.paymentHistory.map((payment, index) => (
                <TableRow key={index}>
                    <TableCell>{payment.date}</TableCell>
                    <TableCell>${payment.amount}</TableCell>
                    <TableCell>{payment.status}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </div>
        </div>
    </CardContent>
    </Card>
  )
}

