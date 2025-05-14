import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Lock, LogOut } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const AccountTab = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState("555-123-4567"); // Mock data
  const [location, setLocation] = useState(user?.location || "");
  
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    // In a real app, this would update the user profile
    toast({
      title: "Profile Updated",
      description: "Your profile information has been updated successfully.",
    });
  };
  
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Information</CardTitle>
        <CardDescription>
          Update your personal information here.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleUpdateProfile} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input 
              id="phone" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="location">Default Location</Label>
            <Input 
              id="location" 
              placeholder="Pincode or Area"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          
          <Button type="submit">Update Profile</Button>
        </form>
        
        <Separator className="my-6" />
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2 flex items-center">
              <Lock className="mr-2 h-4 w-4" /> Password & Security
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              Manage your password and security settings
            </p>
            <Button variant="outline">Change Password</Button>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2 flex items-center">
              <LogOut className="mr-2 h-4 w-4" /> Sign Out
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              Log out of your account on this device
            </p>
            <Button variant="destructive" onClick={handleLogout}>
              Sign Out
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccountTab;
