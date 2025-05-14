import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const NotificationsTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
        <CardDescription>
          Manage how we notify you about your orders and promotions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Order Updates</h3>
              <p className="text-sm text-muted-foreground">Notifications about your order status</p>
            </div>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="order-email" className="rounded" defaultChecked />
                <Label htmlFor="order-email">Email</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="order-push" className="rounded" defaultChecked />
                <Label htmlFor="order-push">Push</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="order-sms" className="rounded" />
                <Label htmlFor="order-sms">SMS</Label>
              </div>
            </div>
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Promotions</h3>
              <p className="text-sm text-muted-foreground">Deals and discounts from stores near you</p>
            </div>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="promo-email" className="rounded" defaultChecked />
                <Label htmlFor="promo-email">Email</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="promo-push" className="rounded" />
                <Label htmlFor="promo-push">Push</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="promo-sms" className="rounded" />
                <Label htmlFor="promo-sms">SMS</Label>
              </div>
            </div>
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Newsletter</h3>
              <p className="text-sm text-muted-foreground">Weekly updates and articles</p>
            </div>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="news-email" className="rounded" />
                <Label htmlFor="news-email">Email</Label>
              </div>
            </div>
          </div>
          
          <Button className="mt-4 w-full">Save Preferences</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationsTab;
