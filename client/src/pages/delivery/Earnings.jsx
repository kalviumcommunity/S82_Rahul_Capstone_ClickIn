import React from "react";
import MainLayout from "@/layouts/MainLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  ArrowRight,
  DollarSign,
  Calendar as CalendarIcon,
  Clock,
} from "lucide-react";

// Example data for earnings
const weeklyData = [
  { day: "Mon", earnings: 45 },
  { day: "Tue", earnings: 35 },
  { day: "Wed", earnings: 55 },
  { day: "Thu", earnings: 25 },
  { day: "Fri", earnings: 70 },
  { day: "Sat", earnings: 85 },
  { day: "Sun", earnings: 30 },
];

const monthlyData = [
  { day: "Week 1", earnings: 220 },
  { day: "Week 2", earnings: 270 },
  { day: "Week 3", earnings: 240 },
  { day: "Week 4", earnings: 320 },
];

// Data for pie chart
const deliveryTypeData = [
  { name: "Groceries", value: 65 },
  { name: "Food", value: 25 },
  { name: "Pharmacy", value: 10 },
];

const COLORS = ["#4CAF50", "#2196F3", "#FFC107", "#F44336"];

const DeliveryEarnings = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Earnings Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground">Today's Earnings</p>
                  <h2 className="text-3xl font-bold">$42.50</h2>
                </div>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground">Weekly Total</p>
                  <h2 className="text-3xl font-bold">$345.00</h2>
                </div>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <CalendarIcon className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground">Deliveries Completed</p>
                  <h2 className="text-3xl font-bold">24</h2>
                </div>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Earnings Overview</CardTitle>
                <CardDescription>Track your delivery earnings over time</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="weekly" className="space-y-4">
                  <TabsList>
                    <TabsTrigger value="weekly">Weekly</TabsTrigger>
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  </TabsList>

                  <TabsContent value="weekly" className="space-y-4">
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={weeklyData}
                          margin={{ top: 10, right: 10, left: -15, bottom: 0 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" vertical={false} />
                          <XAxis dataKey="day" tick={{ fontSize: 12 }} />
                          <YAxis width={40} tick={{ fontSize: 12 }} />
                          <Tooltip formatter={(value) => [`$${value}`, "Earnings"]} />
                          <Bar dataKey="earnings" fill="#4CAF50" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </TabsContent>

                  <TabsContent value="monthly" className="space-y-4">
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={monthlyData}
                          margin={{ top: 10, right: 10, left: -15, bottom: 0 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" vertical={false} />
                          <XAxis dataKey="day" tick={{ fontSize: 12 }} />
                          <YAxis width={40} tick={{ fontSize: 12 }} />
                          <Tooltip formatter={(value) => [`$${value}`, "Earnings"]} />
                          <Bar dataKey="earnings" fill="#2196F3" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Delivery Types</CardTitle>
                <CardDescription>Breakdown by category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={deliveryTypeData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {deliveryTypeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-center mt-4">
                  {deliveryTypeData.map((entry, index) => (
                    <div key={`legend-${index}`} className="flex items-center mx-2">
                      <div
                        className="h-3 w-3 mr-1"
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      ></div>
                      <span className="text-xs">{entry.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((_, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center border-b pb-2 last:border-0 last:pb-0"
                  >
                    <div>
                      <p className="font-medium">Order #123{i}4</p>
                      <p className="text-sm text-muted-foreground">
                        May {i + 1}, 2025 • 2.{i} km
                      </p>
                    </div>
                    <p className="font-medium">+${(15 + i * 2).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-4">
                View All Transactions <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payout Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <p>Next Payout</p>
                  <p className="font-medium">May 7, 2025</p>
                </div>
                <div className="flex justify-between">
                  <p>Pending Amount</p>
                  <p className="font-medium">$124.50</p>
                </div>
                <div className="flex justify-between">
                  <p>Payment Method</p>
                  <p className="font-medium">Direct Deposit</p>
                </div>
                <Button variant="outline" className="w-full">
                  Update Payment Details
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default DeliveryEarnings;
