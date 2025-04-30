import mongoose from "mongoose";

// Product Schema
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true
  },
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vendor",  // Reference to Vendor model
    required: true
  },
  description: {
    type: String
  },
  imageUrl: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date
  }
}, {
  timestamps: true
});

// Export the Product model
export default mongoose.model("Product", ProductSchema);
