import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

const PreferencesTab = () => {
  const { logout } = useAuth();
  const [isAvailableForWork, setIsAvailableForWork] = useState(true);
  
  const handleUpdateAvailability = () => {
    setIsAvailableForWork(!isAvailableForWork);
    toast({
      title: `You are now ${!isAvailableForWork ? 'Available' : 'Unavailable'}`,
      description: `You have updated your availability status to ${!isAvailableForWork ? 'available' : 'unavailable'} for deliveries.`,
    });
  };
  
  const handleLogout = () => {
    logout();
    window.location.href = "/login";
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Delivery Preferences</CardTitle>
        <CardDescription>
          Set your work availability and delivery preferences.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">Availability Status</h3>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm">Are you available to accept delivery requests?</p>
                <p className="text-xs text-muted-foreground">
                  {isAvailableForWork 
                    ? "You are currently available to receive delivery requests" 
                    : "You are currently not receiving delivery requests"}
                </p>
              </div>
              <Switch 
                checked={isAvailableForWork}
                onCheckedChange={handleUpdateAvailability}
              />
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Working Hours</h3>
            <div className="grid grid-cols-3 gap-2 mb-2">
              <div className="text-center p-2 border rounded-md cursor-pointer hover:bg-muted">
                <p className="font-medium">Monday</p>
                <p className="text-xs">10:00 - 18:00</p>
              </div>
              <div className="text-center p-2 border rounded-md cursor-pointer hover:bg-muted">
                <p className="font-medium">Tuesday</p>
                <p className="text-xs">10:00 - 18:00</p>
              </div>
              <div className="text-center p-2 border rounded-md cursor-pointer hover:bg-muted">
                <p className="font-medium">Wednesday</p>
                <p className="text-xs">Off</p>
              </div>
              <div className="text-center p-2 border rounded-md cursor-pointer hover:bg-muted">
                <p className="font-medium">Thursday</p>
                <p className="text-xs">12:00 - 20:00</p>
              </div>
              <div className="text-center p-2 border rounded-md cursor-pointer hover:bg-muted">
                <p className="font-medium">Friday</p>
                <p className="text-xs">12:00 - 20:00</p>
              </div>
              <div className="text-center p-2 border rounded-md cursor-pointer hover:bg-muted">
                <p className="font-medium">Saturday</p>
                <p className="text-xs">14:00 - 22:00</p>
              </div>
              <div className="text-center p-2 border rounded-md cursor-pointer hover:bg-muted">
                <p className="font-medium">Sunday</p>
                <p className="text-xs">Off</p>
              </div>
            </div>
            <Button variant="outline" size="sm">Edit Working Hours</Button>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Delivery Radius</h3>
            <div className="space-y-2">
              <p className="text-sm">Maximum distance you're willing to travel for deliveries</p>
              <Select defaultValue="5">
                <SelectTrigger>
                  <SelectValue placeholder="Select radius" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3">3 km</SelectItem>
                  <SelectItem value="5">5 km</SelectItem>
                  <SelectItem value="10">10 km</SelectItem>
                  <SelectItem value="15">15 km</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Button>Save Preferences</Button>
          
          <div className="pt-4 border-t">
            <h3 className="font-medium mb-2">Account Actions</h3>
            <div className="space-y-2">
              <Button variant="outline" className="w-full">
                Change Password
              </Button>
              <Button variant="destructive" className="w-full" onClick={handleLogout}>
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PreferencesTab;
