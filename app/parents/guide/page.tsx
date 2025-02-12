"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const guideTopics = [
  {
    id: 1,
    title: "Active Involvement in Your Child's Education",
    excerpt:
      "Learn how to actively participate in your child's learning journey and make a positive impact on their academic success.",
    slug: "active-involvement",
  },
  {
    id: 2,
    title: "Encouraging Independence in Learning",
    excerpt: "Discover strategies to foster independence and self-motivation in your child's approach to education.",
    slug: "encourage-independence",
  },
  {
    id: 3,
    title: "Effective Homework Management Techniques",
    excerpt: "Explore practical tips and methods to help your child manage their homework efficiently and effectively.",
    slug: "homework-management",
  },
  {
    id: 4,
    title: "Building a Positive Learning Environment at Home",
    excerpt:
      "Create a supportive and stimulating learning atmosphere at home to enhance your child's educational experience.",
    slug: "positive-learning-environment",
  },
  {
    id: 5,
    title: "Balancing Extracurricular Activities and Academics",
    excerpt:
      "Find the right balance between academic pursuits and extracurricular activities for your child's holistic development.",
    slug: "balancing-activities",
  },
]

export default function ParentGuidePage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
    <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Parent's Guide</h2>
    </div>
    <p className="text-muted-foreground">
        Welcome to the Parent's Guide. Here you'll find helpful articles and resources to support your child's
        educational journey.
    </p>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {guideTopics.map((topic) => (
        <Card key={topic.id}>
            <CardHeader>
            <CardTitle>{topic.title}</CardTitle>
            </CardHeader>
            <CardContent>
            <p className="text-muted-foreground mb-4">{topic.excerpt}</p>
            <Button asChild>
                <Link href={`/parent/guide/${topic.slug}`}>Read More</Link>
            </Button>
            </CardContent>
        </Card>
        ))}
    </div>
    </div>
  )
}

