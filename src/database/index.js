import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    // if (mongoose.connections[0].readyState) return;
    await mongoose.connect("mongodb://localhost:27017/ecommerceData");

    console.log("Database connected successfully");
  } catch (e) {
    console.log(e);
  }
}
