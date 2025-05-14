import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin } from "lucide-react";

// Mock store data
const stores = [
  {
    id: 1,
    name: "Fresh Mart",
    image: "https://images.unsplash.com/photo-1553546895-531931aa1aa8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.5,
    distance: "1.2 km",
    deliveryTime: "15-20 min",
    categories: ["Groceries", "Fresh Produce"]
  },
  {
    id: 2,
    name: "Quick Grocer",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.2,
    distance: "0.8 km",
    deliveryTime: "10-15 min",
    categories: ["Groceries", "Household"]
  },
  {
    id: 3,
    name: "Organic Harvest",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.7,
    distance: "1.5 km",
    deliveryTime: "20-30 min",
    categories: ["Organic", "Fresh Produce"]
  },
  {
    id: 4,
    name: "Daily Essentials",
    image: "https://images.unsplash.com/photo-1534723452862-4c874018d8d9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.0,
    distance: "0.5 km",
    deliveryTime: "10-15 min",
    categories: ["Groceries", "Personal Care"]
  }
];

const StoreList = ({ title = "Nearby Stores" }) => {
  return (
    <section className="my-8">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stores.map((store) => (
          <Link key={store.id} to={`/store/${store.id}`} className="animate-fade-in">
            <Card className="overflow-hidden hover:shadow-lg transition-all">
              <div className="h-40 overflow-hidden">
                <img
                  src={store.image}
                  alt={store.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1">{store.name}</h3>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <span className="flex items-center">
                    ⭐ {store.rating}
                  </span>
                  <span className="mx-2">•</span>
                  <span>{store.categories.join(", ")}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center text-gray-600">
                    <MapPin className="h-3 w-3 mr-1" /> {store.distance}
                  </span>
                  <span className="flex items-center text-gray-600">
                    <Clock className="h-3 w-3 mr-1" /> {store.deliveryTime}
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default StoreList;
