import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Edit, Trash, AlertCircle } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";

// Mock products data
const mockProducts = [
  {
    id: "prod-001",
    name: "Organic Bananas",
    category: "Fruits & Vegetables",
    price: 2.99,
    stock: 25,
    image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&q=80&w=160&h=160",
    discount: 0,
    status: "active"
  },
  {
    id: "prod-002",
    name: "Whole Milk",
    category: "Dairy & Breakfast",
    price: 3.99,
    stock: 15,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=160&h=160",
    discount: 10,
    status: "active"
  },
  {
    id: "prod-003",
    name: "Brown Eggs",
    category: "Dairy & Breakfast",
    price: 4.49,
    stock: 8,
    image: "https://images.unsplash.com/photo-1598965402089-897ce52e8355?auto=format&fit=crop&q=80&w=160&h=160",
    discount: 0,
    status: "active"
  },
  {
    id: "prod-004",
    name: "Potato Chips",
    category: "Snacks",
    price: 3.49,
    stock: 40,
    image: "https://images.unsplash.com/photo-1621447504864-d8686e12698c?auto=format&fit=crop&q=80&w=160&h=160",
    discount: 0,
    status: "active"
  },
  {
    id: "prod-005",
    name: "Avocado",
    category: "Fruits & Vegetables",
    price: 2.99,
    stock: 0,
    image: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?auto=format&fit=crop&q=80&w=160&h=160",
    discount: 0,
    status: "out-of-stock"
  }
];

// Categories for filter
const categories = [
  "All Categories",
  "Fruits & Vegetables",
  "Dairy & Breakfast",
  "Snacks",
  "Beverages",
  "Household",
  "Personal Care",
  "Bakery",
  "Frozen Foods"
];

const VendorProducts = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredProducts = mockProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "All Categories" || product.category === categoryFilter;
    const matchesStatus = statusFilter === "all" ||
      (statusFilter === "active" && product.status === "active") ||
      (statusFilter === "out-of-stock" && product.status === "out-of-stock");

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleDeleteProduct = (productId) => {
    toast({
      title: "Product Removed",
      description: "The product has been removed successfully.",
    });
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-bold">Products</h1>
            <p className="text-muted-foreground">Manage your store inventory</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" /> Add New Product
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">In Stock</SelectItem>
              <SelectItem value="out-of-stock">Out of Stock</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Card>
          <div className="rounded-md border">
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead className="[&_tr]:border-b">
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <th className="h-12 px-4 text-left align-middle font-medium">Product</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Category</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Price</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Stock</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0">
                  {filteredProducts.map((product) => (
                    <tr key={product.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <td className="p-4 align-middle">
                        <div className="flex items-center gap-3">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-10 w-10 rounded-md object-cover"
                          />
                          <div>
                            <p className="font-medium">{product.name}</p>
                            <p className="text-xs text-muted-foreground">#{product.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 align-middle">{product.category}</td>
                      <td className="p-4 align-middle">
                        {product.discount > 0 ? (
                          <div>
                            <span className="text-muted-foreground line-through mr-1">
                              ${product.price.toFixed(2)}
                            </span>
                            <span className="font-medium">
                              ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                            </span>
                          </div>
                        ) : (
                          <span className="font-medium">${product.price.toFixed(2)}</span>
                        )}
                      </td>
                      <td className="p-4 align-middle">
                        {product.stock === 0 ? (
                          <span className="text-red-500 font-medium flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" /> None
                          </span>
                        ) : product.stock < 10 ? (
                          <span className="text-amber-500 font-medium">
                            {product.stock} left
                          </span>
                        ) : (
                          <span>{product.stock} in stock</span>
                        )}
                      </td>
                      <td className="p-4 align-middle">
                        {product.status === "active" ? (
                          <Badge className="bg-green-500">In Stock</Badge>
                        ) : (
                          <Badge variant="destructive">Out of Stock</Badge>
                        )}
                      </td>
                      <td className="p-4 align-middle">
                        <div className="flex gap-2">
                          <Button variant="outline" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="text-red-500"
                            onClick={() => handleDeleteProduct(product.id)}
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredProducts.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No products found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
};

export default VendorProducts;
