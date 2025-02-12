"use client"
import { 
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from "@/components/ui/card"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line
} from "recharts"

const performanceData = [
  { subject: "Math", score: 75 },
  { subject: "Science", score: 80 },
  { subject: "English", score: 90 },
]

const attendanceData = [
  { month: "Jan", attendance: 92 },
  { month: "Feb", attendance: 95 },
  { month: "Mar", attendance: 90 },
  { month: "Apr", attendance: 98 },
  { month: "May", attendance: 94 },
  { month: "Jun", attendance: 96 },
]

export default function ReportsPage() {
  return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Academic Performance</CardTitle>
                <CardDescription>Subject-wise performance overview</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart
                      width={500}
                      height={300}
                      data={performanceData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="subject" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `${value}%`}
                    />
                    <Tooltip />
                    <Bar dataKey="score" fill="#000000" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Attendance Trends</CardTitle>
                <CardDescription>Monthly attendance percentage</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={attendanceData}>
                    <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `${value}%`}
                    />
                    <Tooltip />
                    <Line type="monotone" dataKey="attendance" stroke="#000" strokeWidth={2} dot={{ fill: "#000" }} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Key Statistics</CardTitle>
                <CardDescription>Important metrics and achievements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Average GPA</p>
                      <p className="text-2xl font-bold">3.5</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Graduation Rate</p>
                      <p className="text-2xl font-bold">94%</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">College Acceptance</p>
                      <p className="text-2xl font-bold">88%</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Student Satisfaction</p>
                      <p className="text-2xl font-bold">4.2/5</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Academic Progress</CardTitle>
                <CardDescription>Year-over-year improvement metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">Math Proficiency</p>
                      <p className="text-sm">+12%</p>
                    </div>
                    <div className="h-2 rounded-full bg-gray-100">
                      <div className="h-full w-[75%] rounded-full bg-black" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">Science Achievement</p>
                      <p className="text-sm">+8%</p>
                    </div>
                    <div className="h-2 rounded-full bg-gray-100">
                      <div className="h-full w-[68%] rounded-full bg-black" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">Reading Scores</p>
                      <p className="text-sm">+15%</p>
                    </div>
                    <div className="h-2 rounded-full bg-gray-100">
                      <div className="h-full w-[82%] rounded-full bg-black" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
  )
}

