import { Router } from "express";
import { getAllUsers, userLogin, userSignup } from "./../controllers/user-controller";
import { loginValidator, signupValidator, validate } from "../utils/validator";

const route = Router();             // domain/api/v1/user
route.get("/", getAllUsers);
route.post("/signup", validate(signupValidator), userSignup); 
route.post("/login", validate(loginValidator), userLogin); 

export default route;
