import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const subjects = ["Math", "Science", "English", "History", "Art"]

const generateGradeData = (subject: string) => {
    return Array.from({ length: 10 }, (_, i) => ({
        week: i + 1,
        grade: Math.floor(Math.random() * 30) + 70, // Random grade between 70 and 100
    }))
}

const gradeData = subjects.reduce(
    (acc, subject) => {
        acc[subject] = generateGradeData(subject)
        return acc
    },
    {} as Record<string, { week: number; grade: number }[]>,
)

export default function ChildPerformancePage() {
    return (
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
                <div className="flex items-center justify-between space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">Child Performance</h2>
                </div>
                <Tabs defaultValue={subjects[0]} className="space-y-4">
                    <TabsList>
                        {subjects.map((subject) => (
                            <TabsTrigger value={subject} key={subject}>
                                {subject}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {subjects.map((subject) => (
                        <TabsContent value={subject} key={subject}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>{subject} Performance</CardTitle>
                                    <CardDescription>Your child&#39;s grade progression over the last 10 weeks</CardDescription>
                                </CardHeader>
                                <CardContent className="pl-2">
                                    <ResponsiveContainer width="100%" height={350}>
                                        <LineChart data={gradeData[subject]}>
                                            <XAxis dataKey="week" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                                            <YAxis
                                                stroke="#888888"
                                                fontSize={12}
                                                tickLine={false}
                                                axisLine={false}
                                                tickFormatter={(value) => `${value}%`}
                                                domain={[60, 100]}
                                            />
                                            <Tooltip />
                                            <Line type="monotone" dataKey="grade" stroke="#adfa1d" strokeWidth={2} />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
    )
}

