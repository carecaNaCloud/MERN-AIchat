import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import routes from "./routes";
import cors from 'cors';

const port = process.env.PORT || 5000;
const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));

// Remove for production
app.use(morgan("dev"));

app.use("/api/v1", routes);


export { app, port };
