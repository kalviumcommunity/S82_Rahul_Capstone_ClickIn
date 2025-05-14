import React from "react";
import { Link } from "react-router-dom";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import {
  Package,
  Store,
  User,
  Clock,
  ShoppingCart,
  Bell,
  Calendar
} from "lucide-react";
import MainLayout from "@/layouts/MainLayout";
import { useAuth } from "@/contexts/AuthContext";

// Mock data for charts
const orderData = [
  { day: "Mon", orders: 5 },
  { day: "Tue", orders: 8 },
  { day: "Wed", orders: 12 },
  { day: "Thu", orders: 7 },
  { day: "Fri", orders: 15 },
  { day: "Sat", orders: 22 },
  { day: "Sun", orders: 16 }
];

// Mock orders
const recentOrders = [
  {
    id: "ORD-001",
    customer: "John Smith",
    total: 24.99,
    status: "ready",
    time: "15 min ago",
    items: 3
  },
  {
    id: "ORD-002",
    customer: "Emily Johnson",
    total: 56.75,
    status: "pending",
    time: "30 min ago",
    items: 8
  },
  {
    id: "ORD-003",
    customer: "Michael Brown",
    total: 19.5,
    status: "pending",
    time: "1 hour ago",
    items: 2
  }
];

const VendorDashboard = () => {
  const { user } = useAuth();

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Vendor Dashboard</h1>
            <p className="text-gray-600">Welcome back, {user && user.name}</p>
          </div>
          <div className="mt-4 sm:mt-0">
            <Link to="/vendor/products/add">
              <Button>Add New Product</Button>
            </Link>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1,452.32</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Orders</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">143</div>
              <p className="text-xs text-muted-foreground">
                +15% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Customers</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78</div>
              <p className="text-xs text-muted-foreground">
                +12.5% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Orders</CardTitle>
              <CardDescription>
                Order overview for the current week
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[200px] w-full px-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={orderData}>
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Bar dataKey="orders" fill="#8b5cf6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>Recent orders that need attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{order.id}</p>
                      <p className="text-sm text-muted-foreground">{order.customer}</p>
                    </div>
                    <div className="text-right">
                      <p>${order.total.toFixed(2)}</p>
                      <p className="text-xs text-muted-foreground">{order.items} items</p>
                    </div>
                    <div className="ml-4">
                      <Button
                        variant={order.status === "pending" ? "outline" : "secondary"}
                        size="sm"
                      >
                        {order.status === "pending" ? "Accept" : "Ready for pickup"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="inventory">
          <TabsList className="mb-4">
            <TabsTrigger value="inventory">
              <Store className="h-4 w-4 mr-2" /> Inventory
            </TabsTrigger>
            <TabsTrigger value="schedule">
              <Clock className="h-4 w-4 mr-2" /> Schedule
            </TabsTrigger>
            <TabsTrigger value="alerts">
              <Bell className="h-4 w-4 mr-2" /> Alerts
            </TabsTrigger>
          </TabsList>

          <TabsContent value="inventory">
            <Card>
              <CardHeader>
                <CardTitle>Low Stock Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-red-50 rounded-md">
                    <div>
                      <p className="font-medium">Fresh Milk</p>
                      <p className="text-sm text-red-600">Only 2 left in stock</p>
                    </div>
                    <Button size="sm" variant="outline">Update</Button>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-yellow-50 rounded-md">
                    <div>
                      <p className="font-medium">Whole Wheat Bread</p>
                      <p className="text-sm text-yellow-600">Only 5 left in stock</p>
                    </div>
                    <Button size="sm" variant="outline">Update</Button>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-yellow-50 rounded-md">
                    <div>
                      <p className="font-medium">Brown Eggs</p>
                      <p className="text-sm text-yellow-600">Only 8 left in stock</p>
                    </div>
                    <Button size="sm" variant="outline">Update</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule">
            <Card>
              <CardHeader>
                <CardTitle>Store Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">Monday - Friday</p>
                      <p className="text-sm text-gray-600">Regular Hours</p>
                    </div>
                    <p>8:00 AM - 9:00 PM</p>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">Saturday</p>
                      <p className="text-sm text-gray-600">Weekend Hours</p>
                    </div>
                    <p>9:00 AM - 8:00 PM</p>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">Sunday</p>
                      <p className="text-sm text-gray-600">Weekend Hours</p>
                    </div>
                    <p>10:00 AM - 6:00 PM</p>
                  </div>
                  <Button className="w-full" variant="outline">
                    <Calendar className="h-4 w-4 mr-2" /> Edit Schedule
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="alerts">
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 border-l-4 border-instait-orange bg-orange-50 rounded-r-md">
                    <p className="font-medium">New Order #ORD-004</p>
                    <p className="text-sm">A new order has been placed. Please review and accept.</p>
                    <p className="text-xs text-gray-500 mt-1">5 minutes ago</p>
                  </div>

                  <div className="p-3 border-l-4 border-instait-blue bg-blue-50 rounded-r-md">
                    <p className="font-medium">Delivery Partner Assigned</p>
                    <p className="text-sm">
                      Order #ORD-001 has been assigned to delivery partner "Mike".
                    </p>
                    <p className="text-xs text-gray-500 mt-1">20 minutes ago</p>
                  </div>

                  <div className="p-3 border-l-4 border-green-500 bg-green-50 rounded-r-md">
                    <p className="font-medium">Order Completed</p>
                    <p className="text-sm">Order #ORD-865 has been delivered successfully.</p>
                    <p className="text-xs text-gray-500 mt-1">Yesterday</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default VendorDashboard;
