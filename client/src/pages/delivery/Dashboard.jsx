import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { MapPin, Package, CheckCircle, Clock, Navigation } from "lucide-react";
import MainLayout from "@/layouts/MainLayout";
import { useAuth } from "@/contexts/AuthContext";

// Mock data for available orders
const availableOrders = [
  {
    id: "ORD-001",
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
    id: "ORD-002",
    store: "Quick Grocer",
    storeLocation: "789 Oak St",
    customer: "Emily Johnson",
    customerLocation: "101 Pine St",
    items: 8,
    distance: "0.8 km",
    earnings: 4.75,
    ready: true
  },
  {
    id: "ORD-003",
    store: "Organic Harvest",
    storeLocation: "555 Cedar St",
    customer: "Michael Brown",
    customerLocation: "202 Maple St",
    items: 2,
    distance: "2.5 km",
    earnings: 7.25,
    ready: false
  }
];

// Mock data for current deliveries
const myDeliveries = [
  {
    id: "ORD-845",
    customer: "Sarah Williams",
    customerLocation: "303 Birch St",
    items: 5,
    status: "picked_up",
    earnings: 6.25
  }
];

// Mock data for earnings
const earningsHistory = [
  { day: "Today", amount: 23.50, deliveries: 4 },
  { day: "Yesterday", amount: 38.75, deliveries: 7 },
  { day: "This Week", amount: 157.50, deliveries: 28 },
  { day: "This Month", amount: 650.25, deliveries: 112 }
];

const DeliveryDashboard = () => {
  const { user } = useAuth();
  const [isOnline, setIsOnline] = useState(true);

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Delivery Dashboard</h1>
            <p className="text-gray-600">Welcome back, {user?.name}</p>
          </div>
          <div className="mt-4 sm:mt-0 flex items-center space-x-3">
            <Label htmlFor="online-mode">Online Status</Label>
            <div className="flex items-center space-x-2">
              <Switch
                id="online-mode"
                checked={isOnline}
                onCheckedChange={setIsOnline}
              />
              <span className={isOnline ? "text-green-600 font-medium" : "text-gray-500"}>
                {isOnline ? "Available" : "Offline"}
              </span>
            </div>
          </div>
        </div>

        {isOnline && (
          <>
            {myDeliveries.length > 0 && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Current Delivery</h2>
                {myDeliveries.map((delivery) => (
                  <Card key={delivery.id} className="bg-instait-light border-instait-purple">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold">{delivery.id}</h3>
                        <Badge variant="outline" className="bg-instait-purple text-white">
                          {delivery.status === "picked_up" ? "Out for Delivery" : "Picked Up"}
                        </Badge>
                      </div>
                      <p className="text-sm mb-3">
                        <span className="font-medium">Customer:</span> {delivery.customer}
                      </p>
                      <div className="flex items-start space-x-2 mb-3">
                        <MapPin className="h-4 w-4 mt-1 text-instait-orange" />
                        <p className="text-sm">{delivery.customerLocation}</p>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <p className="text-sm">
                          <span className="font-medium">{delivery.items} items</span> · ${delivery.earnings.toFixed(2)} earnings
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
            )}

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Available Orders</h2>
              {availableOrders.length > 0 ? (
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
              )}
            </div>
          </>
        )}

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Your Earnings</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {earningsHistory.map((item) => (
              <Card key={item.day}>
                <CardHeader className="pb-1">
                  <CardTitle className="text-sm font-medium">{item.day}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${item.amount.toFixed(2)}</div>
                  <p className="text-xs text-muted-foreground">
                    {item.deliveries} deliveries
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DeliveryDashboard;
