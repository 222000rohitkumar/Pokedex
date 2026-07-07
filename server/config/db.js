import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Connecting...");
    console.log(process.env.MONGO_URI);

    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Connected");
    console.log(conn.connection.host);
  } catch (err) {
    console.error(err);
  }
};

export default connectDB;