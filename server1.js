// Import required packages
const express = require('express');
const mongoose = require('mongoose');

// Create Express application
const app = express();

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost/cityHospital', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Define a schema for your data
const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

// Define a route handler
app.get('/users', async (req, res) => {
  try {
    // Retrieve all users from the database
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error retrieving users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get("/", (req,res)=>{
    res.send("hello")
})

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
