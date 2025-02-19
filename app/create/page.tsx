"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { School, UserPlus } from "lucide-react"
import { CreateSchoolForm } from "@/components/create-school-form"
import { useAuthStore } from "@/store/auth"

export default function CreatePage() {
  const router = useRouter()
  const [showCreateSchool, setShowCreateSchool] = useState(false)
  const { user } = useAuthStore()
  console.log("User:", user)

//   useEffect(() => {
//     if (!user) router.push("/login")
//   }, [user, router])

  const handleJoinSchool = () => {
    router.push("/role-selection")
  }

  return (
    <div className="container mx-auto px-10 sm:px-40 py-20 sm:py-40">
      {!showCreateSchool ? (
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="cursor-pointer" onClick={() => setShowCreateSchool(true)}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <School className="h-6 w-6" />
                Create your school
              </CardTitle>
              <CardDescription>Create school profile as an admin</CardDescription>
            </CardHeader>
            <CardContent>
              <Button>Get Started</Button>
            </CardContent>
          </Card>
          <Card className="cursor-pointer" onClick={handleJoinSchool}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserPlus className="h-6 w-6" />
                Join your school
              </CardTitle>
              <CardDescription>Join your school as a teacher or parent</CardDescription>
            </CardHeader>
            <CardContent>
              <Button>Join Now</Button>
            </CardContent>
          </Card>
        </div>
      ) : (
        <CreateSchoolForm />
      )}
    </div>
  )
}

