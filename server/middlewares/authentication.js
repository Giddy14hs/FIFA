import jwt from "jsonwebtoken"

const authentication = async (req, res, next) => {
  try {

    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer ")){
    
      const token = authHeader.split(" ")[1];

    if(token){
      //verify the token(use the same password secret)
      let decodedData = jwt.verify(token, "1234")

      //to get user id from the decoded token
      req.userId = decodedData?.id;
    }
    }
    next();

  } catch (error) {
    // Handle TokenExpiredError separately
    if (error.name === "TokenExpiredError") {
      // Handle expired token error
      console.log("Token has expired");
      // Optionally, you can send a response indicating that the token has expired
      // res.status(401).json({ message: "Token has expired" });
    } else {
      // Handle other errors
      console.log(error);
    }
  }
}

export default authentication;