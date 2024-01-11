import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cors from "cors";
import User from "./models/User.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection string
const mongoURI = process.env.DB_URL;
mongoose.connect(mongoURI);

const authenticateUser = async (username, password) => {
  try {
    const user = await User.findOne({ username });

    if (!user) {
      return false;
    }

    const isMatch = await bcrypt.compare(password, user.password);

    return isMatch;
  } catch (error) {
    console.error("Error in authenticateUser:", error);
    throw error;
  }
};

// Register User
app.post("/Register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 8);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post("/Login", async (req, res) => {
  const { username, password } = req.body;
  const isAuthenticated = await authenticateUser(username, password);

  if (isAuthenticated) {
    const token = jwt.sign({ username: user.username }, process.env.SECRET_KEY); 
    res.status(200).json({ token }); 
  } else {
    res.status(401).json({ message: "Invalid username or password" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
