import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './router/productRoutes.js';
import { notFound, errorHandler } from './errorMiddleware/errorMiddleware.js';

dotenv.config();
connectDB();

const app = express();

app.use('/api/products', productRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV;

app.listen(
  PORT,
  console.log(`Server running at environment ${ENV} port ${PORT}`)
);
