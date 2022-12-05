import admin from "../../firebase.js";

const authMiddleware = (req, res, next) => {
  const idToken = req.headers.authorization;
  try {
    const handleToken = admin.auth().verifyIdToken(idToken);
    next();
  } catch (error) {
    res.status(401).json({message: "Authentication Fail!"});
  }
};

export default authMiddleware;