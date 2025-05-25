import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.NEXT_DB_CONNECT}`,{ dbName: "HouseLease" });
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err.message);
  }
};

export default connectDB;