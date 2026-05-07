import mongoose, { Schema, Document } from "mongoose";

export interface IFood extends Document {
  title: string;
  quantity: string;
  location: string;
  expiry: Date;
  status: "available" | "picked";
}

const FoodSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    quantity: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    expiry: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: ["available", "picked"],
      default: "available",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Food ||
  mongoose.model<IFood>("Food", FoodSchema);