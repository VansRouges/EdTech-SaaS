"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import type { UserRole } from "@/types/auth"

export default function RoleSelection() {
  const [role, setRole] = useState<UserRole>("parent")
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    console.log("Selected Role", role)
    // TODO: Implement role selection logic
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <Card className="w-full max-w-[400px]">
        <CardHeader className="space-y-2">
          <CardTitle className="text-3xl font-bold tracking-tight">Select Your Role</CardTitle>
          <CardDescription>Choose your role to customize your experience</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-6">
            <RadioGroup
              defaultValue="parent"
              onValueChange={(value) => setRole(value as UserRole)}
              className="grid grid-cols-1 gap-4"
            >
              <div className="flex items-center space-x-2 rounded-lg border p-4">
                <RadioGroupItem value="parent" id="parent" />
                <Label htmlFor="parent" className="flex flex-col">
                  <span className="font-semibold">Parent</span>
                  <span className="text-sm text-muted-foreground">
                    Monitor your child&#39;s progress and communicate with teachers
                  </span>
                </Label>
              </div>
              <div className="flex items-center space-x-2 rounded-lg border p-4">
                <RadioGroupItem value="teacher" id="teacher" />
                <Label htmlFor="teacher" className="flex flex-col">
                  <span className="font-semibold">Teacher</span>
                  <span className="text-sm text-muted-foreground">Manage classes and communicate with parents</span>
                </Label>
              </div>
              <div className="flex items-center space-x-2 rounded-lg border p-4">
                <RadioGroupItem value="admin" id="admin" />
                <Label htmlFor="admin" className="flex flex-col">
                  <span className="font-semibold">Administrator</span>
                  <span className="text-sm text-muted-foreground">Manage the entire school system</span>
                </Label>
              </div>
            </RadioGroup>
            <Button className="w-full bg-black text-white hover:bg-black/90" disabled={isLoading}>
              {isLoading ? "Confirming..." : "Confirm Role"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

