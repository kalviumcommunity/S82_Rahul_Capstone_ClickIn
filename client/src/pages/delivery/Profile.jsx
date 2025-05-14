import React from "react";
import MainLayout from "@/layouts/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PersonalInfoTab from "@/components/delivery/PersonalInfoTab";
import VehicleDetailsTab from "@/components/delivery/VehicleDetailsTab";
import DocumentsTab from "@/components/delivery/DocumentsTab";
import PreferencesTab from "@/components/delivery/PreferencesTab";

const DeliveryProfile = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6 max-w-3xl">
        <h1 className="text-2xl font-bold mb-6">Delivery Partner Profile</h1>
        
        <Tabs defaultValue="personal" className="space-y-4">
          <TabsList>
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="vehicle">Vehicle Details</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
          </TabsList>
          
          <TabsContent value="personal">
            <PersonalInfoTab />
          </TabsContent>
          
          <TabsContent value="vehicle">
            <VehicleDetailsTab />
          </TabsContent>
          
          <TabsContent value="documents">
            <DocumentsTab />
          </TabsContent>
          
          <TabsContent value="preferences">
            <PreferencesTab />
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default DeliveryProfile;
