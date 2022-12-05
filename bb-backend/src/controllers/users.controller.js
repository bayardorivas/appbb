import User from "../models/User.js";
import Transaction from "../models/Transaction.js";

// Get specific User with transactions
export const getUser = async (req, res) => {
  try {
    const { firebaseId } = req.params;
    const user = await User.findOne({ firebaseId }).populate("transactions");
    if (!user) return res.status(404).json({ message: "User not found" });
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

// Create a new Account
export const createUser = async (req, res) => {
  try {
    const { firebaseId, name, email } = req.body;
    const newUser = new User({
      firebaseId,
      name,
      email,
    });
    const userCreated = await newUser.save();
    const firstTransaction = new Transaction({
      date: new Date(),
      transactionType: "DEPOSIT",
      amount: 100,
    });

    await firstTransaction.save();
    newUser.transactions.push(firstTransaction);
    await newUser.save();

    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

// Delete Account
// Implemented only for maintenance out of the application
export const deleteUser = async (req, res) => {
  try {
    const { firebaseId } = req.body;
    const userToDelete = await User.deleteOne({ firebaseId });
    return res.status(200).json(userToDelete);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
