import React, { useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Package, ShoppingBag, MapPin, Navigation, CheckCircle, Clock } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

// Mock data for orders
const availableOrders = [
  {
    id: "ORD-101",
    store: "Fresh Mart",
    storeLocation: "123 Main St",
    customer: "John Smith",
    customerLocation: "456 Elm St",
    items: 3,
    distance: "1.2 km",
    earnings: 5.50,
    ready: true
  },
  {
    id: "ORD-102",
    store: "Quick Grocer",
    storeLocation: "789 Oak St",
    customer: "Emily Johnson",
    customerLocation: "101 Pine St",
    items: 8,
    distance: "0.8 km",
    earnings: 4.75,
    ready: true
  }
];

const myOrders = [
  {
    id: "ORD-845",
    customer: "Sarah Williams",
    customerLocation: "303 Birch St",
    items: 5,
    status: "picked_up",
    earnings: 6.25
  }
];

const pastOrders = [
  {
    id: "ORD-823",
    date: "May 1, 2025",
    store: "Organic Harvest",
    customer: "Michael Brown",
    items: 4,
    earnings: 7.25,
    status: "completed"
  },
  {
    id: "ORD-782",
    date: "April 30, 2025",
    store: "Fresh Mart",
    customer: "Jennifer Lee",
    items: 6,
    earnings: 8.50,
    status: "completed"
  },
  {
    id: "ORD-741",
    date: "April 29, 2025",
    store: "Quick Grocer",
    customer: "Robert Johnson",
    items: 3,
    earnings: 5.75,
    status: "completed"
  }
];

const DeliveryOrders = () => {
  const { user } = useAuth();
  const [isOnline, setIsOnline] = useState(true);

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-bold">Orders</h1>
            <p className="text-muted-foreground">Manage your deliveries</p>
          </div>
          <div className="flex items-center space-x-3">
            <span className={isOnline ? "text-green-600 font-medium" : "text-gray-500"}>
              {isOnline ? "Available" : "Offline"}
            </span>
            <Button onClick={() => setIsOnline(!isOnline)} variant="outline">
              {isOnline ? "Go Offline" : "Go Online"}
            </Button>
          </div>
        </div>

        <Tabs defaultValue="current" className="space-y-4">
          <TabsList>
            <TabsTrigger value="current">Current Orders</TabsTrigger>
            <TabsTrigger value="available">Available Orders</TabsTrigger>
            <TabsTrigger value="past">Order History</TabsTrigger>
          </TabsList>

          <TabsContent value="current">
            {myOrders.length > 0 ? (
              <div className="space-y-4">
                {myOrders.map((order) => (
                  <Card key={order.id} className="bg-instait-light border-instait-purple">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold">{order.id}</h3>
                        <Badge variant="outline" className="bg-instait-purple text-white">
                          {order.status === "picked_up" ? "Out for Delivery" : "Picked Up"}
                        </Badge>
                      </div>
                      <p className="text-sm mb-3">
                        <span className="font-medium">Customer:</span> {order.customer}
                      </p>
                      <div className="flex items-start space-x-2 mb-3">
                        <MapPin className="h-4 w-4 mt-1 text-instait-orange" />
                        <p className="text-sm">{order.customerLocation}</p>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <p className="text-sm">
                          <span className="font-medium">{order.items} items</span> · ${order.earnings.toFixed(2)} earnings
                        </p>
                        <div className="flex space-x-2">
                          <Button variant="outline" className="text-xs" size="sm">
                            <Navigation className="h-3 w-3 mr-1" /> Navigation
                          </Button>
                          <Button className="text-xs" size="sm">
                            <CheckCircle className="h-3 w-3 mr-1" /> Mark Delivered
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <Package className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                  <p className="font-medium mb-2">No current orders</p>
                  <p className="text-muted-foreground mb-4">
                    You don't have any active deliveries at the moment.
                  </p>
                  <Button onClick={() => document.getElementById("available-orders-tab")?.click()}>
                    Browse Available Orders
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="available" id="available-orders-tab">
            {isOnline ? (
              availableOrders.length > 0 ? (
                <div className="grid gap-4">
                  {availableOrders.map((order) => (
                    <Card key={order.id}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold">{order.id}</h3>
                          {order.ready ? (
                            <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
                              Ready for pickup
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">
                              <Clock className="h-3 w-3 mr-1" /> Preparing
                            </Badge>
                          )}
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm font-medium">Pickup from:</p>
                            <p className="text-sm mb-1">{order.store}</p>
                            <div className="flex items-start space-x-2 mb-3">
                              <MapPin className="h-4 w-4 mt-1 text-instait-purple" />
                              <p className="text-xs">{order.storeLocation}</p>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Deliver to:</p>
                            <p className="text-sm mb-1">{order.customer}</p>
                            <div className="flex items-start space-x-2">
                              <MapPin className="h-4 w-4 mt-1 text-instait-orange" />
                              <p className="text-xs">{order.customerLocation}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <p className="text-sm">
                            <span className="font-medium">{order.items} items</span> · {order.distance} · ${order.earnings.toFixed(2)} earnings
                          </p>
                          <Button 
                            disabled={!order.ready} 
                            className="text-xs" 
                            size="sm"
                          >
                            <Package className="h-3 w-3 mr-1" /> Accept Order
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <p className="text-gray-500">No available orders at the moment. Check back soon!</p>
                  </CardContent>
                </Card>
              )
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <p className="font-medium mb-2">You're currently offline</p>
                  <p className="text-muted-foreground mb-4">
                    Go online to see and accept available orders.
                  </p>
                  <Button onClick={() => setIsOnline(true)}>
                    Go Online
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="past">
            {pastOrders.length > 0 ? (
              <div className="space-y-4">
                {pastOrders.map((order) => (
                  <Card key={order.id}>
                    <CardContent className="p-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">{order.id}</h3>
                            <Badge variant="outline" className="bg-green-100 text-green-800">
                              Completed
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {order.date} · {order.store}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">${order.earnings.toFixed(2)}</p>
                          <p className="text-sm">{order.items} items</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <p className="text-gray-500">No past orders to display.</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default DeliveryOrders;
