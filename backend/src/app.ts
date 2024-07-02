import "dotenv/config";
import express from "express";
import morgan from 'morgan';
import routes from './routes';

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Remove for production
app.use(morgan("dev"))

app.use('/api/v1', routes);

export { app, port };
