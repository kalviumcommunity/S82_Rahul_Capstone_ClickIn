import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({
  label:   { type: String, default: "Home" },
  line1:   { type: String, required: true },
  city:    { type: String, required: true },
  pincode: { type: String, required: true },
  user:    { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

export default mongoose.model("Address", AddressSchema);
