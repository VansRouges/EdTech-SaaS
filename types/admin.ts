export interface User {
    id: string
    name: string
    email: string
    role: "admin" | "teacher" | "parent"
    status: "active" | "inactive"
    createdAt: string
  }
  
  export interface Class {
    id: string
    name: string
    grade: string
    teacherId: string
    studentCount: number
    schedule: string
  }
  
  export interface Event {
    id: string
    title: string
    description: string
    date: string
    type: "academic" | "sports" | "cultural" | "other"
    status: "upcoming" | "ongoing" | "completed"
  }
  
  export interface SchoolStats {
    totalStudents: number
    totalTeachers: number
    totalClasses: number
    averageAttendance: number
    averageGrade: string
  }
  
  