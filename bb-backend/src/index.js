import express from "express";
import cors from "cors";
import transactionRoutes from "./routes/transactions.routes.js";
import userRoutes from "./routes/users.routes.js";
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import dbConnection from "./database.js";
import "dotenv/config";

const port = 2500;
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));
dbConnection();

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "MIT Bad Bank Project - API Documentation",
      version: "1.0.0",
    },
  },
  apis: ["./src/routes/transactions.routes.js", "./src/routes/users.routes.js"],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use("/api/v1/transactions", transactionRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use((req, res, next) => {
  return res.status(404).json({ message: "Not found" });
});
app.listen(port, () => console.log(`Web server listening on port ${port}`));
