const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// GET /api/users
app.get("/api/users", (req, res) => {
  // Return an array of users (can be hard-coded or from an array database)
  const users = [
    { id: 1, username: "user1" },
    { id: 2, username: "user2" },
    { id: 3, username: "user3" },
  ];
  res.json(users);
});

// POST /api/register
app.post("/api/register", (req, res) => {
  // Create a user from { username, password } in the request body and respond with the newly created user
  const { username, password } = req.body;
  const newUser = { id: 1, username };
  res.status(201).json(newUser);
});

// POST /api/login
app.post("/api/login", (req, res) => {
  // Check { username, password } in the request body and respond with a welcome message
  const { username, password } = req.body;
  res.send(`Welcome, ${username}!`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
