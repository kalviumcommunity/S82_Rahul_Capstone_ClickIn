import React, { useState, useEffect } from "react";
import MainLayout from "@/layouts/MainLayout";
import StoreList from "@/components/StoreList";
import LocationSelector from "@/components/LocationSelector";
import CategoryList from "@/components/CategoryList";
import { useAuth } from "@/contexts/AuthContext";

const Stores = () => {
  const { user, setUserLocation } = useAuth();
  const [location, setLocation] = useState(user?.location || "110001");

  // Update location in auth context when it changes
  useEffect(() => {
    if (location && location !== user?.location) {
      setUserLocation(location);
    }
  }, [location, user?.location, setUserLocation]);

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        <LocationSelector
          selectedLocation={location}
          onSelect={handleLocationChange}
        />
        
        <CategoryList />

        <section className="my-8">
          <h2 className="text-xl font-semibold mb-4">Stores Near You</h2>
          <StoreList postalCode={location} />
        </section>
      </div>
    </MainLayout>
  );
};

export default Stores;
