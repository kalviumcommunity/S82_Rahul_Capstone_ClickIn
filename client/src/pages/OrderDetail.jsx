import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, MapPin, Phone, ShoppingBag, Truck, User } from "lucide-react";

// Mock order data
const orderData = {
  "ORD-001": {
    id: "ORD-001",
    date: "May 1, 2025",
    time: "11:00 AM",
    store: "Fresh Mart",
    storeAddress: "123 Main St, New York, NY 10001",
    storePhone: "+1 (555) 123-4567",
    items: [
      { name: "Bananas", quantity: 6, price: 2.99 },
      { name: "Milk", quantity: 1, price: 3.49 },
      { name: "Bread", quantity: 1, price: 2.29 }
    ],
    subtotal: 8.77,
    deliveryFee: 1.99,
    tax: 0.88,
    total: 11.64,
    status: "delivered",
    deliveryTime: "11:30 AM",
    deliveryAddress: "456 Park Ave, Apt 7B, New York, NY 10022",
    paymentMethod: "Credit Card (****4567)",
    deliveryPerson: "John D.",
    deliveryPhone: "+1 (555) 987-6543"
  },
  "ORD-002": {
    id: "ORD-002",
    date: "April 30, 2025",
    time: "10:45 AM",
    store: "Quick Grocer",
    storeAddress: "789 Broadway, New York, NY 10003",
    storePhone: "+1 (555) 234-5678",
    items: [
      { name: "Chicken Breast", quantity: 2, price: 10.99 },
      { name: "Potatoes", quantity: 5, price: 4.99 },
      { name: "Tomatoes", quantity: 4, price: 3.99 }
    ],
    subtotal: 19.97,
    deliveryFee: 1.99,
    tax: 1.80,
    total: 23.76,
    status: "out-for-delivery",
    deliveryTime: "12:15 PM",
    deliveryAddress: "789 5th Ave, Apt 12C, New York, NY 10065",
    paymentMethod: "PayPal",
    deliveryPerson: "Sarah M.",
    deliveryPhone: "+1 (555) 876-5432"
  },
  "ORD-003": {
    id: "ORD-003",
    date: "April 28, 2025",
    time: "1:15 PM",
    store: "Organic Harvest",
    storeAddress: "321 7th Ave, New York, NY 10001",
    storePhone: "+1 (555) 345-6789",
    items: [
      { name: "Apples", quantity: 8, price: 6.99 },
      { name: "Kale", quantity: 1, price: 3.49 },
      { name: "Strawberries", quantity: 1, price: 5.99 }
    ],
    subtotal: 16.47,
    deliveryFee: 1.99,
    tax: 1.50,
    total: 19.96,
    status: "preparing",
    deliveryTime: "1:45 PM",
    deliveryAddress: "123 E 72nd St, Apt 4D, New York, NY 10021",
    paymentMethod: "Cash on Delivery",
    deliveryPerson: "Pending assignment",
    deliveryPhone: "Not assigned yet"
  }
};

const OrderDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the order from mock data
  const order = id ? orderData[id] : undefined;
  
  if (!order) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-6">
          <Button variant="ghost" onClick={() => navigate("/orders")} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Orders
          </Button>
          <div className="text-center py-10">
            <h3 className="text-lg font-medium mb-2">Order Not Found</h3>
            <p className="text-muted-foreground">The order you're looking for doesn't exist.</p>
          </div>
        </div>
      </MainLayout>
    );
  }
  
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
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        <Button variant="ghost" onClick={() => navigate("/orders")} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Orders
        </Button>
        
        <Card className="mb-6">
          <CardHeader className="pb-2 pt-4">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl">{order.id}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {order.date} at {order.time}
                </p>
              </div>
              {getStatusBadge(order.status)}
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2 flex items-center">
                  <ShoppingBag className="mr-2 h-4 w-4" /> Order Items
                </h3>
                <div className="space-y-2">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <div>
                        <span className="font-medium">{item.quantity}x</span> {item.name}
                      </div>
                      <div>${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-3" />
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <div>Subtotal</div>
                    <div>${order.subtotal.toFixed(2)}</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Delivery Fee</div>
                    <div>${order.deliveryFee.toFixed(2)}</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Tax</div>
                    <div>${order.tax.toFixed(2)}</div>
                  </div>
                  <Separator className="my-1" />
                  <div className="flex justify-between font-bold">
                    <div>Total</div>
                    <div>${order.total.toFixed(2)}</div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium mb-2 flex items-center">
                    <MapPin className="mr-2 h-4 w-4" /> Delivery Information
                  </h3>
                  <p className="text-sm">{order.deliveryAddress}</p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2 flex items-center">
                    <Truck className="mr-2 h-4 w-4" /> Delivery Person
                  </h3>
                  <p className="text-sm flex items-center">
                    <User className="mr-2 h-4 w-4" /> {order.deliveryPerson}
                  </p>
                  {order.status !== "preparing" && (
                    <p className="text-sm flex items-center">
                      <Phone className="mr-2 h-4 w-4" /> {order.deliveryPhone}
                    </p>
                  )}
                </div>
                
                <div>
                  <h3 className="font-medium mb-2 flex items-center">
                    <ShoppingBag className="mr-2 h-4 w-4" /> Store Information
                  </h3>
                  <p className="text-sm font-medium">{order.store}</p>
                  <p className="text-sm">{order.storeAddress}</p>
                  <p className="text-sm">{order.storePhone}</p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Payment Method</h3>
                  <p className="text-sm">{order.paymentMethod}</p>
                </div>
              </div>
              
              <Separator />
              
              <div className="pt-2">
                {order.status === "delivered" ? (
                  <Button variant="outline" className="w-full">
                    Reorder
                  </Button>
                ) : (
                  <Button variant="outline" className="w-full">
                    Contact Support
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default OrderDetail;
