import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  phone: String,
  isActivated: {
    type: Boolean,
    default: false
  },
  profileImage: {
    type: String, // Store image filename or path
    default: ''
  },
  addresses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Address' }]
}, { timestamps: true });

export default mongoose.model('User', UserSchema);
