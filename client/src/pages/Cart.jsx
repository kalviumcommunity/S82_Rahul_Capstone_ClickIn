import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MinusCircle, PlusCircle, ChevronLeft, Trash2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import MainLayout from "@/layouts/MainLayout";

// Mock cart data
const initialCart = [
  {
    id: 1,
    name: "Fresh Red Apple",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: 2.99,
    quantity: 2,
    unit: "500g",
    storeId: 1,
    store: "Fresh Mart"
  },
  {
    id: 3,
    name: "Fresh Milk",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: 3.49,
    quantity: 1,
    unit: "1L",
    storeId: 2,
    store: "Quick Grocer"
  },
  {
    id: 8,
    name: "Tomatoes",
    image: "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: 2.29,
    quantity: 3,
    unit: "500g",
    storeId: 4,
    store: "Daily Essentials"
  }
];

const Cart = () => {
  const [cart, setCart] = useState(initialCart);
  const [couponCode, setCouponCode] = useState("");

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 2.99;
  const total = subtotal + deliveryFee;

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        <div className="mb-4">
          <Link
            to="/"
            className="flex items-center text-gray-600 hover:text-instait-purple transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="ml-1">Continue Shopping</span>
          </Link>
        </div>

        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

        {cart.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="space-y-4">
                {cart.map((item) => (
                  <Card key={item.id} className="animate-fade-in">
                    <CardContent className="p-4">
                      <div className="flex">
                        <div className="w-24 h-24 overflow-hidden rounded-md">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="ml-4 flex-1">
                          <div className="flex justify-between">
                            <div>
                              <Link
                                to={`/product/${item.id}`}
                                className="font-medium hover:text-instait-purple"
                              >
                                {item.name}
                              </Link>
                              <p className="text-sm text-gray-500">{item.unit}</p>
                              <p className="text-xs text-gray-400">From {item.store}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold">
                                ${(item.price * item.quantity).toFixed(2)}
                              </p>
                              <p className="text-xs text-gray-500">
                                ${item.price.toFixed(2)} each
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-7 w-7"
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                              >
                                <MinusCircle className="h-3 w-3" />
                              </Button>
                              <span className="mx-3 font-medium">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-7 w-7"
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                              >
                                <PlusCircle className="h-3 w-3" />
                              </Button>
                            </div>

                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-gray-500 hover:text-red-500"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <Card className="sticky top-20">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Delivery Fee</span>
                      <span className="font-medium">${deliveryFee.toFixed(2)}</span>
                    </div>

                    <div className="flex gap-2">
                      <Input
                        placeholder="Coupon Code"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="flex-1"
                      />
                      <Button variant="outline">Apply</Button>
                    </div>

                    <Separator />

                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-instait-purple">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" size="lg">
                    Proceed to Checkout
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">
              Looks like you haven't added anything to your cart yet
            </p>
            <Link to="/">
              <Button>Continue Shopping</Button>
            </Link>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Cart;
