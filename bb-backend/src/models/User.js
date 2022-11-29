import { model, Schema, ObjectId } from "mongoose";

const UserSchema = new Schema({
  firebaseId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    maxLength: 50,
  },
  email: {
    type: String,
    required: true,
    match:
      /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  },
  balance: {
    type: Number,
    default: 100,
  },
  transactions: [
    {
      type: ObjectId,
      ref: "Transaction",
    },
  ],
});

export default model("User", UserSchema);
