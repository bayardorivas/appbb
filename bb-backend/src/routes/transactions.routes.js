import { Router } from "express";
import { getTransactions, createTransaction } from "../controllers/transactions.controller.js";

const router = Router();

/**
 * @swagger
 * /api/v1/transactions/:
 *   get:
 *     summary: Get a complete list of users with transactions
 *     responses:
 *       200:
 *         description: Success
 *
 */
router.get("/", getTransactions);

/**
 * @swagger
 * /api/v1/transactions/:
 *   post:
 *     summary: Creates a transaction
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: createAccount
 *         description: Transaction
 *         schema:
 *           type: object
 *           required:
 *             - createAccount
 *           properties:
 *             user:
 *               type: String
 *               description: The user firebaseId
 *             transactionType:
 *               type: String
 *               description: The user name
 *             amount:
 *               type: integer
 *               description: The user email
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Data sent incorrect
 *       500:
 *         description: Server error
 *
 */
router.post("/", createTransaction);

export default router;
