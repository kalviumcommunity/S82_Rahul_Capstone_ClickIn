import mongoose from "mongoose";

const DeliveryPartnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: String,
  vehicleType: String,
  currentLocation: String,
  isAvailable: {
    type: Boolean,
    default: true
  },
  role: {
    type: String,
    default: "delivery"
  }
}, {
  timestamps: true
});

export default mongoose.model("DeliveryPartner", DeliveryPartnerSchema);
