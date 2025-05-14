import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MinusCircle, PlusCircle, ChevronLeft, Star, Truck, Clock, ShoppingCart } from "lucide-react";
import MainLayout from "@/layouts/MainLayout";
import ProductList from "@/components/ProductList";

// Mock product data - you would fetch this from an API in a real app
const productDetails = {
  id: 1,
  name: "Fresh Red Apple",
  image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  price: 2.99,
  unit: "500g",
  discount: 0,
  storeId: 1,
  store: "Fresh Mart",
  description: "Fresh, crisp and delicious red apples. Perfect for snacking, baking, or adding to your favorite recipes. Our apples are sourced from local orchards and carefully selected to ensure quality and freshness.",
  category: "Fruits & Vegetables",
  rating: 4.5,
  reviews: 128,
  inStock: true,
  variants: ["250g", "500g", "1kg"],
  nutritionalInfo: {
    calories: 52,
    protein: "0.3g",
    carbs: "14g",
    fiber: "2.4g",
    sugar: "10g"
  }
};

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState(productDetails.variants[1]);
  
  // In a real app, you would fetch the product data based on the ID
  const product = productDetails;
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  // Calculate the price with discount if applicable
  const calculatePrice = () => {
    if (product.discount) {
      const discountedPrice = product.price * (1 - product.discount / 100);
      return discountedPrice.toFixed(2);
    }
    return product.price.toFixed(2);
  };
  
  const totalPrice = (parseFloat(calculatePrice()) * quantity).toFixed(2);

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        <div className="mb-4">
          <Link to="/stores" className="flex items-center text-gray-600 hover:text-instait-purple transition-colors">
            <ChevronLeft className="h-4 w-4" />
            <span className="ml-1">Back to Shopping</span>
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-96 object-cover"
            />
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{product.category}</p>
                    <CardTitle className="text-2xl font-bold mt-1">{product.name}</CardTitle>
                  </div>
                  
                  {product.inStock ? (
                    <div className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-md">
                      In Stock
                    </div>
                  ) : (
                    <div className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-md">
                      Out of Stock
                    </div>
                  )}
                </div>
                
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm ml-1">{product.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                  <div className="text-sm text-instait-purple">From {product.store}</div>
                </div>
                
                <CardDescription className="mt-4">{product.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Size</label>
                    <Select value={variant} onValueChange={setVariant}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        {product.variants.map((v) => (
                          <SelectItem key={v} value={v}>
                            {v}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Quantity</label>
                    <div className="flex items-center">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        onClick={decreaseQuantity}
                        disabled={quantity <= 1}
                      >
                        <MinusCircle className="h-4 w-4" />
                      </Button>
                      <span className="mx-4 font-medium">{quantity}</span>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        onClick={increaseQuantity}
                      >
                        <PlusCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <div className="text-sm font-medium">Price per unit:</div>
                      <div className="font-bold text-lg">
                        ${calculatePrice()}
                        {product.discount > 0 && (
                          <span className="text-sm line-through text-gray-500 ml-2">
                            ${product.price.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Total:</div>
                      <div className="font-bold text-xl text-instait-purple">
                        ${totalPrice}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Truck className="h-4 w-4" />
                      <span>Fast delivery available</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>Delivery in 15-30 minutes</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="flex flex-col sm:flex-row gap-3">
                <Button className="w-full sm:w-auto" size="lg">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
                <Button variant="secondary" className="w-full sm:w-auto" size="lg">
                  Buy Now
                </Button>
              </CardFooter>
            </Card>
            
            <div className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Nutritional Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm font-medium">Calories</p>
                      <p className="font-bold">{product.nutritionalInfo.calories}</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm font-medium">Protein</p>
                      <p className="font-bold">{product.nutritionalInfo.protein}</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm font-medium">Carbs</p>
                      <p className="font-bold">{product.nutritionalInfo.carbs}</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm font-medium">Fiber</p>
                      <p className="font-bold">{product.nutritionalInfo.fiber}</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm font-medium">Sugar</p>
                      <p className="font-bold">{product.nutritionalInfo.sugar}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <ProductList title="You May Also Like" storeId={product.storeId} limit={4} />
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetail;
