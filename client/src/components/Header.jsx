import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const { isAuthenticated, role, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to={isAuthenticated ? (
          role === "customer" ? "/" : 
          role === "vendor" ? "/vendor/dashboard" : 
          "/delivery/dashboard"
        ) : "/"} className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-instait-purple">ClickIn</span>
        </Link>

        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              {role === "customer" && (
                <>
                  <Link to="/cart" className="relative p-2">
                    <ShoppingCart className="h-6 w-6 text-gray-600" />
                    <span className="absolute top-0 right-0 bg-instait-purple text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                      0
                    </span>
                  </Link>
                  <Link to="/notifications" className="p-2">
                    <Bell className="h-6 w-6 text-gray-600" />
                  </Link>
                </>
              )}
              <div className="flex items-center space-x-3">
                <Link to={role === "customer" ? "/profile" :
                  role === "vendor" ? "/vendor/settings" :
                  "/delivery/profile"} className="p-2">
                  <User className="h-6 w-6 text-gray-600" />
                </Link>
                <Button variant="outline" size="sm" onClick={logout}>
                  Logout
                </Button>
              </div>
            </>
          ) : (
            <div className="flex items-center space-x-2">
              <Link to="/login">
                <Button variant="outline" size="sm">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button size="sm">Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
