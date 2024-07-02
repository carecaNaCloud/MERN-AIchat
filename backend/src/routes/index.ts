import { Router } from "express";
import userRoutes from "./user-routes";
import chatRouter from "./chat-router";

const routes = Router();          // domain/api/v1
routes.use("/user", userRoutes); 
routes.use("/chats", chatRouter);   

export default routes;
