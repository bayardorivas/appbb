import mongoose from "mongoose";

try {
  const db = await mongoose.connect("mongodb://127.0.0.1/badbank");
  console.log(`connected ${db.connection.name}`);
} catch (error) {
  console.log(error);
};
