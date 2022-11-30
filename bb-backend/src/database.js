import mongoose from "mongoose";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

try {
  // const db = await mongoose.connect("mongodb://127.0.0.1/badbank");
  const db = mongoose.connect(process.env.mongoUrl);
  // console.log(`connected ${db.connection.name}`);
} catch (error) {
  console.log(error);
};
