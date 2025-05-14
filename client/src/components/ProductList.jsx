import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";

// Mock product data
const products = [
  {
    id: 1,
    name: "Fresh Red Apple",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: 2.99,
    unit: "500g",
    discount: 0,
    storeId: 1
  },
  {
    id: 2,
    name: "Organic Bananas",
    image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: 1.99,
    unit: "6 pcs",
    discount: 10,
    storeId: 1
  },
  {
    id: 3,
    name: "Fresh Milk",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: 3.49,
    unit: "1L",
    discount: 0,
    storeId: 2
  },
  {
    id: 4,
    name: "Brown Eggs",
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: 4.99,
    unit: "12 pcs",
    discount: 5,
    storeId: 2
  },
  {
    id: 5,
    name: "Whole Wheat Bread",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: 2.49,
    unit: "400g",
    discount: 0,
    storeId: 3
  },
  {
    id: 6,
    name: "Avocado",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: 1.99,
    unit: "1 pc",
    discount: 0,
    storeId: 3
  },
  {
    id: 7,
    name: "Orange Juice",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: 3.99,
    unit: "1L",
    discount: 15,
    storeId: 4
  },
  {
    id: 8,
    name: "Tomatoes",
    image: "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    price: 2.29,
    unit: "500g",
    discount: 0,
    storeId: 4
  }
];

const ProductList = ({ title = "Popular Products", storeId, categoryId, limit }) => {
  // Filter products based on props
  let filteredProducts = [...products];

  if (storeId) {
    filteredProducts = filteredProducts.filter(p => p.storeId === storeId);
  }

  if (limit && filteredProducts.length > limit) {
    filteredProducts = filteredProducts.slice(0, limit);
  }

  const getDisplayPrice = (price, discount) => {
    if (discount <= 0) return `$${price.toFixed(2)}`;
    const discountedPrice = price * (1 - discount / 100);
    return (
      <div className="flex flex-col">
        <span className="text-instait-purple font-semibold">${discountedPrice.toFixed(2)}</span>
        <span className="text-xs line-through text-gray-500">${price.toFixed(2)}</span>
      </div>
    );
  };

  return (
    <section className="my-8">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredProducts.map(product => (
          <Card key={product.id} className="overflow-hidden animate-fade-in relative">
            <Link to={`/product/${product.id}`}>
              <div className="h-36 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            <CardContent className="p-3">
              <Link to={`/product/${product.id}`}>
                <h3 className="font-medium text-sm mb-1 line-clamp-2">{product.name}</h3>
                <p className="text-xs text-gray-500 mb-2">{product.unit}</p>
                <div className="flex justify-between items-center">
                  <div className="font-semibold">
                    {getDisplayPrice(product.price, product.discount)}
                  </div>
                </div>
              </Link>
              <div className="mt-2">
                <Button 
                  size="sm" 
                  className="w-full text-xs h-8"
                  onClick={() => console.log(`Add ${product.name} to cart`)}
                >
                  <Plus className="h-3 w-3 mr-1" /> Add
                </Button>
              </div>
              {product.discount > 0 && (
                <div className="absolute top-0 right-0 bg-instait-orange text-white text-xs px-2 py-1">
                  {product.discount}% OFF
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
