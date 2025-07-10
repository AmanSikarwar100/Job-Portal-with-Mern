// utils is generally for Multers, Cloudinary etc
// Connecting DataBase.....
// DataBase.js

import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected...");
    } catch (error){
        console.log("Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
};

export default connectDB;



