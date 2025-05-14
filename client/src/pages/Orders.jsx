import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Clock } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

// Mock orders data
const mockOrders = [
  {
    id: "ORD-001",
    date: "May 1, 2025",
    store: "Fresh Mart",
    items: [
      { name: "Bananas", quantity: 6, price: 2.99 },
      { name: "Milk", quantity: 1, price: 3.49 },
      { name: "Bread", quantity: 1, price: 2.29 }
    ],
    total: 8.77,
    status: "delivered",
    deliveryTime: "11:30 AM",
  },
  {
    id: "ORD-002",
    date: "April 30, 2025",
    store: "Quick Grocer",
    items: [
      { name: "Chicken Breast", quantity: 2, price: 10.99 },
      { name: "Potatoes", quantity: 5, price: 4.99 },
      { name: "Tomatoes", quantity: 4, price: 3.99 }
    ],
    total: 19.97,
    status: "out-for-delivery",
    deliveryTime: "12:15 PM",
  },
  {
    id: "ORD-003",
    date: "April 28, 2025",
    store: "Organic Harvest",
    items: [
      { name: "Apples", quantity: 8, price: 6.99 },
      { name: "Kale", quantity: 1, price: 3.49 },
      { name: "Strawberries", quantity: 1, price: 5.99 }
    ],
    total: 16.47,
    status: "preparing",
    deliveryTime: "1:45 PM",
  }
];

const Orders = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const getStatusBadge = (status) => {
    switch(status) {
      case "delivered":
        return <Badge className="bg-green-500">Delivered</Badge>;
      case "out-for-delivery":
        return <Badge className="bg-blue-500">Out for Delivery</Badge>;
      case "preparing":
        return <Badge className="bg-yellow-500">Preparing</Badge>;
      default:
        return <Badge className="bg-gray-500">Processing</Badge>;
    }
  };

  const viewOrderDetails = (orderId) => {
    navigate(`/order/${orderId}`);
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">My Orders</h1>
        
        {mockOrders.length > 0 ? (
          <div className="space-y-4">
            {mockOrders.map((order) => (
              <Card key={order.id} className="shadow-sm">
                <CardHeader className="pb-2 pt-4 px-4 flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">{order.id}</CardTitle>
                    <p className="text-sm text-muted-foreground">{order.date}</p>
                  </div>
                  {getStatusBadge(order.status)}
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <ShoppingBag className="h-4 w-4" />
                    <span className="font-medium">{order.store}</span>
                    <span className="text-muted-foreground">({order.items.length} items)</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-4 w-4" />
                    <span>{order.deliveryTime}</span>
                  </div>
                  <div className="border-t my-2 pt-2 flex justify-between items-center">
                    <span className="font-medium">${order.total.toFixed(2)}</span>
                    <Button onClick={() => viewOrderDetails(order.id)}>
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <ShoppingBag className="h-12 w-12 mx-auto text-gray-400 mb-3" />
            <h3 className="text-lg font-medium mb-2">No orders yet</h3>
            <p className="text-muted-foreground mb-4">When you place an order, it will appear here</p>
            <Button onClick={() => navigate('/stores')}>Start Shopping</Button>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Orders;
