import mongoose from "mongoose";

// OrderItem Schema
const OrderItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",  // Reference to Product model
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

// Order Schema
const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",  
    required: true
  },
  items: [OrderItemSchema],  
  total: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ["pending", "confirmed", "shipped", "delivered", "cancelled"],
    default: "pending"
  },
  deliveryPartner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DeliveryPartner",  
  },
  deliveryAddress: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address",  
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

// Export the Order model
export default mongoose.model("Order", OrderSchema);
