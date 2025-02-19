"use client" 
import { BarChart3, GraduationCap, School, Users } from "lucide-react"
import { MetricCard } from "@/components/metric-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { useProfileStore } from "@/store/profile";

const performanceData = [
  { month: "Jan", average: 85 },
  { month: "Feb", average: 87 },
  { month: "Mar", average: 86 },
  { month: "Apr", average: 88 },
  { month: "May", average: 89 },
  { month: "Jun", average: 90 },
]

const upcomingEvents = [
  {
    name: "Book Fair",
    date: "March 15, 2024",
    location: "School Library",
  },
  {
    name: "Parent-Teacher Conference",
    date: "March 20, 2024",
    location: "Main Hall",
  },
  {
    name: "Science Exhibition",
    date: "March 25, 2024",
    location: "Science Block",
  },
]

export default function AdminDashboard() {
  const { profile } = useProfileStore();
  console.log("Profile:", profile);

  return (
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <h1>You are logged in as <b>{profile?.name}</b></h1>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard
                title="Total Students"
                value="2,850"
                description="+20.1% from last month"
                icon={<Users className="h-4 w-4 text-muted-foreground" />}
            />
            <MetricCard
                title="Total Teachers"
                value="145"
                description="12 new this month"
                icon={<GraduationCap className="h-4 w-4 text-muted-foreground" />}
            />
            <MetricCard
                title="Total Classes"
                value="86"
                description="4 classes added this week"
                icon={<School className="h-4 w-4 text-muted-foreground" />}
            />
            <MetricCard
                title="Average Performance"
                value="87%"
                description="+2.5% from last semester"
                icon={<BarChart3 className="h-4 w-4 text-muted-foreground" />}
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Performance Overview</CardTitle>
                <CardDescription>Average student performance over the last 6 months</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={performanceData}>
                    <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `${value}%`}
                    />
                    <Tooltip />
                    <Line type="monotone" dataKey="average" stroke="#000" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>School events scheduled for this month</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Event</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {upcomingEvents.map((event) => (
                        <TableRow key={event.name}>
                          <TableCell className="font-medium">{event.name}</TableCell>
                          <TableCell>{event.date}</TableCell>
                        </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
  )
}

