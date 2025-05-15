import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const categories = [
  { id: 1, name: "Fruits & Vegetables", icon: "🥕" },
  { id: 2, name: "Dairy & Breakfast", icon: "🥛" },
  { id: 3, name: "Snacks", icon: "🍿" },
  { id: 4, name: "Beverages", icon: "🥤" },0
  { id: 5, name: "Household", icon: "🧹" },
  { id: 6, name: "Personal Care", icon: "🧴" },
  { id: 7, name: "Bakery", icon: "🍞" },
  { id: 8, name: "Frozen Foods", icon: "🧊" }
];

const CategoryList = () => {
  return (
    <section className="my-8">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
        {categories.map((category) => (
          <Link 
            key={category.id} 
            to={`/category/${category.id}`}
            className="animate-fade-in"
          >
            <Button
              variant="outline"
              className="w-full h-24 flex flex-col items-center justify-center gap-2 hover:border-instait-purple hover:text-instait-purple transition-colors"
            >
              <span className="text-2xl">{category.icon}</span>
              <span className="text-xs text-center">{category.name}</span>
            </Button>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
