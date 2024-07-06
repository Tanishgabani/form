import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const dbConnection = await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected successfully !!");
  } catch (error) {
    console.log("Something went wrong to connect with database : ", error);
  }
};

export default connectDB;
