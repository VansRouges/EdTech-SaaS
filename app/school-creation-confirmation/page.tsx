"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, PlayCircle } from "lucide-react"

const videos = [
  { id: 1, title: "Streamline Admissions Process", url: "https://example.com/video1" },
  { id: 2, title: "Efficient Attendance Tracking", url: "https://example.com/video2" },
  { id: 3, title: "Comprehensive Grade Management", url: "https://example.com/video3" },
]

export default function SchoolCreationConfirmationPage() {
  const router = useRouter()
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <CheckCircle className="text-green-500" />
            School Creation Request Received
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Thank you for submitting your school creation request. We have successfully received your information.</p>
          <p>
            Our team will verify the details provided against the Ministry of Education database. Once confirmed, you
            will be able to start onboarding your entire school operations to our platform.
          </p>
          <p className="font-semibold">
            Please expect an email from us within the next 2 to 3 business working days with further instructions.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Learn More About Our Platform</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            While you wait, check out these videos to see how our platform can improve your school management process:
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {videos.map((video) => (
              <Card key={video.id} className="cursor-pointer" onClick={() => setSelectedVideo(video.url)}>
                <CardContent className="flex items-center gap-2 p-4">
                  <PlayCircle className="text-primary" />
                  <span>{video.title}</span>
                </CardContent>
              </Card>
            ))}
          </div>
          {selectedVideo && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-2">Watch Video</h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={selectedVideo}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="mt-8 text-center">
        <Button onClick={() => router.push("/")}>Return to Home</Button>
      </div>
    </div>
  )
}

