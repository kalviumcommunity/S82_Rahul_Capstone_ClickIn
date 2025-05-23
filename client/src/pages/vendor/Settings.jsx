// import React, { useState } from "react";
// import MainLayout from "@/layouts/MainLayout";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Switch } from "@/components/ui/switch";
// import { Label } from "@/components/ui/label";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { useAuth } from "@/contexts/AuthContext";
// import { toast } from "@/hooks/use-toast";

// const VendorSettings = () => {
//   const { user, logout } = useAuth();

//   // Store details
//   const [storeName, setStoreName] = useState("Fresh Mart");
//   const [storeDescription, setStoreDescription] = useState(
//     "Your local grocery store with the freshest produce and everyday essentials."
//   );
//   const [storeAddress, setStoreAddress] = useState(
//     "123 Main Street, New York, NY 10001"
//   );
//   const [storePhone, setStorePhone] = useState("(555) 123-4567");
//   const [storeEmail, setStoreEmail] = useState(user?.email || "");

//   // Store photo state
//   const [storePhoto, setStorePhoto] = useState(null);
//   const [storePhotoPreview, setStorePhotoPreview] = useState(null);

//   // Business hours
//   const [businessHours, setBusinessHours] = useState({
//     monday: { open: "08:00", close: "21:00", isClosed: false },
//     tuesday: { open: "08:00", close: "21:00", isClosed: false },
//     wednesday: { open: "08:00", close: "21:00", isClosed: false },
//     thursday: { open: "08:00", close: "21:00", isClosed: false },
//     friday: { open: "08:00", close: "21:00", isClosed: false },
//     saturday: { open: "09:00", close: "20:00", isClosed: false },
//     sunday: { open: "10:00", close: "18:00", isClosed: false },
//   });

//   // Delivery settings
//   const [deliveryRadius, setDeliveryRadius] = useState("5");
//   const [minimumOrder, setMinimumOrder] = useState("10");
//   const [deliveryFee, setDeliveryFee] = useState("1.99");
//   const [freeDeliveryThreshold, setFreeDeliveryThreshold] = useState("30");

//   // Notification preferences
//   const [notifyNewOrders, setNotifyNewOrders] = useState(true);
//   const [notifyLowStock, setNotifyLowStock] = useState(true);
//   const [notifyReviews, setNotifyReviews] = useState(false);
//   const [notifyPromotions, setNotifyPromotions] = useState(true);

//   // Handle store photo change and preview
//   const handleStorePhotoChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setStorePhoto(file);
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setStorePhotoPreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleUpdateStoreProfile = (e) => {
//     e.preventDefault();

//     // Example: upload logic would go here (API call with form data including storePhoto)

//     toast({
//       title: "Store Profile Updated",
//       description: "Your store information has been updated successfully.",
//     });
//   };

//   const handleUpdateDeliverySettings = (e) => {
//     e.preventDefault();
//     toast({
//       title: "Delivery Settings Updated",
//       description: "Your delivery settings have been updated successfully.",
//     });
//   };

//   const handleUpdateHours = () => {
//     toast({
//       title: "Business Hours Updated",
//       description: "Your business hours have been updated successfully.",
//     });
//   };

//   const handleUpdateNotifications = () => {
//     toast({
//       title: "Notification Preferences Updated",
//       description: "Your notification preferences have been updated successfully.",
//     });
//   };

//   const updateHours = (day, field, value) => {
//     setBusinessHours({
//       ...businessHours,
//       [day]: {
//         ...businessHours[day],
//         [field]: value,
//       },
//     });
//   };

//   return (
//     <MainLayout>
//       <div className="container mx-auto px-4 py-6">
//         <h1 className="text-2xl font-bold mb-6">Store Settings</h1>

//         <Tabs defaultValue="profile" className="space-y-6">
//           <TabsList className="mb-4">
//             <TabsTrigger value="profile">Store Profile</TabsTrigger>
//             <TabsTrigger value="hours">Business Hours</TabsTrigger>
//             <TabsTrigger value="delivery">Delivery Settings</TabsTrigger>
//             <TabsTrigger value="notifications">Notifications</TabsTrigger>
//           </TabsList>

//           <TabsContent value="profile">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Store Profile</CardTitle>
//                 <CardDescription>
//                   Update your store information and details visible to customers.
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <form onSubmit={handleUpdateStoreProfile} className="space-y-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="storeName">Store Name</Label>
//                     <Input
//                       id="storeName"
//                       value={storeName}
//                       onChange={(e) => setStoreName(e.target.value)}
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="storeDescription">Store Description</Label>
//                     <Textarea
//                       id="storeDescription"
//                       value={storeDescription}
//                       onChange={(e) => setStoreDescription(e.target.value)}
//                       rows={3}
//                     />
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="storeAddress">Address</Label>
//                       <Input
//                         id="storeAddress"
//                         value={storeAddress}
//                         onChange={(e) => setStoreAddress(e.target.value)}
//                       />
//                     </div>

//                     <div className="space-y-2">
//                       <Label htmlFor="storePhone">Phone Number</Label>
//                       <Input
//                         id="storePhone"
//                         value={storePhone}
//                         onChange={(e) => setStorePhone(e.target.value)}
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="storeEmail">Contact Email</Label>
//                     <Input
//                       id="storeEmail"
//                       type="email"
//                       value={storeEmail}
//                       onChange={(e) => setStoreEmail(e.target.value)}
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="storePhoto">Store Photo</Label>
//                     <div className="flex items-center gap-4">
//                       <div className="h-20 w-20 bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
//                         {storePhotoPreview ? (
//                           <img
//                             src={storePhotoPreview}
//                             alt="Store Preview"
//                             className="object-cover h-full w-full"
//                           />
//                         ) : (
//                           <span>Photo</span>
//                         )}
//                       </div>
//                       <input
//                         id="storePhoto"
//                         type="file"
//                         accept="image/*"
//                         onChange={handleStorePhotoChange}
//                         className="hidden"
//                       />
//                       <Button
//                         variant="outline"
//                         type="button"
//                         onClick={() => document.getElementById("storePhoto").click()}
//                       >
//                         Upload Photo
//                       </Button>
//                     </div>
//                   </div>

//                   <Button type="submit">Save Changes</Button>
//                 </form>
//               </CardContent>
//             </Card>
//           </TabsContent>

//           {/* Other tabs unchanged */}
//           <TabsContent value="hours">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Business Hours</CardTitle>
//                 <CardDescription>
//                   Set your store's operating hours to let customers know when you're open.
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-4">
//                   {Object.keys(businessHours).map((day) => (
//                     <div key={day} className="grid grid-cols-8 items-center">
//                       <div className="col-span-2 sm:col-span-1 capitalize font-medium">
//                         {day}
//                       </div>
//                       <div className="col-span-5 sm:col-span-6 flex items-center gap-2">
//                         {!businessHours[day].isClosed ? (
//                           <>
//                             <Input
//                               type="time"
//                               value={businessHours[day].open}
//                               onChange={(e) => updateHours(day, "open", e.target.value)}
//                               className="w-32"

import React, { useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";

const VendorSettings = () => {
  const { user, logout } = useAuth();

  // Store details
  const [storeName, setStoreName] = useState("Fresh Mart");
  const [storeDescription, setStoreDescription] = useState(
    "Your local grocery store with the freshest produce and everyday essentials."
  );
  const [storeAddress, setStoreAddress] = useState(
    "123 Main Street, New York, NY 10001"
  );
  const [storePhone, setStorePhone] = useState("(555) 123-4567");
  const [storeEmail, setStoreEmail] = useState(user?.email || "");

  // Store photo state
  const [storePhoto, setStorePhoto] = useState(null);
  const [storePhotoPreview, setStorePhotoPreview] = useState(null);

  // Business hours
  const [businessHours, setBusinessHours] = useState({
    monday: { open: "08:00", close: "21:00", isClosed: false },
    tuesday: { open: "08:00", close: "21:00", isClosed: false },
    wednesday: { open: "08:00", close: "21:00", isClosed: false },
    thursday: { open: "08:00", close: "21:00", isClosed: false },
    friday: { open: "08:00", close: "21:00", isClosed: false },
    saturday: { open: "09:00", close: "20:00", isClosed: false },
    sunday: { open: "10:00", close: "18:00", isClosed: false },
  });

  // Delivery settings
  const [deliveryRadius, setDeliveryRadius] = useState("5");
  const [minimumOrder, setMinimumOrder] = useState("10");
  const [deliveryFee, setDeliveryFee] = useState("1.99");
  const [freeDeliveryThreshold, setFreeDeliveryThreshold] = useState("30");

  // Notification preferences
  const [notifyNewOrders, setNotifyNewOrders] = useState(true);
  const [notifyLowStock, setNotifyLowStock] = useState(true);
  const [notifyReviews, setNotifyReviews] = useState(false);
  const [notifyPromotions, setNotifyPromotions] = useState(true);

  // Handle store photo change and preview
  const handleStorePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setStorePhoto(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setStorePhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdateStoreProfile = (e) => {
    e.preventDefault();

    // Example: upload logic would go here (API call with form data including storePhoto)

    toast({
      title: "Store Profile Updated",
      description: "Your store information has been updated successfully.",
    });
  };

  const handleUpdateDeliverySettings = (e) => {
    e.preventDefault();
    toast({
      title: "Delivery Settings Updated",
      description: "Your delivery settings have been updated successfully.",
    });
  };

  const handleUpdateHours = () => {
    toast({
      title: "Business Hours Updated",
      description: "Your business hours have been updated successfully.",
    });
  };

  const handleUpdateNotifications = () => {
    toast({
      title: "Notification Preferences Updated",
      description: "Your notification preferences have been updated successfully.",
    });
  };

  const updateHours = (day, field, value) => {
    setBusinessHours({
      ...businessHours,
      [day]: {
        ...businessHours[day],
        [field]: value,
      },
    });
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Store Settings</h1>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="mb-4">
            <TabsTrigger value="profile">Store Profile</TabsTrigger>
            <TabsTrigger value="hours">Business Hours</TabsTrigger>
            <TabsTrigger value="delivery">Delivery Settings</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Store Profile</CardTitle>
                <CardDescription>
                  Update your store information and details visible to customers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleUpdateStoreProfile} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="storeName">Store Name</Label>
                    <Input
                      id="storeName"
                      value={storeName}
                      onChange={(e) => setStoreName(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="storeDescription">Store Description</Label>
                    <Textarea
                      id="storeDescription"
                      value={storeDescription}
                      onChange={(e) => setStoreDescription(e.target.value)}
                      rows={3}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="storeAddress">Address</Label>
                      <Input
                        id="storeAddress"
                        value={storeAddress}
                        onChange={(e) => setStoreAddress(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="storePhone">Phone Number</Label>
                      <Input
                        id="storePhone"
                        value={storePhone}
                        onChange={(e) => setStorePhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="storeEmail">Contact Email</Label>
                    <Input
                      id="storeEmail"
                      type="email"
                      value={storeEmail}
                      onChange={(e) => setStoreEmail(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="storePhoto">Store Photo</Label>
                    <div className="flex items-center gap-4">
                      <div className="h-20 w-20 bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
                        {storePhotoPreview ? (
                          <img
                            src={storePhotoPreview}
                            alt="Store Preview"
                            className="object-cover h-full w-full"
                          />
                        ) : (
                          <span>Photo</span>
                        )}
                      </div>
                      <input
                        id="storePhoto"
                        type="file"
                        accept="image/*"
                        onChange={handleStorePhotoChange}
                        className="hidden"
                      />
                      <Button
                        variant="outline"
                        type="button"
                        onClick={() => document.getElementById("storePhoto").click()}
                      >
                        Upload Photo
                      </Button>
                    </div>
                  </div>

                  <Button type="submit">Save Changes</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Other tabs unchanged */}
          <TabsContent value="hours">
            <Card>
              <CardHeader>
                <CardTitle>Business Hours</CardTitle>
                <CardDescription>
                  Set your store's operating hours to let customers know when you're open.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.keys(businessHours).map((day) => (
                    <div key={day} className="grid grid-cols-8 items-center">
                      <div className="col-span-2 sm:col-span-1 capitalize font-medium">
                        {day}
                      </div>
                      <div className="col-span-5 sm:col-span-6 flex items-center gap-2">
                        {!businessHours[day].isClosed ? (
                          <>
                            <Input
                              type="time"
                              value={businessHours[day].open}
                              onChange={(e) => updateHours(day, "open", e.target.value)}
                              className="w-32"
                        />
                        <span>to</span>
                        <Input
                          type="time"
                          value={businessHours[day].close}
                          onChange={(e) => updateHours(day, "close", e.target.value)}
                          className="w-32"
                        />
                      </>
                    ) : (
                      <span className="text-gray-500">Closed</span>
                    )}
                  </div>
                  <div className="col-span-1 sm:col-span-1 flex justify-end">
                    <Switch
                      id={`closed-${day}`}
                      checked={businessHours[day].isClosed}
                      onCheckedChange={(checked) =>
                        updateHours(day, "isClosed", checked)
                      }
                    />
                  </div>
                </div>
              ))}
              <Button onClick={handleUpdateHours}>Save Hours</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="delivery">
        <Card>
          <CardHeader>
            <CardTitle>Delivery Settings</CardTitle>
            <CardDescription>
              Configure your delivery radius, fees, and minimum order amounts.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleUpdateDeliverySettings} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="deliveryRadius">Delivery Radius (miles)</Label>
                <Input
                  id="deliveryRadius"
                  type="number"
                  value={deliveryRadius}
                  onChange={(e) => setDeliveryRadius(e.target.value)}
                  min={0}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="minimumOrder">Minimum Order Amount ($)</Label>
                <Input
                  id="minimumOrder"
                  type="number"
                  value={minimumOrder}
                  onChange={(e) => setMinimumOrder(e.target.value)}
                  min={0}
                  step="0.01"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="deliveryFee">Delivery Fee ($)</Label>
                <Input
                  id="deliveryFee"
                  type="number"
                  value={deliveryFee}
                  onChange={(e) => setDeliveryFee(e.target.value)}
                  min={0}
                  step="0.01"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="freeDeliveryThreshold">Free Delivery Threshold ($)</Label>
                <Input
                  id="freeDeliveryThreshold"
                  type="number"
                  value={freeDeliveryThreshold}
                  onChange={(e) => setFreeDeliveryThreshold(e.target.value)}
                  min={0}
                  step="0.01"
                />
              </div>
              <Button type="submit">Save Delivery Settings</Button>
            </form>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="notifications">
        <Card>
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
            <CardDescription>
              Choose which notifications you want to receive.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="notifyNewOrders">New Orders</Label>
                <Switch
                  id="notifyNewOrders"
                  checked={notifyNewOrders}
                  onCheckedChange={setNotifyNewOrders}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="notifyLowStock">Low Stock Alerts</Label>
                <Switch
                  id="notifyLowStock"
                  checked={notifyLowStock}
                  onCheckedChange={setNotifyLowStock}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="notifyReviews">Customer Reviews</Label>
                <Switch
                  id="notifyReviews"
                  checked={notifyReviews}
                  onCheckedChange={setNotifyReviews}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="notifyPromotions">Promotions & Updates</Label>
                <Switch
                  id="notifyPromotions"
                  checked={notifyPromotions}
                  onCheckedChange={setNotifyPromotions}
                />
              </div>

              <Button onClick={handleUpdateNotifications}>Save Notifications</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  </div>
</MainLayout>
  )}

  export default VendorSettings;