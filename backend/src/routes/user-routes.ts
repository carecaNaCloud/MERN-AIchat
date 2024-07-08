import { Router } from "express";
import { getAllUsers, userLogin, userSignup, verifyUser } from "./../controllers/user-controller";
import { loginValidator, signupValidator, validate } from "../utils/validator";
import { verifyToken } from "../utils/token-manager";

const route = Router();             // domain/api/v1/user
route.get("/", getAllUsers);
route.post("/signup", validate(signupValidator), userSignup); 
route.post("/login", validate(loginValidator), userLogin); 
route.get("/auth-status", verifyToken, verifyUser)

export default route;
