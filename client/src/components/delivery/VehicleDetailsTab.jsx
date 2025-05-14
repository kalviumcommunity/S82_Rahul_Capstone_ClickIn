import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const VehicleDetailsTab = () => {
  const [vehicle, setVehicle] = useState("bicycle");
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Vehicle Details</CardTitle>
        <CardDescription>
          Provide information about the vehicle you use for deliveries.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="vehicleType">Vehicle Type</Label>
            <Select value={vehicle} onValueChange={setVehicle}>
              <SelectTrigger id="vehicleType">
                <SelectValue placeholder="Select vehicle type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bicycle">Bicycle</SelectItem>
                <SelectItem value="motorcycle">Motorcycle</SelectItem>
                <SelectItem value="scooter">Scooter</SelectItem>
                <SelectItem value="car">Car</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {(vehicle === "motorcycle" || vehicle === "scooter" || vehicle === "car") && (
            <>
              <div className="space-y-2">
                <Label htmlFor="vehicleModel">Make and Model</Label>
                <Input 
                  id="vehicleModel" 
                  placeholder="e.g. Honda CBR 250"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="vehicleLicense">License Plate</Label>
                <Input 
                  id="vehicleLicense" 
                  placeholder="e.g. ABC 1234"
                />
              </div>
            </>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="insuranceInfo">Insurance Information</Label>
            <Input 
              id="insuranceInfo" 
              placeholder="Insurance provider and policy number"
            />
          </div>
          
          <Button type="submit">Save Vehicle Details</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default VehicleDetailsTab;
