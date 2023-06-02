import mongoose from "mongoose";

export default async function Connect() {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connected")
}