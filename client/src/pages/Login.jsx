import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import MainLayout from "@/layouts/MainLayout";
import { useAuth } from "@/contexts/AuthContext";
import GoogleSignInButton from "./googleAuth/GoogleSignInButton";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Get the redirect URL from location state or default to homepage
  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const success = await login(email, password, role);

      if (success) {
        // Redirect based on role
        if (role === "customer") {
          navigate(from === "/" ? "/" : from);
        } else if (role === "vendor") {
          navigate("/vendor/dashboard");
        } else if (role === "delivery") {
          navigate("/delivery/dashboard");
        }
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("An error occurred during login");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12 max-w-md">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-center mb-6">Login to Instait</h1>

          <Tabs defaultValue="customer" onValueChange={(value) => setRole(value)}>
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="customer">Customer</TabsTrigger>
              <TabsTrigger value="vendor">Vendor</TabsTrigger>
              <TabsTrigger value="delivery">Delivery</TabsTrigger>
            </TabsList>

            <TabsContent value="customer">
              <p className="text-sm text-gray-500 mb-6">
                Log in to your customer account to order groceries
              </p>
            </TabsContent>

            <TabsContent value="vendor">
              <p className="text-sm text-gray-500 mb-6">
                Vendor portal for managing your store and products
              </p>
            </TabsContent>

            <TabsContent value="delivery">
              <p className="text-sm text-gray-500 mb-6">
                Delivery partner portal for managing deliveries
              </p>
            </TabsContent>
          </Tabs>

          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                <Link to="/forgot-password" className="text-xs text-instait-purple hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>

            <p className="text-center text-sm mt-6">
              Don't have an account?{" "}
              <Link to="/register" className="text-instait-purple hover:underline">
                Sign up
              </Link>

              <GoogleSignInButton/>
            </p>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
