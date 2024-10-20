const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/user");

app.use(cors());
app.use(express.json());

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://adityaatre26:CE1b1hZRaV7PFAjw@cluster0.1mx6n.mongodb.net/Hacktopia"
  );
  console.log("Connected to the database");
};

connectDB();

app.post("/register", async (req, res) => {
  const { email, userName, prnNum, password, designation } = req.body.userData;
  
  const userDoc = await User.create({ email, userName, mobileNum, college });
  res.json(userDoc);
});

app.listen(4000, () => {
  console.log("Connected to the server");
});