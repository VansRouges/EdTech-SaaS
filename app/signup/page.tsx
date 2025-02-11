"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AuthLayout } from "@/components/auth-layout"

export default function SignupPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)

    // Simulate signup - replace with actual registration
    setTimeout(() => {
      setIsLoading(false)
      router.push("/role-selection")
    }, 1000)
  }

  return (
      <AuthLayout title="Create an account" description="Enter your details to get started">
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid gap-4 grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">First name</Label>
              <Input id="firstName" placeholder="John" disabled={isLoading} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last name</Label>
              <Input id="lastName" placeholder="Doe" disabled={isLoading} required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
                required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" disabled={isLoading} required />
          </div>
          <Button className="w-full" type="submit" disabled={isLoading}>
            {isLoading ? "Creating account..." : "Create account"}
          </Button>
        </form>
        <div className="text-center text-sm">
          <Link href="/login" className="underline underline-offset-4 hover:text-primary">
            Already have an account? Sign in
          </Link>
        </div>
      </AuthLayout>
  )
}

