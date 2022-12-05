import { model, Schema, ObjectId } from "mongoose";

const TransactionSchema = new Schema({
  date: {
    type: Date,
    default: new Date()
  },
  user: {
    type: ObjectId,
    ref: "User",
  },
  transactionType: {
    type: String,
    enum: ["DEPOSIT", "WITHDRAW"],
    required: true,
  },
  amount: {
    type: Number,
    required: true,
    validate: {
      validator: (value) => {
        return value > 0;
      },
    },
  },

});

export default model("Transaction", TransactionSchema);
