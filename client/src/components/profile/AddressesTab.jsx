import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

const AddressesTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Delivery Addresses</CardTitle>
        <CardDescription>
          Manage your saved delivery addresses.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="border rounded-lg p-4 relative">
            <Badge className="absolute top-2 right-2">Default</Badge>
            <h3 className="font-medium">Home</h3>
            <p className="text-sm text-muted-foreground">
              123 Main Street, Apt 4B<br />
              New York, NY 10001
            </p>
            <div className="mt-2 flex space-x-2">
              <Button variant="outline" size="sm">Edit</Button>
              <Button variant="outline" size="sm">Delete</Button>
            </div>
          </div>
          
          <div className="border rounded-lg p-4">
            <h3 className="font-medium">Work</h3>
            <p className="text-sm text-muted-foreground">
              456 Park Avenue<br />
              New York, NY 10022
            </p>
            <div className="mt-2 flex space-x-2">
              <Button variant="outline" size="sm">Edit</Button>
              <Button variant="outline" size="sm">Delete</Button>
              <Button variant="outline" size="sm">Set as Default</Button>
            </div>
          </div>
          
          <Button className="w-full">
            <MapPin className="mr-2 h-4 w-4" /> Add New Address
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AddressesTab;
