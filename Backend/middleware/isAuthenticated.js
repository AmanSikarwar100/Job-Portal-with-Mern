// Middleware-> is work between request and response, when request is generated then middleware is checked and then response is send or make.
import jwt from "jsonwebtoken";

const authenticateToken = async (req, res, next) => {
    try{
        const token = req.cookies.token;
        // Accept token from header
        // const authHeader = req.headers['authorization'];
        // const token = authHeader && authHeader.split(' ')[1];
        if(!token){
            console.log("No token provided");
            return res.status(401).json({
                message:"No token provided",
                success:false
            });
        }
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded){
            console.log("Invalid token");
            return(
             res.status(401).json({
                message: "Invalid token"
            }), (success = false)
            )
        }
        req.id = decoded.userId;
        next();

    }catch(error){
        console.log("Error verifying token:", error);
        return res.status(401).json({
            message: "Invalid token"
        });
    }
};

export default authenticateToken;
