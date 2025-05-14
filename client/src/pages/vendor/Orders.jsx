import React, { useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Search,
  Calendar,
  Clock,
  User,
  ShoppingBag,
  Phone,
  Check,
  X,
  ExternalLink,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";

// Mock orders data
const mockOrders = [
  {
    id: "ORD-001",
    customer: "John Smith",
    items: [
      { name: "Organic Bananas", quantity: 6, price: 2.99 },
      { name: "Milk", quantity: 1, price: 3.49 },
      { name: "Bread", quantity: 1, price: 2.29 },
    ],
    total: 8.77,
    status: "new",
    time: "10 minutes ago",
    address: "123 Main St, New York, NY 10001",
    phone: "+1 (555) 123-4567",
  },
  {
    id: "ORD-002",
    customer: "Emily Johnson",
    items: [
      { name: "Chicken Breast", quantity: 2, price: 10.99 },
      { name: "Potatoes", quantity: 5, price: 4.99 },
      { name: "Tomatoes", quantity: 4, price: 3.99 },
    ],
    total: 19.97,
    status: "preparing",
    time: "30 minutes ago",
    address: "456 Park Ave, New York, NY 10022",
    phone: "+1 (555) 987-6543",
  },
  {
    id: "ORD-003",
    customer: "Michael Brown",
    items: [
      { name: "Apples", quantity: 8, price: 6.99 },
      { name: "Kale", quantity: 1, price: 3.49 },
      { name: "Strawberries", quantity: 1, price: 5.99 },
    ],
    total: 16.47,
    status: "ready",
    time: "1 hour ago",
    address: "789 Broadway, New York, NY 10003",
    phone: "+1 (555) 456-7890",
  },
  {
    id: "ORD-004",
    customer: "Lisa Chen",
    items: [
      { name: "Greek Yogurt", quantity: 2, price: 5.99 },
      { name: "Granola", quantity: 1, price: 4.49 },
      { name: "Blueberries", quantity: 2, price: 3.99 },
    ],
    total: 14.47,
    status: "delivered",
    time: "3 hours ago",
    address: "321 5th Ave, New York, NY 10016",
    phone: "+1 (555) 234-5678",
  },
];

const VendorOrders = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredOrders = mockOrders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTab =
      activeTab === "all" ||
      (activeTab === "new" && order.status === "new") ||
      (activeTab === "preparing" && order.status === "preparing") ||
      (activeTab === "ready" && order.status === "ready") ||
      (activeTab === "delivered" && order.status === "delivered");

    return matchesSearch && matchesTab;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case "new":
        return <Badge className="bg-blue-500">New Order</Badge>;
      case "preparing":
        return <Badge className="bg-yellow-500">Preparing</Badge>;
      case "ready":
        return <Badge className="bg-green-500">Ready for Pickup</Badge>;
      case "delivered":
        return <Badge className="bg-gray-500">Delivered</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  const handleAcceptOrder = (orderId) => {
    toast({
      title: "Order Accepted",
      description: `Order ${orderId} has been accepted and moved to preparing.`,
    });
  };

  const handleRejectOrder = (orderId) => {
    toast({
      title: "Order Rejected",
      description: `Order ${orderId} has been rejected.`,
    });
  };

  const handleMarkReady = (orderId) => {
    toast({
      title: "Order Ready",
      description: `Order ${orderId} has been marked as ready for pickup.`,
    });
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-bold">Orders</h1>
            <p className="text-muted-foreground">Manage your incoming orders</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search orders by ID or customer name..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Today" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="yesterday">Yesterday</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Tabs
          defaultValue="all"
          value={activeTab}
          onValueChange={setActiveTab}
          className="mb-6"
        >
          <TabsList>
            <TabsTrigger value="all">All Orders</TabsTrigger>
            <TabsTrigger value="new">New Orders</TabsTrigger>
            <TabsTrigger value="preparing">Preparing</TabsTrigger>
            <TabsTrigger value="ready">Ready for Pickup</TabsTrigger>
            <TabsTrigger value="delivered">Delivered</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="space-y-4">
          {filteredOrders.map((order) => (
            <Card key={order.id} className="overflow-hidden">
              <div className="p-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold">{order.id}</h3>
                      {getStatusBadge(order.status)}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Clock className="h-3 w-3" />
                      <span>{order.time}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {order.status === "new" && (
                      <>
                        <Button
                          size="sm"
                          className="bg-red-500 hover:bg-red-600"
                          onClick={() => handleRejectOrder(order.id)}
                        >
                          <X className="h-4 w-4 mr-1" /> Reject
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => handleAcceptOrder(order.id)}
                        >
                          <Check className="h-4 w-4 mr-1" /> Accept
                        </Button>
                      </>
                    )}
                    {order.status === "preparing" && (
                      <Button size="sm" onClick={() => handleMarkReady(order.id)}>
                        <ShoppingBag className="h-4 w-4 mr-1" /> Mark Ready
                      </Button>
                    )}
                    {order.status === "ready" && (
                      <Badge className="bg-green-500">
                        Waiting for delivery partner
                      </Badge>
                    )}
                    {order.status === "delivered" && (
                      <Button size="sm" variant="outline">
                        <ExternalLink className="h-4 w-4 mr-1" /> View Details
                      </Button>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-sm flex items-center gap-1 mb-2">
                      <User className="h-4 w-4" /> Customer Information
                    </h4>
                    <p className="font-medium">{order.customer}</p>
                    <p className="text-sm">{order.address}</p>
                    <p className="text-sm">{order.phone}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm flex items-center gap-1 mb-2">
                      <ShoppingBag className="h-4 w-4" /> Order Items
                    </h4>
                    <div className="space-y-1">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="text-sm">
                            {item.quantity}x {item.name}
                          </span>
                          <span className="text-sm font-medium">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      ))}
                      <div className="pt-1 mt-1 border-t flex justify-between font-medium">
                        <span>Total</span>
                        <span>${order.total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredOrders.length === 0 && (
          <div className="text-center py-16">
            <ShoppingBag className="h-12 w-12 mx-auto text-gray-400 mb-3" />
            <h3 className="text-lg font-medium mb-1">No orders found</h3>
            <p className="text-muted-foreground">
              There are no orders matching your criteria.
            </p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default VendorOrders;
