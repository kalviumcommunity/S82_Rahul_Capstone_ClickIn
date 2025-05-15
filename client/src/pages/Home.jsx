// import React from "react";
// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Search } from "lucide-react";
// import MainLayout from "@/layouts/MainLayout";
// import LocationSelector from "@/components/LocationSelector";
// import CategoryList from "@/components/CategoryList";
// import StoreList from "@/components/StoreList";
// import ProductList from "@/components/ProductList";
// import { useAuth } from "@/contexts/AuthContext";

// const Home = () => {
//   const { user, isAuthenticated } = useAuth();

//   return (
//     <MainLayout>
//       <div className="bg-instait-light py-6">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between">
//             <LocationSelector />
//             <Link to="/search">
//               <Button variant="ghost" size="sm" className="flex items-center gap-2">
//                 <Search className="h-4 w-4" />
//                 <span>Search products</span>
//               </Button>
//             </Link>
//           </div>

//           {isAuthenticated && user?.location && (
//             <div className="mt-6">
//               <div className="rounded-lg bg-white shadow-sm p-4">
//                 <h2 className="text-lg font-bold mb-2">Welcome back, {user.name}!</h2>
//                 <p className="text-sm text-gray-600">
//                   Get your groceries delivered in 15 minutes.
//                 </p>
//               </div>
//             </div>
//           )}

//           {!isAuthenticated && (
//             <div className="mt-6 rounded-lg bg-gradient-to-r from-instait-purple to-purple-400 text-white p-6">
//               <h1 className="text-2xl font-bold mb-2">Groceries delivered in minutes</h1>
//               <p className="mb-4">Order from your favorite local stores and get it delivered instantly.</p>
//               <div className="flex gap-4">
//                 <Link to="/register">
//                   <Button variant="secondary">Sign Up</Button>
//                 </Link>
//                 <Link to="/login">
//                   <Button
//                     variant="outline"
//                     className="bg-transparent text-white border-white hover:bg-white hover:text-purple-700"
//                   >
//                     Login
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-6">
//         <CategoryList />

//         <div className="p-4 bg-instait-light rounded-lg my-8 relative overflow-hidden">
//           <div className="relative z-10">
//             <h2 className="text-xl font-bold mb-2">Ready in 15 minutes</h2>
//             <p className="mb-4 max-w-md">
//               Groceries, essentials, and more delivered to your doorstep in minutes.
//             </p>
//             <Link to="/stores">
//               <Button className="bg-instait-purple hover:bg-purple-700">
//                 Order Now
//               </Button>
//             </Link>
//           </div>
//           <div
//             className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-contain bg-no-repeat bg-right"
//             style={{
//               backgroundImage: `url('https://images.unsplash.com/photo-1543168256-418811576931?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3')`,
//               opacity: 0.8,
//             }}
//           />
//         </div>

//         <ProductList title="Popular Products" limit={4} />
//         <StoreList title="Stores Near You" />
//       </div>
//     </MainLayout>
//   );
// };

// export default Home;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import MainLayout from "@/layouts/MainLayout";
import LocationSelector from "@/components/LocationSelector";
import CategoryList from "@/components/CategoryList";
import StoreList from "@/components/StoreList";
import ProductList from "@/components/ProductList";
import { useAuth } from "@/contexts/AuthContext";
import SearchBar from "@/components/Search/SearchBar";

const Home = () => {
  const { user, isAuthenticated } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const trimmed = searchTerm.trim();
    if (trimmed.length == 0) {
      navigate(`/explore?q=${encodeURIComponent(trimmed)}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <MainLayout>
      <div className="bg-instait-light py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-4">
            <LocationSelector />
            <div className="flex items-center gap-2 max-w-md w-full">
             
              <Button
  variant="ghost"
  size="sm"
  onClick={handleSearch}
  className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-300 hover:bg-gray-100"
>
  <Search className="h-4 w-4" />
  <span className="text-sm font-medium">Search</span>
</Button>

            </div>
          </div>

          {isAuthenticated && user?.location && (
            <div className="mt-6">
              <div className="rounded-lg bg-white shadow-sm p-4">
                <h2 className="text-lg font-bold mb-2">Welcome back, {user.name}!</h2>
                <p className="text-sm text-gray-600">
                  Get your groceries delivered in 15 minutes.
                </p>
              </div>
            </div>
          )}

          {!isAuthenticated && (
            <div className="mt-6 rounded-lg bg-gradient-to-r from-instait-purple to-purple-400 text-white p-6">
              <h1 className="text-2xl font-bold mb-2">Groceries delivered in minutes</h1>
              <p className="mb-4">Order from your favorite local stores and get it delivered instantly.</p>
              <div className="flex gap-4">
                <Link to="/register">
                  <Button variant="secondary">Sign Up</Button>
                </Link>
                <Link to="/login">
                  <Button
                    variant="outline"
                    className="bg-transparent text-white border-white hover:bg-white hover:text-purple-700"
                  >
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <CategoryList />

        <div className="p-4 bg-instait-light rounded-lg my-8 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-xl font-bold mb-2">Ready in 15 minutes</h2>
            <p className="mb-4 max-w-md">
              Groceries, essentials, and more delivered to your doorstep in minutes.
            </p>
            <Link to="/stores">
              <Button className="bg-instait-purple hover:bg-purple-700">
                Order Now
              </Button>
            </Link>
          </div>
          <div
            className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-contain bg-no-repeat bg-right"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1543168256-418811576931?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3')`,
              opacity: 0.8,
            }}
          />
        </div>

        <ProductList title="Popular Products" limit={4} />
        <StoreList title="Stores Near You" />
      </div>
    </MainLayout>
  );
};

export default Home;
