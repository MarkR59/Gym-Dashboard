import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import User from './models/User.js'; // Assuming you have this model

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection string
const mongoURI = 'mongodb+srv://mark59:root@gymdash.glklv09.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoURI);

// Register User
app.post('/Register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 8);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).send({ message: 'User created successfully' });
  } catch (error) {
    res.status(400).send(error);
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
