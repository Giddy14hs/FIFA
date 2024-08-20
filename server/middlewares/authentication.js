import jwt from "jsonwebtoken";

const authentication = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer ")) {
      const token = authHeader.split(" ")[1];

      if (token) {
        console.log("Token:", token); // Log the token to see what is being passed

        // Verify the token (using the secret key)
        let decodedData = jwt.verify(token, process.env.JWT_SECRET);

        // Get user ID from the decoded token
        req.userId = decodedData?.id;
      }
    } else {
      return res.status(401).json({ message: "Authentication failed. No token provided." });
    }

    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      console.log("Token has expired");
      return res.status(401).json({ message: "Token has expired" });
    } else {
      console.log("Authentication error:", error);
      return res.status(403).json({ message: "Authentication failed. Invalid token." });
    }
  }
};

export default authentication;

