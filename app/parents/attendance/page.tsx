"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";

const attendanceData = [
    { date: "2024-03-01", status: "present" },
    { date: "2024-03-02", status: "present" },
    { date: "2024-03-03", status: "absent" },
    { date: "2024-03-04", status: "present" },
    { date: "2024-03-05", status: "late" },
    // ... more attendance data
];

// Move the DayContent function outside of the main component
const DayContent = ({ date }: { date: Date }) => {
    const attendance = attendanceData.find(
        (d) => d.date === date.toISOString().split("T")[0]
    );
    if (!attendance) return null;

    return (
        <div className="flex items-center justify-center w-full h-full">
            <Badge
                variant={
                    attendance.status === "present"
                        ? "default"
                        : attendance.status === "late"
                        ? "outline"
                        : "destructive"
                }
            >
                {attendance.status === "present"
                    ? "P"
                    : attendance.status === "late"
                    ? "L"
                    : "A"}
            </Badge>
        </div>
    );
};

export default function AttendanceRecordsPage() {
    return (
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">
                    Attendance Records
                </h2>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Monthly Attendance</CardTitle>
                </CardHeader>
                <CardContent>
                    <Calendar
                        mode="multiple"
                        selected={attendanceData.map((d) => new Date(d.date))}
                        className="rounded-md border"
                        components={{
                            DayContent: DayContent,
                        }}
                    />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Attendance Summary</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-bold text-green-500">
                                {attendanceData.filter((d) => d.status === "present").length}
                            </span>
                            <span className="text-sm text-muted-foreground">Present</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-bold text-yellow-500">
                                {attendanceData.filter((d) => d.status === "late").length}
                            </span>
                            <span className="text-sm text-muted-foreground">Late</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-bold text-red-500">
                                {attendanceData.filter((d) => d.status === "absent").length}
                            </span>
                            <span className="text-sm text-muted-foreground">Absent</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
