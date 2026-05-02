import mongoose, { Document } from "mongoose";

interface IUser extends Document{
    name:string;
    email:string;
    password:string;
    role:["donor", "ngo", "admin"];
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
        
    }

})