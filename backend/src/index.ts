import express, { Express, Request, Response } from "express";
import ProductRouter from "./routes/ProductRouter";
import CartRouter from "./routes/CartRouter";
import NotFoundRouter from "./routes/NotFoundRouter";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/products', ProductRouter);
app.use('/cart', CartRouter);
app.use('*', NotFoundRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});