import React from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import {
  Home,
  Store,
  ShoppingBag,
  User,
  Clock,
  Package,
  Settings,
  Truck,
  DollarSign
} from "lucide-react";

const MainLayout = ({ children }) => {
  const { isAuthenticated, role, logout } = useAuth();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const renderRoleBasedNavigation = () => {
    if (!isAuthenticated) {
      return null;
    }

    switch (role) {
      case "vendor":
        return (
          <div className="container mx-auto px-4 py-2 border-b">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/vendor/dashboard">
                    <div className={`${navigationMenuTriggerStyle()} ${isActive("/vendor/dashboard") ? "bg-accent text-accent-foreground" : ""}`}>
                      <Home className="w-4 h-4 mr-2" /> Dashboard
                    </div>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/vendor/products">
                    <div className={`${navigationMenuTriggerStyle()} ${isActive("/vendor/products") ? "bg-accent text-accent-foreground" : ""}`}>
                      <Package className="w-4 h-4 mr-2" /> Products
                    </div>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/vendor/orders">
                    <div className={`${navigationMenuTriggerStyle()} ${isActive("/vendor/orders") ? "bg-accent text-accent-foreground" : ""}`}>
                      <ShoppingBag className="w-4 h-4 mr-2" /> Orders
                    </div>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/vendor/settings">
                    <div className={`${navigationMenuTriggerStyle()} ${isActive("/vendor/settings") ? "bg-accent text-accent-foreground" : ""}`}>
                      <Settings className="w-4 h-4 mr-2" /> Settings
                    </div>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        );

      case "delivery":
        return (
          <div className="container mx-auto px-4 py-2 border-b">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/delivery/dashboard">
                    <div className={`${navigationMenuTriggerStyle()} ${isActive("/delivery/dashboard") ? "bg-accent text-accent-foreground" : ""}`}>
                      <Home className="w-4 h-4 mr-2" /> Dashboard
                    </div>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/delivery/orders">
                    <div className={`${navigationMenuTriggerStyle()} ${isActive("/delivery/orders") ? "bg-accent text-accent-foreground" : ""}`}>
                      <Truck className="w-4 h-4 mr-2" /> Orders
                    </div>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/delivery/earnings">
                    <div className={`${navigationMenuTriggerStyle()} ${isActive("/delivery/earnings") ? "bg-accent text-accent-foreground" : ""}`}>
                      <DollarSign className="w-4 h-4 mr-2" /> Earnings
                    </div>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/delivery/profile">
                    <div className={`${navigationMenuTriggerStyle()} ${isActive("/delivery/profile") ? "bg-accent text-accent-foreground" : ""}`}>
                      <User className="w-4 h-4 mr-2" /> Profile
                    </div>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        );

      case "customer":
        return (
          <div className="container mx-auto px-4 py-2 border-b overflow-auto">
            <NavigationMenu>
              <NavigationMenuList className="flex-wrap justify-start md:justify-center">
                <NavigationMenuItem>
                  <Link to="/">
                    <div className={`${navigationMenuTriggerStyle()} ${isActive("/") ? "bg-accent text-accent-foreground" : ""}`}>
                      <Home className="w-4 h-4 mr-2" /> Home
                    </div>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/stores">
                    <div className={`${navigationMenuTriggerStyle()} ${isActive("/stores") ? "bg-accent text-accent-foreground" : ""}`}>
                      <Store className="w-4 h-4 mr-2" /> Stores
                    </div>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/orders">
                    <div className={`${navigationMenuTriggerStyle()} ${isActive("/orders") ? "bg-accent text-accent-foreground" : ""}`}>
                      <Clock className="w-4 h-4 mr-2" /> My Orders
                    </div>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/profile">
                    <div className={`${navigationMenuTriggerStyle()} ${isActive("/profile") ? "bg-accent text-accent-foreground" : ""}`}>
                      <User className="w-4 h-4 mr-2" /> Profile
                    </div>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {renderRoleBasedNavigation()}
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
