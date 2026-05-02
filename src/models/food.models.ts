

import mongoose, { Document, Schema } from "mongoose";

interface IFood extends Document {
  foodName: string;
  quantity: string;
  expiryTime: Date;
  description?: string;
  donor: mongoose.Types.ObjectId;
  pickupLocation: string;
  status: "available" | "requested" | "picked" | "expired";
  createdAt: Date;
  updatedAt: Date;
}

const foodSchema: Schema<IFood> = new Schema(
  {
    foodName: {
        type: String,
        required: true
    },
    quantity: { 
        type: String, 
        required: true 
    },
    expiryTime: { 
        type: Date, 
        required: true 
    },
    description: { 
        type: String 
    },
    donor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    pickupLocation: { 
        type: String, 
        required: true },
    status: {
      type: String,
      enum: ["available", "requested", "picked", "expired"],
      default: "available",
    },
  },
  { timestamps: true }
);

const Food = mongoose.models.Food || mongoose.model<IFood>("Food", foodSchema);
export default Food