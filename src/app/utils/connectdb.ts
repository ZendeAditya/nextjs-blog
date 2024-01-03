import mongoose from "mongoose";

export const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);
    console.log("db connected");
  } catch (error) {
    console.log("Faild to connect db", error);
  }
};
