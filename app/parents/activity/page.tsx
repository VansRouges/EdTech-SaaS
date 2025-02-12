"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

const activities = [
  {
    id: 1,
    name: "Think Pair Share",
    date: "2024-03-15",
    status: "past",
    description: "Students discuss a topic in pairs and then share their ideas with the class.",
  },
  {
    id: 2,
    name: "Video Lesson: Photosynthesis",
    date: "2024-03-20",
    status: "ongoing",
    description: "An interactive video lesson explaining the process of photosynthesis.",
  },
  {
    id: 3,
    name: "Group Project: Renewable Energy",
    date: "2024-03-25",
    status: "upcoming",
    description: "Students work in groups to create a presentation on different types of renewable energy.",
  },
  {
    id: 4,
    name: "Math Quiz",
    date: "2024-03-18",
    status: "past",
    description: "A quiz covering recent topics in algebra.",
  },
  {
    id: 5,
    name: "Science Fair Preparation",
    date: "2024-03-22",
    status: "ongoing",
    description: "Students work on their science fair projects with guidance from teachers.",
  },
  {
    id: 6,
    name: "Field Trip: Natural History Museum",
    date: "2024-03-30",
    status: "upcoming",
    description: "A class trip to the local natural history museum to learn about dinosaurs and evolution.",
  },
]

export default function ActivityPage() {
  const [selectedTab, setSelectedTab] = useState("all")

  const filteredActivities = activities.filter((activity) => selectedTab === "all" || activity.status === selectedTab)

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
    <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">School Activities</h2>
    </div>
    <Tabs defaultValue="all" onValueChange={setSelectedTab}>
        <TabsList>
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="past">Past</TabsTrigger>
        <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
        <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
        <Card>
            <CardHeader>
            <CardTitle>All Activities</CardTitle>
            </CardHeader>
            <CardContent>
            <ActivityList activities={filteredActivities} />
            </CardContent>
        </Card>
        </TabsContent>
        <TabsContent value="past">
        <Card>
            <CardHeader>
            <CardTitle>Past Activities</CardTitle>
            </CardHeader>
            <CardContent>
            <ActivityList activities={filteredActivities} />
            </CardContent>
        </Card>
        </TabsContent>
        <TabsContent value="ongoing">
        <Card>
            <CardHeader>
            <CardTitle>Ongoing Activities</CardTitle>
            </CardHeader>
            <CardContent>
            <ActivityList activities={filteredActivities} />
            </CardContent>
        </Card>
        </TabsContent>
        <TabsContent value="upcoming">
        <Card>
            <CardHeader>
            <CardTitle>Upcoming Activities</CardTitle>
            </CardHeader>
            <CardContent>
            <ActivityList activities={filteredActivities} />
            </CardContent>
        </Card>
        </TabsContent>
    </Tabs>
    </div>
  )
}

type Activity = {
  id: number;
  name: string;
  date: string;
  status: string;
  description: string;
};

function ActivityList({ activities }: { activities: Activity[] }) {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <Card key={activity.id}>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>{activity.name}</CardTitle>
              <Badge
                variant={
                  activity.status === "past" ? "secondary" : activity.status === "ongoing" ? "default" : "outline"
                }
              >
                {activity.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">Date: {activity.date}</p>
            <p>{activity.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

