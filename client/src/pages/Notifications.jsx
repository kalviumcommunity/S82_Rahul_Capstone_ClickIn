import React from "react";
import MainLayout from "@/layouts/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, ShoppingBag, Tag, Store } from "lucide-react";

// Mock notifications data
const notifications = [
  {
    id: 1,
    type: "order",
    title: "Order Delivered",
    message: "Your order #ORD-001 has been delivered successfully.",
    time: "10 minutes ago",
    read: false
  },
  {
    id: 2,
    type: "promo",
    title: "Weekend Sale",
    message: "Get 20% off on all fresh vegetables this weekend!",
    time: "2 hours ago",
    read: true
  },
  {
    id: 3,
    type: "order",
    title: "Order Out for Delivery",
    message: "Your order #ORD-002 is out for delivery. Expected in 15 minutes.",
    time: "3 hours ago",
    read: true
  },
  {
    id: 4,
    type: "store",
    title: "New Store Added",
    message: "Organic Heaven is now available in your area!",
    time: "Yesterday",
    read: true
  },
  {
    id: 5,
    type: "promo",
    title: "Special Offer",
    message: "Use code WELCOME10 for 10% off your first order!",
    time: "2 days ago",
    read: true
  }
];

const Notifications = () => {
  const getNotificationIcon = (type) => {
    switch (type) {
      case "order":
        return <ShoppingBag className="h-5 w-5 text-instait-purple" />;
      case "promo":
        return <Tag className="h-5 w-5 text-instait-orange" />;
      case "store":
        return <Store className="h-5 w-5 text-blue-500" />;
      default:
        return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Notifications</h1>
          <button className="text-sm text-instait-purple hover:underline">
            Mark all as read
          </button>
        </div>

        <div className="space-y-4">
          {notifications.map((notification) => (
            <Card
              key={notification.id}
              className={`overflow-hidden ${!notification.read ? "border-l-4 border-l-instait-purple" : ""}`}
            >
              <CardContent className="p-4 flex gap-3">
                <div className="mt-1">
                  {getNotificationIcon(notification.type)}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">
                      {notification.title}
                      {!notification.read && (
                        <Badge className="ml-2 bg-instait-purple">New</Badge>
                      )}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {notification.time}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {notification.message}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {notifications.length === 0 && (
          <div className="text-center py-16">
            <Bell className="h-12 w-12 mx-auto text-gray-400 mb-3" />
            <h3 className="text-lg font-medium mb-1">No notifications yet</h3>
            <p className="text-muted-foreground">
              We'll notify you when there are new updates.
            </p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Notifications;
