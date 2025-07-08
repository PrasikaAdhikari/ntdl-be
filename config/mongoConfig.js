import mongoose from "mongoose";
import dotenv from "dotenv";
//for environment variables
dotenv.config();
const mongodbConnection = () => {
  mongoose.connect(process.env.MONGO_URL);
};
export default mongodbConnection;
