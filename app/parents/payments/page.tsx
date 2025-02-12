"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, FileText, Download, CreditCard } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { useMediaQuery } from "@/hooks/use-media-query"

const payments = [
  { id: 1, name: "Tuition Fee - Spring Semester", amount: 5000, date: "2024-03-15", status: "recent" },
  { id: 2, name: "School Trip to Science Museum", amount: 50, date: "2024-03-20", status: "upcoming" },
  { id: 3, name: "Textbooks for New Academic Year", amount: 200, date: "2024-04-01", status: "upcoming" },
  { id: 4, name: "Tuition Fee - Fall Semester", amount: 5000, date: "2023-09-01", status: "recent" },
  { id: 5, name: "Annual Technology Fee", amount: 100, date: "2024-01-15", status: "missed" },
  { id: 6, name: "Sports Equipment Fee", amount: 75, date: "2024-02-01", status: "recent" },
]

export default function PaymentsPage() {
  const [selectedTab, setSelectedTab] = useState("all")
  const [selectedPayment, setSelectedPayment] = useState<(typeof payments)[0] | null>(null)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const filteredPayments = payments.filter((payment) => selectedTab === "all" || payment.status === selectedTab)

  const PaymentDetails = () => (
    <>
      <DialogHeader>
        <DialogTitle>{selectedPayment?.name}</DialogTitle>
        <DialogDescription>Payment details</DialogDescription>
      </DialogHeader>
      <div className="py-4">
        <p>
          <strong>Amount:</strong> ${selectedPayment?.amount}
        </p>
        <p>
          <strong>Date:</strong> {selectedPayment?.date}
        </p>
        <p>
          <strong>Status:</strong> {selectedPayment?.status}
        </p>
      </div>
      <DialogFooter>
        {selectedPayment?.status === "recent" && (
          <Button onClick={() => console.log("Downloading receipt...")}>
            <Download className="mr-2 h-4 w-4" /> Download Receipt
          </Button>
        )}
        {selectedPayment?.status === "upcoming" && (
          <Button onClick={() => console.log("Generating invoice...")}>
            <FileText className="mr-2 h-4 w-4" /> Generate Invoice
          </Button>
        )}
        {selectedPayment?.status === "missed" && (
          <Button onClick={() => console.log("Making payment...")}>
            <CreditCard className="mr-2 h-4 w-4" /> Make Payment
          </Button>
        )}
      </DialogFooter>
    </>
  )

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
    <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Payments</h2>
    </div>
    <Tabs defaultValue="all" onValueChange={setSelectedTab}>
        <TabsList>
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
        <TabsTrigger value="recent">Recent</TabsTrigger>
        <TabsTrigger value="missed">Missed</TabsTrigger>
        </TabsList>
        <TabsContent value={selectedTab}>
        <Card>
            <CardHeader>
            <CardTitle>{selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)} Payments</CardTitle>
            </CardHeader>
            <CardContent>
            <div className="space-y-4">
                {filteredPayments.map((payment) => (
                <Card key={payment.id}>
                    <CardContent className="flex justify-between items-center p-4">
                    <div>
                        <h3 className="font-semibold">{payment.name}</h3>
                        <p className="text-sm text-muted-foreground">Date: {payment.date}</p>
                        <p className="text-sm font-semibold">${payment.amount}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Badge
                        variant={
                            payment.status === "upcoming"
                            ? "outline"
                            : payment.status === "recent"
                                ? "default"
                                : "destructive"
                        }
                        >
                        {payment.status}
                        </Badge>
                        <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            {isDesktop ? (
                            <Dialog>
                                <DialogTrigger asChild>
                                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                    View details
                                </DropdownMenuItem>
                                </DialogTrigger>
                                <DialogContent>
                                <PaymentDetails />
                                </DialogContent>
                            </Dialog>
                            ) : (
                            <Drawer>
                                <DrawerTrigger asChild>
                                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                    View details
                                </DropdownMenuItem>
                                </DrawerTrigger>
                                <DrawerContent>
                                <DrawerHeader>
                                    <DrawerTitle>{payment.name}</DrawerTitle>
                                    <DrawerDescription>Payment details</DrawerDescription>
                                </DrawerHeader>
                                <PaymentDetails />
                                </DrawerContent>
                            </Drawer>
                            )}
                            {payment.status === "upcoming" && (
                            <DropdownMenuItem onSelect={() => console.log("Generating invoice...")}>
                                Generate invoice
                            </DropdownMenuItem>
                            )}
                            {payment.status === "recent" && (
                            <DropdownMenuItem onSelect={() => console.log("Downloading receipt...")}>
                                Download receipt
                            </DropdownMenuItem>
                            )}
                        </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    </CardContent>
                </Card>
                ))}
            </div>
            </CardContent>
        </Card>
        </TabsContent>
    </Tabs>
    </div>
  )
}

