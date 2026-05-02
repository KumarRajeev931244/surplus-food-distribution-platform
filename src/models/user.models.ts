import mongoose, { Document } from "mongoose";

interface IUser extends Document{
    name:string;
    email:string;
    password?:string;
    role:"donor" | "ngo" | "admin";
    phone:string;
    location:string;
    createdAt:Date;
    updatedAt:Date
}

const userSchema = new mongoose.Schema<IUser>({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String  
    },
    role: {
      type: String,
      enum: ["donor", "ngo", "admin"],
      default: "donor",
    },
    phone: { 
        type: String
    },
    location: { 
        type: String
    }

},{timestamps:true})

const User = mongoose.models.User || mongoose.model("User",userSchema)
export default User