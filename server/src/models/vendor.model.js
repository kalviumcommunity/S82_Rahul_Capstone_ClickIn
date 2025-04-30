import mongoose from "mongoose";

const VendorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  shopName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: String,
  password: {
    type: String,
    required: true
  },
  location: String,
  role: {
    type: String,
    default: "vendor"
  }
}, {
  timestamps: true
});

export default mongoose.model("Vendor", VendorSchema);
