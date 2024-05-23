const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import Routes
const partRoutes = require('./routes/parts');
app.use('/api/parts', partRoutes);

// Root route
app.get('/', (req, res) => {
    res.send('Hello, this is the backend for the PartSelect chat agent.');
  });

app.post('/get-ai-message', (req, res) => {
  const userQuery = req.body.query;
  // Add your logic to generate AI message based on userQuery
  const message = {
    role: "assistant",
    content: `You asked: "${userQuery}". Here's the response from the backend.`
  };
  res.json(message);
});

// Connect to Database
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to database'))
    .catch(err => console.error(err));

module.exports = app;