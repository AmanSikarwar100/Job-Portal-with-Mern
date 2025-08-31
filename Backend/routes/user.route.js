// For Testing Backend
import express from 'express';
import { login, register, logout, updateProfile } from '../controllers/user.controller.js';
import authenticateToken from "../middleware/isAuthenticated.js";
import { singleUpload} from "../middleware/multer.js";
const router = express.Router();

router.route("/register").post(singleUpload, register); // post is a method
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/profile/update").post(authenticateToken, singleUpload, updateProfile);


// now we will create middleware to make sure that only authenticated profile will be update

export default router;