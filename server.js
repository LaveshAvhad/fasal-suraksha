// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Create an instance of express app
const app = express();

// Use body-parser to parse incoming request bodies
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mongo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Define the schema for storing user details
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true, unique: true },
  otp: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true }
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

// Handle the POST request to sign up
app.post('/signup', async (req, res) => {
  const { name, mobile, otp, username, password, confirmPassword } = req.body;

  // Validate required fields
  if (!name || !mobile || !otp || !username || !password || !confirmPassword) {
    return res.status(400).json({ message: 'Please fill in all details' });
  }

  // Check if the passwords match
  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  try {
    // Create a new user instance
    const user = new User({
      name,
      mobile,
      otp,
      username,
      password,
      confirmPassword,
    });

    // Save the user to the database
    await user.save();

    res.status(201).json({ message: 'Sign up successful' });
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate key error (username or mobile already exists)
      return res.status(400).json({ message: 'Username or mobile number already exists' });
    }
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server on port 5000
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
