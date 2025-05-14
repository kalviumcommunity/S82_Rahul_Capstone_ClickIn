import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";

// Mock category data
const categoryData = {
  "1": {
    id: 1,
    name: "Fruits & Vegetables",
    icon: "🥕",
    products: [
      { id: "p1", name: "Organic Bananas", price: 2.99, image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&q=80&w=160&h=160" },
      { id: "p2", name: "Red Apples", price: 3.49, image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=160&h=160" },
      { id: "p3", name: "Fresh Spinach", price: 1.99, image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=160&h=160" },
      { id: "p4", name: "Carrots", price: 1.29, image: "https://images.unsplash.com/photo-1590165482129-1b8b27698780?auto=format&fit=crop&q=80&w=160&h=160" },
      { id: "p5", name: "Avocado", price: 2.99, image: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?auto=format&fit=crop&q=80&w=160&h=160" },
      { id: "p6", name: "Bell Peppers", price: 1.79, image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&q=80&w=160&h=160" },
    ]
  },
  "2": {
    id: 2,
    name: "Dairy & Breakfast",
    icon: "🥛",
    products: [
      { id: "p7", name: "Whole Milk", price: 3.99, image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=160&h=160" },
      { id: "p8", name: "Large Eggs", price: 4.49, image: "https://images.unsplash.com/photo-1598965402089-897ce52e8355?auto=format&fit=crop&q=80&w=160&h=160" },
      { id: "p9", name: "Greek Yogurt", price: 5.99, image: "https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?auto=format&fit=crop&q=80&w=160&h=160" }
    ]
  },
  "3": {
    id: 3,
    name: "Snacks",
    icon: "🍿",
    products: [
      { id: "p10", name: "Potato Chips", price: 3.49, image: "https://images.unsplash.com/photo-1621447504864-d8686e12698c?auto=format&fit=crop&q=80&w=160&h=160" },
      { id: "p11", name: "Chocolate Bar", price: 2.99, image: "https://images.unsplash.com/photo-1614088685112-0a760b71a3c8?auto=format&fit=crop&q=80&w=160&h=160" },
      { id: "p12", name: "Mixed Nuts", price: 6.99, image: "https://images.unsplash.com/photo-1536816579748-4ecb3f03d72a?auto=format&fit=crop&q=80&w=160&h=160" }
    ]
  }
};

const CategoryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const category = id ? categoryData[id] : undefined;

  if (!category) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-6">
          <Button variant="ghost" onClick={() => navigate("/stores")} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Categories
          </Button>
          <div className="text-center py-10">
            <h3 className="text-lg font-medium mb-2">Category Not Found</h3>
            <p className="text-muted-foreground">The category you're looking for doesn't exist.</p>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        <Button variant="ghost" onClick={() => navigate("/stores")} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Categories
        </Button>

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold flex items-center">
            <span className="text-3xl mr-2">{category.icon}</span>
            {category.name}
          </h1>
          <div className="w-full max-w-xs">
            <Input placeholder="Search in this category..." />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {category.products.map((product) => (
            <Card 
              key={product.id}
              className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="aspect-square w-full overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="font-medium text-sm mb-1 line-clamp-2">{product.name}</h3>
                <p className="font-bold">${product.price.toFixed(2)}</p>
                <Button size="sm" className="w-full mt-2">Add</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default CategoryDetail;
