import React from "react";
import MainLayout from "@/layouts/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AccountTab from "@/components/profile/AccountTab";
import AddressesTab from "@/components/profile/AddressesTab";
import PaymentTab from "@/components/profile/PaymentTab";
import NotificationsTab from "@/components/profile/NotificationsTab";

const Profile = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6 max-w-3xl">
        <h1 className="text-2xl font-bold mb-6">My Profile</h1>
        
        <Tabs defaultValue="account" className="space-y-4">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="addresses">Addresses</TabsTrigger>
            <TabsTrigger value="payment">Payment Methods</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          
          <TabsContent value="account">
            <AccountTab />
          </TabsContent>
          
          <TabsContent value="addresses">
            <AddressesTab />
          </TabsContent>
          
          <TabsContent value="payment">
            <PaymentTab />
          </TabsContent>
          
          <TabsContent value="notifications">
            <NotificationsTab />
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Profile;
