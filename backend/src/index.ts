import express, { Express, Request, Response } from "express";
import ProductRouter from "./routes/ProductRouter";
import CartRouter from "./routes/CartRouter";
import SellerRouter from "./routes/SellerRouter";
import NotFoundRouter from "./routes/NotFoundRouter";
import dotenv from "dotenv";
import { seedDatabase } from "./database/SeedData";

dotenv.config();

const environment = process.env.ENVIRONMENT;

if (environment === 'dev') {
  seedDatabase();
}

const requestLogger = (req: Request, res: Response, next: Function) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${res.statusCode} in ${duration}ms`);
  });
  next();
};

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(requestLogger);
app.use('/products', ProductRouter);
app.use('/cart', CartRouter);
app.use('/seller', SellerRouter);
app.use('*', NotFoundRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});