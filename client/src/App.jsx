import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

// Pages
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Cart from "@/pages/Cart";
import ProductDetail from "@/pages/ProductDetail";
import OrderDetail from "@/pages/OrderDetail";
import Orders from "@/pages/Orders";
import Profile from "@/pages/Profile";
import Notifications from "@/pages/Notifications";
import Stores from "@/pages/Stores";
import CategoryDetail from "@/pages/CategoryDetail";
import VendorDashboard from "@/pages/vendor/Dashboard";
import VendorProducts from "@/pages/vendor/Products";
import VendorOrders from "@/pages/vendor/Orders";
import VendorSettings from "@/pages/vendor/Settings";
import DeliveryDashboard from "@/pages/delivery/Dashboard";
import DeliveryOrders from "@/pages/delivery/Orders";
import DeliveryEarnings from "@/pages/delivery/Earnings";
import DeliveryProfile from "@/pages/delivery/Profile";
import NotFound from "@/pages/NotFound";
import GoogleSuccess from "./pages/googleAuth/GoogleSucess";

const queryClient = new QueryClient();

// Protected route wrapper
const ProtectedRoute = ({ children, requiredRole }) => {
  const { isAuthenticated, user } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && user?.role !== requiredRole) {
    if (user?.role === "customer") {
      return <Navigate to="/" replace />;
    } else if (user?.role === "vendor") {
      return <Navigate to="/vendor/dashboard" replace />;
    } else if (user?.role === "delivery") {
      return <Navigate to="/delivery/dashboard" replace />;
    }
  }

  return <>{children}</>;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/stores" element={<Stores />} />
      <Route path="/category/:id" element={<CategoryDetail />} />

      {/* Customer Routes */}
      <Route path="/cart" element={
        <ProtectedRoute requiredRole="customer">
          <Cart />
        </ProtectedRoute>
      } />
      <Route path="/orders" element={
        <ProtectedRoute requiredRole="customer">
          <Orders />
        </ProtectedRoute>
      } />
      <Route path="/order/:id" element={
        <ProtectedRoute requiredRole="customer">
          <OrderDetail />
        </ProtectedRoute>
      } />
      <Route path="/profile" element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      } />
      <Route path="/notifications" element={
        <ProtectedRoute>
          <Notifications />
        </ProtectedRoute>
      } />

      {/* Vendor Routes */}
      <Route path="/vendor/dashboard" element={
        <ProtectedRoute requiredRole="vendor">
          <VendorDashboard />
        </ProtectedRoute>
      } />
      <Route path="/vendor/products" element={
        <ProtectedRoute requiredRole="vendor">
          <VendorProducts />
        </ProtectedRoute>
      } />
      <Route path="/vendor/orders" element={
        <ProtectedRoute requiredRole="vendor">
          <VendorOrders />
        </ProtectedRoute>
      } />
      <Route path="/vendor/settings" element={
        <ProtectedRoute requiredRole="vendor">
          <VendorSettings />
        </ProtectedRoute>
      } />

      {/* Delivery Partner Routes */}
      <Route path="/delivery/dashboard" element={
        <ProtectedRoute requiredRole="delivery">
          <DeliveryDashboard />
        </ProtectedRoute>
      } />
      <Route path="/delivery/orders" element={
        <ProtectedRoute requiredRole="delivery">
          <DeliveryOrders />
        </ProtectedRoute>
      } />
      <Route path="/delivery/earnings" element={
        <ProtectedRoute requiredRole="delivery">
          <DeliveryEarnings />
        </ProtectedRoute>
      } />
      <Route path="/delivery/profile" element={
        <ProtectedRoute requiredRole="delivery">
          <DeliveryProfile />
        </ProtectedRoute>
      } />

      {/* Catch-all route for Not Found */}
      <Route path="*" element={<NotFound />} />
       <Route path="/google-success" element={<GoogleSuccess/>}/>
    </Routes>
   
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
          <Toaster />
          <Sonner />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
