const jwt = require("jsonwebtoken");


const privateKey = "Hasnain3318787833"; // Example private key, replace with your own

const fetchUser = (req, res, next) => {
  // Middleware to fetch user details from the JWT token
    const token = req.header("auth-token");
    if (!token) {
      return res.status(401).json({ error: "Access denied, no token provided" });
    }
    try {
      const decoded = jwt.verify(token, privateKey);
      req.user = decoded.user;
      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ error: "Invalid token" });
    }
}

module.exports = fetchUser;