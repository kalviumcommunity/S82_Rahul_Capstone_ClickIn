import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard } from "lucide-react";

const PaymentTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Methods</CardTitle>
        <CardDescription>
          Manage your saved payment methods.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="border rounded-lg p-4 relative">
            <Badge className="absolute top-2 right-2">Default</Badge>
            <div className="flex items-center">
              <CreditCard className="h-8 w-8 mr-2" />
              <div>
                <h3 className="font-medium">Visa ending in 4242</h3>
                <p className="text-sm text-muted-foreground">Expires 05/2028</p>
              </div>
            </div>
            <div className="mt-2 flex space-x-2">
              <Button variant="outline" size="sm">Edit</Button>
              <Button variant="outline" size="sm">Delete</Button>
            </div>
          </div>
          
          <div className="border rounded-lg p-4">
            <div className="flex items-center">
              <CreditCard className="h-8 w-8 mr-2" />
              <div>
                <h3 className="font-medium">Mastercard ending in 5555</h3>
                <p className="text-sm text-muted-foreground">Expires 08/2026</p>
              </div>
            </div>
            <div className="mt-2 flex space-x-2">
              <Button variant="outline" size="sm">Edit</Button>
              <Button variant="outline" size="sm">Delete</Button>
              <Button variant="outline" size="sm">Set as Default</Button>
            </div>
          </div>
          
          <Button className="w-full">
            <CreditCard className="mr-2 h-4 w-4" /> Add New Payment Method
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentTab;
