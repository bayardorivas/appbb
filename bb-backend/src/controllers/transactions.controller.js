import Transaction from "../models/Transaction.js";
import User from "../models/User.js";

// Get all Transactions of All users
export const getTransactions = async (req, res) => {
  try {
    const users = await User.find().populate("transactions");
    return res.json(users);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

// Create a new Transaction
export const createTransaction = async (req, res) => {
  try {
    
    const { user, transactionType, amount } = req.body;
    let userLogged = await User.findOne({ _id: user });

    if (transactionType === "WITHDRAW" && userLogged.balance < amount) {
      return res.status(400).json({ message: "No funds enough" });
    }

    const newTransaction = new Transaction({
      user,
      transactionType,
      amount,
    });
    await newTransaction.save();
    userLogged.transactions.push(newTransaction);
    await userLogged.save();

    const isWithdraw = transactionType === "WITHDRAW" ? amount * -1 : amount;

    userLogged.balance += isWithdraw;
    await User.updateOne({ _id:userLogged._id }, { balance:userLogged.balance });
    return res.status(200).json(newTransaction);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

