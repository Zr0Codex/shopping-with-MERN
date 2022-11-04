import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './router/productRoutes.js';
import userRoutes from './router/userRoutes.js';
import { notFound, errorHandler } from './errorMiddleware/errorMiddleware.js';
import path from 'path';

dotenv.config();
connectDB();

const app = express();
const __dirname = path.resolve();

app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('API is running');
  });
}

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV;

app.listen(
  PORT,
  console.log(`Server running at environment ${ENV} port ${PORT}`)
);
