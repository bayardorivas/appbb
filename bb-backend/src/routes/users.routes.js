import { Router } from "express";
import {
  getUser,
  createUser,
  deleteUser,
} from "../controllers/users.controller.js";

const router = Router();
/**
 * @swagger
 * /api/v1/users/{firebaseId}:
 *   get:
 *     summary: Get one user with transaction
 *     parameters:
 *       - in: path
 *         name: firebaseId
 *         schema:
 *           type: String
 *         required: true
 *         description: The user Firebase ID
 *     description: Get one user with his transactions
 *     responses:
 *       200:
 *         description: Success
 *
 */
router.get("/:firebaseId", getUser);
/**
 * @swagger
 * /api/v1/users/:
 *   post:
 *     summary: Creates a new user
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: newUser
 *         description: Data of the user to create
 *         schema:
 *           type: object
 *           required:
 *             - newUser
 *           properties:
 *             firebaseId:
 *               type: String
 *               description: The user firebaseId
 *             name:
 *               type: String
 *               description: The user name
 *             email:
 *               type: String
 *               description: The user email
 *     responses:
 *       200:
 *         description: Success
 *
 */
router.post("/", createUser);
/**
 * @swagger
 * /api/v1/users/:
 *   delete:
 *     summary: Delete a user only for maintenance
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: deleteUser
 *         description: Id of user to remove from DB
 *         schema:
 *           type: object
 *           required:
 *             - newUser
 *           properties:
 *             firebaseId:
 *               type: String
 *               description: The user firebaseId
 *     responses:
 *       200:
 *         description: Success
 *
 */
router.delete("/", deleteUser);

export default router;
