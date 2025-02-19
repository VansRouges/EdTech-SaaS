"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users } from "lucide-react"

const roles = [
  {
    id: "teacher",
    title: "Teacher",
    description: "Access your class dashboard, manage grades, and communicate with parents",
    icon: GraduationCap,
  },
  {
    id: "parent",
    title: "Parent",
    description: "Monitor your child's progress and communicate with teachers",
    icon: Users,
  },
]

export default function RoleSelectionPage() {
  const router = useRouter()
  const [selectedRole, setSelectedRole] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!selectedRole) return

    setIsLoading(true)
    // Simulate role selection - replace with actual role setting
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 1000)
  }

  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Select your role</h1>
            <p className="text-gray-500">Choose your role to access the appropriate dashboard</p>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid gap-4">
              {roles.map((role) => {
                const Icon = role.icon
                return (
                    <Card
                        key={role.id}
                        className={`cursor-pointer transition-colors ${selectedRole === role.id ? "border-black" : ""}`}
                        onClick={() => setSelectedRole(role.id)}
                    >
                      <CardContent className="flex items-start gap-4 p-6">
                        <div className="rounded-full p-2 bg-gray-100">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-medium">{role.title}</h3>
                          <p className="text-sm text-gray-500">{role.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                )
              })}
            </div>

            <Button className="w-full" type="submit" disabled={!selectedRole || isLoading}>
              {isLoading ? "Confirming..." : "Continue"}
            </Button>
          </form>
        </div>
      </div>
  )
}

