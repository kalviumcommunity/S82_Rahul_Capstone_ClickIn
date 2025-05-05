// import mongoose from "mongoose";

// const UserSchema = new mongoose.Schema(
//   {
//     email:      { type: String, required: true, unique: true },
//     password:   { type: String, required: true },      
//     name:       { type: String, required: true },
//     phone:      String,
//   },
//   { timestamps: true }
// );

// export default mongoose.model("User", UserSchema);

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  phone: String,
  isActivated:{
    type:Boolean,
    default:false
  } ,
  addresses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Address' }]
}, { timestamps: true });

export default mongoose.model("User", UserSchema);
