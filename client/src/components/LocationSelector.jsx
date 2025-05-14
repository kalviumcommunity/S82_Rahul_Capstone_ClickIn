import React, { useState } from "react";
import { Check, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Mock list of available pin codes
const AVAILABLE_PIN_CODES = [
  "110001", "110002", "110003", "110004", "110005",
  "110006", "110007", "110008", "110009", "110010",
];

const LocationSelector = () => {
  const { user, setUserLocation } = useAuth();
  const [pinCode, setPinCode] = useState(user?.location || "");
  const [isOpen, setIsOpen] = useState(!user?.location);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    
    if (pinCode.length !== 6 || !/^\d+$/.test(pinCode)) {
      setError("Please enter a valid 6-digit pin code");
      return;
    }
    
    if (!AVAILABLE_PIN_CODES.includes(pinCode)) {
      setError("Service not available in this location");
      return;
    }
    
    setUserLocation(pinCode);
    setIsOpen(false);
  };

  return (
    <div className="flex items-center">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="ghost" className="flex items-center text-gray-600 hover:text-instait-purple">
            <MapPin className="h-4 w-4 mr-2" />
            <span>
              {user?.location ? `Deliver to: ${user.location}` : "Select your location"}
            </span>
          </Button>
        </DialogTrigger>
        
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter your delivery location</DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            <div className="space-y-2">
              <Input
                placeholder="Enter 6-digit PIN code"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
                maxLength={6}
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
            
            <Button type="submit" className="w-full">
              Confirm Location
            </Button>
            
            <div className="text-sm text-gray-500">
              <p>Available locations for demo:</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {AVAILABLE_PIN_CODES.map((code) => (
                  <Button 
                    key={code} 
                    variant="outline" 
                    size="sm" 
                    type="button"
                    className={pinCode === code ? "border-instait-purple text-instait-purple" : ""}
                    onClick={() => setPinCode(code)}
                  >
                    {code}
                    {pinCode === code && <Check className="ml-1 h-3 w-3" />}
                  </Button>
                ))}
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LocationSelector;
