import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://admin:admin@cluster0.zylqsdb.mongodb.net/dksh?';
// -------------DB Connection----------------- //


const connectDB = () => {
  try {
    mongoose.set('strictQuery', false);
    mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, connection) => {
      console.log(err || connection);
    });
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;