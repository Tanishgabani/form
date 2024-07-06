import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const dbConnection = await mongoose.connect(
      "mongodb://localhost:27017/user"
    );
    console.log("Database connected successfully !!");
  } catch (error) {
    console.log("Something went wrong to connect with database : ", error);
  }
};

export default connectDB;
