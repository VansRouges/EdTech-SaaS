"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAuthStore } from "@/store/auth"

const steps = [
  { title: "Basic Information", fields: ["name", "address", "founder", "foundingYear"] },
  { title: "School Details", fields: ["numberOfTeachers", "numberOfStudents", "curriculum"] },
  { title: "Additional Information", fields: ["gender", "admittance", "email"] },
  { title: "Proprietor Information", fields: ["proprietor", "proprietorEducation"] },
  { title: "Registration Details", fields: ["moeRegstrationId", "cacId"] },
]

export function CreateSchoolForm() {
  const { user, token } = useAuthStore(); // Retrieve the authentication token
  console.log("User:", user);
  console.log("Token:", token)
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    founder: "",
    foundingYear: "",
    numberOfTeachers: "",
    numberOfStudents: "",
    curriculum: "",
    gender: "",
    admittance: "",
    email: "",
    proprietor: "",
    proprietorEducation: "",
    moeRegstrationId: "",
    cacId: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1)
    } else {
        if (!token) {
            throw new Error("Unauthorized. Please log in.");
        }

        try{
            const data = {
                name: formData.name,
                address: formData.address,
                founder: formData.founder,
                foundingYear: parseInt(formData.foundingYear),
                numberOfTeachers: parseInt(formData.numberOfTeachers),
                numberOfStudents: parseInt(formData.numberOfStudents),
                curriculum: formData.curriculum,
                gender: formData.gender,
                admittance: formData.admittance,
                email: formData.email,
                proprietor: formData.proprietor,
                proprietorEducation: formData.proprietorEducation,
                moeRegstrationId: formData.moeRegstrationId,
                cacId: formData.cacId,
                userId: user?.$id,
                status: "pending"
            }
            console.log("Form Data:", data)

            // Step 1: Create the school
            const schoolResponse = await fetch("https://edtech-saas-backend.vercel.app/api/schools", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            });

            if (!schoolResponse.ok) throw new Error("Failed to create school");

            const schoolData = await schoolResponse.json();
            console.log("School Data:", schoolData);

            const schoolId = schoolData?.$id;

            if (!schoolId) throw new Error("Invalid school ID received");

            // Step 2: Create the admin profile linked to the school
            const adminResponse = await fetch("https://edtech-saas-backend.vercel.app/api/profile", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    "name": user?.name,
                    "email": user?.email,
                    "role": "admin",
                    "userId": user?.$id,
                    "isAdmin": true,
                    "isTeacher": false,
                    "isParent": false,
                    schoolId 
                }),
            });

            if (!adminResponse.ok) throw new Error("Failed to create admin profile");
            const adminData = await adminResponse.json();
            console.log("Admin Data:", adminData);

            router.push("/school-creation-confirmation")
        } catch(err){
            const error = err as Error
            setError(error.message || "An error occurred");
            console.error("Error:", error)
        } finally {
            setIsLoading(false);
        }
    }
  }

  const currentStepFields = steps[currentStep].fields

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Create Your School - Step {currentStep + 1}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {currentStepFields.includes("name") && (
            <div className="space-y-2">
              <Label htmlFor="name">School Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
          )}
          {currentStepFields.includes("address") && (
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" name="address" value={formData.address} onChange={handleInputChange} required />
            </div>
          )}
          {currentStepFields.includes("founder") && (
            <div className="space-y-2">
              <Label htmlFor="founder">Founder</Label>
              <Input id="founder" name="founder" value={formData.founder} onChange={handleInputChange} required />
            </div>
          )}
          {currentStepFields.includes("foundingYear") && (
            <div className="space-y-2">
              <Label htmlFor="foundingYear">Founding Year</Label>
              <Input
                id="foundingYear"
                name="foundingYear"
                type="number"
                value={formData.foundingYear}
                onChange={handleInputChange}
                required
              />
            </div>
          )}
          {currentStepFields.includes("numberOfTeachers") && (
            <div className="space-y-2">
              <Label htmlFor="numberOfTeachers">Number of Teachers</Label>
              <Input
                id="numberOfTeachers"
                name="numberOfTeachers"
                type="number"
                value={formData.numberOfTeachers}
                onChange={handleInputChange}
                required
              />
            </div>
          )}
          {currentStepFields.includes("numberOfStudents") && (
            <div className="space-y-2">
              <Label htmlFor="numberOfStudents">Number of Students</Label>
              <Input
                id="numberOfStudents"
                name="numberOfStudents"
                type="number"
                value={formData.numberOfStudents}
                onChange={handleInputChange}
                required
              />
            </div>
          )}
          {currentStepFields.includes("curriculum") && (
            <div className="space-y-2">
              <Label htmlFor="curriculum">Curriculum</Label>
              <Input
                id="curriculum"
                name="curriculum"
                value={formData.curriculum}
                onChange={handleInputChange}
                required
              />
            </div>
          )}
          {currentStepFields.includes("gender") && (
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Select value={formData.gender} onValueChange={(value) => handleSelectChange("gender", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="girls">Girls</SelectItem>
                  <SelectItem value="boys">Boys</SelectItem>
                  <SelectItem value="mixed">Mixed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
          {currentStepFields.includes("admittance") && (
            <div className="space-y-2">
              <Label htmlFor="admittance">Admittance</Label>
              <Select value={formData.admittance} onValueChange={(value) => handleSelectChange("admittance", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select admittance type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="day">Day</SelectItem>
                  <SelectItem value="boarding">Boarding</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
          {currentStepFields.includes("email") && (
            <div className="space-y-2">
              <Label htmlFor="email">School Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          )}
          {currentStepFields.includes("proprietor") && (
            <div className="space-y-2">
              <Label htmlFor="proprietor">Proprietor Name</Label>
              <Input
                id="proprietor"
                name="proprietor"
                value={formData.proprietor}
                onChange={handleInputChange}
                required
              />
            </div>
          )}
          {currentStepFields.includes("proprietorEducation") && (
            <div className="space-y-2">
              <Label htmlFor="proprietorEducation">Proprietor Educational Background</Label>
              <Textarea
                id="proprietorEducation"
                name="proprietorEducation"
                value={formData.proprietorEducation}
                onChange={handleInputChange}
                required
              />
            </div>
          )}
          {currentStepFields.includes("moeRegstrationId") && (
            <div className="space-y-2">
              <Label htmlFor="moeRegstrationId">Ministry of Education Registration ID</Label>
              <Input
                id="moeRegstrationId"
                name="moeRegstrationId"
                value={formData.moeRegstrationId}
                onChange={handleInputChange}
                required
              />
            </div>
          )}
          {currentStepFields.includes("cacId") && (
            <div className="space-y-2">
              <Label htmlFor="cacId">CAC ID</Label>
              <Input id="cacId" name="cacId" value={formData.cacId} onChange={handleInputChange} required />
            </div>
          )}
          <div className="flex justify-between">
            {currentStep > 0 && (
              <Button type="button" onClick={() => setCurrentStep((prev) => prev - 1)}>
                Previous
              </Button>
            )}
            <Button type="submit">
                {
                    
                    currentStep === steps.length - 1 ? "Submit" : "Next"
                }
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

