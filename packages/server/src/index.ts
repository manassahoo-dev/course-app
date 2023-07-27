import express from 'express';
import mongoose from 'mongoose';
import User from './models/User';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Connect to MongoDB
const mongoUri = 'mongodb+srv://root:root@cluster0.ndlfi0b.mongodb.net/';
mongoose
  .connect(mongoUri)
  .then(async () => {
    console.log('Connected to MongoDB');

    const collectionExists = await User.exists();
    if (!collectionExists) {
      await User.createCollection();
      console.log('Users collection created.');
    }
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });
